// Checks every page in sites/ for the problems Ahrefs Site Audit, Google Search Console, PageSpeed and
// is-agentic.com report, so they're caught before a deploy. `npm run audit` prints each problem and exits
// non-zero when there are any. The internal hub is skipped: it's noindex on purpose.
//
// Per page: title and meta description length, exactly one <h1>, heading levels that don't skip,
// <html lang>, a self-referencing canonical on this site's own host, Open Graph and Twitter tags,
// valid JSON-LD, alt text on images, internal links that resolve to a real file, and a Markdown twin
// (the .md file the Worker serves for Accept: text/markdown).
// Per site: robots.txt with a Sitemap line, a sitemap.xml whose URLs are all on this host, exist and
// have <lastmod>, llms.txt, and about/contact/privacy pages.
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const DOMAIN = "hazwoperosha.us";
const sitesDir = join(dirname(fileURLToPath(import.meta.url)), "..", "sites");
const NAME = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const SKIP = new Set(["hub"]);
const only = process.argv.slice(2).find((a) => !a.startsWith("--"));

const problems = [];
const report = (site, page, msg) => problems.push(`${site}${page ? " " + page : ""}: ${msg}`);

const sites = readdirSync(sitesDir).filter((n) => NAME.test(n) && !SKIP.has(n) && (!only || n === only)
  && existsSync(join(sitesDir, n, "index.html")));

for (const site of sites) auditSite(site);

const counts = {};
for (const p of problems) { const k = p.replace(/^\S+( \S+)?: /, "").replace(/\d+/g, "N").slice(0, 70); counts[k] = (counts[k] || 0) + 1; }
if (process.argv.includes("--summary")) {
  for (const [k, n] of Object.entries(counts).sort((a, b) => b[1] - a[1])) console.log(String(n).padStart(6), k);
} else {
  for (const p of problems) console.log(p);
}
console.log(`audit: ${sites.length} sites, ${problems.length} problems`);
process.exitCode = problems.length ? 1 : 0;

function auditSite(site) {
  const root = join(sitesDir, site);
  const host = `${site}.${DOMAIN}`;
  const files = walk(root);
  const htmlFiles = files.filter((f) => f.endsWith(".html") && !f.startsWith("_"));

  const robots = read(join(root, "robots.txt"));
  if (!robots) report(site, "", "no robots.txt");
  else if (!robots.includes(`Sitemap: https://${host}/sitemap.xml`)) report(site, "", "robots.txt has no Sitemap line for this host");

  const sitemap = read(join(root, "sitemap.xml"));
  const inSitemap = new Set();
  if (!sitemap) report(site, "", "no sitemap.xml");
  else {
    for (const m of sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
      const loc = (m[1].match(/<loc>([^<]+)<\/loc>/) || [])[1] || "";
      inSitemap.add(loc);
      const u = safeURL(loc);
      if (!u || u.host !== host) { report(site, "", `sitemap URL on another host: ${loc}`); continue; }
      if (!fileFor(root, u.pathname)) report(site, "", `sitemap URL has no page: ${loc}`);
      if (!/<lastmod>\d{4}-\d{2}-\d{2}/.test(m[1])) report(site, "", `sitemap URL without lastmod: ${loc}`);
    }
  }

  if (!existsSync(join(root, "llms.txt"))) report(site, "", "no llms.txt");
  for (const p of ["/about", "/contact", "/privacy"]) if (!fileFor(root, p)) report(site, "", `no ${p} page`);

  for (const file of htmlFiles) {
    const rel = "/" + relative(root, file).replace(/index\.html$/, "").replace(/\.html$/, "");
    const html = readFileSync(file, "utf8");
    const is404 = rel === "/404";
    auditPage(site, host, root, rel, html, is404, inSitemap);
  }
}

