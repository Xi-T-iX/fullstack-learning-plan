# Exercises — stepwise practice with self-verification

Companion to [PLAN.md](PLAN.md). This file is the self-taught engine: fully written exercises for Weeks 0–9 (where a beginner needs the most hand-holding), a generation pattern for Weeks 10+, and definition-of-done checklists for all four projects.

## How to use this file

Every exercise follows the same loop:

1. **Learn** the day's topic from [RESOURCES.md](RESOURCES.md).
2. **Build** the exercise — typed by you, no autocomplete, no agent (see the Learning Protocol in PLAN.md).
3. **Verify** with the exercise's self-check. Every exercise has one — you should never wonder "did I get it right?"
4. **Explain** — open Cursor Ask mode and explain your solution in your own words; ask "what did I miss or misunderstand?" If you can't explain it, you haven't learned it — go back to step 1.

Getting stuck is the point. Struggle for 15–20 minutes before asking Cursor, and when you do ask, ask for *hints*, not solutions: "Give me a hint, not the answer."

---

# Weeks 0–9: fully written exercises

## Week 0 — Setup

**0.1 — Hello, pipeline.** Follow sections 1–3 of [GETTING-STARTED.md](GETTING-STARTED.md) end to end: install, configure git, create the `learning-fullstack` repo, push an `index.html` containing "Hello, I'm Kshitij".
*Self-check:* your repo page on github.com shows `index.html` and your commit message. Open the file on GitHub and see your HTML.
*Stretch:* make a second commit changing the text, push, and find both commits in the History view on GitHub.

**0.2 — How the web works, in your own words.** After the Day 2 reading, write 5 sentences in `learning-log.md` explaining what happens between typing a URL and seeing a page (DNS → request → response → render).
*Self-check:* paste your 5 sentences into Ask mode: "Grade this explanation out of 10 and correct anything wrong."

## Week 1 — HTML

**1.1 — Structure from scratch.** Blank file → type the full HTML skeleton from memory (`<!DOCTYPE html>`, `html`, `head`, `title`, `body`). Add an `h1`, two paragraphs, an unordered list of 3 AEC tools you know, and a link to ShapeDiver that opens in a new tab.
*Self-check:* right-click the page → Inspect. The Elements tree matches your intended nesting exactly; the link has `target="_blank"`.

**1.2 — The inquiry form.** Build a form with: name (text), email (email type), project type (select with 3 options), message (textarea), and a submit button. Every input must have a proper `<label>`.
*Self-check:* click each label — its input gets focus (that's what `for`/`id` wiring does). Submit with an invalid email — the browser blocks it (that's the `email` type working).

**1.3 — Todo skeleton.** Static structure: page heading, one text input + "Add" button, and a list of 3 hardcoded todo items, each with a checkbox and a "delete" button.
*Self-check:* Inspect and confirm: one `<ul>` with three `<li>`, each `li` contains checkbox + text + button.

**1.4 — Semantics audit (uses Cursor correctly).** Take 1.3, then in Ask mode: "Audit @index.html for semantic HTML and accessibility. List issues, but let me fix them myself." Fix every issue by hand.
*Self-check:* a second audit request returns no major issues.

## Week 2 — CSS core

**2.1 — Box model, visible.** Three `<div>`s. Give each different `margin`, `padding`, and `border`. Set `box-sizing: border-box` on one and `content-box` on another, same `width: 200px`.
*Self-check:* in DevTools, select each div and study the box-model diagram (bottom of the Styles panel). Predict each box's rendered width *before* looking, then confirm. Explain to Cursor why the two 200px boxes render differently.

**2.2 — Fixed navbar.** A navbar that stays at the top while the page scrolls (make the body tall with filler text). Links spaced horizontally.
*Self-check:* scrolling keeps the bar visible; no content hides *under* it at the top (hint if broken: `padding-top` on body).

**2.3 — Flexbox axes.** A container with 3 cards. Using only flexbox properties, produce: (a) row, centered both axes; (b) column, right-aligned; (c) row with equal space between.
*Self-check:* you used `justify-content`/`align-items` (not margins) for all three. For each layout, state which is the main axis and which the cross axis — say it out loud.

**2.4 — Project cards.** Card grid of 3 real past AEC projects (image, title, one-liner). Flexbox with wrap.
*Self-check:* narrow the browser window — cards wrap instead of overflowing or squashing below readability.

## Week 3 — Layout + responsive

**3.1 — Grid rebuild.** Rebuild 2.4 with CSS Grid: 3 columns desktop, `gap` for spacing.
*Self-check:* in DevTools, click the "grid" badge next to the container element — the overlay shows your tracks. Explain to Cursor when you'd pick grid vs flexbox.

**3.2 — Mobile-first todo.** Media queries: single column below 600px, two-panel (input left, list right) above 900px.
*Self-check:* DevTools device toolbar (`Ctrl+Shift+M`) — check 375px, 768px, 1200px. No horizontal scrollbar at any width.

