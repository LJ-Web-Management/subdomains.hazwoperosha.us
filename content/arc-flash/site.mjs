// arc-flash.hazwoperosha.us: arc flash and electrical safety for data centers, with an NFPA 70E PPE category explorer. Warning label orange.
const CATS = [
  ["1", "4", "Arc-rated long-sleeve shirt and pants or coverall; arc-rated face shield or flash suit hood; hard hat; safety glasses or goggles; hearing protection; heavy-duty leather gloves or rubber insulating gloves with leather protectors; leather footwear as needed."],
  ["2", "8", "Arc-rated long-sleeve shirt and pants or coverall; arc-rated flash suit hood, or arc-rated face shield with arc-rated balaclava; arc-rated jacket or rainwear as needed; hard hat; safety glasses or goggles; hearing protection; gloves as for category 1; leather footwear."],
  ["3", "25", "Arc-rated flash suit jacket and pants or coverall meeting 25 cal/cm²; arc-rated flash suit hood; arc-rated gloves or rubber insulating gloves with leather protectors; hard hat; safety glasses or goggles; hearing protection; leather footwear."],
  ["4", "40", "Arc-rated flash suit jacket and pants or coverall meeting 40 cal/cm²; arc-rated flash suit hood; arc-rated gloves or rubber insulating gloves with leather protectors; hard hat; safety glasses or goggles; hearing protection; leather footwear."],
];

export default {
  title: "Data Center Arc Flash & Electrical Safety Training (NFPA 70E) | Industrial Certified Training",
  description: "Arc flash and electrical safety training for data center staff, built on NFPA 70E, with an explorer of the four arc flash PPE categories.",
  theme: "#ff6b00",
  fonts: "family=Roboto+Condensed:wght@500;700;900&family=Roboto:wght@400;500",
  hero: {
    title: "Kill it, <span>test it,</span> then touch it.",
    lede: "An arc flash can reach temperatures hotter than the surface of the sun. Arc flash and electrical safety training for data center electricians, technicians and anyone near energized equipment.",
    cta: [850, "Arc Flash Safety · $99.99"],
    alt: ["#ppe", "PPE categories"],
  },
  coursesTagline: "Arc flash and electrical safety training.",
  guidesTagline: "Reading arc flash labels and creating an electrically safe work condition.",

  courses: [
    { id: 850, short: "Arc Flash Safety" },
    { id: 852, short: "Data Center Electrical Safety" },
    { id: 831, short: "Electrical Safety & Best Practices" },
    { id: 847, short: "Power Systems & Electrical" },
  ],

  feature: (h) => `<section class="sec ar-sec" id="ppe"><div class="wrap">
<h2 class="title">Arc flash PPE categories</h2>
<div class="ar-tabs">${CATS.map((c, i) => `<button type="button" data-i="${i}"${i === 0 ? ' class="on"' : ""}><b>CAT ${c[0]}</b><span>${c[1]} cal/cm²</span></button>`).join("")}</div>
${CATS.map((c, i) => `<div class="ar-panel" data-p="${i}"${i ? " hidden" : ""}><p class="ar-min">Minimum arc rating <b>${c[1]} cal/cm²</b></p><p>${h.esc(c[2])}</p></div>`).join("")}
<p class="ar-note">Summarized from the NFPA 70E PPE category method for training. The category for a task comes from your arc flash risk assessment or the NFPA 70E tables, not from this page. Always check the equipment label.</p>
</div></section>
<script>
(function () {
  var bs = document.querySelectorAll(".ar-tabs button"), ps = document.querySelectorAll(".ar-panel");
  bs.forEach(function (b) { b.addEventListener("click", function () { var i = b.getAttribute("data-i"); bs.forEach(function (x) { x.classList.toggle("on", x === b); }); ps.forEach(function (p) { p.hidden = p.getAttribute("data-p") !== i; }); }); });
})();
</script>`,

  guides: [
    {
      slug: "reading-an-arc-flash-label",
      title: "How to read an arc flash label",
      description: "Every number on the label, and what it means for you.",
      date: "2026-10-25",
      courses: [850, 831],
      body: `Equipment like switchboards, panelboards and PDUs that may be worked on while energized should carry an arc flash label.

## What you'll see

| Label item | What it tells you |
|---|---|
| **Nominal voltage** | The system voltage |
| **Arc flash boundary** | The distance where incident energy drops to 1.2 cal/cm². Inside it, you need arc-rated PPE |
| **Incident energy** at a working distance, or **PPE category** | How much energy could reach you, which sets the PPE |
| **Limited approach boundary** | Unqualified people must stay outside unless escorted |
| **Restricted approach boundary** | Only qualified people with shock protection go inside |
| **Date / study reference** | When the analysis was done |

## Watch for

- Labels older than the last system change (NFPA 70E calls for a review at least every 5 years)
- Very high incident energy. Some equipment shouldn't be worked energized at all
- Missing labels: stop and ask

{{buy:850}}`,
    },
    {
      slug: "electrically-safe-work-condition",
      title: "Creating an electrically safe work condition",
      description: "The steps that make energized-work PPE unnecessary.",
      date: "2026-10-25",
      courses: [852, 831],
      body: `The safest approach is to de-energize. NFPA 70E describes how to create an **electrically safe work condition**:

1. **Identify all sources** of supply from drawings, one-lines and labels. Data centers often have more than one (utility, generator, UPS, batteries)
2. **Interrupt the load** and open the disconnecting devices
3. **Visually verify** blades are open or breakers withdrawn where possible
4. **Release stored energy**, such as capacitors in UPS systems
5. **Apply lockout/tagout** devices according to your program
6. **Test for absence of voltage** with a properly rated meter, checking it on a known source before and after
7. **Ground** where there's a possibility of induced voltage or stored energy

Until the absence of voltage is verified, treat the equipment as energized and wear the required PPE.

## In data centers

Watch for backfeed from UPS outputs, static transfer switches and dual-corded equipment. See [[852]].`,
    },
  ],
};
