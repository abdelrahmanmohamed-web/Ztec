"use client";

import { useState, useEffect } from "react";
import Logo from "./logo";
import NavigationMenuDemo from "./navmenu";
import ModeToggle from "@/components/header/toggleMode";
import UserMenu from "./user-menu";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b bg-background/80">
      <div className="max-w-screen-xl mx-auto my-4 px-6 flex items-center justify-between">
        <Logo />

        {/* Desktop View */}
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenuDemo />
          {mounted && <UserMenu />}
          {mounted && <ModeToggle />}
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden items-center gap-2">
          {mounted && <ModeToggle />}
          {mounted && <UserMenu />}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
