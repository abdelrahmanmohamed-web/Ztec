import { cache } from "react";
import { Product } from "@/components/shared/types";
import { createClient } from "@/lib/supabase/server";

export const getFeaturedProducts = cache(async function getFeaturedProducts() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select(
      `*, category:categories(id, name, slug), images:product_images(url, sort_order)`,
    )
    .eq("featured", true)
    .order("created_at", { ascending: false })
    .limit(3)
    .returns<Product[]>();

  if (error) throw new Error(error.message);
  return (data || []) as Product[];
});
