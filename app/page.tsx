import Preloader from "@/components/Preloader";
import ScrollReveals from "@/components/ScrollReveals";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Values from "@/components/sections/Values";
import Stats from "@/components/sections/Stats";
import Categories from "@/components/sections/Categories";
import Products from "@/components/sections/Products";
import Brands from "@/components/sections/Brands";
import GlobalDistinction from "@/components/sections/GlobalDistinction";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import Contact from "@/components/sections/Contact";
import { PROCESS_STEPS } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />
      <Marquee />
      <About />
      <Values />
      <Stats />
      <Categories />
      <Products />
      <Brands />
      <GlobalDistinction />
      <Process
        id="process"
        eyebrow="How we work"
        title={
          <>
            From enquiry to <span className="accent">installation</span>.
          </>
        }
        lead="A simple four-step process that gets the right part to your plant — quickly, and without guesswork."
        steps={PROCESS_STEPS}
      />
      <WhyUs />
      <Contact />
      <ScrollReveals />
    </>
  );
}
