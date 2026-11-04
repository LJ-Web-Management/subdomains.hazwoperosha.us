// rcra.hazwoperosha.us: EPA RCRA hazardous waste generator compliance training. Corporate / document style.
export default {
  title: "RCRA Hazardous Waste Training Online | Generator, Manifest, SAA | Industrial Certified Training",
  description: "EPA RCRA hazardous waste training for generators: 40 CFR 262.17 generator training, annual refresher, manifests, satellite accumulation, universal waste and contingency planning.",
  theme: "#0b2545",
  fonts: "family=IBM+Plex+Serif:wght@500;600&family=IBM+Plex+Sans:wght@400;500;600",
  coursesTagline: "Everything a hazardous waste generator's staff needs, from the loading dock to the manifest.",
  guidesTagline: "Practical compliance notes for EHS managers, plant managers and the people who sign the paperwork.",

  courses: [
    {
      id: 601, short: "Generator Training",
      summary: "The core RCRA training for hazardous waste generator personnel under 40 CFR 262.17.",
      body: `Large quantity generators must train everyone who handles hazardous waste within six months of hire, and review it every year (40 CFR 262.17(a)(7)). Small quantity generators must make sure their staff know proper handling and emergency procedures. This eight-hour course covers both, from waste determination to shipping.`,
      topics: ["Hazardous waste identification: listed and characteristic", "Generator categories and counting your waste", "Container and tank management", "Labels, marking and accumulation time limits", "Inspections and recordkeeping", "Preparedness, prevention and spill response", "Manifests and land disposal restrictions"],
      who: "Waste handlers, EHS staff, maintenance and production workers at LQG and SQG facilities.",
    },
    {
      id: 600, short: "Generator Refresher",
      summary: "The annual RCRA review for staff who completed initial generator training.",
      body: `LQG personnel need an annual review of their initial training. This four-hour refresher covers the core rules again, highlights recent changes and walks through the violations inspectors cite most often.`,
      topics: ["Waste determination review", "Container and labeling refresher", "Accumulation time limits by category", "Most-cited RCRA violations", "Contingency plan and emergency procedures review", "Regulatory updates"],
      who: "Employees who completed RCRA generator training and need their annual review.",
    },
    {
      id: 580, short: "Manifest Training",
      summary: "How to prepare, sign and track the Uniform Hazardous Waste Manifest and e-Manifest.",
      body: `The person who signs a hazardous waste manifest certifies, under penalty of law, that the waste is properly described, packaged, marked and labeled. This two-hour course teaches the manifest box by box and covers e-Manifest, exception reports and record retention.`,
      topics: ["EPA Form 8700-22, box by box", "The generator's certification statement", "e-Manifest and paper copies", "DOT shipping descriptions on the manifest", "Tracking returns and exception reports", "Recordkeeping"],
      who: "Anyone who prepares or signs hazardous waste manifests: EHS staff, shipping and receiving, plant managers.",
    },
    {
      id: 415, short: "Satellite Accumulation",
      summary: "Running satellite accumulation areas at the point of generation under 40 CFR 262.15.",
      body: `Satellite accumulation areas are where most waste starts and where many violations are found. This two-hour course covers the 55-gallon limit, container condition, labels and the three-day rule, so the people who fill those containers keep them compliant.`,
      topics: ["What qualifies as a satellite accumulation area", "55-gallon and acute waste limits", "Container marking and hazard indication", "Keeping containers closed", "The three-day rule when limits are exceeded", "Moving waste to central accumulation"],
      who: "Lab staff, production operators, maintenance techs and anyone who adds waste to a container at the point of generation.",
    },
    {
      id: 412, short: "Contingency Plan",
      summary: "Contingency plans and the emergency coordinator role for LQGs and TSDFs.",
      body: `Large quantity generators must keep a contingency plan, name an emergency coordinator and, since EPA's Generator Improvements Rule, prepare a quick reference guide for responders. This course covers what the plan must say and what the coordinator must do when something goes wrong.`,
      topics: ["Contingency plan contents", "The quick reference guide for responders", "Emergency coordinator duties and authority", "Arrangements with local emergency services", "Responding to fires, explosions and releases", "Post-incident reporting"],
      who: "Emergency coordinators and alternates, EHS managers and facility managers at LQGs and TSDFs.",
    },
    {
      id: 602, short: "Universal Waste",
      summary: "Managing batteries, lamps, mercury equipment, pesticides and aerosol cans under 40 CFR 273.",
      body: `Universal waste rules make common hazardous wastes easier to manage, but only if handlers follow them. This two-hour course covers which wastes qualify, how to label and store them, the one-year limit and what to do when one breaks.`,
      topics: ["The five universal waste categories", "Small vs large quantity handlers", "Labeling and accumulation time", "Broken lamps and leaking batteries", "Shipping to destination facilities", "Employee information requirements"],
      who: "Facilities, maintenance, retail and warehouse staff who collect batteries, lamps, aerosol cans and similar items.",
    },
    {
      id: 403, short: "RCRA/DOT Combined",
      summary: "One course for generator staff who also prepare hazardous materials shipments under DOT.",
      body: `Hazardous waste shipments are also DOT hazardous materials shipments. Anyone who classifies, packages, marks or signs for them is a DOT hazmat employee and needs training under 49 CFR 172.704 at least every three years. This eight-hour course combines RCRA generator training with DOT hazmat employee training.`,
      topics: ["RCRA generator requirements", "DOT hazmat classification", "Packaging, marking and labeling", "Shipping papers and the manifest", "Security awareness", "Function-specific training records"],
      who: "Shipping staff and EHS personnel who prepare hazardous waste and hazmat shipments.",
    },
  ],

  guides: [
    {
      slug: "rcra-training-requirements-by-generator-category",
      title: "RCRA training requirements by generator category",
      description: "What VSQGs, SQGs and LQGs must train, how often, and what records inspectors ask for.",
      date: "2026-10-25",
      courses: [601, 600],
      body: `Your RCRA training duties depend on how much hazardous waste you generate in a calendar month. Count it, find your category, then match your training to it.

## The categories

| Category | Hazardous waste per month | Acute hazardous waste per month |
|---|---|---|
| Very small quantity generator (VSQG) | 100 kg or less | 1 kg or less |
| Small quantity generator (SQG) | More than 100 kg, less than 1,000 kg | 1 kg or less |
| Large quantity generator (LQG) | 1,000 kg or more | More than 1 kg |

100 kg is about half a 55-gallon drum of water-weight liquid. 1,000 kg is about five drums.

## LQG: formal, documented, annual

40 CFR 262.17(a)(7) is the most detailed requirement:

- Personnel must complete training **within six months** of starting a hazardous waste job, and can't work unsupervised until they do.
- The training must teach them to do their jobs in compliance and to respond to emergencies.
- Staff must take part in an **annual review** of the training.
- You must keep written records: each job title, the name of the person in it, a job description, and the type and amount of training each person gets. Keep records on current staff until closure and on former staff for three years.

## SQG: thorough familiarity

Under 40 CFR 262.16(b)(9)(iii), SQGs must make sure employees are "thoroughly familiar with proper waste handling and emergency procedures" for their jobs. There's no fixed format or schedule, but you have to be able to show it. A course with a certificate is the easiest proof.

## VSQG: no federal training rule

VSQGs have no federal RCRA training requirement. Your state may add one, and your workers may still need OSHA hazard communication or HAZWOPER training.

> Episodic events, such as a cleanout or a one-time spill, can bump you into a higher category for a month. Plan training for the category you could reach, not just your normal month.

## Building the plan

- Everyone who handles waste: [[601]], then [[600]] every year
- Satellite area users: [[415]]
- Anyone who signs manifests: [[580]], and DOT training via [[403]]
- Emergency coordinators: [[412]]`,
    },
    {
      slug: "satellite-accumulation-area-rules",
      title: "Satellite accumulation areas: the rules inspectors check first",
      description: "Satellite areas are small, scattered and run by people who aren't waste specialists. That's why they're cited so often.",
      date: "2026-10-25",
      courses: [415],
      body: `A satellite accumulation area, or SAA, is a container at or near the point where waste is generated, under the control of the person running that process. It's where most hazardous waste begins. Inspectors know that, and SAAs are often the first stop on a walk-through.

## The rules in 40 CFR 262.15

1. **At or near the point of generation.** The waste container belongs at the process that creates the waste. A shared room down the hall usually doesn't count.
2. **Under the control of the operator.** The people adding waste must be able to control the area.
3. **Volume limit.** Up to 55 gallons of hazardous waste, or 1 quart of liquid acute hazardous waste, or 1 kg of solid acute hazardous waste.
4. **Marked.** Each container must say "Hazardous Waste" and indicate the hazards of the contents, for example with a hazard class label, GHS pictogram or NFPA diamond.
5. **Closed.** Keep containers closed except when adding, removing or consolidating waste.
6. **Good condition and compatible.** No leaks, rust or bulging, and the container material must suit the waste.

## The three-day rule

If you go over the limit, mark the container with the date the excess began. You then have **three consecutive calendar days** to move the excess to central accumulation, or to a treatment, storage or disposal facility. Weekends count.

## The violations we see most

- Funnels left in open containers
- "Waste" or "Used solvent" labels without the words "Hazardous Waste"
- No hazard indication
- Containers sitting in a hallway, far from the process
- Several partly full containers of the same waste, adding up to more than 55 gallons

> Satellite areas are run by operators, lab techs and mechanics. Train the people who actually fill the containers, not just EHS.

{{buy:415}}`,
    },
    {
      slug: "signing-a-hazardous-waste-manifest",
      title: "What you're certifying when you sign a hazardous waste manifest",
      description: "The generator signature on the manifest is a legal certification. Here's what it means and how to protect it.",
      date: "2026-10-25",
      courses: [580, 403],
      body: `The Uniform Hazardous Waste Manifest (EPA Form 8700-22) follows your waste from your dock to its final destination. The signature in the generator box is a legal certification that carries your name, and it's often signed in a hurry.

## The certification

When you sign, you certify that the contents are "fully and accurately described above by the proper shipping name, and are classified, packaged, marked and labeled/placarded, and are in all respects in proper condition for transport according to applicable international and national governmental regulations."

You're also certifying your waste minimization statement. In plain words: you checked it, and it's right.

## You're also a DOT hazmat employee

Signing a manifest is preparing a hazardous materials shipping paper. Under 49 CFR 172.704, anyone who does that needs DOT hazmat employee training within 90 days of starting the job and at least every three years after. Many manifest signers have RCRA training but no DOT training. [[403]] covers both.

## e-Manifest

Since 2018, manifests are tracked in EPA's e-Manifest system. Receiving facilities submit them, and generators can sign electronically and see their manifests online. Register your site in EPA's RCRAInfo so you can see what's been filed under your EPA ID number.

## After the truck leaves

| Step | LQG | SQG |
|---|---|---|
| Signed copy from the TSDF not back | Contact the transporter and facility after 35 days | Wait up to 60 days |
| Still nothing | File an exception report by day 45 | Send a copy with a note to EPA or the state after 60 days |
| Keep copies | At least 3 years | At least 3 years |

## A five-minute pre-signing check

1. EPA ID numbers right for you, the transporter and the destination
2. Proper shipping name, hazard class and UN number match the profile
3. Container count and type match what's on the truck
4. Waste codes are complete
5. Containers labeled, marked and closed

{{buy:580}}`,
    },
  ],

  shell({ body, h }) {
    return `${h.header(601)}
<main>${body}</main>
<footer class="foot"><div class="wrap foot-in">
<div><p class="foot-brand">${h.logo}</p><p>EPA hazardous waste training for generators, by Industrial Certified Training. Courses are delivered on hazwoper-osha.com with completion certificates for your training records.</p></div>
<div><h4>Courses</h4>${h.courses.map((c) => `<a href="${c.url}">${h.esc(c.short)}</a>`).join("")}</div>
<div><h4>Contact</h4><a href="tel:+18664296742">+1-866-429-6742</a><a href="mailto:info@hazwoper-osha.com">info@hazwoper-osha.com</a><p class="small">Invoices and purchase orders available for facility-wide training.</p></div>
</div></footer>`;
  },

  home(h) {
    const { courses, guides, money, esc, course } = h;
    const plans = {
      lqg: { label: "Large quantity generator", note: "40 CFR 262.17(a)(7): train within 6 months of assignment, review annually, keep written records.", ids: [601, 600, 415, 580, 412] },
      sqg: { label: "Small quantity generator", note: "40 CFR 262.16(b)(9)(iii): employees must be thoroughly familiar with waste handling and emergency procedures.", ids: [601, 415, 580] },
      ship: { label: "Shipping & manifests", note: "Manifest signers prepare hazmat shipping papers and need DOT training under 49 CFR 172.704 every 3 years.", ids: [403, 580] },
      uw: { label: "Universal waste handler", note: "40 CFR 273: inform or train employees on proper handling and emergency procedures.", ids: [602] },
    };
    const planRows = (ids) => ids.map((id) => { const c = course(id); return `<li><span><a href="${c.url}">${esc(c.name)}</a><small>${esc(c.duration)} · Course #${c.id}</small></span><b>${money(c.price)}</b>${h.buy(c.id, "Enroll", "btn btn-sm")}</li>`; }).join("");
    return `<section class="hero"><div class="wrap hero-in">
<div>
<p class="hero-call">Questions? Call <a href="tel:+18664296742">(866) 429-6742</a></p>
<h1>Pass your next RCRA inspection.</h1>
<p class="hero-lede">Train every person who touches a drum, a label or a manifest. Online courses with certificates for your training file.</p>
<ul class="checks"><li>Generator, manifest and satellite area training</li><li>Completion records ready for your inspector</li><li>Seats for your whole facility in one checkout</li></ul>
<div class="hero-cta">${h.buy(601, "Train my facility")}<a class="btn btn-alt" href="#plan">Build a training plan</a></div>
</div>
<div class="doc" aria-label="Sample training plan">
<div class="doc-head"><span>Training plan</span><span>Rev. 2026</span></div>
<h3>Hazardous Waste Personnel</h3>
<table><thead><tr><th>Role</th><th>Course</th><th>Freq.</th></tr></thead><tbody>
<tr><td>Waste handler</td><td>Generator #601</td><td>Initial</td></tr>
<tr><td>Waste handler</td><td>Refresher #600</td><td>Annual</td></tr>
<tr><td>Lab / line operator</td><td>SAA #415</td><td>Initial</td></tr>
<tr><td>Shipping lead</td><td>Manifest #580</td><td>Initial</td></tr>
<tr><td>Emergency coord.</td><td>Contingency #412</td><td>Initial</td></tr>
</tbody></table>
<div class="doc-stamp">COMPLIANT</div>
</div></div></section>

<section class="band"><div class="wrap band-in">
<div><b>6 mo.</b><span>LQG deadline to train new waste handlers</span></div>
<div><b>Annual</b><span>review of RCRA training for LQG staff</span></div>
<div><b>3 yrs</b><span>record retention for former employees</span></div>
<div><b>3 days</b><span>to move excess waste out of a satellite area</span></div>
</div></section>

<section class="sec" id="plan"><div class="wrap">
<div class="sec-head"><p class="eyebrow">Training plans</p><h2>What does your facility need?</h2></div>
<div class="tabs" role="tablist">${Object.entries(plans).map(([k, p], i) => `<button role="tab" aria-selected="${i === 0}" aria-controls="plan-${k}" id="tab-${k}">${p.label}</button>`).join("")}</div>
${Object.entries(plans).map(([k, p], i) => `<div class="plan" role="tabpanel" id="plan-${k}" aria-labelledby="tab-${k}"${i ? " hidden" : ""}><p class="plan-note">${esc(p.note)}</p><ul>${planRows(p.ids)}</ul></div>`).join("")}
</div></section>
<script>
document.querySelectorAll('.tabs [role=tab]').forEach(function (tab) {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.tabs [role=tab]').forEach(function (t) { t.setAttribute('aria-selected', String(t === tab)); });
    document.querySelectorAll('.plan').forEach(function (p) { p.hidden = p.id !== tab.getAttribute('aria-controls'); });
  });
});
</script>

<section class="sec sec-alt"><div class="wrap">
<div class="sec-head"><p class="eyebrow">Course catalog</p><h2>All RCRA courses</h2></div>
<div class="course-list">${courses.map(h.courseRow).join("")}</div>
</div></section>

<section class="sec"><div class="wrap">
<div class="sec-head"><p class="eyebrow">Compliance notes</p><h2>Guides for EHS teams</h2></div>
<div class="guide-list">${guides.map(h.guideCard).join("")}</div>
</div></section>`;
  },
};
