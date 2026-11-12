"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import Gear from "../Gear";

type Step = { title: string; text: string };

type ProcessProps = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  lead: string;
  steps: Step[];
};

export default function Process({ id, eyebrow, title, lead, steps }: ProcessProps) {
  const root = useRef<HTMLElement>(null);
  const total = String(steps.length).padStart(2, "0");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(`${MOTION_OK} and (min-width: 900px)`, () => {
        const items = gsap.utils.toArray<HTMLElement>(".process-step");
        const counter = root.current!.querySelector<HTMLElement>(".process-counter-current")!;

        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${items.length * window.innerHeight * 0.6}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const index = Math.min(items.length - 1, Math.floor(self.progress * items.length));
              counter.textContent = String(index + 1).padStart(2, "0");
              items.forEach((s, i) => s.classList.toggle("is-active", i === index));
            },
          },
        });

        tl.fromTo(".process-line-fill", { scaleY: 0 }, { scaleY: 1, ease: "none", duration: items.length }, 0);
        tl.to(".process-gear", { rotate: 360 * 2, ease: "none", duration: items.length }, 0);
        items.forEach((step, i) => {
          tl.fromTo(step, { autoAlpha: 0.15, x: 60 }, { autoAlpha: 1, x: 0, duration: 0.6 }, i * 0.9);
        });
      });

      mm.add(`${MOTION_OK} and (max-width: 899px)`, () => {
        gsap.utils.toArray<HTMLElement>(".process-step").forEach((step) => {
          gsap.from(step, { x: 40, autoAlpha: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: step, start: "top 85%" } });
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id={id} className={`process ${steps.length > 4 ? "process--compact" : ""}`}>
      <div className="container process-inner">
        <div className="process-intro">
          <p className="eyebrow">
            <span className="dot" /> {eyebrow}
          </p>
          <h2>{title}</h2>
          <p className="process-lead">{lead}</p>
          <div className="process-counter" aria-hidden="true">
            <span className="process-counter-current">01</span>
            <span className="muted"> / {total}</span>
          </div>
          <Gear teeth={14} spokes={6} className="process-gear" />
        </div>

        <div className="process-steps">
          <div className="process-line" aria-hidden="true">
            <span className="process-line-fill" />
          </div>
          {steps.map((step, i) => (
            <div key={step.title} className={`process-step ${i === 0 ? "is-active" : ""}`}>
              <span className="process-step-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
