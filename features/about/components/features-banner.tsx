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
    <section className="w-full bg-white flex flex-row flex-nowrap justify-center items-center gap-[10px] h-auto overflow-hidden relative p-4 md:p-[40px]">
      <div className="w-full lg:w-1 lg:flex-1 flex flex-col lg:flex-row flex-nowrap justify-center items-center gap-6 lg:gap-[24px] max-w-[1248px] h-auto lg:h-[140px] rounded-[20px] overflow-hidden relative py-6 px-4 md:px-12 lg:py-[24px] lg:px-[80px]">
        {features.map((f) => (
          <div
            key={f.label}
            className="w-full lg:w-1 lg:flex-1 h-full flex flex-row flex-nowrap justify-start items-center gap-[16px] overflow-hidden relative p-2 lg:p-[16px]"
          >
            <div className="w-[64px] h-[64px] flex flex-row flex-nowrap justify-center items-center gap-[10px] bg-white rounded-[16px] overflow-hidden shrink-0 relative p-0 border border-[#e6e6e6]">
              {f.icon}
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-[4px] overflow-hidden relative p-0">
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
