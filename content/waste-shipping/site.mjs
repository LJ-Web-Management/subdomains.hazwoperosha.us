// waste-shipping.hazwoperosha.us: shipping hazardous waste (RCRA + DOT). Cargo label look.
export default {
  brand: "Waste//Freight",
  title: "Hazardous Waste Shipping Training | RCRA, DOT Hazmat & Manifests | Waste//Freight",
  description: "Training for the people who ship hazardous waste: combined RCRA/DOT hazmat training, hazardous waste manifests, generator training and universal waste shipping.",
  theme: "#2a1d10",
  fonts: "family=Black+Ops+One&family=Courier+Prime:wght@400;700&family=Inter:wght@400;600",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#c9a878"/><rect x="5" y="7" width="22" height="18" fill="#fffdf6" stroke="#2a1d10" stroke-width="2"/><path d="M8 20h2M11 20h1M13 20h3M17 20h1M19 20h2M22 20h2" stroke="#2a1d10" stroke-width="3"/></svg>`,
  coursesTagline: "Training for everyone who classifies, packages, marks or signs for a hazardous waste shipment.",
  guidesTagline: "Shipping papers, markings and the steps between the drum and the truck.",

  courses: [
    {
      id: 403, short: "RCRA/DOT Combined",
      summary: "One course covering RCRA generator rules and DOT hazmat employee training for waste shippers.",
      body: `Hazardous waste shipments are DOT hazardous materials shipments. Anyone who classifies, packages, marks, labels or signs for them is a DOT hazmat employee and needs training under 49 CFR 172.704, at least every three years. This eight-hour course combines that with RCRA generator training.`,
      topics: ["RCRA generator requirements", "Hazmat classification", "Packaging and UN specifications", "Marking and labeling", "Shipping papers and the manifest", "Security awareness"],
      who: "Shipping staff, EHS staff and anyone who prepares or signs hazardous waste shipments.",
    },
    {
      id: 580, short: "Manifest",
      summary: "The Uniform Hazardous Waste Manifest and e-Manifest, box by box.",
      body: `A two-hour course on preparing and signing EPA Form 8700-22, using e-Manifest and tracking shipments to the destination facility.`,
      topics: ["The manifest, box by box", "Generator certification", "e-Manifest", "Exception reports", "Records"],
      who: "Anyone who prepares or signs manifests.",
    },
    {
      id: 601, short: "Generator Training",
      summary: "RCRA generator training: from waste determination to shipment.",
      body: `Eight hours on generator rules: identification, containers, accumulation, inspections, emergencies and preparing waste for transport.`,
      topics: ["Waste determination", "Containers and labels", "Accumulation times", "Pre-transport requirements", "Land disposal restrictions"],
      who: "Waste handlers and EHS staff.",
    },
    {
      id: 600, short: "Generator Refresher",
      summary: "Annual RCRA refresher.",
      body: `Four hours of annual review for staff who completed generator training.`,
      topics: ["Rules review", "Common violations", "Updates"],
      who: "Staff who completed generator training.",
    },
    {
      id: 602, short: "Universal Waste",
      summary: "Managing and shipping universal waste under 40 CFR 273.",
      body: `Universal waste has its own, simpler shipping rules, but batteries, lamps and aerosol cans can still be DOT hazmat. Two hours on handling and shipping.`,
      topics: ["Universal waste categories", "Labels and accumulation", "Shipping to destination facilities", "DOT considerations for batteries"],
      who: "Facilities, warehouse and shipping staff.",
    },
  ],

  guides: [
    {
      slug: "dot-hazmat-training-for-waste-shippers",
      title: "DOT hazmat training for hazardous waste shippers",
      description: "If you sign the manifest, you're a DOT hazmat employee. What 49 CFR 172.704 requires.",
      date: "2026-10-25",
      courses: [403],
      body: `Many facilities train their waste staff on RCRA and forget DOT. But a hazardous waste shipment is a hazardous materials shipment, and the manifest is a DOT shipping paper.

## Who's a hazmat employee?

Anyone who, in the course of their job, directly affects hazmat transportation safety. For waste shipments that includes people who:

- Classify the waste for shipping
- Select or fill packaging
- Mark and label containers
- Prepare or sign the manifest
- Load or block and brace containers

## What 49 CFR 172.704 requires

| Component | Covers |
|---|---|
| General awareness | The hazmat regulations and how to recognize hazmat |
| Function-specific | The exact tasks the employee does |
| Safety | Emergency response information, protecting yourself, avoiding accidents |
| Security awareness | Security risks and how to recognize threats |
| In-depth security | Required if your company must have a security plan |

## When

- **Within 90 days** of starting a hazmat job. Until then, work only under the direct supervision of a trained employee.
- **At least every three years** after that, and when regulations or the job change.

## Records

Keep a record for each employee: name, completion date, training materials or description, trainer's name and address, and certification that the employee was trained and tested. Keep it for as long as they're employed and 90 days after.

{{buy:403}}`,
    },
    {
      slug: "preparing-a-hazardous-waste-shipment",
      title: "Preparing a hazardous waste shipment, step by step",
      description: "From the drum to the truck: the pre-transport checklist generators should follow.",
      date: "2026-10-25",
      courses: [403, 580, 601],
      body: `Your waste vendor's driver is on the way. Here's the order of operations that keeps the shipment legal.

## 1. Profile and classify

The waste has an approved profile with the destination facility. You know the EPA waste codes and the DOT description: proper shipping name, hazard class, UN number and packing group.

## 2. Package

Use DOT-authorized packaging for the material, usually UN-specification drums or totes, in good condition and compatible with the contents. Closures tight.

## 3. Mark

Each container of 119 gallons or less needs the **hazardous waste marking** under 40 CFR 262.32:

> HAZARDOUS WASTE — Federal Law Prohibits Improper Disposal. If found, contact the nearest police or public safety authority or the U.S. Environmental Protection Agency.

Plus the generator's name and address, EPA ID number, manifest tracking number and EPA waste codes. Also the DOT markings: proper shipping name and UN number.

## 4. Label

DOT hazard labels for the hazard class, such as Flammable Liquid 3 or Corrosive 8.

## 5. Placards

Offer the right placards to the transporter if they don't already have them.

## 6. Manifest

Prepare the manifest (or e-Manifest), with a land disposal restriction (LDR) notice with the first shipment of each waste stream. Check every line against what's on the truck. Then sign.

## 7. Keep records

Keep your signed copy and track the return copy from the destination facility.

{{buy:580}}`,
    },
    {
      slug: "land-disposal-restriction-notices",
      title: "Land disposal restriction notices, explained",
      description: "The LDR notice is one of the most overlooked shipping documents. What it is and when you need one.",
      date: "2026-10-25",
      courses: [601, 580],
      body: `Hazardous waste generally can't be land-disposed until it's treated to meet EPA standards. The **land disposal restriction (LDR)** program in 40 CFR Part 268 enforces that, and generators play a part through paperwork.

## What the generator does

Under 40 CFR 268.7, the generator determines whether its waste must be treated before land disposal, and tells the receiving facility.

- **Send a one-time written notice** with the initial shipment of each waste to each treatment or storage facility.
- **Keep a copy** in your files.
- **Send a new notice** when the waste or the receiving facility changes.

## What the notice says

Typically the EPA waste codes, the manifest number of the first shipment, the waste's treatability group, any underlying hazardous constituents for characteristic wastes, and whether the waste meets treatment standards or needs treatment.

## Who prepares it

Many waste vendors prepare LDR notices for you, but **the generator is responsible** for their accuracy. Read before you sign.

## Common problems

| Problem | Fix |
|---|---|
| No notice on file for an old waste stream | Ask your vendor for the original or send a new one |
| Underlying constituents missing for D001 or D002 wastes | Review the profile and add them |
| Notice never updated after a process change | Re-profile and send a new notice |`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(403)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div><a class="logo" href="/">WASTE//FREIGHT</a><p>Hazardous waste shipping training from HAZWOPER OSHA Training LLC, delivered on hazwoper-osha.com.</p></div>
<div><h2>Courses</h2>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h2>Contact</h2><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    return `<section class="hero"><div class="wrap hero-in">
<div class="label">
<div class="label-top"><span>SHIPPER CERT</span><span>RCRA + 49 CFR 172</span></div>
<h1>Ship hazardous waste right.</h1>
<div class="bar" aria-hidden="true"></div>
<div class="label-bot"><span>FROM: your loading dock</span><span>TO: a permitted facility</span></div>
</div>
<div><p class="hero-lede">Manifests, DOT hazmat shipping and RCRA, for the people who package, mark and sign the papers.</p>
<div class="hero-cta">${h.buy(403, "Certify now · $149.99")}<a class="btn btn-alt" href="/guides/preparing-a-hazardous-waste-shipment">Shipping checklist</a></div></div>
</div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Courses</h2>
<div class="cgrid">${courses.map((c, i) => `<article class="cc"><div class="cc-top"><span>PKG ${i + 1} OF ${courses.length}</span><span>${c.lmsId ? `#${c.lmsId}` : ""}</span></div><h3><a href="${c.url}">${esc(c.short)}</a></h3><p>${esc(c.summary)}</p><p class="meta">${esc(c.duration)}</p><div class="cc-foot"><b>${money(c.price)}</b>${h.buy(c.id, "Enroll", "btn btn-sm")}</div></article>`).join("")}</div>
</div></section>

<section class="sec sec-dark"><div class="wrap">
<h2 class="title">Pre-transport checklist</h2>
<ol class="check"><li>Profile approved</li><li>DOT-authorized packaging</li><li>Hazardous waste marking</li><li>DOT labels</li><li>Placards offered</li><li>Manifest and LDR notice</li><li>Copies kept</li></ol>
</div></section>

<section class="sec"><div class="wrap">
<h2 class="title">Guides</h2>
<div class="guide-list">${guides.map(h.guideCard).join("")}</div>
</div></section>`;
  },
};
