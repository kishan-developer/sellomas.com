"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { STATS } from "@/lib/data";

const format = (n: number) => Math.round(n).toLocaleString("en-IN");

type Stat = { value: number; suffix: string; label: string };

export default function Stats({ items = STATS, className = "" }: { items?: Stat[]; className?: string }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top 75%" } });

        tl.from(".stat", { y: 60, autoAlpha: 0, duration: 0.9, stagger: 0.12, ease: "power3.out" });
        tl.from(".stat-line", { scaleX: 0, transformOrigin: "left", duration: 1, stagger: 0.12, ease: "power3.inOut" }, 0);

        gsap.utils.toArray<HTMLElement>(".stat-value").forEach((el, i) => {
          const target = Number(el.dataset.value);
          const counter = { value: 0 };
          el.textContent = "0";
          tl.to(
            counter,
            {
              value: target,
              duration: 2,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = format(counter.value);
              },
            },
            i * 0.12,
          );
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className={`section stats ${className}`} aria-label="Sellomas in numbers">
      <div className="container stats-grid">
        {items.map((stat) => (
          <div key={stat.label} className="stat">
            <span className="stat-line" />
            <div className="stat-number">
              <span className="stat-value" data-value={stat.value}>
                {format(stat.value)}
              </span>
              <span className="stat-suffix">{stat.suffix}</span>
            </div>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
