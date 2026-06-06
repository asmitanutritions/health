import { Phone, Mail, Instagram, MessageCircle } from "lucide-react";

const items = [
  { icon: Phone, label: "Mobile", value: "+91 95402 19980", href: "tel:+919540219980" },
  { icon: Mail, label: "Email", value: "asmitanutritions@gmail.com", href: "mailto:asmitanutritions@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us instantly", href: "https://wa.me/+919540219980/" },
  { icon: Instagram, label: "Instagram", value: "@asmitanutrition", href: "https://www.instagram.com/asmitanutrition/" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary" /> Contact
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            We're here to <span className="text-gradient">help you</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Reach out anytime — our team usually responds within a few hours.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group glass lift rounded-2xl p-6 block"
            >
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:border-primary/60 group-hover:bg-primary/20 transition">
                <c.icon className="h-4 w-4" />
              </div>
              <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
              <div className="mt-1 text-sm font-medium group-hover:text-primary transition-colors break-words">{c.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
