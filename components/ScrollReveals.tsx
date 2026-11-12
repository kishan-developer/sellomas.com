"use client";

import { gsap, ScrollTrigger, useGSAP, MOTION_OK } from "@/lib/gsap";

/** Generic fade-up for any element marked with `data-reveal`. Rendered last so positions account for pinned sections. */
export default function ScrollReveals() {
  useGSAP(() => {
    gsap.matchMedia().add(MOTION_OK, () => {
      gsap.set("[data-reveal]", { y: 50, autoAlpha: 0 });
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 88%",
        once: true,
        onEnter: (els) => gsap.to(els, { y: 0, autoAlpha: 1, duration: 1, ease: "power3.out", stagger: 0.12 }),
      });
    });
  });

  return null;
}
