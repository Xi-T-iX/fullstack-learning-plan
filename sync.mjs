/**
 * sync.mjs — the ONLY way to update learning-app data inside dashboard.html
 *
 * Reads:
 *   - plan-data.json  (milestones + explicit days for M1–M3)
 *   - lessons/ (all .md files, embedded for offline GitHub Pages)
 *   - GETTING-STARTED.md
 *
 * Writes:
 *   - Injects a JS block between SYNC markers in dashboard.html
 *
 * Usage:  node sync.mjs
 *
 * Later exercise for you: read this file and explain each step in Ask mode.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = __dirname;

const DAYMS = 86400000;

function iso(d) {
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
function fromISO(s) {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}
function addDays(s, n) {
  const d = fromISO(s);
  d.setDate(d.getDate() + n);
  return iso(d);
}

/** Expand M4–M12 into Mon–Sat working days between start and end (inclusive). */
function expandMilestoneDays(milestones, existingDates) {
  const extra = [];
  for (const ms of milestones) {
    if (ms.id <= 3) continue;
    let cur = ms.start;
    let n = 0;
    while (cur <= ms.end) {
      const dow = fromISO(cur).getDay();
      if (dow !== 0) {
        // skip Sundays; also skip if already listed
        if (!existingDates.has(cur) && dow >= 1 && dow <= 6) {
          n += 1;
          extra.push({
            date: cur,
            m: ms.id,
            n,
            id: `M${ms.id}-D${n}`,
            title: ms.name,
            lesson: null,
            synthetic: true
          });
        }
      }
      cur = addDays(cur, 1);
    }
  }
  return extra;
}

function extractSection(md, heading) {
  const re = new RegExp(
    `## ${heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\n([\\s\\S]*?)(?=\\n## |$)`,
    "i"
  );
  const m = md.match(re);
  return m ? m[1].trim() : "";
}

function main() {
  const plan = JSON.parse(fs.readFileSync(path.join(root, "plan-data.json"), "utf8"));
  const existing = new Set(plan.days.map((d) => d.date));
  const allDays = [...plan.days, ...expandMilestoneDays(plan.milestones, existing)].sort((a, b) =>
    a.date < b.date ? -1 : 1
  );

  const lessons = {};
  for (const day of allDays) {
    if (!day.lesson) continue;
    const fp = path.join(root, day.lesson);
    if (!fs.existsSync(fp)) {
      console.warn("Missing lesson:", day.lesson);
      continue;
    }
    const md = fs.readFileSync(fp, "utf8");
    lessons[day.lesson] = {
      md,
      summary: extractSection(md, "Today's summary"),
      process: extractSection(md, "How the session works (90 min)"),
      tools: extractSection(md, "Tool steps (do these in order)")
    };
  }

  const gettingStarted = fs.readFileSync(path.join(root, "GETTING-STARTED.md"), "utf8");

  const payload = {
    meta: plan.meta,
    milestones: plan.milestones,
    days: allDays,
    lessons,
    docs: { "GETTING-STARTED.md": gettingStarted },
    syncedAt: new Date().toISOString()
  };

  const dashPath = path.join(root, "dashboard.html");
  let html = fs.readFileSync(dashPath, "utf8");
  const startMark = "<!-- SYNC:DATA_START -->";
  const endMark = "<!-- SYNC:DATA_END -->";
  const block =
    `${startMark}\n<script>\nwindow.PLAN_DATA = ${JSON.stringify(payload)};\n</script>\n${endMark}`;

  if (!html.includes(startMark) || !html.includes(endMark)) {
    console.error("dashboard.html missing SYNC markers. Abort.");
    process.exit(1);
  }
  html = html.replace(
    new RegExp(`${startMark}[\\s\\S]*?${endMark}`),
    () => block
  );
  fs.writeFileSync(dashPath, html, "utf8");
  console.log(
    `Synced ${allDays.length} days, ${Object.keys(lessons).length} lessons → dashboard.html (${payload.syncedAt})`
  );
}

main();
