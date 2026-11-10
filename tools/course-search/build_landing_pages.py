#!/usr/bin/env python3
"""Build the data for https://hub.hazwoperosha.us/course-search/landing-pages/:
every landing site and every course each site sells. Writes
sites/hub/course-search/landing-pages/assets/data.js.

Usage (from the repo root):
    npm run course-search
    python3 tools/course-search/build_landing_pages.py [--src DIR] [--no-fetch]

--src       folder holding clones of the other site repos (cloned there if missing).
            Defaults to ./.sources (git-ignored).
--no-fetch  skip `git pull` on existing clones and reuse the cached live-site scrape
            in <src>/_live/ instead of downloading it again.

Sources:
  Repos (LJ-Web-Management/...):
    hazwoperosha.com, hazwoperosha.us, hazwoperosha.org   data/courses.json (+ source.json, lms-ids.json)
    this repo (subdomains.hazwoperosha.us)                 sites/<sub>/courses/<slug>.html for course sites,
                                                           sites/<sub>/js/config.js for imported sites
    datacentertraining.us                                  api/courses.json (+ js/config.js for LMS ids)
    subdomains.hazwoperosha.com                            sites/<sub>/index.html Course JSON-LD (one course per site)
  Live sites (no repo in the org, scraped from sitemap.xml + Course JSON-LD):
    confined-space.com, moldtraining.us, excavationtrenchingshoring.com, stormwaterplanning.us

The same course on different sites is matched by a normalized course name (see norm_name), or for
the live sites and the hazwoperosha.com subdomains by the hazwoper-osha.com store page they link to. See tools/course-search/landing-pages.md.
"""
import argparse
import html
import json
import os
import re
import subprocess
import sys
import urllib.request
from datetime import date

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(ROOT, "sites/hub/course-search/landing-pages/assets/data.js")
ORG = "https://github.com/LJ-Web-Management/"
REPOS = ["hazwoperosha.com", "hazwoperosha.us", "hazwoperosha.org", "datacentertraining.us",
         "subdomains.hazwoperosha.com"]
LIVE_SITES = {
    "confined-space.com": "Confined Space",
    "moldtraining.us": "Mold",
    "excavationtrenchingshoring.com": "Excavation & Trenching",
    "stormwaterplanning.us": "Stormwater / SWPPP",
}
UA = "Mozilla/5.0 (compatible; landingpages-course-search/1.0)"


# ---------------------------------------------------------------- helpers

def log(*a):
    print(*a, file=sys.stderr)


def load_json(path):
    with open(path, encoding="utf8") as f:
        return json.load(f)


def read(path):
    with open(path, encoding="utf8") as f:
        return f.read()


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf8", "replace")


def ensure_repo(src, name, pull):
    path = os.path.join(src, name)
    if not os.path.isdir(os.path.join(path, ".git")):
        log(f"cloning {name}")
        subprocess.run(["git", "clone", "-q", "--depth", "1", ORG + name + ".git", path], check=True)
    elif pull:
        log(f"updating {name}")
        subprocess.run(["git", "-C", path, "pull", "-q", "--ff-only"], check=False)
    return path


def page_title(path):
    try:
        m = re.search(r"<title>(.*?)</title>", read(path), re.S | re.I)
    except OSError:
        return None
    return html.unescape(m.group(1)).strip() if m else None


def money(v):
    try:
        n = float(str(v).replace("$", "").replace(",", ""))
        return round(n, 2)
    except (TypeError, ValueError):
        return None


def hours_label(v):
    if v in (None, ""):
        return None
    if isinstance(v, (int, float)):
        return f"{v:g} Hour" + ("" if v == 1 else "s")
    s = str(v).strip()
    m = re.fullmatch(r"PT(\d+(?:\.\d+)?)H", s)
    if m:
        return hours_label(float(m.group(1)))
    m = re.fullmatch(r"(\d+(?:\.\d+)?)\s*hrs?", s, re.I)
    if m:
        return hours_label(float(m.group(1)))
    return s


