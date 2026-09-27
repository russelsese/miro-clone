import db from './index.js';
import { v4 as uuidv4 } from 'uuid';
import type { Board, BoardMember, UserRole } from '../../shared/types.js';

interface BoardRow {
  id: string;
  name: string;
  owner_id: string;
  thumbnail_url: string | null;
  is_template: number;
  deleted_at: number | null;
  created_at: number;
  updated_at: number;
  starred?: number;
  member_count?: number;
  role?: string;
}

interface BoardMemberRow {
  board_id: string;
  user_id: string;
  role: string;
  invited_by: string | null;
  created_at: number;
}

function rowToBoard(row: BoardRow): Board {
  return {
    id: row.id,
    name: row.name,
    ownerId: row.owner_id,
    thumbnailUrl: row.thumbnail_url,
    isTemplate: row.is_template === 1,
    starred: row.starred === 1,
    createdAt: new Date(row.created_at * 1000).toISOString(),
    updatedAt: new Date(row.updated_at * 1000).toISOString(),
    deletedAt: row.deleted_at ? new Date(row.deleted_at * 1000).toISOString() : null,
    memberCount: row.member_count,
    role: row.role as UserRole | undefined,
  };
}

function rowToMember(row: BoardMemberRow): BoardMember {
  return {
    boardId: row.board_id,
    userId: row.user_id,
    role: row.role as UserRole,
    invitedBy: row.invited_by,
    createdAt: new Date(row.created_at * 1000).toISOString(),
  };
}

