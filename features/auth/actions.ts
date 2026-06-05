"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { z } from "zod";

export type ActionState = {
  error?: string | null;
  success?: string | null;
} | void;

const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

const RegisterSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  name: z.string().min(1, "Name is required"),
});

const RequestResetSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const UpdatePasswordSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function login(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const submission = LoginSchema.safeParse(Object.fromEntries(formData));

  if (!submission.success) {
    return { error: submission.error.issues[0].message };
  }

  const supabase = await createClient();

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: submission.data.email,
      password: submission.data.password,
    });

    if (error) return { error: "Invalid email or password" };
  } catch (err) {
    return { error: "An unexpected error occurred. Please try again." };
  }

  redirect("/");
}

export async function logout(): Promise<{ error: string } | void> {
  const supabase = await createClient();

  try {
    const { error } = await supabase.auth.signOut({ scope: "local" });
    if (error) return { error: "Could not log out, please try again" };
  } catch (err) {
    return { error: "An unexpected error occurred. Please try again." };
  }

  redirect("/");
}

export async function register(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const submission = RegisterSchema.safeParse(Object.fromEntries(formData));

  if (!submission.success) {
    return { error: submission.error.issues[0].message };
  }

  const supabase = await createClient();

  try {
    const { error } = await supabase.auth.signUp({
      email: submission.data.email,
      password: submission.data.password,
      options: {
        data: {
          full_name: submission.data.name,
        },
      },
    });

    if (error) {
      if (error.code === "user_already_exists") {
        return { error: "This email is already registered." };
      }
      return { error: "Could not create account, please try again" };
    }
  } catch (err) {
    return { error: "An unexpected error occurred. Please try again." };
  }

  redirect("/login");
}

export async function requestReset(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const submission = RequestResetSchema.safeParse(Object.fromEntries(formData));

  if (!submission.success) {
    return { error: submission.error.issues[0].message };
  }

  const supabase = await createClient();

  try {
    const { error } = await supabase.auth.resetPasswordForEmail(
      submission.data.email,
      {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      },
    );

    if (error) return { error: "Could not send reset email, please try again" };
    return { success: "Check your email for the reset link" };
  } catch (err) {
    return { error: "An unexpected error occurred. Please try again." };
  }
}

export async function updatePassword(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const submission = UpdatePasswordSchema.safeParse(
    Object.fromEntries(formData),
  );

  if (!submission.success) {
    return { error: submission.error.issues[0].message };
  }

  const supabase = await createClient();

  try {
    const { error } = await supabase.auth.updateUser({
      password: submission.data.password,
    });

    if (error)
      return { error: "Could not send reset password, please try again" };
  } catch (err) {
    return { error: "An unexpected error occurred. Please try again." };
  }

  redirect("/login");
}
