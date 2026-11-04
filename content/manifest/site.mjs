// manifest.hazwoperosha.us: the hazardous waste manifest, with a clickable form field explainer. Carbonless form, multi-part tints.
const BOXES = [
  ["1", "Generator's US EPA ID number", "The 12-character EPA identification number for the site where the waste was generated."],
  ["3", "Emergency response phone", "A number answered 24 hours a day while the waste is in transport, by someone who knows the waste or has immediate access to someone who does."],
  ["4", "Manifest tracking number", "The unique number pre-printed on the form by a registered printer, or assigned by e-Manifest."],
  ["5", "Generator's name and addresses", "Mailing address and, if different, the physical site address where the waste was generated."],
  ["6–7", "Transporters", "Company name and EPA ID number for each transporter, in the order they'll carry the waste."],
  ["8", "Designated facility", "The permitted treatment, storage or disposal facility that will receive the waste, with its EPA ID number."],
  ["9a–9b", "HM column and DOT description", "An X in 9a for DOT hazardous materials, and the DOT shipping description: UN number, proper shipping name, hazard class and packing group."],
  ["10–12", "Containers, quantity and units", "Number and type of containers, total quantity, and the unit of weight or volume."],
  ["13", "Waste codes", "The federal and state hazardous waste codes that apply to each waste line."],
  ["14", "Special handling instructions", "Anything the transporter or facility needs to know, plus emergency response guide numbers if used."],
  ["15", "Generator's certification", "The generator's signature certifying the shipment is properly described, packaged, marked and labeled, and the waste minimization statement."],
  ["17", "Transporter acknowledgment", "Each transporter signs and dates to accept the waste."],
  ["18", "Discrepancy", "Where the facility notes differences in quantity or type, rejections, or residues."],
  ["19–20", "Management method and facility certification", "The facility records how each waste was managed and signs to certify receipt."],
];

export default {
  brand: "Manifest 101",
  logo: `<span class="mf-copies"><i></i><i></i><i></i></span>Manifest 101`,
  title: "Hazardous Waste Manifest Explained, Box by Box | Manifest 101",
  description: "A box-by-box guide to the Uniform Hazardous Waste Manifest (EPA Form 8700-22) and e-Manifest, with manifest, RCRA/DOT and generator training.",
  theme: "#1971c2",
  fonts: "family=Courier+Prime:wght@400;700&family=Public+Sans:wght@400;600;800",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="9" y="3" width="19" height="24" fill="#ffd8a8"/><rect x="6" y="5" width="19" height="24" fill="#d0ebff"/><rect x="3" y="7" width="19" height="23" fill="#fff" stroke="#1971c2" stroke-width="1.5"/><path d="M6 13h13M6 17h13M6 21h9" stroke="#1971c2" stroke-width="1.5"/></svg>`,
  hero: {
    title: "Every box, <span>explained.</span>",
    lede: "The manifest follows hazardous waste from your dock to its final destination. Most mistakes come from a handful of boxes. Click through the form, then train the people who sign it.",
    cta: [580, "Manifest Training · $34.99"],
    alt: ["#form", "Explore the form"],
  },
  coursesTagline: "Manifest, DOT and generator training.",
  guidesTagline: "Signing, e-Manifest and fixing mistakes.",

  courses: [
    { id: 580, short: "Hazardous Waste Manifest", summary: "Two hours on completing, signing and tracking the manifest.", body: "Two hours on the Uniform Hazardous Waste Manifest, box by box: generator, transporter and facility information, DOT descriptions, waste codes, signatures and e-Manifest.", topics: ["Every manifest box", "DOT shipping descriptions", "Signatures and copies", "e-Manifest and corrections"] },
    { id: 403, short: "RCRA/DOT Combined Compliance", summary: "RCRA and DOT hazmat rules together for shippers.", body: "Eight hours on RCRA hazardous waste and DOT hazardous materials rules together, for people who prepare and ship hazardous waste.", topics: ["Hazmat classification", "Packaging, marking and labeling", "Shipping papers and placards", "RCRA generator duties"] },
    { id: 601, short: "RCRA Generator Training", summary: "The full generator course.", body: "Eight hours on hazardous waste generator rules.", topics: ["Waste determinations", "Generator categories", "Accumulation", "Manifests"] },
    { id: 600, short: "RCRA Generator Refresher", summary: "The annual refresher.", body: "Four hours of refresher training on generator rules.", topics: ["Generator categories", "Containers", "Recent changes"] },
  ],

  feature: (h) => `<section class="sec mf-sec" id="form"><div class="wrap mf-in">
<h2 class="vh">Hazardous waste manifest, box by box</h2>
<div class="mf-form" role="list">${BOXES.map((b, i) => `<button type="button" role="listitem" data-i="${i}"${i === 0 ? ' class="on"' : ""}><b>${b[0]}</b>${h.esc(b[1])}</button>`).join("")}</div>
<div class="mf-info" aria-live="polite"><p class="mf-n">Box <span id="mfN">${BOXES[0][0]}</span></p><h3 id="mfT">${h.esc(BOXES[0][1])}</h3><p id="mfD">${h.esc(BOXES[0][2])}</p>
<p class="mf-note">Simplified for training. Follow the current EPA manifest instructions and your state's rules.</p></div>
</div></section>
<script>
window.MF = ${JSON.stringify(BOXES).replace(/</g, "\\u003c")};
(function () {
  var bs = document.querySelectorAll(".mf-form button");
  bs.forEach(function (b) { b.addEventListener("click", function () { var x = window.MF[+b.getAttribute("data-i")]; bs.forEach(function (y) { y.classList.toggle("on", y === b); }); document.getElementById("mfN").textContent = x[0]; document.getElementById("mfT").textContent = x[1]; document.getElementById("mfD").textContent = x[2]; }); });
})();
</script>`,

  guides: [
    {
      slug: "before-you-sign-the-manifest",
      title: "Before you sign the manifest: a 10-point check",
      description: "Your signature certifies the shipment. Check these first.",
      date: "2026-10-25",
      courses: [580, 403],
      body: `By signing box 15, the generator certifies that the waste is properly classified, described, packaged, marked and labeled. Only people trained under DOT hazmat rules should sign.

1. EPA ID numbers are correct for the generator, transporter and facility
2. The emergency phone number works and is answered 24/7
3. Each DOT description matches the waste (UN number, shipping name, class, packing group)
4. Container counts and types match what's on the truck
5. Quantities are accurate, with the right units
6. Waste codes are complete
7. Containers are closed, in good condition and labeled
8. Markings and labels match the manifest
9. The truck is placarded if required
10. You've kept your copy, or the e-Manifest record is complete

{{buy:580}}`,
    },
    {
      slug: "e-manifest-basics",
      title: "e-Manifest basics for generators",
      description: "What changed with EPA's electronic manifest system.",
      date: "2026-10-25",
      courses: [580, 601],
      body: `EPA's **e-Manifest** system tracks hazardous waste shipments electronically. Receiving facilities submit every manifest to it, whether the manifest was electronic or paper.

## What generators need

- A **RCRAInfo** account for each site, with someone able to sign electronically if you use electronic manifests
- Access to view your site's manifests and final copies

## Paper or electronic

You can still use paper (with the receiving facility uploading it), a hybrid where the generator signs on paper, or fully electronic manifests. Check what your transporter and facility support.

## Watch for

- Final signed copies: check them in e-Manifest instead of waiting for paper in the mail
- Corrections the facility makes after receipt
- Exception reporting if the facility doesn't confirm receipt in time

See [[601]] for the rest of the generator rules.`,
    },
  ],
};
