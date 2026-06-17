"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkItem {
  name: string;
  path: string;
  disabled: boolean;
}

export function FooterLinks() {
  const pathname = usePathname();
  const linkStyles =
    "capitalize hover:text-zinc-800 dark:hover:text-zinc-200 active:text-zinc-800 transition-colors duration-250 cursor-pointer";

  const lftSide: LinkItem[] = [
    { name: "home", path: "/", disabled: false },
    { name: "products", path: "/products", disabled: false },
    { name: "about", path: "/about", disabled: false },
    { name: "blog", path: "/blog", disabled: true },
  ];
  const rgtSide: LinkItem[] = [
    { name: "faq", path: "/faq", disabled: true },
    { name: "contact", path: "/contact", disabled: true },
    { name: "product", path: "/product", disabled: true },
    { name: "404", path: "/404", disabled: false },
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
            href={p.disabled ? "/" : p.path}
            className={`${linkStyles} ${p.disabled && " text-grey-400 line-through"} ${pathname === p.path ? "text-zinc-950 dark:text-white font-semibold" : ""}`}
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
            href={p.disabled ? "/" : p.path}
            className={`${linkStyles} ${p.disabled && " line-through"} ${pathname === p.path ? " text-zinc-950 dark:text-white font-semibold" : ""}`}
          >
            {p.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
