/**
 * One-shot generator for Milestone 1–3 lesson markdown files.
 * Run: node scripts/generate-lessons.mjs
 * After this, edit lessons by hand anytime; then node sync.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function lesson({ id, title, summary, why, concept, code, mistakes, exercise, explain, process, tools, docs }) {
  const codeBlock = code
    ? `\n## Annotated example\n\n\`\`\`\n${code}\n\`\`\`\n`
    : "\n";
  const docsBlock = docs
    ? `\n## Docs literacy\n\nRead this page only: ${docs.url}\n\nAnswer in learning-log.md:\n1. ${docs.q1}\n2. ${docs.q2}\n3. ${docs.q3}\n`
    : "";
  return `# ${id} — ${title}

## Today's summary

${summary}

## What this is & why you need it

${why}

## How the session works (90 min)

${process}

## Tool steps (do these in order)

${tools}

## The concept

${concept}
${codeBlock}
## Where beginners go wrong

${mistakes.map((m, i) => `${i + 1}. ${m}`).join("\n")}

## Today's exercise

${exercise}
${docsBlock}
## Explain it back

In Cursor **Ask mode**, answer: ${explain}
Ask Cursor to grade you out of 10 and correct anything wrong.
`;
}

const m01 = [
  {
    id: "M1-D1", file: "d01.md", title: "Your toolbox: Node, Git, GitHub, Cursor",
    summary: "You install four tools and learn what each one is for — so nothing feels like magic for the next ten months.",
    why: "Software needs a workshop (Node), a drawing register (Git), a shared CDE (GitHub), and a senior on call (Cursor). Today you set them up and verify they work.",
    process: "0:00–0:10 skim GETTING-STARTED §1 · 0:10–0:40 this lesson · 0:40–1:25 install & verify · 1:25–1:30 note versions in learning-log.md",
    tools: "1. Open GETTING-STARTED.md in Cursor.\n2. Open terminal with Ctrl+` .\n3. Use **Ask** mode (not Agent) for questions.\n4. Disable Tab autocomplete in Cursor Settings.",
    concept: "Think construction: the **browser** is the finished building people walk through. **Node.js** is the site workshop — JavaScript that runs on your machine, not only in a page. **Git** files revisions of the whole project locally. **GitHub** is the cloud copy of that register. **Cursor** is your tutor: Ask mode explains; Agent mode edits files — during Milestone 1 you stay in Ask for learning.",
    code: null,
    mistakes: [
      "Treating Git and GitHub as the same thing.",
      "Installing but never running `node -v` / `git --version`.",
      "Leaving Tab autocomplete on so the editor types your exercises for you."
    ],
    exercise: "**Exercise M1-D1** (also in PLAN.md): Install Node LTS, Git, GitHub account, Cursor Tab off. Self-check: `node -v` and `git --version` print versions; Ask mode answers a question.",
    explain: "\"What's the difference between Git and GitHub, and what does Node let me do that a browser doesn't?\""
  },
  {
    id: "M1-D2", file: "d02.md", title: "How the web works + first push",
    summary: "You push a real file to GitHub and can explain DNS → request → response → render in plain words.",
    why: "Every app you'll build is this loop. Until you can narrate it, deploy and debug feel like superstition.",
    process: "Review toolbox names · read lesson · create repo + index.html · push · write 5 sentences · Ask grades them",
    tools: "1. File → Open Folder on your new project folder (not a parent).\n2. Create index.html in the explorer.\n3. Terminal for git commands.\n4. Browser → github.com to confirm the file.",
    concept: "You type a URL. **DNS** finds the server's address (like looking up a site address). The browser sends an **HTTP request**. The server sends an **HTTP response** (usually HTML). The browser **parses** HTML into a tree and paints pixels. Git **commit** snapshots your files; **push** uploads commits to GitHub.",
    code: `<!-- index.html -->
<!DOCTYPE html>           <!-- tells the browser: modern HTML -->
<html lang="en">          <!-- root of the document tree -->
  <head>
    <meta charset="UTF-8" />
    <title>Hello</title>  <!-- browser tab label -->
  </head>
  <body>
    <h1>Hello, I'm Kshitij</h1>  <!-- visible content -->
  </body>
</html>`,
    mistakes: [
      "Editing files but forgetting `git add` before commit.",
      "Opening a parent folder in Cursor so paths and git root are wrong.",
      "Writing the 5 sentences with jargon you can't explain."
    ],
    exercise: "**Exercise M1-D2:** Create `learning-fullstack`, hand-write index.html, commit, push, write 5 sentences on the web pipeline in learning-log.md. Self-check: file visible on GitHub; Ask grades your sentences.",
    explain: "\"Walk me through what happens between me pressing Enter on a URL and seeing a page.\""
  },
  {
    id: "M1-D3", file: "d03.md", title: "HTML document structure",
    summary: "HTML is the load-bearing frame. Today you build a valid page from memory.",
    why: "CSS and JavaScript decorate and animate; HTML is the structure. Wrong structure makes everything later harder.",
    process: "Quiz yourself on tags · read · type skeleton from memory · add content · Inspect check",
    tools: "1. New file index.html (or continue yesterday's).\n2. Live Preview or open file in browser.\n3. Right-click → Inspect → Elements.\n4. Ask mode only for hints after 15 minutes.",
    concept: "An HTML document is a **tree of elements**. Tags mark the start and end of each element. Nesting must be clean — like a WBS: children close before parents. Headings `h1`–`h6` are outline levels, not font sizes.",
    code: `<h1>Kshitij</h1>
<p>I build web tools for AEC.</p>
<ul>
  <li>Grasshopper</li>
  <li>Rhino</li>
  <li>ShapeDiver</li>
</ul>
<a href="https://www.shapediver.com" target="_blank" rel="noopener">ShapeDiver</a>`,
    mistakes: [
      "Using headings only to make text bigger.",
      "Forgetting closing tags (browsers forgive; bugs hide).",
      "Copy-pasting the whole file from Chat instead of typing."
    ],
    exercise: "**Exercise M1-D3:** From memory: skeleton + h1 + 2 paragraphs + list of 3 AEC tools + ShapeDiver link with target=_blank. Self-check: Elements tree matches intent.",
    explain: "\"What are head and body for? I'll explain; correct me.\""
  },
  {
    id: "M1-D4", file: "d04.md", title: "Semantic HTML",
    summary: "You replace div soup with header/nav/main/footer so tools and humans understand the page.",
    why: "Screen readers and search engines read structure. B2B products that ignore this feel amateur and exclude users.",
    process: "Review nesting · lesson · restructure page · image with alt · Ask audit (issues only)",
    tools: "1. Edit HTML by hand.\n2. DevTools Accessibility pane.\n3. Ask: audit semantics — do not let Agent apply fixes.",
    concept: "**Semantic** tags describe meaning: `header`, `nav`, `main`, `footer`, `section`. A `div` is a generic box — fine when nothing else fits. Images need `alt` text that describes purpose, not \"image1\".",
    code: `<header>
  <h1>Kshitij Nashine</h1>
  <nav><a href="#projects">Projects</a></nav>
</header>
<main id="projects">...</main>
<footer>Contact: you@email.com</footer>`,
    mistakes: [
      "Wrapping everything in divs out of habit.",
      "Empty alt or alt that repeats the caption uselessly.",
      "Multiple h1s competing as the page title."
    ],
    exercise: "**Exercise M1-D4:** Semantic landmarks + one image with meaningful alt. Self-check: landmarks in Accessibility tree; Ask lists issues only, you fix.",
    explain: "\"When would you still use a plain div?\""
  },
  {
    id: "M1-D5", file: "d05.md", title: "Forms",
    summary: "Labeled inputs — the skeleton of every lead form and waitlist you'll ship.",
    why: "B2B apps collect structured input constantly. Unlabeled inputs break accessibility and your own sanity.",
    process: "Recall semantic tags · lesson · build inquiry form · test labels and email validation",
    tools: "1. Type the form in HTML.\n2. Click labels to verify focus.\n3. Submit with bad email to see browser validation.",
    concept: "A **form** groups controls. Every control needs a `<label>` (wrapping the control or using `for` + `id`). `type=\"email\"` gives free basic validation. `select` is for fixed option lists — like a dropdown in a door schedule.",
    code: `<form>
  <label for="name">Name</label>
  <input id="name" name="name" required />

  <label for="email">Email</label>
  <input id="email" name="email" type="email" required />

  <label for="type">Project type</label>
  <select id="type" name="type">
    <option>Facade</option>
    <option>Structure</option>
    <option>Fit-out</option>
  </select>

  <label for="msg">Message</label>
  <textarea id="msg" name="msg"></textarea>

  <button type="submit">Send</button>
</form>`,
    mistakes: [
      "Placeholder text instead of a real label.",
      "Inputs without `name` (you'll need names when the server arrives).",
      "Button without type — can accidentally submit."
    ],
    exercise: "**Exercise M1-D5:** Inquiry form with name, email, select, textarea, submit; all labeled. Self-check: label click focuses; invalid email blocked.",
    explain: "\"Why do labels matter if the placeholder already says Email?\""
  },
  {
    id: "M1-D6", file: "d06.md", title: "Static room inventory skeleton",
    summary: "You build the HTML shell of the app Milestone 2 will make interactive.",
    why: "Same pattern as a door schedule sheet: rows of data. Later JS will fill rows from an array; today you nail structure.",
    process: "Quick form recall · lesson · build room list shell · Inspect the ul/li",
    tools: "1. New section or page `rooms.html` (or part of portfolio).\n2. Do not wire the Add button yet.\n3. Inspect to count li elements.",
    concept: "Hardcoded lists are scaffolding. Structure: heading, controls (input + button), `ul` of `li` items. Milestone 2 deletes the hardcoded `li`s and draws them from data.",
    code: `<h1>Room inventory</h1>
<input id="room-name" placeholder="Room name" />
<input id="room-area" type="number" placeholder="Area m²" />
<button type="button">Add</button>
<ul>
  <li>Lobby — 45 m²</li>
  <li>Open office — 120 m²</li>
  <li>Meeting A — 18 m²</li>
</ul>`,
    mistakes: [
      "Using a button that submits a form and reloads the page (`type=\"button\"` prevents that).",
      "Putting area in a way you can't later parse (keep a clear pattern).",
      "Skipping the unordered list and using line breaks."
    ],
    exercise: "**Exercise M1-D6:** Room inventory skeleton with 3 hardcoded rooms. Self-check: one ul, three li.",
    explain: "\"What will need to change in this HTML when we store rooms in a JavaScript array?\""
  },
  {
    id: "M1-D7", file: "d07.md", title: "Accessibility audit with AI",
    summary: "You practice the AI-native loop: AI finds issues, you fix them by typing.",
    why: "Founders who paste 'fix my file' learn nothing. Founders who use AI as a reviewer ship better products faster.",
    process: "Ask audit · write the issue list · fix each by hand · re-audit",
    tools: "1. Ask mode: \"Audit @file for a11y. List issues. Do not edit.\"\n2. You edit the file.\n3. Second Ask audit.",
    concept: "Common fixes: labels, alt text, heading order, contrast (you'll do more with CSS later), button types. The skill is **driving** the AI, not obeying it blindly — disagree if a suggestion is wrong.",
    code: null,
    mistakes: [
      "Letting Agent apply the whole patch unread.",
      "Fixing only the first issue and calling it done.",
      "Accepting nonsense suggestions without understanding."
    ],
    exercise: "**Exercise M1-D7:** Audit → you fix → re-audit clean. Self-check: second audit has no major issues.",
    explain: "\"Name two accessibility issues AI found and why each mattered.\""
  },
  {
    id: "M1-D8", file: "d08.md", title: "Project Saturday — portfolio HTML",
    summary: "You assemble a one-page portfolio in semantic HTML — shippable structure, CSS next week.",
    why: "Saturday is for artifacts. A public story of who you are beats another tutorial file.",
    process: "10 min plan sections · build · read aloud outline · commit",
    tools: "1. Single index.html.\n2. Real project names from your work.\n3. git commit with a message you wrote.",
    concept: "Minimum portfolio: identity, proof (3 projects), contact. Semantics over beauty today.",
    code: null,
    mistakes: [
      "Inventing fake projects when you have real ones.",
      "Spending the day choosing fonts (that's CSS — later).",
      "Not committing."
    ],
    exercise: "**Exercise M1-D8:** Semantic portfolio: intro, 3 projects, contact. Self-check: h1 then project h2s.",
    explain: "\"Pitch this page in two sentences as if to a B2B client.\""
  },
  {
    id: "M1-D9", file: "d09.md", title: "CSS selectors and text",
    summary: "You attach a stylesheet and control type and color without breaking HTML structure.",
    why: "HTML is structure; CSS is finishes. Separating them lets you restyle without rebuilding the frame.",
    process: "Link CSS file · selectors · style portfolio text · verify unlink breaks styles",
    tools: "1. Create styles.css.\n2. Add <link rel=\"stylesheet\" href=\"styles.css\"> in head.\n3. Edit CSS, refresh browser.",
    concept: "A **selector** targets elements (`h1`, `.card`, `#main`). Properties assign values (`color`, `font-size`, `margin`). Prefer classes for reusable patterns.",
    code: `/* styles.css */
