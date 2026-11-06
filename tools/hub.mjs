// Writes sites/hub/: the Industrial Certified Training hub, a small website that lists every site in sites/.
// Wrangler runs this before each deploy (the "build" block in wrangler.jsonc), so a new folder shows up on its own.
//
// Pages: / (search notch, course finder, directory), /about, /contact, /privacy and 404.html. The design
// (tools/hub/hub.css) and behaviour (tools/hub/hub.js) are copied next to them with a ?v=<hash> in each page.
// Each site's name and description are read from its own index.html, and its category from CATEGORIES below.
// The hub stays out of search engines (robots meta tag here, X-Robots-Tag in the Worker) and isn't tracked.
//
// It also writes sites/hub/sitemap.xml, a sitemap index of every site's own sitemap.xml (not www or the
// hub), to submit to Google Search Console under the hazwoperosha.us domain property.
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const DOMAIN = "hazwoperosha.us";
const BASE = `https://hub.${DOMAIN}`;
const PHONE_HREF = "tel:+18664296742";
const PHONE_SHOW = "(866) 429-6742";
const EMAIL = "info@hazwoper-osha.com";
const ADDRESS = "11901 Santa Monica Blvd., Suite 414, Los Angeles, CA 90025";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "tools", "hub");
const sitesDir = join(root, "sites");
const out = join(sitesDir, "hub");
const NAME = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

