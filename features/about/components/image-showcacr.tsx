import Image from "next/image";

export default function ImageShowcase() {
  return (
    <section className="w-full bg-white flex flex-row flex-nowrap justify-center items-center gap-[10px] pt-[16px] px-[40px] pb-0 overflow-visible relative">
      <div className="w-full max-w-[1248px] flex flex-row flex-nowrap justify-center items-center overflow-visible relative">
        <div className="flex-1 w-full h-[400px] sm:h-[450px] md:h-[550px] lg:h-[671px] rounded-[20px] overflow-hidden relative border border-[#e6e6e6]">
          <Image
            src="/About-us/1.jpg"
            alt="premium showcase lineup"
            width={1248}
            height={671}
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