body {
  font-family: system-ui, sans-serif; /* readable default */
  line-height: 1.5;
  color: #1a1a1a;
}
h1 {
  font-size: 2rem;
  letter-spacing: -0.02em;
}
a {
  color: #0f766e; /* teal accent — same family as your learning app */
}`,
    mistakes: [
      "Inline styles everywhere (hard to reuse).",
      "Styling with h1 for size instead of a class when needed.",
      "Wrong path in href so CSS never loads."
    ],
    exercise: "**Exercise M1-D9:** External CSS on portfolio. Self-check: link tag present; edits affect page.",
    explain: "\"What's the difference between an element selector and a class selector?\""
  },
  {
    id: "M1-D10", file: "d10.md", title: "The box model",
    summary: "You predict how wide a box will render — the skill that ends most 'why is my layout broken?' pain.",
    why: "Every element is a box: content + padding + border + margin. Misread this and flex/grid feel haunted.",
    process: "Draw boxes on paper · lesson · three-box experiment · predict · confirm in DevTools",
    tools: "1. DevTools → select element → box model diagram.\n2. Toggle box-sizing in CSS.\n3. Ask only after you predicted.",
    concept: "Default `content-box`: width applies to content only; padding/border add outside. `border-box`: width includes padding and border (usually what you want). Margin is outside the border — clearance from neighbors.",
    code: `.a { box-sizing: content-box; width: 200px; padding: 20px; border: 5px solid; }
