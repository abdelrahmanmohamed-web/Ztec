import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ArticlesSection() {
  const articlesData = [
    {
      id: 1,
      title: "The Future of Wearable Tech: Trends and Innovations to Watch",
      imageUrl: "/home/articles/wearable.jpg",
    },
    {
      id: 2,
      title: "The Rise of Smart Home Devices: Transforming the Way We Live",
      imageUrl: "/home/articles/smartHome.jpg",
    },
    {
      id: 3,
      title: "Gaming Gadgets: Revolutionizing Entertainment and Beyond",
      imageUrl: "/home/articles/entertainment.jpg",
    },
  ];

  return (
    <section className="w-full py-12 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header Container */}
      <div className="flex justify-between items-center mb-8 gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Our articles and news
        </h2>
        <Button
          asChild
          size="lg"
className="rounded-full border border-zinc-200 bg-white px-8 h-12 text-base font-medium text-black shadow-sm transition-colors duration-300 hover:bg-black hover:text-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-white dark:hover:text-black shrink-0 sm:self-start md:self-auto"        >
          <Link href="/products">Check all</Link>
        </Button>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articlesData.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className="group w-full"
          >
            <Card
              className="w-full h-[400px] bg-stone-100 rounded-3xl border-none shadow-none overflow-hidden relative
                         transition-all duration-300 ease-in-out
                         md:group-hover:scale-[1.01] md:group-hover:saturate-[1.15] md:group-hover:contrast-[1.05]
                         active:scale-[1.01]"
            >
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-w-md) 100vw, 33vw"
                priority={article.id === 1}
              />
            </Card>

            <div className="my-4 flex justify-between items-start px-2 gap-4">
              <h3 className="text-lg font-normal line-clamp-2">
                {article.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
