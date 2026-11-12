"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, ScrollTrigger, SplitText, useGSAP, MOTION_OK } from "@/lib/gsap";
import { STATS, MARQUEE_ITEMS, WHY_US } from "@/lib/data";
import { useScrollTo } from "@/components/SmoothScroll";
import { useEnquire } from "@/components/useEnquire";
import Icon, { ArrowIcon, type IconName } from "@/components/Icon";
import Gear from "@/components/Gear";

const SHOWCASE_DIVISIONS: {
  num: string;
  slug: string;
  title: string;
  subtitle: string;
  icon: IconName;
  image: string;
  badge: string;
  description: string;
  specs: { label: string; value: string }[];
  items: string[];
}[] = [
  {
    num: "01",
    slug: "electronic",
    title: "Electronic & Automation Systems",
    subtitle: "Intelligent Line Control",
    icon: "chip",
    image: "/1.jpeg",
    badge: "PLC · Drives · Sensors",
    description:
      "High-precision controllers, servo drives, photoelectric sensors and industrial power supplies engineered to synchronize modern production lines with minimal power draw.",
    specs: [
      { label: "Response Time", value: "< 0.5 ms" },
      { label: "Energy Saving", value: "Up to 32%" },
    ],
    items: [
      "Controller M200 24 I Transistor",
      "Servo Motor Drive Systems",
      "S8FS-C10024J Power Supply",
      "Datasensor TL50-W-815",
      "Thermocouple & Copper Wiring",
    ],
  },
  {
    num: "02",
    slug: "pneumatic",
    title: "Pneumatic Motion Components",
    subtitle: "Zero-Leakage Actuation",
    icon: "pneumatic",
    image: "/2.jpeg",
    badge: "Cylinders · Valves · FRL",
    description:
      "Heavy-duty cylinders, high-cycle solenoid valves, FRL treatment units and push-in fittings built for continuous 24/7 actuation in dusty and humid plant environments.",
    specs: [
      { label: "Operating Pressure", value: "0.15 – 1.0 MPa" },
      { label: "Cycle Rating", value: "10M+ Cycles" },
    ],
    items: [
      "Solenoid Valve DS255SR61",
      "Pneumatic Cylinder 50×80 & 25×25",
      "Modular FRL Units",
      "Hand Lever Valve G1/2",
      "8mm & 6mm Precision Fittings",
    ],
  },
  {
    num: "03",
    slug: "machinery",
    title: "Heavy Machinery Transmission",
    subtitle: "High-Load Mechanical Core",
    icon: "gear",
    image: "/3.jpeg",
    badge: "Bearings · Gears · Motors",
    description:
      "Precision-ground UC/UCP housing bearings, helical gears, pulleys and unwinding motors that keep high-tonnage agro and industrial lines running vibration-free.",
    specs: [
      { label: "Load Rating", value: "Heavy Industrial" },
      { label: "Alignment", value: "Self-Aligning" },
    ],
    items: [
      "UC FC 212 / 207 / 205 Bearings",
      "UCP 210 Pillow Block Bearing",
      "Precision PVC Helical Gears",
      "High-Torque Unwinding Motors",
      "Industrial Trolley Wheels & Pulleys",
    ],
  },
  {
    num: "04",
    slug: "electronic",
    title: "Packaging & Batch Coding Lines",
    subtitle: "High-Speed End-of-Line",
    icon: "package",
    image: "/4.jpeg",
    badge: "Coding · TTO · Turnkey",
    description:
      "Complete packaging machinery, thermal transfer overprinters (TTO), batch coding systems and turnkey consultancy from initial plant layout to final commissioning.",
    specs: [
      { label: "Print Speed", value: "Up to 120 ppm" },
      { label: "Support", value: "Concept to Plant" },
    ],
    items: [
      "Automatic Batch Coding Machines",
      "TTO Ribbon 33mm × 500m",
      "Unwinding Proximity Systems",
      "Compressor Auto-Cut Switches",
      "Turnkey Plant Consultancy",
    ],
  },
];

