"""Rebuild the HAZWOPER course catalog data (https://hub.hazwoperosha.us/course-search/catalog/)
from the source spreadsheet ICTrainingUS_reviewed.xlsx. Writes
sites/hub/course-search/catalog/assets/data.js.

Usage (from the repo root; needs `pip install openpyxl`):
    python3 tools/course-search/build_catalog.py /path/to/ICTrainingUS_reviewed.xlsx

This is a FULL regeneration. Afterwards, re-run tools/course-search/merge_b2b_catalog.py and
reapply the manual OSHA 10 / OSHA 30 bundle prices - see tools/course-search/catalog.md.
"""
import json
import os
import sys

import openpyxl

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(ROOT, "sites/hub/course-search/catalog/assets/data.js")


def main():
    if len(sys.argv) != 2:
        raise SystemExit(__doc__)
    wb = openpyxl.load_workbook(sys.argv[1], data_only=True)

    ws = wb["Master Catalog"]
    courses = []
    for i, row in enumerate(ws.iter_rows(min_row=2, values_only=True)):
        if row[0] is None:
            continue
        (category, course_family, course_name, course_type, reg_body, citation,
         industries, duration, msrp, bundle_class, industry_tags, alt_tags) = row[:12]
        tags = [t.strip() for t in (industry_tags or "").split(";") if t.strip()]
        alt = [t.strip() for t in (alt_tags or "").split(";") if t.strip()]
        courses.append({
            "id": i, "category": category, "family": course_family, "name": course_name,
            "type": course_type, "regBody": reg_body, "citation": citation,
            "industries": industries, "duration": duration, "msrp": msrp,
            "bundleClass": bundle_class, "industryTags": tags, "altTags": alt,
        })

    ws = wb["Bundles Overview"]
    bundles = []
    for row in ws.iter_rows(min_row=2, values_only=True):
        if row[0] is None:
            continue
        (btype, bname, scope, total_courses, incl_flat, ala_carte_addons,
         cost_separate, price_tier, bundle_price, savings, ala_carte_terms) = row[:11]
        bundles.append({
            "id": f"{btype}||{bname}", "type": btype, "name": bname, "scope": scope,
            "totalCourses": total_courses, "inclFlat": incl_flat,
            "alaCarteAddons": ala_carte_addons, "costSeparate": cost_separate,
            "priceTier": price_tier, "bundlePrice": bundle_price, "savings": savings,
            "alaCarteTerms": ala_carte_terms,
        })

    ws = wb["Bundle Contents Detail"]
    contents = {}
    for row in ws.iter_rows(min_row=2, values_only=True):
        if row[0] is None:
            continue
        (btype, bname, course_name, category, course_type, duration, msrp, status) = row[:8]
        contents.setdefault(f"{btype}||{bname}", []).append({
            "name": course_name, "category": category, "type": course_type,
            "duration": duration, "msrp": msrp, "status": status,
        })

    industries = sorted({b["name"] for b in bundles if b["type"] == "By Industry"})
    categories = sorted({c["category"] for c in courses})

    with open(OUT, "w") as f:
        f.write("// Auto-generated from ICTrainingUS_reviewed.xlsx - do not hand-edit.\n")
        f.write("const COURSES = " + json.dumps(courses, ensure_ascii=False) + ";\n")
        f.write("const BUNDLES = " + json.dumps(bundles, ensure_ascii=False) + ";\n")
        f.write("const BUNDLE_CONTENTS = " + json.dumps(contents, ensure_ascii=False) + ";\n")
        f.write("const INDUSTRIES = " + json.dumps(industries, ensure_ascii=False) + ";\n")
        f.write("const CATEGORIES = " + json.dumps(categories, ensure_ascii=False) + ";\n")
    print(f"wrote {OUT}: {len(courses)} courses, {len(bundles)} bundles")
    print("Next: re-run merge_b2b_catalog.py and reapply the OSHA 10 / OSHA 30 bundle prices.")


if __name__ == "__main__":
    main()
