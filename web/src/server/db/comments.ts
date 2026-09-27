import db from './index.js';
import { v4 as uuidv4 } from 'uuid';
import type { Comment, User } from '../../shared/types.js';

interface CommentRow {
  id: string;
  board_id: string;
  object_id: string | null;
  parent_id: string | null;
  author_id: string;
  body: string;
  x: number;
  y: number;
  resolved: number;
  created_at: number;
  // Joined user fields
  display_name?: string;
  avatar_url?: string | null;
  email?: string;
}

function rowToComment(row: CommentRow): Comment {
  const comment: Comment = {
    id: row.id,
    boardId: row.board_id,
    objectId: row.object_id,
    parentId: row.parent_id,
    authorId: row.author_id,
    body: row.body,
    x: row.x,
    y: row.y,
    resolved: row.resolved === 1,
    createdAt: new Date(row.created_at * 1000).toISOString(),
  };

  if (row.display_name) {
    comment.author = {
      id: row.author_id,
      email: row.email!,
      displayName: row.display_name,
      avatarUrl: row.avatar_url ?? null,
      emailVerified: true,
      createdAt: new Date(row.created_at * 1000).toISOString(),
    };
  }

  return comment;
}

export function createComment(
  boardId: string,
  authorId: string,
  body: string,
  x: number,
  y: number,
  objectId?: string | null,
  parentId?: string | null
): Comment {
  const id = uuidv4();

  const stmt = db.prepare(`
    INSERT INTO comments (id, board_id, object_id, parent_id, author_id, body, x, y)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);
  stmt.run(id, boardId, objectId ?? null, parentId ?? null, authorId, body, x, y);

  return getCommentById(id)!;
}

export function getCommentById(commentId: string): Comment | null {
  const stmt = db.prepare(`
    SELECT c.*, u.display_name, u.avatar_url, u.email
    FROM comments c
    JOIN users u ON c.author_id = u.id
    WHERE c.id = ?
  `);
  const row = stmt.get(commentId) as CommentRow | undefined;
  return row ? rowToComment(row) : null;
}

export function getBoardComments(boardId: string): Comment[] {
  // Get top-level comments (no parent)
  const stmt = db.prepare(`
    SELECT c.*, u.display_name, u.avatar_url, u.email
    FROM comments c
    JOIN users u ON c.author_id = u.id
    WHERE c.board_id = ? AND c.parent_id IS NULL
    ORDER BY c.created_at DESC
  `);
  const rows = stmt.all(boardId) as CommentRow[];
  const comments = rows.map(rowToComment);

  // Get replies for each comment
  const repliesStmt = db.prepare(`
    SELECT c.*, u.display_name, u.avatar_url, u.email
    FROM comments c
    JOIN users u ON c.author_id = u.id
    WHERE c.parent_id = ?
    ORDER BY c.created_at ASC
  `);

  for (const comment of comments) {
    const replyRows = repliesStmt.all(comment.id) as CommentRow[];
    comment.replies = replyRows.map(rowToComment);
  }

  return comments;
}

export function updateComment(
  commentId: string,
  updates: { body?: string; resolved?: boolean }
): Comment | null {
  const fields: string[] = [];
  const values: (string | number)[] = [];

  if (updates.body !== undefined) {
    fields.push('body = ?');
    values.push(updates.body);
  }
  if (updates.resolved !== undefined) {
    fields.push('resolved = ?');
    values.push(updates.resolved ? 1 : 0);
  }

  if (fields.length === 0) {
    return getCommentById(commentId);
  }

  values.push(commentId);
  const stmt = db.prepare(`UPDATE comments SET ${fields.join(', ')} WHERE id = ?`);
  stmt.run(...values);

  return getCommentById(commentId);
}

export function deleteComment(commentId: string): boolean {
  const stmt = db.prepare('DELETE FROM comments WHERE id = ?');
  const result = stmt.run(commentId);
  return result.changes > 0;
}

export function resolveComment(commentId: string): Comment | null {
  return updateComment(commentId, { resolved: true });
}

export function unresolveComment(commentId: string): Comment | null {
  return updateComment(commentId, { resolved: false });
}

// Extract @mentions from comment body
export function extractMentions(body: string): string[] {
  const mentionRegex = /@(\w+)/g;
  const mentions: string[] = [];
  let match;
  while ((match = mentionRegex.exec(body)) !== null) {
    mentions.push(match[1]);
  }
  return mentions;
}
