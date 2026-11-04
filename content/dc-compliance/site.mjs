// dc-compliance.hazwoperosha.us: environmental compliance for data centers (fuel, refrigerants, batteries, stormwater). Permit stamp, sage.
export default {
  title: "Data Center Environmental Compliance Training | Industrial Certified Training",
  description: "Environmental compliance training for data centers: generator air permits, SPCC for diesel fuel, refrigerant management, universal waste batteries and spill prevention.",
  theme: "#52796f",
  fonts: "family=Fraunces:opsz,wght@9..144,600;9..144,800&family=Inter:wght@400;500;600",
  hero: {
    title: "Big buildings, <span>big footprints.</span>",
    lede: "Generators, fuel tanks, refrigerants and thousands of batteries bring environmental permits and rules into every data center. Compliance training for facility teams.",
    cta: [833, "Environmental Compliance · $99.99"],
    alt: ["/guides/environmental-rules-that-apply", "Which rules apply?"],
  },
  coursesTagline: "Environmental, spill and waste training for data centers.",
  guidesTagline: "The permits and plans data centers need.",

  courses: [
    { id: 833, short: "Facility Environmental Compliance" },
    { id: 851, short: "Cooling & Refrigerant Safety" },
    { id: 416, short: "Spill Prevention & Response", summary: "Diesel fuel deliveries, day tanks and spill response.", body: `Two hours on preventing and responding to oil and chemical spills, with fuel deliveries and secondary containment at the center.`, topics: ["Fuel deliveries", "Secondary containment", "Spill response", "Reporting"], who: "Facility staff who handle fuel." },
    { id: 602, short: "Universal Waste", summary: "Managing spent UPS batteries and lamps.", body: `Two hours on the universal waste rules for batteries and lamps: labeling, accumulation time limits and shipping.`, topics: ["Battery categories", "Labeling and time limits", "Damaged batteries", "Shipping"], who: "Facility and battery service staff." },
    { id: 601, short: "RCRA Hazardous Waste Generator", summary: "Waste determinations and generator rules.", body: `Eight hours on hazardous waste generator requirements: waste determinations, generator status, containers, labels and manifests.`, topics: ["Waste determination", "Generator status", "Containers and labels", "Manifests"], who: "Staff who manage facility waste." },
  ],

  guides: [
    {
      slug: "environmental-rules-that-apply",
      title: "Environmental rules that apply to data centers",
      description: "A quick map of the federal programs most sites run into.",
      date: "2026-10-25",
      courses: [833, 416],
      body: `Exact requirements depend on your site, state and local rules. These are the federal programs that come up most often.

| Topic | Program | What it covers |
|---|---|---|
| Generators | Clean Air Act (state air permits, EPA engine rules) | Permits, run-hour limits, emissions, recordkeeping |
| Diesel storage | SPCC (40 CFR 112) | Oil spill prevention plans above storage thresholds |
| Fuel tanks | UST rules (40 CFR 280) for underground tanks | Leak detection, corrosion protection |
| Refrigerants | Clean Air Act Section 608 | Technician certification, leak repair, recordkeeping |
| Batteries, lamps | Universal waste (40 CFR 273) | Labeling, accumulation time, shipping |
| Other wastes | RCRA | Waste determination and generator status |
| Chemicals on site | EPCRA Tier II | Annual reporting of stored chemicals (batteries and fuel often trigger it) |
| Stormwater | Clean Water Act permits | Construction and some industrial sites |

## Who owns it?

Assign an owner for each program, keep a compliance calendar, and train the people whose daily work creates the records.

{{buy:833}}`,
    },
    {
      slug: "spcc-for-data-centers",
      title: "SPCC plans for data center diesel",
      description: "When you need one and what's in it.",
      date: "2026-10-25",
      courses: [416, 833],
      body: `## Do you need one?

Facilities generally need an SPCC plan if they have more than 1,320 gallons of aboveground oil storage (counting containers of 55 gallons or more) or more than 42,000 gallons underground (not counting tanks regulated under the UST rules), and could reasonably discharge oil to navigable waters or shorelines. Generator base tanks and day tanks count.

## What's in it

- Facility diagram with every oil container
- Secondary containment for tanks and the fuel delivery area
- Inspection and testing schedules
- Spill response procedures and contacts
- Training records for oil-handling staff
- Professional engineer certification (unless the facility qualifies to self-certify)

## Day to day

- Attend every fuel delivery
- Inspect tanks and containment
- Drain rainwater from containment only after checking for sheen
- Annual spill prevention briefings for oil-handling personnel

See [[416]] for spill prevention and response training.`,
    },
  ],
};
