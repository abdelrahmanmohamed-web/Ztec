import type { LucideIcon } from "lucide-react";

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
}

export function ContactInfoCard({
  icon: Icon,
  title,
  value,
  description,
}: ContactInfoCardProps) {
  return (
    <div className="group bg-muted hover:bg-accent p-6 lg:p-8 rounded-lg flex flex-col gap-4 border border-border transition-colors min-w-0">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:scale-105 shrink-0">
        <Icon className="w-5 h-5" strokeWidth={1.75} />
      </div>

      <div className="min-w-0">
        <h3 className="text-muted-foreground text-xs uppercase tracking-widest mb-1">
          {title}
        </h3>
        <p className="text-foreground text-lg lg:text-xl font-medium tracking-tight break-all">
          {value}
        </p>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
