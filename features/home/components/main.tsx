import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardImage } from "@/components/shared/card";
import { getProducts} from "@/features/products";
import { Product} from "@/components/shared/types";
import { Categories } from "./categories";
import { ArticlesSection } from "./articles";
export async function Home() {
  const products: Product[] = await getProducts();
  const featured: Product[] = products
    .filter((p) => p.featured)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <main className="flex flex-col gap-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex max-w-2xl flex-col gap-4">
              <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 md:text-6xl">
                Elevate your lifestyle with premium essentials.
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Elevate your daily routine with our meticulously selected
                premium goods and curated essentials.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="rounded-full border border-zinc-200 bg-white px-8 py-6 text-base font-medium text-black shadow-sm transition-colors duration-300 hover:bg-black hover:text-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-white dark:hover:text-black shrink-0 self-start md:self-auto"
            >
              <Link href="/products">Browse all products</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {featured.slice(0, 3).map((p) => (
              <CardImage key={p.id} product={p} />
            ))}
          </div>
          <Categories />
          <ArticlesSection />
        </main>
      </div>
    </div>
  );
}
