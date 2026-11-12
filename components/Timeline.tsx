"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

type Item = { year: string; title: string; text: string };

export default function Timeline({ items }: { items: Item[] }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.fromTo(
          ".timeline-fill",
          { scaleY: 0 },
          { scaleY: 1, ease: "none", scrollTrigger: { trigger: root.current, start: "top 70%", end: "bottom 60%", scrub: true } },
        );

        gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item, i) => {
          gsap
            .timeline({ scrollTrigger: { trigger: item, start: "top 75%", toggleActions: "play none none reverse" } })
            .from(item.querySelector(".timeline-dot"), { scale: 0, duration: 0.5, ease: "back.out(3)" })
            .from(item.querySelector(".timeline-card"), { x: i % 2 ? 60 : -60, autoAlpha: 0, duration: 0.9, ease: "power3.out" }, 0)
            .from(item.querySelector(".timeline-year"), { y: 40, autoAlpha: 0, duration: 0.9, ease: "power3.out" }, 0.1);
        });
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} className="timeline">
      <div className="timeline-line" aria-hidden="true">
        <span className="timeline-fill" />
      </div>
      {items.map((item) => (
        <div key={item.year} className="timeline-item">
          <span className="timeline-dot" aria-hidden="true" />
          <span className="timeline-year">{item.year}</span>
          <div className="timeline-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
