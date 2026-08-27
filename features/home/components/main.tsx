import MainButton from "@/components/shared/button";
import { CardImage } from "@/components/shared/card";
import { Categories } from "./categories";
import { getFeaturedProducts } from "../getFeatured";
export async function Home() {
  const featured = await getFeaturedProducts();

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
                Elevate your daily routine with our meticulously selected premium goods and curated essentials.
              </p>
            </div>
            <MainButton text="Browse all products" href="/products" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {featured.slice(0, 3).map((p) => (
              <CardImage key={p.id} product={p} />
            ))}
          </div>
          <Categories />
        </main>
      </div>
    </div>
  );
}