STOP = {"osha", "training", "course", "courses", "online", "the", "for", "and", "of", "a", "an",
        "program", "in"}


def norm_name(name):
    s = html.unescape(name or "")
    s = re.sub(r"\s+-\s+\d+\s*CFR.*$", "", s)  # "... Training - 29 CFR 1910.120 (e)"
    s = s.lower().replace("&", " and ").replace("/", " ")
    s = re.sub(r"[^a-z0-9 ]+", " ", s)
    s = s.replace("hour", " hour ")
    return " ".join(w for w in s.split() if w not in STOP)


# ---------------------------------------------------------------- collectors
# Each collector appends to SITES and OFFERS.
# site:  {id, name, url, group, topic, source}
# offer: {siteId, name, url, price, duration, category, citation, lmsId, slug}

SITES, OFFERS = [], []


def add_site(**kw):
    kw.setdefault("topic", "")
    SITES.append(kw)


def collect_hazwoperosha(src, repo):
    path = os.path.join(src, repo)
    host = "www." + repo
    url = f"https://{host}/"
    add_site(id=repo, name=page_title(os.path.join(path, "index.html")) or repo, url=url,
             group="Main domains", topic="HAZWOPER", source=f"repo {repo}")
    courses = load_json(os.path.join(path, "data/courses.json"))
    lms = {}
    lms_path = os.path.join(path, "data/lms-ids.json")
    if os.path.exists(lms_path):
        lms = {k: v for k, v in load_json(lms_path).items() if not k.startswith("_")}
    cats = {}
    src_path = os.path.join(path, "data/source.json")
    if os.path.exists(src_path):
        sj = load_json(src_path)
        for c in (sj.get("courses") if isinstance(sj, dict) else sj) or []:
            cats[norm_name(c.get("name"))] = c.get("category")
    for c in courses:
        OFFERS.append(dict(
            siteId=repo, name=c["name"], slug=c["slug"],
            url=f"https://{host}/courses/{c['slug']}/",
            price=money(c.get("price")), duration=hours_label(c.get("duration")),
            citation=c.get("citation"), category=cats.get(norm_name(c["name"])),
            lmsId=lms.get(c["slug"]),
        ))


# Site topics for the hazwoperosha.us subdomains, in priority order: a site takes the first topic whose
# list names it (or whose prefix it starts with); anything unlisted is HAZWOPER. Add new sites here.
SUBDOMAIN_TOPICS = [
    ("Workplace Safety", None, """osha-10-general-industry osha-30-construction construction-safety competent-person
        confined-space drug-alcohol electrical-safety-loto em-385 excavation-trenching
        fall-protection fire-hot-work flagger-traffic-control forklift-equipment
        h2s-gas-detection hazcom-ghs heat-cold-wildfire incident-command mold-remediation
        msha-part-46 ppe-respiratory radiation-safety safety-management scaffolding
        silica-lead-asbestos warehouse-ergonomics workplace-violence healthcare-safety""".split()),
    ("Waste & Environment", None, """rcra rcra-hazardous-waste lab-waste waste-shipping environmental-services spill-response
        spill-prevention stormwater-swppp pfas remediation brownfields hw-technician""".split()),
    ("DOT & Transport", None, """dot-hazmat dot-hazmat-carrier dot-hazmat-function-specific trucking rail cdl-eldt
        lithium-battery-shipping""".split()),
    ("Industries", None, """agriculture ammonia ammonia-refrigeration auto-shops construction demolition
        disaster-recovery federal-sites fire-departments healthcare industrial-cleaning
        landfill manufacturing marine metal-finishing meth-lab-cleanup oil-gas pipeline
        small-business universities utility warehouse water-utilities wildfire-cleanup""".split()),
    ("States & Regions", None, """cal-osha cal-osha-hazwoper cal-tsdf texas gulf-coast new-jersey washington michigan
        state-plans""".split()),
    ("Data Centers", 'dc-', """data-centers dcim pue ups-batteries arc-flash clean-agent lithium-ion raised-floor
        capacity-planning""".split()),
    ("Tools & Study", None, """course-finder refresher-reminder compare glossary ppe-picker practice-quiz exposure-limits
        decon-drill safety-plan-checklist cert-tracker spill-kit-sizer hazwoper-history
        hazwoper-faq site-zones flashcards generator-status saa-labels manifest
        universal-waste placards boom-calculator heat-stress respirator-muc lel-converter
        toolbox-talks emergency-coordinator""".split()),
]


