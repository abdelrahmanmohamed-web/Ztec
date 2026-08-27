"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";

export function ProductFeatureImage({
  src,
  alt,
  size,
  sizes,
}: {
  src?: string;
  alt: string;
  size: number;
  sizes: string;
}) {
  const [hasError, setHasError] = useState(!src);

  if (hasError || !src) {
    return (
      <ImageOff
        size={size}
        className="stroke-[1.5]"
        aria-label="Image unavailable"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      loading="lazy"
      sizes={sizes}
      className="object-cover"
      onError={() => setHasError(true)}
    />
  );
}
