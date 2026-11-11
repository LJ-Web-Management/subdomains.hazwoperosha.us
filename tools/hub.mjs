// Writes the hub's sitemaps of every site (not www or the hub). Wrangler runs this before each deploy (the
// "build" block in wrangler.jsonc), so a new site's sitemap is listed on its own:
//   sites/hub/sitemap.xml             a sitemap index of every site's own sitemap.xml, to submit to Google
//                                     Search Console under the hazwoperosha.us domain property
//   sites/hub/sitemaps/index.html     the same list as a page, https://hub.hazwoperosha.us/sitemaps/, with
//                                     a tab in the course search bar
//
// Otherwise hub.hazwoperosha.us is the internal course search (sites/hub/course-search/, edited in place;
// data scripts and docs in tools/course-search/). The Worker sends every other hub path there.
// The hazwoperosha.com sites have their own hub: https://hub.hazwoperosha.com (scripts/build-hub.sh in
// LJ-Web-Management/subdomains.hazwoperosha.com).
import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const DOMAIN = "hazwoperosha.us";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sitesDir = join(root, "sites");
const out = join(sitesDir, "hub");
const NAME = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const names = readdirSync(sitesDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && NAME.test(d.name) && d.name !== "hub" && existsSync(join(sitesDir, d.name, "index.html")))
  .map((d) => d.name)
  .sort();

const mapped = names.filter((n) => n !== "www" && existsSync(join(sitesDir, n, "sitemap.xml")));
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${mapped.map((n) => `  <sitemap><loc>https://${n}.${DOMAIN}/sitemap.xml</loc>${lastmod(n)}</sitemap>`).join("\n")}
</sitemapindex>
`;
writeFileSync(join(out, "sitemap.xml"), sitemap);

// The same list as a page. Site names are folder names (letters, digits, hyphens), so they need no escaping.
const rows = names.filter((n) => n !== "www").map((n) => {
  const has = mapped.includes(n);
  const sitemapCell = has ? `<a href="https://${n}.${DOMAIN}/sitemap.xml">sitemap.xml</a>` : "none";
  const date = has ? lastmod(n).replace(/<\/?lastmod>/g, "") : "";
  return `      <tr><td><a href="https://${n}.${DOMAIN}/">${n}.${DOMAIN}</a></td><td>${sitemapCell}</td><td>${date || "&ndash;"}</td></tr>`;
});
const page = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, nofollow" />
  <title>${DOMAIN} sitemaps</title>
  <link rel="canonical" href="https://hub.${DOMAIN}/sitemaps/" />
  <link rel="stylesheet" href="/course-search/switcher.css" />
  <style>
    body { margin: 0; font-family: Arial, Helvetica, sans-serif; color: #171717; background: #fafafa; }
    .sm { max-width: 960px; margin: 0 auto; padding: 24px 16px 48px; }
    .sm h1 { font-size: 26px; margin: 0 0 8px; }
    .sm p { line-height: 1.5; margin: 0 0 12px; }
    .sm table { width: 100%; border-collapse: collapse; background: #fff; font-size: 14px; }
    .sm th, .sm td { text-align: left; padding: 8px 10px; border-bottom: 1px solid #e5e5e5; overflow-wrap: anywhere; }
    .sm th { background: #f4f4f5; position: sticky; top: 56px; }
    .sm a { color: #1d4ed8; }
  </style>
</head>
<body>
<nav class="cs-switch" aria-label="Course search tools">
<div class="cs-tabs"><a href="/course-search/catalog/"><b>HAZWOPER Course Catalog</b><small>Every course and bundle in the catalog</small></a><a href="/course-search/landing-pages/"><b>Landing Page Courses</b><small>Which sites sell which courses</small></a><a href="/sitemaps/" class="on" aria-current="page"><b>Sitemaps</b><small>Every ${DOMAIN} site's sitemap</small></a></div>
</nav>
  <main class="sm">
    <h1>${DOMAIN} sitemaps</h1>
    <p>Every ${DOMAIN} site and its sitemap: ${mapped.length} of ${rows.length} sites have one. The sitemap index
      <a href="/sitemap.xml">https://hub.${DOMAIN}/sitemap.xml</a> lists them all; submit it in Google Search Console
      under the Domain property for ${DOMAIN}.</p>
    <p>The hazwoperosha.com sites are on <a href="https://hub.hazwoperosha.com/">hub.hazwoperosha.com</a>.</p>
    <table>
      <thead><tr><th scope="col">Site</th><th scope="col">Sitemap</th><th scope="col">Last updated</th></tr></thead>
      <tbody>
${rows.join("\n")}
      </tbody>
    </table>
  </main>
</body>
</html>
`;
mkdirSync(join(out, "sitemaps"), { recursive: true });
writeFileSync(join(out, "sitemaps", "index.html"), page);
console.log(`hub: ${mapped.length} sites in sitemap index and on /sitemaps/`);

// The newest <lastmod> in a site's sitemap, so Search Console knows which sitemaps changed.
function lastmod(name) {
  const dates = [...readFileSync(join(sitesDir, name, "sitemap.xml"), "utf8").matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]).sort();
  return dates.length ? `<lastmod>${dates.at(-1)}</lastmod>` : "";
}
