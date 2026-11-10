// first-responder.hazwoperosha.us: HAZWOPER emergency response under 1910.120(q). Dark tactical / HUD.
export default {
  brand: "FirstResponse",
  title: "HAZWOPER Emergency Response Training | First Responder, Incident Command, ERT | FirstResponse",
  description: "HAZWOPER emergency response training under 29 CFR 1910.120(q): first responder awareness, incident command, manufacturing ERT, 40-hour fire/hazmat and responder refresher.",
  theme: "#0a0b0d",
  fonts: "family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#0a0b0d"/><path d="M16 4l11 6v8c0 6-5 9-11 10C10 27 5 24 5 18v-8z" fill="none" stroke="#ff2d2d" stroke-width="2.5"/><circle cx="16" cy="16" r="3" fill="#ff2d2d"/></svg>`,
  coursesTagline: "Training for every level of the response, from the person who spots the release to the person in command.",
  guidesTagline: "Briefings on responder levels, emergency plans and where incidental spills end.",

  courses: [
    {
      id: 1099, short: "Awareness Level",
      summary: "First responder awareness level: recognize the release, secure the area, call it in.",
      body: `Under 29 CFR 1910.120(q)(6)(i), first responders at the awareness level are people likely to witness or discover a hazardous substance release. Their job is to start the response by notifying the right people, and then **take no further action**. This four-hour course trains them to recognize a release, protect themselves and others and make the call.`,
      topics: ["What hazardous substances are and the risks they pose", "Recognizing that a release is happening", "Identifying materials with placards, labels and the ERG", "Your role in the employer's emergency response plan", "Securing the area and isolating people", "Notifying the right people, fast"],
      who: "Security officers, warehouse and plant staff, drivers and anyone who may discover a release.",
    },
    {
      id: 593, short: "Incident Command",
      summary: "Training for the person who takes charge under 1910.120(q)(3).",
      body: `The senior emergency response official to arrive becomes the individual in charge of a site-specific incident command system. This eight-hour course trains that person to set up command, size up the hazards, assign roles and run a safe response.`,
      topics: ["ICS structure and roles", "Size-up and hazard identification", "Choosing PPE and entry teams", "The buddy system and backup personnel", "Safety officer authority", "Decon, termination and critique"],
      who: "Shift supervisors, hazmat team leaders, fire officers and plant emergency coordinators.",
    },
    {
      id: 702, short: "Manufacturing ERT",
      summary: "Training for in-plant emergency response teams at manufacturing facilities.",
      body: `Many plants keep their own emergency response team for chemical releases. This eight-hour course covers the ERT's role under HAZWOPER (q), working with the plant's emergency response plan and handing off to the fire department.`,
      topics: ["The plant emergency response plan", "ERT roles and responder levels", "Chemical hazards common in manufacturing", "PPE for plant responders", "Containment and control at the operations level", "Coordinating with outside responders"],
      who: "Members of in-plant emergency response teams and their coordinators.",
    },
    {
      id: 589, short: "40 Hr Fire / Hazmat",
      summary: "The full 40-hour HAZWOPER for fire departments and hazmat teams who also do cleanup.",
      body: `Teams whose work goes past the emergency into post-emergency cleanup need the 40-hour HAZWOPER under 1910.120(e). This track is written for firefighters and hazmat technicians.`,
      topics: ["Emergency response vs post-emergency cleanup", "Hazmat branch operations", "Chemical protective clothing and SCBA", "Detection and monitoring", "Technical and mass decon", "Site control"],
      who: "Firefighters, hazmat technicians and emergency response contractors.",
    },
    {
      id: 574, short: "Responder Refresher",
      summary: "The annual refresher for responders and incident commanders.",
      body: `Responders need annual refresher training of enough content and length to keep their competencies, or must demonstrate competency each year, under 1910.120(q)(8). This eight-hour course covers it.`,
      topics: ["Incident command review", "Responder level duties and limits", "PPE and monitoring review", "Decon review", "Recent incident lessons learned"],
      who: "Responders at any level and incident commanders who need their yearly refresher.",
    },
  ],

  guides: [
    {
      slug: "five-levels-of-hazwoper-responders",
      title: "The five levels of HAZWOPER emergency responders",
      description: "From awareness to incident commander: what each level does, what it may not do and the minimum training.",
      date: "2026-10-25",
      courses: [1099, 593, 574],
      body: `29 CFR 1910.120(q)(6) sorts emergency responders by **what they're expected to do**, not by job title. Assign people to a level based on their role in your emergency response plan, then train them for it.

## The levels

| Level | Role | Minimum training |
|---|---|---|
| First responder, awareness | Discovers the release, notifies and takes no further action | Enough training or demonstrated competency to do that role |
| First responder, operations | Protects people, property and the environment from a safe distance, defensively, without trying to stop the release | 8 hours, or demonstrated competency |
| Hazardous materials technician | Approaches the point of release to plug, patch or stop it | 24 hours at operations-level content, plus listed competencies |
| Hazardous materials specialist | Supports technicians with specific knowledge of substances | 24 hours at technician-level content, plus competencies |
| On-scene incident commander | Takes control of the incident above the awareness level | 24 hours at operations-level content, plus listed competencies |

## Awareness: the most common, and most misunderstood

Awareness-level responders don't contain, absorb or stop anything. They **recognize, isolate and notify**. If your security guard is expected to throw absorbent on a leaking drum, they aren't awareness level anymore. Either train them to operations level, or change the plan.

## Competency, not just hours

Each level comes with competencies the employer must be able to show. For example, an awareness responder must understand what hazardous substances are, recognize their presence, identify them if possible, understand their role in the plan and know how to notify. Certificates prove hours. Drills prove competency.

## Every year

Under (q)(8), responders need annual refresher training of enough content and length to keep their competencies, or a yearly demonstration of competency. Keep a record of whichever method you use.

{{buy:1099}}`,
    },
    {
      slug: "emergency-response-team-or-evacuation-plan", seoTitle: "Emergency response team or evacuation plan?",
      title: "Does your facility need an emergency response team, or just an evacuation plan?",
      description: "Paragraph (q) has an exit. If your people evacuate and never respond, the rules are very different.",
      date: "2026-10-25",
      courses: [702, 1099],
      body: `Every facility that handles hazardous substances has to decide one thing first: **when something releases, do our people respond, or do they leave?**

## Option 1: evacuate

Under 29 CFR 1910.120(q)(1), employers who evacuate employees from the danger area when an emergency occurs, and don't let them help handle it, are exempt from the HAZWOPER (q) requirements. They must have an **emergency action plan** that meets 29 CFR 1910.38.

That means:

- Alarm and reporting procedures
- Evacuation routes and assembly points
- A way to account for everyone
- Training so employees know the plan

You still need awareness-level thinking (recognize a release and report it), and the local fire department or a hazmat contractor does the responding.

## Option 2: respond

If any employee will take action on a release beyond incidental cleanup, such as containing it, stopping it or rescuing someone, you're doing emergency response under (q). You'll need:

- A written **emergency response plan** under (q)(1) and (q)(2)
- Responders trained to the level of their role
- An incident command system
- PPE, monitoring equipment and decon
- Medical surveillance for hazmat team members
- Annual refresher training or demonstrated competency

## How to choose

| Question | Leans evacuate | Leans respond |
|---|---|---|
| How fast can the fire department arrive? | Minutes | Far away or slow |
| Can a release shut down your process or hurt neighbors before help arrives? | Unlikely | Likely |
| Do you have staff who can train and stay current? | No | Yes |
| Do you have the PPE and equipment? | No | Yes |

## A middle path

Many plants evacuate most staff but keep a trained **in-plant ERT** at the operations level. The ERT protects people and contains from a distance until the fire department takes over. That's a (q) program, but a focused one. See [[702]].`,
    },
    {
      slug: "incidental-spill-vs-emergency-response",
      title: "Incidental spill or emergency response? Where the line falls",
      description: "Wiping up a quart of solvent isn't a hazmat response. A leaking tote might be. OSHA's test for telling them apart.",
      date: "2026-10-25",
      courses: [1099, 702],
      body: `HAZWOPER's emergency response rules don't apply to every spill. OSHA separates **incidental releases** from **emergency responses**, and the difference decides what training your people need.

## OSHA's definition

Under 29 CFR 1910.120(a)(3), responses to incidental releases are not emergency responses. An incidental release is one that can be absorbed, neutralized or otherwise controlled at the time of release by employees in the immediate work area or by maintenance staff, and where there's no potential safety or health hazard. The danger is the deciding factor, not the size.

## The questions to ask

A release is likely an **emergency** if:

- It could cause high levels of exposure to toxic substances
- It's an immediate danger to life or health, or an oxygen-deficient atmosphere
- It creates a fire or explosion hazard
- It requires evacuating the area
- The people nearby don't know what it is, or aren't trained or equipped to handle it
- It needs outside help to control

A release is likely **incidental** if:

- The material and its hazards are known
- The quantity is small enough that nearby workers can control it with the equipment and PPE they normally use
- Their normal training covers it

## Same chemical, different answer

| Situation | Likely |
|---|---|
| A cup of hydraulic oil drips from a forklift. The operator puts down an absorbent pad. | Incidental |
| A 275-gallon tote of sodium hypochlorite is punctured in a warehouse aisle. | Emergency |
| A lab tech spills 100 mL of a known solvent in a fume hood. | Incidental |
| An ammonia odor is reported in a refrigerated room, source unknown. | Emergency |

## What it means for training

- People who handle **incidental** spills need training on the hazards of the chemicals they use (hazard communication) and on the spill kit.
- People who respond to **emergencies** need (q) training for their responder level.
- People who'll **discover** an emergency need awareness training: recognize, isolate and notify.

{{buy:1099}}`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(1099)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div><a class="logo" href="/">First<b>Response</b></a><p>HAZWOPER emergency response training by HAZWOPER OSHA Training LLC, delivered on hazwoper-osha.com.</p></div>
<div><h2>Courses</h2>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h2>Dispatch</h2><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc, course } = h;
    const levels = [
      ["Awareness", "Recognize · isolate · notify", 1099],
      ["Operations", "Defensive. Contain from a distance", 702],
      ["Technician", "Approach the release and stop it", 589],
      ["Command", "Take charge of the scene", 593],
    ];
    return `<section class="hero"><div class="wrap hero-in">
<div>
<p class="hero-call">Questions? Call <a href="tel:+18664296742">(866) 429-6742</a></p>
<h1>Recognize.<br>Isolate.<br><span>Notify.</span></h1>
<p class="hero-lede">HAZWOPER (q) training for first responders, fire and hazmat teams, plant ERTs and incident commanders.</p>
<div class="hero-cta">${h.buy(1099, "Deploy training")}<a class="btn btn-alt" href="#levels">Find your level</a></div>
</div>
</div></section>

<section class="sec" id="levels"><div class="wrap">
<p class="sec-tag">// 1910.120(q)(6)</p>
<h2 class="title">Responder <span>levels</span></h2>
<div class="levels">${levels.map(([name, role, id], i) => { const c = course(id); return `<div class="lvl"><span class="lvl-no">L${i + 1}</span><h3>${name}</h3><p>${role}</p><a href="${c.url}">${esc(c.short)} →</a></div>`; }).join("")}</div>
<p class="lvl-note"><a href="/guides/five-levels-of-hazwoper-responders">Full breakdown of all five levels and their minimum training →</a></p>
</div></section>

<section class="sec sec-grid"><div class="wrap">
<p class="sec-tag">// Courses</p>
<h2 class="title">Equip your <span>team</span></h2>
<div class="cgrid">${courses.map((c) => `<article class="cc"><p class="cc-tag">${esc(c.duration)}${c.lmsId ? ` · #${c.lmsId}` : ""}</p><h3><a href="${c.url}">${esc(c.name)}</a></h3><p>${esc(c.summary)}</p><div class="cc-foot"><b>${money(c.price)}</b>${h.buy(c.id, "Enroll", "btn btn-sm")}</div></article>`).join("")}</div>
</div></section>

<section class="sec"><div class="wrap">
<p class="sec-tag">// Briefings</p>
<h2 class="title">Read before <span>you respond</span></h2>
<div class="guide-list">${guides.map(h.guideCard).join("")}</div>
</div></section>`;
  },
};
