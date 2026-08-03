import { UpdatePassword } from "@/features/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Password",
  description:
    "Choose a new password to secure your Etec account.",
};

export default function UpdatePasswordPage() {
  return <UpdatePassword />;
}
