# Business Requirements — Miro Clone (Collaborative Whiteboard)

## 1. Purpose

Build a web-based, real-time collaborative whiteboard that covers the core features most Miro users rely on day to day: signing in, creating boards, placing content on an infinite canvas, and working on the same board together live.

## 2. Scope

**In scope (MVP):** the features used by roughly 80% of Miro users, listed in Section 5.

**Out of scope (MVP):** templates marketplace, integrations (Jira, Slack, etc.), video/audio calls, AI features, presentation mode, voting/timer apps, Kanban/table widgets, mind maps, enterprise SSO/SCIM, billing, mobile native apps, offline editing, version history.

## 3. Users and Roles

| Role | Description |
|------|-------------|
| Board Owner | Creates the board, manages sharing, can rename or delete it |
| Editor | Can create, edit and delete content on the board, and invite others as Editor, Commenter or Viewer |
| Commenter | Can view the board and add comments, cannot edit content. **Should:** if it slips, links and invites offer only Editor and Viewer |
| Viewer | Can view the board and follow live changes, cannot edit or comment |
| Anonymous visitor | Opens a public view-only link without logging in; appears as "Guest" |

## 4. Goals

- A new user can sign up and have their first board open in under 1 minute.
- Two or more people can edit the same board and see each other's changes in under 1 second.
- The canvas stays smooth with a typical board size (up to ~1,000 objects).

**Success metrics (first 3 months after launch):**
- At least 60% of new sign-ups create or open a board on their first day.
- At least 40% of active boards have 2 or more contributors.
- Fewer than 1% of sessions hit a sync error or lose changes.

## 5. Functional Requirements

Priority: **[M] Must** (needed for launch, core to the 80%), **[S] Should** (high value, can slip to shortly after launch). A Must never depends on a Should.

IDs are stable: new requirements get the next free number and are placed in their section, so numbers may appear out of order.

### 5.1 Authentication and account
- BR-1 [M]: Users can sign up with email and password (email must be verified) and log in.
- BR-2 [M]: Users can sign in with Google.
- BR-3 [M]: Users can log out and reset a forgotten password.
- BR-4 [M]: Users can set their display name and profile picture (used on cursors, avatars and comments).

### 5.2 Board management (dashboard)
- BR-5 [M]: After login, users see a dashboard listing boards they own or that were shared with them, with a thumbnail, name and last-modified date.
- BR-6 [M]: Users can create a new blank board; it opens immediately with the toolbar ready and the creator as Owner.
- BR-45 [S]: When creating a board, users can pick a blank board or one of a few built-in starter templates (brainstorm, retrospective, flowchart, kanban-style columns built from frames and stickies).
- BR-7 [M]: Users can rename, duplicate and delete boards they own. A duplicate copies the content only; the person duplicating becomes its Owner and no members are copied.
- BR-8 [S]: Deleted boards go to a trash and can be restored for 30 days.
- BR-9 [S]: Users can search boards by name and sort by last opened.
- BR-10 [S]: Users can star boards to keep them at the top of the dashboard.

### 5.3 Canvas navigation
- BR-11 [M]: Each board is an infinite canvas the user can pan and zoom (mouse, trackpad, keyboard).
- BR-12 [M]: Users can see the current zoom level, zoom to fit all content, and reset to 100%.

### 5.4 Canvas content
- BR-13 [M]: Sticky notes with text and a choice of colours.
- BR-14 [M]: Basic shapes (rectangle, circle, triangle, diamond) with text inside.
- BR-15 [M]: Free text boxes.
- BR-16 [M]: Lines and arrows/connectors that stay attached when connected objects move.
- BR-17 [M]: Freehand pen and an eraser.
- BR-18 [M]: Uploaded images (by file picker, drag-and-drop or paste).
- BR-19 [M]: Frames that group and label areas of the board; moving a frame moves its contents.

