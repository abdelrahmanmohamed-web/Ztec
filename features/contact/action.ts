"use server";

export type FormState = {
  success?: boolean;
  error?: string;
} | null;

export async function sendContactEmail(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const tenantEmail = formData.get("tenantEmail");

  if (!name || !email || !message || !tenantEmail) {
    return { error: "Please fill in all fields." };
  }

  try {
    return { success: true };
  } catch {
    return { error: "Failed to send message. Please try again." };
  }
}
