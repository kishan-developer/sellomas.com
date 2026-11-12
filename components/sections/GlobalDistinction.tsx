"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { useScrollTo } from "../SmoothScroll";
import { ArrowIcon } from "../Icon";

const HIGHLIGHTS = [
  "Precision Engineering & Manufacturing",
  "International Quality Standards",
  "Advanced Industrial Technology",
  "Reliable & Sustainable Solutions",
  "Global Reach & Customer Commitment",
];

export default function GlobalDistinction() {
  const root = useRef<HTMLElement>(null);
  const scrollTo = useScrollTo();

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        // Animate eyebrow
        gsap.from(".global-distinction .eyebrow", {
          y: 20,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".global-distinction",
            start: "top 85%",
          },
        });

        // Animate title
        gsap.from(".global-distinction h2", {
          y: 30,
          autoAlpha: 0,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".global-distinction",
            start: "top 85%",
          },
        });

        // Animate description paragraphs
        gsap.from(".global-distinction .description p", {
          y: 30,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".global-distinction .description",
            start: "top 85%",
          },
        });

        // Animate highlights list
        gsap.from(".global-distinction .highlight-item", {
          x: -30,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".global-distinction .highlights",
            start: "top 85%",
          },
        });

        // Animate CTAs
        gsap.from(".global-distinction .cta", {
          y: 20,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".global-distinction .cta-group",
            start: "top 85%",
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="section global-distinction">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow" data-reveal>
            <span className="dot" /> Our Excellence
          </p>
          <h2 data-reveal>Refined Industrial Solutions With Global Distinction</h2>
        </div>

        <div className="global-content">
          <div className="description">
            <p>
              At Sellomas, we combine engineering excellence, innovative technology, and precision manufacturing to
              deliver industrial solutions that meet international standards. Our commitment to quality, reliability, and
              continuous improvement enables us to serve diverse industries with products and services designed for
              performance and long-term value.
            </p>
            <p>
              With a focus on innovation, efficiency, and customer satisfaction, we strive to build lasting partnerships
              and create solutions that make a difference across global markets.
            </p>
          </div>

          <div className="highlights">
            <h3>Key Highlights</h3>
            <ul>
              {HIGHLIGHTS.map((highlight, index) => (
                <li key={index} className="highlight-item">
                  <span className="highlight-bullet" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="cta-group">
          <a
            href="/products-and-services"
            className="btn btn-primary cta"
            onClick={(e) => (e.preventDefault(), scrollTo("/products-and-services"))}
          >
            Explore Our Solutions <ArrowIcon className="btn-icon" />
          </a>
          <a
            href="#contact"
            className="btn btn-ghost cta"
            onClick={(e) => (e.preventDefault(), scrollTo("#contact"))}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
