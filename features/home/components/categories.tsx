import Image from "next/image";
import Link from "next/link";

export function Categories() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            Browse by categories
          </h1>
          <h2 className="text-xl">
            Explore our diverse range of categories tailored to meet your
            specific needs and interests.
          </h2>
        </div>
      </div>

      {/* Categories Grid System */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[600px]">
        {/* Left Side: Single Block */}
        <Link
          className="relative group overflow-hidden rounded-xl bg-neutral-100 block h-[300px] md:h-full transition-all duration-300 shadow-sm border border-neutral-200"
          href="/products"
        >
          <Image
            src="/home/categories/watches.png"
            alt="watches"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 m-auto mix-blend-multiply" 
          />
          {/* Default state is slightly dimmed, full dark overlay on hover */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500 p-6 flex flex-col justify-end text-white">
            <h2 className="text-2xl font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              All products
            </h2>
            <p className="text-sm font-medium text-neutral-200 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
              Discover endless possibilities with our All Products category.
              Shop now for everything you need in one convenient place.
            </p>
          </div>
        </Link>

        {/* Right Side: Container Grid */}
        <div className="grid grid-rows-1 md:grid-rows-2 gap-4 h-auto md:h-full">
          {/* Right Top Block */}
          <Link
            className="relative group overflow-hidden rounded-xl bg-neutral-100 block h-[200px] md:h-full transition-all duration-300 shadow-sm border border-neutral-200"
            href="/products"
          >
            <Image
              src="/home/categories/displays.png"
              alt="displays"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 m-auto mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500 p-6 flex flex-col justify-end text-white">
              <h2 className="text-2xl font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                Displays
              </h2>
              <p className="text-sm font-medium text-neutral-200 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                Experience crystal-clear clarity and vibrant visuals with our
                Displays.
              </p>
            </div>
          </Link>

          {/* Right Bottom Blocks: Responsive Grid (Stacked on Mobile, 2 Columns on Desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-auto md:h-full">
            {/* Right Bottom Left */}
            <Link
              href="/products"
              className="relative group overflow-hidden rounded-xl bg-neutral-100 block h-[200px] md:h-full transition-all duration-300 shadow-sm border border-neutral-200"
            >
              <Image
                src="/home/categories/headphones.png"
                alt="headphones"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 m-auto mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500 p-6 flex flex-col justify-end text-white">
                <h2 className="text-2xl font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  Headphones
                </h2>
                <p className="text-sm font-medium text-neutral-200 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                  Immerse yourself in high-quality sound and comfort.
                </p>
              </div>
            </Link>

            {/* Right Bottom Right */}
            <Link
              href="/products"
              className="relative group overflow-hidden rounded-xl bg-neutral-100 block h-[200px] md:h-full transition-all duration-300 shadow-sm border border-neutral-200"
            >
              <Image
                src="/home/categories/phones.png"
                alt="phones"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 m-auto mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500 p-6 flex flex-col justify-end text-white">
                <h2 className="text-2xl font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  Phones
                </h2>
                <p className="text-sm font-medium text-neutral-200 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                  Stay connected with the latest smartphones and mobile tech.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
