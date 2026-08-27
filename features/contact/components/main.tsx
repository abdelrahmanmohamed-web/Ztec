import { Phone, Mail } from "lucide-react";
import { ContactInfoCard } from "./contact-info-card";
import { ContactForm } from "./contact-form";

export function Main() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 lg:py-24 font-sans bg-background text-foreground">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl lg:text-5xl font-medium tracking-tight mb-4 text-foreground">
          Contact us
        </h1>
        <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
          We{"'"}re here to assist you with any inquiries, feedback, or
          assistance you may need. Whether you have questions about products,
          orders, or general inquiries, our dedicated customer support team is
          ready to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <ContactInfoCard
            icon={Phone}
            title="Phone number"
            value="00201553056688"
            description="Call our team directly to answer technical questions or schedule an appointment."
          />

          <ContactInfoCard
            icon={Mail}
            title="E-mail"
            value="dev.abdelrhman.mohammad@gmai.com"
            description="Use email to provide information about the project. We will respond as soon as possible."
          />
        </div>

        <div className="lg:col-span-7">
          <ContactForm tenantEmail="" />
        </div>
      </div>
    </main>
  );
}
