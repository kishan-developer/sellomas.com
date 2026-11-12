"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div className="pdp-gallery">
      <div className="pdp-stage">
        {current && <Image src={current} alt={name} width={900} height={600} className="pdp-stage-img" priority />}
      </div>
      {images.length > 1 && (
        <div className="pdp-thumbs">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`pdp-thumb ${i === active ? "is-active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1} of ${name}`}
            >
              <Image src={src} alt="" width={96} height={96} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
