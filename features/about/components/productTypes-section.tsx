import React from "react";
import Image from "next/image";

export default function ProductTypesSection() {
  const products = [
    {
      id: 1,
      title: "Exclusive Range",
      description:
        "Immerse yourself in our meticulously curated selection, backed by over 20 years of industry experience.",
      imageSrc: "/About-us/product-1.jpg",
    },
    {
      id: 2,
      title: "Enduring Innovation",
      description:
        "Our products transcend fleeting trends, embodying timeless innovation that ensures they remain relevant and cutting-edge for years.",
      imageSrc: "/About-us/product-2.jpg",
    },
    {
      id: 3,
      title: "Ethical Sourcing",
      description:
        "Shop with confidence knowing that our products are sourced from reputable factories worldwide, adhering to stringent compliance standards.",
      imageSrc: "/About-us/product-3.jpg",
    },
  ];

  return (
    <section className="px-6 py-8 max-w-[1248px] mx-auto md:px-12 lg:px-16 bg-white my-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group flex flex-col">
            <div className="bg-gray-100 rounded-[20px] aspect-[4/5] mb-4 overflow-hidden relative border border-[#e6e6e6] transition-opacity duration-200 group-hover:opacity-95">
              <Image
                src={product.imageSrc}
                alt={product.title}
                fill
                sizes="(max-w-[768px]) 100vw, (max-w-[1024px]) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <h4 className="text-lg font-medium text-black mb-2 font-['Satoshi',sans-serif]">
              {product.title}
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed font-['Satoshi',sans-serif]">
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}