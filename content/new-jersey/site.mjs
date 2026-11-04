// new-jersey.hazwoperosha.us: HAZWOPER and remediation training for New Jersey. Highway-sign green.
export default {
  title: "HAZWOPER Training in New Jersey | Remediation, OSHA & PEOSH | Industrial Certified Training",
  description: "HAZWOPER training for New Jersey remediation and industrial workers: 40-hour, environmental remediation, refresher, state-plan refresher, RCRA generator and awareness, with guides to NJ rules.",
  theme: "#00613a",
  fonts: "family=Overpass:wght@400;600;700;800;900",
  hero: {
    title: "Cleanups at<br><span>every exit.</span>",
    lede: "From historic fill in Newark to tank farms in Linden, New Jersey has more cleanup sites than almost anywhere. Get your crew trained for them.",
    cta: [590, "40 Hr Remediation · $249.99"],
    alt: ["/guides/hazwoper-in-new-jersey-osha-and-peosh", "OSHA or PEOSH?"],
  },
  coursesTagline: "HAZWOPER and waste training for New Jersey crews.",
  guidesTagline: "OSHA vs PEOSH, LSRP-led cleanups and historic fill.",

  courses: [
    { id: 590, short: "40 Hr Remediation",
      summary: "The 40-hour HAZWOPER for environmental remediation crews.",
      body: `New Jersey's cleanup program keeps remediation crews busy. This 40-hour course follows a cleanup from investigation to closure.`,
      topics: ["Phases of a cleanup", "Sampling and drilling", "Drum handling", "Monitoring", "Decon"],
      who: "Remediation technicians, samplers and laborers." },
    { id: 587, short: "40-Hour HAZWOPER",
      summary: "The standard OSHA 40-hour initial HAZWOPER.",
      body: `The general 40-hour course under 29 CFR 1910.120(e).`,
      topics: ["Hazard recognition", "Site safety plans", "PPE", "Monitoring", "Decon"],
      who: "General hazardous waste site workers." },
    { id: 595, short: "8-Hour Refresher",
      summary: "The annual 8-hour HAZWOPER refresher.",
      body: `Eight hours a year under 1910.120(e)(8).`,
      topics: ["Hazard review", "PPE and monitoring", "Case studies"],
      who: "Certified HAZWOPER workers." },
    { id: 900, short: "State-Plan Refresher",
      summary: "Refresher with state-plan versions, for public employees covered by PEOSH.",
      body: `New Jersey public employees are covered by PEOSH, the state's public-employee plan. This refresher covers federal and state-plan equivalents.`,
      topics: ["Federal refresher content", "State-plan context", "Core review"],
      who: "New Jersey public employees doing HAZWOPER work." },
    { id: 601, short: "RCRA Generator",
      summary: "Hazardous waste generator training.",
      body: `For New Jersey facilities that generate hazardous waste, regulated by NJDEP under its authorized program.`,
      topics: ["Waste determination", "Containers and labels", "Accumulation", "Manifests"],
      who: "Waste handlers and EHS staff." },
    { id: 1099, short: "Awareness",
      summary: "First responder awareness for staff who may discover a release.",
      body: `Four hours on recognizing, isolating and reporting a release.`,
      topics: ["Recognize", "Isolate", "Notify"],
      who: "Security, warehouse and facility staff." },
  ],

  feature: (h) => `<section class="sec signs"><div class="wrap signs-in">
<div class="sign"><small>PRIVATE EMPLOYERS</small><b>Federal OSHA</b><span>29 CFR 1910.120</span></div>
<div class="sign"><small>PUBLIC EMPLOYERS</small><b>NJ PEOSH</b><span>State public-employee plan</span></div>
<div class="sign"><small>CLEANUPS &amp; WASTE</small><b>NJDEP</b><span>Site remediation and hazardous waste</span></div>
</div></section>`,

  guides: [
    {
      slug: "hazwoper-in-new-jersey-osha-and-peosh",
      title: "HAZWOPER in New Jersey: federal OSHA and PEOSH",
      description: "New Jersey's state plan covers only public employees. Here's who's covered by which program.",
      date: "2026-10-25",
      courses: [587, 900],
      body: `New Jersey has a split system.

## Private employers: federal OSHA

Private-sector employers in New Jersey are covered by federal OSHA. HAZWOPER, 29 CFR 1910.120, applies as written. A remediation contractor, a refinery or a waste hauler follows the federal rule.

## Public employers: PEOSH

New Jersey's **Public Employees Occupational Safety and Health (PEOSH)** program is an OSHA-approved state plan that covers state, county and municipal employees. It adopts federal OSHA standards, including HAZWOPER, for public workers.

That covers people like:

- Municipal and county hazmat teams
- Public works crews who respond to spills
- Public utility authority staff
- State agency field staff

## Environmental rules: NJDEP

NJDEP runs the state's site remediation and hazardous waste programs. Remediation is usually led by a Licensed Site Remediation Professional (LSRP). See our guide on [LSRP-led cleanups](/guides/working-on-lsrp-led-cleanups).

## Training

| You are | Training |
|---|---|
| Private remediation or industrial worker | [[587]] or [[590]], then [[595]] annually |
| Public employee doing HAZWOPER work | Same initial training, refresher via [[900]] or [[595]] |
| Staff who may discover a release | [[1099]] |`,
    },
    {
      slug: "working-on-lsrp-led-cleanups",
      title: "Working on LSRP-led cleanups in New Jersey",
      description: "Most NJ remediation is overseen by a Licensed Site Remediation Professional. What that means for field crews.",
      date: "2026-10-25",
      courses: [590],
      body: `Since the Site Remediation Reform Act of 2009, most New Jersey cleanups are managed by **Licensed Site Remediation Professionals (LSRPs)** instead of directly by NJDEP case managers.

## What the LSRP does

The LSRP is hired by the responsible party to oversee the investigation and cleanup, make decisions under NJDEP rules and technical requirements, and ultimately issue a Response Action Outcome when the site meets the standards.

## What that means on site

- The LSRP or their staff often direct sampling locations, excavation limits and confirmation samples.
- The site health and safety plan may be written by the LSRP's firm, the remediation contractor or both.
- Field crews need HAZWOPER training when the work is a hazardous waste operation, whoever is directing it.

## Crew checklist

1. Current 40-hour and refresher
2. Read the HASP: contaminants, action levels, PPE by task
3. Know who has stop-work authority
4. Report unexpected conditions such as drums, odors or staining right away

## Common New Jersey contaminants

Petroleum from underground tanks, chlorinated solvents at old industrial sites, metals and PAHs in historic fill, and PCBs at former manufacturing sites. Each affects monitoring and PPE.

{{buy:590}}`,
    },
    {
      slug: "historic-fill-in-new-jersey",
      title: "Historic fill: why so many NJ sites are contaminated",
      description: "Much of urban New Jersey sits on fill material with ash, slag and debris. What crews should expect when they dig.",
      date: "2026-10-25",
      courses: [590, 587],
      body: `Over a century of development filled marshes and shorelines across urban New Jersey with whatever was available: ash, slag, cinders, dredge spoils, demolition debris. NJDEP calls it **historic fill**.

## Why it matters

Historic fill commonly contains:

- Polycyclic aromatic hydrocarbons (PAHs)
- Metals such as lead and arsenic
- Sometimes petroleum or other industrial contaminants

So a routine excavation for a foundation or utility line in cities like Newark, Jersey City, Elizabeth or Camden can turn up contaminated soil.

## For field crews

- **Dust is the main exposure route.** Wet the soil, limit drop heights and monitor dust.
- **Skin contact.** Gloves and boots, and wash before eating.
- **Soil management.** Fill that's dug up usually has to be managed, stockpiled and disposed of under a soil management plan.
- **Training.** If the work is part of a remediation, HAZWOPER applies.

## Before the job

Ask whether the site has a soil management plan or LSRP oversight. If it does, expect a HASP and HAZWOPER requirements for the crew.

{{buy:587}}`,
    },
  ],
};
