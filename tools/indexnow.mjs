// Tells IndexNow (Bing, Yandex, Seznam, Naver; Bing's index feeds ChatGPT search and Copilot) which pages
// changed, so they're re-crawled within hours instead of weeks. Ahrefs Site Audit reports changed pages
// that weren't submitted. Run it after a deploy is live, because the search engines fetch
// https://<site>.hazwoperosha.us/<key>.txt to check the key:
//
//   node tools/indexnow.mjs                      # pages whose sitemap <lastmod> is today
//   node tools/indexnow.mjs --since 2026-11-01   # pages changed on or after a date
//   node tools/indexnow.mjs --all                # every page in every sitemap
//   node tools/indexnow.mjs --dry-run            # print what would be sent
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { DOMAIN, INDEXNOW_KEY } from "./seo.mjs";

const sitesDir = join(dirname(fileURLToPath(import.meta.url)), "..", "sites");
const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const at = args.indexOf("--since");
const since = flag("--all") ? "0000-00-00" : at !== -1 ? args[at + 1] : new Date().toISOString().slice(0, 10);

let total = 0, failed = 0;
for (const site of readdirSync(sitesDir).filter((n) => n !== "hub" && existsSync(join(sitesDir, n, "sitemap.xml")))) {
  if (!existsSync(join(sitesDir, site, `${INDEXNOW_KEY}.txt`))) { console.log(`${site}: no key file, skipped`); continue; }
  const xml = readFileSync(join(sitesDir, site, "sitemap.xml"), "utf8");
  const urls = [...xml.matchAll(/<url><loc>([^<]+)<\/loc>(?:<lastmod>([^<]+)<\/lastmod>)?<\/url>/g)]
    .filter(([, , lastmod]) => !lastmod || lastmod >= since).map(([, loc]) => loc);
  if (!urls.length) continue;
  const host = `${site}.${DOMAIN}`;
  total += urls.length;
  if (flag("--dry-run")) { console.log(`${host}: ${urls.length} URLs`); continue; }
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key: INDEXNOW_KEY, keyLocation: `https://${host}/${INDEXNOW_KEY}.txt`, urlList: urls }),
  });
  if (!res.ok && res.status !== 202) failed++;
  console.log(`${host}: ${urls.length} URLs -> ${res.status}`);
}
console.log(`indexnow: ${total} URLs since ${since}${failed ? `, ${failed} hosts failed` : ""}`);
process.exitCode = failed ? 1 : 0;
