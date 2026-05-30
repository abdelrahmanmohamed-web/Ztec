"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
    { name: "shop", path: "/shop" },
    { name: "about", path: "/about" },
    { name: "cart", path: "/cart" },
  ];
  const rgtSide: LinkItem[] = [
    { name: "faq", path: "/faq" },
    { name: "contact", path: "/contact" },
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

export function FooterSubscribe() {
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex gap-2 w-full max-w-md"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="px-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 w-full focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 text-zinc-900 dark:text-zinc-100 text-sm placeholder-zinc-400 dark:placeholder-zinc-500"
      />
      <button
        type="submit"
        className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm px-5 py-2 rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors font-medium"
      >
        Subscribe
      </button>
    </form>
  );
}
