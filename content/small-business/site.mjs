// small-business.hazwoperosha.us: hazardous waste basics for small businesses. Notebook paper and handwriting.
export default {
  title: "Hazardous Waste Training for Small Businesses | Industrial Certified Training",
  description: "Plain-language hazardous waste training for small businesses: RCRA generator, satellite accumulation, universal waste, manifests, spill prevention and awareness, with small generator checklists.",
  theme: "#2a5bd7",
  fonts: "family=Caveat:wght@600;700&family=Source+Sans+3:wght@400;600;700",
  hero: {
    title: "Hazardous waste, <span>made simple.</span>",
    lede: "You run a small business, not a waste program. Short courses and plain checklists to handle your hazardous waste right the first time.",
    cta: [601, "Generator training · $89.99"],
    alt: ["/guides/is-my-business-a-hazardous-waste-generator", "Am I a generator?"],
  },
  coursesTagline: "Short, practical courses for small business owners and staff.",
  guidesTagline: "Generator status, a one-page checklist and choosing a waste vendor.",

  courses: [
    { id: 601, short: "Generator Training",
      summary: "Everything a small business owner needs to know about hazardous waste rules.",
      body: `Eight hours on identifying your waste, your generator category, containers, labels, storage limits and shipping.`,
      topics: ["Is it hazardous waste?", "Generator categories", "Containers and labels", "Storage limits", "Shipping and manifests"],
      who: "Owners, managers and the person who handles waste." },
    { id: 415, short: "Satellite Areas",
      summary: "The waste container by the workbench, done right.",
      body: `Two hours on keeping waste containers at the point of generation compliant.`,
      topics: ["Labels", "Closed lids", "Volume limits", "Moving full containers"],
      who: "Staff who fill waste containers." },
    { id: 602, short: "Universal Waste",
      summary: "Batteries, bulbs, aerosol cans and mercury devices.",
      body: `Two hours on the easier rules for common items.`,
      topics: ["What counts", "Labels and time limits", "Broken bulbs", "Recycling"],
      who: "Owners and facilities staff." },
    { id: 580, short: "Manifest",
      summary: "What you're signing when the waste truck comes.",
      body: `Two hours on the manifest and what your signature certifies.`,
      topics: ["The manifest form", "Your certification", "Keeping copies"],
      who: "Whoever signs for waste pickups." },
    { id: 416, short: "Spill Prevention",
      summary: "Preventing and handling small spills.",
      body: `Two hours on spill prevention and first response.`,
      topics: ["Storage", "Containment", "Cleanup", "Reporting"],
      who: "All staff." },
    { id: 1099, short: "Awareness",
      summary: "Knowing when a spill is too big to handle yourself.",
      body: `Four hours on recognizing a serious release and calling for help.`,
      topics: ["Recognize", "Isolate", "Notify"],
      who: "All staff." },
  ],

  guides: [
    {
      slug: "is-my-business-a-hazardous-waste-generator",
      title: "Is my small business a hazardous waste generator?",
      description: "If you make waste paint, solvents, chemicals or certain cleaners, probably yes. Here's how to tell, and what it means.",
      date: "2026-10-25",
      courses: [601],
      body: `Lots of small businesses generate hazardous waste without realizing it: auto shops, dry cleaners, print shops, salons, dental offices, labs, painters, photo studios and small manufacturers.

## Step 1: is it hazardous waste?

A waste is hazardous if it's on one of EPA's lists, or if it's:

- **Ignitable**, like solvents, thinners and some paints
- **Corrosive**, like strong acids and caustics
- **Reactive**
- **Toxic**, containing certain metals or chemicals above set limits

Check the safety data sheet, ask your supplier or a waste vendor.

## Step 2: how much per month?

| Category | Per month |
|---|---|
| Very small quantity generator (VSQG) | 100 kg (about 220 lb, roughly half a drum) or less |
| Small quantity generator (SQG) | More than 100 kg, less than 1,000 kg |
| Large quantity generator (LQG) | 1,000 kg or more |

## Step 3: know your rules

**VSQGs** (federal rules) must:

- Identify their hazardous waste
- Not accumulate more than 1,000 kg at any time
- Send waste to a facility allowed to receive it, which can include a household hazardous waste program that accepts VSQG waste if your state allows

**SQGs** have more: an EPA ID number, time limits, labels, inspections, an emergency coordinator, manifests and trained staff.

## Your state may be stricter

Many states add requirements, especially for VSQGs. Call your state environmental agency's small business assistance program. It's free.

{{buy:601}}`,
    },
    {
      slug: "small-business-hazardous-waste-checklist",
      title: "A one-page hazardous waste checklist for small businesses",
      description: "Print it, tape it to the wall, check it monthly.",
      date: "2026-10-25",
      courses: [415, 602],
      body: `## Monthly

- ☐ Count how much hazardous waste we made this month
- ☐ Check our generator category hasn't changed
- ☐ Walk past every waste container

## Every container

- ☐ Labeled "Hazardous Waste" with what's inside and the hazard
- ☐ Lid closed (no funnels left in)
- ☐ Not leaking, rusted or bulging
- ☐ Stored away from drains
- ☐ Incompatible wastes kept apart

## Universal waste

- ☐ Batteries, bulbs and aerosol cans in labeled boxes
- ☐ Dated, and shipped within a year

## Emergencies

- ☐ Spill kit stocked and easy to reach
- ☐ Fire extinguisher checked
- ☐ Emergency phone numbers posted
- ☐ Staff know who to call

## Records

- ☐ Waste pickup receipts and manifests filed
- ☐ Training certificates filed

See [[415]] for containers and [[602]] for universal waste.`,
    },
    {
      slug: "choosing-a-hazardous-waste-vendor",
      title: "Choosing a hazardous waste vendor",
      description: "Your waste is still your responsibility after it leaves. How to pick a vendor you can trust.",
      date: "2026-10-25",
      courses: [580, 601],
      body: `Under RCRA, generators are responsible for their hazardous waste "from cradle to grave." If a vendor mishandles it, the generator can still be on the hook.

## Questions to ask

1. **Do you have an EPA ID number and the permits required to haul and handle my waste?**
2. **Where does my waste go?** Get the name of the receiving facility.
3. **Will I get a signed copy of the manifest back** from the receiving facility?
4. **Can you help me profile my waste** and identify it correctly?
5. **What's included in the price?** Containers, labels, paperwork and transport.
6. **What insurance do you carry?**
7. **Can you provide references** from businesses like mine?

## Red flags

- Prices far below everyone else's
- Vague answers about where the waste goes
- No manifest, or a manifest you're asked to sign blank
- Cash-only, no written agreement

## After pickup

Keep your copy of the manifest and check that the final signed copy comes back. If it doesn't, follow up. See [[580]].`,
    },
  ],
};