// Line glyphs in a 24px box, drawn like SF Symbols: thin, rounded, monochrome.
const G = {
  hazard: `<path d="M12 4 2.8 19.5h18.4z"/><path d="M12 10v4.2M12 16.9v.1"/>`,
  shield: `<path d="M12 3.2 19 6v5.2c0 4.4-2.9 8.2-7 9.6-4.1-1.4-7-5.2-7-9.6V6z"/><path d="m9 12 2.2 2.2L15.4 10"/>`,
  drop: `<path d="M12 3.5c3.6 4.2 6 7.5 6 10.6a6 6 0 0 1-12 0c0-3.1 2.4-6.4 6-10.6z"/>`,
  leaf: `<path d="M5 19C5 11 10 6 19.5 5 18.6 14 13.6 19 5 19z"/><path d="m5 19 7-7"/>`,
  truck: `<path d="M2.5 6.5h11v9.5h-11zM13.5 10h4l3 3.2V16h-7"/><circle cx="6.5" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>`,
  helmet: `<path d="M4.5 15.5a7.5 7.5 0 0 1 15 0"/><path d="M2.8 15.5h18.4v2.6H2.8zM12 8V5.2M9 8.8V6.3M15 8.8V6.3"/>`,
  server: `<rect x="4" y="4" width="16" height="6.5" rx="1.6"/><rect x="4" y="13.5" width="16" height="6.5" rx="1.6"/><path d="M7.5 7.2h.1M7.5 16.7h.1M11 7.2h5.5M11 16.7h5.5"/>`,
  building: `<path d="M4 21V8.2L10 4v17M10 21V10.5l10 3V21M2.5 21h19M6.5 10v.1M6.5 13.5v.1M6.5 17v.1M13.5 15.5v.1M16.5 16.4v.1"/>`,
  pin: `<path d="M12 21s-6.3-5.6-6.3-11.2a6.3 6.3 0 0 1 12.6 0C18.3 15.4 12 21 12 21z"/><circle cx="12" cy="9.8" r="2.2"/>`,
  sliders: `<path d="M4 7h9.5M18.5 7H20M4 17h3.5M12.5 17H20"/><circle cx="16" cy="7" r="2.3"/><circle cx="10" cy="17" r="2.3"/>`,
  flame: `<path d="M12 3c1 3.2 5.2 5.4 5.2 10.4a5.2 5.2 0 0 1-10.4 0c0-2.2 1-3.7 2.2-4.8 0 2 .9 3.1 2 3.1 0-3-1.1-5.1 1-8.7z"/>`,
  bolt: `<path d="M13 2.8 4.8 13.6H11l-1 7.6 8.2-10.8H12z"/>`,
  battery: `<rect x="2.8" y="7.5" width="16" height="9" rx="2"/><path d="M21.2 10.8v2.4M6.5 10.5v3M9.5 10.5v3"/>`,
  snow: `<path d="M12 2.8v18.4M4 7.4l16 9.2M4 16.6l16-9.2M9.5 4.2 12 6l2.5-1.8M9.5 19.8 12 18l2.5 1.8"/>`,
  mask: `<path d="M4 9.2c3.2-2.2 12.8-2.2 16 0V12c0 4-3.9 7.2-8 7.2S4 16 4 12z"/><path d="M8.3 12.8h7.4M2.5 8.5 4 9.2M21.5 8.5 20 9.2"/>`,
  clipboard: `<rect x="5.5" y="4.5" width="13" height="16.5" rx="2"/><path d="M9 3.2h6v3H9zM9 11.5h6M9 15.5h4"/>`,
  book: `<path d="M4.5 5.2a2.2 2.2 0 0 1 2.2-2.2h12.8v15.5H6.7a2.2 2.2 0 0 0-2.2 2.2z"/><path d="M4.5 20.7A2.2 2.2 0 0 1 6.7 18.5h12.8v2.7H6.7"/>`,
  person: `<circle cx="12" cy="8" r="3.6"/><path d="M4.8 20.2c.9-4 3.8-6 7.2-6s6.3 2 7.2 6"/>`,
  people: `<circle cx="9" cy="8.5" r="3.2"/><path d="M3 19.5c.7-3.4 3.2-5.2 6-5.2s5.3 1.8 6 5.2"/><path d="M15.5 5.6a3.2 3.2 0 0 1 0 6M17.5 14.6c1.8.6 3 2.2 3.5 4.9"/>`,
  cross: `<path d="M9.2 3.5h5.6v5.7h5.7v5.6h-5.7v5.7H9.2v-5.7H3.5V9.2h5.7z"/>`,
  ladder: `<path d="M7 3v18M17 3v18M7 7h10M7 12h10M7 17h10"/>`,
  gauge: `<path d="M3.8 17a8.2 8.2 0 1 1 16.4 0"/><path d="m12 17 4.2-5.2M12 17v.1"/>`,
  train: `<rect x="6" y="3" width="12" height="13.5" rx="3"/><path d="M6 10.2h12M9.2 13.4h.1M14.8 13.4h.1M8.5 21l2-4.5M15.5 21l-2-4.5"/>`,
  anchor: `<circle cx="12" cy="5" r="2"/><path d="M12 7v14M4.8 13a7.2 7.2 0 0 0 14.4 0M9 10.2h6"/>`,
  globe: `<circle cx="12" cy="12" r="8.8"/><path d="M3.2 12h17.6M12 3.2c2.9 3.4 2.9 14.2 0 17.6M12 3.2c-2.9 3.4-2.9 14.2 0 17.6"/>`,
  tag: `<path d="M3.2 12.2V3.2h9l9 9-9 9z"/><circle cx="7.8" cy="7.8" r="1.3"/>`,
  search: `<circle cx="10.8" cy="10.8" r="6.3"/><path d="m20 20-4.7-4.7"/>`,
  calendar: `<rect x="3.8" y="5" width="16.4" height="15.5" rx="2.2"/><path d="M3.8 10h16.4M8.5 3v4M15.5 3v4"/>`,
  columns: `<rect x="3.2" y="4" width="7.3" height="16" rx="1.6"/><rect x="13.5" y="4" width="7.3" height="16" rx="1.6"/>`,
  factory: `<path d="M3 21V11.2l5 3v-3l5 3v-3l5 3V4h3v17z"/>`,
  thermo: `<path d="M14 14.5V5.2a2 2 0 0 0-4 0v9.3a4 4 0 1 0 4 0z"/><path d="M12 15v2"/>`,
  link: `<path d="M10 14a4 4 0 0 0 5.6 0l3-3A4 4 0 0 0 13 5.4l-1 1M14 10a4 4 0 0 0-5.6 0l-3 3A4 4 0 0 0 11 18.6l1-1"/>`,
  phone: `<path d="M6.5 3.5h3l1.5 4.2-2 1.3a11 11 0 0 0 6 6l1.3-2 4.2 1.5v3a2 2 0 0 1-2.2 2C10.6 19 5 13.4 4.5 5.7a2 2 0 0 1 2-2.2z"/>`,
  mail: `<rect x="3" y="5.5" width="18" height="13" rx="2.2"/><path d="m3.8 7 8.2 6 8.2-6"/>`,
  lock: `<rect x="5" y="10.5" width="14" height="10" rx="2.2"/><path d="M8.2 10.5V7.8a3.8 3.8 0 0 1 7.6 0v2.7"/>`,
  grid: `<rect x="4" y="4" width="6.5" height="6.5" rx="1.6"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.6"/>`,
};
// Pages carry each glyph once, in a sprite, and point to it with <use>.
const svg = (g, cls = "i") => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true"><use href="#g-${g}"/></svg>`;
const SPRITE = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">${Object.entries(G).map(([k, d]) => `<symbol id="g-${k}" viewBox="0 0 24 24">${d}</symbol>`).join("")}</svg>`;

