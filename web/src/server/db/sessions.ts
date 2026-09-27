import db from './index.js';
import { Store } from 'express-session';

interface SessionRow {
  sid: string;
  sess: string;
  expired: number;
}

export class SQLiteSessionStore extends Store {
  private cleanupInterval: ReturnType<typeof setInterval> | null = null;

  constructor() {
    super();
    this.startCleanup();
  }

  private startCleanup() {
    // Clean up expired sessions every 15 minutes
    this.cleanupInterval = setInterval(() => {
      this.clearExpired();
    }, 15 * 60 * 1000);
  }

  private clearExpired() {
    const now = Math.floor(Date.now() / 1000);
    const stmt = db.prepare('DELETE FROM sessions WHERE expired < ?');
    stmt.run(now);
  }

  get(
    sid: string,
    callback: (err: Error | null, session?: Express.SessionData | null) => void
  ): void {
    try {
      const now = Math.floor(Date.now() / 1000);
      const stmt = db.prepare('SELECT * FROM sessions WHERE sid = ? AND expired > ?');
      const row = stmt.get(sid, now) as SessionRow | undefined;

      if (!row) {
        return callback(null, null);
      }

      const session = JSON.parse(row.sess);
      callback(null, session);
    } catch (err) {
      callback(err as Error);
    }
  }

  set(
    sid: string,
    session: Express.SessionData,
    callback?: (err?: Error | null) => void
  ): void {
    try {
      const maxAge = session.cookie?.maxAge || 86400000; // Default 1 day
      const expired = Math.floor((Date.now() + maxAge) / 1000);
      const sess = JSON.stringify(session);

      const stmt = db.prepare(`
        INSERT OR REPLACE INTO sessions (sid, sess, expired)
        VALUES (?, ?, ?)
      `);
      stmt.run(sid, sess, expired);

      callback?.();
    } catch (err) {
      callback?.(err as Error);
    }
  }

  destroy(sid: string, callback?: (err?: Error | null) => void): void {
    try {
      const stmt = db.prepare('DELETE FROM sessions WHERE sid = ?');
      stmt.run(sid);
      callback?.();
    } catch (err) {
      callback?.(err as Error);
    }
  }

  touch(
    sid: string,
    session: Express.SessionData,
    callback?: (err?: Error | null) => void
  ): void {
    try {
      const maxAge = session.cookie?.maxAge || 86400000;
      const expired = Math.floor((Date.now() + maxAge) / 1000);

      const stmt = db.prepare('UPDATE sessions SET expired = ? WHERE sid = ?');
      stmt.run(expired, sid);

      callback?.();
    } catch (err) {
      callback?.(err as Error);
    }
  }

  length(callback: (err: Error | null, length?: number) => void): void {
    try {
      const now = Math.floor(Date.now() / 1000);
      const stmt = db.prepare('SELECT COUNT(*) as count FROM sessions WHERE expired > ?');
      const row = stmt.get(now) as { count: number };
      callback(null, row.count);
    } catch (err) {
      callback(err as Error);
    }
  }

  clear(callback?: (err?: Error | null) => void): void {
    try {
      const stmt = db.prepare('DELETE FROM sessions');
      stmt.run();
      callback?.();
    } catch (err) {
      callback?.(err as Error);
    }
  }

  close(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
      this.cleanupInterval = null;
    }
  }
}
