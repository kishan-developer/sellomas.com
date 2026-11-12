export const CONTACT = {
  address: "Bhelupura, Varanasi, Uttar Pradesh, India 221010",
  email: "teamsellomas@gmail.com",
  phone: "+91 81760 96661",
  phoneHref: "tel:+918176096661",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Company Profile", href: "/company-profile" },
  { label: "Products & Services", href: "/products-and-services" },
  { label: "Quality Assurance", href: "/quality-assurance" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
];

export const MARQUEE_ITEMS = [
  "Electronic Components",
  "Pneumatic Systems",
  "Industrial Machinery Components",
  "Packing Machines",
  "Machinery Parts",
  "Agro Machinery",
  "Bearings",
  "Sensors",
  "Servo Drives",
];

export const STATS = [
  { value: 18, suffix: "+", label: "Years of industry expertise" },
  { value: 500, suffix: "+", label: "Components in our catalogue" },
  { value: 1200, suffix: "+", label: "Industrial clients served" },
  { value: 15, suffix: "+", label: "Indian states covered" },
];

export type CategoryIcon = "chip" | "package" | "pneumatic" | "gear";

export const CATEGORIES: { title: string; icon: CategoryIcon; text: string; items: string[] }[] = [
  {
    title: "Electronic Components",
    icon: "chip",
    text: "Controllers, sensors, power supplies and drives that bring intelligence to your production line.",
    items: ["PLC Controllers", "Material Sensors", "Servo Drives", "Power Supplies"],
  },
  {
    title: "Pneumatic Components",
    icon: "pneumatic",
    text: "Cylinders, valves and FRL units engineered for reliable motion with minimal air loss.",
    items: ["Cylinders", "Solenoid Valves", "FRL Units", "Connectors"],
  },
  {
    title: "Industrial Machinery Components",
    icon: "gear",
    text: "Bearings, pulleys, gears and motors that keep heavy-duty machines running smoothly.",
    items: ["UC / UCP Bearings", "Helical Gears", "Pulleys", "Unwinding Motors"],
  },
];

export const PRODUCTS: { name: string; category: string; icon: CategoryIcon; image: string }[] = [
  { name: "3P CONTRACTOR", category: "Industrial Machinery Parts", icon: "package", image: "/products/p1.png" },
  { name: "1.5mm Stainless Steel Perforated Sheets", category: "Machinery Component", icon: "chip", image: "/products/p2.png" },
  { name: "COMPRESSOR HADE -3 HP", category: "Packing Machine", icon: "pneumatic", image: "/products/image_01.png" },
  { name: "FRL COMPONENT", category: "Pneumatic Component", icon: "pneumatic", image: "/products/image_02.png" },
  { name: "PVC Helical Gear", category: "PACKING MACHINE", icon: "gear", image: "/products/image_03.png" },
  { name: "PNEUMATIC", category: "PNEUMATIC Component", icon: "chip", image: "/products/6.png" },
  { name: "Moter", category: "Electronic Component", icon: "chip", image: "/products/3.png" },
  { name: "Three Phase Transformer, 150 VA", category: "Electronic Component", icon: "package", image: "/products/4.png" },
  { name: "3P- 5A OVER LOAD RELAY", category: "Electronic Component", icon: "gear", image: "/products/5.png" },
];

export const PROCESS_STEPS = [
  {
    title: "Share your requirement",
    text: "Tell us the part number, machine model or the problem you are solving. Our team responds fast.",
  },
  {
    title: "Expert consultation",
    text: "Our engineers recommend the right component or machine for maximum output at minimum power.",
  },
  {
    title: "Sourcing & quality check",
    text: "Every product is sourced from trusted brands and inspected before it leaves our warehouse.",
  },
  {
    title: "Delivery & support",
    text: "Pan-India dispatch with ongoing technical support from concept to final commissioning.",
  },
];

export const WHY_US = [
  {
    title: "Energy-efficient by design",
    text: "We prioritise machines and parts that deliver maximum output on minimum power consumption, lowering your cost per unit.",
    tag: "Efficiency",
  },
  {
    title: "Customised solutions",
    text: "A solid base coupled with the ability to provide customised solutions has paved the way for our success with clients at scale.",
    tag: "Flexibility",
  },
  {
    title: "Consultancy for entrepreneurs",
    text: "Beyond trading, we guide new ventures on machinery selection — from building the concept to final completion.",
    tag: "Guidance",
  },
  {
    title: "Trusted since 2008",
    text: "Nearly two decades of technical service to agro and industrial businesses across major Indian states.",
    tag: "Reliability",
  },
];
