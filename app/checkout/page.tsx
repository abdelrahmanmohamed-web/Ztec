import { CheckoutMain } from "@/features/checkout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your purchase securely and place your order at Ztec.",
};

export default function CheckoutPage() {
  return <CheckoutMain />;
}