.b { box-sizing: border-box;  width: 200px; padding: 20px; border: 5px solid; }
/* .a total width = 200+40+10 = 250px; .b total = 200px */`,
    mistakes: [
      "Assuming width includes padding.",
      "Using margin to 'center' without understanding flex yet.",
      "Not verifying in DevTools."
    ],
    exercise: "**Exercise M1-D10:** Three boxes; predict widths; confirm. Self-check: explanation in Ask mode is correct.",
    explain: "\"Why do two elements both with width 200px look different widths?\""
  },
  {
    id: "M1-D11", file: "d11.md", title: "Flexbox I — axes and centering",
    summary: "You center content with flex and can name main vs cross axis.",
    why: "Flexbox is how most UI rows and centering work. One solid mental model beats twenty Stack Overflow snippets.",
    process: "Box model 2-min recall · flex lesson · center a card · say axes out loud",
    tools: "1. Parent with display:flex.\n2. justify-content and align-items.\n3. DevTools flex overlay if available.",
    concept: "On a flex container, **main axis** direction is row (default) or column. `justify-content` packs along main; `align-items` along cross. Centering a card in the viewport: column or row flex on a full-height parent with both set to center.",
    code: `body {
  min-height: 100vh;
  display: flex;
  justify-content: center; /* main axis */
  align-items: center;     /* cross axis */
}`,
    mistakes: [
      "Putting display:flex on the child instead of the parent.",
      "Confusing justify and align.",
      "Using absolute positioning when flex is enough."
    ],
    exercise: "**Exercise M1-D11:** Center a project card in the viewport with flex only.",
    explain: "\"In my centering layout, which axis is main and which is cross?\""
  },
  {
    id: "M1-D12", file: "d12.md", title: "Flexbox II — wrap and gap",
    summary: "You lay out three project cards that wrap on small screens.",
    why: "Real portfolios are rows of cards. Wrap + gap is the minimum professional layout.",
    process: "Center recall · wrap lesson · three cards · resize window test",
    tools: "1. flex-wrap: wrap; gap: 1rem;\n2. Narrow the browser.\n3. No horizontal scrollbar allowed.",
    concept: "`flex-wrap: wrap` lets items move to the next line. `gap` spaces items without margin tricks. Card children need a sensible `flex-basis` or width so they wrap predictably.",
    code: `.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.card {
  flex: 1 1 220px; /* grow, shrink, basis */
  border: 1px solid #ccc;
  padding: 1rem;
}`,
    mistakes: [
      "Fixed widths that force overflow on mobile.",
      "Margins instead of gap (harder to keep even).",
      "Forgetting wrap."
    ],
    exercise: "**Exercise M1-D12:** Three wrapping project cards. Self-check: wrap at narrow widths.",
    explain: "\"What does flex: 1 1 220px mean in plain words?\""
  },
  {
    id: "M1-D13", file: "d13.md", title: "Docs literacy — MDN HTML elements",
    summary: "Once this milestone, you practice reading official docs — a career skill.",
    why: "Tutorials go stale. Docs are the source of truth. Skimming MDN poorly is still better than only chatting with AI.",
    process: "Open MDN · skim with a purpose · write 3 answers · Ask grades",
    tools: "1. Browser only for the docs page.\n2. learning-log.md for answers.\n3. Ask mode to grade — not to fetch the answers first.",
    concept: "Official docs list elements, attributes, accessibility notes. You don't memorize the catalog — you learn to **look up** and extract what you need.",
    code: null,
    mistakes: [
      "Skimming without writing answers.",
      "Asking Cursor to summarize instead of reading.",
      "Bookmarking nothing for later."
    ],
    exercise: "**Exercise M1-D13:** Read the MDN HTML elements reference (linked in PLAN). Answer 3 questions in learning-log.md.",
    explain: "\"What did the docs clarify that my lesson didn't?\"",
    docs: {
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements",
      q1: "Difference between section and div?",
      q2: "When is article appropriate?",
      q3: "Name one element you haven't used and what it's for."
    }
  },
  {
    id: "M1-D14", file: "d14.md", title: "Saturday — style the portfolio",
    summary: "No new theory: make the portfolio look intentional and commit.",
    why: "Shipping polish teaches taste. Constraint: one AI design suggestion only.",
    process: "Apply flex + type · Ask for one critique · apply that one · commit",
    tools: "1. styles.css only.\n2. Ask: one critique.\n3. git commit.",
    concept: "Consistency beats novelty: one font stack, one accent, spacing scale (e.g. 0.5/1/2rem).",
    code: null,
    mistakes: ["Chasing perfect.", "Ten AI suggestions.", "Not viewing on phone width."],
    exercise: "**Exercise M1-D14:** Intentional portfolio styling; one AI critique applied.",
    explain: "\"What single design choice improved clarity the most?\""
  },
  {
    id: "M1-D15", file: "d15.md", title: "Responsive basics",
    summary: "Your portfolio works on a phone-width screen.",
    why: "Clients open links on phones. Horizontal scroll looks broken.",
    process: "Device toolbar · media query · fix overflow · retest three widths",
    tools: "1. DevTools Ctrl+Shift+M.\n2. @media (min-width: …) mobile-first.\n3. meta viewport in head if missing.",
    concept: "**Mobile-first:** base styles for small screens; add complexity at breakpoints. Viewport meta tells mobile browsers not to shrink a desktop layout blindly.",
    code: `<meta name="viewport" content="width=device-width, initial-scale=1" />

