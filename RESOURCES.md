# Resources — what to study, per phase

Companion to [PLAN.md](PLAN.md). Deliberately short: for each phase there is **one primary resource** (follow it, don't shop around), a **backup/reference**, and a **when-stuck** pointer. Resource-hopping is the classic self-taught trap — trust the primary, use the backup only when the primary doesn't click.

Two resources run through the entire plan:
- **100xdevs course + YouTube channel (Harkirat)** — your purchased syllabus; follow along topic by topic.
- **Cursor Ask mode** — your always-on tutor. Every "when stuck" below starts with pasting the problem into Ask mode.

---

## Weeks 0–4 — Setup, HTML, CSS, JS basics
- **Primary:** 100xdevs Web Dev track + [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development) (the "Getting started", "HTML", "CSS" modules follow the same order as PLAN.md).
- **Backup:** Angela Yu's Complete Web Development Bootcamp (Udemy) — from your syllabus's own resource list; ideal if you prefer guided video.
- **Reference:** [MDN](https://developer.mozilla.org) for any tag/property — the dictionary of the web. Bookmark it.
- **When stuck on CSS:** the interactive games [Flexbox Froggy](https://flexboxfroggy.com) and [CSS Grid Garden](https://cssgridgarden.com) — 30 fun minutes each, genuinely effective.

## Weeks 5–9 — DOM, events, async JS
- **Primary:** [javascript.info](https://javascript.info) — the best free JS textbook. Part 1 (language) + Part 2 (browser/DOM). Map chapters to the week's topic.
- **Backup:** 100xdevs JS videos; MDN's [DOM scripting guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting).
- **For async specifically:** javascript.info's Promises/async-await chapters, then ask Cursor: "quiz me with 5 async scenarios and make me predict the output order."

## Weeks 10–15 — Node, Express, databases
- **Primary:** 100xdevs backend track (this is its strongest section).
- **Reference:** [Express docs](https://expressjs.com) (routing/middleware guides), [Zod docs](https://zod.dev) for validation.
- **Databases:** [Prisma Quickstart + docs](https://www.prisma.io/docs) (excellent for beginners), [MongoDB University free courses](https://learn.mongodb.com) for Week 14, [SQLBolt](https://sqlbolt.com) for interactive SQL basics in Week 15.
- **Auth (Week 13):** 100xdevs auth videos + ask Cursor to diagram the JWT flow for your own API ("draw the sequence of a login request in my @server.ts").

## Weeks 16–17 — TypeScript
- **Primary:** [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) — read "The Basics" through "Object Types", plus "Generics".
- **Practice:** [Type Challenges](https://github.com/type-challenges/type-challenges) (easy tier only — don't rabbit-hole).

## Weeks 18–21 — React
- **Primary:** [react.dev](https://react.dev/learn) — the official tutorial is genuinely the best; do "Describing the UI" → "Adding Interactivity" → "Managing State" in order (from your syllabus's own resource list).
- **Backup:** 100xdevs React weeks.
- **Data fetching (Week 21):** [TanStack Query quickstart](https://tanstack.com/query/latest/docs/framework/react/quick-start).

## Weeks 22–27 — Tailwind + Next.js
- **Primary (Tailwind):** [Tailwind docs](https://tailwindcss.com/docs) — the docs ARE the course; learn by restyling your own app.
- **Primary (Next.js):** [Next.js Learn course](https://nextjs.org/learn) — free, official, project-based, covers app router/server components/deployment in the same order as PLAN.md.
- **Auth (Week 25):** [Auth.js (NextAuth) docs](https://authjs.dev) or [Better Auth docs](https://www.better-auth.com/docs) — pick one, ask Cursor to compare them for your use case first.
- **Prod database (Week 26):** [Neon docs](https://neon.tech/docs) (serverless Postgres, free tier).

## Weeks 28–29 — AI Engineering
- **Primary:** [Vercel AI SDK docs](https://ai-sdk.dev/docs) — start with the RSC/streaming quickstarts; it abstracts providers so you learn patterns, not vendor lock-in.
- **Structured outputs (SpecSense!):** [OpenAI structured outputs guide](https://platform.openai.com/docs/guides/structured-outputs) — JSON Schema-enforced responses; this is the core primitive of Project 2.
- **Embeddings/RAG:** [pgvector README](https://github.com/pgvector/pgvector) + ask Cursor to walk you through chunking strategy on a real AEC spec PDF.

## Weeks 30–32 — AEC Data & BIM Web Stack (your moat)
- **IFC in the browser:** [That Open Company docs](https://docs.thatopen.com) (components + fragments) and [web-ifc](https://github.com/ThatOpen/engine_web-ifc). Start from their tutorials — they assume web knowledge you'll have by then.
- **Speckle:** [Speckle developer docs](https://speckle.guide/dev/) — note: current versions use **projects/models** (older docs say "streams"). You have insider context here; also study it as a company (see founder track).
- **Autodesk Platform Services:** [APS tutorials](https://tutorials.autodesk.io) — "Simple Viewer" tutorial at survey level; you're learning the integration surface, not becoming an APS specialist.
- **openBIM standards (Sunday reading):** [buildingSMART technical pages](https://technical.buildingsmart.org) for **BCF** (issue communication) and **IDS** (machine-readable information requirements); CRS/georeferencing basics for IFC 4.3. Reading-level, ~3 hrs total across the phase.
- **Upload security (Week 32):** [OWASP File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html).

## Weeks 33–36 — Deployment & DevOps
- **Terminal/SSH/VPS:** your VPS provider's own getting-started guides — [Hetzner community tutorials](https://community.hetzner.com/tutorials) or [DigitalOcean tutorials](https://www.digitalocean.com/community/tutorials) (the best-written sysadmin tutorials on the internet: initial server setup, nginx, Let's Encrypt).
- **Docker:** [Docker Get Started](https://docs.docker.com/get-started/) — parts 1–9, then dockerize your own app rather than their example.
- **CI/CD:** [GitHub Actions quickstart](https://docs.github.com/en/actions/quickstart) + ask Cursor to explain your first workflow file line by line.
- **S3/uploads:** AWS S3 docs on multipart upload + event notifications (skim; implement against your own bucket).

## Testing & telemetry (from Project 3 / Week 26 onward)
- **Unit tests:** [Vitest guide](https://vitest.dev/guide/) — start with 3 tests on your ModelHub extraction logic.
- **E2E:** [Playwright intro](https://playwright.dev/docs/intro) — one happy-path test first; resist writing twenty.
- **Errors/telemetry:** [Sentry Next.js docs](https://docs.sentry.io/platforms/javascript/guides/nextjs/); [PostHog docs](https://posthog.com/docs) for the Week 42 waitlist analytics.

## Founder track (Track 2, Week 8 onward)
- **The Mom Test** by Rob Fitzpatrick — the one book that is genuinely mandatory. Read by end of October.
- **Positioning case studies:** company sites + changelogs + pricing pages of Speckle, Buildots, TestFit, Higharc. For each: what wedge did they enter with, who pays, what do they charge, what data do they accumulate?
- **Market watch:** [aectechjobs.com](https://aectechjobs.com) (who's hiring = who's funded), [e2b.dev/blog](https://e2b.dev/blog) and [modal.com/blog](https://modal.com/blog) (from your syllabus — infra thinking), plus AEC tech funding news for "why now" signals.

---

## How to use a resource without drowning (the meta-skill)

1. **Watch/read once at normal speed** without touching the keyboard.
2. **Rebuild from memory** — no peeking. Getting stuck here is the learning.
3. **Compare** your attempt to the source; note the diffs in `learning-log.md`.
4. **Ask Cursor to quiz you** the next morning.

If a primary resource isn't working for you after 2 honest sessions, switch to the backup — then stop shopping.
