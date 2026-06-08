import { Loader2 } from "lucide-react";
import { Product } from "@/components/shared/types";
import { useCart } from "@/features/cart";

import { useTransition } from "react";
export function AddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() =>
        startTransition(async () => {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          addItem(product);
        })
      }
      disabled={isPending || product.stock <= 0}
      className={`w-full font-medium py-4 rounded-xl shadow-lg mt-2 transition-all flex gap-4 justify-center
          ${isPending || product.stock <= 0 ? "bg-stone-200 text-stone-400 cursor-not-allowed" : "text-white hover:bg-stone-800 active:scale-95 bg-stone-900"}`}
    >
      <span className={`${isPending ? "animate-spin" : "hidden"}`}>
        <Loader2 />
      </span>
      <p>{isPending ? "processing..." : "Add to Cart"}</p>
    </button>
  );
}