/* css */
@media (min-width: 800px) {
  .grid { flex-wrap: nowrap; }
}`,
    mistakes: ["Missing viewport meta.", "Only testing desktop.", "Fixed pixel widths on containers."],
    exercise: "**Exercise M1-D15:** No horizontal scroll at 375/768/1200.",
    explain: "\"What is mobile-first in one sentence?\""
  },
  {
    id: "M1-D16", file: "d16.md", title: "Focus states and light motion",
    summary: "Keyboard users can see where they are; links don't jump harshly.",
    why: "Accessibility is product quality. Focus rings are not optional chrome.",
    process: "Tab through page · add :focus-visible · optional transition · retest",
    tools: "1. Keyboard only navigation.\n2. :focus-visible styles.\n3. transition on color 0.15s.",
    concept: "`:focus-visible` styles keyboard focus without punishing mouse users. Short transitions signal change without gimmicks.",
    code: `a:focus-visible, button:focus-visible {
  outline: 2px solid #0f766e;
  outline-offset: 3px;
}
a { transition: color 0.15s ease; }`,
    mistakes: ["outline: none without a replacement.", "Slow flashy animations.", "Ignoring keyboard."],
    exercise: "**Exercise M1-D16:** Clear Tab focus on interactive elements.",
    explain: "\"Why is outline:none dangerous?\""
  },
  {
    id: "M1-D17", file: "d17.md", title: "AEC product hero copy",
    summary: "You write a B2B problem headline for a non-configurator product idea.",
    why: "Founders who can't state the problem don't get meetings. This is Track-2 muscle before Track-2 starts.",
    process: "Pick a pain from ShapeDiver patterns (no client secrets) · write hero · CTA · friend test",
    tools: "1. HTML section.\n2. Plain language.\n3. Ask to critique fluff — you rewrite.",
    concept: "Formula: who · painful job · outcome. Avoid feature lists. Not a configurator — respect your ShapeDiver lane.",
    code: `<section>
  <h2>Stop re-typing model issues into email threads</h2>
  <p>For BIM coordinators who need a single list of clashes with owners and due dates.</p>
  <a href="#">Join the waitlist</a>
