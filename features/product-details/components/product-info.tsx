"use client";
import { ShieldCheck, ChevronDown, Box, Headset } from "lucide-react";
import { Product } from "@/components/shared/types";
import { useState } from "react";
import { AddToCart } from "./add-to-cart";
export function ProductInfo({ product }: { product: Product }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const menuItems = [
    {
      id: "warranty",
      label: "warranty",
      icon: <ShieldCheck size={20} />,
    },
    {
      id: "shipping",
      label: "shipping & delivery",
      icon: <Box size={20} />,
    },
    {
      id: "support",
      label: "support",
      icon: <Headset size={20} />,
    },
  ];

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-3 mt-4 w-full">
      <div className="flex flex-col gap-5 pt-2">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            {product.name}
          </h1>
          <p className="text-2xl font-semibold mt-3">${product.price}</p>
        </div>

        <div className="h-px bg-stone-200 w-full" />

        <div className="prose prose-stone text-stone-600 leading-relaxed">
          <p>{product.description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm mt-2">
        <span className="font-medium text-stone-900">Availability:</span>
        <span
          className={`font-medium px-2 py-1 rounded text-xs capitalize transition-colors duration-200
      ${
        product.stock > 0
          ? "text-green-700 bg-green-50 border border-green-200"
          : "text-red-700 bg-red-50 border border-red-200"
      }`}
        >
          {product.stock > 0 ? "in stock" : "out of stock"}
        </span>
      </div>

      <AddToCart product={product} />

      <p className="text-stone-400 text-center text-xs px-4 mt-1">
        Estimate delivery times: 3-6 days (International) Return within 45 days.
      </p>

      <ul className="divide-y divide-stone-200 mt-4">
        {menuItems.map((item) => {
          const isOpen = openSection === item.id;
          return (
            <li key={item.id} className="flex flex-col">
              <button
                onClick={() => toggleSection(item.id)}
                className="flex justify-between items-center text-stone-600 py-4 px-2 hover:bg-stone-50/50 transition-colors w-full"
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <p className="first-letter:uppercase font-medium">
                    {item.label}
                  </p>
                </div>
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 text-stone-400 ${isOpen ? "rotate-180 text-stone-900" : ""}`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-5 px-8 text-sm text-stone-500 leading-relaxed">
                    {item.id === "warranty" && (
                      <p>
                        Etec offers a two-year manufacturer warranty on all new
                        headphones purchased from authorized retailers in most
                        countries. Refurbished products purchased from
                        authorized retailers are covered by a one-year
                        manufacturer warranty. If you believe your product is
                        faulty and is within the warranty period, please fill
                        out this form to submit a warranty claim here. After
                        you’ve completed and submitted the warranty claim form
                        our customer service team will proceed with your claim
                        within two business days.
                      </p>
                    )}
                    {item.id === "shipping" && (
                      <p>
                        For all orders exceeding a value of 100USD shipping is
                        offered for free. Returns will be accepted for up to 10
                        days of Customer’s receipt or tracking number on unworn
                        items. You, as a Customer, are obliged to inform us via
                        email before you return the item.
                      </p>
                    )}
                    {item.id === "support" && (
                      <p>
                        Our support team is available 24/7 to help you with any
                        technical inquiries or issues regarding your Etec
                        products. Get in touch via live chat or email for fast
                        assistance.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
