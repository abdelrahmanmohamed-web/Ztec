import { ProductDetails } from "@/features/product-details/index";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProductDetails slug={slug} />;
}
