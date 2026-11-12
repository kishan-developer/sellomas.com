import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductCatalog from "@/components/ProductCatalog";
import Marquee from "@/components/sections/Marquee";
import Contact from "@/components/sections/Contact";
import ScrollReveals from "@/components/ScrollReveals";
import EnquireButton from "@/components/EnquireButton";
import Icon from "@/components/Icon";
import { PRODUCT_CATEGORIES, SERVICES } from "@/lib/products";


export const metadata: Metadata = {
  title: "Products & Services",
  description:
    "Electronic components, packing machines, pneumatic components and machinery components — plus consultancy and sourcing services.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & Services"
        title="Every part your line depends on."
        lead="Electronic, pneumatic and machinery components, packing machines and consumables — backed by consultancy and sourcing services."
        crumbs={[{ label: "Products & Services" }]}
      />

      <ProductCatalog />

      <Marquee items={PRODUCT_CATEGORIES.flatMap((c) => c.products.slice(0, 3).map((p) => p.name))} label="Popular parts" />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow" data-reveal>
              <span className="dot" /> Services
            </p>
            <h2 data-reveal>
              More than a supplier. <span className="muted">A technical partner.</span>
            </h2>
          </div>
          <div className="card-grid card-grid--2">
            {SERVICES.map((s, i) => (
              <article key={s.title} className="service-card" data-reveal>
                <span className="service-card-num">0{i + 1}</span>
                <span className="icon-card-icon">
                  <Icon name={s.icon} />
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="center-cta" data-reveal>
            <EnquireButton category="Consultancy / Services">Book a consultation</EnquireButton>
          </div>
        </div>
      </section>

      <Contact />
      <ScrollReveals />
    </>
  );
}