</section>`,
    mistakes: ["Feature soup.", "Configurator idea.", "Jargon nobody outside your firm uses."],
    exercise: "**Exercise M1-D17:** Hero + CTA; friend can state the problem.",
    explain: "\"Who is the user and what job are they hiring this product for?\""
  },
  {
    id: "M1-D18", file: "d18.md", title: "GitHub Pages deploy",
    summary: "You turn the repo into a public URL.",
    why: "Live links are proof. Local-only work doesn't count for Milestone 1.",
    process: "Push latest · Settings → Pages · wait · open URL",
    tools: "1. GitHub repo Settings → Pages.\n2. Branch main, folder / root.\n3. Wait 1–2 minutes.",
    concept: "GitHub Pages hosts static files (HTML/CSS/JS) from your repo. Same mechanism as this learning app.",
    code: null,
    mistakes: ["Wrong branch.", "Capitalization in paths breaks on Pages.", "Caching — hard refresh."],
    exercise: "**Exercise M1-D18:** Pages enabled; URL loads.",
    explain: "\"What kinds of apps can Pages host, and what needs a real server later?\""
  },
  {
    id: "M1-D19", file: "d19.md", title: "Production bugfix",
    summary: "You test on a phone and fix path/case issues.",
    why: "Production is the real exam. Catching breaks before you call M1 done is professionalism.",
    process: "Phone open · note bugs · fix · push · retest",
    tools: "1. Phone browser.\n2. git pull/push cycle.\n3. Ask: interpret an error — you apply fix.",
    concept: "Servers can be case-sensitive. Relative paths differ from `file://`. Always test the live URL.",
    code: null,
    mistakes: ["Only testing locally.", "Huge unrelated refactors.", "Not committing the fix."],
    exercise: "**Exercise M1-D19:** Phone OK on live URL.",
    explain: "\"What broke in production that worked locally?\""
  },
  {
    id: "M1-D20", file: "d20.md", title: "Ship Milestone 1",
    summary: "You close M1: DoD checklist, Saturday review redo, export progress.",
    why: "Milestones end with decisions, not endless polish.",
    process: "Redo M1-D3 from scratch · tick DoD · export progress.json · commit",
    tools: "1. Throwaway file for redo.\n2. Dashboard Projects + Export.\n3. Celebrate briefly.",
    concept: "Definition of done protects you from perfectionism. Spaced redo proves learning stuck.",
    code: null,
    mistakes: ["Skipping the redo.", "Redeploying instead of checking DoD.", "Not exporting progress."],
    exercise: "**Exercise M1-D20:** Close M1 per PLAN definition of done + redo M1-D3.",
    explain: "\"What can you explain now that you couldn't on Jul 17?\""
  }
];

