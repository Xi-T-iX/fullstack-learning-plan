# Fullstack Plan — AI-Native AEC Founder Track

**Start:** Friday, 17 Jul 2026  
**MVP launch:** Friday, 8 May 2027  
**Pace:** 90 minutes/day, Mon–Sat (Sundays off)  
**Stack (one path, no detours):** HTML/CSS → JavaScript → TypeScript (by Milestone 3) → React → Next.js → Postgres (Neon) → Vercel  

Open **[dashboard.html](https://xi-t-ix.github.io/fullstack-learning-plan/)** every session. Lessons live in `lessons/`. Update the app only via `node sync.mjs` (see GETTING-STARTED.md).

---

## Who this is for

You are an architect / computational designer (Grasshopper, ShapeDiver, B2B sales) with **zero professional coding experience**. You learn by doing, with plain language and construction analogies. End goal: ship a small AEC B2B SaaS MVP yourself — a founder who builds with AI, not a job-seeking developer chasing algorithms.

**ShapeDiver is a reference network, not a product template.** Do not build another Grasshopper-to-web configurator.

---

## Fixed end goals (what “done” means by May 2027)

1. You can explain every line of code you ship (typed by you; AI is tutor/reviewer).
2. Twelve live URLs exist — one per milestone — however small.
3. **MVP shipped:** one workflow, one user type, one useful AI feature, no payments.
4. You have a repeatable AI-native workflow: ask for hints → build → self-check → explain back → commit.

### MVP definition (locked)

| | |
|--|--|
| **User** | Project manager at a small AEC firm |
| **Workflow** | PM pastes a short project brief → app extracts a structured requirements table → PM reviews/edits rows → exports CSV |
| **AI feature** | Structured extraction (JSON schema), not a chat toy |
| **Out of scope** | Payments, multi-tenant enterprise SSO, mobile apps, BIM authoring |

Founder Track (scoping this MVP) stays **dormant until Milestone 4**.

---

## How you learn with Cursor (every day)

| Phase of plan | Cursor use |
|---------------|------------|
| M1–M3 | **Ask mode default.** Type all exercise code. Tab autocomplete OFF. |
| M4–M7 | AI may scaffold boilerplate; **you read every diff** before accept. Core logic still yours first. |
| M8–M12 | Agent mode OK for speed; you write specs and verify like a lead. |

**Standing rules** are in GETTING-STARTED.md. Short version: struggle 15–20 min on concepts (then hints); tooling/PATH after 5 min; never accept exercise solutions on first ask.

---

## Daily 90-minute block

| Time | Phase |
|------|--------|
| 0:00–0:10 | Review / quiz (yesterday + any review-queue redo) |
| 0:10–0:40 | Lesson (in the dashboard) |
| 0:40–1:25 | **Build** the exercise |
| 1:25–1:30 | Commit + 2–3 line log |

**Saturday:** ship/polish + redo one exercise from **4+ weeks ago** from scratch (no notes).  
**Sunday:** off. Optional 10 min: skim next days; from M4, one founder note.

---

# Milestone 1 — A live AEC portfolio page on the internet

**Dates:** 17 Jul 2026 → 8 Aug 2026  
**Shipped outcome:** Public URL (GitHub Pages) — one-page portfolio: who you are, 3 AEC projects, contact. Ugly is fine; live is required.

### Concepts
Tools (Node, Git, GitHub, Cursor) · How the web works · HTML structure & semantics · Forms · Minimal CSS (box model, flex, responsive) · Deploy · Asking Cursor for hints, not answers

### Saturday review
Sat 8 Aug: redo **Exercise M1-D3** (HTML structure from memory) before polishing the live site.

### Definition of done
- [ ] Portfolio live on a URL you can open on your phone
- [ ] Repo on GitHub with ≥5 commits you wrote messages for
- [ ] You can explain HTML skeleton + one CSS layout choice to Cursor without notes
- [ ] Tab autocomplete still off; all exercise HTML/CSS typed by you

### Days & exercises

#### Day 2026-07-17 — M1-D1 · Your toolbox
**Concept:** What Node, Git, GitHub, and Cursor are (not how to master them yet).  
**Lesson:** `lessons/m01/d01.md`

**Exercise M1-D1 — Install and verify**  
**Goal:** All four tools installed; you can prove each works.  
**You will use:** Browser, installer UIs, Cursor terminal (`Ctrl+\``).  
**Steps:**  
1. Follow GETTING-STARTED.md §1 — Node LTS, Git, GitHub account, Cursor settings (Tab off).  
2. In a **new** terminal run `node -v` and `git --version`.  
3. In Cursor Ask mode, ask: “In one sentence each, what are Node, Git, and GitHub?”  
**Constraints:** Do not skip the version checks. Do not enable Tab autocomplete.  
**Self-check:** Both commands print version numbers; Ask mode replies.  
**Expected:** Versions on screen; you know Git ≠ GitHub.  
**AI-native practice:** Use Ask mode only — no Agent editing your machine for you.

---

#### Day 2026-07-18 — M1-D2 · How the web works + first push
**Concept:** DNS → HTTP request → response → browser render; git commit/push.  
**Lesson:** `lessons/m01/d02.md`

**Exercise M1-D2 — Hello, pipeline**  
**Goal:** Repo `learning-fullstack` on GitHub with `index.html` saying hello.  
**Steps:**  
1. Create folder, `git init`, write `index.html` by hand (skeleton + one `<h1>`).  
2. Commit and push (GETTING-STARTED §3).  
3. Write 5 sentences in `learning-log.md`: what happens when someone types a URL.  
**Self-check:** GitHub shows the file; paste your 5 sentences into Ask mode for a grade /10.  
**AI-native practice:** After the grade, ask “what concept was I missing?” once.

---

#### Day 2026-07-20 — M1-D3 · HTML document structure
**Concept:** Elements, tags, nesting — the building’s frame.  
**Lesson:** `lessons/m01/d03.md`

**Exercise M1-D3 — Structure from memory**  
**Goal:** Blank file → valid page: `h1`, 2 paragraphs, list of 3 AEC tools, link to ShapeDiver (`target="_blank"`).  
**Constraints:** Type from memory after one read of the lesson; no copy-paste from chat.  
**Self-check:** Inspect → Elements tree matches your nesting; link has `target="_blank"`.  
**AI-native practice:** If stuck 15 min, ask for a **hint** (“what tag wraps list items?”) not the full file.

---

#### Day 2026-07-21 — M1-D4 · Semantic HTML
**Concept:** `header` / `nav` / `main` / `footer` vs soup of `div`s.  
**Lesson:** `lessons/m01/d04.md`

**Exercise M1-D4 — Restructure the page**  
**Goal:** Same content, semantic landmarks; one image with meaningful `alt`.  
**Self-check:** Landmarks visible in Accessibility tree (DevTools).  
**AI-native practice:** Ask mode: “Audit @index.html for semantics — list issues only, don’t edit.”

---

#### Day 2026-07-22 — M1-D5 · Forms
**Concept:** Labeled inputs — every B2B lead form’s bones.  
**Lesson:** `lessons/m01/d05.md`

**Exercise M1-D5 — Project inquiry form**  
**Goal:** Form: name, email, project type (`select`), message, submit; every control has a `<label>`.  
**Self-check:** Clicking label focuses control; invalid email blocked by browser.  
**AI-native practice:** Ask why `label`+`for` matters for accessibility — explain back in your words.

---

#### Day 2026-07-23 — M1-D6 · Static room list skeleton
**Concept:** Lists as structure for data you’ll later make dynamic.  
**Lesson:** `lessons/m01/d06.md`

**Exercise M1-D6 — Room inventory skeleton**  
**Goal:** Page titled “Room inventory”: input + Add button (not wired), `<ul>` of 3 hardcoded rooms (name + area m²).  
**Self-check:** One `ul`, three `li`, each with text for name and area.  
**AI-native practice:** Resist Agent “make it work” — today is HTML only.

---

#### Day 2026-07-24 — M1-D7 · Accessibility + AI audit
**Concept:** Using AI as auditor, you as fixer.  
**Lesson:** `lessons/m01/d07.md`

**Exercise M1-D7 — Fix the audit**  
**Goal:** Ask Cursor (Ask) to audit room inventory for a11y; **you** apply every fix by hand.  
**Self-check:** Second audit returns no major issues.  
**AI-native practice:** Never let Agent apply the fixes — you type them.

---

#### Day 2026-07-25 — M1-D8 · Project Saturday: portfolio HTML
**Concept:** Shipping a real artifact > perfect CSS.  
**Lesson:** `lessons/m01/d08.md`

**Exercise M1-D8 — Portfolio skeleton**  
**Goal:** One semantic HTML page: intro, 3 real past projects (text OK), contact. No CSS required.  
**Saturday review:** n/a yet (too early).  
**Self-check:** Page opens locally; outline is `h1` then project `h2`s.

---

#### Day 2026-07-27 — M1-D9 · CSS selectors & text
**Concept:** Selectors target structure; CSS is finishes, not structure.  
**Lesson:** `lessons/m01/d09.md`

**Exercise M1-D9 — First stylesheet**  
**Goal:** External `styles.css`: font, colors, spacing on portfolio.  
**Self-check:** Changing CSS changes the page; HTML file has `<link rel="stylesheet">`.

---

#### Day 2026-07-28 — M1-D10 · Box model
**Concept:** Margin / padding / border / `box-sizing` — the #1 beginner wall.  
**Lesson:** `lessons/m01/d10.md`

**Exercise M1-D10 — Predict the width**  
**Goal:** Three boxes, same `width:200px`, different box-sizing; predict rendered width before DevTools.  
**Self-check:** Predictions match DevTools box model; you explain the difference in Ask mode.

---

#### Day 2026-07-29 — M1-D11 · Flexbox I
**Concept:** Main axis vs cross axis.  
**Lesson:** `lessons/m01/d11.md`

**Exercise M1-D11 — Center a card**  
**Goal:** Using only flexbox, center a project card horizontally and vertically in the viewport.  
**Self-check:** You say out loud which axis is main; no margin-auto hacks as the only skill.

---

#### Day 2026-07-30 — M1-D12 · Flexbox II
**Concept:** Wrap and gap for card rows.  
**Lesson:** `lessons/m01/d12.md`

**Exercise M1-D12 — Project card row**  
**Goal:** Three project cards in a wrapping flex row with gap.  
**Self-check:** Narrow window → cards wrap, no horizontal scrollbar.

---

#### Day 2026-07-31 — M1-D13 · Docs literacy (MDN HTML elements)
**Concept:** Reading official docs is a skill.  
**Lesson:** `lessons/m01/d13.md`

**Exercise M1-D13 — Read one MDN page**  
**Goal:** Read [MDN: HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements) (skim) and answer in `learning-log.md`: (1) difference between `<section>` and `<div>`, (2) when to use `<article>`, (3) one element you hadn’t used yet and why it exists.  
**Self-check:** Three answers in your log, graded by Cursor Ask.

---

#### Day 2026-08-01 — M1-D14 · Project Saturday: style portfolio
**Concept:** Polish without new concepts.  
**Lesson:** `lessons/m01/d14.md`

**Exercise M1-D14 — Make it look intentional**  
**Goal:** Portfolio uses flex, readable type, hover on links.  
**Self-check:** Ask Cursor for **one** design critique; apply only that one.

---

#### Day 2026-08-03 — M1-D15 · Responsive basics
**Concept:** Mobile-first media queries.  
**Lesson:** `lessons/m01/d15.md`

**Exercise M1-D15 — Phone check**  
**Goal:** Portfolio usable at 375px width.  
**Self-check:** DevTools device mode, no horizontal scroll at 375 / 768 / 1200.

---

#### Day 2026-08-04 — M1-D16 · Minimal polish
**Concept:** Transition + focus states (enough CSS).  
**Lesson:** `lessons/m01/d16.md`

**Exercise M1-D16 — Focus visible**  
**Goal:** Keyboard Tab shows clear focus on links/buttons.  
**Self-check:** Navigate page with Tab only.

---

#### Day 2026-08-05 — M1-D17 · Landing strip for an AEC product idea
**Concept:** B2B copy: problem → outcome → CTA (founder muscle).  
**Lesson:** `lessons/m01/d17.md`

**Exercise M1-D17 — Fake product hero**  
**Goal:** Extra section or separate page: headline for a **non-configurator** AEC SaaS idea + CTA button (href `#`).  
**Self-check:** A friend can say what problem it solves in one sentence.

---

#### Day 2026-08-06 — M1-D18 · Deploy prep
**Concept:** GitHub Pages mechanics.  
**Lesson:** `lessons/m01/d18.md`

**Exercise M1-D18 — Pages settings**  
**Goal:** Enable GitHub Pages on the repo; note the URL.  
**Self-check:** URL loads (may take a minute).

---

#### Day 2026-08-07 — M1-D19 · Fix live bugs
**Concept:** Production surprises (paths, case sensitivity).  
**Lesson:** `lessons/m01/d19.md`

**Exercise M1-D19 — Phone test**  
**Goal:** Open live URL on your phone; fix anything broken; commit.  
**Self-check:** Phone load OK.

---

#### Day 2026-08-08 — M1-D20 · Ship Milestone 1
**Concept:** Definition of done > endless polish.  
**Lesson:** `lessons/m01/d20.md`

**Exercise M1-D20 — Close M1**  
**Goal:** Tick M1 definition of done; redo Exercise M1-D3 from scratch in a throwaway file (Saturday review); commit; export progress.json.  
**Self-check:** Live URL in Projects tab of the dashboard.

---

# Milestone 2 — An interactive room inventory in JavaScript, live

**Dates:** 10 Aug 2026 → 29 Aug 2026  
**Shipped outcome:** Live page: add/delete rooms (name, area m²), totals update, survives refresh (`localStorage`).

### Concepts
JS values & functions · Arrays/objects · DOM render-from-data · Events · localStorage · Modules intro · Cursor for debugging (paste errors, not “rewrite it”)

### Saturday review
Sat 29 Aug: redo **M1-D10 box model** exercise from scratch, then ship M2.

### Definition of done
- [ ] Live URL: add / delete / total area / refresh keeps data
- [ ] State lives in a JS array; HTML list is rebuilt from it (not edited ad hoc)
- [ ] You can whiteboard: event → change data → re-render

### Day list (lessons `lessons/m02/d01.md` …)

| Date | ID | Title |
|------|-----|--------|
| 2026-08-10 | M2-D1 | Variables, types, `const`/`let` |
| 2026-08-11 | M2-D2 | Functions (door-schedule analogy) |
| 2026-08-12 | M2-D3 | Arrays: map / filter / reduce |
| 2026-08-13 | M2-D4 | Objects & JSON — model a room |
| 2026-08-14 | M2-D5 | Practice day (mixed drills) |
| 2026-08-15 | M2-D6 | Saturday: console area calculator |
| 2026-08-17 | M2-D7 | DOM: select & change |
| 2026-08-18 | M2-D8 | Render list from array (core) |
| 2026-08-19 | M2-D9 | Events: Add room |
| 2026-08-20 | M2-D10 | Event delegation: delete |
| 2026-08-21 | M2-D11 | Totals & empty states |
| 2026-08-22 | M2-D12 | Saturday: polish UI |
| 2026-08-24 | M2-D13 | localStorage persist |
| 2026-08-25 | M2-D14 | Modules: split state / render |
| 2026-08-26 | M2-D15 | Closures (short) |
| 2026-08-27 | M2-D16 | Docs literacy: MDN `localStorage` |
| 2026-08-28 | M2-D17 | Deploy interactive app |
| 2026-08-29 | M2-D18 | Ship M2 + Saturday review |

**Exercise pattern (every day):** Goal · Steps · Constraints (type it yourself; data = rooms/areas) · Self-check · Expected · AI-native practice (debug with Ask: paste error, ask what concept you missed). Full exercise text is in each lesson file; PLAN holds the contract above.

**Core exercise (M2-D8) — Render from data**  
**Goal:** Delete hardcoded `<li>`s; `const rooms = [{name, area}, …]`; `renderRooms()` builds the list.  
**Self-check:** Push one room in the console, call `renderRooms()`, UI updates.  
**Expected:** You feel that React will later automate this exact idea.

---

# Milestone 3 — A TypeScript form that saves to a real database, live

**Dates:** 31 Aug 2026 → 19 Sep 2026  
**Shipped outcome:** Vercel URL: form (name, email, project type, message) → row in Neon Postgres → success UI. Typed with TypeScript.

### Concepts
TypeScript everyday types · Next.js app router (minimal) · Server actions or route handler · Neon + Prisma · Env vars · Deploy on Vercel · Reviewing AI-generated Prisma schema diffs

### Saturday review
Sat 19 Sep: redo **M2-D8 render-from-data** in plain JS from memory, then ship M3.

### Definition of done
- [ ] Live form inserts a row you can see in Neon console
- [ ] Project is TypeScript; `strict` true
- [ ] Secrets only in env vars, not committed
- [ ] You can explain: browser → server → database → response

### Day list (`lessons/m03/d01.md` …)

| Date | ID | Title |
|------|-----|--------|
| 2026-08-31 | M3-D1 | Why TypeScript — first type error |
| 2026-09-01 | M3-D2 | Everyday types & interfaces |
| 2026-09-02 | M3-D3 | Narrowing & safe unions |
| 2026-09-03 | M3-D4 | Docs literacy: TS Handbook Everyday Types |
| 2026-09-04 | M3-D5 | Create Next.js + TS app |
| 2026-09-05 | M3-D6 | Saturday: typed inquiry form UI |
| 2026-09-07 | M3-D7 | Server: route handler vs server action |
| 2026-09-08 | M3-D8 | Neon project + connection string |
| 2026-09-09 | M3-D9 | Prisma schema & migrate |
| 2026-09-10 | M3-D10 | Wire form → DB insert |
| 2026-09-11 | M3-D11 | Validation (zod) + errors |
| 2026-09-12 | M3-D12 | Saturday: harden & empty states |
| 2026-09-14 | M3-D13 | Vercel deploy + env |
| 2026-09-15 | M3-D14 | Production smoke test |
| 2026-09-16 | M3-D15 | Read your own diff like a lead |
| 2026-09-17 | M3-D16 | Simple admin list page (same DB) |
| 2026-09-18 | M3-D17 | Final fixes |
| 2026-09-19 | M3-D18 | Ship M3 + review |

---

# Milestone 4 — First React CRUD app, live (Founder Track starts)

**Dates:** 21 Sep 2026 → 10 Oct 2026  
**Shipped:** Live React (Vite or Next) room CRUD against your API/DB mindset — list/create/update/delete.  
**Concepts:** Components, props, state, lists, forms, lifting state.  
**Founder Track ON:** create `problem-log.md`; 1 observation/week.  
**DoD:** CRUD live; you explain re-render; first 3 problem-log entries.  
**Lessons:** generate just-in-time (GETTING-STARTED prompt).

---

# Milestone 5 — Next.js AEC project-data dashboard

**Dates:** 12 Oct 2026 → 31 Oct 2026  
**Shipped:** Dashboard of projects/rooms with filters + CSV export (stepping stone to MVP).  
**Concepts:** App router, server components, searchParams filters.  
**DoD:** Filter + export live; Mom Test reading started.

---

# Milestone 6 — SpecSense v1: structured LLM extraction, live

**Dates:** 2 Nov 2026 → 21 Nov 2026  
**Shipped:** Paste brief/spec excerpt → structured JSON table on screen.  
**Concepts:** LLM API from server only, prompts, tokens/cost, **structured outputs**.  
**DoD:** Schema-constrained extraction; nonsense input fails gracefully; no API key in client.

---

# Milestone 7 — Streaming + simple RAG over a document

**Dates:** 23 Nov 2026 → 19 Dec 2026  
**Shipped:** Upload/paste a short spec → ask a question → streamed answer with chunk citation.  
**Concepts:** Streaming, embeddings, chunking, retrieve-then-generate, retries.  
**DoD:** Citations shown; “I don’t know” when not in doc.

---

# Milestone 8 — Basic Three.js building-mass viewer

**Dates:** 21 Dec 2026 → 16 Jan 2027 (includes holiday buffer week)  
**Shipped:** Page with simple extruded massing (boxes) from room footprint numbers; orbit controls.  
**Concepts:** Scene/camera/renderer, meshes, your geometry edge.  
**DoD:** Live viewer; holiday week may be catch-up only.

---

# Milestone 9 — MVP walking skeleton

**Dates:** 18 Jan 2027 → 6 Feb 2027  
**Shipped:** End-to-end thin slice of the locked MVP workflow on a real URL.  
**Concepts:** Spec writing, scope cutting, monorepo-light or single Next app.  
**DoD:** Signup-optional or simple; paste → extract → edit → CSV works on happy path.

---

# Milestone 10 — MVP core + useful AI feature

**Dates:** 8 Feb 2027 → 27 Feb 2027  
**Shipped:** Hardened extraction + edit UX; AI feature earns its place (structured extract + confidence).  
**DoD:** Design-partner-usable; Vitest on parsing helpers; one Playwright happy path.

---

# Milestone 11 — Auth, polish, production

**Dates:** 1 Mar 2027 → 20 Mar 2027  
**Shipped:** Login, per-user data, polished empty/error states, custom domain optional.  
**DoD:** Users only see own briefs; Sentry or structured logs basic.

---

# Milestone 12 — Launch + consulting soft-launch

**Dates:** 22 Mar 2027 → 8 May 2027  
**Shipped:** Landing + waitlist + case study + demo video; MVP public; consulting offer page.  
**DoD:** Announcement sent to Mom Test contacts; progress complete; celebrate.

---

## After this plan

Iterate with design partners. Still deferred: Docker/K8s, LeetCode grinding, framework tourism, payments.
