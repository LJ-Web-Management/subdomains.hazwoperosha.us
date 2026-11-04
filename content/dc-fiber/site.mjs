// dc-fiber.hazwoperosha.us: fiber optics and structured cabling. Light-in-glass neon strands on black.
export default {
  title: "Data Center Fiber Optics & Structured Cabling Training | Industrial Certified Training",
  description: "Fiber optics and structured cabling training for data center technicians: termination, testing and troubleshooting to ANSI/TIA-942, plus capacity planning and DCIM.",
  theme: "#090909",
  fonts: "family=Outfit:wght@300;500;700&family=DM+Mono:wght@500",
  hero: {
    title: "Clean ends. <span>Clean links.</span>",
    lede: "Most fiber faults are a dirty connector away. Training on fiber termination, testing and troubleshooting, and structured cabling to ANSI/TIA-942.",
    cta: [834, "Fiber & Cabling · $99.99"],
    alt: ["/guides/inspect-before-you-connect", "Inspect before you connect"],
  },
  heroArt: `<svg class="lp-art" viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden="true"><path d="M0 120C300 120 500 300 1200 260" stroke="#00f5d4"/><path d="M0 200C400 200 700 80 1200 140" stroke="#f15bb5"/><path d="M0 300C350 280 800 340 1200 200" stroke="#fee440"/><path d="M0 60C500 60 600 200 1200 320" stroke="#9b5de5"/></svg>`,
  coursesTagline: "Fiber, cabling and infrastructure planning.",
  guidesTagline: "Connector care and link loss budgets.",

  courses: [
    { id: 834, short: "Fiber Optics & Network Cabling" },
    { id: 829, short: "Capacity Planning" },
    { id: 830, short: "DCIM Platform Fundamentals" },
    { id: 855, short: "Physical Security & Access (1 hr)" },
  ],

  guides: [
    {
      slug: "inspect-before-you-connect",
      title: "Inspect before you connect",
      description: "Why a scope and a cleaner are the most important fiber tools you own.",
      date: "2026-10-25",
      courses: [834],
      body: `Contamination on connector end faces is one of the most common causes of fiber link problems. A speck of dust on a single-mode core is a big obstacle to light.

## The routine

1. **Inspect** both end faces with a fiber scope before every connection
2. **Clean** if anything is on them: dry clean first (click cleaner or lint-free wipe)
3. **Inspect again**. If still dirty, wet-dry clean and inspect again
4. **Connect** only when both ends pass

## Never

- Touch the end face
- Blow on it or use compressed air from a can
- Leave connectors or ports uncapped
- Look into a fiber or port: invisible laser light can damage your eyes

## Also clean the ports

Bulkhead ports in patch panels and transceivers need port-style cleaners.

{{buy:834}}`,
    },
    {
      slug: "link-loss-budget",
      title: "Building a fiber link loss budget",
      description: "Add up the losses and compare with what the optics can handle.",
      date: "2026-10-25",
      courses: [834, 829],
      body: `A **loss budget** estimates how much light the link will lose so you know before testing whether it should work.

## Add up

| Item | Typical allowance (check your standard and vendor specs) |
|---|---|
| Each mated connector pair | 0.75 dB max per TIA-568 (low-loss connectors are often much less) |
| Each splice | 0.3 dB max |
| Multimode fiber at 850 nm | about 3.0–3.5 dB per km |
| Single-mode fiber at 1310 nm | about 0.4–1.0 dB per km |

## Compare

The total must be below the maximum channel loss of the application, such as a particular Ethernet speed and optic. High-speed multimode links have very tight budgets, so every connector counts.

## Then test

Tier 1 testing with a light source and power meter measures total loss. Tier 2 adds an OTDR trace to locate events. Record results for every link.`,
    },
  ],
};