// M2 and M3: compact but complete lessons
const m02meta = [
  ["d01.md","M2-D1","Variables and types","Values live in named boxes; const vs let.","const name = \"Lobby\";\nlet area = 45;\narea = area + 5; // let can change\n// name = \"x\"; // const cannot"],
  ["d02.md","M2-D2","Functions","A function is a door schedule: inputs in, predictable output.","function areaOfRect(w, h) {\n  return w * h; // output\n}\nconst a = areaOfRect(3, 4); // 12"],
  ["d03.md","M2-D3","Array methods","map/filter/reduce = Grasshopper list logic in text.","const areas = [45, 120, 18];\nconst scaled = areas.map(a => a * 1.1);\nconst big = areas.filter(a => a > 40);\nconst total = areas.reduce((s, a) => s + a, 0);"],
  ["d04.md","M2-D4","Objects and JSON","A room is one object; a list of rooms is an array of objects.","const room = { name: \"Lobby\", area: 45 };\nconst rooms = [room, { name: \"Office\", area: 120 }];\nJSON.stringify(rooms); // text for storage/APIs"],
  ["d05.md","M2-D5","Mixed practice","Fluency from reps — ten small drills, typed by you.",null],
  ["d06.md","M2-D6","Saturday console calculator","Pure logic before DOM — totals and flags in the console.",null],
  ["d07.md","M2-D7","DOM select and change","querySelector finds nodes; textContent changes text.","const h = document.querySelector(\"h1\");\nh.textContent = \"Room inventory\";"],
  ["d08.md","M2-D8","Render from data","The page is a projection of an array — core of modern UI.","function render(rooms) {\n  const ul = document.querySelector(\"ul\");\n  ul.innerHTML = \"\";\n  rooms.forEach(r => {\n    const li = document.createElement(\"li\");\n    li.textContent = r.name + \" — \" + r.area + \" m²\";\n    ul.appendChild(li);\n  });\n}"],
  ["d09.md","M2-D9","Events — Add","Click → change array → render.","button.addEventListener(\"click\", () => {\n  rooms.push({ name: input.value, area: Number(areaInput.value) });\n  render(rooms);\n});"],
  ["d10.md","M2-D10","Delegation — Delete","One listener on ul handles every delete button.","ul.addEventListener(\"click\", (e) => {\n  if (e.target.matches(\"button.delete\")) {\n    const i = Number(e.target.dataset.index);\n    rooms.splice(i, 1);\n    render(rooms);\n  }\n});"],
  ["d11.md","M2-D11","Totals and empty states","Derived UI from the same array.","const total = rooms.reduce((s, r) => s + r.area, 0);"],
  ["d12.md","M2-D12","Saturday polish","Empty state message, disabled Add when inputs empty.",null],
  ["d13.md","M2-D13","localStorage","Save JSON string on every change; load on startup.","localStorage.setItem(\"rooms\", JSON.stringify(rooms));\nconst saved = JSON.parse(localStorage.getItem(\"rooms\") || \"[]\");"],
  ["d14.md","M2-D14","Modules","Split state.js / render.js / main.js — state has no document.","// state.js\nexport let rooms = [];\nexport function add(room) { rooms.push(room); }"],
  ["d15.md","M2-D15","Closures","Functions remember the scope where they were born.","function makeCounter() {\n  let n = 0;\n  return () => { n++; return n; };\n}"],
  ["d16.md","M2-D16","Docs literacy — localStorage","Read MDN Window.localStorage; answer 3 questions.",null],
  ["d17.md","M2-D17","Deploy interactive app","Push to Pages; phone test add/delete/refresh.",null],
  ["d18.md","M2-D18","Ship Milestone 2","DoD + redo M1-D10 box model from scratch.",null]
];