def topic_for(name):
    for label, prefix, sites in SUBDOMAIN_TOPICS:
        if name in sites or (prefix and name.startswith(prefix)):
            return label
    return "HAZWOPER"


def parse_config_courses(js):
    """Pull `var courses = [...]` out of a js/config.js (JSON or JS object literal)."""
    m = re.search(r"var courses\s*=\s*(\[.*?\]);", js, re.S)
    if not m:
        return []
    body = m.group(1)
    try:
        return json.loads(body)
    except ValueError:
        pass
    items = []
    for obj in re.findall(r"\{([^{}]*)\}", body):
        d = {}
        for k, v in re.findall(r"(\w+)\s*:\s*('(?:[^'\\]|\\.)*'|\"(?:[^\"\\]|\\.)*\"|[-\d.]+)", obj):
            d[k] = v[1:-1] if v[0] in "'\"" else float(v) if "." in v else int(v)
        items.append(d)
    return items


def collect_subdomains():
    path = ROOT  # this repo
    catalog = {}
    for f in ("content/catalog.json", "content/dc-catalog.json"):
        p = os.path.join(path, f)
        if os.path.exists(p):
            for c in load_json(p):
                catalog[c["slug"]] = c
    sites_dir = os.path.join(path, "sites")
    for sub in sorted(os.listdir(sites_dir)):
        sdir = os.path.join(sites_dir, sub)
        if sub.startswith("_") or sub in ("hub", "www") or not os.path.isfile(os.path.join(sdir, "index.html")):
            continue
        host = f"{sub}.hazwoperosha.us"
        site_id = host
        title = page_title(os.path.join(sdir, "index.html")) or host
        cdir = os.path.join(sdir, "courses")
        cfg = os.path.join(sdir, "js", "config.js")
        if os.path.isdir(cdir):
            kind = "course site"
        elif os.path.isfile(cfg):
            kind = "imported site"
        else:
            kind = "site"
        add_site(id=site_id, name=title, url=f"https://{host}/", group="hazwoperosha.us subdomains",
                 topic=topic_for(sub), source=f"repo subdomains.hazwoperosha.us ({kind})")
        if os.path.isdir(cdir):
            for f in sorted(os.listdir(cdir)):
                if not f.endswith(".html") or f == "index.html":
                    continue
                slug = f[:-5]
                c = catalog.get(slug)
                if not c:
                    log(f"  warn: {host} course page {slug} not in catalog")
                    c = {"name": page_title(os.path.join(cdir, f)) or slug}
                OFFERS.append(dict(
                    siteId=site_id, name=c["name"], slug=slug, url=f"https://{host}/courses/{slug}",
                    price=money(c.get("price")), duration=hours_label(c.get("duration")),
                    citation=c.get("citation"), category=c.get("category"), lmsId=c.get("lmsId"),
                ))
        elif os.path.isfile(cfg):
            for c in parse_config_courses(read(cfg)):
                OFFERS.append(dict(
                    siteId=site_id, name=c.get("name"), slug=None,
                    url=f"https://{host}/checkout?course={c.get('id')}",
                    price=money(c.get("price")), duration=None, citation=None, category=None,
                    lmsId=c.get("id"),
                ))


# Site topics for the hazwoperosha.com subdomains: the first pattern that matches the subdomain name;
# anything unmatched is Workplace Safety.
COM_SUBDOMAIN_TOPICS = [
    ("States & Regions", r"^cal-"),
    ("DOT & Transport", r"^(dot|cdl)-|lithium.*ship|ship.*lithium"),
    ("Waste & Environment", r"rcra|waste|manifest|spcc|spill|swppp|stormwater"),
    ("HAZWOPER", r"hazwoper|tsd"),
    ("Industries", r"ammonia"),
]


