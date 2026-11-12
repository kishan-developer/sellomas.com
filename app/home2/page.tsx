import type { Metadata } from "next";
import Home2Experience from "@/components/home2/Home2Experience";
import Contact from "@/components/sections/Contact";
import ScrollReveals from "@/components/ScrollReveals";

export const metadata: Metadata = {
  title: "Home (Light Edition) | Precision Industrial & Agro Machinery Parts",
  description:
    "Explore Sellomas in our architectural light edition — precision-engineered electronic, pneumatic, and industrial machinery components across India.",
};

export default function Home2Page() {
  return (
    <>
      <Home2Experience />
      <Contact />
      <ScrollReveals />
    </>
  );
}

