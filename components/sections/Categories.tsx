"use client";

import { useRef, type MouseEvent } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import Link from "next/link";
import { CATEGORIES } from "@/lib/data";
import { PRODUCT_CATEGORIES } from "@/lib/products";
import Icon, { ArrowIcon } from "../Icon";

export default function Categories() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from(".category-card", {
          y: 120,
          rotateX: -25,
          autoAlpha: 0,
          transformOrigin: "50% 100%",
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".categories-grid", start: "top 80%" },
        });

        gsap.from(".category-icon", {
          scale: 0,
          rotate: -90,
          duration: 0.9,
          ease: "back.out(2)",
          stagger: 0.12,
          delay: 0.35,
          scrollTrigger: { trigger: ".categories-grid", start: "top 80%" },
        });
      });
    },
    { scope: root },
  );

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    card.style.setProperty("--my", `${(y + 0.5) * 100}%`);
    gsap.to(card, { rotateY: x * 10, rotateX: -y * 10, duration: 0.5, ease: "power2.out", overwrite: "auto" });
  };

  const onLeave = (e: MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, { rotateY: 0, rotateX: 0, duration: 0.8, ease: "elastic.out(1, 0.5)", overwrite: "auto" });
  };

  return (
    <section ref={root} id="categories" className="section categories">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow" data-reveal>
            <span className="dot" /> What we supply
          </p>
          <h2 data-reveal>
            Three categories. <span className="muted">One reliable partner.</span>
          </h2>
        </div>

        <div className="categories-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <article key={cat.title} className="category-card" onMouseMove={onMove} onMouseLeave={onLeave}>
              <span className="category-index">0{i + 1}</span>
              <span className="category-icon">
                <Icon name={cat.icon} />
              </span>
              <h3>{cat.title}</h3>
              <p>{cat.text}</p>
              <ul>
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href={`/products-and-services?category=${PRODUCT_CATEGORIES[i].slug}`} className="category-link">
                View range <ArrowIcon className="btn-icon" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
