"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  productName: string;
  thumbnailUrl: string;
  gallery: string[];
}

export function ProductGallery({
  productName,
  thumbnailUrl,
  gallery,
}: ProductGalleryProps) {
  const allImages = [thumbnailUrl, ...gallery];
  console.log(allImages);
  const [activeImage, setActiveImage] = useState(thumbnailUrl);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
      <div className="order-2 md:order-1 md:col-span-3 flex flex-row md:flex-col gap-3 overflow-x-hidden pb-2 md:pb-0 scrollbar-hidden">
        {allImages.map((img, index) => (
          <button
            title="image"
            key={index}
            onClick={() => setActiveImage(img)}
            className={`
              w-20 h-20 md:w-full aspect-square relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 bg-stone-100
              ${
                activeImage === img
                  ? "border-2 border-stone-800 opacity-100 shadow-md scale-[1.02]"
                  : "border border-stone-200 opacity-60 hover:opacity-100"
              }
            `}
          >
            <Image
              src={img || ""}
              onError={(e) => (e.currentTarget.style.display = "none")}
              alt={`${productName} gallery ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-w-md) 80px, 150px"
            />
          </button>
        ))}
      </div>
      <div className="order-1 md:order-2 md:col-span-9">
        <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-stone-100 bg-stone-50 relative">
          <Image
            src={activeImage}
            alt={productName}
            fill
            priority
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-w-lg) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
