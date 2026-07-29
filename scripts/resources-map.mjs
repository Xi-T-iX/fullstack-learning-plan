/**
 * Curated per-day reference links (primary study = lessons/; these are backup shelf).
 * Applied by sync.mjs to plan-data days and synthetic M4+ milestone fallbacks.
 */
export const DAY_RESOURCES = {
  "M1-D1": [
    { label: "GETTING-STARTED §1–2", url: "GETTING-STARTED.md", kind: "primary" },
    { label: "Node.js download", url: "https://nodejs.org/en", kind: "backup" }
  ],
  "M1-D2": [
    { label: "MDN: How the web works", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works", kind: "primary" }
  ],
  "M1-D3": [
    { label: "MDN: HTML basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics", kind: "primary" },
    { label: "MDN: Intro to HTML", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML", kind: "backup" }
  ],
  "M1-D4": [
    { label: "MDN: Document structure", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure", kind: "primary" }
  ],
  "M1-D5": [
    { label: "MDN: Your first form", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form", kind: "primary" }
  ],
  "M1-D6": [
    { label: "MDN: Tables", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables", kind: "primary" }
  ],
  "M1-D7": [
    { label: "MDN: Accessibility intro", url: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility", kind: "primary" }
  ],
  "M1-D8": [],
  "M1-D9": [
    { label: "MDN: CSS first steps", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps", kind: "primary" }
  ],
  "M1-D10": [
    { label: "MDN: The box model", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model", kind: "primary" }
  ],
  "M1-D11": [
    { label: "MDN: Flexbox", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox", kind: "primary" },
    { label: "Flexbox Froggy", url: "https://flexboxfroggy.com", kind: "backup" }
  ],
  "M1-D12": [
    { label: "CSS-Tricks: Flexbox guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/", kind: "primary" }
  ],
  "M1-D13": [
    { label: "MDN: HTML elements reference", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements", kind: "docs" }
  ],
  "M1-D14": [],
  "M1-D15": [
    { label: "MDN: Responsive design", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design", kind: "primary" }
  ],
  "M1-D16": [
    { label: "MDN: CSS transitions", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions", kind: "primary" }
  ],
  "M1-D17": [
    { label: "Landing page handbook", url: "https://www.julian.com/guide/startup/landing-pages", kind: "backup" }
  ],
  "M1-D18": [
    { label: "GitHub Pages docs", url: "https://docs.github.com/en/pages/getting-started-with-github-pages", kind: "primary" }
  ],
  "M1-D19": [],
  "M1-D20": [],
  "M2-D1": [
    { label: "javascript.info: Variables", url: "https://javascript.info/variables", kind: "primary" },
    { label: "javascript.info: Types", url: "https://javascript.info/types", kind: "backup" }
  ],
  "M2-D2": [
    { label: "javascript.info: Functions", url: "https://javascript.info/function-basics", kind: "primary" },
    { label: "javascript.info: Arrow functions", url: "https://javascript.info/arrow-functions-basics", kind: "backup" }
  ],
  "M2-D3": [
    { label: "javascript.info: Array methods", url: "https://javascript.info/array-methods", kind: "primary" }
  ],
  "M2-D4": [
    { label: "javascript.info: Objects", url: "https://javascript.info/object", kind: "primary" }
  ],
  "M2-D5": [
    { label: "javascript.info: Part 1", url: "https://javascript.info/", kind: "primary" }
  ],
  "M2-D6": [],
  "M2-D7": [
    { label: "MDN: DOM scripting", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting", kind: "primary" }
  ],
  "M2-D8": [
    { label: "MDN: DOM APIs", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model", kind: "primary" }
  ],
  "M2-D9": [
    { label: "MDN: Event listeners", url: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener", kind: "primary" }
  ],
  "M2-D10": [
    { label: "MDN: Event delegation", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling", kind: "primary" }
  ],
  "M2-D11": [],
  "M2-D12": [],
  "M2-D13": [
    { label: "MDN: localStorage", url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage", kind: "primary" }
  ],
  "M2-D14": [
    { label: "MDN: JS modules", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules", kind: "primary" }
  ],
  "M2-D15": [
    { label: "javascript.info: Closures", url: "https://javascript.info/closure", kind: "primary" }
  ],
  "M2-D16": [
    { label: "MDN: localStorage", url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage", kind: "docs" }
  ],
  "M2-D17": [
    { label: "GitHub Pages docs", url: "https://docs.github.com/en/pages/getting-started-with-github-pages", kind: "primary" }
  ],
  "M2-D18": [],
  "M3-D1": [
    { label: "TS Handbook: Intro", url: "https://www.typescriptlang.org/docs/handbook/intro.html", kind: "primary" }
  ],
  "M3-D2": [
    { label: "TS Handbook: Everyday types", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html", kind: "primary" }
  ],
  "M3-D3": [
    { label: "TS Handbook: Narrowing", url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html", kind: "primary" }
  ],
  "M3-D4": [
    { label: "TS Handbook: Everyday types", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html", kind: "docs" }
  ],
  "M3-D5": [
    { label: "Next.js Learn", url: "https://nextjs.org/learn", kind: "primary" },
    { label: "create-next-app", url: "https://nextjs.org/docs/app/getting-started/installation", kind: "backup" }
  ],
  "M3-D6": [],
  "M3-D7": [
    { label: "Next.js: Server Actions", url: "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations", kind: "primary" }
  ],
  "M3-D8": [
    { label: "Neon docs", url: "https://neon.tech/docs/introduction", kind: "primary" }
  ],
  "M3-D9": [
    { label: "Prisma Quickstart", url: "https://www.prisma.io/docs/getting-started", kind: "primary" }
  ],
  "M3-D10": [
    { label: "Prisma Client API", url: "https://www.prisma.io/docs/orm/prisma-client", kind: "primary" }
  ],
  "M3-D11": [
    { label: "Zod docs", url: "https://zod.dev/", kind: "primary" }
  ],
  "M3-D12": [],
  "M3-D13": [
    { label: "Vercel deploy docs", url: "https://vercel.com/docs/deployments/overview", kind: "primary" }
  ],
  "M3-D14": [],
  "M3-D15": [],
  "M3-D16": [],
  "M3-D17": [],
  "M3-D18": []
};

/** Milestone-level fallback links for M4+ (synthetic days). */
export const MILESTONE_RESOURCES = {
  4: [
    { label: "react.dev Learn", url: "https://react.dev/learn", kind: "primary" },
    { label: "MDN: React intro", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started", kind: "backup" }
  ],
  5: [
    { label: "Next.js Learn", url: "https://nextjs.org/learn", kind: "primary" },
    { label: "Tailwind docs", url: "https://tailwindcss.com/docs", kind: "backup" }
  ],
  6: [
    { label: "OpenAI structured outputs", url: "https://platform.openai.com/docs/guides/structured-outputs", kind: "primary" },
    { label: "Vercel AI SDK", url: "https://ai-sdk.dev/docs", kind: "backup" }
  ],
  7: [
    { label: "Vercel AI SDK streaming", url: "https://ai-sdk.dev/docs/ai-sdk-core/generating-text", kind: "primary" }
  ],
  8: [
    { label: "Three.js manual", url: "https://threejs.org/manual/", kind: "primary" }
  ],
  9: [
    { label: "Next.js App Router", url: "https://nextjs.org/docs/app", kind: "primary" }
  ],
  10: [
    { label: "Vitest guide", url: "https://vitest.dev/guide/", kind: "primary" },
    { label: "Playwright intro", url: "https://playwright.dev/docs/intro", kind: "backup" }
  ],
  11: [
    { label: "Auth.js docs", url: "https://authjs.dev", kind: "primary" },
    { label: "Sentry Next.js", url: "https://docs.sentry.io/platforms/javascript/guides/nextjs/", kind: "backup" }
  ],
  12: [
    { label: "The Mom Test", url: "https://www.momtestbook.com", kind: "backup" }
  ]
};

/** Suggested code-repo folder per milestone. */
export const MILESTONE_FOLDERS = {
  1: "m01-portfolio",
  2: "m02-room-inventory",
  3: "m03-typed-form",
  4: "m04-react-crud",
  5: "m05-project-dashboard",
  6: "m06-specsense",
  7: "m07-rag-stream",
  8: "m08-mass-viewer",
  9: "m09-mvp-skeleton",
  10: "m10-mvp-core",
  11: "m11-auth-polish",
  12: "m12-launch"
};
