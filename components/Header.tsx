"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP, PRELOADER_DURATION } from "@/lib/gsap";
import { NAV_LINKS } from "@/lib/data";
import { useScrollTo } from "./SmoothScroll";
import Logo from "./Logo";

const isActive = (pathname: string, href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

export default function Header() {
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const scrollTo = useScrollTo();

  useGSAP(
    () => {
      const header = root.current!;
      const delay = window.location.pathname === "/" ? PRELOADER_DURATION + 0.3 : 0.2;
      gsap.from(".header-inner", { yPercent: -100, autoAlpha: 0, duration: 1, delay, ease: "power3.out" });

      const setProgress = gsap.quickTo(".scroll-progress", "scaleX", { duration: 0.3, ease: "power2.out" });

      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const y = self.scroll();
          header.classList.toggle("is-solid", y > 40);
          header.classList.toggle("is-hidden", self.direction === 1 && y > 500);
          setProgress(self.progress);
        },
        onRefresh: (self) => setProgress(self.progress),
      });
    },
    { scope: root },
  );

  useEffect(() => {
    setOpen(false);
    root.current?.classList.remove("is-hidden");
    gsap.set(".scroll-progress", { scaleX: 0 });
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [pathname]);

  return (
    <header ref={root} className={`header ${open ? "is-open" : ""}`}>
      <div className="container header-inner">
       <div className="flex items-center w-[40%]">
         <Image
          src="/Sellomas_Logo.png"
           alt="Sellomas"
           width={150}
           height={150}
           className="w-32"
         />
       </div>
        <nav className="header-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}              className={isActive(pathname, link.href) ? "is-active" : undefined}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href="#contact"
          className="btn btn-primary header-cta "
          style={{ color: "white" }}
          onClick={(e) => (e.preventDefault(), setOpen(false), scrollTo("#contact"))}
        >
          Send Enquiry
        </a>
        <button
          className="header-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
      <div className="scroll-progress" />
    </header>
  );
}
