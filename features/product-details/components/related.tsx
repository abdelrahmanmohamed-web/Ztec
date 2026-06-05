import { CardImage } from "@/components/shared/card";
import { getProducts } from "@/features/products";
import { RelatedProductsProps } from "../type";

export async function Related({
  category_id,
  product_id,
}: RelatedProductsProps) {
  const products = await getProducts({
    categoryId: category_id,
    excludeId: product_id,
    limit: 3,
  });

  return (
    <div className="my-12">
      <h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-8">
        Related Products
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-20">
        {products.map((p) => (
          <CardImage key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
