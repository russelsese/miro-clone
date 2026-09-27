import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const dbPath = process.env.DATABASE_PATH || './data/miro-clone.db';

// Ensure data directory exists
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new Database(dbPath);

// Enable WAL mode for better concurrency
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

// Initialize schema
export function initializeDatabase() {
  db.exec(`
    -- Users table
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT,
      google_id TEXT UNIQUE,
      display_name TEXT NOT NULL,
      avatar_url TEXT,
      email_verified INTEGER DEFAULT 0,
      email_verification_token TEXT,
      password_reset_token TEXT,
      password_reset_expires INTEGER,
      deleted_at INTEGER,
      created_at INTEGER DEFAULT (unixepoch())
    );

    -- Boards table
    CREATE TABLE IF NOT EXISTS boards (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      owner_id TEXT NOT NULL,
      thumbnail_url TEXT,
      is_template INTEGER DEFAULT 0,
      deleted_at INTEGER,
      created_at INTEGER DEFAULT (unixepoch()),
      updated_at INTEGER DEFAULT (unixepoch()),
      FOREIGN KEY (owner_id) REFERENCES users(id)
    );

    -- Board members table
    CREATE TABLE IF NOT EXISTS board_members (
      board_id TEXT NOT NULL,
      user_id TEXT NOT NULL,
      role TEXT NOT NULL CHECK (role IN ('owner', 'editor', 'commenter', 'viewer')),
      invited_by TEXT,
      created_at INTEGER DEFAULT (unixepoch()),
      PRIMARY KEY (board_id, user_id),
      FOREIGN KEY (board_id) REFERENCES boards(id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (invited_by) REFERENCES users(id)
    );

    -- Board stars table
    CREATE TABLE IF NOT EXISTS board_stars (
      board_id TEXT NOT NULL,
      user_id TEXT NOT NULL,
      created_at INTEGER DEFAULT (unixepoch()),
      PRIMARY KEY (board_id, user_id),
      FOREIGN KEY (board_id) REFERENCES boards(id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    -- Board objects table
    CREATE TABLE IF NOT EXISTS board_objects (
      id TEXT PRIMARY KEY,
      board_id TEXT NOT NULL,
      type TEXT NOT NULL,
      data TEXT NOT NULL,
      z_index INTEGER DEFAULT 0,
      created_by TEXT NOT NULL,
      updated_by TEXT NOT NULL,
      updated_at INTEGER DEFAULT (unixepoch()),
      FOREIGN KEY (board_id) REFERENCES boards(id) ON DELETE CASCADE,
      FOREIGN KEY (created_by) REFERENCES users(id),
      FOREIGN KEY (updated_by) REFERENCES users(id)
    );

    -- Comments table
    CREATE TABLE IF NOT EXISTS comments (
      id TEXT PRIMARY KEY,
      board_id TEXT NOT NULL,
      object_id TEXT,
      parent_id TEXT,
      author_id TEXT NOT NULL,
      body TEXT NOT NULL,
      x REAL NOT NULL,
      y REAL NOT NULL,
      resolved INTEGER DEFAULT 0,
      created_at INTEGER DEFAULT (unixepoch()),
      FOREIGN KEY (board_id) REFERENCES boards(id) ON DELETE CASCADE,
      FOREIGN KEY (object_id) REFERENCES board_objects(id) ON DELETE SET NULL,
      FOREIGN KEY (parent_id) REFERENCES comments(id) ON DELETE CASCADE,
      FOREIGN KEY (author_id) REFERENCES users(id)
    );

    -- Share links table
    CREATE TABLE IF NOT EXISTS share_links (
      id TEXT PRIMARY KEY,
      board_id TEXT NOT NULL,
      role TEXT NOT NULL CHECK (role IN ('editor', 'commenter', 'viewer')),
      token TEXT UNIQUE NOT NULL,
      enabled INTEGER DEFAULT 1,
      created_at INTEGER DEFAULT (unixepoch()),
      FOREIGN KEY (board_id) REFERENCES boards(id) ON DELETE CASCADE
    );

    -- Sessions table (for express-session)
    CREATE TABLE IF NOT EXISTS sessions (
      sid TEXT PRIMARY KEY,
      sess TEXT NOT NULL,
      expired INTEGER NOT NULL
    );

    -- Invitations table (pending invites)
    CREATE TABLE IF NOT EXISTS invitations (
      id TEXT PRIMARY KEY,
      board_id TEXT NOT NULL,
      email TEXT NOT NULL,
      role TEXT NOT NULL CHECK (role IN ('editor', 'commenter', 'viewer')),
      token TEXT UNIQUE NOT NULL,
      invited_by TEXT NOT NULL,
      created_at INTEGER DEFAULT (unixepoch()),
      FOREIGN KEY (board_id) REFERENCES boards(id) ON DELETE CASCADE,
      FOREIGN KEY (invited_by) REFERENCES users(id)
    );

    -- Access requests table
    CREATE TABLE IF NOT EXISTS access_requests (
      id TEXT PRIMARY KEY,
      board_id TEXT NOT NULL,
      user_id TEXT NOT NULL,
      message TEXT,
      status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'denied')),
      created_at INTEGER DEFAULT (unixepoch()),
      FOREIGN KEY (board_id) REFERENCES boards(id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    -- Indexes
    CREATE INDEX IF NOT EXISTS idx_boards_owner ON boards(owner_id);
    CREATE INDEX IF NOT EXISTS idx_boards_updated ON boards(updated_at DESC);
    CREATE INDEX IF NOT EXISTS idx_board_members_board ON board_members(board_id);
    CREATE INDEX IF NOT EXISTS idx_board_members_user ON board_members(user_id);
    CREATE INDEX IF NOT EXISTS idx_board_objects_board ON board_objects(board_id);
    CREATE INDEX IF NOT EXISTS idx_comments_board ON comments(board_id);
    CREATE INDEX IF NOT EXISTS idx_comments_object ON comments(object_id);
    CREATE INDEX IF NOT EXISTS idx_share_links_token ON share_links(token);
    CREATE INDEX IF NOT EXISTS idx_sessions_expired ON sessions(expired);
    CREATE INDEX IF NOT EXISTS idx_invitations_token ON invitations(token);
    CREATE INDEX IF NOT EXISTS idx_invitations_email ON invitations(email);
  `);

  console.log('Database initialized');
}

export default db;