**3.3 — Polish pass.** Add to the todo app: hover states on buttons, a card shadow, border-radius, and a 0.2s transition on hovers.
*Self-check:* hover changes are smooth, not instant. Ask Cursor: "critique the visual design of @styles.css like a designer" — then apply ONE suggestion by hand.

**3.4 — Saturday ship.** The AEC SaaS landing page (per PLAN.md Week 3): hero headline stating a *problem*, 3 feature cards, one call-to-action button, footer. Deploy to GitHub Pages.
*Self-check:* the live URL loads on your phone. A friend can tell you in one sentence what the fake product does — if they can't, rewrite the headline (that's a founder skill, not a CSS skill).

## Week 4 — JavaScript basics

**4.1 — Console warmup.** In the browser console: declare a `const` building name, a `let` floor count; increment floors; template-string print `"Tower A has 12 floors"`. Try reassigning the `const` and read the error.
*Self-check:* you can explain to Cursor why the error happened and when to pick `const` vs `let`.

**4.2 — Functions three ways.** Write `areaOfSlab(length, width)` as a function declaration, an arrow function, and an arrow with default parameters. Call all three.
*Self-check:* all return the same number; you can tell Cursor the syntax differences without looking.

**4.3 — Grasshopper in text.** Given `const loads = [12.5, 8.2, 22.1, 5.9, 17.3]` (kN): `map` to add 10% safety factor, `filter` for loads over 10, `reduce` to total, `find` the first over 20. No loops — array methods only, like GH components chained on a list.
*Self-check:* compute expected values by hand first; console output matches. Explain each method to Cursor using a Grasshopper analogy.

**4.4 — Objects: your world.** Model `{ id, type: "beam", material, spanMeters, loadKN }`. Make an array of 4 elements. Destructure one; JSON.stringify the array and read it.
*Self-check:* `filter` all steel beams spanning over 6m in one line.

**4.5 — Saturday: beam calculator.** Console program: array of beam objects → compute simply-supported max bending moment (`M = wL²/8`) for each → print a formatted report line per beam → flag any exceeding a limit you choose. You know this domain — the JS is the only new part.
*Self-check:* hand-verify one beam's math. Then ask Cursor to review the *code style* only (not the engineering).

## Week 5 — DOM

**5.1 — Select and mutate.** On your todo HTML: select the heading with `querySelector`, change its text; select all `li` with `querySelectorAll`, log each; change the background of the second item.
*Self-check:* effects visible on the page; you can explain the difference between the two selector methods.

**5.2 — Render from data.** Delete the hardcoded `<li>`s. Define `const todos = [...]` (array of objects `{ text, done }`) and write `renderTodos()` that builds the list with `createElement`/`appendChild`.
*Self-check:* adding an item to the array and re-running re-renders correctly. **This is the core exercise of the week** — it's the mental model React later automates. If it feels magic, redo it from scratch tomorrow.

**5.3 — Style via state.** Give done items a line-through by toggling a CSS class from JS (`classList`), driven by the `done` property — never inline styles.
*Self-check:* flipping a `done` value in the array and re-rendering updates the strike-through.

## Week 6 — Events

**6.1 — Add.** Wire the input + button: click reads the input, pushes `{ text, done: false }` into the array, re-renders, clears input. Then also on Enter.
*Self-check:* both paths work; empty input does nothing (guard clause).

**6.2 — Delete + toggle.** Delete button removes the item from the *array* (then re-render); checkbox toggles `done`. Use one listener on the `<ul>` (event delegation), not one per item.
*Self-check:* add 5, delete the 3rd — the *correct* one goes. Explain to Cursor why delegation keeps working for newly added items when per-item listeners wouldn't.

**6.3 — Persist (stretch).** `localStorage`: save on every change, load on startup.
*Self-check:* refresh the page — todos survive. **Project 1 frontend ✓ per PLAN.md Week 6.**

## Week 7 — JS architecture

**7.1 — Modularize.** Split the todo app into `state.js` (array + add/remove/toggle functions), `render.js` (DOM), `main.js` (wiring), using `import`/`export` (needs Live Server).
*Self-check:* app works identically; `state.js` contains **zero** `document.` references — state logic knows nothing about the DOM. That separation is the whole lesson.

**7.2 — Closure counter.** Write `createCounter()` returning `{ increment, decrement, value }` where the count variable is inaccessible from outside.
*Self-check:* two independent counters don't interfere. Explain to Cursor what closes over what.

## Week 8 — Async

**8.1 — Predict-then-run.** Write a script with `console.log("1")`, a `setTimeout` logging "2" at 0ms, a promise `.then` logging "3", and `console.log("4")`. **Write your predicted order down first**, then run.
*Self-check:* if your prediction was wrong (likely!), ask Cursor to explain the event loop / microtask queue until you can predict correctly on a second variant you invent.