def com_topic_for(name):
    return next((label for label, pattern in COM_SUBDOMAIN_TOPICS if re.search(pattern, name)),
                "Workplace Safety")


def collect_com_subdomains(src):
    """subdomains.hazwoperosha.com: one landing page per course at sites/<sub>/index.html, described
    by the page's Course JSON-LD (name, offer price and hazwoper-osha.com store URL, workload)."""
    repo = "subdomains.hazwoperosha.com"
    sites_dir = os.path.join(src, repo, "sites")
    for sub in sorted(os.listdir(sites_dir)):
        page = os.path.join(sites_dir, sub, "index.html")
        if not os.path.isfile(page):
            continue
        host = f"{sub}.hazwoperosha.com"
        add_site(id=host, name=page_title(page) or host, url=f"https://{host}/",
                 group="hazwoperosha.com subdomains", topic=com_topic_for(sub), source=f"repo {repo}")
        course = next((x for x in ld_courses(read(page)) if "Course" in
                       (x.get("@type") if isinstance(x.get("@type"), list) else [x.get("@type")])), None)
        if not course:
            log(f"  warn: {host} has no Course JSON-LD")
            continue
        offer = course.get("offers") or {}
        offer = (offer[0] if offer else {}) if isinstance(offer, list) else offer
        instance = course.get("hasCourseInstance") or {}
        instance = (instance[0] if instance else {}) if isinstance(instance, list) else instance
        store = re.search(r"hazwoper-osha\.com/online-courses/([a-z0-9-]+)",
                          offer.get("url") or course.get("url") or "")
        OFFERS.append(dict(
            siteId=host, name=html.unescape(course.get("name") or host), slug=sub, url=f"https://{host}/",
            price=money(offer.get("price")),
            duration=hours_label(instance.get("courseWorkload") or course.get("timeRequired")),
            citation=None, category=None, lmsId=None, storeSlug=store.group(1) if store else None,
        ))


def collect_datacenter(src):
    path = os.path.join(src, "datacentertraining.us")
    add_site(id="datacentertraining.us", name=page_title(os.path.join(path, "index.html")) or "datacentertraining.us",
             url="https://datacentertraining.us/", group="Main domains", topic="Data Centers",
             source="repo datacentertraining.us")
    lms = {}
    cfg = os.path.join(path, "js/config.js")
    if os.path.exists(cfg):
        for slug, lid in re.findall(r'slug:\s*"([^"]+)"[^}]*?lmsId:\s*(\d+)', read(cfg)):
            lms[slug] = int(lid)
    for c in load_json(os.path.join(path, "api/courses.json"))["courses"]:
        OFFERS.append(dict(
            siteId="datacentertraining.us", name=c["title"], slug=c["id"], url=c.get("url"),
            price=money(c.get("price_usd")), duration=hours_label(c.get("duration_hours")),
            citation=", ".join(c.get("standards") or []) or None,
            category="Data Center: " + c["category"] if c.get("category") else None,
            lmsId=lms.get(c["id"]),
        ))


def ld_courses(page_html):
    found = []

    def walk(o):
        if isinstance(o, dict):
            t = o.get("@type")
            t = t if isinstance(t, list) else [t]
            if "Course" in t or "Product" in t:
                found.append(o)
            for v in o.values():
                walk(v)
        elif isinstance(o, list):
            for v in o:
                walk(v)

    for m in re.finditer(r'<script[^>]*application/ld\+json[^>]*>(.*?)</script>', page_html, re.S):
        try:
            walk(json.loads(m.group(1)))
        except ValueError:
            pass
    return found


