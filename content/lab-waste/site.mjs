// lab-waste.hazwoperosha.us: hazardous waste training for laboratories. Periodic-table tiles.
const SYMBOLS = { 415: ["Sa", "#ffe1d6"], 601: ["Gn", "#d9ecff"], 600: ["Rf", "#e3f7dd"], 580: ["Mf", "#fff3c4"], 602: ["Uw", "#efe2ff"], 412: ["Cp", "#ffe1ec"] };

export default {
  title: "Hazardous Waste Training for Laboratories | Satellite Areas, RCRA, Subpart K | Industrial Certified Training",
  description: "RCRA hazardous waste training for university, research, hospital and industrial labs: satellite accumulation, generator training, refresher, manifests, universal waste and contingency planning.",
  theme: "#14213d",
  fonts: "family=Red+Hat+Display:wght@400;500;700;900&family=Red+Hat+Mono:wght@400;500",
  coursesTagline: "Every element of a compliant lab waste program, one course at a time.",
  guidesTagline: "Practical notes for lab managers, PIs, grad students and EHS staff.",

  courses: [
    {
      id: 415, short: "Satellite Areas",
      summary: "Running satellite accumulation areas in labs under 40 CFR 262.15.",
      body: `Almost every lab waste container is in a satellite accumulation area. This two-hour course covers the rules lab staff need: point of generation, the 55-gallon and acute limits, labels, closed containers and the three-day rule.`,
      topics: ["What counts as the point of generation in a lab", "Volume limits and acute hazardous waste", "Labels and hazard indication", "Keeping containers closed", "Compatibility and secondary containment", "Requesting pickups on time"],
      who: "Researchers, lab techs, grad students and lab managers.",
    },
    {
      id: 601, short: "Generator Training",
      summary: "RCRA hazardous waste generator training for lab and EHS staff.",
      body: `Labs at large quantity generator institutions must train personnel within six months and review it annually. This eight-hour course covers waste determination, containers, labels, storage, inspections and emergencies.`,
      topics: ["Listed and characteristic wastes in labs", "P-listed acute wastes", "Generator categories", "Central accumulation areas", "Inspections and records", "Emergency procedures"],
      who: "Lab managers, EHS staff and waste handlers.",
    },
    {
      id: 600, short: "Generator Refresher",
      summary: "The annual RCRA refresher for lab and EHS staff.",
      body: `A four-hour annual review of generator rules with a focus on the violations inspectors find most often in labs.`,
      topics: ["Waste determination review", "Common lab violations", "Labeling refresher", "Rule updates"],
      who: "Staff who completed generator training.",
    },
    {
      id: 580, short: "Manifest",
      summary: "Preparing and signing hazardous waste manifests for lab pickups.",
      body: `When the waste vendor arrives for a pickup, someone signs the manifest. This two-hour course explains what that signature certifies.`,
      topics: ["The Uniform Hazardous Waste Manifest", "e-Manifest", "Lab packs on the manifest", "Tracking and exception reports"],
      who: "EHS staff and lab managers who sign manifests.",
    },
    {
      id: 602, short: "Universal Waste",
      summary: "Batteries, lamps and mercury devices from labs under 40 CFR 273.",
      body: `Labs generate batteries, lamps and mercury thermometers. Universal waste rules make them easier to manage if handled correctly.`,
      topics: ["Universal waste categories", "Labeling and one-year limit", "Broken lamps and mercury spills"],
      who: "Lab and facilities staff.",
    },
    {
      id: 412, short: "Contingency Plan",
      summary: "Contingency planning and the emergency coordinator role.",
      body: `For institutions that are large quantity generators: contingency plan contents, the quick reference guide and the emergency coordinator's duties.`,
      topics: ["Plan contents", "Quick reference guide", "Emergency coordinator duties", "Arrangements with local responders"],
      who: "EHS managers and emergency coordinators.",
    },
  ],

  guides: [
    {
      slug: "subpart-k-academic-labs",
      title: "Subpart K: the alternative waste rules for academic labs",
      description: "Eligible academic institutions can manage lab waste under 40 CFR 262 Subpart K instead of the satellite rules. Here's what changes.",
      date: "2026-10-25",
      courses: [601, 415],
      body: `Satellite accumulation rules were written for factories, not teaching labs with hundreds of small containers and students who rotate every semester. EPA's answer is **40 CFR Part 262, Subpart K**, an optional set of rules for eligible academic entities.

## Who can use it

Colleges and universities, and teaching hospitals and non-profit research institutes formally affiliated with one. Your state must have adopted Subpart K, and the institution must notify EPA or the state that it's opting in.

## What changes

| Topic | Satellite rules (262.15) | Subpart K |
|---|---|---|
| Who makes the hazardous waste determination | Generator, at the point of generation | A **trained professional**, and it can be made in the lab, at an on-site central accumulation area or at an on-site TSDF |
| Labels in the lab | "Hazardous Waste" plus hazard indication | "Unwanted Material" (or equivalent) plus enough info to identify contents and hazards |
| Removal from the lab | When 55 gallons is reached (3 days) | **At least every 12 months**, or sooner when volume limits are reached |
| Planning | No specific plan | A written **Laboratory Management Plan** |
| Lab clean-outs | No special provision | Special allowance for one clean-out per lab every 12 months |

## Training under Subpart K

Lab workers and students must get training appropriate to their duties, so they understand the rules that apply to them. Trained professionals, typically EHS staff, need RCRA training to make waste determinations.

## Is it worth it?

Many universities find Subpart K fits lab life better. But it requires a solid management plan and trained professionals, and it isn't adopted in every state.

{{buy:601}}`,
    },
    {
      slug: "labeling-lab-waste-containers",
      title: "Labeling lab waste containers: what inspectors want to see",
      description: "The most common lab citation is a label problem. Here's how to get it right.",
      date: "2026-10-25",
      courses: [415],
      body: `Walk into almost any lab and you'll find waste containers labeled "waste," "used acetone" or nothing at all. Under the satellite accumulation rules, those labels aren't enough.

## What the label must have (40 CFR 262.15)

1. The words **"Hazardous Waste"**
2. **An indication of the hazards** of the contents, for example "Flammable," "Corrosive" or "Toxic," a DOT hazard label, a GHS pictogram or an NFPA diamond

## What's smart to add

- The **chemical names** of the contents, written out, not abbreviated or as formulas
- Approximate **percentages**
- The **lab, room and PI name**
- The **date the container became full** (required once excess accumulates)

## Common mistakes

| Mistake | Fix |
|---|---|
| "Waste solvents" | List each solvent by name |
| Chemical formulas only ("EtOH," "DCM") | Spell them out |
| No hazard indication | Add a pictogram or hazard word |
| Label on the cap only | Label the container body |
| Old product label still showing | Deface or remove it |

## Closed means closed

Containers must stay closed except when adding or removing waste. A funnel left in the neck is the most common open-container violation in labs.

## A label your lab can actually use

Most institutions print a standard tag with fill-in fields for contents, hazards and dates. Keep a stack at every satellite area so nobody improvises.

{{buy:415}}`,
    },
    {
      slug: "lab-cleanouts-and-unknown-chemicals",
      title: "Lab clean-outs and unknown chemicals",
      description: "When a researcher leaves or a lab moves, the shelves need clearing. Plan it so it doesn't become an emergency.",
      date: "2026-10-25",
      courses: [601, 580, 412],
      body: `Researchers retire, grants end and buildings get renovated. Every time, someone finds a shelf of old bottles nobody remembers ordering.

## Plan the clean-out

1. **Inventory first.** List everything before anything moves.
2. **Separate the categories:** usable chemicals that can be redistributed, unwanted chemicals that are hazardous waste, universal waste (batteries, lamps, mercury devices) and **unknowns**.
3. **Book your waste vendor early.** Lab packs take planning.
4. **Check generator status.** A big clean-out can push your monthly total into a higher generator category. Subpart K institutions have a specific clean-out allowance.

## Unknowns

An unknown is a container with no readable label. It must be identified before it can be shipped, and testing unknowns is expensive. Prevention is cheaper: label everything and keep inventories current.

## Red-flag chemicals

Stop and call EHS if you find:

- **Old ethers** (diethyl ether, THF) or other peroxide formers past their date
- **Picric acid** that has dried out
- **Bulging, crystallized or corroded** containers
- **Reactive metals** such as sodium or potassium in unknown condition

These may be shock-sensitive or reactive. Don't open or move them. Specialists handle them.

## After the clean-out

Update the inventory, re-label surviving stock and set a schedule to review shelves every year.

{{buy:601}}`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(415)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div><a class="logo" href="/">${h.logo}</a><p>Hazardous waste training for laboratories from Industrial Certified Training, delivered on hazwoper-osha.com.</p></div>
<div><h4>Courses</h4>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h4>Contact</h4><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    const tile = (c) => { const [sym, bg] = SYMBOLS[c.id]; return `<a class="tile" href="${c.url}" style="--t:${bg}"><span class="num">${c.id}</span><b>${sym}</b><span class="nm">${esc(c.short)}</span><span class="pr">${money(c.price)}</span></a>`; };
    return `<section class="hero"><div class="wrap hero-in">
<div>
<p class="hero-call">Questions? Call <a href="tel:+18664296742">(866) 429-6742</a></p>
<h1>Hazardous waste training for labs.</h1>
<p class="hero-lede">Satellite areas, generator rules, manifests and clean-outs. Short courses for everyone who fills a waste container.</p>
<div class="hero-cta">${h.buy(415, "Start with satellite areas · $59.99")}<a class="btn btn-alt" href="/guides/subpart-k-academic-labs">Subpart K explained</a></div>
</div>
</div></section>

<section class="sec"><div class="wrap">
<h2 class="title">The elements</h2>
<div class="course-list">${courses.map(h.courseRow).join("")}</div>
</div></section>

<section class="sec sec-alt"><div class="wrap">
<h2 class="title">Lab notes</h2>
<div class="guide-list">${guides.map(h.guideCard).join("")}</div>
</div></section>`;
  },
};
