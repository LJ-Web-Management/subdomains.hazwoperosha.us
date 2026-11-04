// dc-careers.hazwoperosha.us: data center career tracks, with a clickable track map. Transit-map style lines.
const TRACKS = [
  ["Power & Electrical", "#e63946", [831, 852, 850, 1102, 1092, 840, 847]],
  ["Cooling & Facilities Efficiency", "#1d9bf0", [1096, 851, 836, 838, 832, 841]],
  ["Operations & Reliability", "#2a9d8f", [858, 856, 1097, 839, 837, 843]],
  ["Monitoring & Smart Facility", "#9b5de5", [834, 1104, 830, 846]],
  ["Security & Compliance", "#d9731f", [855, 828, 833, 854, 848]],
  ["Design, Planning & Commissioning", "#264653", [829, 845, 849, 842]],
];

export default {
  title: "Data Center Careers: Training Tracks for Technicians & Engineers | Industrial Certified Training",
  description: "Map your data center career: six training tracks from entry-level technician safety courses to engineering and management, with courses you can enroll in today.",
  theme: "#264653",
  fonts: "family=Overpass:wght@400;600;800;900",
  hero: {
    title: "Pick a line. <span>Ride it up.</span>",
    lede: "Data centers need electricians, mechanics, operators, security staff and engineers, and they're growing fast. Pick a track, start with the basics and build toward senior roles.",
    cta: [852, "Start: Electrical Safety · $99.99"],
    alt: ["#map", "See the map"],
  },
  coursesTitle: "Starter courses",
  coursesTagline: "Where most data center technicians start.",
  guidesTagline: "Breaking into data centers and moving up.",

  courses: [
    { id: 852, short: "Data Center Electrical Safety" },
    { id: 856, short: "Raised Floor & Confined Space" },
    { id: 858, short: "Ergonomics & Manual Handling" },
    { id: 855, short: "Physical Security & Access" },
    { id: 843, short: "Operations Management" },
  ],

  feature: (h) => `<section class="sec cl-sec" id="map"><div class="wrap">
<h2 class="title">The track map</h2>
<p class="cl-hint">Stops run from entry level (left) to advanced (right). Tap a stop to enroll.</p>
<div class="cl-map">${TRACKS.map(([name, color, ids]) => `<div class="cl-line" style="--c:${color}"><h3>${h.esc(name)}</h3><ol>${ids.map((id) => { const c = h.course(id); return `<li><button type="button" data-buy="${id}" title="${h.esc(c.name)} · ${h.money(c.price)}"><i></i><span>${h.esc(c.name.replace(/^Data Center /, "").replace(/ Training$/, ""))}</span><small>${h.esc(c.duration)} · ${h.money(c.price)}</small></button></li>`; }).join("")}</ol></div>`).join("")}</div>
</div></section>`,

  guides: [
    {
      slug: "breaking-into-data-centers",
      title: "Breaking into data center work",
      description: "The trades and backgrounds that transfer, and what to learn first.",
      date: "2026-10-25",
      courses: [852, 856, 858],
      body: `## Backgrounds that transfer well

- **Electricians** and electrical apprentices
- **HVAC and refrigeration technicians**
- **Military** technicians, especially from power, communications and nuclear roles
- **Building engineers** from hospitals, labs or large offices
- **IT and network technicians** who want to move toward infrastructure

## What hiring managers look for

- Safety habits, especially around electrical and mechanical equipment
- Willingness to follow procedures exactly (MOPs and SOPs)
- Shift flexibility: data centers run 24/7
- Clean background checks for secure sites

## Learn first

Electrical safety ([[852]]), raised floor and confined space awareness ([[856]]) and ergonomics ([[858]]) show you understand the environment. Then pick a track on the map.

{{buy:852}}`,
    },
    {
      slug: "technician-to-engineer",
      title: "From technician to critical facilities engineer",
      description: "What changes as you move up, and the courses that get you there.",
      date: "2026-10-25",
      courses: [843, 847, 841],
      body: `## Technician

You carry out maintenance, rounds and work orders, and respond to alarms.

## Senior technician / lead

You write and review MOPs, lead maintenance windows, train newer techs and make the first call during incidents.

## Critical facilities engineer

You own systems: power ([[847]]), cooling ([[841]]) or both. You plan maintenance, analyze failures and work with vendors.

## Facility or operations manager

You run the team, budget and the relationship with customers and leadership. See [[843]].

## How to move up

- Volunteer for MOPs, commissioning and incident reviews
- Learn the one-line and the mechanical drawings cold
- Take a comprehensive course in your track
- Add a second track: power people who understand cooling (and vice versa) stand out`,
    },
  ],
};
