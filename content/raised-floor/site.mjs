// raised-floor.hazwoperosha.us: raised floor, confined space awareness and ergonomics. Perforated floor tiles.
export default {
  title: "Raised Floor Safety, Confined Space Awareness & Ergonomics for Data Centers | Industrial Certified Training",
  description: "Safety training for data center floor work: raised floor and confined space awareness, server room ergonomics and manual handling, and data center electrical safety.",
  theme: "#495057",
  fonts: "family=Manrope:wght@400;600;800",
  hero: {
    title: "Mind the <span>open tile.</span>",
    lede: "An open floor tile is a fall hazard. The space under it can hold cables, pipes and sometimes poor air. Safety training for everyone working on the data center floor.",
    cta: [856, "Raised Floor & Confined Space · $99.99"],
    alt: ["/guides/working-with-floor-tiles", "Floor tile rules"],
  },
  heroArt: `<div class="uf-floor" aria-hidden="true"></div>`,
  coursesTagline: "Floor, confined space, ergonomics and electrical safety.",
  guidesTagline: "Floor tiles and lifting heavy equipment.",

  courses: [
    { id: 856, short: "Raised Floor & Confined Space Awareness" },
    { id: 858, short: "Server Room Ergonomics & Manual Handling" },
    { id: 852, short: "Data Center Electrical Safety" },
    { id: 855, short: "Physical Security & Access (1 hr)" },
  ],

  guides: [
    {
      slug: "working-with-floor-tiles",
      title: "Rules for working with raised floor tiles",
      description: "Lifting, leaving and replacing tiles without hurting anyone or the airflow.",
      date: "2026-10-25",
      courses: [856],
      body: `## Before you lift

- Get permission, as lifted tiles affect airflow and may be under a change process
- Check what's underneath on drawings: power whips, chilled water, fire detection
- Set up barriers or cones around the opening

## Lifting

- Use a proper tile lifter (suction cups), not a screwdriver
- Lift one tile at a time, and don't remove too many adjacent tiles: the grid can lose stability
- Watch your back: some tiles are heavy

## While open

- **Never leave an open tile unattended.** Guard it or put it back
- Don't stand or kneel on the edge of the opening

## Under the floor

Most underfloor spaces aren't permit-required confined spaces, but deep plenums, poor ventilation or a suppression system discharge can change that. Follow your site's confined space evaluation (29 CFR 1910.146).

## Replacing

Seat tiles fully and level. Put perforated tiles back exactly where they came from.

{{buy:856}}`,
    },
    {
      slug: "lifting-servers-safely",
      title: "Lifting servers and equipment safely",
      description: "Heavy, awkward and up high: how to rack equipment without injuries.",
      date: "2026-10-25",
      courses: [858],
      body: `Servers, storage arrays, UPS modules and batteries can be heavy, and racking them means lifting at awkward heights.

## Plan the lift

- Check the weight on the spec sheet or the box
- Remove drives, power supplies and other modules first to lighten it, if allowed
- Use a server lift or rack-mounted lift for heavy or high positions
- Use two people for anything heavy or awkward

## Lift right

- Keep the load close
- Lift with your legs, not your back
- Don't twist: turn your feet
- Avoid lifting above shoulder height without a lift

## Around the floor

- Use carts for moving equipment, and watch for floor point-load limits
- Clear packaging away promptly. Cardboard is a trip and fire hazard
- Keep aisles clear

See [[858]].`,
    },
  ],
};
