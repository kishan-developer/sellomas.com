import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Marquee from "@/components/sections/Marquee";
import WhyUs from "@/components/sections/WhyUs";
import Contact from "@/components/sections/Contact";
import ScrollReveals from "@/components/ScrollReveals";
import Icon from "@/components/Icon";
import { CLIENT_TYPES, CLIENT_VALUES, INDUSTRIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries & Clients",
  description: "Industries served by Sellomas — food processing, agro, packaging, dairy, pharma, printing and manufacturing.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries / Clients"
        title="Powering plants across industries."
        lead="From rice mills to pharma packing lines, our components keep diverse industries running across major Indian states."
        crumbs={[{ label: "Industries" }]}
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow" data-reveal>
              <span className="dot" /> Industries we serve
            </p>
            <h2 data-reveal>
              Eight sectors. <span className="muted">One parts partner.</span>
            </h2>
          </div>
          <div className="industry-grid">
            {INDUSTRIES.map((ind, i) => (
              <article key={ind.title} className="industry-card" data-reveal>
                <div className="industry-card-top">
                  <span className="icon-card-icon">
                    <Icon name={ind.icon} />
                  </span>
                  <span className="industry-card-num">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3>{ind.title}</h3>
                <p>{ind.text}</p>
                <ul>
                  {ind.needs.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={CLIENT_TYPES} label="Our clients" />

      <section className="section section--tight">
        <div className="container rating">
          <div className="rating-score" data-reveal>
            <strong>4.7</strong>
            <span>/ 5</span>
          </div>
          <div data-reveal>
            <div className="rating-stars" aria-label="4.7 out of 5 stars">
              {"★★★★★"}
            </div>
            <p>
              Average rating from verified buyers on IndiaMART, with an <strong>89% enquiry response rate</strong>.
              Our clients come back because we answer fast and supply the right part the first time.
            </p>
          </div>
        </div>
      </section>

      <WhyUs
        eyebrow="Why clients choose us"
        title={
          <>
            Relationships built <span className="muted">on reliability.</span>
          </>
        }
        items={CLIENT_VALUES}
      />

      <Contact />
      <ScrollReveals />
    </>
  );
}
