"use server";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function login(prevState: unknown, formData: FormData) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (error) {
    return { error: "Invalid email or password" };
  }

  redirect("/");
}
export async function register(prevState: unknown, formData: FormData) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        full_name: formData.get("name") as string,
      },
    },
  });
  if (error) {
    return { error: "Could not create account, please try again" };
  }

  redirect("/login");
}

export async function logout() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut({ scope: "local" });

  if (error) {
    return { error: "Could not log out, please try again" };
  }

  redirect("/main");
}

export async function requestPasswordReset(
  prevState: unknown,
  formData: FormData,
) {
  const supabase = await createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(
    formData.get("email") as string,
    {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  );
  if (error) {
    return { error: "Could not send reset email, please try again" };
  }
  return { success: "Check your email for the reset link" };
}

export async function updatePassword(prevState: unknown, formData: FormData) {
  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser({
    password: formData.get("password") as string,
  });

  if (error) {
    return { error: "Could not send reset password, please try again" };
  }

  redirect("/login");
}
