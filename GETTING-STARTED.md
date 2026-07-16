# Getting Started

Read this once before Day 1 (17 Jul 2026). Then keep it as reference.

Your daily home is the live app: **https://xi-t-ix.github.io/fullstack-learning-plan/**

---

## 1. Install (Windows)

### Node.js
1. Download **LTS** from [nodejs.org](https://nodejs.org).
2. Install with defaults.
3. **Check:** new terminal → `node -v` and `npm -v`.

### Git
1. Download from [git-scm.com](https://git-scm.com/download/win).
2. Install with defaults.
3. **Check:** `git --version`.

### GitHub
1. Account at [github.com](https://github.com).
2. Identity:
```bash
git config --global user.name "Kshitij Nashine"
git config --global user.email "your-github-email@example.com"
```

### Cursor
Already installed. For Milestones 1–3:
1. Settings → turn **Tab autocomplete OFF**.
2. Default chat mode: **Ask**.

---

## 2. Cursor layout (2 minutes)

- Left: files · Center: editor · Bottom: terminal `` Ctrl+` `` · Chat: `Ctrl+L`
- **Always File → Open Folder** on the project folder itself, not a parent.
- `@filename` in chat references a file.

| Mode | Use |
|------|-----|
| Ask | Default while learning — explains, quizzes, never silent-edits your exercises |
| Agent | Setup chores later; not for typing your Milestone 1–3 exercises |
| Plan | Bigger features from React onward |

---

## 3. Git daily loop

```bash
git add .
git commit -m "describe what you built"
git push
```

First-time repo: see GitHub’s “create repository” instructions (`git remote add origin …`).

---

## 4. Standing interaction rules (every future Cursor session)

1. **Exercise code is typed by you.** The learning app and `sync.mjs` may be agent-written — that’s tooling. Exercise solutions: hints first; full solution only if you ask **twice**.
2. **Concepts:** struggle 15–20 minutes, then ask for **hints**. **Tooling** (PATH, npm, installers): ask after ~5 minutes — fighting a broken environment teaches nothing.
3. **“Quiz me”** means: yesterday’s lesson **plus** one item from 4+ weeks ago (or from the review queue).
4. **Code review:** respond like a kind senior: what’s right, what’s wrong, **one** improvement — not ten.

---

## 5. How to update the plan / app data

Markdown is the source of truth. The dashboard does **not** get hand-edited data blocks.

```bash
# after editing PLAN.md, lessons/**, or this file:
node sync.mjs
git add .
git commit -m "update curriculum / lessons"
git push
```

Live site updates ~1 minute after push. **`node sync.mjs` is the only supported way to refresh app content.**

---

## 6. Generate next milestone’s lessons (M4+)

When you finish a milestone, copy this into Cursor **Agent** mode (with the repo open):

```
Generate lessons for Milestone N of @PLAN.md into lessons/m0N/d01.md …

Rules from GETTING-STARTED.md standing rules and PLAN.md lesson template:
- One concept per day, 300–600 words
- Sections: Today's summary · What/why · How the session works · Tool steps · Concept · Annotated code (if any) · Beginner mistakes · Exercise · Explain it back
- AEC analogies; exercises typed-by-learner; self-check verifiable alone
- Exactly one docs-literacy day this milestone with one official URL + 3 questions
- AI-native practice line each day (hints / diff review / debug with Ask)
- Do not write solutions into the lesson

Then run: node sync.mjs
Commit the new lessons + dashboard.html.
```

Fill in N and the milestone title from PLAN.md.

---

## 7. Progress backup

In the dashboard: **Export progress** weekly (Saturday). Commit `progress.json` with your work. Import restores after a browser reset. Use **one browser** as the canonical tracker.

---

## 8. Reminders

Windows task `FullstackLearning-DailyReminder` opens the live URL Mon–Sat ~10:30. Manage with `schtasks` (see earlier setup) or disable if noisy.

---

## Project recipes (cheat sheet)

**Static HTML:** folder → `index.html` → Live Preview or double-click → later GitHub Pages.  
**Next.js + TS:** `npx create-next-app@latest` → TypeScript → App Router → `npm run dev`.  
**Neon:** neon.tech free project → connection string → `.env` / Vercel env — never commit secrets.
