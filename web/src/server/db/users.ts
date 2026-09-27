import db from './index.js';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import type { User } from '../../shared/types.js';

interface UserRow {
  id: string;
  email: string;
  password_hash: string | null;
  google_id: string | null;
  display_name: string;
  avatar_url: string | null;
  email_verified: number;
  email_verification_token: string | null;
  password_reset_token: string | null;
  password_reset_expires: number | null;
  deleted_at: number | null;
  created_at: number;
}

function rowToUser(row: UserRow): User {
  return {
    id: row.id,
    email: row.email,
    displayName: row.display_name,
    avatarUrl: row.avatar_url,
    emailVerified: row.email_verified === 1,
    createdAt: new Date(row.created_at * 1000).toISOString(),
  };
}

export function createUser(
  email: string,
  password: string,
  displayName: string
): { user: User; verificationToken: string } {
  const id = uuidv4();
  const passwordHash = bcrypt.hashSync(password, 10);
  const verificationToken = uuidv4();

  const stmt = db.prepare(`
    INSERT INTO users (id, email, password_hash, display_name, email_verification_token)
    VALUES (?, ?, ?, ?, ?)
  `);
  stmt.run(id, email, passwordHash, displayName, verificationToken);

  const user = getUserById(id)!;
  return { user, verificationToken };
}

export function createGoogleUser(
  googleId: string,
  email: string,
  displayName: string,
  avatarUrl: string | null
): User {
  const id = uuidv4();

  const stmt = db.prepare(`
    INSERT INTO users (id, email, google_id, display_name, avatar_url, email_verified)
    VALUES (?, ?, ?, ?, ?, 1)
  `);
  stmt.run(id, email, googleId, displayName, avatarUrl);

  return getUserById(id)!;
}

export function getUserById(id: string): User | null {
  const stmt = db.prepare('SELECT * FROM users WHERE id = ? AND deleted_at IS NULL');
  const row = stmt.get(id) as UserRow | undefined;
  return row ? rowToUser(row) : null;
}

export function getUserByEmail(email: string): User | null {
  const stmt = db.prepare('SELECT * FROM users WHERE email = ? AND deleted_at IS NULL');
  const row = stmt.get(email) as UserRow | undefined;
  return row ? rowToUser(row) : null;
}

export function getUserByGoogleId(googleId: string): User | null {
  const stmt = db.prepare('SELECT * FROM users WHERE google_id = ? AND deleted_at IS NULL');
  const row = stmt.get(googleId) as UserRow | undefined;
  return row ? rowToUser(row) : null;
}

export function verifyPassword(email: string, password: string): User | null {
  const stmt = db.prepare('SELECT * FROM users WHERE email = ? AND deleted_at IS NULL');
  const row = stmt.get(email) as UserRow | undefined;

  if (!row || !row.password_hash) {
    return null;
  }

  if (!bcrypt.compareSync(password, row.password_hash)) {
    return null;
  }

  return rowToUser(row);
}

export function verifyEmail(token: string): User | null {
  const stmt = db.prepare(`
    UPDATE users
    SET email_verified = 1, email_verification_token = NULL
    WHERE email_verification_token = ?
    RETURNING *
  `);
  const row = stmt.get(token) as UserRow | undefined;
  return row ? rowToUser(row) : null;
}

export function createPasswordResetToken(email: string): string | null {
  const token = uuidv4();
  const expires = Math.floor(Date.now() / 1000) + 3600; // 1 hour

  const stmt = db.prepare(`
    UPDATE users
    SET password_reset_token = ?, password_reset_expires = ?
    WHERE email = ? AND deleted_at IS NULL
  `);
  const result = stmt.run(token, expires, email);

  return result.changes > 0 ? token : null;
}

export function resetPassword(token: string, newPassword: string): User | null {
  const now = Math.floor(Date.now() / 1000);
  const passwordHash = bcrypt.hashSync(newPassword, 10);

  const stmt = db.prepare(`
    UPDATE users
    SET password_hash = ?, password_reset_token = NULL, password_reset_expires = NULL
    WHERE password_reset_token = ? AND password_reset_expires > ?
    RETURNING *
  `);
  const row = stmt.get(passwordHash, token, now) as UserRow | undefined;
  return row ? rowToUser(row) : null;
}

export function updateUser(
  id: string,
  updates: { displayName?: string; avatarUrl?: string | null }
): User | null {
  const fields: string[] = [];
  const values: (string | null)[] = [];

  if (updates.displayName !== undefined) {
    fields.push('display_name = ?');
    values.push(updates.displayName);
  }
  if (updates.avatarUrl !== undefined) {
    fields.push('avatar_url = ?');
    values.push(updates.avatarUrl);
  }

  if (fields.length === 0) {
    return getUserById(id);
  }

  values.push(id);
  const stmt = db.prepare(`
    UPDATE users SET ${fields.join(', ')} WHERE id = ?
  `);
  stmt.run(...values);

  return getUserById(id);
}

export function linkGoogleAccount(userId: string, googleId: string): User | null {
  const stmt = db.prepare(`
    UPDATE users SET google_id = ? WHERE id = ?
  `);
  stmt.run(googleId, userId);
  return getUserById(userId);
}

export function deleteUser(id: string): boolean {
  const now = Math.floor(Date.now() / 1000);
  const stmt = db.prepare('UPDATE users SET deleted_at = ? WHERE id = ?');
  const result = stmt.run(now, id);
  return result.changes > 0;
}
