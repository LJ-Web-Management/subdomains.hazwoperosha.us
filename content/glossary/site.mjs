// glossary.hazwoperosha.us: searchable A-Z HAZWOPER glossary. Dictionary.
const TERMS = [
  ["Action level", "A measured concentration, set in the site safety plan or a standard, that triggers more protection, monitoring or a stop-work."],
  ["Air-purifying respirator (APR)", "A respirator that removes contaminants from the air through filters or cartridges. Used in Level C. It can't supply oxygen."],
  ["Awareness level", "The first emergency responder level under 1910.120(q)(6)(i): recognize a release, isolate the area, notify, and take no further action."],
  ["Buddy system", "Organizing workers in pairs or groups so each can watch the other and get help in an emergency. Required in hazardous areas."],
  ["CERCLA", "The Comprehensive Environmental Response, Compensation, and Liability Act of 1980, known as Superfund. Governs cleanup of uncontrolled hazardous waste sites."],
  ["Confined space", "A space large enough to enter, with limited entry or exit, not designed for continuous occupancy. Permit-required spaces have serious hazards (29 CFR 1910.146)."],
  ["Contamination reduction zone", "The warm zone between the exclusion zone and the support zone, where decontamination takes place."],
  ["Decontamination", "Removing or neutralizing contaminants from people and equipment so they don't spread beyond the work area."],
  ["Direct-reading instrument", "A monitor that gives readings on the spot, such as a multi-gas meter or photoionization detector."],
  ["Emergency response", "A response by employees from inside or outside the work area to an occurrence that results, or is likely to result, in an uncontrolled release of a hazardous substance."],
  ["Engineering controls", "Physical changes that reduce exposure, such as ventilation, enclosures or wetting dust. Preferred over PPE where feasible."],
  ["Exclusion zone", "The hot zone, where contamination is or could be present. Entry requires the specified PPE."],
  ["Field experience", "Supervised days on site that follow initial training: three days for 40-hour workers and one day for 24-hour workers."],
  ["Flash point", "The lowest temperature at which a liquid gives off enough vapor to ignite. Lower flash point means a greater fire hazard."],
  ["HAZWOPER", "Hazardous Waste Operations and Emergency Response, the OSHA standard at 29 CFR 1910.120 (and 1926.65 for construction)."],
  ["Hazardous substance", "A substance that can harm people or the environment, as defined in HAZWOPER by reference to CERCLA, DOT and other lists."],
  ["Hazardous waste", "A waste that's listed by EPA or shows a hazardous characteristic (ignitable, corrosive, reactive or toxic) under RCRA."],
  ["IDLH", "Immediately Dangerous to Life or Health: an atmosphere that poses an immediate threat to life, could cause irreversible health effects, or would prevent escape."],
  ["Incident command system (ICS)", "A standard structure for managing emergencies, with one person or a unified group in command. Required for HAZWOPER emergency response."],
  ["Incidental release", "A small release that people in the area can safely control at the time, with no significant hazard. Not an emergency response under HAZWOPER."],
  ["LEL / LFL", "Lower explosive (flammable) limit: the lowest concentration of a gas or vapor in air that can ignite. Monitors often alarm at 10% of the LEL."],
  ["Level A", "Highest protection: fully encapsulating vapor-tight suit with SCBA or supplied air."],
  ["Level B", "Highest respiratory protection (SCBA or supplied air) with chemical splash protection for the skin."],
  ["Level C", "Air-purifying respirator with chemical-resistant clothing. Only when contaminants are known, measured and the respirator is suitable."],
  ["Level D", "Work uniform with boots, gloves and safety glasses. No respiratory hazard."],
  ["Medical surveillance", "Medical exams before assignment, periodically and at termination for covered HAZWOPER workers (1910.120(f))."],
  ["NIOSH", "The National Institute for Occupational Safety and Health, which researches workplace hazards, certifies respirators and publishes recommended exposure limits."],
  ["Oxygen-deficient atmosphere", "An atmosphere with less than 19.5% oxygen by volume."],
  ["PEL", "Permissible exposure limit: OSHA's legal limit for exposure to a substance, usually as an 8-hour time-weighted average."],
  ["Photoionization detector (PID)", "A direct-reading instrument that measures total volatile organic compounds. It can't tell which chemical it's detecting."],
  ["PPE", "Personal protective equipment: respirators, suits, gloves, boots, eye and face protection and similar gear."],
  ["RCRA", "The Resource Conservation and Recovery Act, which governs hazardous waste from generation to disposal."],
  ["Refresher training", "Annual training that keeps HAZWOPER workers current: 8 hours a year for site and TSDF workers."],
  ["REL", "Recommended exposure limit, set by NIOSH. Often lower than OSHA's PEL."],
  ["Respirator fit test", "A test that checks a tight-fitting respirator seals to the wearer's face. Required before use and annually."],
  ["SCBA", "Self-contained breathing apparatus: a respirator with its own air supply, used in Levels A and B."],
  ["Safety data sheet (SDS)", "The manufacturer's document describing a chemical's hazards, handling, PPE and emergency measures, in 16 sections."],
  ["Site characterization", "Evaluating a site's hazards before and during work, including a preliminary evaluation before entry (1910.120(c))."],
  ["Site safety and health plan", "The site-specific plan required by 1910.120(b)(4), covering hazards, PPE, monitoring, site control, decon and emergencies."],
  ["STEL", "Short-term exposure limit: a 15-minute time-weighted average limit."],
  ["Support zone", "The cold zone: the clean area where command, supplies and break areas are located."],
  ["TLV", "Threshold limit value, an exposure guideline published by ACGIH."],
  ["TSDF", "Treatment, storage and disposal facility: a permitted hazardous waste facility, covered by HAZWOPER paragraph (p)."],
  ["TWA", "Time-weighted average: an exposure averaged over a period, usually 8 hours."],
  ["UEL / UFL", "Upper explosive (flammable) limit: the highest concentration that can ignite. Above it the mixture is too rich to burn, but still dangerous."],
  ["Universal waste", "Batteries, pesticides, mercury-containing equipment, lamps and aerosol cans that can be managed under simpler EPA rules (40 CFR 273)."],
];

