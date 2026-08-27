import { Home } from "@/features/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover premium electronics including smartphones, headphones, smartwatches, and displays at Ztec.",
};

export default function HomePage() {
  return <Home />;
}
