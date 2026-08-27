import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/shared/header/header";
import { Footer } from "@/components/shared/footer/footer";
import { CartButton } from "@/features/cart";
import { CartProvider } from "@/features/cart";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://etec-one.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Etec",
    template: "%s | Etec",
  },

  description:
    "Discover premium electronics including smartphones, headphones, smartwatches, and displays.",

  applicationName: "Etec",

  keywords: [
    "electronics",
    "ecommerce",
    "smartphones",
    "headphones",
    "smartwatches",
    "displays",
  ],

  authors: [
    {
      name: "Abdelrhman Mohamed",
      url: "https://www.abdelrhman.online",
    },
  ],

  creator: "Abdelrhman Mohamed",

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Etec",
    locale: "en_US",
    title: "Etec",
    description:
      "Discover premium electronics including smartphones, headphones, smartwatches, and displays.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Etec",
    description:
      "Discover premium electronics including smartphones, headphones, smartwatches, and displays.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <CartProvider>
          {children}
          <CartButton />
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
