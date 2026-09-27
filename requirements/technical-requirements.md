# Technical Requirements — Miro Clone (Collaborative Whiteboard)

Companion to [business-requirements.md](./business-requirements.md). Every technical decision here exists to satisfy a BR-xxx or NFR from that document; where one doesn't, it's called out as an implementation choice.

## 1. Stack (fixed choices)

| Layer | Choice | Notes |
|---|---|---|
| Runtime | Node.js (LTS) | Single language across API and real-time server |
| Web framework | Express | REST API, auth routes, static hosting of the client build |
| Real-time | `ws` (WebSocket) on the same Node process | Powers BR-28–33 (live cursors, live edits, presence) |
| Database | SQLite (via `better-sqlite3`) | Local, file-based, zero external dependency for MVP |
| Email | SendGrid (`@sendgrid/mail`) | Verification, invites, mentions, access requests, password reset |
| Frontend | React (Vite build) | SPA served as static files by Express |
| Canvas rendering | Konva.js (`react-konva`) | Handles shapes, drag/resize/rotate, layering (BR-13–24) out of the box |
| Auth | Session cookies (`express-session`) + Google OAuth 2.0 | Passwords hashed with bcrypt |
| File storage | Local disk under `/uploads`, served by Express static | Images from BR-18. **MVP assumption: single persistent server/volume, not an ephemeral container.** If hosting is ephemeral, this must move to a bucket store before launch — flagged in Section 9 |

## 2. Architecture

```
Browser (SPA)
  ├─ HTTPS  → Express REST API  → SQLite (miro-clone.db)
  └─ WSS    → WebSocket server  → SQLite (same file, same process)
                                → SendGrid (outbound email, async)
```

Single Node.js process for MVP: one process serves the REST API, the WebSocket endpoint, and the static frontend build. This matches the SQLite choice — SQLite has one writer at a time, so a single process avoids cross-process write contention. This is the main scaling constraint of the MVP and is revisited in Section 9.

SQLite is opened in **WAL mode** (`PRAGMA journal_mode=WAL`), which lets reads continue while a write is in progress — needed because board loads (reads) happen constantly while edits (writes) are streaming in from up to 20 editors.

## 3. Data model (SQLite)

- `users (id, email, password_hash, google_id, display_name, avatar_url, email_verified, deleted_at, created_at)`
- `boards (id, name, owner_id, thumbnail_url, is_template, deleted_at, created_at, updated_at)`
- `board_members (board_id, user_id, role, invited_by, created_at)` — role: owner/editor/commenter/viewer
- `board_objects (id, board_id, type, data JSON, z_index, created_by, updated_by, updated_at)`
- `comments (id, board_id, object_id, parent_id, author_id, body, resolved, created_at)`
- `share_links (id, board_id, role, token, enabled)`
- `sessions` (table used by the session store)

`board_objects.data` holds shape-specific fields (position, size, color, text, points for freehand, etc.) as JSON, since SQLite has no rich schema-per-type support and object shapes vary (BR-13–19).

Indexes: `board_objects(board_id)`, `board_members(board_id, user_id)`, `comments(board_id, object_id)`, `share_links(token)` — every query on the hot path (load a board, check a role, resolve a share link) is a lookup by one of these.

**Backup:** nightly file copy of the SQLite database (`sqlite3 .backup`, safe to run against a live WAL-mode database) to satisfy the "backed up daily" NFR.

## 4. Real-time collaboration (BR-28–33)

