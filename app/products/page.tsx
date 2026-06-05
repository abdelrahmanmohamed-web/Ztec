import { Main } from "@/features/products/components/main";
import { Props } from "@/features/products/index";

export default async function ProductsPage({ searchParams }: Props) {
  return <Main searchParams={searchParams} />;
}
