# Miro Clone - Project Summary

## What Was Built

A fully functional real-time collaborative whiteboard application inspired by Miro, featuring:

### Core Features

**Authentication**
- Email/password signup and login with bcrypt hashing
- Google OAuth 2.0 support (requires credentials in .env)
- Session-based authentication stored in SQLite
- Email verification and password reset flows (emails logged to console in dev mode)
- User profiles with display name and avatar

**Dashboard**
- List of boards (owned and shared)
- Create new blank boards
- Rename, duplicate, delete boards
- Star/unstar boards for favorites
- Trash with restore capability
- Search and sort functionality

**Canvas**
- Infinite canvas with pan (hand tool, alt+drag, middle mouse)
- Smooth zoom (scroll wheel, +/- buttons, fit to view)
- Dotted grid background matching Miro's style

**Canvas Objects**
- Sticky notes with 8 color options
- Basic shapes: rectangle, circle, triangle, diamond
- Free text boxes
- Lines and arrows/connectors
- Freehand pen and eraser tools
- Frames for grouping content

**Object Editing**
- Single and multi-select (click, shift+click, drag selection)
- Move, resize, and rotate with transformer handles
- Delete with Delete/Backspace keys
- Style editing (colors, stroke width, font size)
- Layer ordering (z-index)

**Real-time Collaboration**
- WebSocket-based synchronization
- Live cursor positions with user names
- Presence indicators showing who's on the board
- Concurrent editing with conflict resolution (last-write-wins)
- Automatic reconnection with queued operations
- Heartbeat for connection health

**Sharing & Permissions**
- Role-based access control (Owner, Editor, Commenter, Viewer)
- Invite members by email
- Share links with configurable access levels
- Anonymous viewer support for public links
- Member management (change role, remove)

**Comments**
- Pin comments to canvas locations
- Threaded replies
- Resolve/unresolve comments
- @mentions support (parsed from text)

### Technical Implementation

**Backend**
- Node.js with Express
- SQLite database with WAL mode for concurrent access
- WebSocket server using `ws` library
- Session management with SQLite-backed store
- Zod schema validation
- Rate limiting on auth endpoints
- File upload handling with Multer

**Frontend**
- React 18 with TypeScript
- Vite for fast development and builds
- Konva.js/react-konva for canvas rendering
- Zustand for state management
- React Router for navigation
- Tailwind CSS for styling

**Security**
- Password hashing with bcrypt
- Session cookies with httpOnly, secure, sameSite flags
- Input validation on all endpoints
- Role-based access checks on server
- Rate limiting to prevent abuse

## How to Run

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn

### Development

1. Install dependencies:
```bash
cd web
npm install
```

2. Create a `.env` file:
```bash
cp .env.example .env
# Edit .env and set SESSION_SECRET
```

3. Start development servers:
```bash
npm run dev
```

This starts:
- Backend server at http://localhost:3000
- Frontend dev server at http://localhost:5173

### Production Build

```bash
npm run build
npm start
```

The production server serves both API and static frontend from port 3000.

## Project Structure

```
web/
├── src/
│   ├── client/           # React frontend
│   │   ├── components/   # UI components
│   │   ├── pages/        # Route pages
│   │   ├── hooks/        # Custom React hooks
│   │   ├── store/        # Zustand stores
│   │   ├── lib/          # Utilities
│   │   ├── App.tsx       # Main app with routing
│   │   └── index.css     # Global styles
│   ├── server/           # Express backend
│   │   ├── db/           # Database models
│   │   ├── routes/       # API routes
│   │   ├── middleware/   # Express middleware
│   │   ├── services/     # Business logic
│   │   └── index.ts      # Server entry
│   └── shared/           # Shared types & schemas
├── data/                 # SQLite database (auto-created)
├── uploads/              # Uploaded files (auto-created)
├── PLAN.md              # Implementation plan
├── NOTES.md             # Development notes
└── SUMMARY.md           # This file
```

## Known Limitations

1. **No export to PNG/PDF**: Would require headless browser rendering (Puppeteer/Playwright)

2. **No real email sending by default**: Requires SendGrid API key in production; emails logged to console in development

3. **Single server architecture**: No horizontal scaling; acceptable for MVP

4. **No offline editing**: Changes made fully offline will be lost; only brief disconnections with queued ops are handled

5. **Simplified alignment/snapping**: Basic grid snapping only; no smart guides between objects

6. **No board thumbnails**: Would require server-side rendering

7. **Image upload limitations**: Local filesystem storage only; would need cloud storage for ephemeral hosting

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| SESSION_SECRET | Yes | Secret for signing session cookies |
| SENDGRID_API_KEY | No | For real email sending |
| GOOGLE_CLIENT_ID | No | For Google OAuth |
| GOOGLE_CLIENT_SECRET | No | For Google OAuth |
| DATABASE_PATH | No | SQLite file path (default: ./data/miro-clone.db) |
| UPLOADS_PATH | No | Upload directory (default: ./uploads) |
| PORT | No | Server port (default: 3000) |

## Assumptions Made

See NOTES.md for detailed assumptions and design decisions.

Key assumptions:
- Single server deployment with persistent filesystem
- Email verification is informational only (doesn't block access)
- Google OAuth credentials optional (app works without them)
- Cursor throttling at 50ms for reasonable bandwidth
- Last-write-wins conflict resolution is acceptable for MVP

## User Journeys Supported

All "Must Have" journeys from business requirements:

1. **J1 - First sign-in to first board**: Sign up → Dashboard → Create board → Add sticky note
2. **J2 - Invite and collaborate live**: Share → Invite → See cursors → Edit together
3. **J3 - Share a view-only link**: Create share link → Anonymous viewing
4. **J5 - Recover from dropped connection**: Offline indicator → Reconnect → Sync

J4 (Comments workflow) is partially supported - comments work but email notifications are dev-only.

## Future Improvements

If continuing development:
- Add PNG/PDF export using Puppeteer
- Implement board thumbnails
- Add image upload to cloud storage (S3)
- Implement real email notifications
- Add more keyboard shortcuts
- Implement copy/paste between boards
- Add undo/redo with proper server sync
- Implement smart alignment guides
- Add touch/mobile support
- Implement starter templates
