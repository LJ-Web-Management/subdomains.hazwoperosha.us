# Landing Page Course Search

Internal tool: which courses are sold on which landing page sites. Static site, no build step,
no dependencies. Served at https://hub.hazwoperosha.us/course-search/landing-pages/ from
`sites/hub/course-search/landing-pages/` in this repo (moved here from the former
`LJ-Web-Management/landingpages-course-search` repo). Same `assets/style.css` base, logo and
favicon as the catalog tool (`catalog.md`). Paths below are relative to that folder unless they
start with `tools/`.

No em dashes (U+2014) in user-visible text or docs - same preference as the sibling repo.

## File map

```
index.html              shell: header stats, sidebar filters, mode toggle, results table/grid, modal
assets/style.css        sibling repo's stylesheet + an "additions" block at the end
assets/app.js           all behavior, one IIFE, vanilla JS
assets/data.js          GENERATED - never hand-edit
tools/course-search/build_landing_pages.py
                        reads this repo's sites/, clones/pulls the other site repos into .sources/,
                        scrapes the live-only sites, writes data.js (npm run course-search)
```

## Data model (`assets/data.js`)

- `SITES`: `{ id, name, url, group, topic, source, courseCount }`. `id` is the host
  (`hazwoperosha.com`, `rcra.hazwoperosha.us`, ...). `group` is `"Main domains"` or
  `"hazwoperosha.us subdomains"`. `topic` for subdomains comes from `SUBDOMAIN_TOPICS` in
  `tools/course-search/build_landing_pages.py` (add new sites there).
- `COURSES`: `{ id, name, altNames, category, duration, citation, priceMin, priceMax, lmsIds,
  siteCount }` - one per unique course after cross-site matching.
- `OFFERS`: `{ courseId, siteId, name, url, price, duration, lmsId }` - one per course listing on a
  site (the join between the two). `name` is the name that site uses.
- `SITE_GROUPS`, `TOPICS`, `CATEGORIES`, `BUILT_ON`.

Cross-site matching is by normalized name (`norm_name` in the generator), not LMS id - see the
section below for why. If two different courses ever collapse into one, tighten `norm_name`/`STOP`
rather than special-casing in `app.js`.

## App behavior (`assets/app.js`)

- Two modes (`state.mode`, persisted in localStorage `lpcs_search_mode_v1`): `courses` and
  `sites`. List/grid view persisted in `lpcs_view_mode_v1`. Filters live in the URL query string.
- Sidebar filters act on listings (`offerPasses`): a course passes if at least one of its
  listings matches site/group/topic/category; a site passes if it matches site/group/topic and,
  when a course or category is chosen, has a matching listing.
- In Courses mode with a site/group/topic filter, the Sites column shows "N of M" and
  non-matching sites are dimmed in the detail list.
- The `[hidden]` vs `display:flex/grid` CSS trap from the sibling repo applies here too - use the
  `:not([hidden])` pattern for anything toggled with `hidden`.

## Testing

`npx wrangler dev` from the repo root, open `http://hub.localhost:8787/course-search/landing-pages/`, then check: search in both modes, each sidebar filter, chips
remove filters, list/grid, row expand + modal, Export CSV, and a 375px-wide viewport.

## What it covers

| Site | Where the data comes from |
|---|---|
| hazwoperosha.com | repo `hazwoperosha.com` - `data/courses.json` |
| hazwoperosha.us | repo `hazwoperosha.us` - `data/courses.json` |
| hazwoperosha.org | repo `hazwoperosha.org` - `data/courses.json` |
| datacentertraining.us | repo `datacentertraining.us` - `api/courses.json` |
| `{subdomain}`.hazwoperosha.us (148 sites) | this repo - each `sites/<sub>/courses/<slug>.html` course page (looked up in `content/catalog.json` / `dc-catalog.json`), or `sites/<sub>/js/config.js` for the imported sites with no course pages |
| confined-space.com, moldtraining.us, excavationtrenchingshoring.com, stormwaterplanning.us | no repo in the org, so scraped from the live site: every top-level page in `sitemap.xml` whose Course JSON-LD points at itself (free lessons under `/free-training/` are skipped) |

A "course" on a site means a paid course with its own landing page on that site. The subdomain
sites' `/courses/` pages also list the full catalog underneath their featured courses; those
catalog listings are not counted.

## Using it

- **Courses** mode: one row per unique course, with how many sites sell it. Expand a row (or
  click a card in Grid view) to see every site, the price and name used there, and a link to the
  course page.
- **Sites** mode: one row per site, with its course count. Expand it to see its courses; click a
  course to see every other site that sells it.
- The search box matches course names/categories/citations in Courses mode, and site domains,
  titles or the names of courses they sell in Sites mode.
- Sidebar filters: **Site**, **Course**, **Site group** (main domains vs subdomains), **Site
  topic** and **Course category**. They combine. Pick a Site in Courses mode to list that
  site's courses; pick a Course in Sites mode to list every site that has it.
- **Export CSV** downloads one row per site-course listing for the current results.
- Filters are kept in the URL, so a filtered view can be shared as a link.

## Regenerating the data

`assets/data.js` is generated - do not hand-edit it. Re-run the generator whenever a site adds,
removes or renames courses, from the repo root:

```bash
npm run course-search
```

It needs only Python 3 and git (no pip packages). It reads the subdomain sites straight from this
repo's `sites/`, clones hazwoperosha.com, hazwoperosha.us, hazwoperosha.org and
datacentertraining.us into `.sources/` (git-ignored) on the first run and `git pull`s them after
that, and re-scrapes the four live sites. Run `python3 tools/course-search/build_landing_pages.py
--help` for `--src DIR` (existing clones) and `--no-fetch` (skip pulling, reuse the last scrape in
`.sources/_live/`). Check the page, then commit `assets/data.js`.

### How the same course is matched across sites

Listings are grouped into one course by a normalized name (lowercased, punctuation and filler
words like "OSHA", "Training", "Online" dropped, and a trailing "- 29 CFR ..." removed), or for
the four live sites by the hazwoper-osha.com store page they link to. So "OSHA Confined Space
Awareness Training" and "Confined Space Awareness Training" are one course; the name each site
uses is shown in the course detail.

LMS course ids are deliberately not used for matching: `hazwoperosha.com/data/lms-ids.json` holds
catalog ids rather than LMS ids, and some imported subdomain sites reuse one LMS id for two
different courses (e.g. 353 is "Competent Person for Confined Spaces" on confined-space.com but
"Competent Person for Fall Protection" on fall-protection.hazwoperosha.us). They are still kept
per listing in `OFFERS[].lmsId`.

### Adding a site

- A new `{subdomain}`.hazwoperosha.us site is picked up automatically on the next run; add it to
  `SUBDOMAIN_TOPICS` in the generator to give it a topic other than HAZWOPER.
- Another site with a repo: add a `collect_*` function in `tools/course-search/build_landing_pages.py` and call it from
  `main()`.
- Another site without a repo: add it to `LIVE_SITES` in `tools/course-search/build_landing_pages.py` (domain and topic).
  This works for sites built like confined-space.com (sitemap + Course JSON-LD on each course page).
