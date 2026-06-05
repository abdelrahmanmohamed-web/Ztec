import Image from "next/image";
import Link from "next/link";

export function Logo({size = 48}) {
  return (
    <Link href="/">
      <div className="flex items-center gap-1 cursor-pointer">
        <Image
          src="/logo.png"
          alt="etec logo"
          width={size}
          height={size}
          className="dark:invert"
        />
        <span className="font-semibold text-3xl md:text-2xl">etec</span>
      </div>
    </Link>
  );
}
