"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/features/cart";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function CartItemsList() {
  const { items, addItem, decrementQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-20 border border-dashed border-stone-200 bg-stone-50/50 flex flex-col items-center justify-center gap-5">
        <p className="text-sm font-light text-stone-500">
          Your shopping cart is currently empty.
        </p>
        <Button
          asChild
          className="bg-stone-900 text-stone-50 hover:bg-stone-800 rounded-none text-xs font-normal tracking-wide px-6 py-5"
        >
          <Link href="/products">Explore Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 last:border-b-0"
        >
          {/* Product Info & Thumbnail */}
          <div className="flex items-center gap-4 flex-1 min-w-0">
            {item.thumbnail_url && (
              <div className="relative h-16 w-16 min-w-16 bg-stone-100 overflow-hidden border border-stone-100">
                <Image
                  src={item.thumbnail_url}
                  alt={item.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                  priority={false}
                />
              </div>
            )}
            <div className="min-w-0">
              <h3 className="text-sm font-medium text-stone-900 truncate">
                {item.name}
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                ${item.price.toFixed(2)} each
              </p>
            </div>
          </div>

          {/* Actions & Price */}
          <div className="flex items-center justify-between sm:justify-end gap-8">
            {/* Quantity Controller */}
            <div className="flex items-center gap-1 border border-stone-200 bg-white p-0.5 rounded">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => decrementQuantity(item.id)}
                className="h-7 w-7 text-stone-500 hover:text-stone-900 hover:bg-stone-50 rounded-none"
                aria-label={`Decrease quantity of ${item.name}`}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="text-xs w-8 text-center font-normal text-stone-900">
                {item.quantity}
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => addItem(item)}
                className="h-7 w-7 text-stone-500 hover:text-stone-900 hover:bg-stone-50 rounded-none"
                aria-label={`Increase quantity of ${item.name}`}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>

            {/* Total Price for this item */}
            <div className="text-right min-w-[70px]">
              <span className="text-sm font-medium text-stone-900">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>

            {/* Remove Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeItem(item.id)}
              className="h-8 w-8 text-stone-300 hover:text-red-600 hover:bg-transparent transition-colors"
              aria-label={`Remove ${item.name} from cart`}
            >
              <Trash2 className="h-4 w-4 stroke-[1.5]" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
