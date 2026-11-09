// Builds the course landing sites from content/<name>/ into sites/<name>/, plus the shared course
// catalog at sites/_shared/catalog.js. Run `npm run build` after editing anything in content/
// and commit the result: Cloudflare deploys sites/ as-is, without a build step.
//
// content/<name>/site.mjs   copy, course list, guides and the site's header/footer/home page
// content/<name>/style.css  the site's design (inlined into every page, and copied to sites/<name>/style.css)
// content/<name>/og.png     the site's 1200x630 share image, and apple-touch-icon.png (tools/og.mjs makes both)
// content/catalog.json      every HAZWOPER course: LMS course id, name, list price, duration, citation
// content/dc-catalog.json   data center courses, same fields plus `dc` (copy from datacentertraining.us)
// content/lastmod.json      a hash and date per URL, so sitemap <lastmod> only moves when a page changes
//
// Every page gets: a title and description that fit Google's snippet, a self-referencing canonical,
// Open Graph and Twitter tags, one JSON-LD @graph (the company, the site, the page, breadcrumbs, and the
// course, product, article, list or FAQ on it), inlined CSS, non-blocking fonts and a link to its
// Markdown twin (tools/agents.mjs writes those). Every site gets about, contact and privacy pages,
// llms.txt, robots.txt, a sitemap with <lastmod>, a favicon and the IndexNow key file.
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync, copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { md, esc, money, courseRow, guideCard, defaultShell, header, defaultHome, asyncStylesheet } from "./lib.mjs";
import {
  DOMAIN, INDEXNOW_KEY, ORG, ORG_ID, PHONE, EMAIL, fitTitle, fitDescription, isoDuration, lastmods, sitemapXml,
  robotsTxt, shortHash, minifyCss, mdPath, text, withLegalNav, infoTitle,
} from "./seo.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
// HAZWOPER courses (from hazwoperosha.us) and data center courses (from datacentertraining.us).
// Every course has an LMS course id; the two lists must never share one.
const catalog = ["content/catalog.json", "content/dc-catalog.json"].flatMap((f) => JSON.parse(readFileSync(join(root, f), "utf8")));
const byId = Object.fromEntries(catalog.map((c) => [c.id, c]));

const LABELS = {
  en: {
    home: "Home", courses: "Courses", guides: "Guides", enroll: "Enroll", course: "Course", hours: "Length",
    standard: "Standard", price: "Price", perSeat: "per seat", learn: "What you'll cover", who: "Who it's for",
    related: "Related guides", more: "More courses on this site", allCourses: "All courses", allGuides: "All guides",
    read: "Read guide", notFound: "Page not found", notFoundText: "That page doesn't exist. Try the courses or guides instead.",
    buyNow: "Enroll now", minRead: "min read", certificate: "Certificate of completion included. 100% online, self-paced.",
    guidesIntro: "Plain-language articles for the people who take and assign this training.",
    coursesIntro: "Every course here is online, self-paced and issued with a certificate on completion.",
    call: "Call", menu: "Menu", featured: "Featured on this site", allTrainings: "All trainings", allTrainingsIntro: "Every training available from HAZWOPER OSHA Training, all enrollable here.",
  },
  es: {
    home: "Inicio", courses: "Cursos", guides: "Guías", enroll: "Inscribirse", course: "Curso", hours: "Duración",
    standard: "Norma", price: "Precio", perSeat: "por asiento", learn: "Lo que aprenderá", who: "Para quién es",
    related: "Guías relacionadas", more: "Más cursos", allCourses: "Todos los cursos", allGuides: "Todas las guías",
    read: "Leer guía", notFound: "Página no encontrada", notFoundText: "Esa página no existe. Vea nuestros cursos o guías.",
    buyNow: "Inscríbase ahora", minRead: "min de lectura", certificate: "Incluye certificado al terminar. 100% en línea, a su ritmo.",
    guidesIntro: "Artículos claros para los trabajadores y empleadores que toman esta capacitación.",
    coursesIntro: "Todos los cursos son en línea, a su propio ritmo y con certificado al terminar.",
    call: "Llamar", menu: "Menú", featured: "Cursos destacados", allTrainings: "Todas las capacitaciones", allTrainingsIntro: "Todas las capacitaciones de HAZWOPER OSHA Training. Los cursos se imparten en inglés salvo que se indique lo contrario.",
  },
};

