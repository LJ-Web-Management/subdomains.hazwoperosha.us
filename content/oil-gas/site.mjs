// oil-gas.hazwoperosha.us: HAZWOPER, gas detection and spill response for oilfield crews. Rugged slab.
export default {
  brand: "OilfieldHAZ",
  title: "HAZWOPER Training for Oil & Gas Crews | H2S, Gas Detection, Spills | OilfieldHAZ",
  description: "HAZWOPER and spill response training for upstream and midstream oil and gas crews: 40-hour oil & gas spill response, gas detection, spill prevention, booms and the annual refresher.",
  theme: "#151311",
  fonts: "family=Zilla+Slab:wght@500;600;700&family=Inter:wght@400;500;600",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#151311"/><path d="M16 4l-8 24h16z" fill="none" stroke="#ff8a1f" stroke-width="2.5"/><path d="M11 18h10M9.5 23h13" stroke="#ff8a1f" stroke-width="2"/></svg>`,
  coursesTagline: "Training for crews on the pad, at the tank battery and along the gathering line.",
  guidesTagline: "Field guides on H2S, benzene, produced water spills and HAZWOPER in the oil patch.",

  courses: [
    {
      id: 591, short: "40 Hr Oil & Gas Spill",
      summary: "The 40-hour HAZWOPER for crews who respond to crude, condensate, fuel and produced-water spills.",
      body: `When cleanup is part of the job, HAZWOPER applies. This is the 40-hour initial training under 29 CFR 1910.120(e), focused on the oil patch: crude and condensate, produced water, H2S and benzene, and the long shifts of a land spill cleanup.`,
      topics: ["Crude, condensate and produced-water hazards", "H2S and benzene exposure", "Flammable atmospheres and LEL", "Land and water spill recovery", "Heat stress in protective clothing", "Oily waste and decon"],
      who: "Roustabouts, spill response contractors, production and midstream field crews.",
    },
    {
      id: 1056, short: "Gas Detection",
      summary: "Using multi-gas meters and PIDs to stay out of H2S, LEL and low-oxygen atmospheres.",
      body: `Tank batteries, pits, cellars and vaults can hold H2S, hydrocarbon vapors and low oxygen. This two-hour course covers what your monitor measures, bump tests and calibration, and the readings that mean you leave now.`,
      topics: ["Oxygen, LEL, H2S and CO sensors", "PIDs for hydrocarbon vapors", "Bump test vs calibration", "Alarm set points", "Monitoring before entering cellars, pits and tanks"],
      who: "Anyone who carries a personal gas monitor in the field.",
    },
    {
      id: 416, short: "Spill Prevention & Response",
      summary: "Preventing and responding to oil spills at production and storage sites under SPCC and OSHA.",
      body: `Most production facilities with aboveground oil storage need an SPCC plan, and SPCC requires training for oil-handling personnel. This two-hour course covers spill prevention, first response and reporting.`,
      topics: ["SPCC basics for production facilities", "Secondary containment and inspections", "First response: stop, contain, report", "PPE for incidental spills", "Reporting"],
      who: "Pumpers, lease operators, truck drivers and facility staff.",
    },
    {
      id: 478, short: "Booms",
      summary: "Absorbent and containment booms for ditches, creeks and ponds near well sites.",
      body: `A spill that reaches a ditch or creek becomes a much bigger problem. This one-hour course covers placing booms ahead of the oil, angling them in current and anchoring them.`,
      topics: ["Absorbent vs containment booms", "Ditch and creek deployment", "Angling in current", "Recovery and disposal"],
      who: "Field crews and spill responders working near water.",
    },
    {
      id: 592, short: "40 Hr Pipeline",
      summary: "The 40-hour HAZWOPER for pipeline and gathering-system crews who respond to releases.",
      body: `For midstream crews who respond to line strikes, leaks and contaminated rights-of-way, built around pipeline work.`,
      topics: ["Pipeline product hazards", "Leak and line-strike response", "Incident command", "Contaminated rights-of-way", "Monitoring and PPE"],
      who: "Midstream operators, gathering-system crews and pipeline contractors.",
    },
    {
      id: 595, short: "8 Hr Refresher",
      summary: "The annual 8-hour HAZWOPER refresher.",
      body: `Keep your 40-hour current. OSHA requires eight hours of refresher training every year.`,
      topics: ["Hazard review", "PPE and monitoring review", "Incident case studies"],
      who: "Anyone with a current 40- or 24-hour certificate.",
    },
  ],

  guides: [
    {
      slug: "h2s-and-benzene-on-spill-cleanups",
      title: "H2S and benzene on oilfield spill cleanups",
      description: "The two exposures that turn a routine spill into a medical emergency, and how crews stay ahead of them.",
      date: "2026-10-25",
      courses: [591, 1056],
      body: `Crude oil and produced water spills look like a mess to clean up. The real risk is in the air.

## Hydrogen sulfide (H2S)

H2S comes with sour crude and produced water and collects in low spots: cellars, pits, tank hatches and ditches.

- It smells like rotten eggs at low levels, but **deadens your sense of smell** at higher levels. Never rely on your nose.
- It's heavier than air.
- At high concentrations a single breath can knock a person down.

**Controls:** personal H2S monitors on every worker, area monitors at known sources, wind socks, upwind approach and a rescue plan. Never enter a low spot after someone goes down without SCBA.

## Benzene

Benzene is part of crude and condensate. It's a known human carcinogen with an OSHA PEL of 1 ppm (8-hour TWA) under 29 CFR 1910.1028.

- Exposure is highest when oil is fresh, hot or agitated.
- A PID can screen for total hydrocarbon vapors, and benzene-specific tubes or sampling confirm.

## LEL

Fresh spills can create flammable atmospheres. Keep ignition sources out until the LEL reading is confirmed safe, often below 10% LEL as a work limit.

## The monitoring order

1. Oxygen
2. Flammability (LEL)
3. Toxics (H2S, then benzene via PID or tubes)

{{buy:1056}}`,
    },
    {
      slug: "does-hazwoper-apply-in-the-oilfield",
      title: "Does HAZWOPER apply in the oilfield?",
      description: "Routine production work usually isn't HAZWOPER. Spill cleanup and emergency response often are.",
      date: "2026-10-25",
      courses: [591, 416],
      body: `Ask ten oilfield safety managers whether HAZWOPER applies and you'll get several answers. Here's the practical way to think about it.

## Usually not HAZWOPER

- Normal production, drilling and well servicing
- Incidental spills that the crew on site can clean up with normal equipment and no significant hazard

These are covered by other OSHA rules, such as hazard communication, PPE and respiratory protection.

## Often HAZWOPER

- **Emergency response** to a release that's beyond incidental, for example a large tank or line failure, H2S release or fire (1910.120(q))
- **Cleanup of a spill** when it's directed by a government agency, as with state-ordered remediation
- **Contractors whose business is spill cleanup**, often required by the operator's contract

## Operators often require it anyway

Many operators require 40-hour HAZWOPER for spill-response contractors and 24-hour or awareness training for their own field staff, whatever the exact regulatory trigger. Check your MSA.

## A practical setup

| Role | Training |
|---|---|
| Lease operators and pumpers | [[416]] and gas detection |
| In-house spill response team | [[591]] plus refresher |
| Spill cleanup contractors | [[591]] plus refresher |
| Midstream emergency responders | [[592]] |`,
    },
    {
      slug: "produced-water-spills",
      title: "Produced water spills: why they're harder than oil",
      description: "Saltwater spills kill vegetation, sterilize soil and travel fast. Response has to be quick and thorough.",
      date: "2026-10-25",
      courses: [416, 478, 591],
      body: `Produced water, the brine that comes up with oil and gas, is often treated as less serious than a crude spill. It isn't.

## Why produced water is different

- **It moves fast.** Brine soaks in and runs off faster than oil.
- **It sterilizes soil.** High chloride levels kill vegetation and can leave a bare scar for years.
- **It doesn't float.** Booms won't catch it on water. It mixes in.
- **It may carry oil, H2S and NORM** (naturally occurring radioactive material), depending on the formation.

## First response

1. Stop the source: shut in the well, close the valve or kill the pump.
2. Check the air if the water is sour (H2S).
3. Contain with earthen berms or dikes ahead of the flow, and block culverts and ditches.
4. Recover free liquid with a vacuum truck.
5. Report it. Most producing states have reporting thresholds for produced water releases, often lower than for oil.

## Cleanup

Saltwater-impacted soil usually needs excavation or treatment. Sample to define the extent, and follow your state agency's cleanup guidance.

## Booms

Booms help with any oil sheen on top, but they won't contain the brine itself. For water, the answer is earthen containment and fast recovery.

{{buy:416}}`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(591)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div><a class="logo" href="/">Oilfield<span>HAZ</span></a><p>Oil and gas HAZWOPER training from HAZWOPER OSHA Training LLC, delivered on hazwoper-osha.com.</p></div>
<div><h2>Courses</h2>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h2>Contact</h2><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    return `<section class="hero"><div class="glow" aria-hidden="true"></div><div class="wrap hero-in">
<div>
<p class="hero-call">Questions? Call <a href="tel:+18664296742">(866) 429-6742</a></p>
<h1>From the pad to the <span>pipeline.</span></h1>
<p class="hero-lede">HAZWOPER, gas detection and spill response training for oil and gas crews. Online, on your schedule, between hitches.</p>
<div class="hero-cta">${h.buy(591, "Get certified · $249.99")}<a class="btn btn-alt" href="/courses/">All courses</a></div>
</div>
</div></section>

<section class="hazards"><div class="wrap hz-in">
<div><b>H2S</b><span>Deadens your sense of smell. Monitor, don't sniff.</span></div>
<div><b>LEL</b><span>Fresh spills can be flammable. Check before ignition sources.</span></div>
<div><b>C6H6</b><span>Benzene PEL is 1 ppm. Fresh crude releases it.</span></div>
<div><b>NaCl</b><span>Produced water sterilizes soil. Contain it fast.</span></div>
</div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Courses for the <span>crew</span></h2>
<div class="cgrid">${courses.map((c) => `<article class="cc"><p class="meta">${esc(c.duration)} · #${c.id}</p><h3><a href="${c.url}">${esc(c.name)}</a></h3><p>${esc(c.summary)}</p><div class="cc-foot"><b>${money(c.price)}</b>${h.buy(c.id, "Enroll", "btn btn-sm")}</div></article>`).join("")}</div>
</div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Field <span>guides</span></h2>
<div class="guide-list">${guides.map(h.guideCard).join("")}</div>
</div></section>`;
  },
};
