// decon-drill.hazwoperosha.us: put the decon line in order, a hands-on mini game. Warm-zone stripes.
const STEPS = [
  "Equipment drop",
  "Outer boot and glove wash",
  "Outer boot and glove rinse",
  "Tape removal",
  "Outer boot and glove removal",
  "Suit removal",
  "SCBA removal",
  "Inner glove removal",
  "Field wash",
];

export default {
  title: "Decon Line Drill: Put the Decontamination Steps in Order | Industrial Certified Training",
  description: "A hands-on drill: put a typical Level B decontamination line in the right order, see why the order matters, and train with decon and HAZWOPER courses.",
  theme: "#f08c00",
  fonts: "family=Barlow:wght@400;600;700;800&family=Barlow+Condensed:wght@700;800",
  hero: {
    title: "Can you run <span>the decon line?</span>",
    lede: "Decon only works if the steps happen in the right order. Try putting a typical Level B line in sequence, then learn why each step sits where it does.",
    cta: [584, "Decon module · $14.99"],
    alt: ["#drill", "Start the drill"],
  },
  coursesTagline: "Decontamination and HAZWOPER courses.",
  guidesTagline: "Why decon order matters, and running a decon team.",

  courses: [
    { id: 584, short: "Decontamination", summary: "Decon stations and doffing in 20 minutes.", body: `A short module on the decon line.`, topics: ["Zones", "Stations", "Doffing", "Equipment decon"], who: "All site workers." },
    { id: 587, short: "40-Hour HAZWOPER", summary: "Decon and site control in depth.", body: `The full initial course.`, topics: ["Site control", "Decon", "PPE"], who: "Site workers." },
    { id: 585, short: "PPE Levels A–D", summary: "What you're taking off, level by level.", body: `15 minutes on PPE levels.`, topics: ["Levels A–D"], who: "Anyone." },
    { id: 589, short: "40 Hr Fire / Hazmat", summary: "Technical and mass decon for response teams.", body: `The 40-hour for fire and hazmat teams.`, topics: ["Technical decon", "Mass decon"], who: "Hazmat teams." },
  ],

  feature: () => `<section class="sec drill-sec" id="drill"><div class="wrap">
<div class="drill">
<p class="d-intro">Tap the stations in the order a worker leaving the hot zone goes through them.</p>
<ol class="d-picked" id="dPicked"></ol>
<div class="d-pool" id="dPool"></div>
<p class="d-msg" id="dMsg" aria-live="polite"></p>
<button type="button" class="btn" id="dReset">Shuffle and restart</button>
</div></div></section>
<script>
window.DECON = ${JSON.stringify(STEPS)};
(function () {
  var S = window.DECON, pool = document.getElementById("dPool"), picked = document.getElementById("dPicked"), msg = document.getElementById("dMsg");
  var next = 0, mistakes = 0;
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function start() {
    next = 0; mistakes = 0; pool.textContent = ""; picked.textContent = ""; msg.textContent = "";
    shuffle(S).forEach(function (s) {
      var b = document.createElement("button"); b.type = "button"; b.className = "d-step"; b.textContent = s;
      b.addEventListener("click", function () {
        if (s === S[next]) {
          var li = document.createElement("li"); li.textContent = s; picked.appendChild(li); b.remove(); next++;
          msg.textContent = next === S.length ? "Line complete with " + mistakes + " mistake" + (mistakes === 1 ? "" : "s") + ". Dirtiest to cleanest, inner gloves last." : "";
        } else {
          mistakes++; b.classList.add("shake"); setTimeout(function () { b.classList.remove("shake"); }, 400);
          msg.textContent = "Not yet. Think: which gear is dirtiest right now?";
        }
      });
      pool.appendChild(b);
    });
  }
  document.getElementById("dReset").addEventListener("click", start);
  start();
})();
</script>`,

  guides: [
    {
      slug: "why-decon-order-matters",
      title: "Why the decon order matters",
      description: "Every station in the line is placed to keep contamination moving away from the clean side.",
      date: "2026-10-25",
      courses: [584],
      body: `Decontamination follows one principle: **move from dirtiest to cleanest, and never let a clean surface touch a dirty one.**

## Station by station

1. **Equipment drop** first, so hands are free and tools stay in the warm zone.
2. **Wash and rinse outer boots and gloves**, the dirtiest surfaces, before anything else is touched.
3. **Tape removal**, now that the gloves are clean enough to handle it.
4. **Outer boots and gloves off.**
5. **Suit off**, rolled outward and down so the contaminated outside stays inside.
6. **SCBA off.** The respirator stays on until the suit is off, so you're protected while contamination is most likely to become airborne.
7. **Inner gloves off last**, so clean hands never touch dirty gear.
8. **Field wash** of hands and face before the support zone.

## Common errors

- Removing the respirator before the suit
- Touching the face during doffing
- Pulling the suit over the head
- Skipping the rinse because the line is busy

Exact lines vary with the site, contaminant and PPE level. Follow your site's decon plan.

{{buy:584}}`,
    },
    {
      slug: "running-a-decon-team",
      title: "Running a decon team",
      description: "The people who run decon need their own plan, PPE and rotation.",
      date: "2026-10-25",
      courses: [584, 589],
      body: `Decon techs work in the warm zone, handling contaminated gear for hours. They need as much planning as the entry team.

## Staffing

- Enough techs to staff each station, plus relief
- A decon leader who controls the flow and watches for errors
- Rotation to manage heat and fatigue

## PPE

Usually one level below the entry team, set by the site plan, with chemical-resistant gloves and boots at minimum.

## Supplies

Pools, brushes, sprayers, decon solution, bags and drums for waste, chairs or stools for doffing, and a clean area for spare PPE.

## Emergency decon

Have a plan for an injured or collapsed entrant: rapid gross decon, cut-away suit removal and handoff to medical care. Practice it.

## Decon waste

Rinse water, used PPE and brushes are contaminated. Contain and manage them as the site plan requires.

{{buy:589}}`,
    },
  ],
};
