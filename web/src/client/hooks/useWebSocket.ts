import { useEffect, useRef, useCallback } from 'react';
import { useBoardStore } from '../store/board';
import type { WSMessage, CanvasObject, PresenceUser, OpPayload } from '../../shared/types';

const WS_URL = `${window.location.protocol === 'https:' ? 'wss:' : 'ws:'}//${window.location.host}/ws`;
const HEARTBEAT_INTERVAL = 25000;
const RECONNECT_DELAY = 1000;
const MAX_RECONNECT_DELAY = 30000;

export function useWebSocket(boardId: string | null, shareToken?: string) {
  const wsRef = useRef<WebSocket | null>(null);
  const heartbeatRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reconnectTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reconnectDelayRef = useRef(RECONNECT_DELAY);

  const {
    setObjects,
    addObject,
    updateObject,
    deleteObject,
    setUsers,
    addUser,
    removeUser,
    updateCursor,
    setConnected,
    setReconnecting,
  } = useBoardStore();

  const connect = useCallback(() => {
    if (!boardId) return;

    // Clear any existing connection
    if (wsRef.current) {
      wsRef.current.close();
    }

    setReconnecting(true);

    const ws = new WebSocket(WS_URL);
    wsRef.current = ws;

    ws.onopen = () => {
      console.log('WebSocket connected');
      setConnected(true);
      setReconnecting(false);
      reconnectDelayRef.current = RECONNECT_DELAY;

      // Join board room
      ws.send(
        JSON.stringify({
          type: 'join',
          boardId,
          payload: shareToken,
        })
      );

      // Start heartbeat
      heartbeatRef.current = setInterval(() => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ type: 'ping' }));
        }
      }, HEARTBEAT_INTERVAL);
    };

    ws.onmessage = (event) => {
      try {
        const message: WSMessage = JSON.parse(event.data);
        handleMessage(message);
      } catch (err) {
        console.error('Failed to parse WebSocket message:', err);
      }
    };

    ws.onclose = () => {
      console.log('WebSocket disconnected');
      setConnected(false);
      cleanup();

      // Reconnect with exponential backoff
      if (boardId) {
        reconnectTimeoutRef.current = setTimeout(() => {
          reconnectDelayRef.current = Math.min(
            reconnectDelayRef.current * 2,
            MAX_RECONNECT_DELAY
          );
          connect();
        }, reconnectDelayRef.current);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }, [boardId, shareToken, setConnected, setReconnecting]);

  const handleMessage = useCallback((message: WSMessage) => {
    switch (message.type) {
      case 'joined': {
        const payload = message.payload as {
          objects: CanvasObject[];
          users: PresenceUser[];
          seq: number;
          role: string;
        };
        setObjects(payload.objects);
        setUsers(payload.users);
        break;
      }

      case 'op': {
        const payload = message.payload as OpPayload & { data?: CanvasObject };
        switch (payload.op) {
          case 'create':
            if (payload.data) {
              addObject(payload.data);
            }
            break;
          case 'update':
            if (payload.data) {
              updateObject(payload.objectId, payload.data);
            }
            break;
          case 'delete':
            deleteObject(payload.objectId);
            break;
        }
        break;
      }

      case 'cursor': {
        const payload = message.payload as { userId: string; x: number; y: number };
        updateCursor(payload.userId, payload.x, payload.y);
        break;
      }

      case 'presence': {
        const payload = message.payload as {
          event: 'join' | 'leave' | 'editing';
          user: PresenceUser;
        };
        switch (payload.event) {
          case 'join':
            addUser(payload.user);
            break;
          case 'leave':
            removeUser(payload.user.userId);
            break;
        }
        break;
      }

      case 'pong':
        // Heartbeat acknowledged
        break;

      case 'error': {
        const payload = message.payload as { code: string; message: string };
        console.error('WebSocket error:', payload.message);
        break;
      }
    }
  }, [setObjects, setUsers, addObject, updateObject, deleteObject, updateCursor, addUser, removeUser]);

  const cleanup = useCallback(() => {
    if (heartbeatRef.current) {
      clearInterval(heartbeatRef.current);
      heartbeatRef.current = null;
    }
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (boardId) {
      connect();
    }

    return () => {
      cleanup();
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, [boardId, connect, cleanup]);

  return wsRef;
}
