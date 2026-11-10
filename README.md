# Website Hub

Every folder in `sites/` is its own website, served at a subdomain with the same name:

```
sites/johnny/  ->  https://johnny.hazwoperosha.us
sites/tim/     ->  https://tim.hazwoperosha.us
sites/lucy/    ->  https://lucy.hazwoperosha.us
```

To add a site, add a folder with an `index.html` and push. To remove one, delete its folder.
No DNS change is needed either way.

All the sites run as one Cloudflare Worker (`src/index.js`). It reads the first part of the
hostname and serves the matching folder.

## Folder names

- Lowercase letters, numbers and hyphens only (`my-site`, not `My Site`). The name can't start or end with a hyphen.
- `about.html` is served at `/about`, and `docs/index.html` at `/docs/`.
- An optional `404.html` in a site's folder is shown for that site's missing pages.
- `www` is just another folder: `sites/www/` would serve `www.hazwoperosha.us`.
- `sites/hub/sitemap.xml` (written by `tools/hub.mjs`) is a sitemap index of every site's `sitemap.xml`, except `www` and the hub. Submit `https://hub.hazwoperosha.us/sitemap.xml` in Google Search Console under a Domain property for `hazwoperosha.us`, so it may list sitemaps on every subdomain.
- The bare domain (`hazwoperosha.us`) is not served by this repo.

## Analytics

The Worker adds the Google Analytics tag (`G-CSJ7GHDZXW`) and the Microsoft Clarity tag (`z3cea3et53`) before `</head>` on every HTML page it
serves, for every site except the internal hub, so pages never include them themselves. To change the IDs, edit `GA_ID` or `CLARITY_ID` in
`src/index.js`. Both queue their calls at once, so the pageview is kept, but fetch their scripts only on the visitor's first tap,
scroll or key press, or 3.5 seconds after the page loads, so they never slow the first render (PageSpeed counts them otherwise).

## Search engines, PageSpeed and AI agents