const FEATURED_CATALOG = [
  {
    name: "Batch Coding Machine",
    category: "Packing",
    categoryLabel: "Packing Machine",
    code: "SLM-PK-101",
    image: "/1.jpeg",
    thumb: "/products/p1.png",
    spec: "120 prints/min · Low power",
  },
  {
    name: "Servo Motor Drive",
    category: "Electronic",
    categoryLabel: "Electronic Component",
    code: "SLM-EL-204",
    image: "/2.jpeg",
    thumb: "/products/p1.png",
    spec: "Closed-loop · High torque",
  },
  {
    name: "Solenoid Valve DS255SR61",
    category: "Pneumatic",
    categoryLabel: "Pneumatic Component",
    code: "SLM-PN-309",
    image: "/3.jpeg",
    thumb: "/products/p1.png",
    spec: "Fast switching · IP65 coil",
  },
  {
    name: "Pneumatic Cylinder 50×80",
    category: "Pneumatic",
    categoryLabel: "Pneumatic Component",
    code: "SLM-PN-312",
    image: "/4.jpeg",
    thumb: "/products/p1.png",
    spec: "50mm bore · 80mm stroke",
  },
  {
    name: "UCP 210 Pillow Bearing",
    category: "Machinery",
    categoryLabel: "Machinery Component",
    code: "SLM-MC-401",
    image: "/2.jpeg",
    thumb: "/products/p1.png",
    spec: "Cast-iron housing · Dynamic seal",
  },
  {
    name: "Datasensor TL50-W-815",
    category: "Electronic",
    categoryLabel: "Electronic Component",
    code: "SLM-EL-218",
    image: "/1.jpeg",
    thumb: "/products/p1.png",
    spec: "Optical contrast · 10-30V DC",
  },
  {
    name: "S8FS-C10024J Power Supply",
    category: "Electronic",
    categoryLabel: "Electronic Component",
    code: "SLM-EL-229",
    image: "/3.jpeg",
    thumb: "/products/p1.png",
    spec: "100W · 24V DC · 4.5A",
  },
  {
    name: "PVC Helical Gear Assembly",
    category: "Machinery",
    categoryLabel: "Machinery Component",
    code: "SLM-MC-415",
    image: "/4.jpeg",
    thumb: "/products/p1.png",
    spec: "Low-noise tooth profile",
  },
];

const PROCESS_VISUAL_STEPS = [
  {
    num: "01",
    tag: "Requirement Analysis",
    title: "Share your part number or machine challenge",
    text: "Send us the OEM code, sample photo, or production bottleneck. Our technical desk identifies exact specifications within hours.",
    image: "/1.jpeg",
    metric: "< 2 Hr Technical Response",
  },
  {
    num: "02",
    tag: "Engineering Consultation",
    title: "Right-sized selection for minimum power draw",
    text: "Our engineers recommend components and machinery configurations that maximize line throughput while cutting energy cost per unit.",
    image: "/2.jpeg",
    metric: "Up to 30% Lower kWh / Unit",
  },
  {
    num: "03",
    tag: "Multi-Stage Quality Check",
    title: "Sourced from global OEMs & bench-verified",
    text: "Every bearing, valve, sensor, and drive is sourced from authorized channels and inspected for dimensional and electrical accuracy.",
    image: "/3.jpeg",
    metric: "100% Genuine OEM Traceability",
  },
  {
    num: "04",
    tag: "Pan-India Dispatch & Commissioning",
    title: "Rapid delivery across 15+ states with live support",
    text: "Shock-protected industrial packaging dispatched from our Varanasi hub, backed by ongoing installation and troubleshooting guidance.",
    image: "/4.jpeg",
    metric: "1,200+ Active Industrial Plants",
  },
];

const BRANDS = [
  { name: "Siemens", image: "/Brands_List/Siemens.png.jpeg" },
  { name: "Festo", image: "/Brands_List/Festo.png.jpeg" },
  { name: "SKF", image: "/Brands_List/Skf.png.jpeg" },
  { name: "Delta", image: "/Brands_List/Delta.png.jpeg" },
  { name: "Schneider", image: "/Brands_List/schender.png.jpeg" },
  { name: "L&T", image: "/Brands_List/LT.png.jpeg" },
  { name: "Havells", image: "/Brands_List/Havvels.png.jpeg" },
  { name: "Selec", image: "/Brands_List/selec.png.jpeg" },
  { name: "NBC", image: "/Brands_List/NBC.png.jpeg" },
  { name: "ARB", image: "/Brands_List/ARB.png.jpeg" },
  { name: "Fenner", image: "/Brands_List/Feener.png.jpeg" },
  { name: "Pix", image: "/Brands_List/Pix.png.jpeg" },
  { name: "Spac", image: "/Brands_List/Spac.png.jpeg" },
  { name: "Veichi", image: "/Brands_List/Veichi.png.jpeg" },
  { name: "Omfa", image: "/Brands_List/omfa.png.jpeg" },
  { name: "G-Series", image: "/Brands_List/G.png.jpeg" },
];

const FILTER_TABS = ["All", "Electronic", "Pneumatic", "Machinery", "Packing"] as const;

