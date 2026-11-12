"use client";

import { useRef } from "react";
import { gsap, useGSAP, PRELOADER_DURATION, intro } from "@/lib/gsap";

export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (intro.navigated) {
        root.current?.style.setProperty("display", "none");
        return;
      }
      const counter = { value: 0 };
      gsap
        .timeline({ onComplete: () => root.current?.style.setProperty("display", "none") })
        .to(counter, {
          value: 100,
          duration: PRELOADER_DURATION - 0.6,
          ease: "power2.inOut",
          onUpdate: () => {
            if (count.current) count.current.textContent = String(Math.round(counter.value)).padStart(3, "0");
          },
        })
        .to(".preloader-bar span", { scaleX: 1, duration: PRELOADER_DURATION - 0.6, ease: "power2.inOut" }, 0)
        .to(".preloader-inner", { yPercent: -40, autoAlpha: 0, duration: 0.5, ease: "power3.in" })
        .to(root.current, { yPercent: -100, duration: 0.8, ease: "expo.inOut" }, "-=0.3");
    },
    { scope: root },
  );

  return (
    <div ref={root} className="preloader" aria-hidden="true">
      <div className="preloader-inner">
        <span className="preloader-brand">SELLOMAS</span>
        <span ref={count} className="preloader-count">
          000
        </span>
        <div className="preloader-bar">
          <span />
        </div>
      </div>
    </div>
  );
}
