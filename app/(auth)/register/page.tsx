import { Register } from "@/features/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account",
  description:
    "Create your Etec account to enjoy a faster checkout and order tracking.",
};

export default function RegisterPage() {
  return <Register />;
}
