// dc-operations.hazwoperosha.us: data center operations management. NOC wall, dark status board.
export default {
  title: "Data Center Operations Training: Ops Management, Maintenance & Incident Response | Industrial Certified Training",
  description: "Data center operations training for shift leads and facility managers: operations management, preventive maintenance, incident response, DCIM and building maintenance.",
  theme: "#0e1116",
  fonts: "family=JetBrains+Mono:wght@500;700&family=Manrope:wght@400;600;800",
  hero: {
    title: "Run the floor <span>like it matters.</span>",
    lede: "Uptime is earned shift by shift. Training for the people who run data centers: operations management, maintenance programs, incident response and the tools that tie them together.",
    cta: [843, "Operations Management · $325.99"],
    alt: ["/guides/shift-handover", "Shift handover guide"],
  },
  heroArt: `<div class="fo-board" aria-hidden="true">${Array.from({ length: 48 }, (_, i) => `<i class="${i % 17 === 5 ? "w" : ""}"></i>`).join("")}</div>`,
  coursesTitle: "Operations courses",
  coursesTagline: "Operations, maintenance and incident training for data center teams.",
  guidesTagline: "Shift handovers, change control and the habits of reliable teams.",

  courses: [
    { id: 843, short: "Operations Management" },
    { id: 839, short: "Preventive Maintenance Planning" },
    { id: 837, short: "Incident Response & Troubleshooting" },
    { id: 830, short: "DCIM Platform Fundamentals" },
    { id: 1097, short: "Building Maintenance Fundamentals" },
  ],

  guides: [
    {
      slug: "shift-handover",
      title: "The shift handover that prevents outages",
      description: "What every outgoing lead should hand over, in writing and out loud.",
      date: "2026-10-25",
      courses: [843, 837],
      body: `Many incidents trace back to something the incoming shift didn't know. A structured handover closes that gap.

## Cover every time

- **Open alarms** and what's been done about them
- **Work in progress**: active MOPs, permits, contractors on site
- **Equipment out of service** and the redundancy you've lost because of it
- **Abnormal configurations**: bypasses, manual overrides, temporary power
- **Scheduled work** for the coming shift
- **Customer or tenant issues** still open

## How to run it

1. Written log first, verbal walk-through second
2. Walk the floor together if something's abnormal
3. Incoming lead signs off that they've read and understood it

## Red flags

"Nothing to report" on a shift with work in progress. Handovers by text message. Leaving before the relief arrives.

{{buy:843}}`,
    },
    {
      slug: "change-control-basics",
      title: "Change control basics for critical facilities",
      description: "MOPs, SOPs and EOPs: the paperwork that keeps hands off the wrong breaker.",
      date: "2026-10-25",
      courses: [843, 839],
      body: `Human error is one of the leading causes of data center outages. Change control makes risky work deliberate.

## Three document types

| Document | Used for |
|---|---|
| **MOP** (method of procedure) | A specific planned change: step by step, with rollback |
| **SOP** (standard operating procedure) | Routine tasks done the same way every time |
| **EOP** (emergency operating procedure) | What to do when something fails |

## A good MOP includes

- Scope, risk level and the redundancy affected
- Approvals and the maintenance window
- Pre-checks, numbered steps, hold points and verification
- A rollback plan for every step that can go wrong
- Who does each step and who checks it

## Make it stick

Review MOPs before the window, rehearse high-risk ones, and debrief after. Feed lessons into the preventive maintenance plan ([[839]]).`,
    },
  ],
};
