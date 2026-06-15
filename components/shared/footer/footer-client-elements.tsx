"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkItem {
  name: string;
  path: string;
}

export function FooterLinks() {
  const pathname = usePathname();
  const linkStyles =
    "capitalize hover:text-zinc-800 dark:hover:text-zinc-200 active:text-zinc-800 transition-colors duration-250 cursor-pointer";

  const lftSide: LinkItem[] = [
    { name: "home", path: "/" },
    { name: "shop", path: "/products" },
    { name: "about", path: "/about" },
    // { name: "blog", path: "/blog" },
  ];
  const rgtSide: LinkItem[] = [
    // { name: "faq", path: "/faq" },
    // { name: "contact", path: "/contact" },
    { name: "product", path: "/product" },
    { name: "404", path: "/404" },
  ];

  return (
    <div className="flex justify-start md:justify-center items-center gap-12 text-zinc-500 dark:text-zinc-400 flex-2">
      <div className="flex flex-col gap-4">
        <p className="capitalize font-semibold text-zinc-800 dark:text-zinc-200">
          pages
        </p>
        {lftSide.map((p) => (
          <Link
            key={p.name}
            href={p.path}
            className={`${linkStyles} ${pathname === p.path ? "text-zinc-950 dark:text-white font-semibold" : ""}`}
          >
            {p.name}
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <p className="capitalize font-semibold text-zinc-800 dark:text-zinc-200">
          support
        </p>
        {rgtSide.map((p) => (
          <Link
            key={p.name}
            href={p.path}
            className={`${linkStyles} ${pathname === p.path ? "text-zinc-950 dark:text-white font-semibold" : ""}`}
          >
            {p.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