const m03meta = [
  ["d01.md","M3-D1","Why TypeScript","Types catch bugs before runtime — like dimension checks before fabrication.","function area(w: number, h: number): number {\n  return w * h;\n}"],
  ["d02.md","M3-D2","Everyday types","string, number, boolean, arrays, object types, optional fields.","type Room = { name: string; area: number; level?: string };"],
  ["d03.md","M3-D3","Narrowing","Unions need checks — like verifying material before specifying a fix.","type Result = { ok: true; data: string } | { ok: false; error: string };\nfunction show(r: Result) {\n  if (r.ok) console.log(r.data);\n  else console.log(r.error);\n}"],
  ["d04.md","M3-D4","Docs literacy — TS Handbook","Read Everyday Types chapter; 3 questions in log.",null],
  ["d05.md","M3-D5","Create Next.js + TS","Scaffold with create-next-app; understand app/ folder.",null],
  ["d06.md","M3-D6","Saturday typed form UI","Inquiry form in React/TS — client UI only today.",null],
  ["d07.md","M3-D7","Server route or action","Code that runs on the server — secrets stay there.",null],
  ["d08.md","M3-D8","Neon Postgres","Hosted database; connection string in env.",null],
  ["d09.md","M3-D9","Prisma schema","Model Inquiry; migrate; review generated SQL.","model Inquiry {\n  id        String   @id @default(cuid())\n  name      String\n  email     String\n  createdAt DateTime @default(now())\n}"],
  ["d10.md","M3-D10","Wire form to insert","Server receives form → prisma.inquiry.create.",null],
  ["d11.md","M3-D11","zod validation","Bad input → 400, not a crash.","const Schema = z.object({\n  name: z.string().min(1),\n  email: z.string().email()\n});"],
  ["d12.md","M3-D12","Saturday harden","Empty states, duplicate submit guard, friendly errors.",null],
  ["d13.md","M3-D13","Vercel deploy","Push → Vercel project → env vars → live URL.",null],
  ["d14.md","M3-D14","Production smoke","Submit real row; see it in Neon.",null],
  ["d15.md","M3-D15","Review your diff","Read every changed line; Ask critiques architecture once.",null],
  ["d16.md","M3-D16","Admin list page","Server component lists inquiries (password-less OK for learning).",null],
  ["d17.md","M3-D17","Final fixes","DoD dry run; fix secrets leak if any.",null],
  ["d18.md","M3-D18","Ship Milestone 3","DoD + redo M2-D8 render-from-data from memory.",null]
];

