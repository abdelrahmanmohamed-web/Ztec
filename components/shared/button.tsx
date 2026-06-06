import { Button } from "../ui/button";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
}

export default function MainButton({ text, href }: ButtonProps) {
  return (
    <Button
      asChild
      size="lg"
      className="rounded-full border border-zinc-200 bg-white px-8 py-6 text-base font-medium text-black shadow-sm transition-colors duration-300 hover:bg-black hover:text-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-white dark:hover:text-black shrink-0"
    >
      <Link href={href}>{text}</Link>
    </Button>
  );
}
