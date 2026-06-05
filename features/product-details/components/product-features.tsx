import { Truck, CreditCard, Undo2, ImageOff } from "lucide-react";

export function ProductFeatures() {
  const features = [
    {
      label: "Free Shipping",
      feature: "$24+ orders ship free",
      icon: <Truck size={24} className="text-stone-700" />,
    },
    {
      label: "Secure Payments",
      feature: "Trusted payment options",
      icon: <CreditCard size={24} className="text-stone-700" />,
    },
    {
      label: "45 Days Free Return",
      feature: "Easy, risk-free returns",
      icon: <Undo2 size={24} className="text-stone-700" />,
    },
  ];

  const secondaryFeatures = [
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

  return (
    <div className="mt-12 space-y-12 w-full">
      <div className="flex flex-col md:flex-col-reverse gap-6 w-full">
        <div className="h-80 md:h-[500px] w-full rounded-3xl bg-stone-100 border border-stone-200/60 flex items-center justify-center text-stone-400">
          <ImageOff size={40} className="stroke-[1.5]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 bg-stone-100 rounded-3xl p-6 gap-6 md:gap-8 border border-stone-200/40">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 p-2"
            >
              <div className="bg-white rounded-xl p-3.5 w-fit shadow-sm border border-stone-200/40 shrink-0">
                {f.icon}
              </div>
              <div className="space-y-1 md:pt-0.5">
                <p className="font-semibold text-stone-900 text-base">
                  {f.label}
                </p>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {f.feature}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {secondaryFeatures.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-4 w-full">
              <div className="aspect-square w-full rounded-2xl bg-stone-100 border border-stone-200/60 flex items-center justify-center text-stone-400">
                <ImageOff size={32} className="stroke-[1.5]" />
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
          );
        })}
      </div>
    </div>
  );
}