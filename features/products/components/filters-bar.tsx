"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { Category } from "@/components/shared/types";

interface FiltersBarProps {
  categories: Category[];
}

export function FiltersBar({ categories }: FiltersBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentCategory = searchParams.get("category") || "all";
  const currentSort = searchParams.get("sort") || "newest";
  const isFeatured = searchParams.get("featured") === "true";

  function updateFilters(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (!value || value === "all" || value === "false" || value === "newest") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    startTransition(() => {
      router.push(`/products?${params.toString()}`, { scroll: false });
    });
  }

  return (
    <div
      className={`flex flex-col gap-4 border-b border-zinc-200 pb-6 dark:border-zinc-800 md:flex-row md:items-center md:justify-between ${isPending ? "opacity-60" : ""}`}
    >
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => updateFilters("category", "all")}
          className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors ${currentCategory === "all" ? "bg-black text-white dark:bg-white dark:text-black" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-400"}`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => updateFilters("category", cat.slug)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors ${currentCategory === cat.slug ? "bg-black text-white dark:bg-white dark:text-black" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-400"}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 cursor-pointer">
          <input
            type="checkbox"
            checked={isFeatured}
            onChange={(e) =>
              updateFilters("featured", e.target.checked ? "true" : null)
            }
            className="rounded border-zinc-300 text-black focus:ring-black dark:border-zinc-700 dark:bg-zinc-900"
          />
          Featured Only
        </label>

        <select
          aria-label="Sort products by"
          value={currentSort}
          onChange={(e) => updateFilters("sort", e.target.value)}
          className="rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 shadow-xs focus:border-black focus:outline-hidden dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
        >
          <option value="newest">Newest</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}