function auditPage(site, host, root, path, html, is404, inSitemap) {
  const r = (msg) => report(site, path, msg);
  const head = (html.match(/<head>([\s\S]*?)<\/head>/i) || [])[1] || "";
  const meta = (attr, name) => {
    const re = new RegExp(`<meta\\s+${attr}="${name}"\\s+content="([^"]*)"`, "i");
    const re2 = new RegExp(`<meta\\s+content="([^"]*)"\\s+${attr}="${name}"`, "i");
    return decode((head.match(re) || head.match(re2) || [])[1]);
  };

  // noindex pages (the 404, the imported sites' checkout) skip the search-snippet checks; a noindex page
  // listed in the sitemap is the real problem there.
  const noindex = /noindex/i.test(meta("name", "robots"));
  const indexable = !noindex && !is404;
  if (!/<html[^>]+lang="[a-z]{2}/i.test(html)) r("no <html lang>");
  if (!/<meta charset="utf-8">/i.test(head)) r("no <meta charset>");
  if (!/<meta name="viewport"/i.test(head)) r("no viewport meta");

  const title = decode((head.match(/<title>([^<]*)<\/title>/i) || [])[1]);
  if (!title) r("no <title>");
  else if (!indexable) { /* not shown in search results */ }
  else if (title.length > 60) r(`title too long (${title.length} > 60): ${title}`);
  else if (title.length < 20) r(`title too short (${title.length} < 20): ${title}`);

  const desc = meta("name", "description");
  if (!desc) { if (indexable) r("no meta description"); }
  else if (!indexable) { /* not shown in search results */ }
  else if (desc.length > 160) r(`meta description too long (${desc.length} > 160)`);
  else if (desc.length < 70) r(`meta description too short (${desc.length} < 70)`);

  const body = html.slice(html.search(/<body/i));
  const h1s = (body.match(/<h1[\s>]/gi) || []).length;
  if (h1s !== 1) r(`${h1s} <h1> tags`);
  let last = 0;
  for (const m of body.matchAll(/<h([1-6])[\s>]/gi)) {
    const level = Number(m[1]);
    if (last && level > last + 1) { r(`heading skips a level (h${last} -> h${level})`); break; }
    last = level;
  }

  if (is404) {
    if (!noindex) r("404 page is not noindex");
  } else if (noindex) {
    if (inSitemap.has(`https://${host}${path}`)) r("noindex page is listed in sitemap.xml");
  } else {
    const canonical = decode((head.match(/<link rel="canonical" href="([^"]+)"/i) || [])[1]);
    const cu = safeURL(canonical);
    if (!cu) r("no canonical");
    else if (cu.host !== host) r(`canonical on another host: ${canonical}`);
    else if (cu.pathname !== path) r(`canonical is not this page: ${canonical}`);
    else if (inSitemap.size && !inSitemap.has(canonical)) r("indexable page missing from sitemap.xml");
  }

  if (indexable) for (const p of ["og:title", "og:description", "og:url", "og:type", "og:image", "og:site_name"]) {
    if (!meta("property", p)) r(`no ${p}`);
  }
  const ogUrl = safeURL(meta("property", "og:url"));
  if (ogUrl && ogUrl.host !== host) r(`og:url on another host: ${ogUrl.href}`);
  const ogImage = meta("property", "og:image");
  if (ogImage && !/^https:\/\//.test(ogImage)) r("og:image is not an absolute https URL");
  if (indexable && !meta("name", "twitter:card")) r("no twitter:card");

  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
  if (!blocks.length && indexable) r("no JSON-LD");
  for (const b of blocks) {
    try {
      const data = JSON.parse(b);
      const text = JSON.stringify(data);
      for (const m of text.matchAll(/https?:\/\/([a-z0-9-]+)\.onlinetrainingcourses\.us/g)) { r(`JSON-LD links to dead domain ${m[0]}`); break; }
    } catch { r("invalid JSON-LD"); }
  }
  if (path === "/") {
    const ld = blocks.join(" ");
    if (!/"@type":"(Organization|EducationalOrganization)"/.test(ld)) r("home page JSON-LD has no Organization");
    if (!/"contactPoint"/.test(ld) || !/"PostalAddress"/.test(ld)) r("Organization JSON-LD has no contactPoint/address");
  }

  for (const m of body.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt="/i.test(m[0])) { r(`image without alt: ${m[0].slice(0, 80)}`); break; }
  }

  for (const m of body.matchAll(/<a\b[^>]*\bhref="([^"]*)"/gi)) {
    const href = decode(m[1]);
    if (/onlinetrainingcourses\.us/.test(href)) { r(`link to dead domain: ${href}`); continue; }
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const u = new URL(href, `https://${host}${path}`);
    if (!fileFor(root, u.pathname)) r(`broken internal link: ${href}`);
  }

  if ((indexable || is404) && !mdTwin(root, path)) r("no Markdown twin (.md)");
}

// The file the Worker would serve for a path, following Cloudflare's auto-trailing-slash rules.
function fileFor(root, pathname) {
  if (pathname.startsWith("/_shared/")) return existsSync(join(sitesDir, pathname)) ? pathname : null;
  const p = decodeURIComponent(pathname);
  const candidates = p.endsWith("/") ? [p + "index.html"] : [p, p + ".html", p + "/index.html"];
  return candidates.find((c) => existsSync(join(root, c)) && statSync(join(root, c)).isFile()) || null;
}

export function mdPath(path) {
  return path.endsWith("/") ? path + "index.md" : path + ".md";
}

function mdTwin(root, path) {
  return existsSync(join(root, mdPath(path))) ? mdPath(path) : null;
}

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
    d.isDirectory() ? walk(join(dir, d.name)) : [join(dir, d.name)]);
}

function read(file) {
  return existsSync(file) ? readFileSync(file, "utf8") : "";
}

function safeURL(s) {
  try { return new URL(s); } catch { return null; }
}

function decode(s) {
  return s == null ? "" : String(s).replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#8209;/g, "‑");
}
