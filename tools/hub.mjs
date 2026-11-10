// Writes sites/hub/sitemap.xml, a sitemap index of every site's own sitemap.xml (not www or the hub), to submit
// to Google Search Console under the hazwoperosha.us domain property. Wrangler runs this before each deploy
// (the "build" block in wrangler.jsonc), so a new site's sitemap is listed on its own.
//
// hub.hazwoperosha.us itself is only the internal course search (sites/hub/course-search/, copied in by
// tools/course-search.mjs); the Worker sends every other hub path there.
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
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
console.log(`hub: ${mapped.length} sites in sitemap index`);

// The newest <lastmod> in a site's sitemap, so Search Console knows which sitemaps changed.
function lastmod(name) {
  const dates = [...readFileSync(join(sitesDir, name, "sitemap.xml"), "utf8").matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]).sort();
  return dates.length ? `<lastmod>${dates.at(-1)}</lastmod>` : "";
}
