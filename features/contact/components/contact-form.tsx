"use client";

import { useActionState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { sendContactEmail } from "../action";

export function ContactForm({ tenantEmail }: { tenantEmail: string }) {
  const [state, formAction, isPending] = useActionState(sendContactEmail, null);

  if (state?.success) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-muted/30 border border-border rounded-xl">
        <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-medium mb-2 text-foreground">
          Message Sent Successfully!
        </h3>
        <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-6">
          Thank you for reaching out. We have received your email and will
          respond as soon as possible.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="text-xs uppercase tracking-wider font-semibold text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-muted/30 border border-border rounded-xl p-8 lg:p-10 flex flex-col h-full">
      <form action={formAction} className="flex flex-col h-full gap-6">
        <input type="hidden" name="tenantEmail" value={tenantEmail} />

        {state?.error && (
          <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg">
            {state.error}
          </div>
        )}

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          />
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <label
            htmlFor="message"
            className="text-sm font-medium text-foreground"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="How can we help you?"
            className="w-full h-full min-h-35 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3.5 rounded-lg hover:opacity-90 transition-opacity mt-auto disabled:opacity-50"
        >
          {isPending ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
          <span>{isPending ? "Sending..." : "Send Message"}</span>
        </button>
      </form>
    </div>
  );
}