export default function Home2Experience() {
  const root = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<(typeof FILTER_TABS)[number]>("All");
  const [activeProcess, setActiveProcess] = useState(0);
  const scrollTo = useScrollTo();
  const enquire = useEnquire();

  // Apply light theme class to <html> so Header, Footer, and FloatingContact also adapt seamlessly
  useEffect(() => {
    document.documentElement.classList.add("theme-light");
    return () => {
      document.documentElement.classList.remove("theme-light");
    };
  }, []);

  const filteredProducts =
    activeFilter === "All"
      ? FEATURED_CATALOG
      : FEATURED_CATALOG.filter((item) => item.category === activeFilter);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        // 1. HERO ENTRANCE & PARALLAX
        const heroSplit = SplitText.create(".h2-hero-title", {
          type: "lines,words",
          mask: "lines",
          linesClass: "split-line-mask",
        });

        const heroTl = gsap.timeline({ defaults: { ease: "power4.out" }, delay: 0.15 });
        heroTl
          .from(".h2-hero-pill", { y: 24, autoAlpha: 0, duration: 0.8 })
          .from(heroSplit.words, { yPercent: 115, duration: 1.05, stagger: 0.035 }, "-=0.5")
          .from(".h2-hero-lead", { y: 28, autoAlpha: 0, duration: 0.85 }, "-=0.65")
          .from(".h2-hero-actions .btn", { y: 24, autoAlpha: 0, stagger: 0.1, duration: 0.75 }, "-=0.6")
          .from(
            ".h2-hero-main-card",
            { clipPath: "inset(14% 14% 14% 14% round 28px)", scale: 0.94, autoAlpha: 0, duration: 1.2 },
            "-=0.95",
          )
          .from(".h2-hero-sub-card", { y: 50, x: -30, autoAlpha: 0, duration: 0.95 }, "-=0.8")
          .from(".h2-hero-float-card", { y: -30, scale: 0.9, autoAlpha: 0, duration: 0.85 }, "-=0.7")
          .from(".h2-hero-kpi", { y: 30, autoAlpha: 0, stagger: 0.08, duration: 0.7 }, "-=0.55");

        // Continuous slow rotation on decorative technical rings
        gsap.to(".h2-hero-ring--outer", { rotate: 360, duration: 50, repeat: -1, ease: "none" });
        gsap.to(".h2-hero-ring--inner", { rotate: -360, duration: 34, repeat: -1, ease: "none" });
        gsap.to(".h2-stamp-svg", { rotate: 360, duration: 22, repeat: -1, ease: "none" });

        // Hero image scroll scrub parallax
        gsap.fromTo(
          ".h2-hero-main-img",
          { scale: 1.16, yPercent: -5 },
          {
            scale: 1,
            yPercent: 7,
            ease: "none",
            scrollTrigger: {
              trigger: ".h2-hero",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
        );

        gsap.to(".h2-hero-sub-card", {
          yPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: ".h2-hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // 2. KINETIC MARQUEE WITH IMAGE PILLS
        gsap.to(".h2-marquee-track--a", {
          xPercent: -50,
          ease: "none",
          duration: 28,
          repeat: -1,
        });

        // 3. ABOUT EDITORIAL SPLIT + CLIP-PATH REVEAL + PROGRESS BARS
        const statementEl = root.current?.querySelector(".h2-about-statement");
        const aboutSplit = statementEl ? SplitText.create(statementEl, { type: "words" }) : null;

        if (aboutSplit) {
          gsap.fromTo(
            aboutSplit.words,
            { opacity: 0.16 },
            {
              opacity: 1,
              stagger: 0.08,
              ease: "none",
              scrollTrigger: {
                trigger: ".h2-about-statement",
                start: "top 82%",
                end: "bottom 45%",
                scrub: true,
              },
            },
          );
        }

        gsap.fromTo(
          ".h2-about-primary-frame",
          { clipPath: "inset(16% 16% 16% 16% round 32px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 28px)",
            ease: "none",
            scrollTrigger: {
              trigger: ".h2-about-visuals",
              start: "top 85%",
              end: "center 50%",
              scrub: true,
            },
          },
        );

        gsap.fromTo(
          ".h2-about-primary-img",
          { scale: 1.24, yPercent: -6 },
          {
            scale: 1,
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: ".h2-about-visuals",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );

        gsap.fromTo(
          ".h2-about-secondary-card",
          { y: 60 },
          {
            y: -35,
            ease: "none",
            scrollTrigger: {
              trigger: ".h2-about-visuals",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );

        gsap.utils.toArray<HTMLElement>(".h2-meter-fill").forEach((bar) => {
          const targetWidth = bar.dataset.fill || "90%";
          gsap.fromTo(
            bar,
            { width: "0%" },
            {
              width: targetWidth,
              duration: 1.4,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bar,
                start: "top 88%",
              },
            },
          );
        });

        // 4. BENTO VALUES + ANIMATED COUNTERS
        gsap.from(".h2-bento-card", {
          y: 56,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".h2-bento-grid",
            start: "top 82%",
          },
        });

        gsap.utils.toArray<HTMLElement>(".h2-stat-num").forEach((el) => {
          const target = Number(el.dataset.target || 0);
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
            },
            onUpdate: () => {
              el.textContent = Math.round(obj.val).toLocaleString();
            },
          });
        });

        // 5. HORIZONTAL PINNED SHOWCASE (Desktop >= 1024px)
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          const track = root.current?.querySelector<HTMLElement>(".h2-horiz-track");
          const wrap = root.current?.querySelector<HTMLElement>(".h2-horiz-pin");
          if (!track || !wrap) return;

          const getScrollAmount = () => track.scrollWidth - wrap.clientWidth;

          const tween = gsap.to(track, {
            x: () => -getScrollAmount(),
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top top",
              end: () => `+=${getScrollAmount() + 300}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                gsap.set(".h2-horiz-progress-fill", { scaleX: self.progress });
              },
            },
          });

          // Parallax images inside horizontal panels
          gsap.utils.toArray<HTMLElement>(".h2-division-img").forEach((img) => {
            gsap.fromTo(
              img,
              { scale: 1.18, xPercent: -6 },
              {
                scale: 1.04,
                xPercent: 6,
                ease: "none",
                scrollTrigger: {
                  trigger: img.closest(".h2-division-panel")!,
                  containerAnimation: tween,
                  start: "left right",
                  end: "right left",
                  scrub: true,
                },
              },
            );
          });
        });

        // 6. PINNED PROCESS STEPS WITH IMAGE CROSSFADE
        const processSteps = gsap.utils.toArray<HTMLElement>(".h2-process-step");
        processSteps.forEach((step, idx) => {
          ScrollTrigger.create({
            trigger: step,
            start: "top 60%",
            end: "bottom 40%",
            onEnter: () => setActiveProcess(idx),
            onEnterBack: () => setActiveProcess(idx),
          });
        });

        // 7. BRANDS STAGGER REVEAL
        gsap.from(".h2-brand-tile", {
          y: 36,
          autoAlpha: 0,
          scale: 0.94,
          duration: 0.7,
          stagger: { amount: 0.55, from: "start" },
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".h2-brands-grid",
            start: "top 84%",
          },
        });

        // 8. STACKED WHY-US CARDS
        const whyCards = gsap.utils.toArray<HTMLElement>(".h2-why-card");
        whyCards.forEach((card, i) => {
          if (i === whyCards.length - 1) return;
          gsap.to(card, {
            scale: 0.94 - (whyCards.length - 1 - i) * 0.015,
            y: -16,
            ease: "none",
            scrollTrigger: {
              trigger: whyCards[i + 1],
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
          });
        });

        return () => {
          heroSplit.revert();
          aboutSplit?.revert();
          mm.revert();
        };
      });
    },
    { scope: root },
  );

  // Animate product cards when filter changes
  useEffect(() => {
    if (!root.current) return;
    const cards = root.current.querySelectorAll(".h2-product-card");
    gsap.fromTo(
      cards,
      { y: 28, autoAlpha: 0, scale: 0.97 },
      { y: 0, autoAlpha: 1, scale: 1, duration: 0.55, stagger: 0.05, ease: "power3.out", overwrite: true },
    );
  }, [activeFilter]);

  return (
    <div ref={root} className="home2-theme">
      {/* 1. ARCHITECTURAL LIGHT HERO */}
      <section className="h2-hero">
        <div className="h2-hero-blueprint" aria-hidden="true" />
        <div className="h2-hero-glow" aria-hidden="true" />

        {/* Rotating CAD rings */}
        <div className="h2-hero-rings" aria-hidden="true">
          <div className="h2-hero-ring h2-hero-ring--outer">
            <Gear teeth={24} spokes={8} className="h2-ring-gear" />
          </div>
          <div className="h2-hero-ring h2-hero-ring--inner">
            <Gear teeth={14} spokes={6} className="h2-ring-gear" />
          </div>
        </div>

        <div className="container h2-hero-container">
          <div className="h2-hero-grid">
            {/* Left Column: Editorial Typography */}
            <div className="h2-hero-copy">
              <div className="h2-hero-pill">
                <span className="h2-live-dot" />
                <span>EST. 2006 · VARANASI · PAN-INDIA INDUSTRIAL SUPPLY</span>
              </div>

              <h1 className="h2-hero-title">
                Precision-Engineered <em>Machinery</em> &amp; Motion Systems.
              </h1>

              <p className="h2-hero-lead">
                Sellomas supplies genuine electronic controls, leak-free pneumatics, heavy-duty bearings and turnkey
                packaging machinery engineered for maximum plant output at minimum energy cost.
              </p>

              <div className="h2-hero-actions">
                <Link href="/products-and-services" className="btn btn-primary">
                  Explore 500+ Components <ArrowIcon className="btn-icon" />
                </Link>
                <a
                  href="#contact"
                  className="btn h2-btn-outline"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("#contact");
                  }}
                >
                  Request Technical Quote
                </a>
              </div>

              {/* Trust Strip */}
              <div className="h2-hero-trust">
                <div className="h2-trust-avatars">
                  <img src="/1.jpeg" alt="Industrial line" />
                  <img src="/2.jpeg" alt="Precision parts" />
                  <img src="/3.jpeg" alt="Machinery setup" />
                </div>
                <div className="h2-trust-text">
                  <strong>Trusted by 1,200+ Industrial Plants</strong>
                  <span>Authorized multi-brand sourcing across 15+ Indian states</span>
                </div>
              </div>
            </div>

            {/* Right Column: Layered Image Composition */}
            <div className="h2-hero-visual">
              <div className="h2-hero-main-card">
                <img
                  src="/1.jpeg"
                  alt="Sellomas Precision Industrial Machinery"
                  className="h2-hero-main-img"
                />
                <div className="h2-hero-img-overlay">
                  <span className="h2-img-tag">LIVE PLANT SYSTEMS · ISO STANDARD</span>
                  <p>High-efficiency automation, pneumatic &amp; transmission assemblies</p>
                </div>
              </div>

              {/* Overlapping Secondary Image Card */}
              <div className="h2-hero-sub-card">
                <div className="h2-hero-sub-img-wrap">
                  <img src="/3.jpeg" alt="Pneumatic & Electronic Components" />
                </div>
                <div className="h2-hero-sub-meta">
                  <span className="h2-sub-eyebrow">Energy Optimized</span>
                  <strong>-30% Power Draw</strong>
                  <p>Matched drives &amp; low-friction bearings</p>
                </div>
              </div>

              {/* Floating Telemetry Card */}
              <div className="h2-hero-float-card">
                <div className="h2-float-icon">
                  <Icon name="shield" />
                </div>
                <div>
                  <span className="h2-float-label">Quality Verified</span>
                  <strong>100% Genuine OEM</strong>
                </div>
              </div>

              {/* Rotating SVG Stamp */}
              <div className="h2-hero-stamp" aria-hidden="true">
                <svg viewBox="0 0 140 140" className="h2-stamp-svg">
                  <defs>
                    <path
                      id="h2StampCircle"
                      d="M 70, 70 m -52, 0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
                    />
                  </defs>
                  <text>
                    <textPath href="#h2StampCircle" startOffset="0%">
                      • SELLOMAS INDUSTRIAL • SINCE 2006 • GENUINE PARTS
                    </textPath>
                  </text>
                </svg>
                <span className="h2-stamp-center">18+</span>
              </div>
            </div>
          </div>

          {/* Bottom Architectural KPI Bar */}
          <div className="h2-hero-kpis">
            {STATS.map((stat, idx) => (
              <div key={stat.label} className="h2-hero-kpi">
                <span className="h2-kpi-index">0{idx + 1}</span>
                <div className="h2-kpi-value">
                  {stat.value}
                  <em>{stat.suffix}</em>
                </div>
                <p className="h2-kpi-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. KINETIC IMAGE & TYPOGRAPHY MARQUEE */}
      <section className="h2-marquee" aria-label="Core capabilities">
        <div className="h2-marquee-track h2-marquee-track--a">
          {[0, 1].map((dup) => (
            <div className="h2-marquee-group" key={dup} aria-hidden={dup === 1}>
              {MARQUEE_ITEMS.map((item, idx) => {
                const imgs = ["/1.jpeg", "/2.jpeg", "/3.jpeg", "/4.jpeg"];
                return (
                  <span key={`${item}-${idx}`} className="h2-marquee-item">
                    <span className="h2-marquee-thumb">
                      <img src={imgs[idx % imgs.length]} alt="" />
                    </span>
                    <span>{item}</span>
                    <span className="h2-marquee-dot" />
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* 3. EDITORIAL VISUAL STORY & CAPABILITY METERS */}
      <section className="section h2-about" id="about">
        <div className="container">
          <div className="h2-section-top">
            <p className="eyebrow" data-reveal>
              <span className="dot" /> About Sellomas
            </p>
            <span className="h2-section-code" data-reveal>
              SYS // 01 — ENGINEERING PROFILE
            </span>
          </div>

          <p className="h2-about-statement">
            Globally aligned provider of precision-engineered industrial machinery parts, delivering energy-efficient,
            high-performance systems tailored to complex plant requirements — trusted across India since 2006.
          </p>

          <div className="h2-about-grid">
            {/* Left: Multi-Image Parallax Composition */}
            <div className="h2-about-visuals">
              <div className="h2-about-primary-frame">
                <img
                  src="/2.jpeg"
                  alt="Sellomas Engineering & Machinery"
                  className="h2-about-primary-img"
                />
                <div className="h2-about-frame-Tag">
                  <span>VARANASI HQ HUB</span>
                  <strong>Pan-India Dispatch Network</strong>
                </div>
              </div>

              <div className="h2-about-secondary-card">
                <img src="/4.jpeg" alt="Industrial Component Inspection" />
                <div className="h2-about-secondary-caption">
                  <strong>2006</strong>
                  <span>Technical Services Established</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Copy & Animated Capability Bars */}
            <div className="h2-about-content">
              <h3 data-reveal>
                Customised Machinery Solutions &amp; Turnkey Technical Consultancy.
              </h3>
              <p data-reveal>
                Sellomas stands out for its ability to engineer tailor-made component and machinery packages around your
                exact production line. From single replacement sensors or bearings to complete agro-processing and
                packaging lines, we focus on higher output at the lowest input power.
              </p>
              <p data-reveal>
                Beyond supply, we advise entrepreneurs and plant managers from initial concept planning to machine
                commissioning—ensuring every part matches your voltage, pressure, and duty-cycle requirements.
              </p>

              {/* Animated Engineering Meters */}
              <div className="h2-meters" data-reveal>
                <div className="h2-meter">
                  <div className="h2-meter-head">
                    <span>Energy-Efficiency Optimization</span>
                    <strong>96%</strong>
                  </div>
                  <div className="h2-meter-track">
                    <div className="h2-meter-fill" data-fill="96%" />
                  </div>
                </div>

                <div className="h2-meter">
                  <div className="h2-meter-head">
                    <span>OEM Specification &amp; Part Accuracy</span>
                    <strong>100%</strong>
                  </div>
                  <div className="h2-meter-track">
                    <div className="h2-meter-fill" data-fill="100%" />
                  </div>
                </div>

                <div className="h2-meter">
                  <div className="h2-meter-head">
                    <span>Rapid Pan-India Order Fulfilment</span>
                    <strong>92%</strong>
                  </div>
                  <div className="h2-meter-track">
                    <div className="h2-meter-fill" data-fill="92%" />
                  </div>
                </div>
              </div>

              <div className="h2-about-pills" data-reveal>
                <span>
                  <Icon name="shield" /> Genuine Branded Spares
                </span>
                <span>
                  <Icon name="bolt" /> Low-Power Consumption
                </span>
                <span>
                  <Icon name="users" /> Entrepreneur Consultancy
                </span>
                <span>
                  <Icon name="truck" /> 15+ States Covered
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PINNED HORIZONTAL SCROLL — 4 CORE ENGINEERING DIVISIONS */}
      <section className="h2-horiz-section">
        <div className="h2-horiz-pin">
          <div className="container h2-horiz-header">
            <div>
              <p className="eyebrow">
                <span className="dot" /> Core Divisions
              </p>
              <h2>Four specialised pillars of industrial motion.</h2>
            </div>
            <div className="h2-horiz-progress-wrap">
              <span className="h2-horiz-hint">Scroll to explore divisions →</span>
              <div className="h2-horiz-progress-bar">
                <div className="h2-horiz-progress-fill" />
              </div>
            </div>
          </div>

          <div className="h2-horiz-track">
            {SHOWCASE_DIVISIONS.map((div) => (
              <article key={div.num} className="h2-division-panel">
                <div className="h2-division-media">
                  <img src={div.image} alt={div.title} className="h2-division-img" />
                  <span className="h2-division-num">{div.num}</span>
                  <span className="h2-division-badge">{div.badge}</span>
                </div>

                <div className="h2-division-body">
                  <div className="h2-division-top">
                    <div className="h2-division-icon">
                      <Icon name={div.icon} />
                    </div>
                    <span className="h2-division-sub">{div.subtitle}</span>
                  </div>

                  <h3>{div.title}</h3>
                  <p>{div.description}</p>

                  <div className="h2-division-specs">
                    {div.specs.map((s) => (
                      <div key={s.label} className="h2-spec-box">
                        <span>{s.label}</span>
                        <strong>{s.value}</strong>
                      </div>
                    ))}
                  </div>

                  <ul className="h2-division-list">
                    {div.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="h2-division-actions">
                    <Link
                      href={`/products-and-services?category=${div.slug}`}
                      className="btn btn-primary"
                    >
                      View Catalogue <ArrowIcon className="btn-icon" />
                    </Link>
                    <button
                      type="button"
                      className="btn h2-btn-outline"
                      onClick={() => enquire({ category: div.title })}
                    >
                      Enquire Division
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ARCHITECTURAL BENTO GRID — VALUES + PHOTOGRAPHY + LIVE COUNTERS */}
      <section className="section h2-bento-section">
        <div className="container">
          <div className="h2-section-top">
            <p className="eyebrow" data-reveal>
              <span className="dot" /> Why Sellomas Leads
            </p>
            <span className="h2-section-code" data-reveal>
              SYS // 02 — PERFORMANCE ARCHITECTURE
            </span>
          </div>

          <div className="section-head">
            <h2 data-reveal>
              Engineered for uptime, <span className="accent">built on trust</span>.
            </h2>
          </div>

          <div className="h2-bento-grid">
            {/* Large Visual Feature Card */}
            <div className="h2-bento-card h2-bento-card--visual">
              <img src="/3.jpeg" alt="Precision Industrial Facility" className="h2-bento-bg-img" />
              <div className="h2-bento-overlay">
                <span className="h2-bento-pill">ISO-Aligned Quality Control</span>
                <h3>Every component undergoes strict multi-point verification before dispatch.</h3>
                <p>
                  From dimensional tolerance checks on UC/UCP bearings to electrical load testing on power supplies and
                  sensors.
                </p>
              </div>
            </div>

            {/* Stat Counter Card 1 */}
            <div className="h2-bento-card h2-bento-card--stat">
              <div className="h2-bento-icon">
                <Icon name="layers" />
              </div>
              <div className="h2-bento-stat-val">
                <span className="h2-stat-num" data-target="500">
                  500
                </span>
                <em>+</em>
              </div>
              <h4>Ready-to-Ship Components</h4>
              <p>Fast-moving electronic, pneumatic, and mechanical spares stocked in our Varanasi warehouse.</p>
            </div>

            {/* Stat Counter Card 2 */}
            <div className="h2-bento-card h2-bento-card--accent">
              <div className="h2-bento-icon">
                <Icon name="bolt" />
              </div>
              <div className="h2-bento-stat-val">
                <span className="h2-stat-num" data-target="1200">
                  1200
                </span>
                <em>+</em>
              </div>
              <h4>Industrial Clients Served</h4>
              <p>Supporting food processing, packaging, agro, pharmaceutical, and manufacturing plants across India.</p>
            </div>

            {/* Value Card: Innovation */}
            <div className="h2-bento-card">
              <div className="h2-bento-icon">
                <Icon name="lightbulb" />
              </div>
              <h4>Innovation-Driven Sourcing</h4>
              <p>
                Continuous adoption of modern servo drives, optical contrast sensors, and high-speed TTO coding machines
                to modernize legacy lines.
              </p>
            </div>

            {/* Value Card: Sustainability */}
            <div className="h2-bento-card">
              <div className="h2-bento-icon">
                <Icon name="leaf" />
              </div>
              <h4>Energy &amp; Cost Sustainability</h4>
              <p>
                Every recommendation prioritizes lower kWh consumption and longer wear intervals—reducing total cost of
                ownership.
              </p>
            </div>

            {/* Secondary Image Bento Card */}
            <div className="h2-bento-card h2-bento-card--split-img">
              <div className="h2-bento-split-copy">
                <span className="h2-bento-tag">Turnkey Consultancy</span>
                <h4>From Concept to Commissioning</h4>
                <p>
                  Setting up a new plant? Our engineers guide entrepreneurs on machine sizing, layout, and spare-parts
                  planning.
                </p>
                <a
                  href="#contact"
                  className="h2-inline-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("#contact");
                  }}
                >
                  Book a technical consultation <ArrowIcon className="btn-icon" />
                </a>
              </div>
              <div className="h2-bento-split-media">
                <img src="/1.jpeg" alt="Consultancy & Machinery Setup" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE FILTERABLE PRODUCT SHOWCASE WITH IMAGE LENS */}
      <section className="section h2-products-section" id="products">
        <div className="container">
          <div className="h2-products-header">
            <div>
              <p className="eyebrow" data-reveal>
                <span className="dot" /> Featured Catalogue
              </p>
              <h2 data-reveal>
                High-demand <span className="accent">machinery &amp; spares</span>.
              </h2>
            </div>

            <div className="h2-filter-bar" role="tablist" aria-label="Filter products by category">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === tab}
                  className={`h2-filter-btn ${activeFilter === tab ? "is-active" : ""}`}
                  onClick={() => setActiveFilter(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="h2-products-grid">
            {filteredProducts.map((product) => (
              <article key={product.code} className="h2-product-card">
                <div className="h2-product-media">
                  <img src={product.image} alt={product.name} className="h2-product-bg-img" />
                  <div className="h2-product-thumb-badge">
                    <Image src={product.thumb} alt={product.name} width={64} height={64} />
                  </div>
                  <span className="h2-product-code">{product.code}</span>
                  <span className="h2-product-cat-pill">{product.categoryLabel}</span>
                </div>

                <div className="h2-product-body">
                  <h3>{product.name}</h3>
                  <p className="h2-product-spec">{product.spec}</p>

                  <div className="h2-product-footer">
                    <button
                      type="button"
                      className="h2-enquire-btn"
                      onClick={() => enquire({ product: product.name, category: product.categoryLabel })}
                    >
                      <span>Quick Enquire</span>
                      <ArrowIcon className="btn-icon" />
                    </button>
                    <Link href="/products-and-services" className="h2-details-link">
                      Specs
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="h2-products-cta" data-reveal>
            <p>Looking for a specific OEM part number or custom machine configuration?</p>
            <Link href="/products-and-services" className="btn btn-primary">
              Browse Full 77+ Part Catalogue <ArrowIcon className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE SPLIT-SCREEN PROCESS WITH IMAGE CROSSFADE */}
      <section className="section h2-process-section" id="process">
        <div className="container">
          <div className="h2-section-top">
            <p className="eyebrow" data-reveal>
              <span className="dot" /> How We Work
            </p>
            <span className="h2-section-code" data-reveal>
              SYS // 03 — EXECUTION WORKFLOW
            </span>
          </div>

          <div className="h2-process-layout">
            {/* Sticky Left Visual Stage */}
            <div className="h2-process-visual-col">
              <div className="h2-process-sticky-card">
                <div className="h2-process-img-stack">
                  {PROCESS_VISUAL_STEPS.map((step, idx) => (
                    <img
                      key={step.num}
                      src={step.image}
                      alt={step.title}
                      className={`h2-process-stage-img ${activeProcess === idx ? "is-active" : ""}`}
                    />
                  ))}
                </div>

                <div className="h2-process-stage-HUD">
                  <div className="h2-hud-top">
                    <span className="h2-hud-step">STEP {PROCESS_VISUAL_STEPS[activeProcess].num} / 04</span>
                    <span className="h2-hud-metric">{PROCESS_VISUAL_STEPS[activeProcess].metric}</span>
                  </div>
                  <h3>{PROCESS_VISUAL_STEPS[activeProcess].title}</h3>
                  <div className="h2-hud-dots">
                    {PROCESS_VISUAL_STEPS.map((s, i) => (
                      <button
                        key={s.num}
                        type="button"
                        aria-label={`View step ${s.num}`}
                        className={activeProcess === i ? "is-active" : ""}
                        onClick={() => setActiveProcess(i)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Scrollable Steps */}
            <div className="h2-process-steps-col">
              <div className="h2-process-intro">
                <h2>
                  From enquiry to <span className="accent">plant installation</span>.
                </h2>
                <p>
                  A streamlined four-stage workflow designed to eliminate machine downtime and get verified parts to
                  your floor fast.
                </p>
              </div>

              {PROCESS_VISUAL_STEPS.map((step, idx) => (
                <div
                  key={step.num}
                  className={`h2-process-step ${activeProcess === idx ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveProcess(idx)}
                >
                  <div className="h2-process-step-num">{step.num}</div>
                  <div className="h2-process-step-body">
                    <span className="h2-process-step-tag">{step.tag}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                    <div className="h2-process-step-metric">{step.metric}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. AUTHORIZED MULTI-BRAND ECOSYSTEM */}
      <section className="section h2-brands-section">
        <div className="container">
          <div className="h2-brands-head">
            <div>
              <p className="eyebrow" data-reveal>
                <span className="dot" /> Trusted OEM Ecosystem
              </p>
              <h2 data-reveal>
                Partnering with <span className="accent">global industry leaders</span>.
              </h2>
            </div>
            <p className="h2-brands-sub" data-reveal>
              We source directly from world-renowned manufacturers in automation, pneumatics, power transmission, and
              industrial switchgear—guaranteeing 100% genuine serials.
            </p>
          </div>

          <div className="h2-brands-grid">
            {BRANDS.map((brand) => (
              <div key={brand.name} className="h2-brand-tile">
                <div className="h2-brand-logo-wrap">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={130}
                    height={64}
                    className="h2-brand-logo"
                  />
                </div>
                <span className="h2-brand-name">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. STACKING ARCHITECTURAL CARDS — WHY CHOOSE SELLOMAS */}
      <section className="section h2-why-section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow" data-reveal>
              <span className="dot" /> The Sellomas Advantage
            </p>
            <h2 data-reveal>
              Built for <span className="accent">long-term operational value</span>.
            </h2>
          </div>

          <div className="h2-why-stack">
            {WHY_US.map((item, idx) => {
              const cardImages = ["/1.jpeg", "/2.jpeg", "/3.jpeg", "/4.jpeg"];
              return (
                <article key={item.title} className="h2-why-card">
                  <div className="h2-why-card-left">
                    <div className="h2-why-meta">
                      <span className="h2-why-num">0{idx + 1}</span>
                      <span className="h2-why-tag">{item.tag}</span>
                    </div>
                    <h3 className="h2-why-title">{item.title}</h3>
                    <p className="h2-why-text">{item.text}</p>
                    <button
                      type="button"
                      className="btn h2-btn-outline"
                      onClick={() => enquire({ product: item.title })}
                    >
                      Discuss with an Engineer <ArrowIcon className="btn-icon" />
                    </button>
                  </div>

                  <div className="h2-why-card-right">
                    <img src={cardImages[idx % cardImages.length]} alt={item.title} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

