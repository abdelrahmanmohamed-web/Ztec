import { CardImage } from "@/components/shared/card";
import { getProducts } from "../services/getProducts";
import { getCategories } from "../services/getCategories";
import { Props } from "../types";
import { FiltersBar } from "./filters-bar";

export async function Main({ searchParams }: Props) {
  const resolvedParams = (await searchParams) || {};

  const filters = {
    category: resolvedParams.category,
    featured: resolvedParams.featured === "true",
    sort: resolvedParams.sort as
      | "price_asc"
      | "price_desc"
      | "newest"
      | undefined,
  };

  const products = await getProducts(filters);

  const allProductsForCategories = await getCategories();

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <main className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 md:text-6xl">
              Shop
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Check out our full collection of products tailored to your needs.
            </p>
          </div>

          <FiltersBar categories={allProductsForCategories} />

          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-xl font-medium text-zinc-600 dark:text-zinc-400">
                No products found
              </p>
              <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-1">
                Try clearing your filters or choosing a different category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 w-full">
              {products.map((product) => (
                <CardImage key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
