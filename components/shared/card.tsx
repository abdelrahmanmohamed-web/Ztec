"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Product } from "./types";
import Link from "next/link";

export function CardImage({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group w-full">
      <Card
        className="w-full h-[400px] bg-stone-100 rounded-3xl border-none shadow-none overflow-hidden relative
                         transition-all duration-300 ease-in-out
                         md:group-hover:scale-[1.01] md:group-hover:saturate-[1.15] md:group-hover:contrast-[1.05]
                         active:scale-[1.01]"
      >
        <Image
          src={product.thumbnail_url || ""}
          onError={(e) => (e.currentTarget.style.display = "none")}
          alt={product.name || "Product thumbnail"}
          fill
          className="object-cover"
          sizes="(max-w-sm) 100vw"
        />

        {product.featured && (
          <span className="absolute top-4 left-4 capitalize px-4 border border-stone-600 text-stone-600 text-xs font-medium rounded-full bg-white/50 backdrop-blur-xs">
            featured
          </span>
        )}
      </Card>
      <div className="my-4 flex justify-between items-start px-2">
        <h3 className="text-lg font-normal">{product.name}</h3>
        <p className="text-lg text-stone-500 font-medium">
          USD {product.price}
        </p>
      </div>
    </Link>
  );
}