### 5.5 Editing
- BR-20 [M]: Select one or many objects (click, shift-click, drag a selection box).
- BR-21 [M]: Move, resize, rotate, copy/paste, duplicate and delete selected objects.
- BR-22 [M]: Change style: fill colour, border colour/width, font size, bold/italic/underline, text alignment.
- BR-23 [S]: Bring objects forward or send them back (layer order).
- BR-24 [S]: Alignment guides and snapping when moving objects.
- BR-25 [S]: Lock objects so they cannot be moved accidentally.
- BR-26 [M]: Undo and redo the user's own actions.
- BR-27 [S]: Common keyboard shortcuts (delete, copy, paste, undo, redo, select all, tool shortcuts).

### 5.6 Real-time collaboration
- BR-28 [M]: All changes made by one user appear for all other users on the board in real time.
- BR-29 [M]: Users see other participants' live cursors with their names.
- BR-30 [M]: Users see who is currently on the board (avatars in the header).
- BR-31 [S]: Users see when someone else is currently editing an object (e.g. typing in a sticky note).
- BR-32 [M]: If two users change the same object at the same time, the board stays consistent for everyone and no one's work is silently corrupted.
- BR-33 [M]: If a user's connection drops, they see a clear indicator; their changes are kept and synced when the connection returns.

### 5.7 Comments
- BR-34 [M]: Users can leave comments pinned to a spot or object on the board and reply to them.
- BR-35 [S]: Users can @mention board members in comments; mentioned users are notified by email.
- BR-36 [S]: Users can resolve and reopen comment threads.

