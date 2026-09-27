# Development Notes & Assumptions

## Assumptions Made

### Authentication
- **Email verification**: Implemented as mocked (tokens generated, logged to console). Full SendGrid integration requires API key in environment.
- **Google OAuth**: Requires GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in .env. Falls back to disabled state if not configured.
- **Password reset**: Token-based, emails logged to console in dev mode.

### Real-time Collaboration
- **Cursor throttling**: Cursor positions broadcast at most every 50ms per client to avoid flooding.
- **Heartbeat interval**: 30 seconds; client disconnected after 2 missed heartbeats.
- **Conflict resolution**: Last-write-wins per object field using server-assigned sequence numbers.

### File Storage
- **Image uploads**: Stored in /uploads directory (created automatically). Assumes persistent filesystem (not ephemeral container).
- **Image validation**: Basic content-type check; 10MB max file size per image.

### UI/UX
- **Styling**: Following miro-replica/index.html as closely as possible for colors, spacing, component structure.
- **Responsive**: Desktop-first, basic tablet support for viewing. Mobile editing not implemented.

### Performance
- **Object limit**: Optimized for up to 1,000 objects per board. Larger boards may see performance degradation.
- **Concurrent users**: Designed for 20 editors + 100 viewers per board as per NFR.

## Decisions Made

### Database
- Using better-sqlite3 synchronous API for simplicity. All DB operations are fast enough that async isn't needed for MVP scale.
- Schema uses soft deletes (deleted_at columns) for boards and users to support trash/restore.

### WebSocket Protocol
Messages use JSON format: `{ type, boardId, seq, payload }`

Message types:
- `join` / `joined` - Room management
- `op` - Object operations (create/update/delete)
- `cursor` - Pointer position (ephemeral)
- `presence` - User joined/left/editing
- `ping` / `pong` - Heartbeat
- `error` - Rejected operation

### Security
- CSRF protection via SameSite=Lax cookies (sufficient for REST API from same-origin SPA)
- Rate limiting on auth endpoints (100 requests/15min per IP)
- WebSocket ops rate limited per connection (50 ops/second)
- All user input validated with zod schemas before database operations

### Canvas Implementation
- Using react-konva for declarative canvas rendering
- Canvas state stored in React context, synced with server via WebSocket
- Undo/redo is client-side only (stores user's own ops in a local stack)

### Sharing
- Share links use secure random tokens (32 bytes hex)
- Anonymous viewers appear as "Guest" with randomly assigned display name
- Commenter role implemented but marked as "Should" - falls back to Viewer if needed

### Email
- SendGrid integration prepared but defaults to console logging in development
- Email templates are simple text (no HTML templates for MVP)

## Known Limitations

1. **No export to PNG/PDF**: Would require headless browser (Puppeteer), adding complexity. Marked as Should in requirements.

2. **No real email sending by default**: Requires SendGrid API key in production.

3. **Single server architecture**: No horizontal scaling. Acceptable for MVP.

4. **No offline editing**: Changes made offline are lost. Only reconnection with queued ops is supported (brief disconnections).

5. **Simplified alignment/snapping**: Basic grid snapping implemented; smart guides between objects not implemented.

6. **No board thumbnails**: Would require server-side rendering. Dashboard shows placeholder icons instead.

## Environment Variables

Required in `.env`:
```
SESSION_SECRET=<random-string-for-session-signing>
```

Optional:
```
SENDGRID_API_KEY=<for-real-email-sending>
GOOGLE_CLIENT_ID=<for-google-oauth>
GOOGLE_CLIENT_SECRET=<for-google-oauth>
DATABASE_PATH=./data/miro-clone.db
UPLOADS_PATH=./uploads
PORT=3000
```
