"use client";

import type { ReactNode } from "react";
import { ArrowIcon } from "./Icon";
import { useEnquire, type EnquireDetail } from "./useEnquire";

export default function EnquireButton({
  children,
  className = "btn btn-primary",
  ...detail
}: EnquireDetail & { children: ReactNode; className?: string }) {
  const enquire = useEnquire();
  return (
    <button className={className} onClick={() => enquire(detail)}>
      {children} <ArrowIcon className="btn-icon" />
    </button>
  );
}
