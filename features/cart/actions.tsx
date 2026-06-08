"use client";

import { useState, useEffect } from "react";
import { CartContext } from "./context/cart-context";
import { CartItem } from "./types";
import { Product } from "@/components/shared/types";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("minimal_cart");
      if (saved) setItems(JSON.parse(saved));
    } catch {
      console.error("Failed to load cart");
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem("minimal_cart", JSON.stringify(items));
    } catch (error) {
      console.error("Failed to save cart", error);
    }
  }, [items, isHydrated]);

  function addItem(product: Product) {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function decrementQuantity(id: string) {
    setItems((prev) => {
      const existingItem = prev.find((i) => i.id === id);
      if (!existingItem) return prev;
      if (existingItem.quantity === 1) {
        return prev.filter((i) => i.id !== id);
      }
      return prev.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity - 1 } : i,
      );
    });
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        decrementQuantity,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