export function createBoard(name: string, ownerId: string, isTemplate = false): Board {
  const id = uuidv4();
  const now = Math.floor(Date.now() / 1000);

  const transaction = db.transaction(() => {
    const boardStmt = db.prepare(`
      INSERT INTO boards (id, name, owner_id, is_template, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    boardStmt.run(id, name, ownerId, isTemplate ? 1 : 0, now, now);

    const memberStmt = db.prepare(`
      INSERT INTO board_members (board_id, user_id, role)
      VALUES (?, ?, 'owner')
    `);
    memberStmt.run(id, ownerId);
  });

  transaction();
  return getBoardById(id, ownerId)!;
}

export function getBoardById(boardId: string, userId?: string): Board | null {
  let query = `
    SELECT b.*,
      (SELECT COUNT(*) FROM board_members WHERE board_id = b.id) as member_count
  `;

  if (userId) {
    query += `,
      (SELECT 1 FROM board_stars WHERE board_id = b.id AND user_id = ?) as starred,
      (SELECT role FROM board_members WHERE board_id = b.id AND user_id = ?) as role
    `;
  }

  query += ' FROM boards b WHERE b.id = ?';

  const stmt = db.prepare(query);
  const row = userId
    ? (stmt.get(userId, userId, boardId) as BoardRow | undefined)
    : (stmt.get(boardId) as BoardRow | undefined);

  return row ? rowToBoard(row) : null;
}

export function getUserBoards(
  userId: string,
  options: {
    search?: string;
    sort?: 'recent' | 'name' | 'created';
    starred?: boolean;
    trash?: boolean;
  } = {}
): Board[] {
  const { search, sort = 'recent', starred, trash = false } = options;

  let query = `
    SELECT DISTINCT b.*,
      (SELECT 1 FROM board_stars WHERE board_id = b.id AND user_id = ?) as starred,
      (SELECT role FROM board_members WHERE board_id = b.id AND user_id = ?) as role,
      (SELECT COUNT(*) FROM board_members WHERE board_id = b.id) as member_count
    FROM boards b
    LEFT JOIN board_members bm ON b.id = bm.board_id
    WHERE (b.owner_id = ? OR bm.user_id = ?)
      AND b.is_template = 0
  `;

  const params: (string | number)[] = [userId, userId, userId, userId];

  if (trash) {
    query += ' AND b.deleted_at IS NOT NULL';
  } else {
    query += ' AND b.deleted_at IS NULL';
  }

  if (search) {
    query += ' AND b.name LIKE ?';
    params.push(`%${search}%`);
  }

  if (starred) {
    query += ' AND EXISTS (SELECT 1 FROM board_stars WHERE board_id = b.id AND user_id = ?)';
    params.push(userId);
  }

  switch (sort) {
    case 'name':
      query += ' ORDER BY b.name ASC';
      break;
    case 'created':
      query += ' ORDER BY b.created_at DESC';
      break;
    case 'recent':
    default:
      query += ' ORDER BY b.updated_at DESC';
  }

  const stmt = db.prepare(query);
  const rows = stmt.all(...params) as BoardRow[];
  return rows.map(rowToBoard);
}

export function updateBoard(boardId: string, updates: { name?: string }): Board | null {
  const fields: string[] = ['updated_at = ?'];
  const values: (string | number)[] = [Math.floor(Date.now() / 1000)];

  if (updates.name !== undefined) {
    fields.push('name = ?');
    values.push(updates.name);
  }

  values.push(boardId);
  const stmt = db.prepare(`UPDATE boards SET ${fields.join(', ')} WHERE id = ?`);
  stmt.run(...values);

  return getBoardById(boardId);
}

export function duplicateBoard(boardId: string, newOwnerId: string): Board | null {
  const original = getBoardById(boardId);
  if (!original) return null;

  const newId = uuidv4();
  const now = Math.floor(Date.now() / 1000);

  const transaction = db.transaction(() => {
    // Create new board
    const boardStmt = db.prepare(`
      INSERT INTO boards (id, name, owner_id, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?)
    `);
    boardStmt.run(newId, `${original.name} (copy)`, newOwnerId, now, now);

    // Add owner as member
    const memberStmt = db.prepare(`
      INSERT INTO board_members (board_id, user_id, role)
      VALUES (?, ?, 'owner')
    `);
    memberStmt.run(newId, newOwnerId);

    // Copy objects
    const objectsStmt = db.prepare(`
      INSERT INTO board_objects (id, board_id, type, data, z_index, created_by, updated_by, updated_at)
      SELECT ?, ?, type, data, z_index, ?, ?, ?
      FROM board_objects
      WHERE board_id = ?
    `);

    const objectRows = db.prepare('SELECT * FROM board_objects WHERE board_id = ?').all(boardId) as {
      id: string;
      type: string;
      data: string;
      z_index: number;
    }[];

    for (const obj of objectRows) {
      objectsStmt.run(uuidv4(), newId, newOwnerId, newOwnerId, now, boardId);
    }
  });

  transaction();
  return getBoardById(newId, newOwnerId);
}

export function softDeleteBoard(boardId: string): boolean {
  const now = Math.floor(Date.now() / 1000);
  const stmt = db.prepare('UPDATE boards SET deleted_at = ? WHERE id = ?');
  const result = stmt.run(now, boardId);
  return result.changes > 0;
}

export function restoreBoard(boardId: string): Board | null {
  const stmt = db.prepare('UPDATE boards SET deleted_at = NULL WHERE id = ?');
  stmt.run(boardId);
  return getBoardById(boardId);
}

export function permanentlyDeleteBoard(boardId: string): boolean {
  const stmt = db.prepare('DELETE FROM boards WHERE id = ?');
  const result = stmt.run(boardId);
  return result.changes > 0;
}

export function starBoard(boardId: string, userId: string): boolean {
  try {
    const stmt = db.prepare(`
      INSERT OR IGNORE INTO board_stars (board_id, user_id)
      VALUES (?, ?)
    `);
    stmt.run(boardId, userId);
    return true;
  } catch {
    return false;
  }
}

export function unstarBoard(boardId: string, userId: string): boolean {
  const stmt = db.prepare('DELETE FROM board_stars WHERE board_id = ? AND user_id = ?');
  const result = stmt.run(boardId, userId);
  return result.changes > 0;
}

export function touchBoard(boardId: string): void {
  const now = Math.floor(Date.now() / 1000);
  const stmt = db.prepare('UPDATE boards SET updated_at = ? WHERE id = ?');
  stmt.run(now, boardId);
}

// Board members

export function getBoardMembers(boardId: string): BoardMember[] {
  const stmt = db.prepare(`
    SELECT bm.*, u.display_name, u.avatar_url, u.email
    FROM board_members bm
    JOIN users u ON bm.user_id = u.id
    WHERE bm.board_id = ?
    ORDER BY
      CASE bm.role
        WHEN 'owner' THEN 1
        WHEN 'editor' THEN 2
        WHEN 'commenter' THEN 3
        WHEN 'viewer' THEN 4
      END
  `);
  const rows = stmt.all(boardId) as (BoardMemberRow & {
    display_name: string;
    avatar_url: string | null;
    email: string;
  })[];

  return rows.map((row) => ({
    ...rowToMember(row),
    user: {
      id: row.user_id,
      email: row.email,
      displayName: row.display_name,
      avatarUrl: row.avatar_url,
      emailVerified: true,
      createdAt: new Date(row.created_at * 1000).toISOString(),
    },
  }));
}

export function getBoardMember(boardId: string, userId: string): BoardMember | null {
  const stmt = db.prepare(`
    SELECT * FROM board_members WHERE board_id = ? AND user_id = ?
  `);
  const row = stmt.get(boardId, userId) as BoardMemberRow | undefined;
  return row ? rowToMember(row) : null;
}

export function addBoardMember(
  boardId: string,
  userId: string,
  role: UserRole,
  invitedBy: string
): BoardMember | null {
  try {
    const stmt = db.prepare(`
      INSERT INTO board_members (board_id, user_id, role, invited_by)
      VALUES (?, ?, ?, ?)
    `);
    stmt.run(boardId, userId, role, invitedBy);
    return getBoardMember(boardId, userId);
  } catch {
    return null;
  }
}

export function updateBoardMember(
  boardId: string,
  userId: string,
  role: UserRole
): BoardMember | null {
  const stmt = db.prepare(`
    UPDATE board_members SET role = ? WHERE board_id = ? AND user_id = ?
  `);
  stmt.run(role, boardId, userId);
  return getBoardMember(boardId, userId);
}

export function removeBoardMember(boardId: string, userId: string): boolean {
  const stmt = db.prepare('DELETE FROM board_members WHERE board_id = ? AND user_id = ?');
  const result = stmt.run(boardId, userId);
  return result.changes > 0;
}

export function getUserRoleOnBoard(boardId: string, userId: string): UserRole | null {
  const stmt = db.prepare('SELECT role FROM board_members WHERE board_id = ? AND user_id = ?');
  const row = stmt.get(boardId, userId) as { role: string } | undefined;
  return row ? (row.role as UserRole) : null;
}

// Templates

export function getTemplates(): Board[] {
  const stmt = db.prepare(`
    SELECT * FROM boards WHERE is_template = 1 AND deleted_at IS NULL
    ORDER BY name
  `);
  const rows = stmt.all() as BoardRow[];
  return rows.map(rowToBoard);
}