### 5.8 Sharing and permissions
- BR-37 [M]: Board Owners and Editors can invite people by email as Editor or Viewer (and Commenter, once BR-34's Commenter role ships); invitees receive an email with a link.
- BR-38 [M]: Invitees without an account are asked to sign up, then land directly on the board.
- BR-39 [M]: Board owners can create a share link with a chosen access level, and turn it off. Editor and Commenter links require login; a View link can optionally be opened by anyone without logging in.
- BR-40 [M]: Board owners can change or remove a member's access.
- BR-41 [M]: Users can only perform actions allowed by their role.
- BR-46 [S]: A logged-in user who opens a board they can't access, or a Viewer who wants to edit, can request access; the Owner is notified by email and can approve or deny it.

### 5.9 Persistence and export
- BR-42 [M]: All board changes are saved automatically; there is no save button.
- BR-43 [M]: A board looks the same when reopened later or on another device.
- BR-44 [S]: Users can export a board or frame as PNG or PDF.

### 5.10 Key user journeys (acceptance criteria)

**J1 — First sign-in to first board** [M] (BR-1, 2, 5, 6, 13, 42)
1. A new user signs up with Google or email (after verifying the email) and lands on an empty dashboard with a clear "New board" button.
2. They click "New board", and a blank board opens in under 3 seconds.
3. They add a sticky note, type text, and reload the page: the sticky note is still there.

**J2 — Invite and collaborate live** [M] (BR-29, 30, 32, 37, 38)
1. The Owner clicks "Share", enters a teammate's email, and picks Editor.
2. The teammate receives the email, signs up or logs in, and lands on the same board.
3. Both see each other's avatar and named cursor.
4. When one moves a shape, the other sees it move in under 1 second.
5. Both type in different sticky notes at the same time, and both edits are kept.

**J3 — Share a view-only link** [M] (BR-39, 41)
1. The Owner turns on the view link with "Anyone with the link can view".
2. A person with no account opens it, sees the board update live, and appears as "Guest".
3. They can't edit or comment.
4. When the Owner turns the link off, the Guest loses access on their next action or on reload.

**J4 — Review with comments** [S] (BR-34, 35, 36, Commenter role)
1. A Commenter pins a comment on a frame and @mentions the Owner.
2. The Owner gets an email, replies in the thread, and resolves it.
3. The Commenter can't move or edit any object.

**J5 — Recover from a dropped connection** [M] (BR-33, 42)
1. While an Editor is working, their network drops. An "Offline, reconnecting…" indicator appears.
2. They keep editing.
3. When the network returns, their edits sync and other users see them, with nothing lost or duplicated.

## 6. Non-functional Requirements
- **Browsers:** current Chrome, Edge, Firefox and Safari on desktop. Tablets can view boards; editing on tablets is not required.
- **Real-time latency:** changes reach other users in under 1 second (p95) on typical networks.
- **Concurrency:** at least 20 simultaneous editors and 100 viewers on one board.
- **Performance:** a 1,000-object board opens in under 3 seconds; pan and zoom stay smooth (~60 fps).
- **Limits:** images up to 10 MB each (PNG, JPG, GIF, SVG).
- **Security:** HTTPS everywhere; passwords hashed; every board action checks the user's role on the server.
- **Reliability:** no confirmed change is lost; data is backed up daily.
- **Privacy:** users can delete their account; boards they own are deleted too, after the trash period.

## 7. Decisions and Open Questions

**Decided:**
- Public view-only links are allowed (see BR-39) because they are a common way to share boards.
- The Commenter role stays, as a Should.
- A small set of built-in starter templates is added as a Should (BR-45); a full templates marketplace stays out of scope.

**Open:**
- None blocking. To revisit after launch: presentation mode and voting, the next most-used features outside this scope.

---

## Iteration Log

### Iteration 1
- File was empty; wrote first draft covering auth, dashboard, canvas, real-time collaboration, sharing and persistence.

### Iteration 2
Critique of iteration 1:
- No user profile, so there was no name or picture to show on cursors and avatars.
- Missing the Commenter role, which Miro reviewers use.
- Everyday editing gaps: text formatting, layer order, alignment/snapping, lock, keyboard shortcuts.
- No rules for two people editing the same object, or for a dropped connection.
- Comments had no @mentions, resolve or notifications.
- Invites didn't cover the invite email or people without an account.
- Navigation was missing zoom-to-fit.
- Export and trash were open questions, though both are common and cheap to build.

Changes: added BR-4, BR-8, BR-10, BR-12, BR-22–25, BR-27, BR-31–33, BR-35–38, BR-40, BR-44; added the Commenter role; split the canvas section into navigation, content and editing; resolved the export and trash questions.

### Iteration 3
Critique of iteration 2:
- All 44 requirements had the same weight, with no Must/Should split, which made it hard to see the core 80%.
- An open question asked whether a Commenter role was needed, though the roles table already included one.
- Public links were undecided, although "anyone with the link can view" is standard Miro usage.
- There was no email verification, though invites and password resets depend on it.
- The non-functional requirements were vague, with no load time, file limits or backups.
- There was some scope creep: highlighter, links and bullet lists aren't core.

Changes: tagged every requirement [M] or [S] (11 are Should); added an anonymous visitor role and public view links; added email verification to BR-1; removed the highlighter, links and bullet lists; made the non-functional requirements measurable; turned the open questions into decisions.

### Iteration 4
Critique of iteration 3:
- It was a feature list with no end-to-end journeys or acceptance criteria, so there was no way to test the login → board → invite → collaborate flow.
- Templates were still undecided, although most Miro boards start from one.
- It didn't say that Editors can invite, or what Duplicate copies.
- There was no way to request access, a common Miro moment.
- There were no product success metrics, only technical goals.

Changes: added user journeys J1–J5 with acceptance criteria (5.10); added BR-45 (starter templates, Should) and BR-46 (request access, Should); made Editor invites explicit; clarified BR-6 and BR-7; added success metrics; closed the templates question.

### Iteration 5 (final)
Critique of iteration 4:
- BR-37 said only Owners invite, but the roles table says Editors can too.
- Must requirements (BR-37, BR-39) depended on the Commenter role, which is a Should.
- J4 was built entirely on Should features but wasn't marked as one.
- Journeys didn't point back to the requirements they test.
- IDs were out of order with no note saying they're stable.
- There was a formatting slip in the Decided list.
- There were no privacy basics.

Changes: fixed BR-37; added the rule that a Must never depends on a Should, plus a fallback if the Commenter role slips; tagged the journeys [M]/[S] and linked them to BR IDs; added a note that IDs are stable; added a Privacy requirement; fixed the Decided list.

**Final state:** 46 requirements (33 Must, 13 Should) and 5 user journeys, covering sign-in → dashboard → new board → canvas editing → sharing → real-time collaboration → persistence.
