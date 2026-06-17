"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCloseOnNavigate } from "@/components/shared/hooks/use-close-on-navigate";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export function MobileMenu() {
  const { isOpen, setIsOpen } = useCloseOnNavigate();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-full"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-full max-w-xs bg-stone-50 border-r border-stone-200 text-stone-900 p-0 flex flex-col"
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Access main store sections and pages.
        </SheetDescription>

        <nav className="flex flex-col gap-6 mt-16 px-6 text-sm font-normal tracking-wide">
          <Link
            href="/products"
            className="pb-2 border-b border-stone-100 text-stone-600 hover:text-stone-900 transition-colors"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="pb-2 border-b border-stone-100 text-stone-600 hover:text-stone-900 transition-colors"
          >
            About
          </Link>
          <Link
            href="/"
            className="line-through pb-2 border-b border-stone-100 text-stone-600 hover:text-stone-900 transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/"
            className="line-through pb-2 border-b border-stone-100 text-stone-600 hover:text-stone-900 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
