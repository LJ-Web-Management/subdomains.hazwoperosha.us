// marine.hazwoperosha.us: oil spill and hazmat training for marinas, ports and marine terminals. Nautical.
export default {
  brand: "Harbor Hazmat",
  logo: `<span class="flags"><i></i><i></i><i></i></span> Harbor Hazmat`,
  title: "Oil Spill & Hazmat Training for Marinas, Ports and Terminals | Harbor Hazmat",
  description: "Training for marinas, ports and marine terminals: 40-hour oil spill HAZWOPER, booms, spill prevention, awareness, incident command and gas detection, with spill reporting and facility response guides.",
  theme: "#0e2a47",
  fonts: "family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#0e2a47"/><circle cx="16" cy="9" r="3" fill="none" stroke="#f1e6cf" stroke-width="2"/><path d="M16 12v14M10 16h12M7 21c2 5 7 6 9 5 2 1 7 0 9-5" stroke="#f1e6cf" stroke-width="2" fill="none"/></svg>`,
  hero: {
    title: "Keep it <em>off the water.</em>",
    lede: "Fuel docks, transfer hoses and vessel traffic make spills a constant risk on the waterfront. Spill response training for dock crews and terminal staff.",
    cta: [416, "Spill Prevention · $29.99"],
    alt: ["/guides/oil-spill-first-response-marina", "First response"],
  },
  coursesTagline: "Spill and response training for waterfront crews.",
  guidesTagline: "Reporting spills, deploying boom and facility response plans.",

  courses: [
    { id: 416, short: "Spill Prevention",
      summary: "Preventing spills at fuel docks and transfers.",
      body: `Two hours on preventing and responding to spills during fueling and transfers.`,
      topics: ["Fueling procedures", "Transfer hoses", "Containment", "Reporting"],
      who: "Fuel dock attendants and terminal operators." },
    { id: 1099, short: "Awareness",
      summary: "Recognize a release, get clear and report it.",
      body: `Four hours on recognizing hazmat releases on the waterfront.`,
      topics: ["Recognize", "Isolate", "Notify"],
      who: "Harbor staff, security and dock crews." },
    { id: 593, short: "Incident Command",
      summary: "Incident command for spill and hazmat incidents.",
      body: `Spill response on water uses unified command with the Coast Guard and state agencies. Eight hours on ICS.`,
      topics: ["ICS and unified command", "Size-up", "Resource management"],
      who: "Terminal managers and harbor masters." },
    { id: 1056, short: "Gas Detection",
      summary: "Gas detection for vessel spaces, tanks and fuel areas.",
      body: `Two hours on monitoring for flammable vapors and low oxygen.`,
      topics: ["LEL", "Oxygen", "Toxic gases", "Calibration"],
      who: "Terminal and vessel crews." },
  ],

  guides: [
    {
      slug: "oil-spill-first-response-marina",
      title: "Oil spill at the marina: first response and reporting",
      description: "A sheen on the water needs fast action and a phone call. What dock staff should do.",
      date: "2026-10-25",
      courses: [416],
      body: `## 1. Stop the source

Shut off the fuel nozzle, close the valve or stop the pump. Most marina spills come from overfilling, vents and hose failures during fueling.

## 2. Contain

Deploy absorbent boom around the spill and the source vessel. Put absorbent pads on the water to pick up sheen. Protect storm drains on the dock.

## 3. Report

Under federal law, any discharge of oil that causes a **sheen on the water** must be reported to the **National Response Center (1-800-424-8802)**. Many states require their own report too. Report even small spills. The penalties for not reporting are much bigger than for reporting.

## 4. Clean up

Collect used absorbents in bags or drums, label them and manage them as oily waste under your state's rules.

## Prevention

- Train fuel dock staff to stay at the nozzle and watch for overflow
- Use fuel nozzle bibs and vent overflow catchers
- Keep a spill kit with boom at the fuel dock
`,
    },
    {
      slug: "deploying-boom-from-docks-and-boats",
      title: "Deploying boom from docks and boats",
      description: "Boom holds oil only if it's placed right for the current and tide.",
      date: "2026-10-25",
      courses: [],
      body: `## Before you deploy

- Check the **current and tide**. Oil moves with the water and the wind.
- Pick the right boom: absorbent for small spills and sheen, containment boom for larger spills.

## From a dock

1. Attach one end to a fixed point upstream of the spill
2. Walk or float the boom around the spill and back to the dock
3. Overlap and connect sections without gaps
4. Leave slack for tide changes

## From a boat

- Tow the boom slowly, at an angle that keeps it from planing or folding
- Use two boats for larger sweeps
- Anchor the ends securely

## In current

Boom set straight across a fast current loses oil underneath. Angle it to steer oil toward calmer water where it can be recovered.

## Safety

Life jackets on everyone on the dock edge or in a boat. Watch for slippery decks and lines underfoot.
`,
    },
    {
      slug: "facility-response-plans-training",
      title: "Facility response plans and spill training",
      description: "Larger oil-handling marine facilities need response plans, trained people and regular drills.",
      date: "2026-10-25",
      courses: [593],
      body: `After the 1989 Exxon Valdez spill, the **Oil Pollution Act of 1990 (OPA 90)** required response plans for facilities and vessels that could cause significant harm with an oil spill.

## Who needs a plan

Marine transportation-related facilities are regulated by the Coast Guard. Certain non-transportation facilities, such as large tank farms near water, are regulated by EPA under 40 CFR 112.20. The thresholds depend on storage, transfer operations and potential harm.

## What the plans require

- A **qualified individual** with authority to act during a spill
- Identified **oil spill removal organizations** under contract
- Equipment lists and response strategies
- **Training** for personnel with response roles
- **Drills and exercises**, often following the National Preparedness for Response Exercise Program (PREP) guidelines

## Training by role

| Role | Training |
|---|---|
| Dock and transfer staff | [[416]] |
| Facility response team | 40-hour HAZWOPER |
| Qualified individual and managers | [[593]] |`,
    },
  ],
};
