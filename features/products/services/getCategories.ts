import { cache } from "react";
import { Category } from "@/components/shared/types";
import { createClient } from "@/lib/supabase/server";

export const getCategories = cache(async function getCategories() {
  const supabase = await createClient();
  const query = supabase.from("categories").select();
  const { data, error } = await query.returns<Category[]>();
  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
  return (data || []) as Category[];
});