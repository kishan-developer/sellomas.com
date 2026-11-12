"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, useGSAP, MOTION_OK } from "@/lib/gsap";
import { PRODUCT_CATEGORIES } from "@/lib/products";
import Icon, { ArrowIcon } from "./Icon";
import { useEnquire } from "./useEnquire";
import { useScrollTo } from "./SmoothScroll";

const ALL = "all";

const ITEMS = PRODUCT_CATEGORIES.flatMap((cat) =>
  cat.products.map((p) => ({
    name: p.name,
    slug: p.slug,
    cat: cat.slug,
    category: cat.title,
    icon: cat.icon,
    image: p.images[0],
  })),
);

export default function ProductCatalog() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(ALL);
  const [query, setQuery] = useState("");
  const enquire = useEnquire();
  const scrollTo = useScrollTo();

  useEffect(() => {
    const cat = new URLSearchParams(window.location.search).get("category");
    if (cat && PRODUCT_CATEGORIES.some((c) => c.slug === cat)) setActive(cat);
  }, []);

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ITEMS.filter((p) => (active === ALL || p.cat === active) && (!q || p.name.toLowerCase().includes(q)));
  }, [active, query]);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from(".catalog-card", {
          y: 40,
          autoAlpha: 0,
          scale: 0.96,
          duration: 0.6,
          ease: "power3.out",
          stagger: { each: 0.03, from: "start" },
          clearProps: "transform,opacity,visibility",
        });
      });
      ScrollTrigger.refresh();
    },
    { scope: root, dependencies: [active, query] },
  );

  const select = (slug: string) => {
    setActive(slug);
    const url = slug === ALL ? window.location.pathname : `?category=${slug}`;
    window.history.replaceState(null, "", url);
  };

  const count = (slug: string) => (slug === ALL ? ITEMS.length : ITEMS.filter((p) => p.cat === slug).length);

  return (
    <section ref={root} className="section catalog">
      <div className="container">
        <div className="card-grid card-grid--4 catalog-cats">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              className={`icon-card icon-card--link ${active === cat.slug ? "is-active" : ""}`}
              onClick={() => (select(cat.slug), scrollTo("#catalogue"))}
              data-reveal
            >
              <span className="icon-card-icon">
                <Icon name={cat.icon} />
              </span>
              <h3>{cat.title}</h3>
              <p>{cat.text}</p>
              <span className="icon-card-meta">{cat.products.length} products →</span>
            </button>
          ))}
        </div>

        <div id="catalogue" className="section-head">
          <p className="eyebrow" data-reveal>
            <span className="dot" /> Product catalogue
          </p>
          <h2 data-reveal>
            Browse our range. <span className="muted">Price on request.</span>
          </h2>
        </div>

        <div className="catalog-toolbar" data-reveal>
          <div className="catalog-tabs" role="tablist" aria-label="Filter by category">
            {[{ slug: ALL, title: "All products" }, ...PRODUCT_CATEGORIES].map((cat) => (
              <button
                key={cat.slug}
                role="tab"
                aria-selected={active === cat.slug}
                className={`catalog-tab ${active === cat.slug ? "is-active" : ""}`}
                onClick={() => select(cat.slug)}
              >
                {cat.title} <span>{count(cat.slug)}</span>
              </button>
            ))}
          </div>
          <label className="catalog-search">
            <Icon name="search" />
            <input
              type="search"
              placeholder="Search parts…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search products"
            />
          </label>
        </div>

        {items.length === 0 ? (
          <div className="catalog-empty">
            <p>No parts match “{query}”. We can still source it for you.</p>
            <button className="btn btn-primary" onClick={() => enquire({ product: query })}>
              Ask for this part <ArrowIcon className="btn-icon" />
            </button>
          </div>
        ) : (
          <div className="catalog-grid">
            {items.map((p) => (
              <article key={p.slug} className="catalog-card">
                <Link href={`/products/${p.slug}`} className="catalog-card-link">
                  <div className="imagebox">
                    <div className="catalog-card-media">
                      <Image src={p.image} alt={p.name} width={400} height={240} className="catalog-card-img" />
                    </div>
                  </div>
                  <div className="catalog-card-top">
                    <span className="product-tag">{p.category}</span>
                  </div>
                  <h3>{p.name}</h3>
                </Link>
                <dl>
                  <div>
                    <dt>Price</dt>
                    <dd>On request</dd>
                  </div>
                  <div>
                    <dt>Min. order</dt>
                    <dd>1 piece</dd>
                  </div>
                </dl>
                <button className="catalog-enquire" onClick={() => enquire({ product: p.name, category: p.category })}>
                  Send Enquiry <ArrowIcon className="btn-icon" />
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
