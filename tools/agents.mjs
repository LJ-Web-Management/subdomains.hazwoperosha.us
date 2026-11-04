// Writes a Markdown twin next to every indexable page in sites/ (and the 404): about.html -> about.md,
// courses/index.html -> courses/index.md. The Worker serves the twin when a request asks for
// Accept: text/markdown, and at the page's URL plus .md, so AI agents read clean text instead of
// HTML (is-agentic.com and acceptmarkdown.com check for this). Run after tools/build.mjs and
// tools/imported.mjs; `npm run build` does.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const DOMAIN = "hazwoperosha.us";
const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"]);
const SKIP = new Set(["script", "style", "svg", "noscript", "template", "iframe", "select", "textarea", "dialog", "nav", "input", "head", "object"]);
const INLINE = new Set(["a", "abbr", "b", "cite", "code", "em", "i", "kbd", "label", "mark", "q", "s", "small", "span", "strong", "sub", "sup", "time", "u", "var", "data", "output", "bdi"]);

// Turns one page into Markdown: YAML front matter (title, description, url), the page's <main>
// content, and a footer with the provider's contact details and the site's sitemap and llms.txt.
export function htmlToMarkdown(html, pageUrl) {
  const attr = (re) => decode((html.match(re) || [])[1] || "").trim();
  const title = attr(/<title>([^<]*)<\/title>/i);
  const description = attr(/<meta name="description" content="([^"]*)"/i);
  const canonical = attr(/<link rel="canonical" href="([^"]+)"/i) || pageUrl;
  const main = (html.match(/<main\b[^>]*>([\s\S]*)<\/main>/i) || html.match(/<body\b[^>]*>([\s\S]*)<\/body>/i) || [, html])[1];
  const body = blocks(parse(main), { url: pageUrl }).join("\n\n");
  const origin = new URL(pageUrl).origin;
  const front = ["---", `title: ${yaml(title)}`, description && `description: ${yaml(description)}`, `url: ${canonical}`, "---"].filter(Boolean).join("\n");
  const foot = `Training is delivered by HAZWOPER OSHA Training, LLC (https://hazwoper-osha.com/). Phone: +1-866-429-6742. Email: info@hazwoper-osha.com.
Site index: [sitemap](${origin}/sitemap.xml) · [llms.txt](${origin}/llms.txt) · [about](${origin}/about) · [contact](${origin}/contact)`;
  return tidy(`${front}\n\n${body}\n\n---\n\n${foot}\n`);
}

