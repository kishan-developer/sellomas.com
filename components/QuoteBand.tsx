"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP, MOTION_OK } from "@/lib/gsap";
import Gear from "./Gear";

export default function QuoteBand({
  quote,
  cite,
  tag = "Engineering Philosophy",
}: {
  quote: string;
  cite: string;
  tag?: string;
}) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const quoteEl = root.current!.querySelector(".quote-text");
        const split = SplitText.create(quoteEl, {
          type: "lines,words",
          mask: "lines",
          linesClass: "split-line-mask",
        });

        // Reveal the band card with a smooth clip-path + scale scrub
        gsap.fromTo(
          ".quote-band-card",
          { clipPath: "inset(6% 4% 6% 4% round 36px)", scale: 0.96 },
          {
            clipPath: "inset(0% 0% 0% 0% round 28px)",
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top 90%",
              end: "top 35%",
              scrub: true,
            },
          },
        );

        // Animate top mark & tag
        gsap.from(".quote-top", {
          y: 24,
          autoAlpha: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 78%",
          },
        });

        // Staggered masked words reveal for the quote
        gsap.from(split.words, {
          yPercent: 115,
          rotateZ: 1.5,
          duration: 0.9,
          stagger: 0.028,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
          },
        });

        // Expand horizontal divider line
        gsap.fromTo(
          ".quote-rule",
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: root.current,
              start: "top 70%",
            },
          },
        );

        // Animate citation footer
        gsap.from(".quote-footer", {
          y: 20,
          autoAlpha: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
          },
        });

        // Counter-rotating gears on scroll
        gsap.fromTo(
          ".quote-gear--lg",
          { rotate: -25, yPercent: -10 },
          {
            rotate: 165,
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );

        gsap.fromTo(
          ".quote-gear--sm",
          { rotate: 140, yPercent: 12 },
          {
            rotate: -80,
            yPercent: -12,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );

        return () => split.revert();
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="quote-band">
      <div className="container">
        <div className="quote-band-card">
          <div className="quote-band-grid-bg" aria-hidden="true" />
          <div className="quote-band-glow" aria-hidden="true" />

          <Gear teeth={16} spokes={8} className="quote-gear quote-gear--lg" />
          <Gear teeth={10} spokes={5} className="quote-gear quote-gear--sm" />

          <div className="quote-inner">
            <div className="quote-top">
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <span className="quote-tag">{tag}</span>
            </div>

            <blockquote>
              <p className="quote-text">{quote}</p>
              <div className="quote-rule" aria-hidden="true" />
              <footer className="quote-footer">
                <cite className="quote-cite">{cite}</cite>
                <span className="quote-seal">ISO-ALIGNED · EST. 2006</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