function pack(meta, milestone, folder) {
  return meta.map(([file, id, title, conceptLine, code], idx) => {
    const isDocs = title.toLowerCase().includes("docs literacy");
    const docs = isDocs
      ? milestone === 2
        ? { url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage", q1: "What does localStorage store values as?", q2: "What is the size limit roughly?", q3: "When would you not use localStorage?" }
        : { url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html", q1: "What is a union type?", q2: "What does optional `?` mean on a property?", q3: "When do you use `unknown` vs `any`?" }
      : null;
    return {
      id, file, title,
      summary: `${conceptLine} Today is Milestone ${milestone}, day ${idx + 1}.`,
      why: `${conceptLine} You need this to ship Milestone ${milestone}'s live URL — each day is one brick.`,
      process: "0:00–0:10 quiz yesterday · 0:10–0:40 this lesson · 0:40–1:25 exercise in PLAN/lesson · 1:25–1:30 commit + log weak spot",
      tools: "1. Open this lesson in the dashboard (or this file).\n2. Ask mode for hints after 15 minutes on concepts.\n3. Type exercise code yourself — Tab autocomplete off.\n4. Use DevTools / terminal / Neon / Vercel as the exercise requires.",
      concept: conceptLine + (milestone === 2
        ? " Keep all examples AEC-flavored: rooms, areas, inventories."
        : " Prefer TypeScript strictness; never commit secrets."),
      code,
      mistakes: [
        "Asking Agent to write the whole exercise.",
        "Skipping the self-check.",
        "Moving on while you still can't explain the concept in one minute."
      ],
      exercise: `Complete **${id}** as specified in PLAN.md and build until the self-check passes. Log one weak spot if something confused you.`,
      explain: `"Explain ${title} to me like I know Grasshopper but not web code."`,
      docs
    };
  });
}

const all = [
  ...m01.map((l) => ({ ...l, dir: "m01" })),
  ...pack(m02meta, 2, "m02").map((l) => ({ ...l, dir: "m02" })),
  ...pack(m03meta, 3, "m03").map((l) => ({ ...l, dir: "m03" }))
];

for (const l of all) {
  const dir = path.join(root, "lessons", l.dir);
  fs.mkdirSync(dir, { recursive: true });
  const body = lesson(l);
  fs.writeFileSync(path.join(dir, l.file), body, "utf8");
}

fs.writeFileSync(
  path.join(root, "lessons", "README.md"),
  `# Lessons

One concept per file. Template is enforced in GETTING-STARTED.md.

- Milestone 1–3: written (\`m01/\`, \`m02/\`, \`m03/\`).
- Milestone 4–12: generate just-in-time with the prompt in GETTING-STARTED.md, then run \`node sync.mjs\`.

Naming: \`lessons/m0X/dYY.md\` matching PLAN.md day order.
`,
  "utf8"
);

console.log("Wrote", all.length, "lessons + README");
