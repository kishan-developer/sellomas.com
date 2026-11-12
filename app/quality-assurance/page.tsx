import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import ScrollReveals from "@/components/ScrollReveals";
import Icon from "@/components/Icon";
import Gear from "@/components/Gear";
import QuoteBand from "@/components/QuoteBand";
import { QA_CHECKLIST, QA_INTRO, QA_PILLARS, QA_STEPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Quality Assurance",
  description: "How Sellomas ensures every component is genuine, tested and delivered in perfect condition.",
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality Assurance"
        title="Quality you can rely on."
        lead={QA_INTRO}
        crumbs={[{ label: "Quality Assurance" }]}
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow" data-reveal>
              <span className="dot" /> Our commitment
            </p>
            <h2 data-reveal>
              Four pillars of <span className="muted">quality.</span>
            </h2>
          </div>
          <div className="card-grid card-grid--4">
            {QA_PILLARS.map((p) => (
              <article key={p.title} className="icon-card" data-reveal>
                <span className="icon-card-icon">
                  <Icon name={p.icon} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Process
        eyebrow="QA process"
        title={
          <>
            Checked at <span className="accent">every step</span>.
          </>
        }
        lead="From choosing vendors to after-sales support, each order passes through a defined quality process."
        steps={QA_STEPS}
      />

      <section className="section">
        <div className="container split">
          <div className="qa-badge" data-reveal>
            <Gear teeth={20} spokes={8} className="qa-badge-gear" />
            <div className="qa-badge-text">
              <strong>100%</strong>
              <span>Genuine parts</span>
            </div>
          </div>
          <div>
            <p className="eyebrow" data-reveal>
              <span className="dot" /> Pre-dispatch checklist
            </p>
            <h2 className="split-title" data-reveal>
              Nothing ships <span className="muted">unchecked.</span>
            </h2>
            <ul className="checklist">
              {QA_CHECKLIST.map((item) => (
                <li key={item} data-reveal>
                  <Icon name="shield" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <QuoteBand
        quote="Our quality policy is simple: supply only what we would install in our own plant."
        cite="— Quality Policy, Sellomas"
      />

      <Contact />
      <ScrollReveals />
    </>
  );
}
