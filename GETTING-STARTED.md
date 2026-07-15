# Getting Started — the absolute-beginner on-ramp

Read this ONCE, fully, before Week 0 Day 1 of [PLAN.md](PLAN.md). Then keep it open as a reference — you'll come back to the project recipes many times.

This guide assumes you have never set up a development environment and never used Cursor for coding. That's fine. Everything is spelled out.

---

## 1. Install everything (Windows)

Do these in order. Each step ends with a check — don't move on until the check passes.

### 1a. Node.js (the JavaScript runtime)
1. Go to [nodejs.org](https://nodejs.org) and download the **LTS** version (the one labeled "Recommended for most users").
2. Run the installer. Accept all defaults. When it asks about "tools for native modules," you can skip it.
3. **Check:** open a new terminal (see section 2c for how) and type `node -v` then Enter. You should see a version number like `v22.x.x`. Also try `npm -v` — npm is Node's package manager, installed automatically.

### 1b. Git (version control)
1. Go to [git-scm.com](https://git-scm.com/download/win) and download Git for Windows.
2. Run the installer. Accept all defaults (there are many screens — defaults are fine for all of them).
3. **Check:** in a new terminal, `git --version` should print something like `git version 2.x`.

### 1c. GitHub account
1. Sign up at [github.com](https://github.com) if you don't have an account (use your personal email, not work).
2. Tell Git who you are — run these two commands in the terminal (with your real name/email):

```bash
git config --global user.name "Kshitij Nashine"
git config --global user.email "your-github-email@example.com"
```

3. **Check:** `git config --global user.name` prints your name back.

### 1d. Cursor
You already have Cursor installed (you're reading this in it). Two settings to change for the learning phase — see section 2e.

---

## 2. Cursor from zero

### 2a. The layout
- **Left sidebar:** the file explorer — your project's files and folders.
- **Center:** the editor — where you write code. Multiple files open as tabs.
- **Bottom panel:** the terminal (and other tabs like Problems). Toggle it with `` Ctrl+` ``.
- **Right sidebar:** the AI chat. Toggle with `Ctrl+L`.

### 2b. Opening a project
A "project" is just a folder. **File → Open Folder** and pick the folder (e.g., `D:\Coding Projects\learning-fullstack`). Cursor treats that folder as the workspace — the chat, terminal, and file explorer all operate inside it. **Always open the specific project folder, not a parent folder** — half of beginner confusion is having the wrong folder open.

### 2c. The integrated terminal
Press `` Ctrl+` ``. A terminal opens *already inside your project folder*. This is where you run all commands in this guide (`npm install`, `git commit`, etc.). The prompt shows the current folder — glance at it before running anything.

### 2d. The chat modes — your tutor, your builder, your architect
Open chat with `Ctrl+L`. There's a mode selector near the input box:

| Mode | What it does | When YOU use it |
|------|--------------|-----------------|
| **Ask** | Answers questions, explains code, quizzes you. Cannot change files. | **Your default during fundamentals (Weeks 0–17).** "Explain this error." "Why doesn't this center?" "Quiz me on flexbox." |
| **Agent** | Actually writes/edits files and runs commands. | Later phases, and setup chores. During fundamentals, only for things like "set up the folder structure" — never for writing your learning code. |
| **Plan** | Designs an approach with you before building. | Big features and projects from React onward. |

Reference any file in chat by typing `@` — e.g., "explain the CSS in @styles.css". Paste error messages into chat verbatim; that's not cheating, that's how everyone works now.

### 2e. Two settings for the learning phase
Per the Cursor Learning Protocol in PLAN.md, during Weeks 0–17 you type all code yourself:
1. **Disable Tab autocomplete:** open Settings (`Ctrl+Shift+J`), find the Tab/Cursor Tab section, and turn off autocomplete suggestions. Re-enable it around Week 18 when you start React.
2. **Keep Ask mode as your default chat mode** so you don't accidentally have the agent write your exercises.

### 2f. The rule that makes this work
Cursor is your tutor, not your ghostwriter. The test for every piece of code in your project: **could you re-type it from memory and explain every line to Cursor in Ask mode?** If not, stop and ask "explain this to me line by line" before moving on.

---

## 3. Git + GitHub from zero

### 3a. The mental model
- **Git** is a save-history system for your code, living in a hidden `.git` folder inside your project.
- A **commit** is a labeled snapshot ("added todo delete button").
- **GitHub** is the cloud copy of that history — your backup and your public portfolio.

### 3b. One-time setup per project
In the terminal, inside your project folder:

```bash
git init                                   # start tracking this folder
git add .                                  # stage all files for the snapshot
git commit -m "initial commit"             # take the snapshot
```

Then create the GitHub side: go to github.com → New repository → name it (e.g., `learning-fullstack`) → **don't** tick "Add a README" → Create. GitHub shows you the connect commands; they look like:

```bash
git remote add origin https://github.com/YOURUSERNAME/learning-fullstack.git
git branch -M main
git push -u origin main
```

The first push opens a browser window to log in. After that it just works.

### 3c. The daily loop (end of every session, ~2 minutes)

```bash
git status                        # what changed? (red = unstaged)
git add .                         # stage everything
git commit -m "your message"      # snapshot, message in your own words
git push                          # send to GitHub
```

**Check:** refresh your repo page on github.com — your files and commit message are there.

### 3d. The two most common beginner mistakes
1. **Wrong folder.** `git status` says "not a git repository" → your terminal isn't inside the project folder. Look at the prompt path; `cd` to the right folder or reopen the correct folder in Cursor.
2. **Committed but forgot to push (or edited but forgot to commit).** GitHub looks stale → run `git status`. Uncommitted changes show in red; if clean but GitHub is behind, you forgot `git push`.

When git confuses you (it will), paste the full terminal output into Ask mode and ask "what state am I in, and what should I do?"

---

## 4. Project setup recipes

Copy-paste terminal steps for every project type in PLAN.md, in the order you'll meet them. Always: create the folder inside `D:\Coding Projects\`, then open it in Cursor (File → Open Folder), then run commands in the integrated terminal.

### Recipe A — Plain HTML/CSS/JS site *(Weeks 0–9)*
1. Create folder, open in Cursor, create three files via the file explorer: `index.html`, `styles.css`, `script.js`.
2. In `index.html`, type `!` then press Tab — Cursor/Emmet expands a full HTML skeleton. Link the other two files inside it:

```html
<link rel="stylesheet" href="styles.css">   <!-- in <head> -->
<script src="script.js"></script>            <!-- before </body> -->
```

3. Viewing it: install the **Live Server** extension (Extensions panel `Ctrl+Shift+X`, search "Live Server", install) → right-click `index.html` → "Open with Live Server". The page auto-reloads on save.
4. **You know it worked when:** the browser opens at `127.0.0.1:5500` and shows your page, and edits appear on save.

### Recipe B — Node project *(Week 10)*

```bash
npm init -y            # creates package.json (the project's manifest)
```

Create `index.js`, write `console.log("hello from node");`, run with:

```bash
node index.js
```

**You know it worked when:** the terminal prints your message. Add a `.gitignore` file containing the single line `node_modules` before your first commit (dependencies are re-installable; never commit them).

### Recipe C — Express API, later with TypeScript *(Weeks 11–17)*

```bash
npm init -y
npm install express
```

Create `server.js`:

```js
const express = require("express");
const app = express();
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true }));

app.listen(3000, () => console.log("API running on http://localhost:3000"));
```

Run `node server.js`, open `http://localhost:3000/health` in the browser.
**You know it worked when:** the browser shows `{"ok":true}`.
*(Week 16+, TypeScript version: additionally `npm install -D typescript tsx @types/express`, run `npx tsc --init`, rename to `server.ts`, run with `npx tsx server.ts`. Ask Cursor to walk you through the tsconfig it generated.)*

### Recipe D — React app via Vite *(Week 18)*

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
```

**You know it worked when:** `http://localhost:5173` shows the spinning Vite+React starter page. Your code lives in `src/App.tsx`.

### Recipe E — Next.js app *(Week 23)*

```bash
npx create-next-app@latest my-app
```

Accept the defaults it suggests (TypeScript: yes, Tailwind: yes, App Router: yes). Then:

```bash
cd my-app
npm run dev
```

**You know it worked when:** `http://localhost:3000` shows the Next.js starter page. Pages live in the `app/` folder.

### Killing a running server
Servers keep running until stopped: click into the terminal and press `Ctrl+C`. "Port already in use" error = a previous server is still running in another terminal tab.

---

## 5. The weekly workflow — how the four files fit together

Your kit: **[PLAN.md](PLAN.md)** (what & when) · **[RESOURCES.md](RESOURCES.md)** (what to study) · **[EXERCISES.md](EXERCISES.md)** (how to practice & verify) · this file (how to operate the tools).

**Sunday (10 min):** read next week's row in PLAN.md. Then ask Cursor (Ask mode):
> "Expand Week N of @PLAN.md into a day-by-day breakdown, adjusted for where I actually am. Yesterday I finished ___, and I'm still shaky on ___."

**Each weekday (~90 min):**
1. *0:00–0:10* — Ask Cursor: "Quiz me on what I logged yesterday in @learning-log.md — 3 questions, one at a time."
2. *0:10–0:40* — Study today's topic using the phase's primary resource in RESOURCES.md.
3. *0:40–1:25* — Do the matching exercise in EXERCISES.md (or your project task). Type it yourself. Verify with the exercise's self-check.
4. *1:25–1:30* — The git daily loop (section 3c) + 2–3 lines in `learning-log.md`.

**Saturday:** no new material — extend the week's project. **Sunday:** off + the 10-min ritual.

**Prompts that earn their keep (collect your own as you go):**
- "Explain this like I know Grasshopper and Python but not JavaScript."
- "I'm about to paste code I wrote. Don't fix it — ask me Socratic questions until I find the bug myself."
- "Critique my code like a senior dev reviewing a junior's PR."
- "What concept was I missing that caused this bug?"
- "Generate 5 practice exercises on [topic]; don't show solutions until I paste my attempts."

---

## 6. Daily reminders (already set up)

Three layers remind you to sit down at **10:30 AM, Monday–Saturday** (Sundays off, per the plan):

### 6a. Windows reminder + dashboard (installed on this PC)
A scheduled task named **`FullstackLearning-DailyReminder`** runs `reminder.ps1` every Mon–Sat at 10:30: it shows a Windows notification with your current week and phase, and opens the dashboard — your daily home screen with today's task, tomorrow's preview, exercises, project checklists, progress checkboxes, streak, and timeline.

**The dashboard lives at [https://xi-t-ix.github.io/fullstack-learning-plan/](https://xi-t-ix.github.io/fullstack-learning-plan/)** — bookmark it; it works on your phone too. The reminder opens this URL (falling back to the local `dashboard.html` copy if you're offline).

Manage it from any terminal:

```powershell
schtasks /Change /TN "FullstackLearning-DailyReminder" /ST 09:00   # change the time
schtasks /Change /TN "FullstackLearning-DailyReminder" /DISABLE    # pause (vacation)
schtasks /Change /TN "FullstackLearning-DailyReminder" /ENABLE     # resume
schtasks /Delete /TN "FullstackLearning-DailyReminder" /F          # remove entirely
```

**Three habits that keep your progress safe:**
- **One browser rule:** progress checkboxes are saved in the browser you tick them in (localStorage). Pick one browser on your PC as the canonical tracker and always use it. Your phone can *read* everything at the same URL, but its checkboxes are a separate copy.
- **Weekly backup:** every Saturday, click **Export progress** in the dashboard's top bar and save the JSON file into this plan folder — then it gets committed with everything else. **Import** restores it after a browser reset or on a new machine.
- **Publishing updates:** the dashboard and plan files live in the GitHub repo [`Xi-T-iX/fullstack-learning-plan`](https://github.com/Xi-T-iX/fullstack-learning-plan). Whenever a file in this folder changes, publish with:

```powershell
git add .
git commit -m "describe what changed"
git push
```

The live site updates itself about a minute after the push. (This is also your first real git habit — the same loop you'll use on every project.)

### 6b. Cursor automation (daily agent briefing)
A scheduled Cursor automation ("Daily Learning Kickoff") posts your day's specific task breakdown every Mon–Sat at 10:30 in the Agents window — so when you open Cursor, your plan for the session is already waiting. Manage it at cursor.com → Automations (or the Automations tab in Cursor).

### 6c. Phone/calendar reminder (30-second setup, do this once)
So the nudge follows you away from the PC:
1. Open [calendar.google.com](https://calendar.google.com) (or your phone's calendar).
2. Create an event: **"Fullstack 90 min"**, 10:30–12:00.
3. Set it to repeat **weekly on Mon, Tue, Wed, Thu, Fri, Sat**.
4. Add a notification at event time (and optionally 10 minutes before).
5. If you use Google Calendar on your phone, the notification arrives there automatically.

**The habit rule:** when the 10:30 reminder fires, you don't negotiate with yourself — you open the dashboard and start the 0:00–0:10 review block. Starting is the whole battle; the 90 minutes run themselves.
