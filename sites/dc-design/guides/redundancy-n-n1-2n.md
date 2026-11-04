---
title: "N, N+1, N+2 or 2N? Choosing a redundancy model"
description: "What each redundancy model buys you, what it costs, and how to pick one. A 2-minute guide from Draftline DC."
url: https://dc-design.hazwoperosha.us/guides/redundancy-n-n1-2n
---

[Guides](https://dc-design.hazwoperosha.us/guides/) · 2 min read

# N, N+1, N+2 or 2N? Choosing a redundancy model

What each redundancy model buys you, what it costs, and how to pick one.

Redundancy is described relative to **N**, the capacity needed to carry the full IT load.

| Model | What it means | Example (load needs 4 units) |
| --- | --- | --- |
| N | Exactly enough, no spare | 4 units |
| N+1 | One spare component | 5 units |
| N+2 | Two spare components | 6 units |
| 2N | A complete second system | 2 × 4 units, on separate paths |
| 2N+1 | Two systems plus a spare | 2 × 4 units + 1 |

## Components vs paths

N+1 adds spare **components** (a fifth chiller, a fifth UPS module). 2N adds a whole second **distribution path**, so a failure or maintenance on one path doesn't touch the load. That difference matters more than the unit count.

## How to choose

- **What does downtime cost** per hour for the workloads in the room?
- **Must you maintain without shutdowns?** If yes, you need concurrently maintainable paths, not just spare units.
- **What does the next increment cost** in capital, space, and efficiency (lightly loaded equipment runs less efficiently)?

Many facilities mix models: 2N power to the rack, N+1 cooling, N+1 generators.

**Data Center Design Fundamentals** 8 Hours · $312.99 per seat

[Enroll](https://dc-design.hazwoperosha.us/guides/redundancy-n-n1-2n?buy=842)

## Courses

[Data Center Design Fundamentals](https://dc-design.hazwoperosha.us/courses/data-center-design-fundamentals) 8 Hours · Course #842 · ANSI/TIA-942

$312.99 [Enroll](https://dc-design.hazwoperosha.us/guides/redundancy-n-n1-2n?buy=842)

[Tier Infrastructure Fundamentals](https://dc-design.hazwoperosha.us/courses/tier-infrastructure-fundamentals) 8 Hours · Course #849 · Uptime Institute Tier Framework

$280.99 [Enroll](https://dc-design.hazwoperosha.us/guides/redundancy-n-n1-2n?buy=849)

---

Training is delivered by HAZWOPER OSHA Training, LLC (https://hazwoper-osha.com/). Phone: +1-866-429-6742. Email: info@hazwoper-osha.com.
Site index: [sitemap](https://dc-design.hazwoperosha.us/sitemap.xml) · [llms.txt](https://dc-design.hazwoperosha.us/llms.txt) · [about](https://dc-design.hazwoperosha.us/about) · [contact](https://dc-design.hazwoperosha.us/contact)
