// Copies the two internal course search tools into the hub (which is nothing else), so they run at
// https://hub.hazwoperosha.us/course-search/ behind a bar that switches between them:
//
//   /course-search/catalog/        HAZWOPER course catalog   (repo LJ-Web-Management/hazwoperosha-course-search)
//   /course-search/landing-pages/  Landing page courses      (repo LJ-Web-Management/landingpages-course-search)
//   /course-search/                redirects to the catalog (and the Worker sends every other hub path here)
//
// Both tools are static (index.html + assets/), so this copies their main branch as is and adds the
// switcher bar (course-search/switcher.css) to each index.html. The copies are committed like the rest of
// sites/; run this again after either tool changes, then commit:
//
//   node tools/course-search.mjs                    clone both repos (shallow) into a temp folder
//   node tools/course-search.mjs <catalog> <pages>  use existing local clones instead
//
// The hub is kept out of search engines by the Worker, and the Worker's CSP refuses inline event
// handlers, so neither tool may use onclick="" (test/pages.test.js checks).
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "sites/hub/course-search");
const ORG = "https://github.com/LJ-Web-Management/";

export const TOOLS = [
  { dir: "catalog", repo: "hazwoperosha-course-search", label: "HAZWOPER Course Catalog", hint: "Every course and bundle in the catalog" },
  { dir: "landing-pages", repo: "landingpages-course-search", label: "Landing Page Courses", hint: "Which sites sell which courses" },
];

export function switcher(active) {
  const links = TOOLS.map((t) =>
    `<a href="/course-search/${t.dir}/"${t.dir === active ? ' class="on" aria-current="page"' : ""}><b>${t.label}</b><small>${t.hint}</small></a>`).join("");
  return `<nav class="cs-switch" aria-label="Course search tools">
<div class="cs-tabs">${links}</div>
</nav>`;
}

export function addSwitcher(html, active) {
  const css = `<link rel="stylesheet" href="/course-search/switcher.css" />`;
  html = html.replace(/<nav class="cs-switch"[\s\S]*?<\/nav>\n?/, "").replace(/\s*<link rel="stylesheet" href="\/course-search\/switcher.css" \/>/, "");
  html = html.replace(/<\/head>/i, `  ${css}\n</head>`);
  return html.replace(/<body([^>]*)>/i, `<body$1>\n${switcher(active)}`);
}

function main() {
  const given = process.argv.slice(2);
  const tmp = given.length ? null : mkdtempSync(join(tmpdir(), "course-search-"));
  try {
    TOOLS.forEach((t, i) => {
      let src = given[i];
      if (!src) {
        src = join(tmp, t.repo);
        execFileSync("git", ["clone", "-q", "--depth", "1", "--branch", "main", ORG + t.repo + ".git", src], { stdio: "inherit" });
      }
      if (!existsSync(join(src, "index.html"))) throw new Error(`${src} has no index.html`);
      const dest = join(out, t.dir);
      rmSync(dest, { recursive: true, force: true });
      mkdirSync(dest, { recursive: true });
      cpSync(join(src, "assets"), join(dest, "assets"), { recursive: true, filter: (p) => !p.endsWith(".DS_Store") });
      writeFileSync(join(dest, "index.html"), addSwitcher(readFileSync(join(src, "index.html"), "utf8"), t.dir));
      console.log(`course-search: ${t.repo} -> sites/hub/course-search/${t.dir}/`);
    });
  } finally {
    if (tmp) rmSync(tmp, { recursive: true, force: true });
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
