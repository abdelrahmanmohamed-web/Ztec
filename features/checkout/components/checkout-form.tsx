"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/features/cart";

export function CheckoutForm() {
  const { items, totalPrice } = useCart();

  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
    const city = formData.get("city") as string;

    const itemsText = items
      .map(
        (item) =>
          `- *المنتج:* ${item.name}\n` +
          `  > *الكمية:* ${item.quantity}\n` +
          `  > *السعر:* $${(item.price * item.quantity).toFixed(2)}`,
      )
      .join("\n\n");

    const message = encodeURIComponent(
      `*--- طلب جديد من الموقع ---*\n\n` +
        `*بيانات العميل:*\n` +
        `- الاسم: ${firstName} ${lastName}\n` +
        `- رقم الهاتف: ${phone}\n` +
        `- العنوان: ${address}, ${city}\n\n` +
        `*تفاصيل المنتجات:*\n\n` +
        `${itemsText}\n\n` +
        `--------------------------------\n` +
        `*الإجمالي الكلي:* EGP ${totalPrice.toFixed(2)}\n` +
        `--------------------------------\n\n` +
        `برجاء تأكيد الطلب وتحديد موعد التوصيل.`,
    );

    const whatsappNumber = "201553056688";

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <form onSubmit={handleWhatsAppSubmit} className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-sm font-medium uppercase tracking-wider text-stone-900">
          Shipping & Contact Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label
              htmlFor="firstName"
              className="text-[11px] uppercase tracking-wider text-stone-500 font-light"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="w-full bg-stone-50 border border-stone-200 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-stone-900 transition-colors"
            />
          </div>
          <div className="space-y-1">
            <label
              htmlFor="lastName"
              className="text-[11px] uppercase tracking-wider text-stone-500 font-light"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="w-full bg-stone-50 border border-stone-200 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-stone-900 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label
            htmlFor="phone"
            className="text-[11px] uppercase tracking-wider text-stone-500 font-light"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="e.g., 01000000000"
            className="w-full bg-stone-50 border border-stone-200 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-stone-900 transition-colors"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="address"
            className="text-[11px] uppercase tracking-wider text-stone-500 font-light"
          >
            Shipping Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            required
            placeholder="Street name, Building number"
            className="w-full bg-stone-50 border border-stone-200 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-stone-900 transition-colors"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="city"
            className="text-[11px] uppercase tracking-wider text-stone-500 font-light"
          >
            City / Governorate
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            className="w-full bg-stone-50 border border-stone-200 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-stone-900 transition-colors"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-stone-900 text-stone-50 hover:bg-stone-800 rounded-none py-6 text-xs font-normal tracking-wide transition-colors"
      >
        Complete Order via WhatsApp
      </Button>
    </form>
  );
}