// Categories, in sidebar order. A site goes in the first category whose list names it; anything new and
// unlisted falls back to "hazwoper", so add it to the right list when you add a site.
const CATEGORIES = [
  { id: "network", label: "ICT Websites", color: "#3a5bd9", glyph: "globe", blurb: "The main store and the SCORM packages, which cover every topic." },
  { id: "hazwoper", label: "HAZWOPER", color: "#ff9f0a", glyph: "hazard", blurb: "40-hour, 24-hour, refreshers, supervisors and emergency response under 29 CFR 1910.120." },
  { id: "safety", label: "Workplace Safety", color: "#ff453a", glyph: "helmet",
    sites: "osha-10-general-industry osha-30-construction construction-safety competent-person confined-space drug-alcohol electrical-safety-loto em-385 excavation-trenching fall-protection fire-hot-work flagger-traffic-control forklift-equipment h2s-gas-detection hazcom-ghs heat-cold-wildfire incident-command mold-remediation msha-part-46 ppe-respiratory radiation-safety safety-management scaffolding silica-lead-asbestos warehouse-ergonomics workplace-violence healthcare-safety",
    blurb: "OSHA 10 and 30, fall protection, confined space, LOTO, HazCom and the rest of the safety catalog." },
  { id: "waste", label: "Waste & Environment", color: "#30d158", glyph: "leaf",
    sites: "rcra rcra-hazardous-waste lab-waste waste-shipping environmental-services spill-response spill-prevention stormwater-swppp pfas remediation brownfields hw-technician",
    blurb: "EPA RCRA generators, spills, stormwater, PFAS and remediation crews." },
  { id: "transport", label: "DOT & Transport", color: "#0a84ff", glyph: "truck",
    sites: "dot-hazmat dot-hazmat-carrier dot-hazmat-function-specific trucking rail cdl-eldt lithium-battery-shipping",
    blurb: "DOT hazmat employees, carriers, rail, CDL and battery shipping." },
  { id: "industries", label: "Industries", color: "#64d2ff", glyph: "building",
    sites: "agriculture ammonia ammonia-refrigeration auto-shops construction demolition disaster-recovery federal-sites fire-departments healthcare industrial-cleaning landfill manufacturing marine metal-finishing meth-lab-cleanup oil-gas pipeline small-business universities utility warehouse water-utilities wildfire-cleanup",
    blurb: "The right courses for a specific trade, from ammonia plants to fire departments." },
  { id: "regions", label: "States & Regions", color: "#bf5af2", glyph: "pin",
    sites: "cal-osha cal-osha-hazwoper cal-tsdf texas gulf-coast new-jersey washington michigan state-plans",
    blurb: "California, Texas, Washington, Michigan, New Jersey and other state-plan rules." },
  { id: "datacenter", label: "Data Centers", color: "#5e5ce6", glyph: "server",
    sites: "data-centers dcim pue ups-batteries arc-flash clean-agent lithium-ion raised-floor capacity-planning",
    prefix: "dc-", blurb: "Design, power, cooling, security, commissioning and operations for mission-critical facilities." },
  { id: "tools", label: "Tools & Study", color: "#8e8e93", glyph: "sliders",
    sites: "course-finder refresher-reminder compare glossary ppe-picker practice-quiz exposure-limits decon-drill safety-plan-checklist cert-tracker spill-kit-sizer hazwoper-history hazwoper-faq site-zones flashcards generator-status saa-labels manifest universal-waste placards boom-calculator heat-stress respirator-muc lel-converter toolbox-talks emergency-coordinator",
    blurb: "Free calculators, finders, quizzes and checklists. No account needed." },
];
for (const c of CATEGORIES) c.set = new Set((c.sites || "").split(/\s+/).filter(Boolean));
const catOf = (n) => CATEGORIES.find((c) => c.set.has(n) || (c.prefix && n.startsWith(c.prefix))) || CATEGORIES.find((c) => c.id === "hazwoper");

// A site's own glyph, picked from words in its folder name; the category's glyph otherwise.
const GLYPHS = [
  [/finder/, "search"], [/reminder|tracker/, "calendar"], [/compare/, "columns"], [/glossary|history|flashcards|faq|toolbox/, "book"],
  [/quiz|checklist|manifest|coordinator|plan/, "clipboard"], [/label|placard/, "tag"], [/calculator|converter|limits|status|muc|sizer|pue|capacity/, "gauge"],
  [/ppe|respirat|mask|mold|silica|asbestos/, "mask"], [/fire|hot-work|wildfire|flame|clean-agent/, "flame"], [/power|electrical|arc-flash|utility|generator/, "bolt"],
  [/batter|ups|lithium/, "battery"], [/cool|hvac|ammonia|refrigeration/, "snow"], [/heat|thermal/, "thermo"], [/rail/, "train"], [/marine/, "anchor"],
  [/truck|dot-|cdl|shipping|carrier/, "truck"], [/espanol|bilingual/, "globe"], [/health|meth/, "cross"], [/fall|scaffold|ladder|raised-floor/, "ladder"],
  [/security|access|violence/, "lock"], [/fiber|dcim|bms/, "link"], [/careers|veterans|trainer|supervisor|ehs|competent|manag/, "person"],
  [/crews|staffing|workplace|small-business/, "people"], [/manufactur|metal|industrial|factory/, "factory"], [/spill|water|drop|stormwater|lab-waste|oil|pfas|h2s|pipeline/, "drop"],
  [/agri|landfill|brownfield|remediation|environment|universal/, "leaf"], [/hospital|universit|federal|warehouse|auto|disaster/, "building"],
  [/zones|map|texas|washington|michigan|jersey|gulf|cal-|state/, "pin"], [/awareness|responder|incident|emergency/, "shield"],
];
const glyphOf = (n, cat) => (GLYPHS.find(([re]) => re.test(n)) || [, cat.glyph])[1];

