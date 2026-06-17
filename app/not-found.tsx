import Link from "next/link";
import MainButton from "@/components/shared/button";

export default function NotFound() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-center py-12 px-4 max-w-7xl mx-auto text-center">
      <div className="space-y-6 max-w-lg mx-auto">
        <h1 className="text-8xl md:text-9xl font-bold tracking-tighter text-stone-200 select-none">
          404
        </h1>
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-stone-900">
            Page not found
          </h2>
          <p className="text-stone-500 text-base max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            might have been moved or deleted.
          </p>
        </div>
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <MainButton text="Go back home" href="/" />
          <Link
            href="/blogs"
            className="text-sm font-medium text-stone-600 hover:text-stone-950 transition-colors duration-200 underline underline-offset-4"
          >
            Read our blog
          </Link>
        </div>
      </div>
    </section>
  );
}
