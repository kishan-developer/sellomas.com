"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, SplitText, useGSAP, MOTION_OK } from "@/lib/gsap";

export default function About() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const split = SplitText.create(root.current!.querySelector(".about-statement"), { type: "words" });

        gsap.fromTo(
          split.words,
          { opacity: 0.12 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: { trigger: ".about-statement", start: "top 80%", end: "bottom 45%", scrub: true },
          },
        );

        gsap.fromTo(
          ".about-visual",
          { clipPath: "inset(18% 18% 18% 18% round 32px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 24px)",
            ease: "none",
            scrollTrigger: { trigger: ".about-visual", start: "top 90%", end: "center 55%", scrub: true },
          },
        );

        gsap.fromTo(
          ".about-visual-img",
          { scale: 1.25, yPercent: -6 },
          {
            scale: 1,
            yPercent: 6,
            ease: "none",
            scrollTrigger: { trigger: ".about-visual", start: "top bottom", end: "bottom top", scrub: true },
          },
        );

        gsap.from(".about-badge", {
          scale: 0,
          rotate: -45,
          duration: 1,
          ease: "back.out(1.8)",
          scrollTrigger: { trigger: ".about-visual", start: "center 75%" },
        });

        return () => split.revert();
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="about" className="section about">
      <div className="container">
        <p className="eyebrow" data-reveal>
          <span className="dot" /> About Sellomas
        </p>
        <p className="about-statement">
          Globally aligned provider of precision-engineered industrial machinery parts, delivering energy-efficient,
          high-performance systems tailored to complex industrial requirements — trusted partner worldwide.
        </p>

        <div className="about-grid">
          <div className="about-visual">
            <img
              src="/2.jpeg"
              alt="About Sellomas"
              width={500}
              height={300}
              className="about-visual-img w-full h-[60%]"
            />
            <div className="about-badge">
              <strong>2006</strong>
              <span>Established</span>
            </div>
          </div>

          <div className="about-copy">
            <h3 data-reveal>Customized Solutions & Technical Expertise.</h3>
            <p data-reveal>
              Sellomas stands out for its ability to offer tailor-made machinery solutions based on specific client
              requirements. Our consistent growth is driven by strong technical knowledge, industry-focused customization,
              and commitment to quality and innovation.
            </p>
            <p data-reveal>
              We provide professional consultancy services to entrepreneurs and businesses, assisting them from concept
              planning to final execution. Each solution is carefully designed to ensure higher productivity at the lowest
              operational cost.
            </p>
            <ul className="about-points" data-reveal>
              <li>Precision-engineered components</li>
              <li>Energy-efficient systems</li>
              <li>Technical consultancy</li>
              <li>Custom sourcing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