const decode = (s) => s.replace(/&(amp|lt|gt|quot|#39|#x27|apos|nbsp|ndash|mdash|hellip);/g, (_, e) =>
  ({ amp: "&", lt: "<", gt: ">", quot: '"', "#39": "'", "#x27": "'", apos: "'", nbsp: " ", ndash: "–", mdash: "—", hellip: "…" })[e]);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

const names = readdirSync(sitesDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && NAME.test(d.name) && d.name !== "hub" && existsSync(join(sitesDir, d.name, "index.html")))
  .map((d) => d.name)
  .sort();

const sites = names.map((name) => {
  const html = readFileSync(join(sitesDir, name, "index.html"), "utf8");
  const title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || name).trim();
  const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "").trim();
  const cat = catOf(name);
  return { name, host: `${name}.${DOMAIN}`, title: title.split(" | ")[0].trim() || name, desc, cat, glyph: glyphOf(name, cat) };
});

// The company's own websites on other domains. They aren't folders in sites/, so their names and descriptions are written
// here, from each site's own <title> and meta description (read November 2026). Each goes in the category for its topic;
// the two that cover every topic stay in "ICT Websites". The hub lists them first in their category.
const EXTERNAL = [
  ["hazwoper-osha.com", "network", "HAZWOPER OSHA Training: Safety & Compliance Courses", "Onsite and online courses in OSHA, HAZWOPER, ELDT, DOT, IATA, IMDG, RCRA, EPA, NFPA 70E and NY SST. The main store, with checkout and student login.", "shield"],
  ["oshascorm.org", "network", "Safety Training SCORM Packages", "OSHA-compliant safety training as ready-to-deploy SCORM packages for your company's own LMS, with tracking and reporting.", "grid"],
  ["hazwoperosha.com", "hazwoper", "HAZWOPER Training Online: OSHA 40, 24 & 8 Hour Certification", "40 hour from $249.99, 24 hour, 8 hour refresher, supervisor, first responder, Cal/OSHA, Spanish and RCRA. 42 courses, instant certificates, 29 CFR 1910.120.", "hazard"],
  ["hazwoperosha.org", "hazwoper", "HAZWOPER Learning Center: Free Lessons & Practice Quizzes", "Free HAZWOPER lessons and practice quizzes on SDS, the Emergency Response Guidebook, toxicology, respirators, heat stress and confined spaces, plus certified courses.", "book"],
  ["hazwoperosha.us", "hazwoper", "HAZWOPER Compliance Training for Employers", "Order OSHA HAZWOPER training for your whole crew in one checkout: 40 hour, 24 hour, refreshers, supervisor, incident command, Cal/OSHA and Spanish.", "people"],
  ["confined-space.com", "safety", "OSHA Confined Space Training Online", "Four online OSHA confined space courses: Awareness, Entry, Supervisor and Competent Person. Self-paced, English & Spanish, instant certificate.", "helmet"],
  ["excavationtrenchingshoring.com", "safety", "OSHA Excavation, Trenching & Shoring Training", "Excavation Safety and Competent Person courses under 29 CFR 1926 Subpart P. Self-paced, English & Spanish, instant certificate.", "helmet"],
  ["moldtraining.us", "safety", "Mold Awareness & Remediation Training", "Mold training for every role: Mold Awareness, Property Management and IAC2 Inspector Certification. Self-paced, English & Spanish.", "mask"],
  ["stormwaterplanning.us", "waste", "Qualified SWPPP Practitioner & Preparer Training", "Online QSP Practitioner and SWPPP Preparer training for construction sites. CWA and NPDES aligned, self-paced, English & Spanish.", "drop"],
  ["eldttraining.us", "transport", "ELDT Training: Entry-Level Driver Training", "FMCSA-compliant online ELDT theory courses for the Class A and Class B CDL, the B-to-A upgrade and the HAZMAT (H) endorsement.", "truck"],
  ["datacentertraining.us", "datacenter", "Data Center Training Online: Courses & Bundles", "43 self-paced data center courses, 184 hours in all, for power, cooling, operations, security and design teams. Certificate included.", "server"],
];
sites.unshift(...EXTERNAL.map(([host, cat, title, desc, glyph]) => ({ name: host.replace(/\./g, "-"), host, title, desc, cat: CATEGORIES.find((c) => c.id === cat), glyph, external: true })));
const N = sites.length;
const counts = Object.fromEntries(CATEGORIES.map((c) => [c.id, sites.filter((s) => s.cat === c).length]));
const cats = CATEGORIES.filter((c) => counts[c.id]);

// Assets, versioned by content hash so the Worker can cache them for a year.
mkdirSync(join(out, "assets"), { recursive: true });
const v = (f) => createHash("sha256").update(readFileSync(join(src, f))).digest("hex").slice(0, 10);
for (const f of ["hub.css", "hub.js"]) copyFileSync(join(src, f), join(out, f));
copyFileSync(join(src, "ict-logo.webp"), join(out, "assets", "ict-logo.webp"));
copyFileSync(join(src, "apple-touch-icon.png"), join(out, "apple-touch-icon.png"));
copyFileSync(join(src, "favicon.png"), join(out, "favicon.png"));
const CSS = `/hub.css?v=${v("hub.css")}`;
const JS = `/hub.js?v=${v("hub.js")}`;
const LOGO = `/assets/ict-logo.webp?v=${v("ict-logo.webp")}`;

