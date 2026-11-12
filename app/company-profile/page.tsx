import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Stats from "@/components/sections/Stats";
import WhyUs from "@/components/sections/WhyUs";
import Contact from "@/components/sections/Contact";
import ScrollReveals from "@/components/ScrollReveals";
import EnquireButton from "@/components/EnquireButton";
import { COMPANY_FACTS, COMPANY_STATS, INFRASTRUCTURE } from "@/lib/content";
import { PRODUCT_CATEGORIES } from "@/lib/products";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Company Profile",
  description: "Sellomas company profile — business type, establishment, location, product lines and infrastructure.",
};

export default function CompanyProfilePage() {
  return (
    <>
      <PageHero
        eyebrow="Company & Profile"
        title="Sellomas at a glance."
        lead="Key facts about our business, infrastructure and the product lines we supply to Indian industry."
        crumbs={[{ label: "Company Profile" }]}
      />

      <section className="section">
        <div className="container split split--top">
          <div className="sticky-col">
            <p className="eyebrow" data-reveal>
              <span className="dot" /> Factsheet
            </p>
            <h2 className="split-title" data-reveal>
              Basic <span className="muted">information.</span>
            </h2>
            <p className="muted" data-reveal>
              A GST-registered trader, retailer and supplier of agro product machinery and industrial components,
              headquartered in Varanasi, Uttar Pradesh.
            </p>
            <div data-reveal>
              <EnquireButton className="btn btn-primary" category="Consultancy / Services">
                Request full profile
              </EnquireButton>
            </div>
          </div>
          <dl className="facts">
            {COMPANY_FACTS.map((f) => (
              <div key={f.label} className="facts-row" data-reveal>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
            <div className="facts-row" data-reveal>
              <dt>Contact</dt>
              <dd>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                <br />
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <Stats items={COMPANY_STATS} />

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow" data-reveal>
              <span className="dot" /> Infrastructure
            </p>
            <h2 data-reveal>
              Built to deliver <span className="muted">on time.</span>
            </h2>
          </div>
          <div className="card-grid card-grid--3">
            {INFRASTRUCTURE.map((item, i) => (
              <article key={item.title} className="info-card" data-reveal>
                <span className="info-card-num">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow" data-reveal>
              <span className="dot" /> Product lines
            </p>
            <h2 data-reveal>
              What we <span className="muted">deal in.</span>
            </h2>
          </div>
          <div className="lines">
            {PRODUCT_CATEGORIES.map((cat, i) => (
              <div key={cat.slug} className="lines-row" data-reveal>
                <span className="lines-num">0{i + 1}</span>
                <h3>{cat.title}</h3>
                <p>{cat.products.slice(0, 4).map((p) => p.name).join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <Contact />
      <ScrollReveals />
    </>
  );
}
