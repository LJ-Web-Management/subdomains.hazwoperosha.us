// Draws each course site's share image (content/<name>/og.png, 1200x630, used for og:image, twitter:image
// and the JSON-LD images) and its home-screen icon (content/<name>/apple-touch-icon.png, 180x180) from
// the site's brand, icon and theme color. Needs Playwright's Chromium, so it isn't part of
// `npm run build`: run `node tools/og.mjs` (or `node tools/og.mjs rcra texas`) when a site is added or
// rebranded, then `npm run build`, and commit the images.
import { readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";
import { fitTitle } from "./seo.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const { chromium } = createRequire(import.meta.url)("playwright");
const only = process.argv.slice(2);
const names = readdirSync(join(root, "content"), { withFileTypes: true })
  .filter((d) => d.isDirectory() && (!only.length || only.includes(d.name))).map((d) => d.name);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
for (const name of names) {
  const site = (await import(pathToFileURL(join(root, "content", name, "site.mjs")).href)).default;
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.setContent(card(site, name));
  await page.screenshot({ path: join(root, "content", name, "og.png"), type: "png" });
  await page.setViewportSize({ width: 180, height: 180 });
  await page.setContent(`<html><body style="margin:0;width:180px;height:180px;display:grid;place-items:center;background:#fff">${site.icon.replace("<svg ", '<svg width="148" height="148" ')}</body></html>`);
  await page.screenshot({ path: join(root, "content", name, "apple-touch-icon.png"), type: "png" });
}
await browser.close();
console.log(`og: drew ${names.length} share images`);

function card(site, name) {
  const bg = site.theme;
  const dark = luminance(bg) < 0.45;
  const fg = dark ? "#ffffff" : "#111111";
  const soft = dark ? "rgba(255,255,255,.78)" : "rgba(0,0,0,.68)";
  const title = fitTitle(site.title).split(" | ")[0];
  const es = site.lang === "es";
  const points = es ? ["100% en línea", "A su propio ritmo", "Certificado al terminar"] : ["100% online", "Self-paced", "Certificate of completion"];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  return `<!doctype html><html><head><meta charset="utf-8"><style>
*{box-sizing:border-box}body{margin:0;width:1200px;height:630px;background:${bg};color:${fg};font-family:Inter,"DejaVu Sans",sans-serif;overflow:hidden}
.c{position:absolute;inset:0;padding:64px 72px;display:flex;flex-direction:column}
.top{display:flex;align-items:center;gap:22px;font-size:34px;font-weight:700}
.top svg{width:84px;height:84px;border-radius:14px;flex:none;background:#fff}
h1{margin:auto 0 0;font-size:${title.length > 44 ? 62 : 74}px;line-height:1.05;letter-spacing:-.02em;font-weight:800;max-width:1040px}
.pts{display:flex;gap:14px;margin-top:34px}.pts span{font-size:24px;font-weight:600;padding:10px 18px;border-radius:999px;background:${dark ? "rgba(255,255,255,.14)" : "rgba(0,0,0,.08)"}}
.foot{display:flex;justify-content:space-between;margin-top:40px;font-size:24px;color:${soft}}
.bar{position:absolute;left:0;right:0;bottom:0;height:12px;background:${dark ? "rgba(255,255,255,.35)" : "rgba(0,0,0,.25)"}}
</style></head><body><div class="c">
<div class="top">${site.icon}<span>${esc(site.brand)}</span></div>
<h1>${esc(title)}</h1>
<div class="pts">${points.map((p) => `<span>${p}</span>`).join("")}</div>
<div class="foot"><span>${name}.hazwoperosha.us</span><span>HAZWOPER OSHA Training · (866) 429-6742</span></div>
</div><div class="bar"></div></body></html>`;
}

function luminance(hex) {
  const v = hex.replace("#", "");
  const n = v.length === 3 ? v.split("").map((c) => c + c).join("") : v.slice(0, 6);
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
