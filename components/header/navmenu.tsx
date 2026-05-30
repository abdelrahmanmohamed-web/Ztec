"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { CircleUserRound } from "lucide-react";
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

export default function NavigationMenuDemo() {
  const pathname = usePathname();

  return (
    <NavigationMenu key={pathname}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              pathname.startsWith("/products") &&
                "bg-accent text-accent-foreground",
            )}
          >
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/products" title="All Products">
                Browse our full catalog.
              </ListItem>
              <ListItem href="/products/headphones" title="Headphones">
                Avoid the noise and listen useful books anywhere.
              </ListItem>
              <ListItem href="/products/displays" title="Displays">
                A crystal clear images and 4k videos.
              </ListItem>
              <ListItem href="/products/watches" title="Watches">
                Watch your time, once it goes it never comes back.
              </ListItem>
              <ListItem href="/products/phones" title="Phones">
                Small device but stronger than the Apollo program computer.
              </ListItem>
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
              pathname === "/faq" && "bg-accent text-accent-foreground",
            )}
          >
            <Link href="/faq">FAQ</Link>
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
            <Link href="/contact">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
