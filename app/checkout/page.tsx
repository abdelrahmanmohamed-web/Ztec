import { CheckoutMain } from "@/features/checkout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Checkout | Minimalist Store",
  description:
    "Complete your order safely using our secure minimalist checkout process.",
};

export default function CheckoutPage() {
  return <CheckoutMain />;
}
