"use client";

import { useScrollTo } from "./SmoothScroll";

export const ENQUIRE_EVENT = "sellomas:enquire";

export type EnquireDetail = { product?: string; category?: string };

/** Prefills the contact form with a product/category and scrolls to it. */
export function useEnquire() {
  const scrollTo = useScrollTo();
  return (detail: EnquireDetail = {}) => {
    window.dispatchEvent(new CustomEvent<EnquireDetail>(ENQUIRE_EVENT, { detail }));
    scrollTo("#contact");
  };
}
