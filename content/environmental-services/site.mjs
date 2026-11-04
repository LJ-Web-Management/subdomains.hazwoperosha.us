// environmental-services.hazwoperosha.us: field waste technicians at environmental services companies. Risograph print.
export default {
  brand: "ENV/SERVICES",
  title: "Training for Environmental Services Field Technicians | Lab Packs, Drums, Load-outs | ENV/SERVICES",
  description: "Training for hazardous waste field technicians: HAZWOPER and RCRA waste technician, RCRA/DOT combined, 24-hour TSD operations, TSD refresher, manifests and decontamination.",
  theme: "#1b1b3a",
  fonts: "family=Rubik+Mono+One&family=Karla:wght@400;500;700",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#f6f1e7"/><circle cx="13" cy="13" r="9" fill="#ff48b0" opacity=".85"/><circle cx="19" cy="19" r="9" fill="#00a9b5" opacity=".85"/></svg>`,
  coursesTagline: "The training stack for technicians who pack, consolidate, profile and ship hazardous waste.",
  guidesTagline: "Field notes on lab packing, compatibility and building a career as a waste tech.",

  courses: [
    {
      id: 599, short: "Waste Technician",
      summary: "Combined HAZWOPER and RCRA training for hazardous waste management technicians.",
      body: `Field techs work on both sides of the line: OSHA worker safety and EPA waste rules. This 24-hour course covers both, for technicians who pack lab waste, consolidate drums, profile streams and load out shipments.`,
      topics: ["HAZWOPER worker safety", "RCRA identification and waste codes", "Lab packing and consolidation", "Compatibility and segregation", "Manifests and DOT basics", "Spill and emergency response"],
      who: "Field and facility technicians at environmental services companies.",
    },
    {
      id: 403, short: "RCRA/DOT Combined",
      summary: "RCRA generator rules plus DOT hazmat employee training.",
      body: `Techs classify, package, mark and load hazmat every day. That makes them DOT hazmat employees under 49 CFR 172.704. This eight-hour course combines DOT and RCRA.`,
      topics: ["Hazmat classification", "Packaging and UN specs", "Marking and labeling", "Shipping papers and manifests", "Security awareness"],
      who: "Techs and drivers who prepare or load shipments.",
    },
    {
      id: 582, short: "24-Hr TSD Operations",
      summary: "The 24-hour HAZWOPER for work at your company's permitted TSD facility.",
      body: `When techs work at the company's own treatment, storage and disposal facility, 1910.120(p) applies: 24 hours of initial training.`,
      topics: ["Paragraph (p) requirements", "Waste receipt and sampling", "Container and tank handling", "Facility emergency response"],
      who: "Techs who work at a permitted TSDF.",
    },
    {
      id: 594, short: "8-Hr TSD Refresher",
      summary: "The annual 8-hour refresher for TSD workers.",
      body: `Annual eight-hour refresher under paragraph (p).`,
      topics: ["(p) program review", "Incident lessons", "PPE and monitoring review"],
      who: "TSD workers who completed the 24-hour.",
    },
    {
      id: 580, short: "Manifest",
      summary: "Manifests and e-Manifest, box by box.",
      body: `Techs often prepare manifests for customers to sign. Two hours on getting them right.`,
      topics: ["Manifest boxes", "Generator certification", "e-Manifest", "Tracking"],
      who: "Techs and project managers who prepare manifests.",
    },
    {
      id: 584, short: "Decontamination",
      summary: "A 20-minute module on decon procedures.",
      body: `A quick module on decon line stations and doffing safely.`,
      topics: ["Zones", "Stations", "Doffing", "Equipment decon"],
      who: "Field techs.",
    },
  ],

  guides: [
    {
      slug: "lab-packing-safely",
      title: "Lab packing safely: a field tech's checklist",
      description: "Lab packs look simple: small bottles in a drum. Getting them wrong can start a fire in the truck.",
      date: "2026-10-25",
      courses: [599, 403],
      body: `A lab pack is many small containers of chemical waste packed into a larger outer container, usually a drum, with absorbent. They're common at labs, schools, hospitals and cleanouts.

## Before you pack

1. **Inventory every container.** Name, quantity, condition.
2. **Classify each item** by DOT hazard class and RCRA waste codes.
3. **Segregate** into compatible groups. Flammables, oxidizers, acids, bases, water-reactives and poisons each get their own pack.
4. **Set aside problem items:** unknowns, peroxide formers, shock-sensitive materials, leaking or bulging containers, compressed gases. These need special handling.

## Packing

- Use the outer packaging authorized for the hazard class, typically a UN-specification drum.
- Inner containers must be tightly closed and in good condition.
- Surround them with enough **compatible absorbent** to absorb the liquid contents. Don't use combustible absorbent with oxidizers.
- Keep inner containers upright and separated.
- Respect the weight and volume limits for the packaging and for the DOT lab pack provisions.

## Paperwork

- A **packing list** for each drum, inside and with the shipping papers
- Correct DOT description on the manifest
- Waste codes and LDR information

## Never

- Mix incompatibles in one pack "because there's room"
- Pack an unknown without identifying it
- Open a container to check what's in it unless that's your trained task and procedure

{{buy:599}}`,
    },
    {
      slug: "compatibility-when-consolidating-waste",
      title: "Chemical compatibility when consolidating waste",
      description: "Bulking drums saves money. Mixing the wrong two saves nothing. How techs check compatibility.",
      date: "2026-10-25",
      courses: [599],
      body: `Consolidating, or bulking, combines compatible wastes into larger containers to cut disposal costs. It's routine work, and it's where many waste-industry incidents start.

## Classic bad combinations

| Mix | What can happen |
|---|---|
| Acids + cyanides or sulfides | Toxic gas (HCN, H2S) |
| Acids + bases (concentrated) | Violent heat and splattering |
| Oxidizers + flammables or organics | Fire or explosion |
| Water-reactives + aqueous wastes | Heat, flammable gas, fire |
| Bleach + ammonia | Toxic chloramine gas |
| Bleach + acids | Chlorine gas |

## Before consolidating

1. **Know both wastes.** Approved profiles, not guesses.
2. **Check compatibility** with a chart such as the EPA chemical compatibility chart, and your company's procedures.
3. **Do a bench test** when your procedure calls for it: a small, controlled mix with monitoring for heat, gas and reaction.
4. **Ground and bond** containers when transferring flammable liquids.
5. **Monitor the air** during transfer, and have the right PPE and ventilation.

## During

- Pour slowly and watch for heat, fuming, bubbling or color change.
- Stop at the first sign of reaction and back away.

## After

Label the receiving container with the combined contents, update the profile if needed, and record what was consolidated, when and by whom.

{{buy:599}}`,
    },
    {
      slug: "waste-technician-training-path",
      title: "The waste technician training path",
      description: "From new hire to lead tech: the certificates field techs usually build up, in order.",
      date: "2026-10-25",
      courses: [599, 403, 582],
      body: `Environmental services companies hire people with all kinds of backgrounds. The training path tends to look the same.

## Year one

| Training | Why |
|---|---|
| 40-hour HAZWOPER | Field work on customer sites and cleanups |
| [[403]] | You'll be packaging, marking and loading hazmat within weeks |
| [[599]] | The technician skills: lab packs, consolidation, profiles |
| Respirator fit test and medical clearance | Before respirator use |

If you'll also work at the company's permitted facility, add [[582]].

## Every year

- 8-hour HAZWOPER refresher, and [[594]] if you work at the TSDF
- Respirator fit test
- Medical surveillance exam, if you're covered

## Every three years

- DOT hazmat refresher

## Moving up to lead tech

- 8-hour HAZWOPER supervisor training
- [[580]] if you'll prepare manifests for customers
- Incident command if you'll lead emergency response jobs

## Keep your own copies

Your certificates are your résumé in this industry. Keep copies on your phone and in a folder. When you change companies, the right paperwork can save you weeks of retraining.`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(599)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div><a class="logo" href="/">ENV/SERVICES</a><p>Training for environmental services field technicians from HAZWOPER OSHA Training LLC, delivered on hazwoper-osha.com.</p></div>
<div><h2>Courses</h2>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h2>Contact</h2><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc } = h;
    return `<section class="hero"><div class="r1" aria-hidden="true"></div><div class="r2" aria-hidden="true"></div><div class="grain" aria-hidden="true"></div><div class="wrap hero-in">
<div>
<p class="hero-call">Questions? Call <a href="tel:+18664296742">(866) 429-6742</a></p>
<h1>Lab packs, drums &amp; <span>load-outs.</span></h1>
<p class="hero-lede">The training stack for technicians at environmental services companies: HAZWOPER, RCRA, DOT and TSDF.</p>
<div class="hero-cta">${h.buy(599, "Waste Technician · $199.99")}<a class="btn btn-alt" href="/guides/waste-technician-training-path">Training path</a></div>
</div></div></section>

<section class="sec"><div class="wrap">
<h2 class="title">The stack</h2>
<div class="cgrid">${courses.map((c, i) => `<article class="cc cc${i % 2}"><p class="meta">${esc(c.duration)} · #${c.id}</p><h3><a href="${c.url}">${esc(c.short)}</a></h3><p>${esc(c.summary)}</p><div class="cc-foot"><b>${money(c.price)}</b>${h.buy(c.id, "Enroll", "btn btn-sm")}</div></article>`).join("")}</div>
</div></section>

<section class="sec sec-ink"><div class="wrap">
<h2 class="title">Field notes</h2>
<div class="guide-list">${guides.map(h.guideCard).join("")}</div>
</div></section>`;
  },
};
