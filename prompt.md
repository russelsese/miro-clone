mkdir -p web && cd web && claude --dangerously-skip-permissions "You are building a full web application in this 'web' directory, based on the materials in the parent repo. Do NOT ask me for permission or clarification at any point — work through ambiguities using your best judgment, document any assumptions you make in a NOTES.md file, and keep going until the application is fully built and working end-to-end.

## Step 1: Gather context (do this first, fully, before writing any code)
1. Read every file in the ../requirements/ folder — both the business requirement document(s) and the technical requirement document(s). Summarize your understanding of scope, features, and constraints in a PLAN.md file (inside this web/ folder) before proceeding.
2. Review the Miro-replica template/sample UI design provided in the parent repo. Treat it as the visual and interaction reference for styling, layout, components, and UX patterns (canvas/board behavior, sidebars, toolbars, drag-and-drop, zoom/pan, etc. — whatever is relevant to this app).
3. Cross-reference the business requirements against the technical requirements. If anything conflicts or is underspecified, resolve it yourself, note the decision and reasoning in NOTES.md, and continue.

## Step 2: Plan the build
- Build the entire application inside this current directory (web/).
- Break the work into milestones (e.g., project scaffold, core data models, canvas/board engine, UI components, interactions, persistence, polish).
- Write this milestone breakdown into PLAN.md.
- Choose a tech stack consistent with the technical requirements doc. If the doc doesn't specify, choose sensible modern defaults and state why in NOTES.md.

## Step 3: Build
- Implement milestone by milestone, in order.
- After each milestone, run the app or tests to verify it actually works before moving to the next. Fix errors yourself — do not stop to ask me about failing tests, missing packages, or type errors; resolve them.
- Match the sample UI's look and feel (spacing, colors, typography, component structure) unless the requirements explicitly call for something different.
- Install any dependencies you need without asking.
- Commit progress incrementally after each milestone with a clear commit message if this is a git repo.

## Step 4: Finish
- Once all requirements are implemented, do a final pass: run the app, test through the major flows, fix bugs you find.
- Update PLAN.md to check off completed milestones.
- Write a final SUMMARY.md describing what was built, how to run it, any known limitations, and all assumptions made along the way.

## Ground rules
- Do not pause to ask 'should I proceed?' or 'do you want me to continue?' — always proceed.
- If something is genuinely blocking (e.g., a required file is missing entirely), note it in NOTES.md and make a reasonable placeholder/mock so you can keep building, rather than stopping.
- Prioritize getting a fully working, end-to-end application over perfection on any single feature."