def collect_live(src, refresh):
    cache_dir = os.path.join(src, "_live")
    os.makedirs(cache_dir, exist_ok=True)
    for host, topic in LIVE_SITES.items():
        cache = os.path.join(cache_dir, host + ".json")
        if refresh or not os.path.exists(cache):
            log(f"scraping {host}")
            data = scrape_live(host)
            with open(cache, "w", encoding="utf8") as f:
                json.dump(data, f, indent=1)
        data = load_json(cache)
        add_site(id=host, name=data["title"] or host, url=f"https://{host}/", group="Main domains",
                 topic=topic, source="live site (no repo)")
        # A store page linked from differently named courses on one site is a bundle or category
        # page, not either course's own store page, so it can't match them; they match by name.
        names_by_store = {}
        for c in data["courses"]:
            if c.get("storeSlug"):
                names_by_store.setdefault(c["storeSlug"], set()).add(norm_name(c["name"]))
        for c in data["courses"]:
            offer = dict(siteId=host, **c)
            if len(names_by_store.get(c.get("storeSlug"), ())) > 1:
                offer["storeSlug"] = None
            OFFERS.append(offer)


def scrape_live(host):
    base = f"https://{host}/"
    home = fetch(base)
    title = re.search(r"<title>(.*?)</title>", home, re.S | re.I)
    title = html.unescape(title.group(1)).strip() if title else host
    cfg_courses = []
    try:
        cfg_courses = parse_config_courses(fetch(base + "js/config.js"))
    except Exception as e:  # noqa: BLE001
        log(f"  {host}: no js/config.js ({e})")
    sitemap = fetch(base + "sitemap.xml")
    urls = [u for u in re.findall(r"<loc>([^<]+)</loc>", sitemap)
            if re.fullmatch(re.escape(base) + r"[^/]+/", u)]
    courses = []
    for u in urls:
        if "free-training" in u:
            continue
        try:
            page = fetch(u)
        except Exception as e:  # noqa: BLE001
            log(f"  {u}: {e}")
            continue
        items = ld_courses(page)
        course = next((x for x in items if "Course" in (x.get("@type") if isinstance(x.get("@type"), list) else [x.get("@type")])
                       and (x.get("url") or "").rstrip("/") == u.rstrip("/")), None)
        if not course:
            continue
        name = html.unescape(course.get("name") or "")
        price = None
        for x in items:
            offers = x.get("offers")
            for o in (offers if isinstance(offers, list) else [offers] if offers else []):
                price = price or money(o.get("price"))
        duration = hours_label(course.get("timeRequired"))
        for inst in (course.get("hasCourseInstance") or []) if isinstance(course.get("hasCourseInstance"), list) else [course.get("hasCourseInstance")]:
            if isinstance(inst, dict) and not duration:
                duration = hours_label(inst.get("courseWorkload"))
        store = re.findall(r"hazwoper-osha\.com/online-courses/([a-z0-9-]+)", page)
        courses.append(dict(name=name, slug=u.rstrip("/").rsplit("/", 1)[-1], url=u, price=price,
                            duration=duration, citation=None, category=None, lmsId=None,
                            storeSlug=max(set(store), key=store.count) if store else None))
    # Match config.js course ids (hazwoper-osha.com LMS ids) to pages by name overlap, then price.
    for c in courses:
        words = set(norm_name(c["name"]).split())
        best, score = None, 0
        for k in cfg_courses:
            kw = set(norm_name(k.get("name")).split())
            s = len(words & kw) / max(1, len(kw)) + (0.5 if money(k.get("price")) == c["price"] else 0)
            if s > score:
                best, score = k, s
        if best and score >= 0.75:
            c["lmsId"] = best.get("id")
    return {"title": title, "courses": courses}


# ---------------------------------------------------------------- merge

