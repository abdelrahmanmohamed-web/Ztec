"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Category } from "@/components/shared/types";

interface NavigationMenuDemoProps {
  categories: Category[];
}

export function NavigationMenuDemo({ categories }: NavigationMenuDemoProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");
  const isProductsPage = pathname.startsWith("/products");

  return (
    <NavigationMenu key={`${pathname}-${currentCategory}`}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(isProductsPage && "bg-accent text-accent-foreground")}
          >
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem
                href="/products"
                title="All Products"
                isActive={isProductsPage && !currentCategory}
              >
                Browse all our products.
              </ListItem>
              {categories.map((cat) => (
                <ListItem
                  key={cat.slug}
                  href={`/products?category=${cat.slug}`}
                  title={cat.name}
                  isActive={isProductsPage && currentCategory === cat.slug}
                >
                  {cat.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              pathname === "/about" && "bg-accent text-accent-foreground",
            )}
          >
            <Link href="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              pathname === "/faq" && "bg-accent text-accent-foreground ",
            )}
          >
            <Link href="/" className="line-through">FAQ</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              pathname === "/contact" && "bg-accent text-accent-foreground",
            )}
          >
            <Link href="/" className="line-through">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"li"> {
  href: string;
  title: string;
  isActive?: boolean;
}

function ListItem({
  title,
  children,
  href,
  isActive,
  className,
  ...props
}: ListItemProps) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            isActive && "bg-accent/80 text-accent-foreground font-medium",
            className,
          )}
        >
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