// Shortcut hints that follow the device. INPUT (inline in <head>, so the right one shows on first paint) sets
// <html data-input>: "touch" on phones and tablets without a mouse, "mac" on Apple devices, "pc" elsewhere. hub.css
// shows .on-keys or .on-touch, and .mac or .pc, to match; hub.js updates it if a mouse or keyboard turns up later.
const INPUT = `<script>!function(d,n){var p=((n.userAgentData&&n.userAgentData.platform)||n.platform||"")+" "+n.userAgent;d.dataset.input=matchMedia("(hover: none) and (pointer: coarse)").matches?"touch":/mac|iphone|ipad|ipod/i.test(p)?"mac":"pc"}(document.documentElement,navigator)</script>`;
const KEY = `<span class="mac">⌘K</span><span class="pc">Ctrl+K</span>`;

const tile = (color, glyph, cls = "tile") => `<span class="${cls}" style="background:${color}">${svg(glyph)}</span>`;
const chev = `<svg class="chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M4.5 2.5 8 6l-3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function shell({ path, title, description, body, home = false }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="theme-color" content="#000000">
<meta name="color-scheme" content="dark">
${INPUT}
<link rel="canonical" href="${BASE}${path}">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" media="print" onload="this.media='all'">
<link rel="stylesheet" href="${CSS}">
<script src="${JS}" defer></script>
</head>
<body${home ? ' class="home"' : ""}>
<a class="skip" href="#main">Skip to content</a>
${SPRITE}
<div class="wall" aria-hidden="true"><i></i><i></i><i></i></div>
${menubar()}
${island()}
<main id="main">
${body}
</main>
${footer()}
</body>
</html>
`;
}

function menubar() {
  return `<header class="menubar">
<nav class="left" aria-label="Main">
<a class="brand" href="/"><img src="${LOGO}" alt="" width="18" height="17"><span class="full">Industrial Certified Training Directory</span><span class="short">ICT Directory</span></a>
<a class="m" href="/#finder">Course Finder</a>
<a class="m" href="/about">About</a>
<a class="m" href="/contact">Contact</a>
</nav>
<div class="right">
<button type="button" class="status" id="statusBtn" aria-haspopup="menu" aria-expanded="false" aria-controls="statusMenu" aria-label="ICT status menu">${svg("shield")}</button>
<span class="clock" id="clock" aria-hidden="true"></span>
</div>
</header>
<div class="menu" id="statusMenu" role="menu" hidden>
<div class="state"><span class="dot" aria-hidden="true"></span><span><b>Industrial Certified Training Directory</b><small>${N} course sites · 100% online</small></span></div>
<hr>
<button type="button" role="menuitem" data-act="search">Search Sites… <kbd class="on-keys">${KEY}</kbd></button>
<a role="menuitem" href="/#finder">Find My Course</a>
<a role="menuitem" href="/#directory">Browse Directory</a>
<hr>
<a role="menuitem" href="${PHONE_HREF}">Call ${PHONE_SHOW}</a>
<a role="menuitem" href="mailto:${EMAIL}">Email Support</a>
<hr>
<a role="menuitem" href="/about">About Industrial Certified Training</a>
<a role="menuitem" href="https://ictraining.us/" rel="noopener">Go to ictraining.us</a>
</div>`;
}

function scanRing(id = "") {
  return `<span class="scan"${id ? ` id="${id}"` : ""} aria-hidden="true"><svg viewBox="0 0 36 36">
<circle class="track" cx="18" cy="18" r="15.9"/><circle class="arc" cx="18" cy="18" r="15.9" pathLength="100"/>
<g class="face"><circle cx="16.8" cy="16.8" r="4.4"/><path d="m20 20 3.6 3.6"/></g>
<path class="tick" pathLength="20" d="m11.5 18.5 4.4 4.3 8.6-9"/>
<path class="cross" d="m13.5 13.5 9 9m0-9-9 9"/>
</svg></span>`;
}

function island() {
  return `<div class="island" id="island" role="dialog" aria-label="Search ${N} training sites" aria-modal="false">
<button type="button" class="idle" id="islandIdle" aria-label="Search ${N} training sites" aria-keyshortcuts="Meta+K Control+K /">${svg("search")}<span>Search<span class="n"> ${N} sites</span></span></button>
<div class="body">
<div class="row">${scanRing("islandScan")}
<div class="msg" id="islandMsg" hidden><b></b><small></small></div>
<label class="sr" for="islandInput">Search training sites</label>
<input id="islandInput" type="search" placeholder="Search courses, states, tools…" autocomplete="off" spellcheck="false" enterkeyhint="go">
<button type="button" class="esc" id="islandClose" aria-label="Close search"><span class="on-keys">esc</span><span class="on-touch">Cancel</span></button></div>
<ul class="results" id="islandResults" hidden></ul>
</div>
</div>`;
}

