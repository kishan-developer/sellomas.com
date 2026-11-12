"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { WHY_US } from "@/lib/data";

type WhyUsProps = {
  eyebrow?: string;
  title?: ReactNode;
  items?: { title: string; text: string; tag: string }[];
};

export default function WhyUs({
  eyebrow = "Why Sellomas",
  title = (
    <>
      The partner behind <span className="muted">productive plants.</span>
    </>
  ),
  items = WHY_US,
}: WhyUsProps) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const cards = gsap.utils.toArray<HTMLElement>(".why-card");

        cards.forEach((card, i) => {
          const next = cards[i + 1];
          if (!next) return;
          gsap.to(card, {
            scale: 0.9 + i * 0.02,
            filter: "brightness(0.7)",
            ease: "none",
            scrollTrigger: { trigger: next, start: "top 70%", end: "top 20%", scrub: true },
          });
        });

        cards.forEach((card) => {
          gsap.from(card.querySelectorAll(".why-card-title, .why-card-text"), {
            y: 40,
            autoAlpha: 0,
            stagger: 0.1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 70%" },
          });
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="section why">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow" data-reveal>
            <span className="dot" /> {eyebrow}
          </p>
          <h2 data-reveal>{title}</h2>
        </div>

        <div className="why-stack">
          {items.map((item, i) => (
            <article key={item.title} className="why-card" style={{ top: `calc(14vh + ${i * 28}px)` }}>
              <div className="why-card-meta">
                <span className="why-card-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="why-card-tag">{item.tag}</span>
              </div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
