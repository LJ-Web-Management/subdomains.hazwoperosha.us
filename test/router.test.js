import { test } from "node:test";
import assert from "node:assert/strict";
import worker, { siteFor, wantsMarkdown } from "../src/index.js";

const TYPES = { html: "text/html", md: "text/markdown", css: "text/css", js: "text/javascript", woff2: "font/woff2", png: "image/png", txt: "text/plain", xml: "application/xml" };

// Stands in for Cloudflare's asset server: files maps paths under sites/ to their contents.
function assets(files, redirects = {}) {
  return {
    async fetch(req) {
      const path = new URL(req.url).pathname;
      if (redirects[path]) return new Response(null, { status: 307, headers: { Location: redirects[path] } });
      // Like html_handling "auto-trailing-slash": /x serves x.html, /x/ serves x/index.html.
      const file = [path, path.endsWith("/") ? path + "index.html" : path + ".html"].find((p) => p in files);
      if (!file) return new Response("missing", { status: 404 });
      const ext = file.match(/\.([a-z0-9]+)$/)?.[1];
      return new Response(files[file], { status: 200, headers: { "Content-Type": TYPES[ext] || "application/octet-stream" } });
    },
  };
}

const get = (url, env, headers = {}) => worker.fetch(new Request(url, { headers }), env);

test("picks the folder from the first part of the hostname", () => {
  assert.equal(siteFor("johnny.hazwoperosha.us"), "johnny");
  assert.equal(siteFor("Lucy.ABC.com"), "lucy");
  assert.equal(siteFor("-bad.hazwoperosha.us"), null);
});

test("serves each site's own files", async () => {
  const env = { ASSETS: assets({ "/johnny/": "johnny home", "/tim/": "tim home" }) };
  assert.equal(await (await get("https://johnny.hazwoperosha.us/", env)).text(), "johnny home");
  assert.equal(await (await get("https://tim.hazwoperosha.us/", env)).text(), "tim home");
});

test("strips the folder from redirects", async () => {
  const env = { ASSETS: assets({}, { "/johnny/about.html": "/johnny/about", "/johnny/docs": "/johnny/docs/?x=1" }) };
  assert.equal((await get("https://johnny.hazwoperosha.us/about.html", env)).headers.get("Location"), "/about");
  assert.equal((await get("https://johnny.hazwoperosha.us/docs", env)).headers.get("Location"), "/docs/?x=1");
});

test("uses the site's 404.html when it has one", async () => {
  const env = { ASSETS: assets({ "/lucy/404.html": "lucy 404" }) };
  const res = await get("https://lucy.hazwoperosha.us/nope", env);
  assert.equal(res.status, 404);
  assert.equal(await res.text(), "lucy 404");
  assert.equal((await get("https://nobody.hazwoperosha.us/", env)).status, 404);
});

test("serves sites/_shared/ to every site", async () => {
  const env = { ASSETS: assets({ "/_shared/checkout.js": "shared js", "/johnny/_shared/checkout.js": "johnny's own" }) };
  assert.equal(await (await get("https://johnny.hazwoperosha.us/_shared/checkout.js", env)).text(), "shared js");
  assert.equal(await (await get("https://tim.hazwoperosha.us/_shared/checkout.js", env)).text(), "shared js");
  assert.equal(siteFor("_shared.hazwoperosha.us"), null);
});

test("keeps the hub out of search engines", async () => {
  const env = { ASSETS: assets({ "/hub/index.html": "hub", "/tim/index.html": "tim home" }) };
  assert.equal((await get("https://hub.hazwoperosha.us/", env)).headers.get("X-Robots-Tag"), "noindex, nofollow");
  assert.equal((await get("https://tim.hazwoperosha.us/", env)).headers.get("X-Robots-Tag"), null);
});

test("adds the Google Analytics and Clarity tags to HTML pages only, loaded after render", async () => {
  const env = { ASSETS: assets({
    "/tim/index.html": "<html><head><title>t</title></head><body>hi</body></html>",
    "/tim/404.html": "<html><head></head><body>gone</body></html>",
    "/tim/app.js": "const x = '</head>';",
  }) };
  const page = await (await get("https://tim.hazwoperosha.us/", env)).text();
  assert.match(page, /gtag\('config', 'G-CSJ7GHDZXW'\);[\s\S]*<\/script>\n<\/head>/);
  assert.match(page, /"https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-CSJ7GHDZXW", "https:\/\/www\.clarity\.ms\/tag\/z3cea3et53"/);
  assert.match(page, /addEventListener\("load", function \(\) \{ setTimeout\(load, 3500\); \}\)/);
  assert.equal(page.split("G-CSJ7GHDZXW").length - 1, 2);
  assert.equal(page.split("z3cea3et53").length - 1, 1);
  assert.doesNotMatch(page, /<script async src=/, "no render-blocking analytics script tag");
  const missing = await get("https://tim.hazwoperosha.us/nope", env);
  assert.equal(missing.status, 404);
  assert.match(await missing.text(), /G-CSJ7GHDZXW/);
  assert.equal(await (await get("https://tim.hazwoperosha.us/app.js", env)).text(), "const x = '</head>';");
});

