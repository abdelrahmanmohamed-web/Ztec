import { RequestReset } from "@/features/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password",
  description:
    "Request a password reset to regain access to your Etec account.",
};

export default function RequestResetPage() {
  return <RequestReset />;
}
