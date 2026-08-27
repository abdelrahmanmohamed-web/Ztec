import { AboutPage } from "@/features/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Ztecand our mission to deliver premium electronics with a modern shopping experience.",
};

export default function About() {
  return <AboutPage />;
}
