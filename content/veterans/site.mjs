// veterans.hazwoperosha.us: HAZWOPER careers for veterans transitioning from military service. Service stencil, olive drab and khaki.
export default {
  brand: "Next Mission",
  logo: `<span class="nm-star">★</span>NEXT MISSION`,
  title: "HAZWOPER Careers for Veterans: Training & Certification | Next Mission",
  description: "Veterans already know PPE, decon, incident command and following procedures under pressure. HAZWOPER training to turn military experience into an environmental or emergency response career.",
  theme: "#5c6b3a",
  fonts: "family=Stardos+Stencil:wght@700&family=Source+Sans+3:wght@400;600;700",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="4" fill="#5c6b3a"/><path d="M16 5l3.2 7 7.6.7-5.8 5 1.8 7.5L16 21.3 9.2 25.2l1.8-7.5-5.8-5 7.6-.7z" fill="#e6dcc0"/></svg>`,
  hero: {
    title: "You've done the hard part. <span>Here's the next mission.</span>",
    lede: "Many military jobs build exactly the skills hazardous waste and emergency response employers want. HAZWOPER certification is often the missing credential.",
    cta: [587, "40-Hour HAZWOPER · $249.99"],
    alt: ["/guides/military-skills-that-transfer", "Skills that transfer"],
  },
  coursesTagline: "Credentials civilian employers ask for.",
  guidesTagline: "Translating military experience and finding the right first job.",

  courses: [
    { id: 587, short: "40-Hour HAZWOPER", summary: "The credential most employers ask for.", body: "The 40-hour initial HAZWOPER course: the standard credential for hazardous waste site work.", topics: ["Site safety", "PPE", "Decon", "Monitoring"] },
    { id: 593, short: "Incident Command (q)", summary: "Put your command experience on paper.", body: "Eight hours of HAZWOPER incident command training.", topics: ["ICS", "Unified command", "Resource management"] },
    { id: 1016, short: "Train-the-Trainer", summary: "For veterans who trained troops.", body: "Twenty-four hours for experienced professionals preparing to teach HAZWOPER.", topics: ["Instructor skills", "Hands-on exercises", "Records"] },
    { id: 589, short: "40-Hour Fire/Hazmat Teams", summary: "For military firefighters and CBRN specialists.", body: "The 40-hour HAZWOPER for fire service and hazmat teams.", topics: ["Hazmat response", "PPE", "Decon"] },
    { id: 597, short: "HAZWOPER Supervisor", summary: "For NCOs and officers.", body: "Eight hours for HAZWOPER supervisors.", topics: ["Safety program", "Supervision", "Briefings"] },
  ],

  guides: [
    {
      slug: "military-skills-that-transfer",
      title: "Military skills that transfer to HAZWOPER work",
      description: "How to describe what you did in terms civilian employers understand.",
      date: "2026-10-25",
      courses: [587, 593],
      body: `| Military experience | Civilian HAZWOPER equivalent |
|---|---|
| CBRN defense, MOPP gear | PPE levels, donning and doffing, decon |
| Decon operations | Decon line setup and operation |
| Detection equipment | Air monitoring and direct-reading instruments |
| Engineers, EOD | Site characterization, heavy equipment, hazard recognition |
| Firefighting, crash rescue | Hazmat emergency response |
| Command, NCO leadership | Incident command, supervision, tailgate briefings |
| Following orders and SOPs | Site safety plans, MOPs, permits |

## On your resume

Use civilian words: "operated decontamination line for 40 personnel," not just the MOS code. Add your HAZWOPER certificate number and date.

{{buy:587}}`,
    },
    {
      slug: "first-civilian-hazwoper-job",
      title: "Landing your first civilian HAZWOPER job",
      description: "Where veterans find work, and what to do first.",
      date: "2026-10-25",
      courses: [587, 589],
      body: `## Where the jobs are

- Environmental remediation and cleanup contractors
- Hazardous waste and industrial services companies
- Emergency response contractors (oil spills, chemical releases)
- Federal sites and their contractors (DOE, DoD cleanups)
- Refineries, chemical plants and utilities with response teams

## First steps

1. Get your **40-hour HAZWOPER** ([[587]])
2. Keep your physical fitness and get a respirator medical evaluation when an employer asks
3. Check whether your state or employer needs a commercial driver's license (CDL) with hazmat endorsement
4. Network through veteran hiring programs and contractor job boards

## Ask about benefits

Some training costs may be covered by veterans' education benefits. Check with the VA and your training provider before you enroll.`,
    },
  ],
};
