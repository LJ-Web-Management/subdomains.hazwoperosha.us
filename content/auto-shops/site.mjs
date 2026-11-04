// auto-shops.hazwoperosha.us: hazardous waste training for auto repair, body and fleet shops. Racing garage.
export default {
  title: "Hazardous Waste Training for Auto Repair & Fleet Shops | Industrial Certified Training",
  description: "Hazardous waste training for auto repair, body and fleet maintenance shops: RCRA generator, universal waste, satellite accumulation, spill prevention, spill kits and awareness, with used oil and SQG guides.",
  theme: "#d7261e",
  fonts: "family=Russo+One&family=Inter:wght@400;500;600;700",
  hero: {
    title: "Clean shop. <span>Clean record.</span>",
    lede: "Used oil, solvents, brake cleaner, batteries and antifreeze. Hazardous waste training for techs and shop managers, so inspections go smoothly.",
    cta: [601, "Generator training · $89.99"],
    alt: ["/guides/used-oil-at-auto-shops", "Used oil rules"],
  },
  heroArt: `<div class="checker" aria-hidden="true"></div>`,
  coursesTagline: "Waste and spill training for shops and fleet garages.",
  guidesTagline: "Used oil, common shop wastes and small quantity generator rules.",

  courses: [
    { id: 601, short: "RCRA Generator",
      summary: "Hazardous waste generator training for shop owners and managers.",
      body: `Most shops are very small or small quantity generators. Eight hours on identifying, storing and shipping shop wastes correctly.`,
      topics: ["Common shop wastes", "Generator categories", "Containers and labels", "Accumulation limits", "Manifests"],
      who: "Shop owners, service managers and fleet managers." },
    { id: 415, short: "Satellite Accumulation",
      summary: "Waste containers at the bay: labels, limits and lids.",
      body: `Waste drums at each bay are satellite accumulation areas. Two hours on keeping them compliant.`,
      topics: ["Point of generation", "Labels", "Closed containers", "Moving full drums"],
      who: "Technicians and painters." },
    { id: 602, short: "Universal Waste",
      summary: "Batteries, lamps, aerosol cans and mercury switches.",
      body: `Shops collect batteries, aerosol cans and lamps. Two hours on universal waste rules.`,
      topics: ["Universal waste categories", "Aerosol cans", "Labeling and time limits", "Shipping"],
      who: "Technicians and parts staff." },
    { id: 416, short: "Spill Prevention",
      summary: "Preventing and responding to fluid spills in the shop.",
      body: `Oil, coolant and fuel spills are daily risks. Two hours on prevention and response.`,
      topics: ["Fluid transfers", "Floor drains", "Containment", "Reporting"],
      who: "Technicians and lube techs." },
    { id: 479, short: "Spill Kit Use",
      summary: "Using the shop spill kit.",
      body: `One hour on picking the right absorbent and using it.`,
      topics: ["Kit types", "Absorbents", "Disposal"],
      who: "All shop staff." },
    { id: 1099, short: "Awareness",
      summary: "Recognize a release you shouldn't handle yourself.",
      body: `Four hours on recognizing a serious release, getting clear and calling for help.`,
      topics: ["Recognize", "Isolate", "Notify"],
      who: "Shop staff and managers." },
  ],

  guides: [
    {
      slug: "used-oil-at-auto-shops",
      title: "Used oil at auto shops: the management standards",
      description: "Used oil has its own rules, separate from hazardous waste, as long as you manage it right.",
      date: "2026-10-25",
      courses: [416, 601],
      body: `Used oil that's recycled is regulated under EPA's **used oil management standards (40 CFR Part 279)**, not the full hazardous waste rules. That's good news for shops, as long as the oil stays clean.

## The basics for generators

- **Label** tanks and containers "Used Oil"
- Keep containers **in good condition** and not leaking
- **Respond to leaks and spills**: stop, contain, clean up and manage the cleanup materials properly
- Use a hauler with an **EPA ID number** for used oil transport, or self-transport within the limits allowed

## Don't mix

Mixing used oil with hazardous waste, such as chlorinated solvents or brake cleaner, can make the whole tank hazardous waste. Keep the solvent and parts-washer waste out of the used oil drum.

## Used oil filters

Non-terne-plated oil filters that are **hot-drained** (punctured or crushed and drained for at least 12 hours while near engine temperature) aren't hazardous waste under the federal rules. Many states require them to be recycled.

## State rules vary

Some states, like California, regulate used oil more strictly. Check your state.

{{buy:416}}`,
    },
    {
      slug: "common-hazardous-wastes-auto-shops",
      title: "Common hazardous wastes at auto repair shops",
      description: "Where hazardous waste comes from in a typical shop, and how to manage each stream.",
      date: "2026-10-25",
      courses: [601, 602, 415],
      body: `## Shop waste streams

| Waste | Typical management |
|---|---|
| Used oil | Used oil rules: label, recycle |
| Used oil filters | Hot-drain, then recycle |
| Parts washer solvent | Often hazardous waste (ignitable or listed). Many shops use a service that replaces solvent |
| Brake and carb cleaner (aerosol) | Spent cans may be universal waste or hazardous waste. Chlorinated cleaners can contaminate other waste |
| Antifreeze | Recycle. Some states regulate it as hazardous if contaminated |
| Lead-acid batteries | Return to supplier or recycle |
| Paint and thinner (body shops) | Usually hazardous waste |
| Shop rags | Laundered by an industrial laundry, or managed as waste |
| Mercury switches (older vehicles) | Universal waste |

## Biggest mistakes

1. Pouring solvents into the used oil drum
2. Open waste containers with funnels left in
3. Floor drains connected to storm sewers or septic systems. Fluids must never go down these.
4. No labels

## Training

Everyone who fills a waste container should know which drum gets what. [[415]] for techs, [[601]] for managers and [[602]] for universal waste.`,
    },
    {
      slug: "small-quantity-generator-shops",
      title: "Small quantity generator rules for shops",
      description: "Many shops are small quantity generators. What that requires, in plain terms.",
      date: "2026-10-25",
      courses: [601],
      body: `Your generator category depends on how much hazardous waste you generate per month. Count paint waste, solvents and other hazardous streams. Used oil being recycled doesn't count.

| Category | Hazardous waste per month |
|---|---|
| Very small quantity generator | 100 kg (about 220 lb) or less |
| Small quantity generator | More than 100 kg, less than 1,000 kg |
| Large quantity generator | 1,000 kg or more |

## SQG requirements (federal)

- **EPA ID number**
- **Accumulation:** up to 180 days, or 270 days if the waste has to travel more than 200 miles, and no more than 6,000 kg on site
- **Containers** labeled "Hazardous Waste" with hazard indication and accumulation start date, closed, in good condition and inspected weekly
- **An emergency coordinator** on site or on call
- **Emergency information posted** next to the phone: the coordinator's name and number, fire extinguisher and spill kit locations, and the fire department number
- **Staff training**: employees thoroughly familiar with proper waste handling and emergency procedures for their jobs
- **Manifests** and licensed transporters for shipments

## States may be stricter

Many states add requirements. Check with your state environmental agency.

{{buy:601}}`,
    },
  ],
};
