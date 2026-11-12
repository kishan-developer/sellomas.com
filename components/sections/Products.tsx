"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { PRODUCTS } from "@/lib/data";
import { useEnquire } from "../useEnquire";
import { ArrowIcon } from "../Icon";

export default function Products() {
  const root = useRef<HTMLElement>(null);
  const enquire = useEnquire();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(`${MOTION_OK} and (min-width: 900px)`, () => {
        const track = root.current!.querySelector<HTMLElement>(".products-track")!;
        const distance = () => track.scrollWidth - window.innerWidth;

        const scroll = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: ".products-pin",
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => gsap.set(".products-progress span", { scaleX: self.progress }),
          },
        });

        gsap.utils.toArray<HTMLElement>(".product-card").forEach((card) => {
          gsap.fromTo(
            card.querySelector(".product-visual"),
            { rotate: -12, scale: 0.85 },
            {
              rotate: 12,
              scale: 1,
              ease: "none",
              scrollTrigger: { trigger: card, containerAnimation: scroll, start: "left right", end: "right left", scrub: true },
            },
          );
          gsap.from(card, {
            y: 80,
            autoAlpha: 0.2,
            ease: "power2.out",
            scrollTrigger: { trigger: card, containerAnimation: scroll, start: "left 95%", end: "left 65%", scrub: true },
          });
        });
      });

      mm.add(`${MOTION_OK} and (max-width: 899px)`, () => {
        gsap.from(".product-card", {
          y: 60,
          autoAlpha: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".products-track", start: "top 85%" },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="products" className="products">
      <div className="products-pin">
        <div className="container products-head">
          <div>
            <p className="eyebrow">
              <span className="dot" /> Featured products
            </p>
            <h2>
              Built for the line. <span className="muted">Stocked for you.</span>
            </h2>
          </div>
          <div className="products-progress" aria-hidden="true">
            <span />
          </div>
        </div>

        <div className="products-track">
          {PRODUCTS.map((product, i) => (
            <article key={product.name} className="product-card">
              <div className="product-top">
                <span className="product-index">{String(i + 1).padStart(2, "0")}</span>
                <span className="product-tag">{product.category}</span>
              </div>
              <div className="product-visual">
                <Image
                  src={product.image || "/p1.png"}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3>{product.name}</h3>
              <div className="product-foot">
                <span>Price upon request</span>
                <a href="#contact" onClick={(e) => (e.preventDefault(), enquire({ product: product.name }))}>
                  Enquire <ArrowIcon className="btn-icon" />
                </a>
              </div>
            </article>
          ))}
          <article className="product-card product-card--cta">
            <h3>77+ more parts in the catalogue.</h3>
            <p>Bearings, heaters, sensors, valves, ribbons and more — ask us for the exact part you need.</p>
            <Link href="/products-and-services" className="btn btn-dark">
              View full catalogue <ArrowIcon className="btn-icon" />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
