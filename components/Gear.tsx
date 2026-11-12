import { useId } from "react";

type GearProps = { teeth?: number; spokes?: number; className?: string };

export default function Gear({ teeth = 12, spokes = 0, className }: GearProps) {
  const maskId = `gear${useId().replace(/[^\w-]/g, "")}`;

  return (
    <svg viewBox="-100 -100 200 200" className={className} aria-hidden="true">
      <mask id={maskId}>
        <rect x={-100} y={-100} width={200} height={200} fill="#fff" />
        <circle r={58} fill="#000" />
        {spokes > 0 && (
          <g fill="#fff">
            <circle r={24} />
            {Array.from({ length: spokes }, (_, i) => (
              <rect key={i} x={-7} y={-60} width={14} height={60} rx={3} transform={`rotate(${(i * 360) / spokes})`} />
            ))}
          </g>
        )}
        <circle r={10} fill="#000" />
      </mask>
      <g fill="currentColor" mask={`url(#${maskId})`}>
        {Array.from({ length: teeth }, (_, i) => (
          <rect key={i} x={-10} y={-98} width={20} height={28} rx={4} transform={`rotate(${(i * 360) / teeth})`} />
        ))}
        <circle r={76} />
      </g>
    </svg>
  );
}
