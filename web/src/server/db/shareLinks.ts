import db from './index.js';
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';
import type { ShareLink, UserRole } from '../../shared/types.js';

interface ShareLinkRow {
  id: string;
  board_id: string;
  role: string;
  token: string;
  enabled: number;
  created_at: number;
}

function rowToShareLink(row: ShareLinkRow): ShareLink {
  return {
    id: row.id,
    boardId: row.board_id,
    role: row.role as UserRole,
    token: row.token,
    enabled: row.enabled === 1,
  };
}

function generateToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

export function createShareLink(
  boardId: string,
  role: UserRole
): ShareLink {
  const id = uuidv4();
  const token = generateToken();

  const stmt = db.prepare(`
    INSERT INTO share_links (id, board_id, role, token)
    VALUES (?, ?, ?, ?)
  `);
  stmt.run(id, boardId, role, token);

  return getShareLinkById(id)!;
}

export function getShareLinkById(linkId: string): ShareLink | null {
  const stmt = db.prepare('SELECT * FROM share_links WHERE id = ?');
  const row = stmt.get(linkId) as ShareLinkRow | undefined;
  return row ? rowToShareLink(row) : null;
}

export function getShareLinkByToken(token: string): ShareLink | null {
  const stmt = db.prepare('SELECT * FROM share_links WHERE token = ? AND enabled = 1');
  const row = stmt.get(token) as ShareLinkRow | undefined;
  return row ? rowToShareLink(row) : null;
}

export function getBoardShareLinks(boardId: string): ShareLink[] {
  const stmt = db.prepare('SELECT * FROM share_links WHERE board_id = ?');
  const rows = stmt.all(boardId) as ShareLinkRow[];
  return rows.map(rowToShareLink);
}

export function toggleShareLink(linkId: string, enabled: boolean): ShareLink | null {
  const stmt = db.prepare('UPDATE share_links SET enabled = ? WHERE id = ?');
  stmt.run(enabled ? 1 : 0, linkId);
  return getShareLinkById(linkId);
}

export function deleteShareLink(linkId: string): boolean {
  const stmt = db.prepare('DELETE FROM share_links WHERE id = ?');
  const result = stmt.run(linkId);
  return result.changes > 0;
}

export function regenerateShareLinkToken(linkId: string): ShareLink | null {
  const newToken = generateToken();
  const stmt = db.prepare('UPDATE share_links SET token = ? WHERE id = ?');
  stmt.run(newToken, linkId);
  return getShareLinkById(linkId);
}

// Invitations

interface InvitationRow {
  id: string;
  board_id: string;
  email: string;
  role: string;
  token: string;
  invited_by: string;
  created_at: number;
}

export interface Invitation {
  id: string;
  boardId: string;
  email: string;
  role: UserRole;
  token: string;
  invitedBy: string;
  createdAt: string;
}

function rowToInvitation(row: InvitationRow): Invitation {
  return {
    id: row.id,
    boardId: row.board_id,
    email: row.email,
    role: row.role as UserRole,
    token: row.token,
    invitedBy: row.invited_by,
    createdAt: new Date(row.created_at * 1000).toISOString(),
  };
}

export function createInvitation(
  boardId: string,
  email: string,
  role: UserRole,
  invitedBy: string
): Invitation {
  const id = uuidv4();
  const token = generateToken();

  // Delete any existing invitation for this email and board
  const deleteStmt = db.prepare('DELETE FROM invitations WHERE board_id = ? AND email = ?');
  deleteStmt.run(boardId, email);

  const stmt = db.prepare(`
    INSERT INTO invitations (id, board_id, email, role, token, invited_by)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  stmt.run(id, boardId, email, role, token, invitedBy);

  return getInvitationById(id)!;
}

export function getInvitationById(invitationId: string): Invitation | null {
  const stmt = db.prepare('SELECT * FROM invitations WHERE id = ?');
  const row = stmt.get(invitationId) as InvitationRow | undefined;
  return row ? rowToInvitation(row) : null;
}

export function getInvitationByToken(token: string): Invitation | null {
  const stmt = db.prepare('SELECT * FROM invitations WHERE token = ?');
  const row = stmt.get(token) as InvitationRow | undefined;
  return row ? rowToInvitation(row) : null;
}

export function getInvitationsForEmail(email: string): Invitation[] {
  const stmt = db.prepare('SELECT * FROM invitations WHERE email = ?');
  const rows = stmt.all(email) as InvitationRow[];
  return rows.map(rowToInvitation);
}

export function deleteInvitation(invitationId: string): boolean {
  const stmt = db.prepare('DELETE FROM invitations WHERE id = ?');
  const result = stmt.run(invitationId);
  return result.changes > 0;
}

export function deleteInvitationByToken(token: string): boolean {
  const stmt = db.prepare('DELETE FROM invitations WHERE token = ?');
  const result = stmt.run(token);
  return result.changes > 0;
}

// Access requests

interface AccessRequestRow {
  id: string;
  board_id: string;
  user_id: string;
  message: string | null;
  status: string;
  created_at: number;
}

export interface AccessRequest {
  id: string;
  boardId: string;
  userId: string;
  message: string | null;
  status: 'pending' | 'approved' | 'denied';
  createdAt: string;
}

function rowToAccessRequest(row: AccessRequestRow): AccessRequest {
  return {
    id: row.id,
    boardId: row.board_id,
    userId: row.user_id,
    message: row.message,
    status: row.status as 'pending' | 'approved' | 'denied',
    createdAt: new Date(row.created_at * 1000).toISOString(),
  };
}

export function createAccessRequest(
  boardId: string,
  userId: string,
  message?: string
): AccessRequest {
  const id = uuidv4();

  const stmt = db.prepare(`
    INSERT INTO access_requests (id, board_id, user_id, message)
    VALUES (?, ?, ?, ?)
  `);
  stmt.run(id, boardId, userId, message ?? null);

  return getAccessRequestById(id)!;
}

export function getAccessRequestById(requestId: string): AccessRequest | null {
  const stmt = db.prepare('SELECT * FROM access_requests WHERE id = ?');
  const row = stmt.get(requestId) as AccessRequestRow | undefined;
  return row ? rowToAccessRequest(row) : null;
}

export function getBoardAccessRequests(boardId: string): AccessRequest[] {
  const stmt = db.prepare(`
    SELECT * FROM access_requests
    WHERE board_id = ? AND status = 'pending'
    ORDER BY created_at DESC
  `);
  const rows = stmt.all(boardId) as AccessRequestRow[];
  return rows.map(rowToAccessRequest);
}

export function updateAccessRequest(
  requestId: string,
  status: 'approved' | 'denied'
): AccessRequest | null {
  const stmt = db.prepare('UPDATE access_requests SET status = ? WHERE id = ?');
  stmt.run(status, requestId);
  return getAccessRequestById(requestId);
}
