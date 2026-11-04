// spill-response.hazwoperosha.us: spill prevention, spill kits, booms and spill response. Aqua glass.
export default {
  title: "Spill Response Training Online | SPCC, Spill Kits & Booms | Industrial Certified Training",
  description: "Online spill prevention and response training: SPCC and OSHA spill response, spill kit selection, absorbent and containment booms, air monitoring and 40-hour oil spill HAZWOPER.",
  theme: "#065a6b",
  fonts: "family=Outfit:wght@300;400;500;600;700",
  coursesTagline: "Short, practical courses for the people who'll be first to the spill, plus the full 40-hour for response crews.",
  guidesTagline: "How to prevent spills, pick the right kit and stop a release before it reaches a drain.",

  courses: [
    {
      id: 416, short: "Spill Prevention & Response",
      summary: "Spill prevention and first response for oil and chemical handlers under OSHA and EPA SPCC rules.",
      body: `Most spills are small, and most become big because the first person on scene didn't know what to do. This two-hour course teaches facility staff how spills happen, how to prevent them and how to respond safely to the ones that still occur. It covers the training topics EPA's SPCC rule expects for oil-handling personnel.`,
      topics: ["Common causes of spills at facilities", "SPCC plans and secondary containment", "Assessing a spill: is it safe to respond?", "Stop, contain, clean up, report", "PPE for incidental spill response", "Reporting thresholds and who to call"],
      who: "Oil-handling personnel, warehouse and maintenance staff, fuel and chemical transfer operators.",
    },
    {
      id: 479, short: "Spill Kit Selection & Use",
      summary: "Choosing, stocking, placing and using the right spill kit for oil, chemical and universal spills.",
      body: `A spill kit only helps if it's the right type, it's where the spill happens and people know how to use it. This one-hour course covers kit types, sizing to your worst likely spill, placement and the step-by-step use of each item in the kit.`,
      topics: ["Universal, oil-only and hazmat kits", "Sizing a kit to your largest container", "Where to place kits", "Using socks, pads, pillows and drain covers", "Disposal of used absorbents", "Inspection and restocking"],
      who: "Facility managers, EHS staff and anyone expected to use a spill kit.",
    },
    {
      id: 478, short: "Booms",
      summary: "Using absorbent and containment booms to stop spills on land and water.",
      body: `Booms are the line between a contained spill and an environmental release. This one-hour course explains the difference between absorbent and containment booms, how to deploy and connect them, and how to keep them working in current, wind and rain.`,
      topics: ["Absorbent vs containment booms", "Deploying booms on land, in ditches and on water", "Connecting and anchoring boom sections", "Current, wind and wave limits", "Protecting drains and outfalls", "Recovery and disposal"],
      who: "Fuel terminal staff, marina and dock workers, industrial facilities near waterways and spill response technicians.",
    },
    {
      id: 1056, short: "Air Monitoring & Gas Detection",
      summary: "Using gas detectors to decide when a spill area is safe to enter.",
      body: `Fuel and solvent spills can create flammable or toxic atmospheres, especially in pits, sumps and enclosed spaces. This two-hour course covers multi-gas meters and photoionization detectors, bump tests and calibration, and the readings that mean "get out."`,
      topics: ["Oxygen, LEL, H2S and CO sensors", "Photoionization detectors for vapors", "Bump testing and calibration", "Monitoring order: oxygen, flammability, toxics", "Alarm set points and action levels", "Confined space considerations"],
      who: "Spill responders, confined space attendants, hazmat technicians and EHS staff.",
    },
    {
      id: 591, short: "40 Hr Oil & Gas Spill HAZWOPER",
      summary: "The full 40-hour HAZWOPER for crews whose job is responding to oil and fuel spills.",
      body: `When cleanup is your job, not just a task you might face, you need HAZWOPER. This is the 40-hour initial training under 29 CFR 1910.120(e), focused on crude and refined product spills on land and water.`,
      topics: ["Crude and refined product hazards, including benzene and H2S", "Flammable atmospheres and monitoring", "Booming, skimming and land-based recovery", "Shoreline and soil cleanup", "PPE, decon and heat stress", "Oily waste handling"],
      who: "Oil spill response contractors, OSRO crews and oilfield, pipeline and terminal response teams.",
    },
  ],

  guides: [
    {
      slug: "spcc-training-requirements",
      title: "SPCC training requirements: what 40 CFR 112.7(f) actually asks for",
      description: "If your facility needs an SPCC plan, your oil-handling staff need training and an annual briefing. Here's what that means.",
      date: "2026-10-25",
      courses: [416, 479],
      body: `EPA's Spill Prevention, Control and Countermeasure (SPCC) rule, 40 CFR Part 112, applies to facilities that store oil above certain amounts and could reasonably discharge it to navigable waters or shorelines.

## Does it apply to you?

Generally, a non-transportation facility needs an SPCC plan if it has:

- More than **1,320 gallons** of aboveground oil storage capacity, counting only containers of 55 gallons or more, or
- More than **42,000 gallons** of completely buried storage capacity

"Oil" includes fuels, lubricants, hydraulic oil, vegetable oils and animal fats.

## The training rule

Under 40 CFR 112.7(f), the owner or operator must do three things.

1. **Train oil-handling personnel** in the topics listed below.
2. **Designate a person** accountable for discharge prevention, who reports to facility management.
3. **Hold discharge prevention briefings at least once a year**, covering known discharges or failures, malfunctioning components and recently developed precautions.

The required training topics are:

- operation and maintenance of equipment to prevent discharges
- discharge procedure protocols
- applicable pollution control laws, rules and regulations
- general facility operations
- the contents of the facility's SPCC plan

## What "oil-handling personnel" means

Anyone who fills, transfers, drains or maintains oil containers and equipment. That usually includes fuel truck drivers on site, maintenance mechanics, warehouse staff who move drums and operators who run transfer pumps.

## Making it stick

- Train new staff before they handle oil, not after the first spill.
- Keep a sign-in sheet or certificate for each person.
- Use the annual briefing to review any spills from the past year.
- Walk the site during the briefing: kits, valves, containment and drains.

> The SPCC plan should name where spill kits are and what they're for. Training people on the kit they'll actually use is the fastest way to make the plan real.

{{buy:416}}`,
    },
    {
      slug: "choosing-a-spill-kit",
      title: "Choosing a spill kit: universal, oil-only or hazmat",
      description: "The wrong absorbent can fail or even react with a spill. Here's how to pick, size and place your kits.",
      date: "2026-10-25",
      courses: [479],
      body: `Spill kits come in three main types. Manufacturers usually color-code the absorbents, and the color tells you what each one is for.

## The three types

| Type | Common color | Absorbs | Use it for |
|---|---|---|---|
| Universal | Gray | Oil, water, coolants and mild chemicals | Maintenance shops, general facility use |
| Oil-only | White | Oil and fuel only. Repels water | Fuel areas, outdoors in rain, on water |
| Hazmat / chemical | Yellow | Acids, bases and aggressive chemicals | Labs, chemical storage, battery rooms |

Color conventions are common but not universal. Always read the label.

## Why type matters

- **Universal on water** soaks up the water too, and fills up before it gets the oil.
- **Oil-only on a chemical spill** won't absorb it at all.
- **Ordinary absorbents on strong oxidizers or acids** can react, heat up or degrade. Chemical kits use materials that stay stable.

## Sizing

Size the kit to the largest container in the area, not the average spill. A 55-gallon drum area needs a kit rated for at least 55 gallons, often a wheeled bin or drum kit. A forklift charging station may only need a 5-gallon bag kit plus acid neutralizer.

## Placement

- Within reach of where spills happen: fuel dispensers, drum storage, loading docks, transfer points
- On the path to the nearest drain, so you can cover the drain first
- Clearly labeled and never blocked by pallets

## What's inside

Socks or booms to ring the spill, pads and pillows to soak it up, a drain cover, nitrile gloves and goggles, disposal bags and ties, and instructions.

## Restock and inspect

Check kits monthly, or after any use. Seals broken, items missing or gloves cracked means restock now.

{{buy:479}}`,
    },
    {
      slug: "absorbent-vs-containment-booms",
      title: "Absorbent vs containment booms: deploying a boom that holds",
      description: "Booms look simple. Getting them to hold in current and wind takes the right type, angle and anchoring.",
      date: "2026-10-25",
      courses: [478, 591],
      body: `"Boom" means two different tools. Using the wrong one, or setting the right one wrong, is how a spill gets past the line.

## Two kinds

**Absorbent booms** are sausage-shaped tubes of absorbent, usually oil-only. They soak up oil as they hold it back. They suit small spills, sheens, ditches and calm water, and they get thrown away when they're saturated.

**Containment booms** are reusable floating barriers with a float on top and a skirt hanging below the water. They don't absorb anything. They hold oil in place so skimmers or absorbents can recover it, and they suit larger spills and open water.

## Placement basics

1. **Get downstream first.** Put the boom where the oil is going, not where it is.
2. **Angle it in current.** Boom set straight across a current lets oil slip underneath. Angle it so oil flows along the boom to a collection point on calmer water.
3. **Overlap or connect.** Gaps between sections are leaks. Connect containment boom with its end connectors, and overlap absorbent booms by at least a foot.
4. **Anchor both ends.** Wind and current will fold an unanchored boom.
5. **Protect drains and outfalls** with drain covers and a ring of absorbent boom.

## When booms fail

| Failure | What you see | Cause |
|---|---|---|
| Entrainment | Oil drops pulled under the skirt | Current too fast for the angle |
| Splash-over | Oil washed over the top | Waves or chop |
| Drainage failure | Oil pours under the skirt | Too much oil held in one place |
| Planing | Boom lies flat | Too much tension or current |

When current is faster than about **0.7 knots** (roughly 1.3 feet per second), boom set at right angles to the flow will usually lose oil. Deflect instead of trying to hold.

## Recovery

Collect saturated absorbent booms into lined drums or bags and treat them as waste from the spilled product. Clean containment boom before you put it back in storage.

{{buy:478}}`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(416)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div><a class="logo" href="/">${h.logo}</a><p>Spill prevention and response training by Industrial Certified Training, delivered on hazwoper-osha.com.</p></div>
<div><h4>Courses</h4>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h4>Talk to us</h4><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    return `<section class="hero"><div class="wrap hero-in">
<div>
<p class="hero-call">Questions? Call <a href="tel:+18664296742">(866) 429-6742</a></p>
<h1>Contain it <b>before it spreads.</b></h1>
<p class="hero-lede">Spill prevention, response and equipment training for fuel, oil and chemical handlers. Short courses for your whole facility, and the full 40-hour for response crews.</p>
<div class="hero-cta">${h.buy(416, "Get spill-ready · $49.99")}<a class="btn btn-alt" href="/courses/">See all courses</a></div>
</div>
</div></section>

<section class="sec" id="courses"><div class="wrap">
<h2 class="title">Training for the <b>first five minutes.</b></h2>
<div class="cgrid">${courses.map((c) => `<article class="gcard"><p class="tag">${esc(c.duration)} · #${c.id}</p><h3><a href="${c.url}">${esc(c.name)}</a></h3><p>${esc(c.summary)}</p><div class="gcard-foot"><b>${money(c.price)}</b>${h.buy(c.id, "Enroll", "btn btn-sm")}</div></article>`).join("")}</div>
</div></section>

<section class="sec" id="kits"><div class="wrap kits-in">
<div><h2 class="title left">Know your <b>kit.</b></h2><p class="muted">Absorbents are usually color-coded. Use the wrong one and it fills with water, or doesn't work at all. <a href="/guides/choosing-a-spill-kit">Read the full guide →</a></p></div>
<div class="kits">
<div class="kit"><i style="background:#9aa5ab"></i><b>Universal</b><span>Oil, water, coolants, mild chemicals</span></div>
<div class="kit"><i style="background:#f4f7f8"></i><b>Oil-only</b><span>Oil and fuel. Repels water</span></div>
<div class="kit"><i style="background:#facc15"></i><b>Hazmat</b><span>Acids, bases and aggressive chemicals</span></div>
</div></div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Spill <b>guides</b></h2>
<div class="guide-list">${guides.map(h.guideCard).join("")}</div>
</div></section>

<section class="sec cta"><div class="wrap cta-in"><h2>Train the people <b>nearest the spill.</b></h2><p>Buy seats for a whole shift in one checkout.</p>${h.buy(416, "Enroll your team")}</div></section>`;
  },
};