function footer() {
  return `<footer><div class="wrap">
<div class="org"><img src="${LOGO}" alt="Industrial Certified Training logo" width="40" height="37" loading="lazy">
<div><b>Industrial Certified Training, LLC</b>Parent company of HAZWOPER OSHA Training, LLC. Online safety and compliance training since 2008.</div></div>
<nav aria-label="Footer"><a href="/#directory">Directory</a><a href="/#finder">Course Finder</a><a href="/about">About</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a><a href="https://ictraining.us/" rel="noopener">ictraining.us</a><a href="https://hazwoper-osha.com/" rel="noopener">hazwoper-osha.com</a></nav>
<p class="fine">${esc(ADDRESS)} · <a href="${PHONE_HREF}">${PHONE_SHOW}</a> · <a href="mailto:${EMAIL}">${EMAIL}</a><br>© ${new Date().getFullYear()} Industrial Certified Training, LLC.</p>
</div></footer>`;
}

function siteRow(s) {
  const q = [s.name.replace(/-/g, " "), s.cat.label].join(" ").toLowerCase();
  return `<li data-cat="${s.cat.id}" data-name="${s.name}" data-q="${esc(q + " " + s.host)}"><a class="site" href="https://${s.host}/"${s.external ? ' rel="noopener"' : ""}>${tile(s.cat.color, s.glyph)}<span class="t"><b>${esc(s.title)}</b><small>${esc(s.desc)}</small><small class="host">${s.host}</small></span>${chev}</a></li>`;
}

// The course finder's choices: the categories each one points to and the sites it ranks first.
const CHOICES = [
  { label: "Cleanup on hazardous waste sites", note: "Remediation, Superfund, brownfields, TSDFs", cats: ["hazwoper", "waste"], boost: "forty-hour hazwoper 24-hour refresher remediation", glyph: "hazard", color: "#ff9f0a" },
  { label: "Emergency response", note: "Spills, releases, fire and hazmat teams", cats: ["hazwoper", "industries"], boost: "first-responder awareness incident-command spill-response", glyph: "shield", color: "#ff453a" },
  { label: "Handling or shipping hazardous waste", note: "RCRA generators, DOT hazmat, manifests", cats: ["waste", "transport"], boost: "rcra dot-hazmat waste-shipping manifest", glyph: "truck", color: "#0a84ff" },
  { label: "Construction or general industry", note: "OSHA 10/30, falls, trenching, LOTO", cats: ["safety"], boost: "osha-30-construction osha-10-general-industry fall-protection construction-safety", glyph: "helmet", color: "#ffd60a" },
  { label: "Data center operations", note: "Power, cooling, security, commissioning", cats: ["datacenter"], boost: "data-centers dc-operations dc-power arc-flash", glyph: "server", color: "#5e5ce6" },
  { label: "Running a safety program", note: "Supervisors, EHS managers, trainers", cats: ["safety", "hazwoper"], boost: "ehs-managers supervisor safety-management train-the-trainer", glyph: "person", color: "#30d158" },
];

const homeBody = `<section class="hero wrap">
<div class="badge"><img src="${LOGO}" alt="Industrial Certified Training" width="70" height="65"></div>
<p class="eyebrow">Industrial Certified Training</p>
<h1>Certified training.<br><span>At a glance.</span></h1>
<p class="lede">${N} focused course sites for OSHA HAZWOPER, DOT hazmat, EPA RCRA, workplace safety and data centers. Self-paced, 100% online, certificate on completion.</p>
<div class="actions"><a class="btn primary" href="#finder">Find my course</a><a class="btn plain" href="#directory">Browse all ${N} sites</a></div>
<p class="kbd-hint"><span class="on-keys">Or press <kbd>${KEY}</kbd> to search from the notch.</span><span class="on-touch">Or tap the notch at the top to search.</span></p>
<ul class="stats">
<li><b>${N}</b>course sites</li><li><b>${cats.length}</b>categories</li><li><b>2008</b>training since</li><li><b>24/7</b>self-paced access</li>
</ul>
</section>

<section class="sec" id="finder" aria-labelledby="finderTitle">
<div class="wrap">
<div class="sec-head"><h2 id="finderTitle">Course Finder</h2><p>Three quick questions. Your answers stay in this browser.</p></div>
<div class="onboard glass" id="onboard">
<div class="top"><div class="lights" aria-hidden="true"><i></i><i></i><i></i></div><div class="dots" aria-hidden="true"><i class="on"></i><i></i><i></i><i></i><i></i></div><span style="width:52px"></span></div>
<div class="steps" aria-live="polite">

<div class="step" data-step="0">
<div class="appicon"><img src="${LOGO}" alt="" width="64" height="59"></div>
<h3>Find your training<br>with a glance.</h3>
<p class="sub">Tell us what you do. We'll match you with the right course out of ${N} sites, in about ten seconds.</p>
<div class="go"><button type="button" class="btn primary wide" data-next>Get Started</button></div>
</div>

<div class="step" data-step="1" hidden>
<h3>What describes your work?</h3>
<p class="sub">Choose everything that applies.</p>
<div class="group" role="group" aria-label="Your work">
${CHOICES.map((c, i) => `<button type="button" class="choice" aria-pressed="false" data-choice="${i}">${tile(c.color, c.glyph)}<span class="t"><b>${esc(c.label)}</b><small>${esc(c.note)}</small></span><span class="grant">Choose</span></button>`).join("\n")}
</div>
<div class="go"><button type="button" class="btn plain" data-back>Back</button><button type="button" class="btn primary" data-next id="workNext" disabled>Continue</button></div>
</div>

<div class="step" data-step="2" hidden>
<h3>Anything specific?</h3>
<p class="sub">A course length, a state, a standard or a piece of equipment. Optional.</p>
<form class="field" id="kwForm" autocomplete="off">${svg("lock")}<label class="sr" for="kw">Keywords</label><input id="kw" type="text" placeholder="e.g. 40-hour, Texas, forklift" maxlength="80"></form>
<p class="note">${svg("lock")}Stays in this browser. Never sent or stored.</p>
<div class="go"><button type="button" class="btn plain" data-back>Back</button><button type="button" class="btn primary" data-next>Find Matches</button></div>
</div>

<div class="step" data-step="3" hidden>
<div class="enroll" id="enroll"><svg class="ring" viewBox="0 0 220 220" aria-hidden="true">${Array.from({ length: 40 }, (_, i) => {
  const a = (i / 40) * Math.PI * 2 - Math.PI / 2, r1 = 100, r2 = 108;
  const p = (r) => [110 + r * Math.cos(a), 110 + r * Math.sin(a)].map((n) => n.toFixed(1));
  const [x1, y1] = p(r1), [x2, y2] = p(r2);
  return `<line class="seg" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
}).join("")}</svg><div class="lens"><img src="${LOGO}" alt="" width="92" height="85"></div></div>
<h3 style="margin-top:22px">Matching your answers</h3>
<p class="sub" id="enrollText">Checking ${N} course sites to complete the circle.</p>
</div>

