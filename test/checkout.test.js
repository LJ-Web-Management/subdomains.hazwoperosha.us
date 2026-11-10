import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

// Every order must tell hazwoper-osha.com which site it came from, as that site's hostname
// (order_from: "rcra.hazwoperosha.us"). These checks catch a site copied from another one
// that still reports the old site's name.
const SITES = new URL("../sites/", import.meta.url).pathname;
const folders = readdirSync(SITES, { withFileTypes: true })
  .filter((d) => d.isDirectory() && d.name !== "_shared")
  .map((d) => d.name);

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = join(dir, d.name);
    if (d.isDirectory()) return htmlFiles(p);
    return d.name.endsWith(".html") ? [p] : [];
  });
}

test("pages using the shared checkout name their own site", () => {
  let pages = 0;
  for (const site of folders) {
    for (const file of htmlFiles(join(SITES, site))) {
      for (const tag of readFileSync(file, "utf8").match(/<script[^>]*\/_shared\/checkout\.js[^>]*>/g) || []) {
        pages++;
        assert.equal(tag.match(/data-site="([^"]*)"/)?.[1], site, `${file.slice(SITES.length)}: ${tag}`);
      }
    }
  }
  assert.ok(pages > 0);
});

test("the shared checkout reports <site>.hazwoperosha.us", () => {
  const js = readFileSync(join(SITES, "_shared/checkout.js"), "utf8");
  assert.match(js, /var ORDER_FROM = SITE \+ '\.hazwoperosha\.us';/);
  assert.match(js, /order_from: ORDER_FROM/);
});

test("sites with their own checkout report their own hostname", () => {
  let configs = 0;
  for (const site of folders) {
    const config = join(SITES, site, "js/config.js");
    if (!existsSync(config)) continue;
    configs++;
    const orderFrom = readFileSync(config, "utf8").match(/var ORDER_FROM = "([^"]*)";/)?.[1];
    assert.equal(orderFrom, `${site}.hazwoperosha.us`, `sites/${site}/js/config.js`);
  }
  assert.ok(configs > 0);
});

// The catalog's `id` is only a page key (for HAZWOPER courses, a spreadsheet row number). add_order must get
// the LMS course id, or buyers are enrolled in whatever LMS course shares the row number (row 595, the 8-Hour
// Refresher, is LMS course 595, Digger Derrick).
test("the shared checkout sends the LMS course id, not the catalog key", () => {
  const js = readFileSync(join(SITES, "_shared/checkout.js"), "utf8");
  assert.match(js, /course_id: current\.lmsId/);
  assert.doesNotMatch(js, /course_id: current\.id\b/);
});

test("every catalog course says whether it has an LMS id", () => {
  const src = readFileSync(join(SITES, "_shared/catalog.js"), "utf8");
  const courses = JSON.parse(src.slice(src.indexOf("{"), src.lastIndexOf("}") + 1));
  for (const [key, c] of Object.entries(courses)) {
    assert.ok("lmsId" in c, `course ${key} has no lmsId field`);
    assert.ok(c.lmsId === null || Number.isInteger(c.lmsId), `course ${key}: lmsId ${c.lmsId}`);
  }
  // Spot checks against hazwoper-osha.com course pages.
  assert.equal(courses["595"].lmsId, 112, "8-Hour Refresher");
  assert.equal(courses["587"].lmsId, 123, "40-Hour HAZWOPER");
  assert.equal(courses["581"].lmsId, 137, "24-Hour HAZWOPER");
});
