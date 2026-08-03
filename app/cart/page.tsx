import { CartMain } from "@/features/cart";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description:
    "Review the products in your cart before proceeding to checkout.",
};

export default function CartPage() {
  return <CartMain />;
}
