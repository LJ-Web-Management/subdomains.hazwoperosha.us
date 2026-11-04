// healthcare.hazwoperosha.us: hazardous waste training for hospitals and clinics. Calm clinical.
export default {
  title: "Hazardous Waste Training for Healthcare | Hospitals, Pharmacies, Clinics | Industrial Certified Training",
  description: "RCRA hazardous waste training for hospitals, clinics, pharmacies and surgery centers: generator training, satellite areas, universal waste, pharmaceutical waste guidance and first responder awareness.",
  theme: "#2bb3a3",
  fonts: "family=Nunito:wght@400;600;700;800",
  coursesTagline: "Short courses for the people who handle hazardous waste across a healthcare facility.",
  guidesTagline: "Plain-language guidance for EHS, pharmacy, environmental services and lab teams.",

  courses: [
    {
      id: 601, short: "RCRA Generator Training",
      summary: "Hazardous waste generator training for hospital EHS, pharmacy, lab and environmental services staff.",
      body: `Hospitals generate solvents, formalin, chemotherapy waste, mercury and more. Large quantity generators must train hazardous waste personnel within six months and review annually. This eight-hour course covers identification, containers, labels, storage and emergencies.`,
      topics: ["Common healthcare hazardous wastes", "Listed and characteristic wastes", "Containers, labels and accumulation", "Central accumulation areas", "Inspections and records", "Emergency procedures"],
      who: "EHS, pharmacy, lab, environmental services and facilities staff.",
    },
    {
      id: 415, short: "Satellite Accumulation",
      summary: "Running satellite accumulation areas in pharmacies, labs and clinical units.",
      body: `Waste containers in pharmacies, path labs and clinical areas are usually satellite accumulation areas. This two-hour course covers labels, limits and closed containers.`,
      topics: ["Point of generation", "Volume limits", "Labels and hazard indication", "Closed containers", "Moving waste to central storage"],
      who: "Pharmacy techs, lab techs and unit staff who fill waste containers.",
    },
    {
      id: 602, short: "Universal Waste",
      summary: "Batteries, lamps, mercury devices and aerosol cans under 40 CFR 273.",
      body: `Healthcare facilities produce lots of universal waste: batteries from devices, fluorescent lamps, mercury equipment and aerosol cans. This two-hour course covers handling, labels and the one-year limit.`,
      topics: ["Universal waste categories", "Labeling and accumulation", "Broken lamps and mercury spills", "Shipping"],
      who: "Facilities, biomed, environmental services and materials management staff.",
    },
    {
      id: 600, short: "Generator Refresher",
      summary: "The annual RCRA refresher for healthcare staff.",
      body: `A four-hour annual review of generator rules for staff who completed initial training.`,
      topics: ["Waste determination review", "Common healthcare violations", "Updates"],
      who: "Staff who completed generator training.",
    },
    {
      id: 1099, short: "First Responder Awareness",
      summary: "Awareness-level training for staff who may discover a chemical release.",
      body: `Security, environmental services and facilities staff are often first to find a chemical spill. This four-hour course trains them to recognize, isolate and report it.`,
      topics: ["Recognizing a release", "Identifying the material", "Securing the area", "Notifying the right people"],
      who: "Security, environmental services and facilities staff.",
    },
    {
      id: 412, short: "Contingency Plan",
      summary: "Contingency plans and emergency coordinator duties for large quantity generator facilities.",
      body: `For hospitals that are large quantity generators: contingency plan contents, the quick reference guide and emergency coordinator duties.`,
      topics: ["Contingency plan contents", "Quick reference guide", "Emergency coordinator", "Coordination with local responders"],
      who: "EHS managers and emergency coordinators.",
    },
  ],

  guides: [
    {
      slug: "hazardous-waste-pharmaceuticals-rule",
      title: "EPA's hazardous waste pharmaceuticals rule, in plain language",
      description: "40 CFR 266 Subpart P changed how healthcare facilities manage pharmaceutical waste. The key points.",
      date: "2026-10-25",
      courses: [601],
      body: `In 2019 EPA published management standards for hazardous waste pharmaceuticals at healthcare facilities and reverse distributors: **40 CFR Part 266, Subpart P**. Where states have adopted it, it replaces the standard generator rules for these wastes.

## The one rule that applies everywhere

**The sewering ban.** Healthcare facilities may not flush or drain hazardous waste pharmaceuticals. This part took effect nationally on August 21, 2019, even in states that hadn't adopted the rest of Subpart P.

## Who it covers

Healthcare facilities such as hospitals, clinics, pharmacies, long-term care facilities and veterinary clinics, and reverse distributors. Facilities that are very small quantity generators can choose whether to use Subpart P for their pharmaceuticals.

## Key points

- **Two streams:** *non-creditable* hazardous waste pharmaceuticals (waste) and *potentially creditable* ones (going to a reverse distributor for manufacturer credit).
- **Accumulation:** non-creditable hazardous waste pharmaceuticals can be kept on site for up to one year.
- **Labels:** containers say "Hazardous Waste Pharmaceuticals."
- **Training:** personnel who manage these wastes must be thoroughly familiar with proper handling and emergency procedures.
- **Nicotine:** FDA-approved over-the-counter nicotine replacement therapies such as patches and gum are no longer P075 acute hazardous waste.

## What to do

1. Check whether your state has adopted Subpart P.
2. Identify which of your pharmaceuticals are hazardous waste. Your pharmacy and waste vendor can help.
3. Train pharmacy, nursing and environmental services staff who handle pharmaceutical waste.
4. Make sure nothing hazardous goes down the drain.

{{buy:601}}`,
    },
    {
      slug: "common-hazardous-wastes-in-hospitals",
      title: "Common hazardous wastes in hospitals, department by department",
      description: "Hazardous waste isn't just in the lab. A walk through where it's generated in a typical hospital.",
      date: "2026-10-25",
      courses: [601, 415, 602],
      body: `When people think of hospital waste, they think of red bags and sharps. Those are regulated medical waste, mostly under state rules. **Hazardous waste** under RCRA is a separate stream, and it shows up all over the building.

## Department by department

| Department | Typical hazardous waste |
|---|---|
| Pharmacy | Certain chemotherapy drugs, warfarin, nicotine products other than OTC replacement therapies, expired hazardous drugs |
| Pathology and histology | Formalin, xylene, alcohols, stains |
| Clinical lab | Solvents, reagents, mercury-containing compounds |
| Radiology | Old fixer and developer solutions, lead aprons and shielding |
| Facilities and maintenance | Paints, solvents, used oil, aerosol cans |
| Biomed | Batteries, mercury devices, circuit boards |
| Environmental services | Some cleaning chemicals, mercury from broken thermometers |
| Everywhere | Fluorescent lamps and batteries (universal waste) |

## Why it matters

Mixing hazardous waste into regulated medical waste or trash is one of the most common healthcare violations, and incinerators for medical waste often aren't permitted for hazardous waste.

## Make it simple for staff

- Put the right container in the right place, labeled clearly.
- Use color-coding: many facilities use black for RCRA hazardous pharmaceuticals, yellow for trace chemo and red for biohazard. Follow your facility's own scheme.
- Train the people who fill containers, not only the people who ship them.

{{buy:415}}`,
    },
    {
      slug: "who-needs-hazardous-waste-training-in-healthcare",
      title: "Who in a healthcare facility needs hazardous waste training?",
      description: "More people than you'd think. A role-by-role guide.",
      date: "2026-10-25",
      courses: [601, 1099, 602],
      body: `RCRA training rules apply to **personnel who handle hazardous waste**, not just EHS. In a hospital that's a long list.

## Role by role

| Role | Suggested training |
|---|---|
| EHS and waste coordinators | [[601]], then [[600]] annually, plus [[412]] if you're an LQG |
| Pharmacists and pharmacy techs | [[601]] or [[415]], plus Subpart P training where adopted |
| Lab and histology techs | [[415]] |
| Environmental services | [[415]] and [[1099]] |
| Facilities, biomed and materials management | [[602]] |
| Security | [[1099]] |
| Anyone who signs a manifest | Generator training plus manifest and DOT training |

## How often

- Large quantity generators: within six months of starting the job, and an annual review.
- Small quantity generators: staff must be thoroughly familiar with handling and emergency procedures. Annual refreshers are a good habit.
- Universal waste: handlers must inform or train employees on handling and emergency procedures.

## Keep records

Inspectors from EPA or your state agency will ask who was trained, when and on what. Certificates filed by role make that a five-minute answer.`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(601)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div><a class="logo" href="/">${h.logo}</a><p>Hazardous waste training for healthcare from Industrial Certified Training, delivered on hazwoper-osha.com.</p></div>
<div><h4>Courses</h4>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h4>Contact</h4><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    const depts = ["Pharmacy", "Pathology", "Clinical lab", "Radiology", "Facilities", "Biomed", "Environmental services", "Security"];
    return `<section class="hero"><div class="wrap hero-in">
<div>
<p class="hero-call">Questions? Call <a href="tel:+18664296742">(866) 429-6742</a></p>
<h1>Hazardous waste training for <span>healthcare.</span></h1>
<p class="hero-lede">Pharmacy waste, lab chemicals, lamps and batteries. Short online courses for every team that touches hazardous waste.</p>
<div class="hero-cta">${h.buy(601, "Start generator training · $89.99")}<a class="btn btn-alt" href="/guides/who-needs-hazardous-waste-training-in-healthcare">Who needs training?</a></div>
</div>
</div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Hazardous waste is in every department</h2>
<div class="depts">${depts.map((d) => `<span>${d}</span>`).join("")}</div>
<p class="center"><a href="/guides/common-hazardous-wastes-in-hospitals">See what each department generates →</a></p>
</div></section>

<section class="sec sec-soft"><div class="wrap">
<h2 class="title">Courses</h2>
<div class="cgrid">${courses.map((c) => `<article class="cc"><span class="ic">+</span><h3><a href="${c.url}">${esc(c.short)}</a></h3><p>${esc(c.summary)}</p><p class="meta">${esc(c.duration)} · Course #${c.id}</p><div class="cc-foot"><b>${money(c.price)}</b>${h.buy(c.id, "Enroll", "btn btn-sm")}</div></article>`).join("")}</div>
</div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Guides</h2>
<div class="guide-list">${guides.map(h.guideCard).join("")}</div>
</div></section>`;
  },
};
