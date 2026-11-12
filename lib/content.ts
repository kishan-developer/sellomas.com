import type { IconName } from "@/components/Icon";

/* ---------- About ---------- */

export const ABOUT_STORY = [
  "Sellomas – Engineering Excellence for Industrial Growth. Sellomas is a globally aligned provider of precision-engineered industrial machinery parts, pneumatic and electronic components, and advanced industrial machinery solutions. Guided by innovation and technical excellence, we deliver energy-efficient, high-performance systems tailored to complex industrial requirements. Our strength lies in bespoke engineering, strategic consultancy, and uncompromising quality, enabling clients to achieve superior productivity, operational efficiency, and enduring value. Sellomas is recognized as a trusted partner to industries worldwide, defined by reliability, precision, and long-term performance.",
  "Customized Solutions & Technical Expertise. Sellomas stands out for its ability to offer tailor-made machinery solutions based on specific client requirements. Our consistent growth is driven by strong technical knowledge, industry-focused customization, and commitment to quality and innovation. We also provide professional consultancy services to entrepreneurs and businesses, assisting them from concept planning to final execution. Each solution is carefully designed to ensure higher productivity at the lowest operational cost.",
];

export const ABOUT_QUOTE = "Solid base coupled with the ability to provide customised solutions have paved the way for our success.";

export const MISSION_VISION = [
  {
    title: "Our Mission",
    text: "To supply technically advanced agro machines and allied spare parts that deliver higher productivity at the lowest input cost.",
  },
  {
    title: "Our Vision",
    text: "To be the most trusted partner for industrial and agro machinery parts in India, known for genuine products and honest advice.",
  },
  {
    title: "Our Promise",
    text: "Superlative quality, attractive pricing and timely delivery — backed by people who understand machines.",
  },
];

export const TIMELINE = [
  { year: "2006", title: "Technical services begin", text: "Our founders start providing technical services to agro industries in Varanasi." },
  { year: "2008", title: "Sellomas is founded", text: "Sellomas is established as a food processing and machinery marketing organisation." },
  { year: "Growth", title: "Expanding the range", text: "We add pneumatic, electronic and industrial machinery components to our agro machinery line." },
  { year: "Today", title: "Trusted across India", text: "A leading supplier and consultant serving clients across major Indian states." },
];

export const VALUES: { title: string; icon: IconName; text: string }[] = [
  { title: "Quality first", icon: "shield", text: "Only genuine, tested products leave our warehouse." },
  { title: "Energy efficiency", icon: "bolt", text: "Maximum output on minimum power, always." },
  { title: "Customer focus", icon: "users", text: "Customised solutions for every plant and budget." },
  { title: "Integrity", icon: "clipboard", text: "Transparent advice, fair pricing and honest timelines." },
];

/* ---------- Company Profile ---------- */

export const COMPANY_FACTS: { label: string; value: string }[] = [
  { label: "Company Name", value: "Sellomas" },
  { label: "Nature of Business", value: "Trader, Retailer & Supplier" },
  { label: "Year of Establishment", value: "2008" },
  { label: "Technical Services Since", value: "2006" },
  { label: "Headquarters", value: "Varanasi, Uttar Pradesh, India" },
  { label: "Registered Address", value: "Bhelupura, Varanasi, Uttar Pradesh 221010" },
  { label: "GST Status", value: "Registered" },
  { label: "Market Covered", value: "Pan India — major states" },
  { label: "Core Product Lines", value: "Agro machinery, electronic, pneumatic & machinery components, packing machines" },
  { label: "Services", value: "Machinery consultancy, custom sourcing, technical support" },
];

export const COMPANY_STATS = [
  { value: 18, suffix: "+", label: "Years in business" },
  { value: 4, suffix: "", label: "Core product categories" },
  { value: 77, suffix: "+", label: "Machinery parts in catalogue" },
  { value: 89, suffix: "%", label: "Enquiry response rate" },
];

export const INFRASTRUCTURE = [
  {
    title: "Warehouse & storage",
    text: "An organised storage facility in Varanasi keeps fast-moving spares in stock, so urgent orders can be dispatched quickly.",
  },
  {
    title: "Sourcing network",
    text: "Long-standing relationships with reputed manufacturers and brands let us source genuine parts at competitive prices.",
  },
  {
    title: "Skilled team",
    text: "Our team combines technical knowledge of agro and packaging machinery with commercial experience, guiding every enquiry.",
  },
];

