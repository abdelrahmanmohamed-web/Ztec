export interface Props {
  searchParams: Promise<{
    category?: string;
    featured?: string;
    sort?: "price_asc" | "price_desc" | "newest";
  }>;
}
