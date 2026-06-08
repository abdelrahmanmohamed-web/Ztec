"use client";

import Image from "next/image";
import { useCart } from "@/features/cart";

export function CheckoutSummary() {
  const { items, totalPrice } = useCart();

  return (
    <div className="bg-stone-50 border border-stone-200 p-6 space-y-6 lg:sticky lg:top-6">
      <h2 className="text-sm font-medium uppercase tracking-wider text-stone-900">
        Review Your Order
      </h2>

      {/* Mini Items List */}
      <div className="max-h-64 overflow-y-auto space-y-4 pr-2 no-scrollbar border-b border-stone-200 pb-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 text-sm">
            {item.thumbnail_url && (
              <div className="relative h-12 w-12 min-w-12 bg-white border border-stone-100 overflow-hidden">
                <Image
                  src={item.thumbnail_url}
                  alt={item.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="font-normal text-stone-900 truncate">
                {item.name}
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Qty: {item.quantity}
              </p>
            </div>
            <span className="font-medium text-stone-900">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {/* Pricing Totals */}
      <div className="space-y-3 text-sm border-b border-stone-200 pb-4 text-stone-600 font-light">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="text-stone-900 font-normal">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="text-stone-900 font-normal">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes</span>
          <span className="text-stone-900 font-normal">
            Calculated at checkout
          </span>
        </div>
      </div>

      <div className="flex justify-between items-baseline">
        <span className="text-sm font-medium text-stone-900">Total</span>
        <span className="text-xl font-medium text-stone-900">
          ${totalPrice.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