<div class="step" data-step="4" hidden>
<svg class="bigcheck" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="46"/><path d="m30 51 13 13 27-28"/></svg>
<h3 id="doneTitle">Your matches are ready.</h3>
<p class="sub" id="doneSub">Start with the first one. Every site has its courses, prices and enrollment.</p>
<ul class="picks group" id="picks"></ul>
<div class="go"><button type="button" class="btn plain" data-restart>Start Over</button><a class="btn primary" id="finish" href="#directory">Finish</a></div>
</div>

</div>
</div>
</div>
</section>

<section class="sec" id="directory" aria-labelledby="dirTitle">
<div class="wrap">
<div class="sec-head"><h2 id="dirTitle">Every site, in one place.</h2><p>Pick a category, or search across all ${N} course and tool sites.</p></div>
<div class="settings glass">
<aside class="side">
<div class="lights" aria-hidden="true"><i></i><i></i><i></i></div>
<label class="search">${svg("search")}<span class="sr">Filter sites</span><input id="dirSearch" type="search" placeholder="Search" autocomplete="off"></label>
<ul class="cats" id="cats">
<li><button type="button" aria-pressed="true" data-cat="all">${tile("#0a84ff", "grid")}All Sites<span class="n">${N}</span></button></li>
${cats.map((c) => `<li><button type="button" aria-pressed="false" data-cat="${c.id}">${tile(c.color, c.glyph)}${esc(c.label)}<span class="n">${counts[c.id]}</span></button></li>`).join("\n")}
</ul>
</aside>
<div class="pane">
<div class="toolbar"><h3 id="paneTitle">All Sites</h3>
<label>Sort <select class="popup" id="sort"><option value="cat">By Category</option><option value="az">Name A–Z</option></select></label>
<label>Details <input type="checkbox" class="switch" id="details" checked></label></div>
<div class="list" id="list">
${cats.map((c) => `<section data-cat="${c.id}"><h4>${esc(c.label)}</h4><ul>
${sites.filter((s) => s.cat === c).map(siteRow).join("\n")}
</ul></section>`).join("\n")}
<div class="empty" id="empty" hidden><b>No results</b>Try another word, or ask us: <a href="${PHONE_HREF}">${PHONE_SHOW}</a>.</div>
</div>
</div>
</div>
</div>
</section>

<section class="sec" aria-labelledby="whyTitle">
<div class="wrap">
<div class="sec-head"><h2 id="whyTitle">Quietly built for compliance.</h2></div>
<div class="features">
<div class="feature glass">${tile("#30d158", "shield")}<h3>Regulation-first</h3><p>Every course maps to its standard: 29 CFR 1910.120, 49 CFR 172.704, 40 CFR 262 and more.</p></div>
<div class="feature glass">${tile("#0a84ff", "calendar")}<h3>On your schedule</h3><p>Self-paced and online. Pause any time, pick up on any device, print your certificate when you finish.</p></div>
<div class="feature glass">${tile("#bf5af2", "people")}<h3>Crews welcome</h3><p>Buy one seat or a hundred. Call <a href="${PHONE_HREF}">${PHONE_SHOW}</a> for team pricing.</p></div>
</div>
</div>
</section>
<script type="application/json" id="choices">${JSON.stringify(CHOICES.map(({ cats: c, boost }) => ({ cats: c, boost: boost.split(" ") })))}</script>`;

const page = (h1, lede, inner) => `<div class="page"><article class="card glass"><p class="eyebrow">Industrial Certified Training</p><h1>${h1}</h1><p class="lede">${lede}</p>${inner}</article></div>`;

const pages = {
  "index.html": shell({ path: "/", home: true, title: "Industrial Certified Training Directory",
    description: `Find the right OSHA, DOT, EPA or data center course across ${N} Industrial Certified Training sites. Self-paced, 100% online, certificate on completion.`, body: homeBody }),
  "about.html": shell({ path: "/about", title: "About Industrial Certified Training",
    description: "Industrial Certified Training, LLC, parent company of HAZWOPER OSHA Training, LLC: online safety and compliance training since 2008.",
    body: page("About ICT", "Industrial Certified Training, LLC has trained workers in safety and compliance since 2008.", `
