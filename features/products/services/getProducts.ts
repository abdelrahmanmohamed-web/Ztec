import { Product } from "@/components/shared/types";
import { createClient } from "@/lib/supabase/server";

export interface ProductFilters {
  category?: string;
  categoryId?: string;
  excludeId?: string;
  featured?: boolean;
  sort?: "price_asc" | "price_desc" | "newest";
  limit?: number;
}

export async function getProducts(filters?: ProductFilters) {
  const supabase = await createClient();

  let query = supabase.from("products").select(`
    *,
    category:categories(id, name, slug),
    images:product_images(url, sort_order)
  `);

  if (filters?.category && filters.category !== "all") {
    const { data: cat } = await supabase
      .from("categories")
      .select("id")
      .eq("slug", filters.category)
      .single();

    if (cat) query = query.eq("category_id", cat.id);
  }

  if (filters?.categoryId) {
    query = query.eq("category_id", filters.categoryId);
  }

  if (filters?.excludeId) {
    query = query.neq("id", filters.excludeId);
  }

  if (filters?.featured) {
    query = query.eq("featured", true);
  }

  if (filters?.sort) {
    if (filters.sort === "price_asc")
      query = query.order("price", { ascending: true });
    else if (filters.sort === "price_desc")
      query = query.order("price", { ascending: false });
    else if (filters.sort === "newest")
      query = query.order("created_at", { ascending: false });
  } else {
    query = query.order("created_at", { ascending: false });
  }

  if (filters?.limit) {
    query = query.limit(filters.limit);
  }

  const { data, error } = await query.returns<Product[]>();

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
  return (data || []) as Product[];
}