- Each board is a WebSocket "room." On connect, the client authenticates (session cookie), joins the room, and receives the current object list plus the list of present users.
- Object changes are broadcast as ops (`create`, `update`, `move`, `delete`) to everyone else in the room and persisted to SQLite.
- Cursor positions and "who's editing what" (BR-29–31) are broadcast but not persisted (ephemeral, in-memory only).
- Conflict handling for BR-32: last-write-wins per object field, with a server-assigned sequence number so all clients converge on the same final state.
- Reconnect handling for BR-33: the client keeps a local queue of ops made while offline. On reconnect, it re-joins the room, sends its queued ops (tagged with the client's last-known sequence number), and the server replays them, resolves conflicts with the same last-write-wins rule, and pushes back the authoritative state for anything that changed while the client was away.
- Undo/redo (BR-26) is client-side and per-user: each client keeps a local stack of its own ops (not other users') and undoes by sending the inverse op through the normal update path, so an undo is just another change that syncs and conflict-resolves like any other.

**Message envelope:** every WebSocket message (both directions) is JSON with a `type` field, so client and server can dispatch on it: `{ type, boardId, seq, payload }`. Message types:
- `join` / `joined` — client requests to join a board room; server replies with the current object list, present users and the latest `seq`.
- `op` — an object create/update/move/delete, in either direction; carries the object id, the change, and (from server) the assigned `seq`. A client only removes an op from its local pending queue once the server echoes it back with a `seq` — this ack is what makes the "no confirmed change is lost" NFR true even during a flaky-but-connected session, not just a full offline/reconnect.
- `cursor` — ephemeral pointer position, broadcast at most every 50ms per client (throttled) to keep bandwidth reasonable at 20 editors.
- `presence` — a user joined/left, or started/stopped editing a specific object (BR-30, BR-31).
- `ping` / `pong` — a heartbeat every 30s; if the server misses two heartbeats from a client, it's dropped from presence so others stop seeing a stale cursor/avatar.
- `error` — a rejected op (failed validation or role check), sent back to the originating client only, so its optimistic local change can be rolled back.

## 5. Auth (BR-1–4)

- Email/password: bcrypt-hashed, email verification token sent via SendGrid, required before board creation.
- Google sign-in: OAuth 2.0 Authorization Code flow.
- Password reset: single-use, time-limited token emailed via SendGrid.
- Sessions stored server-side (SQLite-backed session store), cookie is `httpOnly`, `secure`, `sameSite=lax`.
- Account deletion (Privacy NFR): `DELETE /account` marks the user row deleted, revokes sessions, and cascades to boards they own (soft-deleted via the existing `boards.deleted_at`/trash mechanism, then purged by the same 30-day job as BR-8).

## 6. Email (SendGrid)

Transactional templates needed, each mapped to the BR that requires it:
- Email verification (BR-1)
- Invite to a board (BR-37)
- @mention notification (BR-35)
- Access request, to the Owner (BR-46)
- Password reset (BR-3)

Sent asynchronously (fire-and-forget with retry) so email delivery never blocks a board action. Failures are logged, not retried indefinitely — a stuck SendGrid call must never hang a request.

## 7. API surface (sketch)

- `POST /auth/signup`, `/auth/login`, `/auth/logout`, `/auth/google`, `/auth/verify-email`, `/auth/reset-password`
- `GET/POST /boards` (list supports `?q=` search and `?sort=recent`, BR-9; list includes `starred`, BR-10), `GET/PATCH/DELETE /boards/:id`, `POST /boards/:id/duplicate`
- `POST /boards/:id/star`, `DELETE /boards/:id/star` (BR-10)
- `GET /boards/:id/trash`, `POST /boards/:id/restore` (BR-8 — a board's `deleted_at` is set, not the row deleted, until the 30-day purge job removes it)
- `GET /templates`, `POST /boards?templateId=` (BR-45 — templates are boards owned by a system account, duplicated the same way BR-7's duplicate works)
- `GET/POST /boards/:id/members`, `PATCH/DELETE /boards/:id/members/:userId` (BR-40), `POST /boards/:id/share-link`
- `POST /boards/:id/access-request` (BR-46 — notifies the Owner via SendGrid, per Section 6)
- `GET /boards/:id/objects` (initial load), object mutations happen over WebSocket
- `POST/GET /boards/:id/comments`, `POST /comments/:id/resolve` (BR-36)
- `POST /boards/:id/export` (BR-44, see Section 9)
- `WS /ws/boards/:id`

## 8. Security

- **Input validation:** every REST body and WebSocket op is schema-validated (e.g. with `zod`) before it touches the database — object type, field types and string lengths are all checked server-side, not just in the client.
- **XSS:** sticky note / text box / comment content is stored as plain text, never raw HTML; the frontend renders it as text (or a tightly limited, sanitized rich-text subset for BR-22's bold/italic/underline), never via `dangerouslySetInnerHTML` on unsanitized input.
- **CSRF:** session cookie is `sameSite=lax`, and state-changing REST routes additionally check a CSRF token; WebSocket ops are inherently same-origin-checked at the handshake.
- **Rate limiting:** login, signup and password-reset routes are rate-limited per IP; WebSocket ops are rate-limited per connection to stop a single client from flooding a board.
- **Uploads (BR-18):** images are validated by content (not just extension), resized/re-encoded on upload, capped at 10 MB per the NFR, and served from a path that can't be used to traverse the filesystem.
- **Authorization:** every REST route and every WebSocket op re-checks the caller's role against `board_members` server-side (never trusts a role cached on the client) — this is what BR-41 requires.

## 9. Export and thumbnails (BR-5, BR-44)

Both are the same underlying capability: rendering a board (or frame) server-side with a headless browser (Puppeteer/Playwright) that loads a print-only view and captures it. Export (BR-44) produces a PNG via screenshot or a PDF via print-to-PDF. Dashboard thumbnails (BR-5) reuse the PNG path, regenerated after a short debounce (e.g. 30s of inactivity) following an edit, not on every keystroke, and cached at `boards.thumbnail_url`. Reusing one pipeline for both, instead of a separate thumbnail renderer, keeps them visually consistent and halves the maintenance surface.

## 10. Testing

- **Unit:** business logic (role checks, conflict resolution, token generation) with Jest.
- **Integration:** REST routes against a temporary SQLite file per test run.
- **Real-time:** a test harness that opens multiple WebSocket clients against one board and asserts they converge to the same object state, covering BR-32 (concurrent edits) and BR-33 (reconnect).
- **End-to-end:** Playwright driving two browser contexts at once to cover journeys J1–J5 from business-requirements.md directly.

## 11. Deployment & ops

- **Decided in this iteration:** hosting must provide a persistent volume (not an ephemeral container filesystem) for both the SQLite file and `/uploads` — this was the open hosting risk from iteration 2. A VPS or any PaaS tier with a mounted persistent disk satisfies this; a platform whose filesystem resets on every deploy does not and is ruled out for MVP.
- **Environments:** `.env`-driven config for SendGrid API key, session secret, Google OAuth credentials, and the SQLite/uploads paths — never committed.
- **Process management:** a process supervisor (e.g. `pm2` or a systemd unit) restarts the Node process on crash, since there's a single process for the whole app.
- **Logging:** structured request/error logs to stdout, captured by the host; WebSocket connect/disconnect and op errors logged with board and user id for debugging BR-32/33 issues in production.

## 12. Non-functional mapping

- Real-time latency < 1s (NFR): single-process WebSocket broadcast is well within this for the 20-editor target.
- 20 concurrent editors / 100 viewers per board (NFR): acceptable for one Node process; needs load testing.
- HTTPS everywhere, passwords hashed, role checked server-side on every action (NFR): enforced in Express middleware before both REST and WebSocket ops (Section 8).
- 1,000-object board opens in under 3s (NFR): the initial `GET /boards/:id/objects` returns all objects in one query using the `board_objects(board_id)` index; Konva's canvas rendering (not per-object DOM nodes) keeps pan/zoom smooth at that count.

## 13. Known risks / open questions

- SQLite is single-writer: fine for MVP scale, but horizontal scaling (multiple app servers) isn't possible without moving to a client-server DB later. This is an accepted MVP tradeoff, not a blocker.
- Puppeteer/Playwright for export (Section 9) adds real memory/CPU overhead per export on the same single process serving live boards — worth watching under load and moving to a queued/worker job if exports start affecting real-time latency.
- Cursor fan-out at the NFR's stated ceiling (20 editors × 100 viewers, each editor's cursor throttled to 20/s) is up to ~40,000 cursor messages/sec broadcast in the worst case. Mitigate by only broadcasting `cursor` messages to other editors (viewers rarely need to see raw pointer motion), or by lowering the throttle further, before this is load-tested.

---

## Iteration Log

### Iteration 1
- File was empty; wrote first draft: stack, architecture, data model, real-time approach, auth, email, API sketch, and mapped choices back to business-requirements.md.

### Iteration 2
Critique of iteration 1:
- Frontend framework and canvas library were both left as TBD, blocking every other frontend decision.
- SQLite had no WAL mode, no indexes and no backup mechanism, despite Section 9 flagging it as the main risk.
- BR-33 (reconnect) and BR-26 (undo/redo) were named in business-requirements.md but had no technical approach.
- Image storage risk was noted but not resolved: "local disk" says nothing about whether the host is persistent.

Changes: chose React + Konva.js; added SQLite WAL mode, indexes and nightly backup; added a reconnect/resync protocol for BR-33 and a client-side undo/redo approach for BR-26; sharpened the image-storage risk to name the actual open decision (persistent vs. ephemeral hosting).

### Iteration 3
Critique of iteration 2:
- No security section, despite the business requirements' NFR demanding role checks, hashed passwords and HTTPS — validation, XSS, CSRF and rate limiting were all unaddressed.
- BR-44 (export to PNG/PDF) had no implementation approach.
- No testing strategy, so there was no way to verify BR-32/BR-33 (conflict resolution, reconnect) actually work.
- The hosting risk (persistent vs. ephemeral filesystem) was named in iteration 2 but never resolved.
- No deployment or logging story, despite a single-process design that needs a supervisor and needs visibility into WebSocket errors.

Changes: added a Security section (validation, XSS, CSRF, rate limiting, upload checks, authorization); added an Export section using headless-browser rendering; added a Testing section, including a real-time convergence harness for BR-32/33; added a Deployment & Ops section that resolves the persistent-volume hosting requirement; renumbered sections 8–9 to 8–13 to fit the new material.

### Iteration 4
Critique of iteration 3:
- Checked every BR against this document and found several with no technical approach at all: BR-5 (thumbnails), BR-8 (trash/restore), BR-9 (search), BR-10 (star), BR-45 (templates), BR-46 (access request) — all present in business-requirements.md, none reflected in the API surface or data model.
- The WebSocket section described the real-time behavior but never defined the actual message format, so "op", "cursor" and "presence" were just prose with nothing implementable.
- No heartbeat/timeout mechanism, so a client with a dead socket would appear present forever.
- A leftover typo ("fire-and-retry retry") from an earlier edit.

Changes: added the missing routes and data (star, trash/restore, templates, access-request, resolve-comment) to Section 7 and the `boards` table; defined the WebSocket message envelope and all message types including a ping/pong heartbeat; merged thumbnails into the export section since both need the same headless-render pipeline; fixed the typo.

### Iteration 5 (final)
Critique of iteration 4:
- Section 6 (Email) was still the un-mapped iteration-1 version — the edit meant to map each template to its BR silently failed to apply in iteration 4 (an old-text mismatch in the edit script) despite the iteration 4 log claiming a fix was needed elsewhere. Caught by re-reading the live file rather than trusting the log.
- The Privacy NFR ("users can delete their account") had no technical approach: no route, no `users` column for it.
- BR-40 (owner changes/removes a member's access) had no explicit route, only the general members collection endpoint.
- The WebSocket `op` message didn't say how a client knows a change is durably saved, which is what the "no confirmed change is lost" NFR actually depends on.
- Section 13 didn't quantify the one part of the real-time design most likely to break under the NFR's own stated concurrency ceiling: cursor broadcast fan-out.

Changes: fixed Section 6 to map each email template to its BR and note failure handling; added account deletion (`DELETE /account`, `users.deleted_at`) for the Privacy NFR; added explicit `PATCH/DELETE /boards/:id/members/:userId` for BR-40; added an ack step to the `op` message so "no confirmed change is lost" has a concrete mechanism; quantified the cursor fan-out risk at the stated concurrency ceiling.

**Final state:** stack fixed to Node.js + Express + SQLite (WAL) + SendGrid + React/Konva; 13 sections covering architecture, data model, real-time protocol, auth, email, API surface, security, export/thumbnails, testing, deployment and two accepted risks (SQLite single-writer, cursor fan-out at scale) carried forward intentionally rather than solved in the MVP.
