import {
  ProductHighlightCards,
  ProductServiceFeatures,
} from "./product-feature-cards";
import { ProductFeatureImage } from "./product-feature-image";
import { getProductFeatureImages } from "./product-feature-images";

export function ProductFeatures({ category }: { category?: string }) {
  const productImages = getProductFeatureImages(category);

  return (
    <div className="mt-12 space-y-12 w-full">
      <div className="flex flex-col md:flex-col-reverse gap-6 w-full">
        <div className="relative h-80 md:h-125 w-full rounded-3xl bg-stone-100 border border-stone-200/60 flex items-center justify-center text-stone-400 overflow-hidden">
          <ProductFeatureImage
            src={productImages[0]}
            alt={`${category ?? "Product"} feature`}
            size={40}
            sizes="(max-width: 768px) 100vw, 80rem"
          />
        </div>

        <ProductServiceFeatures />
      </div>

      <ProductHighlightCards category={category} images={productImages} />
    </div>
  );
}