export default {
  brand: "HAZWOPER Glossary",
  logo: `<span class="aa">Aa</span> HAZWOPER Glossary`,
  title: "HAZWOPER Glossary: Terms and Definitions A to Z | HAZWOPER Glossary",
  description: `A searchable glossary of ${TERMS.length} HAZWOPER and hazardous waste terms, from action level to universal waste, in plain language, plus the courses that teach them.`,
  theme: "#3d2c1e",
  fonts: "family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="4" fill="#f6efe4"/><text x="16" y="23" font-size="17" font-family="Georgia" font-style="italic" text-anchor="middle" fill="#3d2c1e">Aa</text></svg>`,
  hero: {
    title: "Speak <em>HAZWOPER.</em>",
    lede: "PEL, IDLH, LEL, Level B, CRZ. A plain-language glossary of the terms you'll hear on every hazardous waste site.",
    cta: [587, "Learn them all: 40-hour"],
    alt: ["#glossary", "Search the glossary"],
  },
  coursesTagline: "Courses that teach these terms in depth.",
  guidesTagline: "Acronyms and exposure limits, explained.",

  courses: [
    { id: 587, short: "40-Hour HAZWOPER", summary: "Every term in this glossary, in depth.", body: `The full initial course for site workers.`, topics: ["Hazard recognition", "PPE levels", "Monitoring", "Decon", "Site control"], who: "Site workers." },
    { id: 1099, short: "Awareness", summary: "Awareness-level responder training.", body: `Four hours on recognize, isolate, notify.`, topics: ["Recognize", "Isolate", "Notify"], who: "Front-line staff." },
  ],

  feature: (h) => `<section class="sec gl-sec" id="glossary"><div class="wrap">
<div class="gl-search"><input id="glQ" type="search" placeholder="Search terms, e.g. IDLH" aria-label="Search the glossary"><span id="glCount"></span></div>
<nav class="az" id="glAz">${[...new Set(TERMS.map((t) => t[0][0].toUpperCase()))].map((l) => `<a href="#gl-${l}">${l}</a>`).join("")}</nav>
<dl class="gl" id="glList">${TERMS.map((t, i) => `<div class="gl-item"${i === 0 || TERMS[i - 1][0][0] !== t[0][0] ? ` id="gl-${t[0][0].toUpperCase()}"` : ""}><dt>${h.esc(t[0])}</dt><dd>${h.esc(t[1])}</dd></div>`).join("")}</dl>
</div></section>
<script>
(function () {
  var q = document.getElementById("glQ"), items = document.querySelectorAll(".gl-item"), count = document.getElementById("glCount");
  function f() {
    var v = q.value.trim().toLowerCase(), n = 0;
    items.forEach(function (it) { var show = !v || it.textContent.toLowerCase().indexOf(v) !== -1; it.hidden = !show; if (show) n++; });
    count.textContent = n + " of " + items.length;
  }
  q.addEventListener("input", f); f();
})();
</script>`,

  guides: [
    {
      slug: "pel-rel-tlv-idlh-explained",
      title: "PEL, REL, TLV, STEL and IDLH: exposure limits explained",
      description: "Five acronyms for exposure limits, who sets each one and which one your site plan uses.",
      date: "2026-10-25",
      courses: [587],
      body: `| Limit | Set by | Means | Legally binding? |
|---|---|---|---|
| PEL | OSHA | Permissible exposure limit, usually an 8-hour TWA | Yes |
| REL | NIOSH | Recommended exposure limit, often lower than the PEL | No, it's a recommendation |
| TLV | ACGIH | Threshold limit value, updated regularly | No, unless adopted by a rule |
| STEL | OSHA, NIOSH or ACGIH | 15-minute short-term limit | Yes when it's an OSHA STEL |
| Ceiling | OSHA, NIOSH or ACGIH | Never to be exceeded, even briefly | Yes when it's an OSHA ceiling |
| IDLH | NIOSH | Immediately dangerous to life or health | Used for respirator selection |

## Why there are so many

Many OSHA PELs date from the early 1970s and haven't been updated. NIOSH and ACGIH publish newer, often lower, values. California updates its own PELs more often than federal OSHA.

## What your site plan uses

Many site safety plans set action levels using the **lowest** of the PEL, REL and TLV, to stay protective. Your plan's action levels are the numbers to follow.

## IDLH and respirators

IDLH conditions require the most protective respirators: SCBA or supplied air with an escape bottle. Air-purifying respirators (Level C) aren't allowed in IDLH atmospheres.
`,
    },
    {
      slug: "hazwoper-acronyms-cheat-sheet",
      title: "HAZWOPER acronyms cheat sheet",
      description: "The 20 acronyms you'll hear in your first week on site.",
      date: "2026-10-25",
      courses: [587],
      body: `| Acronym | Stands for |
|---|---|
| APR | Air-purifying respirator |
| CERCLA | Comprehensive Environmental Response, Compensation, and Liability Act |
| CRZ | Contamination reduction zone |
| EZ | Exclusion zone |
| HASP | Health and safety plan |
| HAZWOPER | Hazardous Waste Operations and Emergency Response |
| ICS | Incident command system |
| IDLH | Immediately dangerous to life or health |
| LEL | Lower explosive limit |
| NIOSH | National Institute for Occupational Safety and Health |
| PEL | Permissible exposure limit |
| PID | Photoionization detector |
| PPE | Personal protective equipment |
| RCRA | Resource Conservation and Recovery Act |
| SCBA | Self-contained breathing apparatus |
| SDS | Safety data sheet |
| SZ | Support zone |
| TSDF | Treatment, storage and disposal facility |
| TWA | Time-weighted average |
| UEL | Upper explosive limit |

Search the full glossary above for plain-language definitions.

{{buy:587}}`,
    },
  ],
};
