// Serves sites/<name>/ at <name>.<your domain>. The first part of the hostname picks the folder:
// johnny.hazwoperosha.us/about -> sites/johnny/about.html (or sites/johnny/about/index.html).
// /_shared/ is the exception: every site gets sites/_shared/ there (checkout, course catalog).
// "_shared" can't be a subdomain, so it is never served as a site of its own.
// hub.<domain> is the ICT hub website that leads to every site (tools/hub.mjs); it is kept out of search engines.
// Every HTML page gets the Google Analytics and Microsoft Clarity tags added before </head>, so sites
// never include them. The hub is internal, so it isn't tracked.
//
// For AI agents: a request that prefers Accept: text/markdown gets the page's Markdown twin
// (tools/agents.mjs writes about.md next to about.html), with Vary: Accept so caches keep the two apart,
// and a missing page answers with the site's 404.md. The twins are also served at the page path + .md.
//
// For PageSpeed: versioned assets (?v=) and fonts are cached for a year, images for 30 days, and the
// analytics scripts load after the page has rendered.
//
// Security: every response refuses to be framed (X-Frame-Options), and every HTML page gets a
// Content-Security-Policy with a fresh nonce on each of its <script> tags (see csp()). Pages must not use
// inline onclick="" style handlers, and a script from a new host must be added to csp() first;
// test/pages.test.js checks both for every page in sites/.

const NAME = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const SHARED = "/_shared/";
const NOINDEX = new Set(["hub"]);
const GA_ID = "G-CSJ7GHDZXW";
const CLARITY_ID = "z3cea3et53";
// Both tags queue their calls straight away (so the pageview is kept) but fetch their scripts only on
// the first interaction, or 3.5 seconds after the page loads, so they never hold up the first render.
const ANALYTICS_TAG = `<!-- Google tag (gtag.js) and Microsoft Clarity, loaded after the page renders -->
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');
window.clarity = window.clarity || function(){(window.clarity.q = window.clarity.q || []).push(arguments);};
(function () {
  var done = false;
  function load() {
    if (done) return;
    done = true;
    ["https://www.googletagmanager.com/gtag/js?id=${GA_ID}", "https://www.clarity.ms/tag/${CLARITY_ID}"].forEach(function (src) {
      var s = document.createElement("script"); s.async = true; s.src = src; document.head.appendChild(s);
    });
  }
  ["pointerdown", "keydown", "scroll", "touchstart"].forEach(function (e) { addEventListener(e, load, { once: true, passive: true }); });
  addEventListener("load", function () { setTimeout(load, 3500); });
})();
</script>
`;
const SECURITY = {
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  // No other website may show these pages in a frame (clickjacking). CSP frame-ancestors says the same.
  "X-Frame-Options": "DENY",
};

// The Content-Security-Policy every HTML page gets. Scripts run only from this site, the services below or
// an inline <script> carrying the page's nonce, which the Worker adds to each response, so a script slipped
// into a page can't run; inline onclick="" style handlers never run. Inline styles stay allowed: they can't
// run code, and Stripe's card field and the pages' style="" attributes need them.
//   Stripe: js.stripe.com (Stripe.js, the card field and 3D Secure frames), hooks.stripe.com, api.stripe.com
//   Google Analytics and Microsoft Clarity: the tags in ANALYTICS_TAG and the hosts they report to
//   hazwoper-osha.com/api: where the checkouts create the buyer's account and order
//   Google Fonts: the stylesheet and the font files
function csp(nonce) {
  const analytics = "https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.g.doubleclick.net https://www.google.com https://*.clarity.ms https://c.bing.com";
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' https://js.stripe.com https://*.js.stripe.com https://*.googletagmanager.com https://*.clarity.ms`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    `img-src 'self' data: https://*.stripe.com ${analytics}`,
    `connect-src 'self' https://hazwoper-osha.com https://api.stripe.com https://*.stripe.com ${analytics}`,
    "frame-src https://js.stripe.com https://*.js.stripe.com https://hooks.stripe.com",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "object-src 'none'",
  ].join("; ");
}

