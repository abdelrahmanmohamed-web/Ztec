import Image from "next/image";
import Logo from "../header/logo";
import { FooterLinks, FooterSubscribe } from "./footer-client-elements";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200/60 dark:border-zinc-800/50 py-12 transition-colors duration-200">
      <div className="w-full px-4 max-w-7xl mx-auto flex flex-col gap-10">
        <div className="w-full flex justify-between items-center border-b border-zinc-200/60 dark:border-zinc-800/50 pb-8">
          <FooterSubscribe />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-sm">
              Selling premium products, designed to elevate your everyday
              experience.
            </p>
            <div className="flex gap-3">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="group w-9 h-9 bg-zinc-200/70 dark:bg-zinc-800 rounded-full flex items-center justify-center hover:bg-black dark:hover:bg-white transition-all duration-200"
              >
                <FaXTwitter
                  size={16}
                  className="text-zinc-700 dark:text-zinc-300 group-hover:text-white dark:group-hover:text-black transition-colors"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group w-9 h-9 bg-zinc-200/70 dark:bg-zinc-800 rounded-full flex items-center justify-center hover:bg-[#1877F2] dark:hover:bg-[#4299F7] transition-all duration-200"
              >
                <FaFacebookF
                  size={16}
                  className="text-zinc-700 dark:text-zinc-300 group-hover:text-white transition-colors"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group w-9 h-9 bg-zinc-200/70 dark:bg-zinc-800 rounded-full flex items-center justify-center hover:bg-[#E1306C] dark:hover:bg-[#F06292] transition-all duration-200"
              >
                <AiFillInstagram
                  size={18}
                  className="text-zinc-700 dark:text-zinc-300 group-hover:text-white transition-colors"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group w-9 h-9 bg-zinc-200/70 dark:bg-zinc-800 rounded-full flex items-center justify-center hover:bg-[#0077B5] dark:hover:bg-[#0EA5E9] transition-all duration-200"
              >
                <FaLinkedin
                  size={16}
                  className="text-zinc-700 dark:text-zinc-300 group-hover:text-white transition-colors"
                />
              </a>
            </div>
          </div>

          <FooterLinks />

          <div className="relative rounded-3xl overflow-hidden min-h-[220px] md:h-full w-full border border-zinc-200/50 dark:border-zinc-800/80 gray-scale dark:invert-[0.08] dark:contrast-[0.9]">
            <Image
              src="/location.png"
              alt="Location Map"
              fill
              className="object-cover dark:opacity-80"
              sizes="(max-w-7xl) 33vw, 100vw"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="capitalize py-1.5 px-4 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-xs text-white dark:text-zinc-900 shadow-lg font-medium">
                we are here
              </div>
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-zinc-900 dark:border-t-zinc-100" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