test("leaves the hub untracked", async () => {
  const env = { ASSETS: { async fetch() { return new Response("<html><head></head><body>hub</body></html>", { headers: { "Content-Type": "text/html" } }); } } };
  const res = await get("https://hub.hazwoperosha.us/", env);
  const hub = await res.text();
  assert.doesNotMatch(hub, /G-CSJ7GHDZXW/);
  assert.doesNotMatch(hub, /clarity/);
  assert.equal(res.headers.get("X-Robots-Tag"), "noindex, nofollow");
});

test("reads Accept headers the way agents and browsers send them", () => {
  assert.equal(wantsMarkdown("text/markdown"), true);
  assert.equal(wantsMarkdown("text/markdown, text/html;q=0.9, */*;q=0.1"), true);
  assert.equal(wantsMarkdown("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"), false);
  assert.equal(wantsMarkdown("text/html, text/markdown;q=0.5"), false);
  assert.equal(wantsMarkdown("*/*"), false);
  assert.equal(wantsMarkdown(""), false);
  assert.equal(wantsMarkdown(null), false);
});

const site = () => ({ ASSETS: assets({
  "/tim/index.html": "<html><head></head><body>home</body></html>",
  "/tim/index.md": "# Home",
  "/tim/courses/index.html": "<html><head></head><body>list</body></html>",
  "/tim/courses/index.md": "# Courses",
  "/tim/courses/forty.html": "<html><head></head><body>forty</body></html>",
  "/tim/courses/forty.md": "# Forty",
  "/tim/checkout.html": "<html><head></head><body>pay</body></html>",
  "/tim/404.html": "<html><head></head><body>gone</body></html>",
  "/tim/404.md": "# Page not found\n\nSee [the sitemap](/sitemap.xml).",
  "/_shared/checkout.js": "js",
  "/tim/style.css": "body{}",
  "/tim/og.png": "png",
  "/tim/assets/f.woff2": "font",
}) });

test("serves the Markdown twin when an agent asks for text/markdown", async () => {
  const env = site();
  const md = { Accept: "text/markdown" };
  for (const [path, body, canonical] of [
    ["/", "# Home", "https://tim.hazwoperosha.us/"],
    ["/courses/", "# Courses", "https://tim.hazwoperosha.us/courses/"],
    ["/courses/forty", "# Forty", "https://tim.hazwoperosha.us/courses/forty"],
    ["/courses", "# Courses", "https://tim.hazwoperosha.us/courses/"],
  ]) {
    const res = await get(`https://tim.hazwoperosha.us${path}`, env, md);
    assert.equal(res.status, 200, path);
    assert.equal(res.headers.get("Content-Type"), "text/markdown; charset=utf-8", path);
    assert.match(res.headers.get("Vary"), /Accept/, path);
    assert.equal(res.headers.get("Link"), `<${canonical}>; rel="canonical"`, path);
    assert.equal(await res.text(), body, path);
  }
});

test("keeps serving HTML to browsers, with Vary: Accept and a charset", async () => {
  const res = await get("https://tim.hazwoperosha.us/courses/forty", site(), { Accept: "text/html,*/*;q=0.8" });
  assert.equal(res.headers.get("Content-Type"), "text/html; charset=utf-8");
  assert.match(res.headers.get("Vary"), /Accept/);
  assert.match(await res.text(), /forty/);
  assert.equal(res.headers.get("X-Content-Type-Options"), "nosniff");
  assert.match(res.headers.get("Strict-Transport-Security"), /max-age=31536000/);
});

test("answers a missing page with the Markdown 404 for agents", async () => {
  const res = await get("https://tim.hazwoperosha.us/nope", site(), { Accept: "text/markdown" });
  assert.equal(res.status, 404);
  assert.equal(res.headers.get("Content-Type"), "text/markdown; charset=utf-8");
  assert.match(await res.text(), /sitemap/);
});

test("falls back to HTML for a page without a Markdown twin", async () => {
  const res = await get("https://tim.hazwoperosha.us/checkout", site(), { Accept: "text/markdown" });
  assert.equal(res.status, 200);
  assert.match(res.headers.get("Content-Type"), /^text\/html/);
});

test("serves .md URLs as Markdown pointing back at the page", async () => {
  const res = await get("https://tim.hazwoperosha.us/courses/forty.md", site());
  assert.equal(res.headers.get("Content-Type"), "text/markdown; charset=utf-8");
  assert.equal(res.headers.get("Link"), '<https://tim.hazwoperosha.us/courses/forty>; rel="canonical"');
  assert.equal(await res.text(), "# Forty");
});

test("caches versioned assets and fonts for a year, pages not at all", async () => {
  const env = site();
  const cache = async (path) => (await get(`https://tim.hazwoperosha.us${path}`, env)).headers.get("Cache-Control");
  assert.equal(await cache("/_shared/checkout.js?v=abc123"), "public, max-age=31536000, immutable");
  assert.equal(await cache("/assets/f.woff2"), "public, max-age=31536000, immutable");
  assert.match(await cache("/og.png"), /^public, max-age=2592000/);
  assert.match(await cache("/style.css"), /^public, max-age=3600/);
  assert.equal(await cache("/"), null);
  assert.equal(await cache("/nope"), null);
});

test("never serves Markdown on the hub", async () => {
  const env = { ASSETS: assets({ "/hub/index.html": "<html><head></head><body>hub</body></html>", "/hub/index.md": "# hub" }) };
  const res = await get("https://hub.hazwoperosha.us/", env, { Accept: "text/markdown" });
  assert.match(res.headers.get("Content-Type"), /^text\/html/);
});