export function siteFor(hostname) {
  const name = hostname.toLowerCase().split(".")[0];
  return NAME.test(name) ? name : null;
}

// True when the client ranks text/markdown at least as high as text/html (agents send
// "Accept: text/markdown"; browsers send text/html and never mention markdown).
export function wantsMarkdown(accept) {
  let md = 0, html = 0;
  for (const part of (accept || "").toLowerCase().split(",")) {
    const [type, ...params] = part.trim().split(";").map((s) => s.trim());
    const qp = params.find((p) => p.startsWith("q="));
    const q = qp ? Number(qp.slice(2)) || 0 : 1;
    if (type === "text/markdown" || type === "text/x-markdown") md = Math.max(md, q);
    else if (type === "text/html" || type === "application/xhtml+xml") html = Math.max(html, q);
  }
  return md > 0 && md >= html;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const site = siteFor(url.hostname);
    const res = await route(request, env, site, url);
    return finish(res, site, url);
  },
};

async function route(request, env, site, url) {
  if (!site) return notFound();
  // Every form posts to its own page, and its script always submits it, so a POST only arrives with
  // JavaScript off. Send the visitor back to the page (303: the browser GETs it) instead of the asset
  // server's 405. What they typed never lands in the URL, as it would with a GET form.
  if (request.method === "POST") return new Response(null, { status: 303, headers: { Location: url.pathname + url.search } });
  const agent = !NOINDEX.has(site) && wantsMarkdown(request.headers.get("Accept"));
  if (agent && isPagePath(url.pathname)) {
    const md = await markdownTwin(request, env, site, url);
    if (md) return md;
  }
  const res = await serve(request, env, site);
  if (res.status === 404 && agent) {
    const page = await env.ASSETS.fetch(new Request(new URL(`/${site}/404.md`, url)));
    if (page.ok) return markdown(page.body, 404, page.headers);
  }
  return htmlPage(res, !NOINDEX.has(site));
}

// A path that names a page rather than a file: no extension, or .html.
function isPagePath(path) {
  return !/\.[a-z0-9]+$/i.test(path) || /\.html$/i.test(path);
}

async function markdownTwin(request, env, site, url) {
  const path = url.pathname.replace(/\.html$/i, "").replace(/\/index$/, "/");
  const candidates = path.endsWith("/") ? [path + "index.md"] : [path + ".md", path + "/index.md"];
  for (const c of candidates) {
    const res = await env.ASSETS.fetch(new Request(new URL(`/${site}${c}`, url), { method: request.method === "HEAD" ? "HEAD" : "GET" }));
    if (res.ok) return markdown(res.body, 200, res.headers, canonicalFor(url, c));
  }
  return null;
}

// The HTML page a Markdown twin stands for, so search engines index the page and not the twin.
function canonicalFor(url, mdPath) {
  return url.origin + mdPath.replace(/index\.md$/, "").replace(/\.md$/, "");
}

function markdown(body, status, from, canonical) {
  const headers = new Headers(from);
  headers.set("Content-Type", "text/markdown; charset=utf-8");
  headers.delete("Content-Length");
  if (canonical) headers.set("Link", `<${canonical}>; rel="canonical"`);
  return new Response(body, { status, headers });
}

// An HTML page: the analytics tags (when tracked), then a fresh nonce on every <script> and the CSP that
// trusts it. A response without a body (HEAD, 304 Not Modified) gets neither: on a 304 the browser keeps
// the page and the CSP it already has, whose nonces match each other, and a new CSP would not.
async function htmlPage(res, track) {
  if (!res.body || !(res.headers.get("Content-Type") || "").includes("text/html")) return res;
  let html = await res.text();
  const at = html.search(/<\/head>/i);
  if (track && at !== -1 && !html.includes(GA_ID)) html = html.slice(0, at) + ANALYTICS_TAG + html.slice(at);
  const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))));
  const headers = new Headers(res.headers);
  headers.delete("Content-Length");
  headers.set("Content-Security-Policy", csp(nonce));
  return new Response(withNonce(html, nonce), { status: res.status, headers });
}

