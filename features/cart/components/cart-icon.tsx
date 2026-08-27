"use client";

import Link from "next/link";
import { ShoppingCart, Trash2, Plus, Minus, X } from "lucide-react";
import { useCart } from "@/features/cart";
import { Button } from "@/components/ui/button";
import { useCloseOnNavigate } from "@/components/shared/hooks/use-close-on-navigate";
import { useHasMounted } from "@/components/shared/hooks/use-has-mounted";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
export function CartButton() {
  const {
    items,
    addItem,
    decrementQuantity,
    removeItem,
    totalItems,
    subTotalPrice,
    taxRate,
    taxes,
    totalPrice,
  } = useCart();

  const { isOpen, setIsOpen } = useCloseOnNavigate();
  const hasMounted = useHasMounted();

  const buttonClasses =
    "fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 h-12 w-12 md:w-auto md:gap-3 rounded-full bg-stone-900 p-0 md:px-5 text-stone-50 shadow-lg hover:bg-stone-800 active:scale-95 focus:outline-none";

  if (!hasMounted) {
    return (
      <Button
        className={buttonClasses}
        aria-label="Loading cart..."
        type="button"
      >
        <div className="relative flex items-center justify-center">
          <ShoppingCart className="h-4 w-4 opacity-50" />
        </div>
        <span className="hidden md:inline text-xs font-medium tracking-wide opacity-50">
          Cart
        </span>
      </Button>
    );
  }

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button
          className={buttonClasses}
          aria-label={`Open cart, ${totalItems} items`}
        >
          <div className="relative flex items-center justify-center">
            <ShoppingCart className="h-4 w-4" />
            {totalItems > 0 && (
              <span className="flex md:hidden absolute -right-2 -top-2 h-4 w-4 items-center justify-center rounded-full bg-stone-50 text-[9px] font-bold text-stone-900 border border-stone-900">
                {totalItems}
              </span>
            )}
          </div>

          <span className="hidden md:inline text-xs font-medium tracking-wide">
            Cart
          </span>
          {totalItems > 0 && (
            <span className="hidden md:flex h-5 items-center justify-center rounded-full bg-stone-50 px-2 text-[11px] font-semibold text-stone-900 border border-stone-900 animate-in fade-in zoom-in duration-200">
              {totalItems}
            </span>
          )}
        </Button>
      </DrawerTrigger>

      <DrawerContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="h-full max-w-md ml-auto bg-stone-50 text-stone-900 border-l border-stone-200 flex flex-col rounded-none"
      >
        <DrawerHeader className="flex flex-row items-center justify-between border-b border-stone-200 p-4 space-y-0">
          <div className="flex items-baseline gap-2">
            <DrawerTitle className="text-md font-normal tracking-tight">
              Shopping Cart
            </DrawerTitle>
            <span className="text-xs text-stone-400 font-light">
              ({totalItems} {totalItems === 1 ? "item" : "items"})
            </span>
          </div>
          <DrawerClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-100"
              aria-label="Close cart"
            >
              <X className="h-4 w-4" />
            </Button>
          </DrawerClose>
          <DrawerDescription className="sr-only">
            Your shopping cart items and checkout action.
          </DrawerDescription>
        </DrawerHeader>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6 no-scrollbar">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center py-20">
              <ShoppingCart className="h-6 w-6 text-stone-300 stroke-[1.5]" />
              <p className="mt-3 text-xs font-light text-stone-400">
                Your cart is empty.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 pb-4 border-b border-stone-100"
              >
                <div className="flex-1 min-w-0">
                  {item.thumbnail_url && (
                    <div className="relative h-14 w-14 min-w-14 bg-stone-100 overflow-hidden border border-stone-100">
                      <Image
                        src={item.thumbnail_url}
                        alt={item.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                  )}

                  <h4 className="text-sm font-medium text-stone-900 truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">
                    ${item.price.toFixed(2)}
                  </p>

                  {/* Quantity Controller */}
                  <div className="flex items-center gap-1 mt-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => decrementQuantity(item.id)}
                      className="h-7 w-7 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-xs w-6 text-center font-normal">
                      {item.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => addItem(item)}
                      className="h-7 w-7 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between h-full gap-4">
                  <span className="text-sm font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                    className="h-8 w-8 text-stone-300 hover:text-red-600 hover:bg-transparent transition-colors"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Trash2 className="h-3.5 w-3.5 stroke-[1.5]" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Actions */}
        {items.length > 0 && (
          <div className="border-t border-stone-200 bg-stone-50 p-4 space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-stone-500 font-light">Subtotal</span>
                <span className="font-normal text-stone-900">
                  {subTotalPrice.toFixed(2)}$
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-500 font-light">
                  Tax ({taxRate}%)
                </span>
                <span className="font-normal text-stone-900">
                  {taxes.toFixed(2)}$
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-stone-200">
              <span className="text-sm font-medium">Total</span>
              <span className="font-medium text-base">
                {totalPrice.toFixed(2)}$
              </span>
            </div>

            <Button
              asChild
              className="w-full bg-stone-900 text-stone-50 hover:bg-stone-800 rounded-none py-5 text-xs font-normal tracking-wide transition-colors"
            >
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
}
