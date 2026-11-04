// warehouse.hazwoperosha.us: chemical safety and hazmat awareness for warehouses and distribution centers. Pallet rack.
export default {
  title: "Hazmat & Spill Training for Warehouses and Distribution Centers | Industrial Certified Training",
  description: "Training for warehouse and distribution center staff: first responder awareness, spill kit use, spill prevention, universal waste, RCRA generator and PPE, with guides to chemical storage and damaged packages.",
  theme: "#f26a1b",
  fonts: "family=Anton&family=Inter:wght@400;500;600;700",
  hero: {
    title: "Every aisle, <span>spill-ready.</span>",
    lede: "Warehouses store, move and ship chemicals every day. Train the people on the floor to spot leaks, use the spill kit and know when to back off.",
    cta: [1099, "Awareness · $61.99"],
    alt: ["/guides/damaged-leaking-packages-warehouse", "Damaged package guide"],
  },
  coursesTagline: "Spill, awareness and waste training for warehouse and DC staff.",
  guidesTagline: "Chemical storage, damaged packages and returned batteries.",

  courses: [
    { id: 1099, short: "Awareness",
      summary: "Recognize a hazardous release, get clear and report it.",
      body: `A forklift tine through a drum or a leaking pallet of cleaner is a hazardous release. Four hours on recognizing, isolating and notifying.`,
      topics: ["Recognizing a release", "Labels, SDSs and placards", "Isolating the area", "Notifying"],
      who: "Forklift operators, pickers, receivers and shift leads." },
    { id: 479, short: "Spill Kit Use",
      summary: "Using spill kits on small, incidental spills.",
      body: `One hour on choosing and using the right spill kit, and when a spill is too big to handle.`,
      topics: ["Incidental vs emergency spills", "Kit types", "Using pads, socks and drain covers", "Disposal"],
      who: "Warehouse staff assigned to spill cleanup." },
    { id: 416, short: "Spill Prevention",
      summary: "Preventing spills in storage, handling and loading.",
      body: `Two hours on why spills happen in warehouses and simple prevention.`,
      topics: ["Forklift damage", "Stacking and storage", "Secondary containment", "Dock spills"],
      who: "Warehouse staff and supervisors." },
    { id: 602, short: "Universal Waste",
      summary: "Batteries, lamps and aerosol cans from operations and returns.",
      body: `Distribution centers collect batteries, lamps and damaged aerosol cans. Two hours on universal waste rules.`,
      topics: ["Universal waste categories", "Labeling and one-year limit", "Damaged batteries", "Shipping"],
      who: "Returns, facilities and EHS staff." },
    { id: 601, short: "RCRA Generator",
      summary: "Hazardous waste generator training for damaged and returned chemical products.",
      body: `Damaged chemical products that can't be sold often become hazardous waste. Eight hours on generator rules.`,
      topics: ["When products become waste", "Waste determination", "Containers and labels", "Manifests"],
      who: "Returns, EHS and waste handling staff." },
    { id: 585, short: "PPE Levels A–D",
      summary: "A 15-minute module on PPE levels.",
      body: `What the levels of protection mean, in 15 minutes.`,
      topics: ["Levels A, B, C and D"],
      who: "Anyone who wants a quick PPE primer." },
  ],

  guides: [
    {
      slug: "chemical-storage-segregation-warehouse",
      title: "Chemical storage in warehouses: segregation basics",
      description: "Storing incompatible chemicals together turns a small leak into a fire or toxic gas. The basics.",
      date: "2026-10-25",
      courses: [416, 1099],
      body: `Warehouses store everything from pool chemicals to paint to cleaning products, often in the same building. A leak becomes dangerous when incompatible products meet.

## Common incompatibles

| Keep apart | Why |
|---|---|
| Oxidizers (pool chlorine, some fertilizers) and flammables or combustibles | Fire |
| Acids and bases | Heat and splattering |
| Bleach and ammonia products | Toxic gas |
| Bleach and acids | Chlorine gas |
| Water-reactive products and anything wet | Heat, gas, fire |

## Practical rules

1. **Read the SDS.** Section 7 covers storage and Section 10 covers incompatibilities.
2. **Segregate by hazard class**, using separate aisles, distance or barriers.
3. **Flammables** belong in rated cabinets or rooms as the fire code requires.
4. **Store liquids low**, below solids, and away from rack edges.
5. **Secondary containment** for drums and totes.
6. **Keep spill kits** near chemical storage, matched to the products.

## Your local fire code

Fire codes set limits on how much of each hazard class can be stored in an area. Your fire marshal and insurer will check.

{{buy:416}}`,
    },
    {
      slug: "damaged-leaking-packages-warehouse",
      title: "Damaged and leaking packages: what warehouse staff should do",
      description: "A punctured case or a puddle under a pallet. A step-by-step plan for the floor.",
      date: "2026-10-25",
      courses: [1099, 479],
      body: `## 1. Stop and look

Don't drive through it or pick it up. Note what's leaking: label, product name, hazard pictograms.

## 2. Get clear and warn others

Back away and keep people out of the aisle.

## 3. Check the SDS

Find the product's safety data sheet. Sections 2, 6 and 8 cover hazards, spill response and PPE.

## 4. Decide: incidental or emergency?

**Incidental:** a small amount of a known product, no significant hazard, that trained staff can clean up with the spill kit and normal PPE.

**Emergency:** a large volume, an unknown product, fumes or odors, a fire risk, people feeling sick, or anything you're not sure about. Evacuate the area and call for help.

## 5. Clean up only if trained

Use the right kit and absorbent, cover drains, bag the waste and label it. See [[479]].

## 6. Damaged product may be waste

Leaked and damaged chemical products that can't be sold may be hazardous waste. Set them aside, labeled, for EHS.

{{buy:1099}}`,
    },
    {
      slug: "returned-batteries-universal-waste",
      title: "Returned and damaged batteries in the warehouse",
      description: "Lithium batteries from returns can overheat and catch fire. How to handle them.",
      date: "2026-10-25",
      courses: [602],
      body: `Returns centers receive phones, tools, scooters and power banks every day. Their lithium batteries can be damaged, swollen or defective.

## Warning signs

- Swelling or bulging
- Heat, smoke, hissing or a sweet chemical smell
- Cracked, punctured or crushed cases
- Leaking fluid

## If a battery is overheating

1. Keep people away
2. Don't pick it up with bare hands
3. If it's safe, move it to a non-combustible area or container designed for this, such as a metal bin with sand or vermiculite
4. Call your emergency number if it's smoking or burning

## Storing collected batteries

- Tape terminals or bag each battery to prevent short circuits
- Store in a cool, dry area away from combustibles
- Separate damaged batteries from intact ones

## Universal waste rules

Most waste batteries can be managed as **universal waste** under 40 CFR Part 273: labeled, accumulated for no more than one year and sent to a destination facility. Damaged lithium batteries also have special DOT shipping requirements.

{{buy:602}}`,
    },
  ],
};
