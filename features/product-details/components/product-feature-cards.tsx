import { CreditCard, Truck, Undo2 } from "lucide-react";
import { ProductFeatureImage } from "./product-feature-image";

const serviceFeatures = [
  {
    label: "Free Shipping",
    feature: "$24+ orders ship free",
    Icon: Truck,
  },
  {
    label: "Secure Payments",
    feature: "Trusted payment options",
    Icon: CreditCard,
  },
  {
    label: "45 Days Free Return",
    feature: "Easy, risk-free returns",
    Icon: Undo2,
  },
];

const productHighlights = [
  {
    title: "Crystal Clear Visuals",
    desc: "Experience stunning clarity and vibrant colors on the Apple Display SE 3, bringing your content to life like never before.",
  },
  {
    title: "Seamless Connectivity",
    desc: "Effortlessly connect to your Mac, iPad, or other devices with Thunderbolt and USB-C ports for enhanced productivity.",
  },
  {
    title: "Sleek Design",
    desc: "With its slim profile and edge-to-edge glass, the eDisplay adds a modern touch to any workspace while maximizing your viewing area.",
  },
];

export function ProductServiceFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 bg-stone-100 rounded-3xl p-6 gap-6 md:gap-8 border border-stone-200/40">
      {serviceFeatures.map(({ label, feature, Icon }) => (
        <div
          key={label}
          className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 p-2"
        >
          <div className="bg-white rounded-xl p-3.5 w-fit shadow-sm border border-stone-200/40 shrink-0">
            <Icon size={24} className="text-stone-700" />
          </div>
          <div className="space-y-1 md:pt-0.5">
            <p className="font-semibold text-stone-900 text-base">{label}</p>
            <p className="text-sm text-stone-500 leading-relaxed">{feature}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProductHighlightCards({
  category,
  images,
}: {
  category?: string;
  images: string[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      {productHighlights.map((item, index) => (
        <div key={item.title} className="flex flex-col gap-4 w-full">
          <div className="relative aspect-square w-full rounded-2xl bg-stone-100 border border-stone-200/60 flex items-center justify-center text-stone-400 overflow-hidden">
            <ProductFeatureImage
              src={images[index + 1]}
              alt={`${item.title} for ${category ?? "product"}`}
              size={32}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="px-1 flex-1 flex flex-col gap-2">
            <h3 className="text-xl font-bold tracking-tight text-stone-900">
              {item.title}
            </h3>
            <p className="text-sm text-stone-500 font-medium leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