<h2>Who we are</h2>
<p>Industrial Certified Training (ICT) is the parent company of HAZWOPER OSHA Training, LLC, which delivers every course on these sites online at <a href="https://hazwoper-osha.com/">hazwoper-osha.com</a>.</p>
<h2>What we teach</h2>
<p>OSHA HAZWOPER (40-hour, 24-hour, 8-hour refresher, supervisor and emergency response), DOT hazmat, EPA RCRA hazardous waste, OSHA 10 and 30, workplace safety topics, and data center operations.</p>
<h2>How it works</h2>
<ul><li>Self-paced and 100% online, on any device.</li><li>A certificate of completion when you pass.</li><li>Single seats for individuals, and team pricing for crews.</li></ul>
<h2>Why so many sites?</h2>
<p>Each of the ${N} sites in the <a href="/#directory">directory</a> focuses on one audience, one rule or one tool, so you get straight to the training that fits your job instead of a catalog of everything.</p>`) }),
  "contact.html": shell({ path: "/contact", title: "Contact Industrial Certified Training",
    description: "Call, email or write to Industrial Certified Training and HAZWOPER OSHA Training for course questions, team seats and certificates.",
    body: page("Contact", "Questions about a course, team seats or a certificate? We answer every message.", `
<div class="group">
<a href="${PHONE_HREF}">${tile("#30d158", "phone")}<span><b>Call ${PHONE_SHOW}</b><small>Toll free</small></span></a>
<a href="mailto:${EMAIL}">${tile("#0a84ff", "mail")}<span><b>${EMAIL}</b><small>Email support</small></span></a>
<div class="r">${tile("#bf5af2", "pin")}<span><b>Mailing address</b><small>HAZWOPER OSHA Training, LLC, ${esc(ADDRESS)}</small></span></div>
<a href="https://ictraining.us/" rel="noopener">${tile("#1d3f8f", "globe")}<span><b>ictraining.us</b><small>Industrial Certified Training</small></span></a>
</div>
<h2>Buying for a crew?</h2>
<p>Call us for team pricing and a single invoice. Every course site also sells seats in any quantity at checkout.</p>`) }),
  "privacy.html": shell({ path: "/privacy", title: "Privacy at the ICT Training Directory",
    description: "What the Industrial Certified Training hub does with your data: no analytics, no cookies, and Course Finder answers that stay in your browser.",
    body: page("Privacy", "This hub is built to know as little about you as possible.", `
<h2>On this hub</h2>
<ul><li>No analytics or tracking tags run on hub.${DOMAIN}.</li><li>No cookies. Course Finder answers and searches stay in your browser and are never sent anywhere.</li><li>The page may remember, in this browser only, that it already played the opening animation.</li><li>Fonts load from Google Fonts, which receives your IP address like any web request.</li></ul>
<h2>On the course sites</h2>
<p>Each course site has its own privacy page. They use Google Analytics and Microsoft Clarity to measure visits, and send checkout to hazwoper-osha.com, where payment is handled by Stripe.</p>
<h2>Questions</h2>
<p>Email <a href="mailto:${EMAIL}">${EMAIL}</a> or call <a href="${PHONE_HREF}">${PHONE_SHOW}</a>.</p>`) }),
  "404.html": shell({ path: "/404", title: "Page Not Found · ICT Training Directory",
    description: "That page isn't here. Search every Industrial Certified Training site from the notch, or browse the directory.",
    body: page("Not found.", "That page isn't here. Search from the notch, or go back to the directory.", `<div class="go" style="display:flex;gap:10px;margin-top:26px"><a class="btn primary" href="/#directory">Browse Directory</a><button type="button" class="btn plain" data-act="search">Search Sites</button></div>`) }),
};
for (const [f, html] of Object.entries(pages)) writeFileSync(join(out, f), html);

const mapped = names.filter((n) => n !== "www" && existsSync(join(sitesDir, n, "sitemap.xml")));
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${mapped.map((n) => `  <sitemap><loc>https://${n}.${DOMAIN}/sitemap.xml</loc>${lastmod(n)}</sitemap>`).join("\n")}
</sitemapindex>
`;
writeFileSync(join(out, "sitemap.xml"), sitemap);
console.log(`hub: ${N} sites in ${cats.length} categories, ${mapped.length} in sitemap index`);

// The newest <lastmod> in a site's sitemap, so Search Console knows which sitemaps changed.
function lastmod(name) {
  const dates = [...readFileSync(join(sitesDir, name, "sitemap.xml"), "utf8").matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]).sort();
  return dates.length ? `<lastmod>${dates.at(-1)}</lastmod>` : "";
}
