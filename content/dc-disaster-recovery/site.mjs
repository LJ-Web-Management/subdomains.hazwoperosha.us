// dc-disaster-recovery.hazwoperosha.us: DR and business continuity for data centers. Storm radar.
export default {
  title: "Data Center Disaster Recovery & Business Continuity Training | Industrial Certified Training",
  description: "Disaster recovery and business continuity training for data center teams: RTO and RPO, continuity planning with ICS-NIMS, incident response and standby power.",
  theme: "#1b263b",
  fonts: "family=Space+Grotesk:wght@400;500;700",
  hero: {
    title: "Plan for the day <span>everything goes wrong.</span>",
    lede: "Floods, fires, outages and cyberattacks don't wait for budget season. Disaster recovery and business continuity training for the teams who keep critical services running.",
    cta: [844, "DR & Continuity · $307.99"],
    alt: ["/guides/rto-vs-rpo", "RTO vs RPO"],
  },
  heroArt: `<div class="fv-radar" aria-hidden="true"></div>`,
  coursesTagline: "Continuity, recovery and incident training.",
  guidesTagline: "Recovery objectives and tabletop exercises.",

  courses: [
    { id: 844, short: "Disaster Recovery & Continuity" },
    { id: 880, short: "BC/DR Planning (ICS-NIMS)" },
    { id: 837, short: "Incident Response & Troubleshooting" },
    { id: 1098, short: "Emergency/Standby Power" },
  ],

  guides: [
    {
      slug: "rto-vs-rpo",
      title: "RTO vs RPO: the two numbers every DR plan needs",
      description: "How long can you be down, and how much data can you lose?",
      date: "2026-10-25",
      courses: [844],
      body: `## RTO: recovery time objective

How long a service can be unavailable before the impact is unacceptable. An RTO of 4 hours means the service must be back within 4 hours.

## RPO: recovery point objective

How much data, measured in time, you can afford to lose. An RPO of 15 minutes means backups or replication must be no more than 15 minutes behind.

## Set them by business impact

| Service | Typical RTO | Typical RPO |
|---|---|---|
| Payments, trading | Minutes | Near zero |
| Customer portal | Hours | Minutes |
| Internal reporting | A day or more | Hours |

These are examples. Your business impact analysis sets the real numbers.

## Then design to meet them

Shorter RTOs and RPOs cost more: hot standby sites, synchronous replication, more staff. Match the spend to the impact, and test that you can actually meet the numbers.

{{buy:844}}`,
    },
    {
      slug: "running-a-tabletop-exercise",
      title: "How to run a DR tabletop exercise",
      description: "A 90-minute session that finds the gaps in your plan before a disaster does.",
      date: "2026-10-25",
      courses: [880, 844],
      body: `A tabletop exercise walks the team through a realistic scenario around a table, without touching production.

## Prepare

- Pick a scenario: utility outage with a generator failure, a flooded basement, ransomware, a regional disaster
- Invite decision-makers from facilities, IT, security, communications and leadership
- Write 4–6 "injects": new developments released during the exercise

## Run it

1. Set the scene and the time
2. Ask each role what they do first, who they call and what they need
3. Release injects: "The generator fails to start." "Phones are down." "The press calls."
4. Note every gap, assumption and disagreement

## Debrief

- What worked?
- What was missing: contacts, procedures, authority, equipment?
- Assign each gap an owner and a date

Repeat at least once a year and after major changes. ICS-NIMS gives the command structure ([[880]]).`,
    },
  ],
};