// Adds nonce="…" to every <script> tag. Comments and whole <script> and <style> elements are matched as
// one piece, so a "<script" written inside a script, a style or a comment is left alone.
function withNonce(html, nonce) {
  return html.replace(/<!--[\s\S]*?-->|<style\b[\s\S]*?<\/style\s*>|<script\b([^>]*)>[\s\S]*?<\/script\s*>/gi, (m, attrs) =>
    attrs === undefined || /\snonce=/i.test(attrs) ? m : `<script nonce="${nonce}"` + m.slice("<script".length));
}

// Headers every response gets: charset, Vary, caching and the security basics.
function finish(res, site, url) {
  const headers = new Headers(res.headers);
  const type = headers.get("Content-Type") || "";
  for (const [k, v] of Object.entries(SECURITY)) if (!headers.has(k)) headers.set(k, v);
  if (NOINDEX.has(site)) headers.set("X-Robots-Tag", "noindex, nofollow");

  if (type.startsWith("text/html") || type.startsWith("text/markdown")) {
    if (!/charset=/i.test(type)) headers.set("Content-Type", `${type.split(";")[0]}; charset=utf-8`);
    const vary = headers.get("Vary");
    if (!/\baccept\b/i.test(vary || "")) headers.set("Vary", vary ? `${vary}, Accept` : "Accept");
  }
  if (/\.md$/i.test(url.pathname) && res.status === 200) {
    headers.set("Content-Type", "text/markdown; charset=utf-8");
    headers.set("Link", `<${canonicalFor(url, url.pathname)}>; rel="canonical"`);
  }
  if (/^text\/(plain|xml)|^application\/xml/.test(type) && !/charset=/i.test(type)) headers.set("Content-Type", `${type.split(";")[0]}; charset=utf-8`);

  const cache = cacheFor(url, res.status);
  if (cache) headers.set("Cache-Control", cache);
  return new Response(res.body, { status: res.status, statusText: res.statusText, headers });
}

// Pages keep the asset server's revalidate-every-time default, so a deploy shows up at once.
function cacheFor(url, status) {
  if (status !== 200) return null;
  const path = url.pathname;
  if (url.searchParams.has("v") && /\.(css|js|woff2?|png|jpe?g|webp|avif|svg|ico)$/i.test(path)) return "public, max-age=31536000, immutable";
  if (/\.(woff2?|ttf|otf)$/i.test(path)) return "public, max-age=31536000, immutable";
  if (/\.(png|jpe?g|webp|avif|gif|svg|ico)$/i.test(path)) return "public, max-age=2592000, stale-while-revalidate=86400";
  if (/\.(css|js)$/i.test(path)) return "public, max-age=3600, stale-while-revalidate=86400";
  if (/\.(txt|xml|md)$/i.test(path)) return "public, max-age=3600";
  return null;
}

async function serve(request, env, site) {
  const url = new URL(request.url);
  const prefix = `/${site}`;
  const path = url.pathname.startsWith(SHARED) ? url.pathname : prefix + url.pathname;
  const res = await env.ASSETS.fetch(new Request(new URL(path + url.search, url), request));

  // Asset serving redirects /about.html -> /about and /docs -> /docs/. Those redirects carry the
  // folder prefix, which visitors must never see.
  const location = res.headers.get("Location");
  if (location) {
    const target = new URL(location, url);
    if (target.pathname === prefix || target.pathname.startsWith(prefix + "/")) {
      target.pathname = target.pathname.slice(prefix.length) || "/";
      const headers = new Headers(res.headers);
      headers.set("Location", target.pathname + target.search);
      return new Response(res.body, { status: res.status, headers });
    }
  }

  if (res.status === 404) {
    const page = await env.ASSETS.fetch(new Request(new URL(`${prefix}/404.html`, url)));
    if (page.ok) return new Response(page.body, { status: 404, headers: page.headers });
    return notFound();
  }
  return res;
}

function notFound() {
  return new Response("Not found", { status: 404, headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
