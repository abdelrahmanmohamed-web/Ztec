"use client";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { requestReset } from "../actions";

import Link from "next/link";

import { useActionState } from "react";

export function RequestReset() {
  const [state, formActions, isPending] = useActionState(requestReset, {
    error: null,
    success: null,
  });

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-50 p-4 font-sans dark:bg-black md:p-8">
      <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 md:p-10">
        <div className="mb-6 flex flex-col items-center justify-center gap-2 md:mb-8">
          <Logo size={58} />
          <h1 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-2xl">
            Reset your password
          </h1>
        </div>

        <form action={formActions}>
          <FieldSet className="w-full">
            <FieldGroup className="flex flex-col gap-5">
              {state?.error && (
                <div className="rounded-lg bg-red-50 p-3 text-sm font-medium text-red-600 dark:bg-red-950/30 dark:text-red-400">
                  {state.error}
                </div>
              )}

              {state?.success && (
                <div className="rounded-lg bg-green-50 p-3 text-sm font-medium text-green-600 dark:bg-green-950/30 dark:text-green-400">
                  {state.success}
                </div>
              )}

              <Field className="flex flex-col gap-1.5">
                <FieldLabel htmlFor="email">Email Address</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="w-full"
                  required
                />
                <FieldDescription>
                  We{"'"}ll send a password reset link to this email.
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldSet>

          <div className="mt-6 flex flex-col gap-4">
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Sending link..." : "Send reset link"}
            </Button>

            <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
              Remember your password?{" "}
              <Link
                href="/login"
                className="font-medium text-zinc-950 underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-zinc-700 hover:decoration-zinc-700 dark:text-white dark:hover:text-zinc-300 dark:hover:decoration-white"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