`npm run audit` (`tools/audit.mjs`) checks every page in `sites/` for what Ahrefs Site Audit, Google Search Console, PageSpeed and
[is-agentic.com](https://is-agentic.com) report, and exits non-zero on any problem: titles of 20 to 60 characters, descriptions up to
160, one `<h1>` and no skipped heading levels, a canonical on the page's own host, Open Graph and Twitter tags, valid JSON-LD with
the company's address and contact point, alt text, internal links that resolve, sitemaps with `<lastmod>` and only this host's URLs,
`llms.txt`, about/contact/privacy pages, and a Markdown twin for every page. Run it before pushing.

What every site has:

- **Structured data.** One JSON-LD `@graph` per page: HAZWOPER OSHA Training, LLC (address, phone, email, logo, social profiles, the
  same `@id` on all sites), the site, the page and its breadcrumbs, plus `Course`, `Product` and `FAQPage` on course pages, `Article`
  on guides and `ItemList` on lists. Course lengths are ISO 8601 (`PT8H`).
- **Snippets.** Long titles fall back to the name without the brand; a course or guide can set `seoTitle` (in `content/catalog.json`
  or the guide in `site.mjs`) for a title that fits, while its `<h1>` keeps the full name.
- **Share images.** `content/<site>/og.png` (1200x630) and `apple-touch-icon.png`, drawn by `npm run og` (`tools/og.mjs`, needs
  Playwright's Chromium) from the site's brand and color. Run it when you add or rebrand a site, then `npm run build`.
- **Speed.** The site's CSS is inlined, Google Fonts load without blocking, and scripts carry `?v=<hash>`, which the Worker caches for a year.
- **Trust pages.** `/about`, `/contact` and `/privacy`, linked from every footer. The privacy page describes what the site actually
  does: Google Analytics, Clarity, and checkout through Stripe to hazwoper-osha.com.
- **For AI agents.** `llms.txt` with a "when to use this site" section; every page has a Markdown twin (`tools/agents.mjs` writes
  `about.md` next to `about.html`), which the Worker serves for `Accept: text/markdown` (with `Vary: Accept`) and at the page path
  plus `.md`. Missing pages answer agents with the site's `404.md`. Pages declare `<meta name="is-agentic-site-type" content="business">`.
- **Sitemaps.** `<lastmod>` only moves when a page changes: `content/lastmod.json` keeps a hash and date per URL.
- **IndexNow.** Every site serves the key file `9300793dac54ec99fe50a20348f6d857.txt`. After a deploy is live, run
  `node tools/indexnow.mjs` to submit the pages that changed today to Bing and the other IndexNow engines
  (`--since <date>`, `--all` or `--dry-run` for other cases).

## Hub

https://hub.hazwoperosha.us is the Industrial Certified Training (ICT) hub: a small website, styled like a built-in macOS
feature, that leads to every site in `sites/`.

- **Notch search.** A black capsule at the top center grows into a panel (click it, press `⌘K` or `/`). It searches every
  site's name and description; its Face ID–style ring pulses while searching, turns green with a check on a match, and turns
  red with a small shake when nothing matches.
- **Course Finder.** Five onboarding-style cards (welcome, your work, optional keywords, matching ring, results) that rank the
  sites for the visitor's answers. Nothing is sent anywhere.
- **Directory.** A System Settings–style window: category sidebar with counts, search, a sort pop-up, a details switch, and
  grouped inset lists of every site.
- **Menu bar.** ICT logo and links, a status menu (search, finder, directory, call, email, ictraining.us) and a clock.
- `/about`, `/contact`, `/privacy` and a 404 page.

`tools/hub.mjs` writes it from the folders in `sites/` (each site's `<title>` and meta description), and Wrangler runs that
script before every deploy (the `build` block in `wrangler.jsonc`), so new sites appear on their own. The company's sites on
other domains (hazwoper-osha.com, confined-space.com, eldttraining.us and the rest) come from the `EXTERNAL` list in
`tools/hub.mjs`: names and descriptions copied from each site's own title and meta description, filed under their topic's
category (the main store and oshascorm.org, which cover every topic, under "ICT Websites"). Update them there when a site changes. A site's category comes
from the `CATEGORIES` lists in `tools/hub.mjs`; an unlisted site falls back to HAZWOPER, so add new sites to the right list.
The design and script are `tools/hub/hub.css` and `tools/hub/hub.js` (copied with a `?v=<hash>`), and the ICT logo is
`tools/hub/ict-logo.webp`. The hub is still hidden from search engines and untracked: its pages have a `noindex, nofollow` meta
tag, the Worker sends `X-Robots-Tag: noindex, nofollow` and adds no analytics for it, and `npm run audit` skips it.

### Course search (`/course-search/`)

https://hub.hazwoperosha.us/course-search/ runs the two internal course search tools, with a bar at the top to switch
between them:

- `/course-search/catalog/`: the HAZWOPER course catalog ([hazwoperosha-course-search](https://github.com/LJ-Web-Management/hazwoperosha-course-search)).
- `/course-search/landing-pages/`: which landing sites sell which courses ([landingpages-course-search](https://github.com/LJ-Web-Management/landingpages-course-search)).

Both are linked from the hub's menu bar and status menu. They are copies of each tool's `main` branch, made by
`node tools/course-search.mjs` (it clones both repos, copies `index.html` and `assets/`, and adds the switcher bar,
styled by `sites/hub/course-search/switcher.css`). Run it after either tool changes and commit the result; don't edit
the copies by hand. Like the rest of the hub they are noindex and untracked, and the CSP still applies, so neither tool
may use inline `onclick=""` handlers.

## Shared files

`sites/_shared/` is served to every site at `/_shared/` (for example
`https://rcra.hazwoperosha.us/_shared/checkout.js`). It holds the course catalog, the Stripe checkout
and the base styles the course sites use. `_shared` can't be a subdomain, so it is never a site itself.

## Course landing sites

A hundred and nine sites sell hazwoper-osha.com courses, each with its own niche, design, guides and course pages. Every site's
`/courses/` page lists its own featured courses first, then all trainings in the catalog, grouped by category, each with an Enroll button:

| Site | Niche | Course keys (`id` in the catalog, not LMS ids) |
|---|---|---|
| [forty-hour](https://forty-hour.hazwoperosha.us) | OSHA 40-hour HAZWOPER | 587 |
| [refresher](https://refresher.hazwoperosha.us) | Annual 8-hour refreshers | 595, 596, 574, 598 |
| [cal-osha](https://cal-osha.hazwoperosha.us) | Cal/OSHA and California waste | 577, 576, 578 |
| [rcra](https://rcra.hazwoperosha.us) | EPA RCRA generator compliance | 601, 600, 580, 415, 412, 602 |
| [spill-response](https://spill-response.hazwoperosha.us) | Spills, kits and booms | 416, 1056 |
| [supervisor](https://supervisor.hazwoperosha.us) | Supervisors, command, trainers | 597, 593, 596, 1016 |
| [espanol](https://espanol.hazwoperosha.us) | Spanish-language 40-hour | 1100, 1099, 595 |
| [first-responder](https://first-responder.hazwoperosha.us) | Emergency response (q) | 1099, 593, 702, 574 |
| [tsdf](https://tsdf.hazwoperosha.us) | TSD facility operations (p) | 582, 594, 599 |
| [24-hour](https://24-hour.hazwoperosha.us) | 24-hour HAZWOPER, low-exposure workers | 581, 576, 595, 1099 |
| [construction](https://construction.hazwoperosha.us) | Construction on contaminated sites | 581, 597, 595 |
| [oil-gas](https://oil-gas.hazwoperosha.us) | Oil and gas crews | 1056, 416, 595 |
| [remediation](https://remediation.hazwoperosha.us) | Environmental remediation crews | 1056, 595 |
| [lab-waste](https://lab-waste.hazwoperosha.us) | Laboratory hazardous waste | 415, 601, 600, 580, 602, 412 |
| [healthcare](https://healthcare.hazwoperosha.us) | Hospitals, clinics, pharmacies | 601, 415, 602, 600, 1099, 412 |
| [manufacturing](https://manufacturing.hazwoperosha.us) | Plant ERTs and waste | 702, 1099, 593, 601, 416, 412 |
| [ammonia](https://ammonia.hazwoperosha.us) | Ammonia refrigeration | 598, 1056, 593, 1099, 574 |
| [utility](https://utility.hazwoperosha.us) | Gas, pipeline and electric utilities | 1056, 593, 1099, 595, 574 |
| [waste-shipping](https://waste-shipping.hazwoperosha.us) | Shipping hazardous waste (RCRA + DOT) | 580, 601, 600, 602 |
| [ehs-managers](https://ehs-managers.hazwoperosha.us) | Running a HAZWOPER program | 1016, 597, 593, 412, 601 |
| [state-plans](https://state-plans.hazwoperosha.us) | OSHA state-plan states | 595, 577, 576, 578 |
| [crews](https://crews.hazwoperosha.us) | Seats for whole crews | 587, 581, 595, 597, 1016, 1099 |
| [awareness](https://awareness.hazwoperosha.us) | First responder awareness | 1099, 416 |
| [environmental-services](https://environmental-services.hazwoperosha.us) | Field waste technicians | 599, 582, 594, 580 |
| [texas](https://texas.hazwoperosha.us) | Texas (OSHA, TCEQ, RRC) | 587, 581, 595, 601 |
| [gulf-coast](https://gulf-coast.hazwoperosha.us) | Refineries and petrochemical plants | 587, 593, 1056, 702, 595 |
| [new-jersey](https://new-jersey.hazwoperosha.us) | New Jersey (OSHA, PEOSH, NJDEP) | 587, 595, 601, 1099 |
| [washington](https://washington.hazwoperosha.us) | Washington State (WAC 296-843) | 587, 581, 595, 1056 |
| [michigan](https://michigan.hazwoperosha.us) | Michigan (MIOSHA Part 432) | 587, 702, 1099, 601, 595 |
| [disaster-recovery](https://disaster-recovery.hazwoperosha.us) | Disaster cleanup crews | 587, 581, 1099, 416 |
| [brownfields](https://brownfields.hazwoperosha.us) | Brownfield redevelopment | 581, 597, 1056 |
| [landfill](https://landfill.hazwoperosha.us) | Landfills and transfer stations | 1099, 1056, 581, 587, 416 |
| [rail](https://rail.hazwoperosha.us) | Rail hazmat response | 1099, 593, 416, 574 |
| [trucking](https://trucking.hazwoperosha.us) | Hazmat carriers and drivers | 1099, 416, 580 |
| [warehouse](https://warehouse.hazwoperosha.us) | Warehouses and distribution centers | 1099, 416, 602, 601 |
| [fire-departments](https://fire-departments.hazwoperosha.us) | Fire departments | 1099, 593, 574, 1056 |
| [industrial-cleaning](https://industrial-cleaning.hazwoperosha.us) | Industrial cleaning crews | 587, 1056, 416, 595 |
| [demolition](https://demolition.hazwoperosha.us) | Demolition on contaminated sites | 581, 597, 1056 |
| [universities](https://universities.hazwoperosha.us) | College campuses | 415, 601, 600, 602, 1099, 412 |
| [federal-sites](https://federal-sites.hazwoperosha.us) | DoD and DOE cleanup contractors | 587, 597, 593, 1016, 595 |
| [water-utilities](https://water-utilities.hazwoperosha.us) | Water and wastewater utilities | 1099, 1056, 593, 702, 574, 416 |
| [auto-shops](https://auto-shops.hazwoperosha.us) | Auto repair and fleet shops | 601, 415, 602, 416, 1099 |
| [metal-finishing](https://metal-finishing.hazwoperosha.us) | Plating and metal finishing | 601, 600, 415, 702, 1099, 412 |
| [agriculture](https://agriculture.hazwoperosha.us) | Farms and ag retailers | 1099, 416, 598, 1056, 602 |
| [marine](https://marine.hazwoperosha.us) | Marinas, ports and terminals | 416, 1099, 593, 1056 |
| [bilingual](https://bilingual.hazwoperosha.us) | English/Spanish crews | 1100, 587, 597, 595, 1099 |
| [careers](https://careers.hazwoperosha.us) | Starting a career | 587, 581, 599, 595, 1099 |
| [small-business](https://small-business.hazwoperosha.us) | Small businesses | 601, 415, 602, 580, 416, 1099 |
| [data-centers](https://data-centers.hazwoperosha.us) | Data center facilities | 416, 602, 1099, 1056, 601 |
| [course-finder](https://course-finder.hazwoperosha.us) | Tool: question wizard that picks a course | 587, 581, 595, 1099, 582, 601 |
| [refresher-reminder](https://refresher-reminder.hazwoperosha.us) | Tool: renewal reminder (.ics and Google Calendar) | 595, 596, 574, 594, 578 |
| [compare](https://compare.hazwoperosha.us) | Tool: compare up to three courses side by side | 587, 581, 582, 595, 577 |
| [glossary](https://glossary.hazwoperosha.us) | Tool: searchable A–Z glossary | 587, 1099 |
| [ppe-picker](https://ppe-picker.hazwoperosha.us) | Tool: PPE level A–D picker | 587, 597 |
| [practice-quiz](https://practice-quiz.hazwoperosha.us) | Tool: 10-question practice quiz | 587, 595, 1099 |
| [exposure-limits](https://exposure-limits.hazwoperosha.us) | Tool: PEL and IDLH lookup table | 1056, 587 |
| [decon-drill](https://decon-drill.hazwoperosha.us) | Tool: put the decon stations in order | 587 |
| [safety-plan-checklist](https://safety-plan-checklist.hazwoperosha.us) | Tool: printable site safety plan checklist | 597, 596, 1016, 587 |
| [cert-tracker](https://cert-tracker.hazwoperosha.us) | Tool: crew refresher tracker with CSV export | 595, 596, 574, 594, 587 |
| [spill-kit-sizer](https://spill-kit-sizer.hazwoperosha.us) | Tool: spill kit size recommendation | 416, 1099 |
| [hazwoper-history](https://hazwoper-history.hazwoperosha.us) | Tool: timeline of hazardous waste law | 587, 601, 580, 593 |
| [hazwoper-faq](https://hazwoper-faq.hazwoperosha.us) | Tool: searchable FAQ | 587, 581, 595, 1100, 597 |
| [site-zones](https://site-zones.hazwoperosha.us) | Tool: clickable site control zone map | 587, 597 |
| [flashcards](https://flashcards.hazwoperosha.us) | Tool: flip-card study deck | 587, 581, 595 |
| [dc-design](https://dc-design.hazwoperosha.us) | DC: design and planning | 842, 849, 845, 829, 834 |
| [dc-tiers](https://dc-tiers.hazwoperosha.us) | DC: Tier I–IV (tier explorer) | 849, 842, 844, 847 |
| [dc-operations](https://dc-operations.hazwoperosha.us) | DC: operations management | 843, 839, 837, 830, 1097 |
| [dc-security](https://dc-security.hazwoperosha.us) | DC: SOC 2 / ISO 27001 compliance | 848, 828, 855, 833 |
| [dc-power](https://dc-power.hazwoperosha.us) | DC: power systems | 847, 1092, 1098, 840, 1102, 831 |
| [dc-cooling](https://dc-cooling.hazwoperosha.us) | DC: cooling | 841, 836, 851, 832, 838 |
| [dc-disaster-recovery](https://dc-disaster-recovery.hazwoperosha.us) | DC: disaster recovery and continuity | 844, 880, 837, 1098 |
| [dc-commissioning](https://dc-commissioning.hazwoperosha.us) | DC: commissioning L1–L5 (level stepper) | 845, 842, 840, 835 |
| [dc-bms](https://dc-bms.hazwoperosha.us) | DC: BMS, BAS and monitoring | 846, 1104, 830, 832 |
| [dc-hvac](https://dc-hvac.hazwoperosha.us) | DC: HVAC and mechanical technicians | 836, 838, 851, 1096 |
| [ups-batteries](https://ups-batteries.hazwoperosha.us) | DC: UPS and batteries (runtime estimator) | 857, 1102, 840, 1084, 1021 |
| [dc-fiber](https://dc-fiber.hazwoperosha.us) | DC: fiber and cabling | 834, 829, 830, 855 |
| [dc-generators](https://dc-generators.hazwoperosha.us) | DC: generators (fuel runtime estimator) | 835, 1098, 853, 416 |
| [pue](https://pue.hazwoperosha.us) | DC: energy efficiency (PUE calculator) | 832, 841, 846, 830 |
| [capacity-planning](https://capacity-planning.hazwoperosha.us) | DC: capacity planning (rack load calculator) | 829, 842, 843, 1092, 830 |
| [dc-maintenance](https://dc-maintenance.hazwoperosha.us) | DC: maintenance programs | 839, 838, 1097, 1096, 1101 |
| [dc-compliance](https://dc-compliance.hazwoperosha.us) | DC: environmental compliance | 833, 851, 416, 602, 601 |
| [dc-incident-response](https://dc-incident-response.hazwoperosha.us) | DC: incident and emergency response | 837, 853, 1021, 854, 1099 |
| [dcim](https://dcim.hazwoperosha.us) | DC: DCIM platforms | 830, 846, 843, 829 |
| [arc-flash](https://arc-flash.hazwoperosha.us) | DC: arc flash, NFPA 70E (PPE category explorer) | 850, 852, 831, 847 |
| [clean-agent](https://clean-agent.hazwoperosha.us) | DC: clean agent fire suppression | 854, 853, 837, 1099 |
| [lithium-ion](https://lithium-ion.hazwoperosha.us) | DC: lithium-ion thermal runaway (stage explorer) | 1021, 857, 1084, 602 |
| [raised-floor](https://raised-floor.hazwoperosha.us) | DC: raised floor and ergonomics | 856, 858, 852, 855 |
| [dc-access-control](https://dc-access-control.hazwoperosha.us) | DC: physical security and access | 828, 855, 848 |
| [dc-careers](https://dc-careers.hazwoperosha.us) | DC: career tracks (clickable track map) | 852, 856, 858, 855, 843 |
| [generator-status](https://generator-status.hazwoperosha.us) | Tool: VSQG/SQG/LQG calculator | 601, 600, 415, 412, 580 |
| [saa-labels](https://saa-labels.hazwoperosha.us) | Tool: hazardous waste label maker (SAA) | 415, 601, 602, 580 |
| [manifest](https://manifest.hazwoperosha.us) | Tool: manifest box-by-box explainer | 580, 601, 600 |
| [universal-waste](https://universal-waste.hazwoperosha.us) | Tool: universal waste sorting game | 602, 601, 415 |
| [placards](https://placards.hazwoperosha.us) | Tool: DOT hazard class placard explorer | 580, 1099 |
| [boom-calculator](https://boom-calculator.hazwoperosha.us) | Tool: spill boom length calculator | 416 |
| [heat-stress](https://heat-stress.hazwoperosha.us) | Tool: heat index for crews in PPE | 587, 597, 595 |
| [respirator-muc](https://respirator-muc.hazwoperosha.us) | Tool: respirator APF / MUC calculator | 1056, 587 |
| [lel-converter](https://lel-converter.hazwoperosha.us) | Tool: %LEL to ppm converter | 1056, 587 |
| [toolbox-talks](https://toolbox-talks.hazwoperosha.us) | Tool: printable toolbox talks | 595, 597, 596, 587 |
| [emergency-coordinator](https://emergency-coordinator.hazwoperosha.us) | Tool: contingency plan quick reference guide builder | 412, 601, 600, 1099 |
| [cal-tsdf](https://cal-tsdf.hazwoperosha.us) | California TSDF workers (Cal/OSHA) | 577, 578 |
| [train-the-trainer](https://train-the-trainer.hazwoperosha.us) | HAZWOPER instructors | 1016, 587, 597, 595 |
| [pipeline](https://pipeline.hazwoperosha.us) | Pipeline and utility emergency response | 593, 574, 1056 |
| [hw-technician](https://hw-technician.hazwoperosha.us) | Hazardous waste technicians and lab packers | 599, 580, 601 |
| [veterans](https://veterans.hazwoperosha.us) | Veterans entering HAZWOPER careers | 587, 593, 1016, 597 |
| [staffing-agencies](https://staffing-agencies.hazwoperosha.us) | Staffing agencies placing temps | 587, 581, 595, 1099, 582 |
| [wildfire-cleanup](https://wildfire-cleanup.hazwoperosha.us) | Wildfire debris and HHW cleanup | 587, 581, 1099 |
| [meth-lab-cleanup](https://meth-lab-cleanup.hazwoperosha.us) | Clandestine drug lab remediation | 587, 595 |
| [pfas](https://pfas.hazwoperosha.us) | PFAS and AFFF remediation | 587, 595 |

They're generated. Edit the sources, then rebuild and commit the output:

```
content/catalog.json        every HAZWOPER course: catalog key (id), LMS course id (lmsId), name, LMS price, length, citation, category
content/dc-catalog.json     data center courses from the datacentertraining.us repo (js/config.js), same fields plus `dc`
content/<site>/site.mjs     the site's copy, course list, guides, header/footer and home page
content/<site>/style.css    the site's design (inlined into every page)
content/<site>/og.png       the share image and apple-touch-icon.png (npm run og draws both)
content/lastmod.json        a hash and date per URL, for sitemap <lastmod>
tools/build.mjs             writes sites/<site>/ and sites/_shared/catalog.js
tools/imported.mjs          fixes the imported training sites (below)
tools/agents.mjs            writes the Markdown twin of every page
tools/hub.mjs               writes the hub and the sitemap index
```

```sh
npm run build
```

To add a course site, copy a folder in `content/`, change it and run the build. A site can define its own
`shell()` and `home()`, or leave them out and set `hero` to use the default header, footer and home
page in `tools/lib.mjs` (most sites from `texas` onward do this). Its `style.css` gives it its look. Course prices and
names come from `content/catalog.json`, which was taken from the hazwoperosha.us repo
(`data/source.json` and `data/lms-ids.json`).

### Course keys and LMS ids

Each course has two numbers:

- `id` is the catalog key. Pages, `site.mjs` course lists, `[[id]]` links, `h.buy(id)` and `?buy=<id>` use it.
  For HAZWOPER courses it is the row number in the ICTrainingUS master spreadsheet. **It is not an LMS id.**
- `lmsId` is the hazwoper-osha.com LMS course id: the `course_id` of the course's page on hazwoper-osha.com
  (`var cat = {... "course_id": ...}`) and the `data-id` of its add-to-cart button. Checkout sends this to
  `add_order`, and pages show it as "Course #". For data center courses it equals `id`.

The HAZWOPER catalog originally used the spreadsheet row numbers as LMS ids, so orders enrolled buyers in
whatever LMS course had that number (for example, row 595, the 8-Hour Refresher, is LMS course 595, Digger
Derrick Operator Certification). On 2026-11-10 every course was checked against hazwoper-osha.com and given
its real `lmsId`, and `price` was set to the LMS price, since the LMS sets the amount charged.

Sixteen courses had no match on hazwoper-osha.com (no page under their slug or name, and not in the
/online-courses catalog), so they were removed from the catalog and every site on 2026-11-10: EPA RCRA/DOT
Combined (403), the two spill-equipment courses (478, 479), Cal/OSHA TSDF RCRA and its refresher (575, 579),
the four micro-modules (583-586), the five 40-hour industry tracks (588-592), the State-Plan Refresher (900)
and Cal/OSHA RCRA (1051). The micro-modules site, which sold only those courses, was deleted. To bring a course
back, find its page on hazwoper-osha.com and add it to the catalog with that `lmsId` and price. Checkout still
treats a course with `"lmsId": null` as enroll-by-request (phone or email), never by card.

Two data center courses are still missing from `dc-catalog.json`: Facility Management Fundamentals (LMS 1099)
and Generator Fundamentals (LMS 1100). They were left out because the HAZWOPER keys 1099 and 1100 were taken
for LMS ids, but those keys are spreadsheet rows, so the LMS ids are probably right. To add them, give each
an unused key as `id` and the real number as `lmsId`.

### Imported training sites

Thirty-nine sites (`cdl-eldt`, `hazwoper`, `scaffolding` and the rest without a `content/` folder) were copied from the
onlinetrainingcourses generator ("generated by scripts/generate.mjs" in their pages). They were built for
`*.onlinetrainingcourses.us`, a domain that doesn't exist, so `tools/imported.mjs` rewrites their canonicals, sitemaps, JSON-LD
and `llms.txt` to the `hazwoperosha.us` subdomain each is served from, removes their own Google Analytics tag (the Worker adds
ours), fills in the company's JSON-LD, adds about/contact/privacy pages and agent hints. It runs in `npm run build` and is safe
to run again after a fresh copy. It doesn't touch `js/config.js` or `js/checkout.js`; see Checkout for `ORDER_FROM`.

### Checkout

Any element with `data-buy="<course key>"` opens the checkout dialog
(`sites/_shared/checkout.js`), and `?buy=<id>` opens it on page load. It works like the
hazwoperosha.us checkout: Stripe.js turns the card into a PaymentMethod, then the dialog calls the
hazwoper-osha.com `add_new_user` and `add_order` APIs with the course's `lmsId` and seat count (a course
with no `lmsId` shows an enrollment request instead). Orders are
tagged with the hostname of the site the sale came from, `order_from: <site>.hazwoperosha.us`, for
example `rcra.hazwoperosha.us`.

The 39 sites with their own `checkout.html` (for example `hazwoper`, `osha-30-construction`) use their
own `js/checkout.js` and set `ORDER_FROM` in `js/config.js` to the same hostname. If you change a
site's `config.js`, update the `config.js?v=` hash in its `checkout.html` (the first 10 hex characters
of the file's SHA-256) so browsers fetch the new file. `npm test` checks that every site reports its
own hostname.

## One-time setup

1. Make sure hazwoperosha.us is on Cloudflare (its nameservers point to Cloudflare and the domain shows **Active**).
2. In Cloudflare DNS for hazwoperosha.us, add a wildcard record:

   | Type | Name | Content | Proxy |
   |------|------|---------|-------|
   | AAAA | `*`  | `100::` | Proxied (orange cloud) |

   `100::` is a placeholder address. The Worker answers every request, so nothing ever reaches it.
   Cloudflare's free certificate covers `*.hazwoperosha.us`, so HTTPS works for every new folder automatically.
3. Go to **Workers & Pages → Create → Import a repository**, pick this repo, and use:
   - Build command: *(leave empty)*
   - Deploy command: `npx wrangler deploy`
   - Production branch: `main`

   Every push to `main` now redeploys all the sites. Pushes to other branches only build a preview
   (`wrangler preview`, enabled by the `previews` block in `wrangler.jsonc`) and never change the live sites.

### Existing subdomains

A DNS record with a specific name (like `mail` or `shop`) always wins over the `*` record:

- If it's **DNS only** (grey cloud), it keeps working as before.
- If it's **Proxied** (orange cloud), the Worker route catches it and returns 404, unless there's a folder with that name. On hazwoperosha.us this includes `www` while it points to GitHub Pages: keep it DNS only. Make such records DNS only, or add a route for that hostname with no Worker under **Workers Routes** in the Cloudflare dashboard.

## Working locally

```sh
npm test                                           # routing tests
npm run build && npm run audit                     # rebuild every site, then check them all
npx wrangler dev --local-upstream tim.hazwoperosha.us      # preview sites/tim at http://localhost:8787
```

Locally, Wrangler doesn't pass your real hostname through, so `--local-upstream` picks which site to preview.
