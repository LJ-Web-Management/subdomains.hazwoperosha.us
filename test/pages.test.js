import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import worker from "../src/index.js";

// Checks every page in sites/ against what the Worker's Content-Security-Policy allows, so a page that
// would break under it (an inline onclick="", a script from a new host) fails here instead of in a browser.
const SITES = new URL("../sites/", import.meta.url).pathname;
function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = join(dir, d.name);
    if (d.isDirectory()) return htmlFiles(p);
    return d.name.endsWith(".html") ? [p] : [];
  });
}
const pages = htmlFiles(SITES).map((file) => ({ name: file.slice(SITES.length), html: readFileSync(file, "utf8") }));
// The markup outside comments, scripts and styles: the tags a browser parses as HTML.
const markup = (html) => html.replace(/<!--[\s\S]*?-->|<script\b[^>]*>[\s\S]*?<\/script\s*>|<style\b[^>]*>[\s\S]*?<\/style\s*>/gi, "");

async function policy() {
  const env = { ASSETS: { async fetch() { return new Response("<html><head></head><body></body></html>", { headers: { "Content-Type": "text/html" } }); } } };
  const csp = (await worker.fetch(new Request("https://tim.hazwoperosha.us/"), env)).headers.get("Content-Security-Policy");
  return Object.fromEntries(csp.split(";").map((d) => d.trim().split(/\s+/)).map(([name, ...sources]) => [name, sources]));
}
function allowed(sources, url) {
  const { origin, hostname, protocol } = new URL(url);
  return sources.some((s) => s === origin || (s.startsWith(`${protocol}//*.`) && hostname.endsWith(s.slice(protocol.length + 3))));
}

test("no page uses inline event handlers or javascript: URLs, which the CSP refuses", () => {
  assert.ok(pages.length > 1000);
  for (const { name, html } of pages) {
    const tags = markup(html);
    assert.doesNotMatch(tags, /<[a-z][^>]*\son[a-z]+\s*=/i, name);
    assert.doesNotMatch(tags, /\s(href|src|action)=["']?\s*javascript:/i, name);
  }
});

test("every form posts, so what people type never lands in a URL", () => {
  let forms = 0;
  for (const { name, html } of pages) {
    for (const tag of markup(html).match(/<form\b[^>]*>/gi) || []) {
      forms++;
      assert.match(tag, /\smethod="post"/i, `${name}: ${tag}`);
    }
  }
  assert.ok(forms > 50);
  assert.match(readFileSync(join(SITES, "_shared/checkout.js"), "utf8"), /'<form class="co-form" method="post"/);
});

test("every script and stylesheet a page loads comes from a host the CSP allows", async () => {
  const csp = await policy();
  for (const { name, html } of pages) {
    const tags = markup(html.replace(/<script\b([^>]*)>/gi, "<x-script$1>"));
    for (const [, src] of tags.matchAll(/<x-script\b[^>]*\ssrc="(https?:[^"]+)"/gi)) assert.ok(allowed(csp["script-src"], src), `${name}: script ${src}`);
    for (const tag of tags.match(/<link\b[^>]*\brel="stylesheet"[^>]*>/gi) || []) {
      const href = tag.match(/\shref="(https?:[^"]+)"/)?.[1];
      if (href) assert.ok(allowed(csp["style-src"], href), `${name}: stylesheet ${href}`);
    }
  }
});
