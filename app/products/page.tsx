import { Main } from "@/features/products/components/main";
import { Props } from "@/features/products/index";
import { Home } from "@/features/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our collection of premium electronics, including smartphones, displays, headphones, and smartwatches.",
};

export default async function ProductsPage({ searchParams }: Props) {
  return <Main searchParams={searchParams} />;
}