// A forgiving HTML parser for the generated pages: a tree of { tag, attrs, children } and text nodes.
function parse(html) {
  const rootNode = { tag: "#root", attrs: {}, children: [] };
  const stack = [rootNode];
  const re = /<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>|<(\/?)([a-zA-Z][\w-]*)((?:\s+[^\s=>"'\/]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?)*)\s*\/?>|([^<]+)|</g;
  let m;
  while ((m = re.exec(html))) {
    const [all, close, rawTag, rawAttrs, textPart] = m;
    if (textPart !== undefined || all === "<") { stack.at(-1).children.push({ text: decode(textPart ?? "<") }); continue; }
    if (!rawTag) continue;
    const tag = rawTag.toLowerCase();
    if (close) {
      const i = stack.findLastIndex((n) => n.tag === tag);
      if (i > 0) stack.length = i;
      continue;
    }
    const node = { tag, attrs: attrs(rawAttrs || ""), children: [] };
    stack.at(-1).children.push(node);
    if (SKIP.has(tag) && !VOID.has(tag)) {
      // Skip the raw contents of script/style/etc. up to the matching close tag.
      const end = html.toLowerCase().indexOf(`</${tag}`, re.lastIndex);
      re.lastIndex = end === -1 ? html.length : html.indexOf(">", end) + 1;
      continue;
    }
    if (!VOID.has(tag)) stack.push(node);
  }
  return rootNode.children;
}

function attrs(s) {
  const out = {};
  for (const m of s.matchAll(/([^\s=>"'\/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) out[m[1].toLowerCase()] = decode(m[2] ?? m[3] ?? m[4] ?? "");
  return out;
}

// Joins rendered children. Two elements that touch (<b>OSHA</b><span>…</span>) get a space between
// them: CSS shows them apart on the page, and run together in text they'd read as one word.
function joinParts(parts) {
  let out = "", prevEl = false;
  for (const [s, el] of parts) {
    if (el && prevEl && s && /\S$/.test(out) && /^\S/.test(s)) out += " ";
    out += s;
    prevEl = el;
  }
  return out;
}

const hidden = (n) => n.tag && (SKIP.has(n.tag) || "hidden" in n.attrs || n.attrs["aria-hidden"] === "true");

// Block-level rendering: returns a list of Markdown blocks.
function blocks(nodes, ctx) {
  const out = [];
  let inline = [];
  const flush = () => { const t = joinParts(inline).replace(/[ \t\r\n]+/g, " ").trim(); if (t) out.push(t); inline = []; };
  for (const n of nodes) {
    if (n.text !== undefined) { inline.push([n.text, false]); continue; }
    if (hidden(n)) continue;
    if (INLINE.has(n.tag) || n.tag === "img" && !onlyChild(n, nodes)) { inline.push([inlineMd(n, ctx), true]); continue; }
    if (n.tag === "br") { inline.push([" ", false]); continue; }
    flush();
    const b = block(n, ctx);
    if (Array.isArray(b)) out.push(...b); else if (b) out.push(b);
  }
  flush();
  return out.filter((b) => b.trim());
}

function onlyChild(n, siblings) {
  return siblings.filter((s) => s.tag || (s.text || "").trim()).length === 1;
}

function block(n, ctx) {
  const t = n.tag;
  if (/^h[1-6]$/.test(t)) {
    const text = plain(n);
    return text ? `${"#".repeat(Number(t[1]))} ${text}` : "";
  }
  if (t === "p" || t === "summary" || t === "figcaption" || t === "legend" || t === "button" || t === "dt") {
    const text = inlineChildren(n, ctx);
    return t === "summary" ? (text ? `**${text}**` : "") : text;
  }
  if (t === "ul" || t === "ol") return list(n, ctx);
  if (t === "blockquote") return blocks(n.children, ctx).join("\n\n").split("\n").map((l) => `> ${l}`.trimEnd()).join("\n");
  if (t === "table") return table(n, ctx);
  if (t === "dl") return dl(n, ctx);
  if (t === "hr") return "---";
  if (t === "pre") return "```\n" + text(n).replace(/\n+$/, "") + "\n```";
  if (t === "img") return n.attrs.alt ? `![${n.attrs.alt}](${abs(n.attrs.src, ctx)})` : "";
  return blocks(n.children, ctx);
}

function list(n, ctx) {
  const ordered = n.tag === "ol";
  let i = Number(n.attrs.start || 1);
  const items = n.children.filter((c) => c.tag === "li" && !hidden(c)).map((li) => {
    const marker = ordered ? `${i++}.` : "-";
    const body = blocks(li.children, ctx).join("\n\n");
    if (!body) return "";
    const pad = " ".repeat(marker.length + 1);
    return marker + " " + body.split("\n").map((l, j) => (j && l ? pad + l : l)).join("\n");
  }).filter(Boolean);
  return items.join("\n");
}

function table(n, ctx) {
  const rows = [];
  const walk = (node) => node.children.forEach((c) => {
    if (!c.tag || hidden(c)) return;
    if (c.tag === "tr") rows.push(c.children.filter((x) => x.tag === "th" || x.tag === "td").map((cell) => inlineChildren(cell, ctx).replace(/\|/g, "\\|")));
    else walk(c);
  });
  walk(n);
  if (!rows.length) return "";
  const width = Math.max(...rows.map((r) => r.length));
  const pad = (r) => [...r, ...Array(width - r.length).fill("")];
  const [head, ...rest] = rows.map(pad);
  return [`| ${head.join(" | ")} |`, `| ${head.map(() => "---").join(" | ")} |`, ...rest.map((r) => `| ${r.join(" | ")} |`)].join("\n");
}

function dl(n, ctx) {
  const lines = [];
  let term = null;
  for (const c of n.children) {
    if (!c.tag || hidden(c)) continue;
    if (c.tag === "dt") term = inlineChildren(c, ctx);
    else if (c.tag === "dd") { lines.push(term ? `- **${term}**: ${inlineChildren(c, ctx)}` : `- ${inlineChildren(c, ctx)}`); term = null; }
    else if (c.tag === "div") lines.push(dl(c, ctx));
  }
  return lines.filter(Boolean).join("\n");
}

function inlineChildren(n, ctx) {
  return joinParts(n.children.map((c) => (c.text !== undefined ? [c.text, false] : [hidden(c) ? "" : inlineMd(c, ctx), true]))).replace(/\s+/g, " ").trim();
}

function inlineMd(n, ctx) {
  if (n.text !== undefined) return n.text;
  if (hidden(n)) return "";
  const t = n.tag;
  if (t === "br") return " ";
  if (t === "img") return n.attrs.alt ? `![${n.attrs.alt}](${abs(n.attrs.src, ctx)})` : "";
  const inner = INLINE.has(t) ? joinParts(n.children.map((c) => [inlineMd(c, ctx), c.text === undefined])) : n.children.map((c) => inlineMd(c, ctx)).join(" ");
  const s = inner.replace(/\s+/g, " ");
  if (t === "a") {
    const href = n.attrs.href;
    const label = s.trim();
    if (!label || !href || /^javascript:/i.test(href)) return s;
    return ` [${label.replace(/[[\]]/g, "")}](${abs(href, ctx)}) `.replace(/^ | $/g, (m) => (/\s$/.test(s) || /^\s/.test(s) ? m : ""));
  }
  if (t === "strong" || t === "b") return s.trim() ? `**${s.trim()}**` : s;
  if (t === "em" || t === "i") return s.trim() ? `*${s.trim()}*` : s;
  if (t === "code" || t === "kbd") return s.trim() ? `\`${s.trim()}\`` : s;
  if (INLINE.has(t)) return s;
  return ` ${s} `;
}

function plain(n) {
  return text(n).replace(/\s+/g, " ").trim();
}

function text(n) {
  if (n.text !== undefined) return n.text;
  if (hidden(n)) return "";
  return n.children.map(text).join(n.tag === "br" ? "\n" : "");
}

function abs(href, ctx) {
  try { return new URL(href, ctx.url).href; } catch { return href; }
}

function tidy(s) {
  return s.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").replace(/ +([,.;:!?)])/g, "$1");
}

function yaml(s) {
  return JSON.stringify(s);
}

function decode(s) {
  return String(s)
    .replace(/&nbsp;/g, " ").replace(/&#8209;/g, "-").replace(/&middot;/g, "·").replace(/&copy;/g, "©").replace(/&rarr;/g, "→").replace(/&mdash;/g, "—").replace(/&ndash;/g, "–")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))).replace(/&#x([\da-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}

// Run over every site when called as a script.
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const sitesDir = join(dirname(fileURLToPath(import.meta.url)), "..", "sites");
  const NAME = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  let count = 0;
  for (const site of readdirSync(sitesDir).filter((n) => NAME.test(n) && n !== "hub")) {
    const dir = join(sitesDir, site);
    for (const file of walk(dir).filter((f) => f.endsWith(".html"))) {
      const rel = "/" + relative(dir, file);
      const html = readFileSync(file, "utf8");
      const is404 = rel === "/404.html";
      if (!is404 && /<meta name="robots" content="[^"]*noindex/i.test(html)) continue;
      const path = rel.replace(/index\.html$/, "").replace(/\.html$/, "");
      writeFileSync(file.replace(/\.html$/, ".md"), htmlToMarkdown(html, `https://${site}.${DOMAIN}${path}`));
      count++;
    }
  }
  console.log(`agents: wrote ${count} Markdown twins`);
}

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((d) => (d.isDirectory() ? walk(join(dir, d.name)) : [join(dir, d.name)]));
}
