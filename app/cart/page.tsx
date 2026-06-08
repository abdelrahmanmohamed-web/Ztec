import { CartMain } from "@/features/cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart | Minimalist Store",
  description: "Review your selected items and proceed to checkout.",
};

export default function CartPage() {
  return <CartMain />;
}
