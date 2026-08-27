import { Login } from "@/features/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Sign in to your Ztecaccount to manage orders, cart, and your profile.",
};

export default function LoginPage() {
  return <Login />;
}
