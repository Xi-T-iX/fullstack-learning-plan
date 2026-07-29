# Work folder — progress backup and daily logs

This folder holds **exported** learning state from the dashboard. Your **code projects** live in a separate repo (e.g. `learning-fullstack`).

## What goes where

| Location | Contents |
|----------|----------|
| `work/progress.json` | Full dashboard state: done days, logs, reviews, project URLs |
| `work/logs/YYYY-MM-DD.md` | One file per day with log text and weak-spot tags |
| `work/work-logs.md` | Combined log export (backup) |
| `learning-fullstack/` (other repo) | HTML/JS/React code per milestone + `learning-log.md` |

## Save progress (two ways)

### A. Save to work folder (recommended — Chrome/Edge)

1. Open the dashboard (`dashboard.html` locally or the live GitHub Pages URL).
2. Click **Save to work folder** (top-right).
3. First time: choose this folder: `fullstack-learning-plan/work`
4. Next times: writes `progress.json`, `work-logs.md`, and `logs/*.md` automatically.

Right-click **Save to work folder** to pick a different folder.

### B. Export + PowerShell commit

1. Click **Export all work** (downloads files).
2. Run from repo root:

```powershell
.\save-progress.ps1 -FromDownloads    # copy from Downloads, commit
.\save-progress.ps1 -Push             # commit + push to GitHub
```

Or after using **Save to work folder**:

```powershell
.\save-progress.ps1 -Push
```

## Weekly ritual (Saturday)

1. **Save to work folder** in the dashboard (or Export).
2. `.\save-progress.ps1 -Push`
3. Commit code in `learning-fullstack` separately.

## Restore on a new browser

Dashboard → **Import** → select `work/progress.json`.

## Progress survives dashboard updates

Progress lives in:

- Browser `localStorage` (key `fsp3`) — auto-saves while you study
- `work/progress.json` — durable backup in git

Updating `dashboard.html` or running `node sync.mjs` does **not** erase either, as long as you keep the same storage key and commit `work/`.

## CLI helper

```bash
node scripts/export-work.mjs work/progress.json
```

Writes `work/logs/*.md` from an exported JSON file.
