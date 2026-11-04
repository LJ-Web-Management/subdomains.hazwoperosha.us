// saa-labels.hazwoperosha.us: satellite accumulation area rules plus a printable hazardous waste label maker. Label stock, yellow and black.
export default {
  title: "Hazardous Waste Label Maker & Satellite Accumulation Area Training | Industrial Certified Training",
  description: "Make a printable hazardous waste container label with the words and hazard indication the generator rules require, and train staff on satellite accumulation area rules.",
  theme: "#fcc419",
  fonts: "family=Archivo+Narrow:wght@500;700&family=Archivo:wght@400;600;800",
  hero: {
    title: "Label it <span>right</span> at the point of generation.",
    lede: "Satellite accumulation areas are where most hazardous waste violations start: unlabeled, open containers. Make a compliant label below, then train the people who fill the containers.",
    cta: [415, "SAA Training · $59.99"],
    alt: ["#label", "Make a label"],
  },
  coursesTagline: "SAA, generator and universal waste training.",
  guidesTagline: "SAA rules in plain language.",

  courses: [
    { id: 415, short: "Satellite Accumulation Areas", summary: "Two hours on SAA rules: location, limits, labels and closed containers.", body: "Two hours on satellite accumulation areas: location, quantity limits, labels with hazard indication, closed containers and moving waste to central storage.", topics: ["Point of generation", "Quantity limits", "Labels and hazard indication", "The 3-day rule"] },
    { id: 601, short: "RCRA Generator Training", summary: "The full generator course.", body: "Eight hours on the full set of generator rules, from waste determinations to manifests.", topics: ["Waste determinations", "Generator categories", "Central accumulation areas", "Manifests"] },
    { id: 602, short: "Universal Waste Handler", summary: "Batteries, lamps, aerosol cans and other universal wastes.", body: "Two hours on universal waste handler rules for batteries, lamps, mercury-containing equipment, aerosol cans and pesticides.", topics: ["The five categories", "Labels and dates", "One-year limit", "Shipping"] },
    { id: 580, short: "Hazardous Waste Manifest", summary: "The paperwork that follows the waste.", body: "Two hours on completing and tracking the hazardous waste manifest.", topics: ["Manifest boxes", "Signatures", "e-Manifest"] },
  ],

  feature: () => `<section class="sec sl-sec" id="label"><div class="wrap sl-in">
<form class="sl-form" onsubmit="return false"><h2>Label maker</h2>
<label>Contents (waste name)<input id="slC" value="Spent acetone and rags"></label>
<fieldset><legend>Hazards</legend>
<label class="ck"><input type="checkbox" value="Ignitable" checked> Ignitable</label><label class="ck"><input type="checkbox" value="Corrosive"> Corrosive</label><label class="ck"><input type="checkbox" value="Reactive"> Reactive</label><label class="ck"><input type="checkbox" value="Toxic"> Toxic</label></fieldset>
<label>Location / area<input id="slA" value="Paint shop, booth 2"></label>
<label>Accumulation start date (only when moved to central storage or the SAA limit is exceeded)<input id="slD" type="date"></label>
<button type="button" class="btn" onclick="window.print()">Print label</button>
</form>
<div class="sl-label" id="slLabel"><p class="sl-hw">HAZARDOUS WASTE</p><p class="sl-fed">Federal law prohibits improper disposal.</p>
<dl><dt>Contents</dt><dd id="slOC"></dd><dt>Hazards</dt><dd id="slOH"></dd><dt>Location</dt><dd id="slOA"></dd><dt>Start date</dt><dd id="slOD"></dd></dl></div>
</div><p class="wrap sl-note">The federal rules require the words "Hazardous Waste" and an indication of the hazards. Some states require more, such as generator name, address and EPA ID. Check your state's rules.</p></section>
<script>
(function () {
  function u() {
    document.getElementById("slOC").textContent = document.getElementById("slC").value || "–";
    var h = [].slice.call(document.querySelectorAll(".sl-form fieldset input:checked")).map(function (i) { return i.value; });
    document.getElementById("slOH").textContent = h.length ? h.join(", ") : "–";
    document.getElementById("slOA").textContent = document.getElementById("slA").value || "–";
    document.getElementById("slOD").textContent = document.getElementById("slD").value || "____ / ____ / ______";
  }
  document.querySelectorAll(".sl-form input").forEach(function (i) { i.addEventListener("input", u); i.addEventListener("change", u); });
  u();
})();
</script>`,

  guides: [
    {
      slug: "saa-rules-plain-language",
      title: "Satellite accumulation area rules in plain language",
      description: "Six rules that cover most of what inspectors check.",
      date: "2026-10-25",
      courses: [415],
      body: `A **satellite accumulation area (SAA)** lets generators collect hazardous waste where it's made, without the time limits that apply in central storage.

## The rules (federal, 40 CFR 262.15)

1. **At or near the point of generation**, under the control of the operator of the process
2. **Up to 55 gallons** of hazardous waste, or 1 quart of liquid acute hazardous waste (or 1 kg of solid)
3. **Containers in good condition** and compatible with the waste
4. **Kept closed** except when adding, removing or consolidating waste
5. **Marked** with the words "Hazardous Waste" and an indication of the hazards
6. **When the limit is exceeded**, mark the date and move the excess to central storage within 3 consecutive calendar days

## Most common violations

- Open containers with a funnel left in
- Missing or faded labels
- Waste collected far from where it's generated

{{buy:415}}`,
    },
    {
      slug: "hazard-indication-options",
      title: "How to indicate the hazards on a label",
      description: "Words, pictograms or placards: the options the rule allows.",
      date: "2026-10-25",
      courses: [415, 601],
      body: `Since the 2016 Generator Improvements Rule, hazardous waste containers must show an **indication of the hazards** of the contents. The rule allows several ways to do it:

- **Hazardous waste characteristics**: ignitable, corrosive, reactive, toxic
- **DOT hazard communication**: a DOT label or placard
- **OSHA Hazard Communication**: a GHS pictogram
- **NFPA 704 diamond**
- Another method that tells workers and responders the hazards

## Pick one and use it everywhere

Consistency helps workers and inspectors. Train everyone who fills containers to check the label before adding waste.

See [[601]] for the full generator course.`,
    },
  ],
};
