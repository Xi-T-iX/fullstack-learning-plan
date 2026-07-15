# Kshitij's Fullstack Plan — AEC B2B SaaS Founder Edition

**Start:** Friday, July 17, 2026
**Consulting soft-launch:** ~late March 2027
**Capstone MVP launched:** ~May 8, 2027 (with slippage buffer: early June 2027)
**Pace:** 1–2 hrs/day, 6 days/week (Sunday off) + ~1.5 hrs/week founder track from Week 8

---

## How to use this plan (the four-file kit)

| File | What it's for |
|------|---------------|
| [dashboard.html](https://xi-t-ix.github.io/fullstack-learning-plan/) | **Your daily entry point** — live at [xi-t-ix.github.io/fullstack-learning-plan](https://xi-t-ix.github.io/fullstack-learning-plan/), opens automatically with the 10:30 reminder. Today's task, tomorrow preview, exercises, project checklists, progress, streak, timeline. Track progress in ONE browser; export a backup weekly |
| **PLAN.md** (this file) | The roadmap — what to learn, when, and why |
| [GETTING-STARTED.md](GETTING-STARTED.md) | Tool setup, Cursor basics, git, project setup recipes. **New to Cursor or dev tools? Read this FIRST, before Week 0 Day 1.** |
| [RESOURCES.md](RESOURCES.md) | What to study each phase — one primary resource, one backup |
| [EXERCISES.md](EXERCISES.md) | Stepwise practice with self-checks (Weeks 0–9 fully written), plus definition-of-done checklists for all 4 projects |

Daily loop: PLAN.md tells you today's topic → RESOURCES.md tells you what to study → EXERCISES.md tells you how to practice and verify → GETTING-STARTED.md section 5 shows the exact workflow and Cursor prompts.

---

## Who this plan is for

- B.Arch + MSc Computational Design + PhD Structural Engineering — you already think computationally (Grasshopper, Dynamo, beginner Python/C#). New material is the *web stack*, not programming logic.
- Technical Solutions Consultant at ShapeDiver, managing 150+ AEC accounts — daily exposure to real workflow pain across the industry.
- **Goal: build a suite of B2B SaaS products for AEC + offer solution consulting and implementation services.** ShapeDiver is a reference point and network, not a template — you are explicitly *not* building another configurator company.

**The operating model:** consulting (integrations, automation, custom tools) funds the runway starting ~March 2027; products compound on top. Every project in this plan practices a *reusable platform capability* — auth, file handling, viewers, data pipelines — so your eventual products share infrastructure instead of starting from zero each time.

---

## How the syllabus was modified

The 100xdevs syllabus (Web Dev 16 topics + DevOps 14 topics) is the skeleton. Changes for the AI era and your founder direction:

1. **Added an AI Engineering phase:** LLM APIs, Vercel AI SDK, streaming UIs, structured outputs, embeddings/RAG. B2B buyers now expect AI features, and document/data intelligence is one of your candidate product categories.
2. **Added an AEC Data & BIM Web Stack phase (Weeks 30–32):** IFC on the web, Speckle, Autodesk Platform Services, geometry file pipelines. "BIM + computational design + web" is your stated moat — this is the phase where it becomes real.
3. **Compressed:** BunJS → 1 curiosity day. WebRTC → concept-level reading only. Websockets and queues are learned inside the file-pipeline context (Week 32) instead of as isolated exercises.
4. **Turborepo earned, not skipped:** it becomes the monorepo backbone of your product suite, learned in capstone Week 37.
5. **Deferred (post-first-revenue):** Kubernetes 1&2, ASGs/MIGs, IaC, monitoring stacks, Firecracker/sandboxing. These are scale skills; revisit when a product or client demands them.
6. **Kept fully:** HTML/CSS/JS/TS fundamentals, React, Next.js, databases, HTTP, Docker, nginx, certs, CI/CD, S3/CDN. AI writes code fast, but *you* must read, verify, and debug it — that's what clients and customers pay for.
7. **Projects reflavored** so each one explores a *candidate product category* while training a platform capability (see project specs).

---

## The Cursor Learning Protocol (read this weekly)

Cursor is your tutor, not your ghostwriter. The failure mode of AI-era learning is producing working apps you can't explain. Rules:

**Phase 1–2 (fundamentals, Jul–Oct):**
- Type all code yourself. Turn Tab autocomplete OFF or ignore it.
- Use **Ask mode** constantly: "explain this error", "why does this CSS not center", "quiz me on yesterday's topic", "explain like I know Grasshopper but not JS".
- After every bug you fix, ask Cursor: "what concept was I missing?"

**Phase 3–5 (React/Next/DBs, Nov–Jan):**
- Let Cursor scaffold boilerplate (config, repetitive JSX), but **read every diff line by line** before accepting.
- Write the core logic yourself first, then ask Cursor to review it.
- Daily habit: ask "critique my code like a senior dev".

**Phase 6+ (AI/BIM/capstone, Feb+):**
- Full agent mode is fine — you now direct, review, and verify like a lead engineer.
- Practice *spec-writing*: describe features precisely, evaluate the output. This IS the modern founder skill — you'll use it on every product you build.

**Every day, regardless of phase:**
- Commit to GitHub with a message you wrote yourself.
- Keep a `learning-log.md` — 2–3 lines: what I built, what confused me, what clicked.

**From ModelHub (Week 26) onward — the testing gate:**
- No project counts as "done" without baseline unit tests (Vitest) and one Playwright happy-path E2E test. Cheap to learn now, brutal to retrofit later. Ask Cursor to teach you the first tests on your own code.

---

## Daily template (~90 min)

| Block | Activity |
|-------|----------|
| 0:00–0:10 | Review yesterday's log; ask Cursor to quiz you on it |
| 0:10–0:40 | Learn: 100xdevs video / docs / Cursor Ask-mode deep-dive |
| 0:40–1:25 | **Build** (the part that sticks) |
| 1:25–1:30 | Commit + update learning-log.md |

Mon–Fri: new material. **Saturday:** no new material — extend/polish the week's project. **Sunday:** off (plus the optional 10-min weekly ritual, and from Week 8, the founder track reading).

---

# TRACK 2 — Discovery & Validation (the founder track)

**Starts Week 8 (Sep 7, 2026). ~1.5 hrs/week, separate from the daily 90 minutes.** This track decides what your capstone — and first product — actually is. The capstone is deliberately NOT predetermined today.

**Weekly (30–60 min):** log at least one problem observation in `problem-log.md`:
- Patterns from your ShapeDiver account work — *ethically: workflow patterns and pain categories, never client IP or confidential specifics*.
- AEC communities: r/BIM, Dynamo/Grasshopper forums, LinkedIn AEC tech circles, Design Morphine network.
- Each entry: who has the problem, current workaround, how often it hurts, would they pay.

**Monthly (30 min):** score accumulated problems on five axes (1–5 each):
1. Frequency — how often does it bite?
2. Severity — cost in hours/money when it does?
3. Willingness to pay — is budget attached to this pain?
4. Unfair advantage — does your B.Arch/PhD/computational background matter here?
5. Defensibility — does solving it accumulate data or workflow lock-in?

**Reading list (fold into Sundays, one at a time):**
- *The Mom Test* (Rob Fitzpatrick) — how to interview without leading the witness. Read by end of October.
- Positioning case studies: how Speckle, Buildots, TestFit, and Higharc each carved a category (all already in your CRM — study their wedge, pricing, and who they sell to).
- **openBIM standards literacy (Feb 2027, Sundays of Weeks 30–32, ~3 hrs total, reading not building):** BCF (issue/viewpoint communication around models), IDS (machine-readable information requirements), and CRS/georeferencing basics in IFC 4.3. This is what separates credible BIM QA tooling from "a prettier viewer" — and IDS is the bridge from SpecSense-style document extraction to automated model checks.

**Milestones:**
- **End of Nov 2026:** 15+ logged problems, first scoring pass done.
- **End of Jan 2027:** 5+ real conversations held (Mom Test style — about their workflow, not your ideas).
- **Mid-Feb 2027 (Week 31):** ranked list of 3+ validated problem areas. Pick the capstone problem from this list.

---

# PART 1 — Day-by-day: Weeks 0–4 (Jul 17 – Aug 15, 2026)

## Week 0 — Setup (Fri Jul 17 – Sun Jul 19)

*Before Day 1: read [GETTING-STARTED.md](GETTING-STARTED.md) fully — it has the exact install steps, Cursor basics, and git commands this week uses.*

- **Fri Jul 17:** Follow GETTING-STARTED.md sections 1–2: install Node.js LTS + Git, create/configure GitHub, learn the Cursor layout and chat modes, disable Tab autocomplete. Ask Cursor to explain: "what actually happens when I `git commit` and `git push`?"
- **Sat Jul 18:** Follow GETTING-STARTED.md section 3 + Exercise 0.1 in [EXERCISES.md](EXERCISES.md): create repo `learning-fullstack`, add `learning-log.md`, write and push a hello-world `index.html`. Learn: how the web works — DNS, HTTP request/response, browser rendering (Exercise 0.2). (Ask Cursor to explain it using an analogy to how Grasshopper sends compute requests to ShapeDiver's servers — genuinely the same pattern.)
- **Sun Jul 19:** Off — or set up your 100xdevs course access + skim Week 1 material.

## Week 1 — HTML (Mon Jul 20 – Sat Jul 25)

- **Mon Jul 20:** Document structure, headings, paragraphs, lists, links. Build: a plain-HTML personal page (name, background, what you're learning).
- **Tue Jul 21:** Images, attributes, divs/spans, semantic tags (`header`, `nav`, `main`, `footer`). Extend the page.
- **Wed Jul 22:** Forms — inputs, labels, buttons, selects. Build: a "project inquiry" form (you'll reuse this pattern in every B2B product: lead capture, quote requests, waitlists).
- **Thu Jul 23:** Tables, iframes, meta tags. Build: static skeleton of the **Todo app** (header, input, list of hardcoded items).
- **Fri Jul 24:** Semantic HTML + accessibility basics. Ask Cursor to audit your Todo skeleton for semantics and explain every suggestion.
- **Sat Jul 25:** Project day: static skeleton of **your portfolio site** — "Kshitij — computational designer building web tools for AEC." One page, pure HTML.

## Week 2 — CSS core (Mon Jul 27 – Sat Aug 1)

- **Mon Jul 27:** Selectors, colors, units (px/rem/%), text styling. Style your personal page.
- **Tue Jul 28:** **Box model** — margin, padding, border, box-sizing. (This is the #1 beginner wall; give it a full day. Ask Cursor for interactive exercises.)
- **Wed Jul 29:** Display types, position (relative/absolute/fixed/sticky). Build: a fixed navbar.
- **Thu Jul 30:** **Flexbox** day 1 — main axis, cross axis, justify/align. Lay out the Todo app properly.
- **Fri Jul 31:** Flexbox day 2 — wrap, grow/shrink, real layouts. Build: a card grid of your past AEC projects (use your real portfolio work — screenshots of Grasshopper/Rhino projects).
- **Sat Aug 1:** Project day: style the Todo app fully. It should look *good*, not just work.

## Week 3 — CSS layout + responsive (Mon Aug 3 – Sat Aug 8)

- **Mon Aug 3:** CSS Grid — template columns/rows, gap, areas.
- **Tue Aug 4:** Grid vs flexbox — rebuild the project card layout with grid.
- **Wed Aug 5:** Responsive design — media queries, mobile-first thinking. Make the Todo app mobile-friendly.
- **Thu Aug 6:** Transitions, hover states, shadows, border-radius — polish. Ask Cursor: "make this feel like a modern SaaS landing page and explain each change."
- **Fri Aug 7:** Build day: **landing page for an imaginary AEC SaaS product** (invent one — a BIM QA tool, a spec checker, anything *not* a configurator). Practice writing B2B copy: problem, outcome, call-to-action. This is your first product-marketing artifact.
- **Sat Aug 8:** Finish + deploy the landing page and portfolio on **GitHub Pages**. First live URLs. Share the portfolio link on LinkedIn if you're feeling brave.

## Week 4 — JavaScript basics I (Mon Aug 10 – Sat Aug 15)

*(You know variables/loops from Python and Grasshopper — the concepts transfer; the syntax is new. Move briskly.)*

- **Mon Aug 10:** Variables (let/const), types, operators, template strings. Exercises in the browser console.
- **Tue Aug 11:** Functions, arrow functions, scope. Ask Cursor: "compare JS functions to Grasshopper components — inputs, outputs, side effects."
- **Wed Aug 12:** Arrays + methods (`map`, `filter`, `reduce`, `find`). This is Grasshopper list logic in text form — lean on that intuition.
- **Thu Aug 13:** Objects, destructuring, JSON. Model a todo as an object; a building element as an object (do both — the second one is your world, and it's the seed of every BIM data structure you'll touch in Week 30).
- **Fri Aug 14:** Loops, conditionals, practice problems. Ask Cursor to generate 10 exercises mixing arrays + objects; solve without help; then review together.
- **Sat Aug 15:** Mini-project: **unit converter or beam load calculator** in the console — pure JS logic, AEC-flavored.

---

# PART 2 — Dated weekly plan: Weeks 5–42 (Aug 2026 – May 2027)

Each week = 5 learning days + 1 project Saturday, same daily template. Weeks 5–9 have fully written exercises in [EXERCISES.md](EXERCISES.md); from Week 10 use its generation pattern to create the week's exercises with Cursor. Study material per phase is in [RESOURCES.md](RESOURCES.md). Ask Cursor to expand any week into a day-by-day breakdown when you get there ("expand Week 12 into daily tasks based on PLAN.md").

## Phase: JavaScript + DOM (finish the frontend foundation)

| Week | Dates (2026) | Topics | Milestone |
|------|-------------|--------|-----------|
| 5 | Aug 17–22 | DOM — selecting, modifying, creating elements | Todo app: render list from a JS array |
| 6 | Aug 24–29 | Events, forms, input handling | **Todo app fully interactive (Project 1 frontend ✓)** |
| 7 | Aug 31–Sep 5 | JS architecture — modules, clean structure, closures | Refactor Todo into modules |
| 8 | Sep 7–12 | Async JS — callbacks, promises, async/await | Fetch from a public API. **Founder track starts: create `problem-log.md`** |
| 9 | Sep 14–19 | Fetch deep-dive, error handling, JSON APIs | Small app consuming 2 public APIs |

## Phase: Backend (Node, HTTP, Express)

| Week | Dates | Topics | Milestone |
|------|-------|--------|-----------|
| 10 | Sep 21–26 | Node vs browser JS, npm, running scripts | CLI todo tool in Node |
| 11 | Sep 28–Oct 3 | HTTP deep-dive + Express basics — routes, req/res | First API: GET/POST todos (in-memory) |
| 12 | Oct 5–10 | Express middleware, validation (zod), error handling | Robust todo API |
| 13 | Oct 12–17 | Auth — JWT, cookies, password hashing | Signup/login on the API (platform capability #1: auth) |

## Phase: Databases

| Week | Dates | Topics | Milestone |
|------|-------|--------|-----------|
| 14 | Oct 19–24 | MongoDB + Mongoose — documents, CRUD | Todos persist in Mongo |
| 15 | Oct 26–31 | PostgreSQL — SQL, joins; Prisma ORM | Same API on Postgres+Prisma. **Project 1 fullstack ✓.** *Founder track: The Mom Test finished* |

## Phase: TypeScript

| Week | Dates | Topics | Milestone |
|------|-------|--------|-----------|
| 16 | Nov 2–7 | TS basics — types, interfaces, generics | Typed exercises |
| 17 | Nov 9–14 | TS in practice | Migrate the todo API to TS. All new code is TS from here on |

## Phase: React

| Week | Dates | Topics | Milestone |
|------|-------|--------|-----------|
| 18 | Nov 16–21 | Components, JSX, props, state | Static components → stateful counter/cards |
| 19 | Nov 23–28 | useEffect, lists, forms, lifting state | Rebuild Todo in React against your own API. *Founder track: 15+ problems logged, first scoring pass* |
| 20 | Nov 30–Dec 5 | Router, context, custom hooks | Multi-page app with auth state |
| 21 | Dec 7–12 | Data fetching patterns, TanStack Query basics | **Project 2: "SpecSense" — AI spec extractor** (first LLM API call) |

## Phase: Tailwind + Next.js

| Week | Dates | Topics | Milestone |
|------|-------|--------|-----------|
| 22 | Dec 14–19 | Tailwind — utility classes, responsive, components | Restyle Project 2 in Tailwind |
| 23 | Dec 21–26 | Next.js — app router, pages, layouts, server components | Port portfolio to Next.js |
| 24 | Dec 28–Jan 2 | **Holiday buffer / catch-up week** — review, polish, rest | Clear any backlog |
| 25 | Jan 4–9 (2027) | Next.js — API routes, server actions, auth (NextAuth/better-auth) | Fullstack Next app with login |
| 26 | Jan 11–16 | Next.js — deploy to Vercel, env vars, Postgres in prod (Neon) | **Project 3 start: "ModelHub" — BIM data dashboard** |
| 27 | Jan 18–23 | Project 3 build week — file upload, data extraction, dashboard | ModelHub v1: upload, parse, filter, export. *Founder track: 5+ Mom Test conversations done* |

## Phase: AI Engineering (the 2026 differentiator)

| Week | Dates | Topics | Milestone |
|------|-------|--------|-----------|
| 28 | Jan 25–30 | LLM APIs — chat completions, system prompts, tokens, cost | CLI + API-route chatbot |
| 29 | Feb 1–6 | Vercel AI SDK — streaming, tool calling, structured outputs; embeddings + RAG basics (pgvector, chunking) | Streaming chat app + "chat with an AEC spec PDF" mini-RAG |

## Phase: AEC Data & BIM Web Stack (your moat, made technical)

| Week | Dates | Topics | Milestone |
|------|-------|--------|-----------|
| 30 | Feb 8–13 | IFC on the web — web-ifc / That Open Company; loading and querying BIM models in the browser | IFC viewer embedded in ModelHub; element properties queryable |
| 31 | Feb 15–20 | Speckle — projects/models (the current names for what older docs call "streams"), connectors, webhooks; Autodesk Platform Services — viewer + model derivative APIs (survey level) | Push/pull data to a Speckle project from your app. **Founder track: pick the capstone problem from your ranked list** |
| 32 | Feb 22–27 | File/data pipelines — secure uploads (follow the OWASP file-upload checklist), S3, Redis queues, background geometry processing, websocket progress updates (WebRTC: concept reading only) | ModelHub v2: async model processing with live progress (platform capability: pipelines) |

*Sunday reading during this phase (founder track): BCF, IDS, and CRS/georeferencing basics — see the openBIM item in the Track 2 reading list.*

## Phase: Deployment & DevOps essentials

| Week | Dates | Topics | Milestone |
|------|-------|--------|-----------|
| 33 | Mar 1–6 | Bash/terminal fluency + a cheap VPS (Hetzner/DO), SSH | Node app running on your VPS |
| 34 | Mar 8–13 | Process mgmt (pm2), nginx reverse proxy, domains, HTTPS certs | Your app live on your own domain with SSL |
| 35 | Mar 15–20 | Docker — images, containers, compose | Dockerize ModelHub, run on VPS |
| 36 | Mar 22–27 | CI/CD (GitHub Actions) + S3/CDN + object storage — incl. multipart uploads for large files and S3 event notifications for event-driven processing | Auto-deploy pipeline. **Consulting soft-launch ✓** (see runway section) |

## Phase: Capstone — validated MVP (6 weeks)

| Week | Dates | Topics | Milestone |
|------|-------|--------|-----------|
| 37 | Mar 29–Apr 3 | Spec the MVP from your validated problem. Set up Turborepo monorepo (the suite's backbone: shared auth, UI package, config) | Written spec + scaffolded monorepo |
| 38 | Apr 5–10 | Core workflow build 1 — the single job-to-be-done | Walking skeleton: the core loop works end to end |
| 39 | Apr 12–17 | Core workflow build 2 + external integration (Speckle / APS / webhook into an AEC tool) | Integration live with real data |
| 40 | Apr 19–24 | Multi-tenant auth — orgs, proper RBAC (roles/permissions, least privilege), OIDC awareness (what "Sign in with Microsoft/Google" means for B2B buyers). SCIM: know what it is, defer building it | Feature-complete for one design partner |
| 41 | Apr 26–May 1 | Polish, error states, onboarding flow, telemetry (Sentry + structured logs + job-status records), tests (Vitest + Playwright happy path), Dockerized CI/CD deploy to your VPS | Production deploy on custom domain |
| 42 | May 3–8 | Landing page + waitlist with PostHog analytics, case study writeup, demo video. Show it to every Mom Test contact | **MVP launched ✓ — first design partners invited** |

---

# Project specs (each = one platform capability + one product category explored)

**Project 1 — Todo app** *(Weeks 1–15, evolves with you)*
The classic trainer. HTML skeleton → styled → interactive → API-backed → DB-persisted → rebuilt in React/TS. Boring on purpose; every new concept lands here first. Capability trained: CRUD + auth fundamentals.

**Project 2 — "SpecSense"** *(Week 21)*
Paste an AEC spec/standard excerpt → LLM extracts structured requirements into a table you can sort and export. Use structured outputs (JSON Schema) with this shape: **discipline, object/class, property/parameter, requirement type, unit + value, source clause, confidence**. First LLM call, first structured outputs. ~3–4 days of work at that point. Category explored: **AI document intelligence**. Capability trained: LLM integration.
*Product thesis note: IDS (Information Delivery Specification) is the openBIM standard for machine-readable requirements — SpecSense's extraction schema is a natural on-ramp from "document → structured requirement" to "requirement → automated model check". That link (document intelligence → BIM QA) is a candidate wedge for the capstone.*

**Project 3 — "ModelHub"** *(Weeks 26–27, extended in 30–32)*
Upload an IFC file → view it in-browser → extract element data into Postgres → dashboard with filters and CSV/Excel exports. Later gains a 3D viewer (Week 30), Speckle sync (Week 31), and async processing pipelines (Week 32). Category explored: **BIM data / model QA**. Capabilities trained: file handling, relational modeling, viewers, pipelines. Also becomes your consulting demo piece.
*Architecture rule: the raw IFC in object storage is the canonical source of truth. Viewer-friendly formats (That Open fragments, SVF) are disposable derivatives — regenerable at any time. Extracted element data lives in Postgres; every pipeline step writes a job record (status, timing, errors). This one rule is the difference between a course project and a consulting-grade demo.*
*Definition of done (testing gate applies): upload → parse → dashboard works end to end, uploads are hardened per the OWASP checklist, baseline Vitest unit tests exist for the extraction logic, and one Playwright E2E covers the upload-to-dashboard happy path.*

**Project 4 — Capstone: the validated MVP** *(Weeks 37–42)*
**Deliberately not specified today.** Chosen in mid-Feb 2027 (Week 31) from the founder track's ranked problem list. Candidate categories seeded now:
- Interop / data sync between AEC tools
- Workflow automation for design firms
- AI spec/document intelligence (SpecSense grown up)
- BIM model QA automation (ModelHub grown up)
- Computational-design-as-a-service (your Grasshopper/optimization expertise, productized — *without* copying ShapeDiver's configurator lane)

Non-negotiable requirements whichever problem wins:
- Multi-tenant auth (orgs, proper RBAC) — B2B table stakes
- One real external integration (Speckle, APS, or a webhook into an AEC tool)
- One openBIM standard beyond IFC in the product (BCF or IDS) — this is what makes it credible AEC software rather than a generic web app
- One AI feature that earns its place
- Telemetry: Sentry error tracking, structured logs, job-status records on every pipeline step
- Tested: baseline Vitest unit tests + one Playwright happy-path E2E (a design partner should be able to use it without you whispering "please don't click too fast")
- Dockerized, CI/CD, deployed on your VPS with custom domain + SSL
- Landing page with a real waitlist, PostHog analytics, and a case study

*Syllabus coverage note: the original "trading app" tech is fully covered — websockets and live updates (Wk 32), queues (Wk 32), real-time data (capstone).*

---

# Defensibility principles (how to not build a commodity)

1. **Compete on workflow depth and data, not features.** Pick problems that require AEC domain judgment — your B.Arch/MSc/PhD is the moat that AI codegen can't replicate. Anyone can build a dashboard; few can know *which* model checks actually matter on a high-rise facade.
2. **Stay out of ShapeDiver's lane.** Grasshopper-to-web configurators are taken, and you have a professional relationship to respect. Adjacent lanes are open: data interop, QA automation, document intelligence, workflow automation.
3. **Let data compound.** Prefer products where every customer interaction accumulates structured data (model issues found, requirements extracted, mappings between tools) — that data improves the product and raises switching costs.
4. **Build a suite, not a tool.** From the capstone onward: shared account system, shared design system, one monorepo. Each product feeds users and data to the next. SpecSense and ModelHub are seeds — the capstone decides which one (or which new idea) becomes product #1.
5. **Sell the workflow, not the tech.** B2B AEC buyers pay for hours saved and risk removed, never for "AI" or "BIM integration" as such. Every landing page and pitch states the job-to-be-done in the customer's words (which your problem-log gives you verbatim).

---

# Consulting & product runway (parallel, low effort until March)

- **Aug 8, 2026:** Portfolio live on GitHub Pages (Week 3 Saturday).
- **Sep 7 onward:** Founder track running — problem log growing weekly.
- **Dec onward:** Every project gets a live URL + README with screenshots. SpecSense and ModelHub double as conversation starters in Mom Test interviews ("I built a prototype — does this resemble your problem?").
- **Jan–Feb 2027:** 5+ discovery conversations. Quietly signal to your AEC network (Design Morphine, VNIT/UACEG contacts, LinkedIn) that you build web tools for AEC workflows.
- **Week 36 (late March 2027): consulting soft-launch.** Offer: *custom integrations, workflow automation, and AI features for AEC firms* — scoped projects, not staff augmentation. ModelHub + your integration skills are the demo. Price the first 1–2 engagements low for testimonials and problem intel; every consulting gig is also product discovery.
- **Week 42 (May 2027):** Capstone MVP launched with waitlist + case study. Consulting revenue funds iteration; design partners come from your interview contacts.
- **Conflict rule:** no engagements that compete with ShapeDiver's configurator business while you work there; be transparent if scope drifts near it.

# Deferred (revisit only when a product or client demands it)

Kubernetes 1&2, ASGs/MIGs, IaC/Terraform, full monitoring/observability stacks (OpenTelemetry — Sentry + logs + job records cover you until then), Firecracker/sandboxing, and the e2b/Replit-clone/Cloudflare-Workers projects. Also deferred: **Temporal / durable workflow orchestration** (a Redis queue with retries and idempotent jobs covers you well past MVP) and **SCIM provisioning** (matters when enterprise IT departments provision your users — a post-revenue problem). These are scale and infra-employment skills. Your syllabus images cover them — return after first revenue, when scaling is a real problem you're lucky enough to have.

---

# Weekly ritual (Sundays, 10 min)

1. Skim next week's row in this file, plus its section in [RESOURCES.md](RESOURCES.md).
2. Ask Cursor: "expand Week N of @PLAN.md into a day-by-day breakdown, adjusted for where I actually am." (From Week 10, also generate the week's exercises using the pattern in [EXERCISES.md](EXERCISES.md).)
3. From Week 8: add one entry to `problem-log.md` if the week didn't produce one naturally.
4. Before declaring any project done, audit it against its checklist in [EXERCISES.md](EXERCISES.md).
5. If you're behind: don't compress learning — push dates. The plan has slack (Week 24 buffer, Saturday catch-ups, and the May→June capstone buffer). Consistency > speed.