writeCatalog();
// Shared CSS is inlined into every page (no render-blocking stylesheet requests); scripts carry a
// content hash so the Worker can cache them for a year.
const SHARED_CSS = minifyCss(read("sites/_shared/base.css") + "\n" + read("sites/_shared/checkout.css"));
const JS_VERSION = { catalog: shortHash(read("sites/_shared/catalog.js")), checkout: shortHash(read("sites/_shared/checkout.js")) };
const dates = lastmods(join(root, "content/lastmod.json"));
const hosts = new Set();

const names = readdirSync(join(root, "content"), { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
for (const name of names) await buildSite(name);
dates.save(hosts);
console.log(`built ${names.length} sites: ${names.join(", ")}`);

function writeCatalog() {
  const items = Object.fromEntries(catalog.map((c) => [c.id, { id: c.id, name: c.name, price: c.price, duration: c.duration }]));
  write(join(root, "sites/_shared/catalog.js"),
    "// Generated by tools/build.mjs from content/catalog.json - edit that, not this file.\n" +
    "// LMS course id -> course. Checkout sends the id to the hazwoper-osha.com add_order API.\n" +
    `window.HUB_COURSES = ${JSON.stringify(items)};\n`);
}

async function buildSite(name) {
  const site = (await import(pathToFileURL(join(root, "content", name, "site.mjs")).href)).default;
  const host = `${name}.${DOMAIN}`;
  const base = `https://${host}`;
  const lang = site.lang || "en";
  const L = LABELS[lang];
  const T = text(lang);
  const shell = site.shell ? site.shell.bind(site) : (args) => defaultShell(site, args);
  const home = site.home ? site.home.bind(site) : (h) => defaultHome(site, h);
  const bodyClass = [site.bodyClass, site.shell ? "" : "tpl"].filter(Boolean).join(" ");
  const src = join(root, "content", name);
  const out = join(root, "sites", name);
  rmSync(out, { recursive: true, force: true });
  hosts.add(host);

  const css = SHARED_CSS + minifyCss(readFileSync(join(src, "style.css"), "utf8"));
  const ogImage = existsSync(join(src, "og.png")) ? `${base}/og.png` : ORG.logo;
  const touchIcon = existsSync(join(src, "apple-touch-icon.png"));

  const courses = site.courses.map((c) => {
    const cat = byId[c.id];
    if (!cat) throw new Error(`${name}: no course ${c.id} in content/catalog.json`);
    const dc = cat.dc ? { summary: cat.dc.hook, body: cat.dc.description, topics: cat.dc.modules, who: cat.audience } : {};
    // A site that renames a course (espanol) gives its own seoTitle, so the catalog's English one isn't used.
    const seoTitle = c.seoTitle ?? (c.name ? undefined : cat.seoTitle);
    return { ...cat, ...dc, ...c, seoTitle, url: `/courses/${cat.slug}` };
  });
  const guides = site.guides.map((g) => ({ ...g, url: `/guides/${g.slug}`, minutes: Math.max(2, Math.round(g.body.split(/\s+/).length / 220)) }));
  const course = (id) => courses.find((c) => c.id === id) || { ...byId[id], url: null };

  // Helpers handed to the site's own templates.
  const h = {
    L, esc, money, courses, guides, course, total: catalog.length, catalog,
    md: (text) => md(text, h),
    // rel="nofollow": ?buy= only opens the checkout on the same page, so crawlers shouldn't follow it.
    buy: (id, label, cls = "btn") => `<a class="${cls}" rel="nofollow" href="?buy=${id}" data-buy="${id}">${esc(label || `${L.enroll} · ${money(course(id).price)}`)}</a>`,
    courseRow: (c) => courseRow(c, h),
    guideCard: (g) => guideCard(g, h),
    courseLink: (id) => { const c = course(id); return c.url ? `<a href="${c.url}">${esc(c.name)}</a>` : esc(c.name); },
    header: (enrollId) => header(site, h, enrollId),
  };

  const website = { "@type": "WebSite", "@id": `${base}/#website`, url: `${base}/`, name: site.brand, description: site.description, inLanguage: lang, publisher: { "@id": ORG_ID } };
  const crumbsFor = (trail) => trail.length < 2 ? null : {
    "@type": "BreadcrumbList",
    itemListElement: trail.map(([label, path], i) => ({ "@type": "ListItem", position: i + 1, name: label, item: base + path })),
  };

  const sitemap = [];
  // One page. `entities` are the JSON-LD nodes for what the page is about; `crumbs` its breadcrumb trail.
  const page = (path, file, { title, description, body, entities = [], crumbs = [], pageType = "WebPage", type = "website", noindex = false, keywords, webpage = {} }) => {
    const canonical = base + path;
    const breadcrumb = crumbsFor(crumbs);
    const graph = noindex ? [] : [ORG, website, {
      "@type": pageType, "@id": `${canonical}#webpage`, url: canonical, name: title, description, inLanguage: lang,
      isPartOf: { "@id": `${base}/#website` }, publisher: { "@id": ORG_ID },
      primaryImageOfPage: { "@type": "ImageObject", url: ogImage },
      ...(breadcrumb ? { breadcrumb: { "@id": `${canonical}#breadcrumb` } } : {}), ...webpage,
    }, ...(breadcrumb ? [{ ...breadcrumb, "@id": `${canonical}#breadcrumb` }] : []), ...entities];
    if (keywords && graph[1]) graph[1] = { ...website, keywords };
    const ld = graph.length ? `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c")}</script>` : "";
    const fonts = `https://fonts.googleapis.com/css2?${site.fonts}&display=swap`;
    const html = `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${noindex ? `<meta name="robots" content="noindex, follow">` : `<link rel="canonical" href="${canonical}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">`}${keywords ? `\n<meta name="keywords" content="${esc(keywords)}">` : ""}
<meta name="is-agentic-site-type" content="business">
<meta name="theme-color" content="${site.theme}">
<meta property="og:type" content="${type}">
<meta property="og:locale" content="${lang === "es" ? "es_US" : "en_US"}">
<meta property="og:site_name" content="${esc(site.brand)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(site.brand)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${ogImage}">
<link rel="alternate" type="text/markdown" href="${mdPath(path)}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">${touchIcon ? `\n<link rel="apple-touch-icon" href="/apple-touch-icon.png">` : ""}
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
${asyncStylesheet(fonts, { preload: true })}
<style>${css}</style>
${ld}
<script src="/_shared/catalog.js?v=${JS_VERSION.catalog}" defer></script>
<script src="/_shared/checkout.js?v=${JS_VERSION.checkout}" data-site="${name}" data-lang="${lang}" defer></script>
</head>
<body class="${bodyClass}">
${(h.path = path, withLegalNav(shell({ path, body, h }), lang))}
</body>
</html>
`;
    write(join(out, file), html);
    if (!noindex) sitemap.push({ loc: canonical, lastmod: dates.date(canonical, html), title, description });
  };

  const homeCrumb = [L.home, "/"];
  const courseItems = (list) => ({
    "@type": "ItemList", numberOfItems: list.length,
    itemListElement: list.map((c, i) => ({ "@type": "ListItem", position: i + 1, url: base + c.url, name: c.name })),
  });

  page("/", "index.html", {
    title: fitTitle(site.title), description: fitDescription(site.description), body: home(h),
    keywords: [...new Set(courses.map((c) => c.short || c.name))].join(", "),
    entities: [{ ...courseItems(courses), "@id": `${base}/#courses`, name: `${site.brand}: ${L.courses}` }],
  });

  const coursesDesc = fitDescription(site.coursesTagline || L.coursesIntro, site.coursesTagline ? L.coursesIntro : "", L.certificate);
  page("/courses/", "courses/index.html", {
    title: fitTitle(L.courses === "Courses" ? `Online Courses` : L.courses, site.brand), description: coursesDesc, pageType: "CollectionPage",
    crumbs: [homeCrumb, [L.courses, "/courses/"]],
    entities: [{ ...courseItems(courses), "@id": `${base}/courses/#list`, name: L.featured }],
    body: `<section class="page page-list"><header class="page-head"><p class="eyebrow">${esc(site.brand)}</p><h1>${L.courses}</h1><p class="lede">${esc(site.coursesTagline || L.coursesIntro)}</p></header>
<h2 class="list-title">${L.featured}</h2>
<div class="course-list">${courses.map((c) => courseRow(c, h)).join("\n")}</div>
<h2 class="list-title" id="all">${L.allTrainings} (${catalog.length})</h2>
<p class="lede">${L.allTrainingsIntro}</p>
${allTrainings(h)}</section>`,
  });

  for (const c of courses) {
    const related = guides.filter((g) => (g.courses || []).includes(c.id));
    const others = courses.filter((o) => o.id !== c.id);
    const url = base + c.url;
    const faqs = T.faqs(c);
    const offer = { "@type": "Offer", price: c.price.toFixed(2), priceCurrency: "USD", availability: "https://schema.org/InStock", url, seller: { "@id": ORG_ID } };
    const courseLang = /spanish|español/i.test(c.name) ? "es" : "en";
    page(c.url, `courses/${c.slug}.html`, {
      title: fitTitle(c.seoTitle || c.name, site.brand), description: fitDescription(c.summary, ...T.coursePitch(c)), type: "product",
      pageType: "ItemPage", webpage: { mainEntity: { "@id": `${url}#course` } },
      crumbs: [homeCrumb, [L.courses, "/courses/"], [c.short || c.name, c.url]],
      entities: [
        {
          "@type": "Course", "@id": `${url}#course`, name: c.name, description: c.summary, url, courseCode: String(c.id),
          provider: { "@id": ORG_ID }, image: ogImage, inLanguage: courseLang, educationalCredentialAwarded: "Certificate of completion",
          ...(c.topics?.length ? { teaches: c.topics } : {}), ...(c.citation ? { about: c.citation } : {}),
          offers: { ...offer, category: "Paid" },
          hasCourseInstance: { "@type": "CourseInstance", courseMode: "Online", ...(isoDuration(c.duration) ? { courseWorkload: isoDuration(c.duration) } : {}) },
        },
        {
          "@type": "Product", "@id": `${url}#product`, name: c.name, description: c.summary, image: ogImage, sku: String(c.id),
          category: c.category, brand: { "@type": "Brand", name: "HAZWOPER OSHA Training" }, offers: offer,
        },
        { "@type": "FAQPage", "@id": `${url}#faq`, url: `${url}#faq`, name: `${c.name}: ${T.faq}`, isPartOf: { "@id": `${url}#webpage` }, inLanguage: lang,
          mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
      ],
      body: `<article class="page page-course">
<header class="page-head"><p class="eyebrow"><a href="/courses/">${L.courses}</a> / ${L.course} #${c.id}</p><h1>${esc(c.name)}</h1><p class="lede">${esc(c.summary)}</p></header>
<div class="course-layout">
<div class="prose">
${h.md(c.body || c.summary)}
${c.topics?.length ? `<h2>${L.learn}</h2>
<ul class="topics">${c.topics.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
${c.who || c.audience ? `<h2>${L.who}</h2>
<p>${esc(c.who || c.audience)}</p>` : ""}
<section class="faq" id="faq"><h2>${T.faq}</h2>
${faqs.map(([q, a], i) => `<h3 id="faq-${i + 1}">${esc(q)}</h3>\n<p>${esc(a)}</p>`).join("\n")}</section>
${related.length ? `<h2>${L.related}</h2><ul class="related">${related.map((g) => `<li><a href="${g.url}">${esc(g.title)}</a></li>`).join("")}</ul>` : ""}
</div>
<aside class="buy-box">
<p class="buy-price">${money(c.price)} <span>${L.perSeat}</span></p>
<dl><dt>${L.hours}</dt><dd>${esc(c.duration)}</dd>${c.citation ? `<dt>${L.standard}</dt><dd>${esc(c.citation)}</dd>` : ""}<dt>${L.course}</dt><dd>#${c.id}</dd></dl>
${h.buy(c.id, L.buyNow)}
<p class="buy-note">${L.certificate}</p>
</aside>
</div>
${others.length ? `<section class="more"><h2>${L.more}</h2><div class="course-list">${others.map((o) => courseRow(o, h)).join("\n")}</div></section>` : ""}
</article>`,
    });
  }

  {
    page("/guides/", "guides/index.html", {
      title: fitTitle(L.guides === "Guides" ? "Guides and How-Tos" : L.guides, site.brand),
      description: fitDescription(site.guidesTagline || L.guidesIntro, site.guidesTagline ? L.guidesIntro : "", `${guides.length} ${L.guides.toLowerCase()}.`),
      pageType: "CollectionPage", crumbs: [homeCrumb, [L.guides, "/guides/"]],
      entities: [{ "@type": "ItemList", "@id": `${base}/guides/#list`, numberOfItems: guides.length,
        itemListElement: guides.map((g, i) => ({ "@type": "ListItem", position: i + 1, url: base + g.url, name: g.title })) }],
      body: `<section class="page page-list"><header class="page-head"><p class="eyebrow">${esc(site.brand)}</p><h1>${L.guides}</h1><p class="lede">${esc(site.guidesTagline || L.guidesIntro)}</p></header>
<div class="guide-list">${guides.map((g) => guideCard(g, h)).join("\n")}</div></section>`,
    });
  }

  for (const g of guides) {
    const recommended = (g.courses || []).map(course).filter((c) => c.url);
    const url = base + g.url;
    page(g.url, `guides/${g.slug}.html`, {
      title: fitTitle(g.seoTitle || g.title, site.brand), description: fitDescription(g.description, ...T.guidePitch(g, site.brand)), type: "article",
      crumbs: [homeCrumb, [L.guides, "/guides/"], [g.title, g.url]],
      entities: [{ "@type": "Article", "@id": `${url}#article`, headline: g.title.slice(0, 110), description: g.description, image: ogImage,
        datePublished: g.date, dateModified: g.date, author: { "@id": ORG_ID }, publisher: { "@id": ORG_ID },
        mainEntityOfPage: { "@id": `${url}#webpage` }, inLanguage: lang, isPartOf: { "@id": `${base}/#website` } }],
      body: `<article class="page page-guide">
<header class="page-head"><p class="eyebrow"><a href="/guides/">${L.guides}</a> · ${g.minutes} ${L.minRead}</p><h1>${esc(g.title)}</h1><p class="lede">${esc(g.description)}</p></header>
<div class="prose">
${h.md(g.body)}
</div>
${recommended.length ? `<aside class="guide-courses"><h2>${L.courses}</h2><div class="course-list">${recommended.map((c) => courseRow(c, h)).join("\n")}</div></aside>` : ""}
</article>`,
    });
  }

  // About, contact and privacy: the trust pages search engines and AI agents look for before they
  // recommend a business.
  const info = (kind, path, file, h1, description, pageType, lede, inner) => page(path, file, {
    title: infoTitle(kind, h1, site.brand), description: fitDescription(description), pageType,
    crumbs: [homeCrumb, [h1, path]],
    body: `<article class="page page-info"><header class="page-head"><p class="eyebrow">${esc(site.brand)}</p><h1>${esc(h1)}</h1><p class="lede">${esc(lede)}</p></header>
<div class="prose">${inner}</div></article>`,
  });
  info("about", "/about", "about.html", T.aboutH1(site.brand), T.aboutDesc(site.brand), "AboutPage", site.description, T.aboutBody(site, h));
  info("contact", "/contact", "contact.html", T.contactH1(site.brand), T.contactDesc(site.brand), "ContactPage", T.contactDesc(site.brand), T.contactBody(site));
  info("privacy", "/privacy", "privacy.html", T.privacyH1, T.privacyDesc(site.brand), "WebPage", T.privacyDesc(site.brand), T.privacyBody(site, host));

  page("/404", "404.html", {
    title: `${L.notFound} | ${site.brand}`, description: L.notFoundText, noindex: true,
    body: `<section class="page page-404"><header class="page-head"><h1>${L.notFound}</h1><p class="lede">${L.notFoundText}</p></header>
<p><a class="btn" href="/courses/">${L.allCourses}</a> <a class="btn btn-alt" href="/guides/">${L.allGuides}</a></p></section>`,
  });

  write(join(out, "robots.txt"), robotsTxt(base));
  write(join(out, "sitemap.xml"), sitemapXml(sitemap));
  write(join(out, `${INDEXNOW_KEY}.txt`), INDEXNOW_KEY);
  write(join(out, "favicon.svg"), site.icon);
  write(join(out, "llms.txt"), llmsTxt(site, base, h, sitemap));
  copyFileSync(join(src, "style.css"), join(out, "style.css"));
  for (const f of ["og.png", "apple-touch-icon.png"]) if (existsSync(join(src, f))) copyFileSync(join(src, f), join(out, f));
}

// llms.txt (llmstxt.org): what the site is, when an AI agent should use it, and every page with a
// one-line summary. Course lines carry the facts agents get asked for: price, length, regulation.
function llmsTxt(site, base, h, sitemap) {
  const pages = Object.fromEntries(sitemap.map((p) => [p.loc, p]));
  const line = (url, label, note) => `- [${label}](${url})${note ? `: ${note}` : ""}`;
  const names = h.courses.map((c) => c.short || c.name);
  return `# ${site.brand}

> ${site.description}

${site.brand} (${base}/) sells online training from HAZWOPER OSHA Training, LLC (https://hazwoper-osha.com/). Courses are 100% online and self-paced, and each includes a certificate of completion. Prices are per seat; seats for a whole crew can be bought in one checkout. Phone ${PHONE}, email ${EMAIL}.

## When to use this site

- Use it when someone needs ${names.slice(0, 4).join(", ")}${names.length > 4 ? " or related" : ""} training, wants to compare those courses, or needs to know what a regulation requires them to take.
- Each course page lists the length, the price per seat, the regulation it covers, what it teaches and who it's for.
- To enroll, open a course's enroll link below. It opens the checkout on that page; payment is by card through Stripe. For an invoice or purchase order, call ${PHONE} or email ${EMAIL}.
- Every page is also served as Markdown: send \`Accept: text/markdown\`, or add \`.md\` to the path (${base}/index.md).

## Courses

${h.courses.map((c) => line(base + c.url, c.name, `${money(c.price)} per seat, ${c.duration}${c.citation ? `, ${c.citation}` : ""}. ${c.summary} Enroll: ${base}${c.url}?buy=${c.id}`)).join("\n")}
${h.guides.length ? `
## Guides

${h.guides.map((g) => line(base + g.url, g.title, g.description)).join("\n")}
` : ""}
## All trainings

${line(`${base}/courses/#all`, `All ${h.total} trainings`, "every course from HAZWOPER OSHA Training, grouped by category, each with an enroll button")}

## Site

${["/about", "/contact", "/privacy"].map((p) => line(base + p, pages[base + p]?.title || p)).join("\n")}
- [Sitemap](${base}/sitemap.xml)
`;
}

// Every course in the catalog, grouped by category. Courses this site features link to their page.
function allTrainings(h) {
  const groups = new Map();
  for (const c of catalog) {
    if (!groups.has(c.category)) groups.set(c.category, []);
    groups.get(c.category).push(c);
  }
  return [...groups].map(([cat, list]) => `<h3 class="cat-title">${esc(cat)}</h3><div class="course-list all-list">${list.map((c) => {
    const own = h.courses.find((o) => o.id === c.id);
    const name = own ? `<a class="course-row-name" href="${own.url}">${esc(c.name)}</a>` : `<span class="course-row-name">${esc(c.name)}</span>`;
    return `<div class="course-row"><div class="course-row-info">${name}<span class="course-row-meta">${esc(c.duration)} · ${h.L.course} #${c.id}${c.citation ? ` · ${esc(c.citation)}` : ""}</span></div><span class="course-row-price">${money(c.price)}</span>${h.buy(c.id, h.L.enroll, "btn btn-sm")}</div>`;
  }).join("")}</div>`).join("\n");
}

function read(rel) {
  return readFileSync(join(root, rel), "utf8");
}

function write(file, text) {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, text);
}
