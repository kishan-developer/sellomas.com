"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, SplitText, useGSAP, MOTION_OK } from "@/lib/gsap";
import Gear from "./Gear";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  crumbs?: { label: string; href?: string }[];
};

export default function PageHero({ eyebrow, title, lead, crumbs = [] }: PageHeroProps) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const split = SplitText.create(root.current!.querySelector(".page-hero-title"), {
          type: "lines,words",
          mask: "lines",
          linesClass: "split-line",
        });

        gsap
          .timeline({ delay: 0.15, defaults: { ease: "power4.out" } })
          .from(split.words, { yPercent: 120, duration: 1.1, stagger: 0.04 })
          .from([".breadcrumbs", ".page-hero .eyebrow"], { y: 16, autoAlpha: 0, duration: 0.7, stagger: 0.08 }, 0)
          .from(".page-hero-lead", { y: 24, autoAlpha: 0, duration: 0.9 }, 0.45)
          .from(".page-hero-gear", { scale: 0.6, rotate: -90, autoAlpha: 0, duration: 1.6, ease: "expo.out" }, 0);

        const scrub = { trigger: root.current, start: "top top", end: "bottom top", scrub: true };
        gsap.to(".page-hero-gear", { rotate: 200, yPercent: 30, ease: "none", scrollTrigger: scrub });
        gsap.to(".page-hero-inner", { yPercent: 25, autoAlpha: 0.2, ease: "none", scrollTrigger: scrub });

        return () => split.revert();
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="page-hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <Gear teeth={16} spokes={6} className="page-hero-gear" />
      <div className="container page-hero-inner">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <i aria-hidden="true">/</i>
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        <p className="eyebrow">
          <span className="dot" /> {eyebrow}
        </p>
        <h1 className="page-hero-title">{title}</h1>
        <p className="page-hero-lead">{lead}</p>
      </div>
    </section>
  );
}
