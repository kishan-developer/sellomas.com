"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import Icon, { type IconName } from "../Icon";

const VALUES: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "star",
    title: "Superior Quality Standards",
    text: "Every component undergoes strict quality checks to ensure reliability and long-term performance.",
  },
  {
    icon: "layers",
    title: "Extensive Product Range",
    text: "A comprehensive portfolio covering agro, electronic, pneumatic, and industrial machinery needs.",
  },
  {
    icon: "lightbulb",
    title: "Innovation-Driven Solutions",
    text: "Continuous adoption of advanced technologies to stay ahead of industry trends.",
  },
  {
    icon: "leaf",
    title: "Sustainability Commitment",
    text: "Responsible practices focused on environmental protection and long-term growth.",
  },
];

export default function Values() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from(".values-card", {
          y: 60,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".values-grid",
            start: "top 85%",
          },
        });

        gsap.from(".values-card h3", {
          y: 20,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".values-grid",
            start: "top 80%",
          },
        });

        gsap.from(".values-card p", {
          y: 20,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".values-grid",
            start: "top 75%",
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="section values">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow" data-reveal>
            <span className="dot" /> Our Values
          </p>
          <h2 data-reveal>What drives us forward</h2>
        </div>

        <div className="card-grid card-grid--4 values-grid">
          {VALUES.map((value, index) => (
            <div key={index} className="icon-card values-card">
              <div className="icon-card-icon">
                <Icon name={value.icon} />
              </div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
