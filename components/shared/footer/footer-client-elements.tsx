"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkItem {
  name: string;
  path?: string;
  href?: string;
}

export function FooterLinks() {
  const pathname = usePathname();
  const linkStyles =
    "capitalize hover:text-zinc-800 dark:hover:text-zinc-200 active:text-zinc-800 transition-colors duration-250 cursor-pointer";

  const lftSide: LinkItem[] = [
    { name: "home", path: "/" },
    {
      name: "products",
      path: `products}`,
    },
    { name: "about", path: "/about" },
  ];
  const rgtSide: LinkItem[] = [
    { name: "faq", path: "/faq" },
    { name: "contact", path: "/contact" },
    { name: "Email", href: `mailto:Dev.abdelrhmanmohammad@gmail.com` },
  ];

  return (
    <div className="flex justify-start md:justify-center items-center gap-12 text-zinc-500 dark:text-zinc-400 flex-2">
      <div className="flex flex-col gap-4">
        <p className="capitalize font-semibold text-zinc-800 dark:text-zinc-200">
          pages
        </p>
        {lftSide.map((p) =>
          p.path ? (
            <Link
              key={p.name}
              href={p.path}
              className={`${linkStyles} ${pathname === p.path ? "text-zinc-950 dark:text-white font-semibold" : ""}`}
            >
              {p.name}
            </Link>
          ) : (
            <a
              key={p.name}
              href={p.href}
              className={linkStyles}
              target="_blank"
            >
              {p.name}
            </a>
          ),
        )}
      </div>

      <div className="flex flex-col gap-4">
        <p className="capitalize font-semibold text-zinc-800 dark:text-zinc-200">
          support
        </p>
        {rgtSide.map((p) =>
          p.path ? (
            <Link
              key={p.name}
              href={p.path}
              className={`${linkStyles} ${pathname === p.path ? "text-zinc-950 dark:text-white font-semibold" : ""}`}
            >
              {p.name}
            </Link>
          ) : (
            <a
              key={p.name}
              href={p.href}
              className={linkStyles}
              target="_blank"
            >
              {p.name}
            </a>
          ),
        )}
      </div>
    </div>
  );
}
