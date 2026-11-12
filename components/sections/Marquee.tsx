"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, MOTION_OK } from "@/lib/gsap";
import { MARQUEE_ITEMS } from "@/lib/data";
import Gear from "../Gear";

function Row({ items: source, reverse = false }: { items: string[]; reverse?: boolean }) {
  const items = reverse ? [...source].reverse() : source;
  return (
    <div className={`marquee-row ${reverse ? "marquee-row--alt" : ""}`}>
      <div className="marquee-track">
        {[0, 1].map((copy) =>
          items.map((item) => (
            <span key={`${copy}-${item}`} className="marquee-item" aria-hidden={copy === 1}>
              {item}
              <Gear teeth={8} className="marquee-gear" />
            </span>
          )),
        )}
      </div>
    </div>
  );
}

export default function Marquee({ items = MARQUEE_ITEMS, label = "What we supply" }: { items?: string[]; label?: string }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const tracks = gsap.utils.toArray<HTMLElement>(".marquee-track");
        const loops = tracks.map((track, i) =>
          i % 2 === 0
            ? gsap.fromTo(track, { xPercent: 0 }, { xPercent: -50, duration: 40, ease: "none", repeat: -1 })
            : gsap.fromTo(track, { xPercent: -50 }, { xPercent: 0, duration: 40, ease: "none", repeat: -1 }),
        );

        ScrollTrigger.create({
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 250, 6);
            loops.forEach((loop) =>
              gsap.to(loop, {
                timeScale: boost,
                duration: 0.2,
                overwrite: true,
                onComplete: () => {
                  gsap.to(loop, { timeScale: 1, duration: 1.2, ease: "power2.out" });
                },
              }),
            );
          },
        });

        gsap.fromTo(
          ".marquee-inner",
          { rotate: -4 },
          { rotate: 2, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true } },
        );
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="marquee" aria-label={label}>
      <div className="marquee-inner">
        <Row items={items} />
        <Row items={items} reverse />
      </div>
    </section>
  );
}
