// manufacturing.hazwoperosha.us: HAZWOPER, ERT and waste training for manufacturing plants. ANSI safety-sign look.
export default {
  title: "HAZWOPER & ERT Training for Manufacturing Plants | Industrial Certified Training",
  description: "Emergency response and hazardous waste training for manufacturing plants: in-plant ERT, first responder awareness, incident command, RCRA generator training, spill prevention and contingency planning.",
  theme: "#e11d1d",
  fonts: "family=Archivo:wght@500;600;700;800;900",
  coursesTagline: "Training for every role on the plant's emergency and hazardous waste roster.",
  guidesTagline: "How plants build response teams, map their training and run drills.",

  courses: [
    {
      id: 702, short: "Manufacturing ERT", sign: ["DANGER", "#e11d1d", "#fff"],
      summary: "Training for in-plant emergency response teams under HAZWOPER (q).",
      body: `If your plant expects employees to respond to chemical releases, beyond incidental cleanup, you're running an emergency response team under 29 CFR 1910.120(q). This eight-hour course covers the ERT's role, the plant's emergency response plan and working with the fire department.`,
      topics: ["The plant emergency response plan", "ERT roles and responder levels", "Chemical hazards in manufacturing", "PPE for plant responders", "Defensive containment", "Handing off to outside responders"],
      who: "ERT members, shift leads and emergency coordinators.",
    },
    {
      id: 1099, short: "First Responder Awareness", sign: ["WARNING", "#ff8c00", "#111"],
      summary: "Awareness-level training for operators and staff who may discover a release.",
      body: `Most plant employees will never respond to a release, but many could be the first to see one. Awareness training teaches them to recognize it, get clear and raise the alarm.`,
      topics: ["Recognizing a release", "Identifying the material", "Isolating the area", "Raising the alarm"],
      who: "Operators, maintenance, warehouse and security staff.",
    },
    {
      id: 593, short: "Incident Command", sign: ["DANGER", "#e11d1d", "#fff"],
      summary: "Incident command for shift supervisors and ERT leaders.",
      body: `When a release becomes an emergency, someone takes command. This eight-hour course prepares shift supervisors and ERT leaders to set up incident command and run the response.`,
      topics: ["Incident command system", "Size-up and hazard assessment", "Entry teams and backup", "Safety officer", "Termination and critique"],
      who: "Shift supervisors, ERT captains and emergency coordinators.",
    },
    {
      id: 601, short: "RCRA Generator", sign: ["CAUTION", "#ffd400", "#111"],
      summary: "Hazardous waste generator training for plant waste handlers.",
      body: `Most plants generate hazardous waste: solvents, paint waste, sludges, spent chemicals. This eight-hour course covers the generator rules for the people who handle it.`,
      topics: ["Waste identification", "Containers and labels", "Accumulation time limits", "Inspections and records", "Emergency procedures"],
      who: "Waste handlers, EHS staff, maintenance and production leads.",
    },
    {
      id: 416, short: "Spill Prevention", sign: ["NOTICE", "#1f5fbf", "#fff"],
      summary: "Spill prevention and first response for plant staff.",
      body: `Two hours on preventing spills of oil and chemicals and responding safely to the small ones.`,
      topics: ["Spill causes in plants", "Secondary containment", "Stop, contain, report", "PPE for incidental spills"],
      who: "Operators, maintenance and material handlers.",
    },
    {
      id: 412, short: "Contingency Plan", sign: ["NOTICE", "#1f5fbf", "#fff"],
      summary: "Contingency plans and the emergency coordinator role.",
      body: `For plants that are large quantity generators: what the contingency plan must contain and what the emergency coordinator must do.`,
      topics: ["Plan contents", "Quick reference guide", "Coordinator duties", "Local responder arrangements"],
      who: "EHS managers and emergency coordinators.",
    },
  ],

  guides: [
    {
      slug: "building-an-in-plant-ert",
      title: "Building an in-plant emergency response team",
      description: "What it takes to set up an ERT that meets HAZWOPER (q) and actually works at 2 a.m.",
      date: "2026-10-25",
      courses: [702, 593],
      body: `An in-plant emergency response team (ERT) can stop a small release from becoming a big one. It's also a commitment: once your people respond, HAZWOPER (q) applies.

## Step 1: decide the scope

Write down what the ERT will and won't do. Many plants keep their ERT at the **operations level**: defensive actions from a safe distance, such as closing remote valves, diking and protecting drains, while leaving offensive work to the fire department or a hazmat contractor.

## Step 2: write the emergency response plan

Under 1910.120(q)(2) the plan covers pre-emergency planning, roles and lines of authority, training and communication, recognition and prevention, safe distances and places of refuge, site security, evacuation routes, decon, emergency medical treatment, alerting procedures and critique.

## Step 3: staff every shift

An ERT that only exists on day shift isn't an ERT. Aim for enough trained members on every shift to cover the roles.

## Step 4: train to the level

| Role | Training |
|---|---|
| All employees | Awareness: [[1099]] |
| ERT members (operations level) | [[702]], at least 8 hours or demonstrated competency |
| Shift supervisors and ERT captains | [[593]] |
| Members who'll approach the release (technician level) | 24 hours plus competencies |

## Step 5: equip and drill

PPE matched to your chemicals, monitors, spill supplies and radios. Then drill at least annually and critique each one.

## Step 6: medical surveillance

HAZMAT team members need medical surveillance under 1910.120(f). Plan for it from day one.`,
    },
    {
      slug: "plant-training-map",
      title: "HAZWOPER, HazCom, RCRA or SPCC? A training map for plants",
      description: "Plants answer to several overlapping training rules. Here's how they fit together.",
      date: "2026-10-25",
      courses: [1099, 601, 416],
      body: `A typical manufacturing plant juggles several training requirements that sound alike. Here's what each covers.

## The map

| Rule | Covers | Who |
|---|---|---|
| Hazard Communication (1910.1200) | Chemical hazards at work, labels and SDSs | Every employee exposed to hazardous chemicals |
| HAZWOPER (q) (1910.120(q)) | Emergency response to releases | Anyone expected to respond; awareness for those who may discover a release |
| Emergency Action Plan (1910.38) | Evacuation and alarms | Every employee |
| RCRA generator training (40 CFR 262) | Hazardous waste handling | Hazardous waste personnel |
| SPCC (40 CFR 112.7(f)) | Oil spill prevention | Oil-handling personnel |
| DOT hazmat (49 CFR 172.704) | Shipping hazmat | Anyone who prepares or signs hazmat shipments |

## The common gap

Plants usually do HazCom and evacuation well. The gaps tend to be:

- Operators who are informally expected to "deal with" leaks but have no (q) training
- Waste handlers without documented RCRA training
- The person who signs waste manifests without DOT training

## A practical bundle

- **Everyone:** HazCom, the emergency action plan and [[1099]]
- **Waste handlers:** [[601]]
- **Oil handlers:** [[416]]
- **ERT and shift leads:** [[702]] and [[593]]`,
    },
    {
      slug: "running-a-chemical-spill-drill",
      title: "Running a chemical spill drill at your plant",
      description: "A drill that tests your plan, not just your stopwatch. How to plan, run and critique one.",
      date: "2026-10-25",
      courses: [702, 593],
      body: `A drill is the only way to find out whether your emergency response plan works before you need it.

## Plan

1. **Pick a realistic scenario.** Use a chemical you actually have, in a place it could actually spill, on a shift that's actually short-staffed.
2. **Set objectives.** For example: alarm raised within 2 minutes, area isolated within 5, incident command set up within 10, drains protected within 15.
3. **Assign evaluators** who don't play in the drill.
4. **Tell the fire department** if they'll participate, or if they might hear about it.

## Run

- Start with the discovery: someone "finds" the spill.
- Let it play out. Don't coach unless there's a real safety issue.
- Evaluators log times, decisions and problems.

## What usually goes wrong

| Problem | Typical cause |
|---|---|
| Slow alarm | People aren't sure who to call |
| Responders too close | No one set an isolation distance |
| No clear incident commander | Shift lead didn't take command |
| Drain not protected | Drain covers stored far away |
| Missing SDS | Binder outdated or no electronic access |

## Critique

Hold a short debrief right after, while it's fresh, and a written critique within a week. Assign each fix to a person with a date. 1910.120(q)(2)(xi) lists critique of response and follow-up as part of the plan.

{{buy:702}}`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(702)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div><a class="logo" href="/">${h.logo}</a><p>Emergency response and hazardous waste training for manufacturing from Industrial Certified Training, delivered on hazwoper-osha.com.</p></div>
<div><h4>Courses</h4>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h4>Contact</h4><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    return `<section class="hero"><div class="wrap hero-in">
<div class="sign big"><div class="hd danger"><i aria-hidden="true"></i>DANGER</div><div class="body"><h1>Untrained responders beyond this point</h1></div></div>
<div><p class="hero-lede">If your people respond to chemical releases, OSHA requires training for it. Build your plant's ERT, awareness and hazardous waste training in one place.</p>
<div class="hero-cta">${h.buy(702, "Train your ERT · $149.99")}<a class="btn btn-alt" href="/guides/building-an-in-plant-ert">Build an ERT</a></div></div>
</div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Courses</h2>
<div class="signs">${courses.map((c) => `<article class="sign"><div class="hd" style="background:${c.sign[1]};color:${c.sign[2]}">${c.sign[0]}</div><div class="body"><h3><a href="${c.url}">${esc(c.short)}</a></h3><p>${esc(c.summary)}</p><p class="meta">${esc(c.duration)} · Course #${c.id}</p><div class="sfoot"><b>${money(c.price)}</b>${h.buy(c.id, "Enroll", "btn btn-sm")}</div></div></article>`).join("")}</div>
</div></section>

<section class="sec sec-dark"><div class="wrap">
<h2 class="title">Who needs what</h2>
<div class="roster">
<div><b>Every employee</b><span>First Responder Awareness</span></div>
<div><b>ERT members</b><span>Manufacturing ERT</span></div>
<div><b>Shift leads</b><span>Incident Command</span></div>
<div><b>Waste handlers</b><span>RCRA Generator</span></div>
<div><b>Oil handlers</b><span>Spill Prevention</span></div>
<div><b>Emergency coordinator</b><span>Contingency Plan</span></div>
</div></div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Guides</h2>
<div class="guide-list">${guides.map(h.guideCard).join("")}</div>
</div></section>`;
  },
};
