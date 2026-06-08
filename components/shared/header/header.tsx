
import { Logo } from "../logo";
import { NavigationMenuDemo } from "./nav-menu";
import { ModeToggle } from "./mode-toggle";
import { MobileMenu } from "./mobile-menu";
import { getCategories } from "@/features/products";

export async function Header() {
  const categories = await getCategories()
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b bg-background/80">
      <div className="max-w-screen-xl mx-auto my-4 px-6 flex items-center justify-between">
        <Logo />

        {/* Desktop View */}
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenuDemo categories = {categories}/>
          <ModeToggle />
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden items-center gap-2">
          <ModeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
