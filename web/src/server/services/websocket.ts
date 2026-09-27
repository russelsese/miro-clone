import { WebSocketServer, WebSocket } from 'ws';
import { IncomingMessage } from 'http';
import { parse as parseCookie } from 'cookie';
import { v4 as uuidv4 } from 'uuid';
import db from '../db/index.js';
import { getUserById } from '../db/users.js';
import { getUserRoleOnBoard, touchBoard } from '../db/boards.js';
import { getBoardObjects, createObject, updateObject, deleteObject } from '../db/objects.js';
import { getShareLinkByToken } from '../db/shareLinks.js';
import type {
  WSMessage,
  CanvasObject,
  PresenceUser,
  UserRole,
  OpPayload,
  CursorPayload,
} from '../../shared/types.js';
import { updateObjectSchema, canvasObjectSchema } from '../../shared/schemas.js';

const HEARTBEAT_INTERVAL = 30000;
const HEARTBEAT_TIMEOUT = 60000;
const CURSOR_THROTTLE = 50;
const OPS_RATE_LIMIT = 50; // ops per second

interface ClientState {
  ws: WebSocket;
  userId: string;
  displayName: string;
  avatarUrl: string | null;
  boardId: string | null;
  role: UserRole | null;
  isAnonymous: boolean;
  color: string;
  lastHeartbeat: number;
  lastCursorBroadcast: number;
  opsThisSecond: number;
  opsSecondStart: number;
}

// Room state
const rooms = new Map<string, Set<ClientState>>();
const clients = new Map<WebSocket, ClientState>();
let globalSeq = 0;

// Presence colors
const PRESENCE_COLORS = [
  '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4',
  '#ffeaa7', '#dfe6e9', '#a29bfe', '#fd79a8',
];

function getNextColor(): string {
  return PRESENCE_COLORS[Math.floor(Math.random() * PRESENCE_COLORS.length)];
}

function parseSession(cookie: string | undefined): { userId?: string; anonymousId?: string; shareToken?: string } {
  if (!cookie) return {};

  try {
    const cookies = parseCookie(cookie);
    const sessionId = cookies['connect.sid'];
    if (!sessionId) return {};

    // Extract session ID from signed cookie
    const sid = sessionId.startsWith('s:')
      ? sessionId.slice(2).split('.')[0]
      : sessionId;

    // Get session from database
    const stmt = db.prepare('SELECT sess FROM sessions WHERE sid = ?');
    const row = stmt.get(sid) as { sess: string } | undefined;

    if (!row) return {};

    const session = JSON.parse(row.sess);
    return {
      userId: session.userId,
      anonymousId: session.anonymousId,
      shareToken: session.shareToken,
    };
  } catch (e) {
    console.error('Session parse error:', e);
    return {};
  }
}

function broadcastToRoom(boardId: string, message: WSMessage, excludeClient?: ClientState) {
  const room = rooms.get(boardId);
  if (!room) return;

  const data = JSON.stringify(message);
  for (const client of room) {
    if (client !== excludeClient && client.ws.readyState === WebSocket.OPEN) {
      client.ws.send(data);
    }
  }
}

function getPresenceUser(client: ClientState): PresenceUser {
  return {
    userId: client.userId,
    displayName: client.displayName,
    avatarUrl: client.avatarUrl,
    color: client.color,
  };
}

function getRoomPresence(boardId: string): PresenceUser[] {
  const room = rooms.get(boardId);
  if (!room) return [];

  const seen = new Set<string>();
  const users: PresenceUser[] = [];

  for (const client of room) {
    if (!seen.has(client.userId)) {
      seen.add(client.userId);
      users.push(getPresenceUser(client));
    }
  }

  return users;
}

function checkRateLimit(client: ClientState): boolean {
  const now = Date.now();
  if (now - client.opsSecondStart >= 1000) {
    client.opsThisSecond = 0;
    client.opsSecondStart = now;
  }

  if (client.opsThisSecond >= OPS_RATE_LIMIT) {
    return false;
  }

  client.opsThisSecond++;
  return true;
}

