import MainButton from "@/components/shared/button";
import Image from "next/image";

export default function CtaSection() {
  return (
    <section className="px-6 py-24 max-w-312 mx-auto md:px-12 lg:px-16 bg-white space-y-24">
      
      {/* الجزء الأول: الصورة شمال والكلام يمين (في الشاشات الكبيرة) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* الصورة */}
        <div className="bg-gray-100 rounded-[20px] aspect-4/3 overflow-hidden relative border border-[#e6e6e6]">
          <Image
            src="/About-us/cta-1.jpg"
            alt="Premium Tech Selection"
            fill
            sizes="(max-w-[1024px]) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        {/* الكلام: تم تعديل الـ alignment والـ text للتوسيط الكامل، والزرار واخد self-center */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto lg:max-w-none">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-black mb-6 font-['Satoshi',sans-serif]">
            Premium Tech Selection
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8 font-['Satoshi',sans-serif]">
            Our pursuit of excellence involves extensive exploration of top-tier
            factories globally, ensuring our tech lineup mirrors the standards
            held by renowned brands. We forge strong partnerships with these
            facilities, prioritizing factors like sustainability and ethical
            production practices.
          </p>
          <MainButton text="Check our store" href="/products" />
        </div>
      </div>

      {/* الجزء الثاني: الكلام شمال والصورة يمين (في الشاشات الكبيرة) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* الصورة */}
        <div className="bg-gray-100 rounded-[20px] aspect-4/3 overflow-hidden relative border border-[#e6e6e6] lg:order-2">
          <Image
            src="/About-us/cta-2.jpg"
            alt="Timeless Tech Solutions"
            fill
            sizes="(max-w-[1024px]) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        {/* الكلام: تم تعديل الـ alignment والـ text للتوسيط الكامل، والزرار واخد self-center */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto lg:max-w-none lg:order-1">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-black mb-6 font-['Satoshi',sans-serif]">
            Timeless Tech Solutions
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8 font-['Satoshi',sans-serif]">
            At Etec, we eschew passing trends in favor of enduring value and
            utility. Our commitment? To offer tech solutions that seamlessly
            integrate into your life, promising years of reliable performance
            and timeless appeal.
          </p>
          <MainButton text="Check our contact" href="/contact" />
        </div>
      </div>

    </section>
  );
}