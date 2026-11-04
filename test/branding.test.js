import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

// Every site is branded Industrial Certified Training and lives on hazwoperosha.us.
// These checks catch a site copied in from another project that still carries its old name or domain.
const ROOT = new URL("../", import.meta.url).pathname;
const ICT = "Industrial Certified Training";

function files(dir, ext) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) return files(p, ext);
    return ext.test(f) ? [p] : [];
  });
}
const pages = files(join(ROOT, "sites"), /\.html$/).filter((f) => !f.includes("/sites/hub/"));
const text = files(join(ROOT, "sites"), /\.(html|txt|xml|js|css)$/).concat(files(join(ROOT, "content"), /\.(mjs|css)$/), files(join(ROOT, "tools"), /\.mjs$/));
const rel = (f) => f.slice(ROOT.length);

test("no old brand or domain is left anywhere", () => {
  for (const f of text) {
    const s = readFileSync(f, "utf8");
    assert.ok(!s.includes("onlinetrainingcourses"), `${rel(f)} mentions onlinetrainingcourses.us`);
    assert.ok(!s.includes("HAZWOPER OSHA Training"), `${rel(f)} mentions HAZWOPER OSHA Training`);
  }
});

test("every page names Industrial Certified Training as the site and shows its seal", () => {
  for (const f of pages) {
    const s = readFileSync(f, "utf8");
    for (const [, name] of s.matchAll(/<meta property="og:site_name" content="([^"]*)"/g)) assert.equal(name, ICT, rel(f));
    assert.match(s, /\/(_shared|assets)\/ict-logo\.webp/, `${rel(f)} has no ICT logo`);
  }
});

test("every organization in structured data is Industrial Certified Training", () => {
  let orgs = 0;
  const visit = (node, f) => {
    if (Array.isArray(node)) return node.forEach((n) => visit(n, f));
    if (!node || typeof node !== "object") return;
    if (node["@type"] === "Organization") { orgs++; assert.equal(node.name, ICT, rel(f)); }
    Object.values(node).forEach((v) => visit(v, f));
  };
  for (const f of pages) {
    for (const [, json] of readFileSync(f, "utf8").matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) visit(JSON.parse(json), f);
  }
  assert.ok(orgs > 0);
});