function handleJoin(client: ClientState, boardId: string) {
  // Leave current room if any
  if (client.boardId) {
    handleLeave(client);
  }

  // Get or create room
  if (!rooms.has(boardId)) {
    rooms.set(boardId, new Set());
  }

  const room = rooms.get(boardId)!;
  room.add(client);
  client.boardId = boardId;

  // Get board objects
  const objects = getBoardObjects(boardId);

  // Get current presence
  const users = getRoomPresence(boardId);

  // Send joined response
  const seq = ++globalSeq;
  client.ws.send(
    JSON.stringify({
      type: 'joined',
      boardId,
      seq,
      payload: {
        objects,
        users,
        seq,
        role: client.role,
      },
    })
  );

  // Broadcast presence to others
  broadcastToRoom(
    boardId,
    {
      type: 'presence',
      boardId,
      payload: {
        event: 'join',
        user: getPresenceUser(client),
      },
    },
    client
  );
}

function handleLeave(client: ClientState) {
  if (!client.boardId) return;

  const room = rooms.get(client.boardId);
  if (room) {
    room.delete(client);

    // Broadcast leave to others
    broadcastToRoom(client.boardId, {
      type: 'presence',
      boardId: client.boardId,
      payload: {
        event: 'leave',
        user: getPresenceUser(client),
      },
    });

    // Clean up empty room
    if (room.size === 0) {
      rooms.delete(client.boardId);
    }
  }

  client.boardId = null;
}

function handleOp(client: ClientState, payload: OpPayload) {
  if (!client.boardId || !client.role) {
    client.ws.send(
      JSON.stringify({
        type: 'error',
        payload: { code: 'NOT_IN_ROOM', message: 'Not in a board room' },
      })
    );
    return;
  }

  // Check permission
  if (client.role !== 'owner' && client.role !== 'editor') {
    client.ws.send(
      JSON.stringify({
        type: 'error',
        payload: { code: 'FORBIDDEN', message: 'You do not have permission to edit' },
      })
    );
    return;
  }

  // Rate limit
  if (!checkRateLimit(client)) {
    client.ws.send(
      JSON.stringify({
        type: 'error',
        payload: { code: 'RATE_LIMIT', message: 'Too many operations' },
      })
    );
    return;
  }

  const { op, objectId, data } = payload;
  const seq = ++globalSeq;

  try {
    let result: CanvasObject | null = null;

    switch (op) {
      case 'create': {
        if (!data || !data.type) {
          throw new Error('Invalid create data');
        }
        const validated = canvasObjectSchema.safeParse(data);
        if (!validated.success) {
          throw new Error(validated.error.errors[0].message);
        }
        result = createObject(
          client.boardId,
          data.type,
          { ...validated.data, id: objectId },
          client.userId
        );
        break;
      }

      case 'update': {
        if (!data) {
          throw new Error('Invalid update data');
        }
        const validated = updateObjectSchema.safeParse(data);
        if (!validated.success) {
          throw new Error(validated.error.errors[0].message);
        }
        result = updateObject(objectId, validated.data, client.userId);
        break;
      }

      case 'delete': {
        const deleted = deleteObject(objectId);
        if (!deleted) {
          throw new Error('Object not found');
        }
        break;
      }
    }

    // Update board's updated_at
    touchBoard(client.boardId);

    // Broadcast to all in room including sender (as ack)
    const message: WSMessage = {
      type: 'op',
      boardId: client.boardId,
      seq,
      payload: {
        op,
        objectId,
        data: result || data,
        clientSeq: payload.clientSeq,
      },
    };

    const room = rooms.get(client.boardId);
    if (room) {
      const msgStr = JSON.stringify(message);
      for (const c of room) {
        if (c.ws.readyState === WebSocket.OPEN) {
          c.ws.send(msgStr);
        }
      }
    }
  } catch (err) {
    console.error('Op error:', err);
    client.ws.send(
      JSON.stringify({
        type: 'error',
        payload: {
          code: 'OP_FAILED',
          message: err instanceof Error ? err.message : 'Operation failed',
          objectId,
        },
      })
    );
  }
}

function handleCursor(client: ClientState, payload: CursorPayload) {
  if (!client.boardId) return;

  // Throttle cursor updates
  const now = Date.now();
  if (now - client.lastCursorBroadcast < CURSOR_THROTTLE) {
    return;
  }
  client.lastCursorBroadcast = now;

  // Broadcast to others (viewers don't need to see cursors typically, but we'll send to all)
  broadcastToRoom(
    client.boardId,
    {
      type: 'cursor',
      boardId: client.boardId,
      payload: {
        userId: client.userId,
        x: payload.x,
        y: payload.y,
      },
    },
    client
  );
}

