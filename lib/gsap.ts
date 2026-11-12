"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
}

export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const PRELOADER_DURATION = 1.9;

/** The preloader only plays on the very first page load; set to true after the first client-side navigation. */
export const intro = { navigated: false };

export const introDelay = () => (intro.navigated ? 0.1 : PRELOADER_DURATION);

export { gsap, ScrollTrigger, SplitText, useGSAP };
