import { Product } from "@/components/shared/types";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  decrementQuantity: (id: string) => void;
  removeItem: (id: string) => void;
  totalItems: number;
  subTotalPrice: number;
  taxRate: number;
  taxes: number;
  totalPrice: number;
}