def build():
    # Union offers into courses: same normalized name, or (live sites) the same hazwoper-osha.com
    # store page. LMS ids are NOT used as a key: hazwoperosha.com's lms-ids.json holds catalog ids,
    # and some imported subdomain sites reuse one LMS id for different courses.
    parent = list(range(len(OFFERS)))

    def find(i):
        while parent[i] != i:
            parent[i] = parent[parent[i]]
            i = parent[i]
        return i

    def union(a, b):
        parent[find(a)] = find(b)

    by_key = {}
    for i, o in enumerate(OFFERS):
        keys = [f"n:{norm_name(o['name'])}"]
        if o.get("storeSlug"):
            keys.append(f"s:{o['storeSlug']}")
        for k in keys:
            if k in by_key:
                union(i, by_key[k])
            else:
                by_key[k] = i

    groups = {}
    for i in range(len(OFFERS)):
        groups.setdefault(find(i), []).append(OFFERS[i])

    site_topic = {x["id"]: x["topic"] for x in SITES}
    courses = []
    for members in groups.values():
        names = {}
        for o in members:
            names[o["name"]] = names.get(o["name"], 0) + 1
        main = sorted(names, key=lambda n: (-names[n], len(n)))[0]

        def first(field):
            vals = [o.get(field) for o in members if o.get(field)]
            return max(set(vals), key=vals.count) if vals else None

        prices = sorted({o["price"] for o in members if o.get("price") is not None})
        courses.append(dict(
            name=main, altNames=sorted(n for n in names if n != main),
            # Courses only on live/imported sites carry no category; fall back to the site's topic.
            category=first("category") or next((site_topic[o["siteId"]] for o in members
                                                 if site_topic.get(o["siteId"])), None),
            duration=first("duration"), citation=first("citation"),
            priceMin=prices[0] if prices else None, priceMax=prices[-1] if prices else None,
            lmsIds=sorted({int(o["lmsId"]) for o in members if o.get("lmsId")}),
            offers=members,
        ))
    courses.sort(key=lambda c: c["name"].lower())

    site_index = {s["id"]: s for s in SITES}
    out_courses, out_offers = [], []
    for cid, c in enumerate(courses):
        for o in c.pop("offers"):
            out_offers.append(dict(courseId=cid, siteId=o["siteId"], name=o["name"], url=o.get("url"),
                                   price=o.get("price"), duration=o.get("duration"), lmsId=o.get("lmsId")))
        c["id"] = cid
        out_courses.append(c)
    for s in SITES:
        s["courseCount"] = len({o["courseId"] for o in out_offers if o["siteId"] == s["id"]})
    for c in out_courses:
        c["siteCount"] = len({o["siteId"] for o in out_offers if o["courseId"] == c["id"]})
    missing = {o["siteId"] for o in out_offers} - set(site_index)
    if missing:
        raise SystemExit(f"offers reference unknown sites: {missing}")
    return out_courses, out_offers


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", default=os.path.join(ROOT, ".sources"))
    ap.add_argument("--no-fetch", action="store_true")
    args = ap.parse_args()
    os.makedirs(args.src, exist_ok=True)
    for r in REPOS:
        ensure_repo(args.src, r, pull=not args.no_fetch)

    for r in ("hazwoperosha.com", "hazwoperosha.us", "hazwoperosha.org"):
        collect_hazwoperosha(args.src, r)
    collect_datacenter(args.src)
    collect_live(args.src, refresh=not args.no_fetch)
    collect_subdomains()
    collect_com_subdomains(args.src)

    courses, offers = build()
    groups = sorted({s["group"] for s in SITES}, key=lambda g: (g != "Main domains", g))
    topics = sorted({s["topic"] for s in SITES if s["topic"]})
    categories = sorted({c["category"] for c in courses if c["category"]})
    out = OUT
    with open(out, "w", encoding="utf8") as f:
        f.write(f"// Auto-generated by tools/course-search/build_landing_pages.py on {date.today().isoformat()} - do not hand-edit.\n")
        for name, val in (("SITES", SITES), ("COURSES", courses), ("OFFERS", offers),
                          ("SITE_GROUPS", groups), ("TOPICS", topics), ("CATEGORIES", categories)):
            f.write(f"const {name} = {json.dumps(val, ensure_ascii=False)};\n")
        f.write(f'const BUILT_ON = "{date.today().isoformat()}";\n')
    log(f"wrote {out}: {len(SITES)} sites, {len(courses)} courses, {len(offers)} site-course listings")


if __name__ == "__main__":
    main()