function handlePresence(client: ClientState, payload: { event: string; objectId?: string }) {
  if (!client.boardId) return;

  if (payload.event === 'editing') {
    broadcastToRoom(
      client.boardId,
      {
        type: 'presence',
        boardId: client.boardId,
        payload: {
          event: 'editing',
          user: {
            ...getPresenceUser(client),
            editing: payload.objectId || undefined,
          },
        },
      },
      client
    );
  }
}

function handleMessage(client: ClientState, data: string) {
  try {
    const message = JSON.parse(data) as WSMessage;

    switch (message.type) {
      case 'join': {
        const boardId = message.boardId;
        if (!boardId) {
          client.ws.send(
            JSON.stringify({
              type: 'error',
              payload: { code: 'INVALID_MESSAGE', message: 'Missing boardId' },
            })
          );
          return;
        }

        // Check role
        let role: UserRole | null = null;

        if (!client.isAnonymous) {
          role = getUserRoleOnBoard(boardId, client.userId);
        }

        // Check share link for anonymous users or users without direct access
        if (!role) {
          const shareToken = message.payload as string | undefined;
          if (shareToken) {
            const shareLink = getShareLinkByToken(shareToken);
            if (shareLink && shareLink.boardId === boardId && shareLink.enabled) {
              role = shareLink.role;
            }
          }
        }

        if (!role) {
          client.ws.send(
            JSON.stringify({
              type: 'error',
              payload: { code: 'FORBIDDEN', message: 'Access denied' },
            })
          );
          return;
        }

        client.role = role;
        handleJoin(client, boardId);
        break;
      }

      case 'op':
        handleOp(client, message.payload as OpPayload);
        break;

      case 'cursor':
        handleCursor(client, message.payload as CursorPayload);
        break;

      case 'presence':
        handlePresence(client, message.payload as { event: string; objectId?: string });
        break;

      case 'ping':
        client.lastHeartbeat = Date.now();
        client.ws.send(JSON.stringify({ type: 'pong' }));
        break;
    }
  } catch (err) {
    console.error('Message handling error:', err);
    client.ws.send(
      JSON.stringify({
        type: 'error',
        payload: { code: 'INVALID_MESSAGE', message: 'Invalid message format' },
      })
    );
  }
}

export function setupWebSocket(wss: WebSocketServer) {
  wss.on('connection', (ws: WebSocket, req: IncomingMessage) => {
    // Parse session from cookie
    const session = parseSession(req.headers.cookie);

    let userId: string;
    let displayName: string;
    let avatarUrl: string | null = null;
    let isAnonymous = false;

    if (session.userId) {
      const user = getUserById(session.userId);
      if (!user) {
        ws.close(1008, 'Invalid session');
        return;
      }
      userId = user.id;
      displayName = user.displayName;
      avatarUrl = user.avatarUrl;
    } else if (session.anonymousId) {
      userId = session.anonymousId;
      displayName = `Guest ${userId.slice(-4)}`;
      isAnonymous = true;
    } else {
      // Allow connection but they'll need share token to join a room
      userId = `anon-${uuidv4()}`;
      displayName = `Guest ${userId.slice(-4)}`;
      isAnonymous = true;
    }

    const client: ClientState = {
      ws,
      userId,
      displayName,
      avatarUrl,
      boardId: null,
      role: null,
      isAnonymous,
      color: getNextColor(),
      lastHeartbeat: Date.now(),
      lastCursorBroadcast: 0,
      opsThisSecond: 0,
      opsSecondStart: Date.now(),
    };

    clients.set(ws, client);

    ws.on('message', (data) => {
      handleMessage(client, data.toString());
    });

    ws.on('close', () => {
      handleLeave(client);
      clients.delete(ws);
    });

    ws.on('error', (err) => {
      console.error('WebSocket error:', err);
      handleLeave(client);
      clients.delete(ws);
    });
  });

  // Heartbeat checker
  setInterval(() => {
    const now = Date.now();
    for (const [ws, client] of clients) {
      if (now - client.lastHeartbeat > HEARTBEAT_TIMEOUT) {
        console.log(`Client ${client.userId} timed out`);
        handleLeave(client);
        clients.delete(ws);
        ws.terminate();
      }
    }
  }, HEARTBEAT_INTERVAL);
}
