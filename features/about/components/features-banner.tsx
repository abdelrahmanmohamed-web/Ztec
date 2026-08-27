import { Truck, CreditCard, Undo2 } from "lucide-react";

export default function FeaturesBanner() {
  const features = [
    {
      label: "Free Shipping",
      feature: "$24+ orders ship free",
      icon: <Truck size={32} className="text-black" />,
    },
    {
      label: "Secure Payments",
      feature: "Trusted payment options",
      icon: <CreditCard size={32} className="text-black" />,
    },
    {
      label: "45 Days Free Return",
      feature: "Easy, risk-free returns",
      icon: <Undo2 size={32} className="text-black" />,
    },
  ];

  return (
    <section className="w-full bg-white flex flex-row flex-nowrap justify-center items-center gap-2.5 h-auto overflow-hidden relative p-4 md:p-10">
      <div className="w-full lg:w-1 lg:flex-1 flex flex-col lg:flex-row flex-nowrap justify-center items-center gap-6 lg:gap-6 max-w-312 h-auto lg:h-35 rounded-[20px] overflow-hidden relative py-6 px-4 md:px-12 lg:py-6 lg:px-20">
        {features.map((f) => (
          <div
            key={f.label}
            className="w-full lg:w-1 lg:flex-1 h-full flex flex-row flex-nowrap justify-start items-center gap-4 overflow-hidden relative p-2 lg:p-4"
          >
            <div className="w-16 h-16 flex flex-row flex-nowrap justify-center items-center gap-2.5 bg-white rounded-4 overflow-hidden shrink-0 relative p-0 border border-[#e6e6e6]">
              {f.icon}
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-1 overflow-hidden relative p-0">
              <p className="w-full text-base font-medium text-black tracking-tight font-['Satoshi',sans-serif] whitespace-normal">
                {f.label}
              </p>
              <p className="w-full text-sm text-gray-500 font-['Satoshi',sans-serif] whitespace-normal leading-normal">
                {f.feature}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
