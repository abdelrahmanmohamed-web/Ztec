import Product from "./types";
import { createClient } from "@/lib/supabase/server";
export default async function fetch_products() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select()
    .returns<Product[]>();

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
  return (data || []) as Product[];
}
