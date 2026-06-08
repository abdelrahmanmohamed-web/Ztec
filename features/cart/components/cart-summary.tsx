"use client";
import Link from "next/link";
import { useCart } from "@/features/cart";
import { Button } from "@/components/ui/button";

export function CartSummary() {
  const { totalPrice, items } = useCart();

  if (items.length === 0) return null;

  return (
    <div className="bg-stone-50 border border-stone-200 p-6 space-y-6">
      <h2 className="text-sm font-medium uppercase tracking-wider text-stone-900">
        Order Summary
      </h2>

      <div className="space-y-4 border-b border-stone-200 pb-4 text-sm">
        <div className="flex justify-between text-stone-600 font-light">
          <span>Subtotal</span>
          <span className="font-normal text-stone-900">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-stone-600 font-light">
          <span>Shipping</span>
          <span className="text-xs font-normal text-stone-500">
            Calculated at next step
          </span>
        </div>
        <div className="flex justify-between text-stone-600 font-light">
          <span>Tax</span>
          <span className="text-xs font-normal text-stone-500">
            Calculated at next step
          </span>
        </div>
      </div>

      <div className="flex justify-between items-baseline">
        <span className="text-sm font-medium text-stone-900">Total</span>
        <span className="text-xl font-medium text-stone-900">
          ${totalPrice.toFixed(2)}
        </span>
      </div>

      <Button
        asChild
        className="w-full bg-stone-900 text-stone-50 hover:bg-stone-800 rounded-none py-6 text-xs font-normal tracking-wide transition-colors"
      >
        <Link href="/checkout">Proceed to Checkout</Link>
      </Button>
    </div>
  );
}
