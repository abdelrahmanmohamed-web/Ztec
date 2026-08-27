import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MainButton from "@/components/shared/button";

type FaqEntry = {
  question: string;
  answer: string;
};

type FaqCategory = {
  title: string;
  items: FaqEntry[];
};

const defaultCategorizedFaqs: FaqCategory[] = [
  {
    title: "Orders & Payment",
    items: [
      {
        question: "How do I place an order?",
        answer:
          "Simply browse our products, choose what you'd like to purchase, and proceed. You'll be redirected to WhatsApp with your selected items pre-filled so you can easily confirm your order with us.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We offer flexible payment options including Cash on Delivery (COD) and mobile wallets (such as InstaPay or Vodafone Cash). Payment details are confirmed directly with you on WhatsApp.",
      },
      {
        question: "Can I modify or cancel my order?",
        answer:
          "Yes, as long as your order has not been dispatched yet. Just message us on WhatsApp as soon as possible, and we'll update or cancel your order right away.",
      },
      {
        question: "Do I need to create an account to order?",
        answer:
          "No account required. You can browse and complete your purchase directly through WhatsApp in a few simple steps.",
      },
    ],
  },
  {
    title: "Shipping & Delivery",
    items: [
      {
        question: "How long does delivery take?",
        answer:
          "Standard delivery typically takes between 2 to 5 business days depending on your location. We will provide you with an exact delivery timeframe during order confirmation.",
      },
      {
        question: "How can I track my shipment?",
        answer:
          "Once your order is out for delivery, our customer service team will send you status updates directly via WhatsApp.",
      },
      {
        question: "What should I do if my delivery is delayed?",
        answer:
          "If your package is taking longer than expected, message us on WhatsApp with your order details, and we'll immediately check the status with our courier partner.",
      },
    ],
  },
  {
    title: "Exchanges & Support",
    items: [
      {
        question: "Can I inspect the item before paying?",
        answer:
          "Yes, you can inspect your package upon delivery in the presence of the courier representative before finalizing your payment.",
      },
      {
        question: "What is your exchange policy?",
        answer:
          "If you receive a defective, wrong, or damaged item, contact us on WhatsApp within 48 hours of receiving the order, and we'll arrange an immediate replacement for you.",
      },
      {
        question: "How can I reach customer support?",
        answer:
          "For any questions or assistance, click the 'Contact Us' button below to start a chat with our support team on WhatsApp.",
      },
    ],
  },
];

export function Main() {
  return (
    <main className="bg-background text-foreground">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-28 lg:after:absolute lg:after:inset-y-0 lg:after:left-[40%] lg:after:w-px">
        <div className="flex flex-col lg:pr-16">
          <section>
            <h1 className="text-6xl font-medium tracking-tight lg:text-7xl">
              FAQ
            </h1>
            <p className="mt-8 max-w-md text-xl leading-relaxed text-muted-foreground">
              Shop our curated selection of premium products, designed to
              elevate your everyday experiences.
            </p>
          </section>

          <section className="mt-20 lg:sticky lg:top-32">
            <h2 className="text-3xl font-medium tracking-tight">Need Help?</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              If you have any questions or need immediate assistance with your
              order, click the button below to reach our support team directly
              on WhatsApp. We{"'"}re always here to help.
            </p>
            <div className="mt-8 flex w-full items-center justify-center">
              <MainButton href="/contact" text="Contact Us" />
            </div>
          </section>
        </div>

        <section className="mt-12 lg:mt-0 lg:pl-16 md:border-l-2">
          <div className="flex flex-col gap-12">
            {defaultCategorizedFaqs.map((category, catIdx) => (
              <div key={catIdx} className="flex flex-col gap-6">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  {category.title}
                </h3>
                <Accordion
                  type="single"
                  collapsible
                  className="flex flex-col gap-6"
                >
                  {category.items.map((item, itemIdx) => (
                    <AccordionItem
                      key={itemIdx}
                      value={`item-${catIdx}-${itemIdx}`}
                      className="rounded-2xl border border-border bg-muted px-7 transition-colors data-[state=open]:bg-accent"
                    >
                      <AccordionTrigger className="py-7 text-lg font-medium text-foreground hover:no-underline lg:text-xl">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-7 pr-4 text-base leading-relaxed text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
