export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  sections: { heading?: string; paragraphs: string[]; list?: string[] }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "choosing-the-right-pneumatic-cylinder",
    title: "How to choose the right pneumatic cylinder for your machine",
    excerpt:
      "Bore, stroke, mounting and air pressure — a practical guide to selecting cylinders like the 50×80 and 25×25 for packing and processing lines.",
    category: "Pneumatics",
    date: "2026-09-18",
    readTime: "5 min read",
    image: "/products/cylinder-5080/1.jpg",
    sections: [
      {
        paragraphs: [
          "Pneumatic cylinders convert compressed air into linear motion. They push, pull, clamp and cut on thousands of packing and processing machines. Picking the wrong one leads to weak strokes, air leaks and early seal failure.",
          "Cylinders are usually described as bore × stroke. A 50×80 cylinder has a 50 mm bore and an 80 mm stroke, while a 25×25 has a 25 mm bore and a 25 mm stroke.",
        ],
      },
      {
        heading: "1. Work out the force you need",
        paragraphs: [
          "Force depends on bore area and air pressure. A bigger bore gives more force at the same pressure. Always size with a safety margin of around 25–50% so the cylinder isn't working at its limit.",
        ],
      },
      {
        heading: "2. Match the stroke length",
        paragraphs: [
          "The stroke must cover the full travel your mechanism needs, without bottoming out hard at the end. For high-speed applications, choose cylinders with cushioning to reduce shock.",
        ],
      },
      {
        heading: "3. Check mounting and connections",
        paragraphs: ["Make sure the replacement matches your existing mounting style and port sizes. Typical connections use 6 mm or 8 mm pneumatic connectors."],
        list: ["Mounting type (foot, flange, clevis)", "Port thread and connector size", "Rod end thread", "Sensor/reed switch compatibility"],
      },
      {
        heading: "4. Don't forget air preparation",
        paragraphs: [
          "Clean, dry, regulated air extends cylinder life dramatically. An FRL (filter–regulator–lubricator) unit upstream is one of the cheapest ways to prevent breakdowns.",
          "Not sure which size fits your machine? Send us the existing cylinder's markings and we'll match it for you.",
        ],
      },
    ],
  },
  {
    slug: "batch-coding-tto-vs-ink-roller",
    title: "Batch coding explained: TTO ribbons vs ink-roller coders",
    excerpt:
      "Which coding method suits your packaging line? We compare thermal transfer ribbons and ink-based batch coders on cost, quality and maintenance.",
    category: "Packing Machines",
    date: "2026-08-27",
    readTime: "4 min read",
    image: "/products/ribbon-batch-coding-machine/1.webp",
    sections: [
      {
        paragraphs: [
          "Every food, pharma and FMCG pack needs a clear batch number, manufacturing date and expiry date. The two most common ways to print these on flexible packaging are ink-roller batch coders and thermal transfer (TTO) printing.",
        ],
      },
      {
        heading: "Ink-roller and ink-pad coders",
        paragraphs: [
          "These coders use a heated or ink-fed composer head with metal type to stamp characters onto the film. They are simple, low-cost and easy to maintain — ideal for small and mid-size lines.",
        ],
        list: ["Low upfront cost", "Simple consumables: ink pads, ink & thinner", "Easy to repair locally"],
      },
      {
        heading: "Thermal transfer (TTO) ribbons",
        paragraphs: [
          "TTO printers melt ink from a ribbon — such as a 33 mm × 500 m roll — onto the pack using a printhead. Print quality is sharp, and codes can be changed digitally without swapping type.",
        ],
        list: ["Crisp, high-resolution codes", "Variable data and logos", "Higher equipment cost"],
      },
      {
        heading: "Which should you choose?",
        paragraphs: [
          "If you run a single product with simple codes, a batch coding machine with ink rollers is economical. If you change codes often or need barcodes and logos, TTO pays for itself in flexibility.",
          "Sellomas stocks batch coding machines, double composer heads, ink pads, ink & thinner and TTO ribbons, so we can support either setup.",
        ],
      },
    ],
  },
  {
    slug: "bearing-maintenance-uc-ucp-ucfc",
    title: "UC, UCP and UCFC bearings: selection and maintenance tips",
    excerpt:
      "Pillow block and flange bearings keep conveyors and agro machines turning. Here's how to tell them apart and make them last longer.",
    category: "Machinery Parts",
    date: "2026-07-30",
    readTime: "6 min read",
    image: "/products/uc-fc-212-bearing/1.jpg",
    sections: [
      {
        paragraphs: [
          "Mounted bearing units are everywhere in agro and processing machinery — conveyors, mixers, elevators and shafts. The codes on them tell you exactly what you need when ordering a replacement.",
        ],
      },
      {
        heading: "Decoding the names",
        paragraphs: ["The UC insert bearing is the heart of the unit; the letters that follow describe the housing."],
        list: [
          "UC — the insert bearing with a set-screw locking collar",
          "UCP — UC insert in a pillow block (P) housing, e.g. UCP 210",
          "UCFC — UC insert in a round flanged cartridge housing, e.g. UC FC 205, 207, 212",
          "The last digits indicate shaft size — higher numbers mean larger shafts",
        ],
      },
      {
        heading: "Signs a bearing needs attention",
        paragraphs: ["Catching problems early saves the shaft and housing from damage."],
        list: ["Unusual noise or grinding", "Excess heat on the housing", "Visible play or wobble", "Grease leakage or discolouration"],
      },
      {
        heading: "Make them last",
        paragraphs: [
          "Re-grease at regular intervals with the right grade of grease, keep set screws tight, and make sure the shaft is aligned. In dusty agro environments, sealed units and regular cleaning make a big difference.",
          "Tell us the code on your old bearing and we'll supply a genuine replacement.",
        ],
      },
    ],
  },
  {
    slug: "reduce-power-consumption-packing-line",
    title: "5 ways to reduce power consumption on your packing line",
    excerpt:
      "Maximum output on minimum power is our guiding principle. These practical upgrades cut electricity bills without slowing production.",
    category: "Efficiency",
    date: "2026-06-12",
    readTime: "4 min read",
    image: "/products/ac-drive-ga700/1.jpg",
    sections: [
      {
        paragraphs: [
          "Power is one of the biggest running costs for any processing plant. The good news: small component upgrades can make a large difference over a year of operation.",
        ],
      },
      {
        heading: "1. Fix compressed-air leaks",
        paragraphs: ["Leaking fittings, worn connectors and faulty solenoid valves make compressors run more. Replacing them is often the fastest payback in the plant."],
      },
      {
        heading: "2. Use auto cut switches",
        paragraphs: ["A reliable compressor auto cut switch stops the compressor at the set pressure instead of running continuously."],
      },
      {
        heading: "3. Upgrade to servo drives",
        paragraphs: ["Servo motor drives use power only when motion is needed and give precise control, reducing waste film and energy."],
      },
      {
        heading: "4. Maintain heaters properly",
        paragraphs: ["Worn heater rods and heating tape take longer to reach temperature. Replacing them and using thermocouples correctly keeps sealing efficient."],
      },
      {
        heading: "5. Keep bearings healthy",
        paragraphs: [
          "Dry or misaligned bearings add friction, forcing motors to work harder. Regular lubrication and timely replacement keep loads low.",
          "Want an efficiency check of your line's spares list? Our team can recommend upgrades.",
        ],
      },
    ],
  },
];

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export const getPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);
