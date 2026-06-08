import { getProductDetails } from "../services";
import { ProductGallery } from "./product-gallery";
import { ProductFeatures } from "./product-features";
import { Comments } from "./comments";
import { Related } from "./related";
import { Dot } from "lucide-react";
import Link from "next/link";
import { ProductInfo } from "./product-info";

export async function ProductDetails({ slug }: { slug: string }) {
  const product = await getProductDetails(slug);

  if (!product) {
    return <div className="pt-32 text-center">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pt-28">
      <nav className="flex items-center gap-1 mb-8 text-stone-500 text-sm">
        <Link href="/" className="hover:transition-colors">
          Home
        </Link>
        <Dot className="text-stone-300 h-4 w-4" />
        <Link href="/products" className="hover:transition-colors">
          Products
        </Link>
        <Dot className="text-stone-300 h-4 w-4" />
        <span className="font-medium line-clamp-1">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
        <div className="lg:col-span-7 w-full">
          <ProductGallery
            productName={product.name}
            thumbnailUrl={product.thumbnail_url ?? ""}
            gallery={product.images.map((img) => img.url)}
          />
        </div>

        <div className="lg:col-span-5 w-full">
          <ProductInfo product={product} />
        </div>
      </div>

      <ProductFeatures />

      {product.category_id && (
        <>
          <Comments category_id={product.category_id} product_id="" />
          <Related category_id={product.category_id} product_id={product.id} />
        </>
      )}
    </div>
  );
}
