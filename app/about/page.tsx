import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Timeline from "@/components/Timeline";
import QuoteBand from "@/components/QuoteBand";
import Icon, { ArrowIcon } from "@/components/Icon";
import Stats from "@/components/sections/Stats";
import Contact from "@/components/sections/Contact";
import ScrollReveals from "@/components/ScrollReveals";
import { ABOUT_QUOTE, ABOUT_STORY, MISSION_VISION, TIMELINE, VALUES } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Sellomas is an Indian food processing and machinery marketing organisation from Varanasi, started in 2008.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Sellomas"
        title="Engineering trust since 2008."
        lead="An Indian food processing and machinery marketing organisation from Varanasi, supplying the parts and know-how that keep plants productive."
        crumbs={[{ label: "About" }]}
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow" data-reveal>
              <span className="dot" /> Our story
            </p>
            <h2 className="split-title" data-reveal>
              Not by chance — <span className="muted">by strategy.</span>
            </h2>
          </div>
          <div className="prose">
            {ABOUT_STORY.map((p) => (
              <p key={p.slice(0, 24)} data-reveal>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <QuoteBand quote={ABOUT_QUOTE} cite="— Team Sellomas" />

      <section className="section">
        <div className="container">
          <div className="card-grid card-grid--3">
            {MISSION_VISION.map((m, i) => (
              <article key={m.title} className="info-card" data-reveal>
                <span className="info-card-num">0{i + 1}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow" data-reveal>
              <span className="dot" /> Our journey
            </p>
            <h2 data-reveal>
              From technical services <span className="muted">to trusted supplier.</span>
            </h2>
          </div>
          <Timeline items={TIMELINE} />
        </div>
      </section>

      <Stats />

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow" data-reveal>
              <span className="dot" /> Our values
            </p>
            <h2 data-reveal>
              What we stand for <span className="muted">on every order.</span>
            </h2>
          </div>
          <div className="card-grid card-grid--4">
            {VALUES.map((v) => (
              <article key={v.title} className="icon-card" data-reveal>
                <span className="icon-card-icon">
                  <Icon name={v.icon} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
          <div className="center-cta" data-reveal>
            <Link href="/company-profile" className="btn btn-ghost">
              View company profile <ArrowIcon className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>

      <Contact />
      <ScrollReveals />
    </>
  );
}