**8.2 — Fetch weather.** Using Open-Meteo (free, no key): fetch Pune's current temperature with `async/await`, log it, handle failure with `try/catch` (test by breaking the URL).
*Self-check:* real temperature prints; broken URL prints your friendly error instead of an unhandled rejection. *Founder-track note: this week you also create `problem-log.md` (see PLAN.md Track 2).*

**8.3 — Sequential vs parallel.** Fetch weather for 3 cities sequentially (await one by one) then with `Promise.all`. Time both with `console.time`.
*Self-check:* parallel is measurably faster; you can explain why to Cursor.

## Week 9 — APIs in earnest

**9.1 — Two-API dashboard.** Small page combining two free APIs (e.g., Open-Meteo + a geocoding API to look up any city typed by the user: geocode → then weather). Show loading text while fetching and readable errors on failure.
*Self-check:* misspelled city → friendly message, not a crash; DevTools Network tab shows the two requests firing in the right order — find them and inspect the JSON.

**9.2 — Robustness drill.** Add: a "Loading…" state, an empty-input guard, and a retry button on failure.
*Self-check:* throttle the network in DevTools (Network tab → "Slow 3G") and confirm the loading state actually shows.

---

# Weeks 10+ — the generation pattern

From the backend phase onward, pre-written exercises would drift from where you actually are. Instead, generate them weekly — the skill of specifying your own practice is itself founder training. Every Monday (or when starting a topic), give Cursor (Ask mode) this template:

```text
Based on Week N of @PLAN.md (topic: ___), generate 4 exercises for me.

Context: I've completed everything through Week N-1. My weak spots right now: ___.

Rules:
- Ordered easy → hard; the last one should combine this week's topic with earlier material.
- AEC-flavored where natural (building elements, models, specs) — my domain.
- Each exercise must have: goal, steps, expected result, and a SELF-CHECK I can
  verify alone (exact console output, a curl command and its response, a DevTools
  check, or a test that should pass).
- Do NOT show solutions. When I paste my attempt, give hints first, full
  solution only if I ask twice.
```

Rules of thumb that keep this honest:
- If you complete all 4 without friction, ask for a harder set — friction is where learning lives.
- Every backend exercise's self-check should be a request you run yourself (browser or `curl`) with an expected response.
- From Week 26 (testing gate): at least one generated exercise per week should be "write a test that proves X works".

---

# Project checkpoints — definition of done

Audit yourself against these before declaring a project finished. (These mirror the specs in PLAN.md — the PLAN.md wording wins if they ever drift.)

## Project 1 — Todo app (by end of Week 15)
- [ ] Add / delete / toggle / persist works in the browser (Week 6 version)
- [ ] Refactored into modules — state logic has no DOM references (Week 7)
- [ ] Express API backs it: signup/login (JWT), todos are per-user (Week 13)
- [ ] Data survives a server restart — persisted in Mongo, then Postgres+Prisma (Weeks 14–15)
- [ ] README with setup steps; a stranger could run it
- [ ] You can whiteboard the full request flow (browser → API → DB → back) to Cursor without notes

## Project 2 — SpecSense (Week 21–22)
- [ ] Paste a spec excerpt → structured table renders (discipline, object/class, property, requirement type, unit+value, source clause, confidence)
- [ ] Uses structured outputs (JSON Schema), not free-text parsing
- [ ] Handles a nonsense input gracefully (no crash, honest "nothing extracted")
- [ ] Export to CSV works
- [ ] One paragraph in the README: how this could later feed IDS-style model checks (your product thesis, written down)

## Project 3 — ModelHub (Weeks 26–27, extended 30–32)
- [ ] Upload IFC → elements land in Postgres → dashboard filters + CSV export (v1, Week 27)
- [ ] In-browser 3D viewer; click element → properties (Week 30)
- [ ] Speckle project push/pull (Week 31)
- [ ] Async pipeline: upload → queued job → progress via websocket → done (Week 32)
- [ ] Architecture rule holds: raw IFC in object storage is canonical; viewer formats are regenerable derivatives; every pipeline step writes a job record
- [ ] Uploads hardened per OWASP checklist (type/size validation, no trusting filenames)
- [ ] **Testing gate:** Vitest units on extraction logic + one Playwright E2E (upload → see dashboard)
- [ ] Multi-user: users see only their own models

## Project 4 — Capstone MVP (Weeks 37–42)
- [ ] Problem chosen from the validated ranked list (founder track) — not from enthusiasm
- [ ] Turborepo monorepo: shared auth + UI packages
- [ ] Multi-tenant: orgs, proper RBAC
- [ ] One real external integration (Speckle / APS / webhook)
- [ ] One openBIM standard beyond IFC in the product (BCF or IDS)
- [ ] One AI feature that earns its place
- [ ] Telemetry: Sentry + structured logs + job-status records
- [ ] Tests: Vitest baseline + Playwright happy path — a design partner can use it unsupervised
- [ ] Dockerized, CI/CD, live on your VPS, custom domain + SSL
- [ ] Landing page with waitlist + PostHog; case study written; demo video recorded
- [ ] Shown to every Mom Test contact
