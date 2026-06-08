"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CartItemsList } from "./cart-items-list";
import { CartSummary } from "./cart-summary";
import { useCart } from "@/features/cart";

export function CartMain() {
  const { totalItems, items } = useCart();
  const isCartEmpty = items.length === 0;

  return (
    <div className="min-h-screen bg-white text-stone-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-light text-stone-500 hover:text-stone-900 transition-colors group"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            Continue Shopping
          </Link>
        </div>

        <div className="border-b border-stone-200 pb-5 mb-10">
          <h1 className="text-2xl font-normal tracking-tight">Your Cart</h1>
          <p className="text-xs text-stone-500 mt-1">
            You have {totalItems} {totalItems === 1 ? "item" : "items"} in your
            cart
          </p>
        </div>

        <div
          className={
            isCartEmpty
              ? "w-full"
              : "grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
          }
        >
          <div className={isCartEmpty ? "w-full" : "lg:col-span-2"}>
            <CartItemsList />
          </div>

          {!isCartEmpty && (
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
