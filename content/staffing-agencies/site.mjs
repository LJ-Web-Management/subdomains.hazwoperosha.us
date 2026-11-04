// staffing-agencies.hazwoperosha.us: HAZWOPER training for staffing agencies placing temp workers. Badge lanyard, teal and coral.
export default {
  title: "HAZWOPER Training for Staffing Agencies & Temporary Workers | Industrial Certified Training",
  description: "Staffing agencies: get temporary workers HAZWOPER-certified before placement. Bulk seats for 40-hour, 24-hour, refresher and awareness courses, with guides on joint employer responsibilities.",
  theme: "#0ca678",
  fonts: "family=DM+Sans:wght@400;500;700",
  hero: {
    title: "Certified before <span>day one.</span>",
    lede: "Host employers ask for HAZWOPER-trained temps, and both of you share responsibility for their safety. Get your workers certified online before placement.",
    cta: [587, "40-Hour HAZWOPER · $249.99"],
    alt: ["/guides/temp-workers-who-is-responsible", "Who's responsible?"],
  },
  coursesTagline: "The courses host employers ask for.",
  guidesTagline: "Joint responsibility and getting placements started fast.",

  courses: [
    { id: 587, short: "40-Hour HAZWOPER", summary: "For temps placed on cleanup sites.", body: "The 40-hour initial course for workers placed on hazardous waste sites.", topics: ["Site safety", "PPE", "Decon", "Monitoring"] },
    { id: 581, short: "24-Hour HAZWOPER", summary: "For occasional and limited-exposure placements.", body: "The 24-hour initial course for workers on site occasionally or in low-exposure roles.", topics: ["Who qualifies", "PPE basics", "Site safety"] },
    { id: 595, short: "8-Hour Refresher", summary: "Keep your bench current.", body: "The annual 8-hour refresher.", topics: ["Review", "Updates"] },
    { id: 1099, short: "First Responder Awareness", summary: "For warehouse and plant placements.", body: "Four hours of first responder awareness for workers who may witness a release.", topics: ["Recognize", "Isolate", "Notify"] },
    { id: 582, short: "24-Hr TSD Operations", summary: "For placements at treatment and disposal facilities.", body: "Twenty-four hours for TSD facility workers.", topics: ["TSDF hazards", "Waste handling", "Emergency response"] },
  ],

  guides: [
    {
      slug: "temp-workers-who-is-responsible",
      title: "Temp workers on HAZWOPER sites: who's responsible?",
      description: "OSHA treats staffing agencies and host employers as joint employers.",
      date: "2026-10-25",
      courses: [587, 581],
      body: `OSHA considers the staffing agency and the host employer **joint employers** of temporary workers. Both are responsible for their safety.

## Typically, the staffing agency

- Asks about the hazards and tasks before placement
- Makes sure workers have the general training they need (such as the HAZWOPER course)
- Keeps training records and certificates
- Checks in on workers and the worksite

## Typically, the host employer

- Provides site-specific training and supervised field experience
- Provides PPE, medical surveillance and site safety plans as required
- Supervises day-to-day work and controls hazards

## Put it in writing

Spell out who provides which training, PPE and medical surveillance in the contract. Don't assume the other side has it covered.

{{buy:587}}`,
    },
    {
      slug: "getting-placements-started-fast",
      title: "Getting HAZWOPER placements started fast",
      description: "A checklist for agencies with a site start date coming up.",
      date: "2026-10-25",
      courses: [587, 595],
      body: `1. **Confirm the course** with the host: 40-hour, 24-hour or a refresher?
2. **Buy seats in bulk** and enroll workers the same day
3. **Set a finish date**: 40 hours online usually takes a week of steady work
4. **Collect certificates** as each worker finishes
5. **Check refresher dates** for workers already certified ([[595]])
6. **Send the host a roster** with names, course, completion date and certificate copies
7. **Plan the field days**: the host provides supervised field experience on site

For invoices or purchase orders, call +1-866-429-6742.`,
    },
  ],
};
