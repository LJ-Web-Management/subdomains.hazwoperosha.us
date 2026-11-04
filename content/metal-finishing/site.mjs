// metal-finishing.hazwoperosha.us: hazardous waste and response training for plating and metal finishing shops. Chrome.
export default {
  title: "Hazardous Waste Training for Electroplating & Metal Finishing | Industrial Certified Training",
  description: "Training for electroplating, anodizing and metal finishing shops: RCRA generator and refresher, satellite accumulation, plant ERT, awareness and contingency planning, with F006, cyanide and pretreatment guides.",
  theme: "#5b6672",
  fonts: "family=Michroma&family=Inter:wght@400;500;600;700",
  hero: {
    title: "Finish clean. <span>Ship compliant.</span>",
    lede: "Plating lines create acids, cyanides, metals and F006 sludge. Hazardous waste and response training for finishing shops.",
    cta: [601, "Generator training · $89.99"],
    alt: ["/guides/f006-sludge-electroplating", "About F006"],
  },
  coursesTagline: "Waste and response training for finishing shops.",
  guidesTagline: "F006 sludge, cyanide safety and pretreatment.",

  courses: [
    { id: 601, short: "RCRA Generator",
      summary: "Hazardous waste generator training for finishing shops.",
      body: `Plating sludges, spent baths and filters are hazardous waste. Eight hours on generator rules for finishing operations.`,
      topics: ["Listed and characteristic plating wastes", "Generator categories", "Containers and labels", "Accumulation", "Manifests"],
      who: "EHS, wastewater and production staff." },
    { id: 600, short: "Generator Refresher",
      summary: "The annual RCRA refresher.",
      body: `Four hours of annual review.`,
      topics: ["Rules review", "Common violations", "Updates"],
      who: "Staff who completed generator training." },
    { id: 415, short: "Satellite Accumulation",
      summary: "Waste containers at the plating line.",
      body: `Two hours on satellite accumulation areas at the line.`,
      topics: ["Point of generation", "Labels", "Closed containers", "Compatibility"],
      who: "Line operators." },
    { id: 702, short: "Plant ERT",
      summary: "Training for in-plant emergency response teams.",
      body: `Acid and cyanide releases need a plan and a trained team. Eight hours on the ERT's role.`,
      topics: ["Emergency response plan", "ERT roles", "PPE", "Defensive actions"],
      who: "ERT members." },
    { id: 1099, short: "Awareness",
      summary: "Recognize a release, get clear and call it in.",
      body: `Four hours for every line operator on recognizing and reporting releases.`,
      topics: ["Recognize", "Isolate", "Notify"],
      who: "All line and shop staff." },
    { id: 412, short: "Contingency Plan",
      summary: "Contingency planning for large quantity generator shops.",
      body: `Plan contents and the emergency coordinator's role.`,
      topics: ["Plan contents", "Quick reference guide", "Coordinator duties"],
      who: "EHS managers." },
  ],

  guides: [
    {
      slug: "f006-sludge-electroplating",
      title: "F006 sludge and other electroplating wastes",
      description: "The listed waste every plating shop makes, and what to do with it.",
      date: "2026-10-25",
      courses: [601],
      body: `**F006** is EPA's listed hazardous waste code for wastewater treatment sludges from electroplating operations, with some exceptions for specific processes. If your shop treats plating rinsewater, the sludge from that treatment is usually F006.

## Other common finishing wastes

| Waste | Typical codes |
|---|---|
| Wastewater treatment sludge | F006 |
| Spent cyanide plating baths | F007 |
| Plating bath residues from cyanide baths | F008 |
| Spent stripping and cleaning solutions from cyanide processes | F009 |
| Spent acids and caustics | D002 (corrosive), plus metals |
| Filters and filter cartridges | Often characteristic for metals |

## Managing F006

- Dewater with a filter press to reduce volume and disposal cost
- Store in closed, labeled containers
- Manifest it as hazardous waste. Many shops send F006 to metals recovery.

## Generator category

F006 volumes add up fast. Track monthly totals to know your generator category.

{{buy:601}}`,
    },
    {
      slug: "cyanide-and-acids-plating",
      title: "Cyanide and acids: why segregation matters in plating shops",
      description: "Mixing acids with cyanide releases hydrogen cyanide gas. The controls that prevent it.",
      date: "2026-10-25",
      courses: [702, 1099],
      body: `Cyanide plating baths and acid baths often share a building. If they meet, the reaction releases **hydrogen cyanide (HCN)** gas, which can be fatal.

## Where it can happen

- A leak from an acid tank reaching a cyanide tank or its drain
- Rinsewater from both lines mixing in a shared trench or sump
- Waste containers with acid residues used for cyanide waste, or the reverse
- Spill cleanup using the wrong neutralizer

## Controls

1. **Physically separate** cyanide and acid lines, with separate secondary containment
2. **Separate drains and sumps** for cyanide-bearing and acid streams
3. **Dedicated, labeled waste containers** for each
4. **HCN monitoring** in cyanide areas
5. **Training** so every operator knows which line is which and why it matters

## If a mix happens

Evacuate upwind, sound the alarm and call 911. Only trained, equipped responders with SCBA approach. Have your SDSs and site map ready for responders.

{{buy:1099}}`,
    },
    {
      slug: "pretreatment-and-hazardous-waste",
      title: "Wastewater pretreatment and hazardous waste",
      description: "How plating shops' wastewater rules and hazardous waste rules connect.",
      date: "2026-10-25",
      courses: [601, 600],
      body: `Most finishing shops discharge treated wastewater to a municipal sewer. That brings in the Clean Water Act pretreatment program.

## Pretreatment standards

EPA's **Metal Finishing (40 CFR Part 433)** and **Electroplating (40 CFR Part 413)** categorical standards set limits for metals, cyanide and other pollutants. Your local sewer authority enforces them through your discharge permit.

## How it connects to hazardous waste

- Treating wastewater to meet pretreatment limits produces **F006 sludge**, which is hazardous waste.
- Wastewater discharged under a permit is regulated by the Clean Water Act, not RCRA.
- Concentrated spent baths often can't go through the treatment system and are shipped as hazardous waste instead.

## Training overlap

The operators who run the wastewater treatment system also handle the sludge, filters and spent baths. They need both wastewater procedures and hazardous waste training. See [[601]] and the annual [[600]].`,
    },
  ],
};
