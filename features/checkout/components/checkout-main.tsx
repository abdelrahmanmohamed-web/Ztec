"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useCart } from "@/features/cart";
import { CheckoutForm } from "./checkout-form";
import { CheckoutSummary } from "./checkout-summary";
import { Button } from "@/components/ui/button";

export function CheckoutMain() {
  const { items } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <p className="text-sm font-light text-stone-500 mb-5">
          Your cart is empty. You cannot proceed to checkout.
        </p>
        <Button
          asChild
          className="bg-stone-900 text-stone-50 hover:bg-stone-800 rounded-none text-xs font-normal tracking-wide px-6 py-5"
        >
          <Link href="/products">Shop Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-stone-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 text-xs font-light text-stone-500 hover:text-stone-900 transition-colors group"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            Back to Cart
          </Link>
        </div>

        {/* Page Title */}
        <div className="border-b border-stone-200 pb-5 mb-10">
          <h1 className="text-2xl font-normal tracking-tight">Checkout</h1>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <CheckoutForm />
          </div>
          <div className="lg:col-span-1">
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
