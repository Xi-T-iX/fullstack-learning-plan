/**
 * Reads exported progress.json and writes work/logs/YYYY-MM-DD.md files.
 * Usage: node scripts/export-work.mjs [path/to/progress.json]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const input = process.argv[2] || path.join(root, "work", "progress.json");

if (!fs.existsSync(input)) {
  console.error("File not found:", input);
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(input, "utf8"));
const state = raw.progress || raw;
const logs = state.logs || {};
const done = state.done || {};
const outDir = path.join(root, "work", "logs");
fs.mkdirSync(outDir, { recursive: true });

let count = 0;
for (const [date, log] of Object.entries(logs)) {
  const body = `# ${date}\n\n**Done:** ${done[date] ? "yes" : "no"}\n\n## Log\n\n${log.t || "(empty)"}\n\n## Weak spot\n\n${log.w || "(none)"}\n`;
  fs.writeFileSync(path.join(outDir, `${date}.md`), body, "utf8");
  count++;
}

console.log(`Wrote ${count} log files → work/logs/`);
