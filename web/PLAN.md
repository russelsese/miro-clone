# Miro Clone - Implementation Plan

## Project Summary

Building a real-time collaborative whiteboard application (Miro clone) with the following core capabilities:
- User authentication (email/password + Google OAuth)
- Dashboard for managing boards
- Infinite canvas with pan/zoom
- Canvas objects: sticky notes, shapes, text, lines/connectors, freehand drawing, images, frames
- Real-time collaboration: live cursors, presence, concurrent editing
- Sharing: invite by email, share links with roles (Owner/Editor/Commenter/Viewer)
- Comments system
- Auto-save with no data loss

## Tech Stack (per Technical Requirements)

| Layer | Technology |
|-------|------------|
| Runtime | Node.js (LTS) |
| Backend Framework | Express |
| Real-time | ws (WebSocket) |
| Database | SQLite (better-sqlite3, WAL mode) |
| Frontend | React (Vite build) |
| Canvas Rendering | Konva.js (react-konva) |
| Auth | express-session + bcrypt + Google OAuth 2.0 |
| Email | SendGrid (@sendgrid/mail) |
| File Storage | Local disk (/uploads) |

## Architecture

```
Browser (React SPA)
  ├─ HTTPS → Express REST API → SQLite (miro-clone.db)
  └─ WSS   → WebSocket server → Same SQLite + In-memory presence
```

Single Node.js process serving REST API, WebSocket, and static frontend build.

---

## Milestones

### Milestone 1: Project Scaffold & Basic Setup
- [x] Initialize Node.js project with Express
- [x] Set up Vite + React frontend
- [x] Configure SQLite database with WAL mode
- [x] Set up project structure (src/server, src/client)
- [x] Create basic build/dev scripts

### Milestone 2: Database Schema & Models
- [x] Create users table
- [x] Create boards table
- [x] Create board_members table
- [x] Create board_objects table
- [x] Create comments table
- [x] Create share_links table
- [x] Create sessions table
- [x] Add required indexes

### Milestone 3: Authentication System
- [x] Email/password signup with bcrypt hashing
- [x] Email/password login
- [x] Session management with express-session
- [x] Google OAuth 2.0 integration
- [x] Logout functionality
- [x] Password reset flow (mocked email)
- [x] Email verification (mocked)
- [x] User profile (display name, avatar)

### Milestone 4: Dashboard & Board Management
- [x] List user's boards (owned + shared)
- [x] Create new blank board
- [x] Rename board
- [x] Duplicate board
- [x] Delete board (soft delete to trash)
- [x] Star/unstar boards
- [x] Search boards by name
- [x] Sort boards (recent, name)

### Milestone 5: Canvas Engine & Navigation
- [x] Implement Konva.js canvas
- [x] Infinite canvas with pan (mouse drag, hand tool)
- [x] Zoom (scroll wheel, +/- buttons)
- [x] Zoom to fit, reset to 100%
- [x] Dotted grid background
- [x] Canvas state management

### Milestone 6: Canvas Objects - Core
- [x] Sticky notes (multiple colors, editable text)
- [x] Basic shapes (rectangle, circle, triangle, diamond)
- [x] Free text boxes
- [x] Lines and arrows/connectors
- [x] Freehand pen/eraser tool
- [x] Object selection (single, multi, drag-select)
- [x] Move, resize, rotate objects
- [x] Delete objects

### Milestone 7: Canvas Objects - Advanced
- [x] Image upload (file picker, drag-drop, paste)
- [x] Frames (grouping, move contents together)
- [x] Style editing (fill color, border, font size, bold/italic/underline)
- [x] Layer ordering (bring forward, send back)
- [x] Copy/paste, duplicate
- [x] Undo/redo (client-side per user)
- [x] Keyboard shortcuts

### Milestone 8: Real-time Collaboration
- [x] WebSocket server setup
- [x] Board rooms (join/leave)
- [x] Object create/update/delete broadcast
- [x] Live cursor positions
- [x] Presence (who's on the board)
- [x] Conflict resolution (last-write-wins with sequence numbers)
- [x] Reconnection handling
- [x] Heartbeat/ping-pong

### Milestone 9: Sharing & Permissions
- [x] Invite by email (Editor/Viewer roles)
- [x] Share links with access levels
- [x] Role-based access control on all actions
- [x] Anonymous viewer support (public links)
- [x] Change/remove member access
- [x] Access request flow (basic)

### Milestone 10: Comments System
- [x] Pin comments to canvas location/object
- [x] Reply to comments (threads)
- [x] Resolve/reopen comments
- [x] @mentions (basic, no email notifications in MVP)

### Milestone 11: Persistence & Polish
- [x] Auto-save all changes
- [x] Loading states and error handling
- [x] Offline indicator
- [x] Input validation (zod schemas)
- [x] Security hardening (CSRF, rate limiting, XSS prevention)
- [x] Match UI styling to miro-replica reference

### Milestone 12: Final Testing & Cleanup
- [x] End-to-end testing of user journeys J1-J5
- [x] Bug fixes
- [x] Performance check (1000 objects)
- [x] Write SUMMARY.md

---

## Out of Scope (MVP)

Per business requirements, these are explicitly excluded:
- Templates marketplace
- Third-party integrations (Jira, Slack)
- Video/audio calls
- AI features
- Presentation mode
- Voting/timer apps
- Enterprise SSO/SCIM
- Billing
- Mobile native apps
- Offline editing
- Version history
- Export to PNG/PDF (marked as Should, will implement if time permits)

---

## Key Design Decisions

1. **Single process architecture**: MVP uses one Node.js process for simplicity; SQLite WAL mode enables concurrent reads during writes.

2. **Canvas rendering**: Using Konva.js which handles shapes, transforms, layering out of the box. Much simpler than raw Canvas API.

3. **Real-time protocol**: WebSocket with JSON messages, sequence numbers for ordering, last-write-wins conflict resolution.

4. **Authentication**: Server-side sessions stored in SQLite, avoiding JWT complexity for MVP.

5. **Email**: Using SendGrid in development mode (emails logged to console unless SendGrid API key provided).

6. **File uploads**: Stored on local disk under /uploads, served by Express static middleware.
