import { Main } from "@/features/faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Discover premium electronics including smartphones, headphones, smartwatches, and displays at Ztec.",
};

export default function FaqPage() {
  return <Main />;
}
