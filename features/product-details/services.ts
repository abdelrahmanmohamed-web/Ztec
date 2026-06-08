import { ProductWithDetails } from "@/components/shared/types";
import { createClient } from "@/lib/supabase/server";
import { RelatedProductsProps } from "./type";

export async function getProductDetails(
  slug: string,
): Promise<ProductWithDetails | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select(
      `
      *,
      category:categories(id, name, slug),
      images:product_images(url, sort_order)
    `,
    )
    .eq("slug", slug)
    .order("sort_order", { foreignTable: "product_images", ascending: true })
    .maybeSingle();

  if (error) {
    console.error("Supabase Error:", error.message);
    return null;
  }

  return data as unknown as ProductWithDetails;
}

// export async function getCommets(productId: RelatedProductsProps) {
//   const supabase = await createClient();

//   const { data: reviews, error } = await supabase
//     .from("reviews")
//     .select("id, author, comment, created_at")
//     .eq("product_id", productId)
//     .order("created_at", { ascending: false });

//   if (error) {
//     console.error("Error fetching reviews:", error.message);
//   }
// }
