import { ProductWithDetails } from "@/components/shared/types";
import { createClient } from "@/lib/supabase/server";

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
