// dc-security.hazwoperosha.us: data center security and compliance (SOC 2, ISO 27001). Audit binder, navy and gold seal.
export default {
  title: "Data Center Security & Compliance Training: SOC 2, ISO 27001 | Industrial Certified Training",
  description: "Security and compliance training for data center teams: SOC 2 and ISO 27001 controls, access control, physical security and environmental compliance.",
  theme: "#14213d",
  fonts: "family=Libre+Baskerville:wght@400;700&family=Source+Sans+3:wght@400;600;700",
  hero: {
    title: "Pass the audit <span>every day,</span> not just audit day.",
    lede: "Auditors look for controls that actually operate. Training for the facility, security and operations staff whose daily work is the evidence.",
    cta: [848, "Security & Compliance · $291.99"],
    alt: ["/guides/what-auditors-ask-facilities-teams", "What auditors ask"],
  },
  coursesTagline: "Security, access and compliance training for data center staff.",
  guidesTagline: "Audit preparation for facility and security teams.",

  courses: [
    { id: 848, short: "Security & Compliance" },
    { id: 828, short: "Access Control & Physical Security" },
    { id: 855, short: "Physical Security & Access Control (1 hr)" },
    { id: 833, short: "Facility Environmental Compliance" },
  ],

  guides: [
    {
      slug: "what-auditors-ask-facilities-teams",
      title: "What auditors ask facilities teams",
      description: "The physical and environmental controls that show up in SOC 2 and ISO 27001 audits.",
      date: "2026-10-25",
      courses: [848, 828],
      body: `IT gets most of the audit attention, but physical and environmental controls are in scope too. Expect questions like these.

## Physical access

- Who approved this person's badge access, and when was it last reviewed?
- How fast is access removed when someone leaves?
- Show the visitor log and escort records for last month.
- How are tailgating and propped doors detected?

## Environmental protection

- How are temperature, humidity, water and fire monitored and alarmed?
- Show the maintenance records for UPS, generators and fire suppression.
- When was the last generator load test?

## Incident handling

- Show a recent facility incident from detection to closure.

## Tips

Keep evidence as you go, not in the week before the audit. Make sure procedures match what people actually do. Train staff so they can explain the control in their own words.

{{buy:848}}`,
    },
    {
      slug: "visitor-and-contractor-access",
      title: "Visitor and contractor access, done right",
      description: "Escorts, logs and badges: the basics that most findings come from.",
      date: "2026-10-25",
      courses: [855, 828],
      body: `## Before the visit

- Pre-registration with a named sponsor and purpose
- Approval for the specific areas needed, nothing more

## On arrival

1. Verify government ID against the pre-registration
2. Log name, company, sponsor, time in
3. Issue a visibly different, time-limited badge
4. Brief on site rules: no photos, escort requirement, emergency exits

## On the floor

- Escort at all times in controlled areas
- No tailgating: each person badges or is logged through
- Tools and equipment checked in and out

## On departure

Collect the badge, log time out, and report any missing badges at once.

Train every employee to challenge an unescorted visitor politely. See [[855]].`,
    },
  ],
};
