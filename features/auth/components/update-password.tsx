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
import { updatePassword } from "../actions";
import { useActionState } from "react";

export function UpdatePassword() {
  const [state, formActions, isPending] = useActionState(updatePassword, {
    error: null,
  });

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-50 p-4 font-sans dark:bg-black md:p-8">
      <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 md:p-10">
        <div className="mb-6 flex flex-col items-center justify-center gap-2 md:mb-8">
          <Logo/>
          <h1 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-2xl">
            Choose new password
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

              <Field className="flex flex-col gap-1.5">
                <FieldLabel htmlFor="password">New Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full"
                  required
                />
                <FieldDescription>
                  Must be at least 6 characters long.
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldSet>

          <div className="mt-6 flex flex-col gap-4">
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Updating..." : "Update password"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
