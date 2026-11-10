// site-zones.hazwoperosha.us: interactive site control diagram (hot, warm, cold zones). Aerial site plan.
const ZONES = {
  hot: ["Exclusion zone (hot zone)", "Where contamination is or could be present. Only trained, authorized workers in the required PPE enter, through the access control point. The buddy system is used, and work time is limited by air supply and heat."],
  warm: ["Contamination reduction zone (warm zone)", "The buffer between hot and cold. The decon line runs through it, from dirtiest to cleanest. Decon techs work here in PPE, usually one level below the entry team."],
  cold: ["Support zone (cold zone)", "The clean area: command post, first aid, break areas, supplies, vehicles and the muster point. It's placed upwind and, where possible, uphill of the exclusion zone."],
  acp: ["Access control points", "Controlled entry into and out of each zone, so everyone who goes in is tracked, trained and in the right PPE, and everyone coming out goes through decon."],
  decon: ["Decon corridor", "The line of decon stations inside the warm zone. Workers move one way only: from the hot zone, through each station, to the cold zone."],
  wind: ["Wind direction", "Zones are laid out with the wind in mind. The support zone sits upwind so vapors and dust blow away from it. A windsock on site shows changes, and zones may need to move if the wind shifts."],
};

export default {
  brand: "Site Zones",
  logo: `<span class="rings"></span>Site Zones`,
  title: "HAZWOPER Site Control Zones Explained: Interactive Diagram | Site Zones",
  description: "Click through an interactive hazardous waste site plan: exclusion zone, contamination reduction zone, support zone, access control points, the decon corridor and wind direction.",
  theme: "#d9480f",
  fonts: "family=Red+Hat+Display:wght@500;700;900&family=Red+Hat+Mono:wght@500",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" fill="#d3f9d8"/><circle cx="16" cy="16" r="10" fill="#ffe8cc"/><circle cx="16" cy="16" r="5" fill="#d9480f"/></svg>`,
  hero: {
    title: "Hot, warm, <span>cold.</span>",
    lede: "Every hazardous waste site is laid out in zones that keep contamination where it belongs. Click around the site plan to see how it works.",
    cta: [587, "40-Hour HAZWOPER · $249.99"],
    alt: ["#zones", "Explore the site"],
  },
  coursesTagline: "Site control and decon training.",
  guidesTagline: "Setting up zones and moving them when conditions change.",

  courses: [
    { id: 587, short: "40-Hour HAZWOPER", summary: "Site control in depth.", body: `The full initial course.`, topics: ["Site control", "Decon", "PPE", "Emergencies"], who: "Site workers." },
    { id: 597, short: "Supervisor", summary: "Setting and enforcing zones.", body: `Eight hours for supervisors.`, topics: ["Site control", "Briefings"], who: "Supervisors." },
  ],

  feature: (h) => `<section class="sec zn-sec" id="zones"><div class="wrap zn-in">
<svg class="zn-map" viewBox="0 0 520 420" role="img" aria-label="Site plan with exclusion, contamination reduction and support zones">
<defs><pattern id="hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="10" height="10" fill="#ffd8a8"/><rect width="4" height="10" fill="#ffc078"/></pattern></defs>
<rect x="0" y="0" width="520" height="420" fill="#ebfbee" data-z="cold" class="zn"/>
<rect x="60" y="40" width="330" height="290" rx="20" fill="url(#hatch)" data-z="warm" class="zn"/>
<rect x="100" y="70" width="190" height="180" rx="14" fill="#ff8787" data-z="hot" class="zn"/>
<g class="zn" data-z="decon"><rect x="290" y="140" width="100" height="40" fill="#74c0fc"/><text x="340" y="165" text-anchor="middle">DECON</text></g>
<g class="zn" data-z="acp"><circle cx="290" cy="110" r="12" fill="#212529"/><circle cx="390" cy="160" r="12" fill="#212529"/></g>
<g class="zn" data-z="wind"><line x1="470" y1="390" x2="470" y2="300" stroke="#212529" stroke-width="4"/><path d="M470 300l-10 18h20z" fill="#212529"/><text x="470" y="408" text-anchor="middle">WIND</text></g>
<g class="lbl"><text x="195" y="165" text-anchor="middle">EXCLUSION</text><text x="140" y="300" text-anchor="middle">CRZ</text><text x="440" y="60" text-anchor="middle">SUPPORT</text></g>
</svg>
<div class="zn-info" aria-live="polite"><p class="zn-k">Tap a zone</p><h2 id="znT">Start anywhere on the map</h2><p id="znD">Each area of a hazardous waste site has its own rules for who can enter, what they wear and how they leave.</p>
<div class="zn-keys">${Object.entries(ZONES).map(([k, v]) => `<button type="button" data-z="${k}">${h.esc(v[0].replace(/ \(.*\)/, ""))}</button>`).join("")}</div></div>
</div></section>
<script>
window.ZONES = ${JSON.stringify(ZONES).replace(/</g, "\\u003c")};
(function () {
  var t = document.getElementById("znT"), d = document.getElementById("znD");
  function pick(z) {
    t.textContent = window.ZONES[z][0]; d.textContent = window.ZONES[z][1];
    document.querySelectorAll("[data-z]").forEach(function (el) { el.classList.toggle("sel", el.getAttribute("data-z") === z); });
  }
  document.querySelectorAll("[data-z]").forEach(function (el) {
    el.addEventListener("click", function (e) { e.stopPropagation(); pick(el.getAttribute("data-z")); });
  });
})();
</script>`,

  guides: [
    {
      slug: "setting-up-site-control-zones",
      title: "Setting up site control zones",
      description: "How a site safety officer lays out the hot, warm and cold zones on a new site.",
      date: "2026-10-25",
      courses: [597],
      body: `29 CFR 1910.120(d) requires a site control program before cleanup work begins, including a site map, work zones, the buddy system, communications and safe work practices.

## Step by step

1. **Characterize the site.** Where's the contamination? What are the hazards?
2. **Check the wind and terrain.** The support zone goes upwind and, where possible, uphill.
3. **Mark the exclusion zone** around all contaminated areas, with margin for vapors, dust and the work itself.
4. **Lay out the warm zone** as a buffer, with room for the decon corridor.
5. **Set access control points** where people and equipment enter and leave.
6. **Place the support zone**: command post, first aid, sanitation, break area and the muster point.
7. **Mark everything** with tape, fencing, cones and signs.
8. **Brief the crew** on the map, the routes and the emergency signals.

## Keep it current

Zones may move as work progresses, contamination is removed or the wind changes.

{{buy:597}}`,
    },
    {
      slug: "when-the-wind-shifts",
      title: "When the wind shifts: adjusting zones on the fly",
      description: "Zones are built around the wind. Here's what happens when it changes.",
      date: "2026-10-25",
      courses: [587],
      body: `A windsock is one of the most important pieces of safety equipment on a hazardous waste site.

## Why it matters

The support zone is placed upwind so vapors and dust blow away from it. If the wind reverses, the clean zone can end up downwind of the work.

## What crews do

- **Watch the windsock** and report significant shifts
- **Monitor at the zone boundaries** and the support zone
- **Pause work** that generates vapors or dust if readings rise at the perimeter
- **Move the muster point** if it's now downwind
- **Relocate the decon line or support facilities** for longer-term shifts

## Plan ahead

Good site plans name an alternate muster point and describe how zones will be adjusted for a wind shift.
`,
    },
  ],
};
