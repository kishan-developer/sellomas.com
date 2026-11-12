"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP, MOTION_OK, introDelay } from "@/lib/gsap";
import { useScrollTo } from "../SmoothScroll";
import Gear from "../Gear";
import { ArrowIcon } from "../Icon";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const scrollTo = useScrollTo();

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const split = SplitText.create(root.current!.querySelector(".hero-title"), {
          type: "lines,words",
          mask: "lines",
          linesClass: "split-line",
        });

        gsap
          .timeline({ delay: introDelay(), defaults: { ease: "power4.out" } })
          .from(split.words, { yPercent: 120, duration: 1.2, stagger: 0.05 })
          .from(".hero-eyebrow", { y: 20, autoAlpha: 0, duration: 0.8 }, 0.1)
          .from([".hero-sub", ".hero-actions > *"], { y: 30, autoAlpha: 0, duration: 0.9, stagger: 0.1 }, 0.5)
          .from(".hero-gear-wrap", { scale: 0.5, autoAlpha: 0, rotate: -120, duration: 1.6, ease: "expo.out", stagger: 0.15 }, 0)
          .from(".hero-meta > *", { y: 20, autoAlpha: 0, duration: 0.7, stagger: 0.08 }, 0.8)
          .from(".hero-scroll", { autoAlpha: 0, duration: 0.6 }, 1.1);

        gsap.to(".hero-gear--a", { rotate: 360, duration: 24, repeat: -1, ease: "none" });
        gsap.to(".hero-gear--b", { rotate: -360, duration: 16, repeat: -1, ease: "none" });
        gsap.to(".hero-gear--c", { rotate: 360, duration: 12, repeat: -1, ease: "none" });

        const scrub = { trigger: root.current, start: "top top", end: "bottom top", scrub: true };
        gsap.to(".hero-content", { yPercent: 35, autoAlpha: 0, ease: "none", scrollTrigger: scrub });
        gsap.to(".hero-gear-wrap--a", { rotate: 180, yPercent: -20, ease: "none", scrollTrigger: scrub });
        gsap.to(".hero-gear-wrap--b", { rotate: -240, yPercent: 30, ease: "none", scrollTrigger: scrub });
        gsap.to(".hero-gear-wrap--c", { rotate: 200, yPercent: 60, ease: "none", scrollTrigger: scrub });
        gsap.to(".hero-grid", { yPercent: 25, ease: "none", scrollTrigger: scrub });

        return () => split.revert();
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="top" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-gear-wrap hero-gear-wrap--a">
          <Gear teeth={16} spokes={6} className="hero-gear hero-gear--a" />
        </div>
        <div className="hero-gear-wrap hero-gear-wrap--b">
          <Gear teeth={11} spokes={5} className="hero-gear hero-gear--b" />
        </div>
        <div className="hero-gear-wrap hero-gear-wrap--c">
          <Gear teeth={8} className="hero-gear hero-gear--c" />
        </div>
      </div>

      <div className="container hero-content">
        <p className="eyebrow hero-eyebrow">
          <span className="dot" /> Engineering Excellence for Industrial Growth · Since 2008
        </p>
        <h1 className="hero-title">
          Precision-Engineered Industrial Machinery Solutions
        </h1>
        <p className="hero-sub">
          Globally aligned provider of precision-engineered industrial machinery
          parts, pneumatic and electronic components, and advanced industrial
          machinery solutions. Guided by innovation and technical excellence, we
          deliver energy-efficient, high-performance systems tailored to complex
          industrial requirements.
        </p>
        <div className="hero-actions">
          <a href="#products" className="btn btn-primary" onClick={(e) => (e.preventDefault(), scrollTo("#products"))}>
            Explore Products <ArrowIcon className="btn-icon" />
          </a>
          <a href="#contact" className="btn btn-ghost" onClick={(e) => (e.preventDefault(), scrollTo("#contact"))}>
            Send Enquiry
          </a>
        </div>
        <ul className="hero-meta">
          <li>
            <strong>Varanasi</strong> Headquartered in UP, India
          </li>
          <li>
            <strong>Pan-India</strong> Supply &amp; dispatch
          </li>
          <li>
            <strong>Expert</strong> Technical consultancy
          </li>
        </ul>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
}