/* ---------- Quality Assurance ---------- */

export const QA_INTRO =
  "Our products exhibit superlative quality. Every component we supply is chosen for performance, durability and energy efficiency — and checked before it reaches your plant.";

export const QA_STEPS = [
  { title: "Vendor qualification", text: "We work only with reputed manufacturers and authorised channels with proven quality records." },
  { title: "Incoming inspection", text: "Each consignment is checked for model, specification, physical condition and genuine branding." },
  { title: "Functional testing", text: "Electronic and pneumatic parts are tested for correct operation wherever practical before dispatch." },
  { title: "Safe packaging", text: "Sensitive components are packed with protective material to prevent damage in transit." },
  { title: "After-sales support", text: "Our technical team helps with installation queries and replacements if anything is not right." },
];

export const QA_PILLARS: { title: string; icon: IconName; text: string }[] = [
  { title: "Genuine products", icon: "shield", text: "Original parts from trusted brands — no compromises on authenticity." },
  { title: "Specification match", icon: "clipboard", text: "Part numbers and ratings verified against your machine requirements." },
  { title: "Energy efficient", icon: "bolt", text: "Preference for components that reduce power consumption." },
  { title: "Durability tested", icon: "wrench", text: "Products selected for long service life in demanding conditions." },
];

export const QA_CHECKLIST = [
  "Brand & part-number verification",
  "Visual and dimensional inspection",
  "Electrical rating confirmation",
  "Pneumatic pressure and leak check",
  "Bearing play & smoothness check",
  "Protective, labelled packaging",
];

/* ---------- Industries ---------- */

export const INDUSTRIES: { title: string; icon: IconName; text: string; needs: string[] }[] = [
  {
    title: "Food Processing",
    icon: "factory",
    text: "Processing lines for snacks, spices, grains and ready-to-eat foods that run long shifts and need reliable spares.",
    needs: ["Batch coding", "Heater rods", "Sensors"],
  },
  {
    title: "Agro & Grain Processing",
    icon: "wheat",
    text: "Rice mills, flour mills and agro processing units needing durable bearings, motors and drive parts.",
    needs: ["Bearings", "Pulleys", "Motors"],
  },
  {
    title: "Packaging & FMCG",
    icon: "package",
    text: "Form-fill-seal and pouch packing machines that depend on precise coding, sealing and motion control.",
    needs: ["TTO ribbons", "Heating tape", "Pneumatics"],
  },
  {
    title: "Dairy & Beverages",
    icon: "drop",
    text: "Filling and packing lines where hygiene, uptime and accurate batch printing are critical.",
    needs: ["Solenoid valves", "Coding", "Sensors"],
  },
  {
    title: "Pharmaceuticals",
    icon: "pill",
    text: "Packing and labelling lines that need consistent batch and expiry coding and dependable automation.",
    needs: ["Batch coders", "Controllers", "Power supplies"],
  },
  {
    title: "Printing & Labelling",
    icon: "printer",
    text: "Coding and marking setups that rely on quality ribbons, ink, composer heads and accessories.",
    needs: ["Ink & thinner", "Composer heads", "Ink pads"],
  },
  {
    title: "Textile & Manufacturing",
    icon: "shirt",
    text: "General manufacturing units needing unwinding motors, proximity sensors and pneumatic actuators.",
    needs: ["Unwinding motors", "Proxi sensors", "Cylinders"],
  },
  {
    title: "New Entrepreneurs",
    icon: "users",
    text: "Start-ups setting up processing plants who need consultancy, machine selection and spare-part planning.",
    needs: ["Consultancy", "Machine selection", "Setup"],
  },
];

export const CLIENT_TYPES = [
  "Food processing units",
  "Rice & flour mills",
  "Packaging contractors",
  "FMCG manufacturers",
  "Dairy plants",
  "Pharma packers",
  "OEM machine builders",
  "Maintenance contractors",
];

export const CLIENT_VALUES = [
  { title: "Fast response", tag: "Speed", text: "An 89% response rate means your enquiry is answered quickly — critical when a line is down." },
  { title: "Right part, first time", tag: "Accuracy", text: "We verify part numbers and specifications before dispatch to avoid costly returns and delays." },
  { title: "Long-term relationships", tag: "Trust", text: "Many clients have worked with us for years because we treat every order like a partnership." },
];
