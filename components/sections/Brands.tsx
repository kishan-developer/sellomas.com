"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

const BRANDS = [
  { name: "ARB", image: "/Brands_List/ARB.png.jpeg" },
  { name: "Delta", image: "/Brands_List/Delta.png.jpeg" },
  { name: "Feener", image: "/Brands_List/Feener.png.jpeg" },
  { name: "Festo", image: "/Brands_List/Festo.png.jpeg" },
  { name: "G", image: "/Brands_List/G.png.jpeg" },
  { name: "Havvels", image: "/Brands_List/Havvels.png.jpeg" },
  { name: "LT", image: "/Brands_List/LT.png.jpeg" },
  { name: "NBC", image: "/Brands_List/NBC.png.jpeg" },
  { name: "Pix", image: "/Brands_List/Pix.png.jpeg" },
  { name: "Siemens", image: "/Brands_List/Siemens.png.jpeg" },
  { name: "Skf", image: "/Brands_List/Skf.png.jpeg" },
  { name: "Spac", image: "/Brands_List/Spac.png.jpeg" },
  { name: "Veichi", image: "/Brands_List/Veichi.png.jpeg" },
  { name: "Omfa", image: "/Brands_List/omfa.png.jpeg" },
  { name: "Schender", image: "/Brands_List/schender.png.jpeg" },
  { name: "Selec", image: "/Brands_List/selec.png.jpeg" },
];

export default function Brands() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        // Animate header
        gsap.from(".brands .eyebrow", {
          y: 20,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".brands",
            start: "top 85%",
          },
        });

        gsap.from(".brands h2", {
          y: 30,
          autoAlpha: 0,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".brands",
            start: "top 85%",
          },
        });

        // Animate brand cards with stagger
        gsap.from(".brands-item", {
          y: 60,
          scale: 0.9,
          autoAlpha: 0,
          duration: 0.9,
          stagger: {
            amount: 0.6,
            from: "center",
          },
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".brands-grid",
            start: "top 80%",
          },
        });

        // Scale animation on scroll
        gsap.utils.toArray<HTMLElement>(".brands-item").forEach((item) => {
          gsap.fromTo(
            item,
            { scale: 1 },
            {
              scale: 1.05,
              duration: 0.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play reverse play reverse",
              },
            },
          );
        });

        // Parallax effect for logos
        gsap.utils.toArray<HTMLElement>(".brands-logo").forEach((logo) => {
          gsap.fromTo(
            logo,
            { y: 0 },
            {
              y: -10,
              duration: 0.5,
              ease: "power1.out",
              scrollTrigger: {
                trigger: logo.parentElement!,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play reverse play reverse",
              },
            },
          );
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="section brands">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow" data-reveal>
            <span className="dot" /> Trusted Brands
          </p>
          <h2 data-reveal>Partnering with industry leaders</h2>
        </div>

        <div className="brands-grid">
          {BRANDS.map((brand) => (
            <div key={brand.name} className="brands-item">
              <Image
                src={brand.image}
                alt={brand.name}
                width={120}
                height={60}
                className="brands-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
