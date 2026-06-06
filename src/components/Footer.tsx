import { Logo } from "./Logo";
import { Instagram, MessageCircle, Phone, Mail } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-12">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Logo className="h-12 w-12" />
              <div>
                <div className="font-display text-xl text-gradient">Asmita Nutrition</div>
                <div className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                  Nourishing Body · Enriching Life
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-md">
              Personalized nutrition and fitness guidance you can trust — built around your body,
              your goals, and your lifestyle.
            </p>
            <div className="mt-5 flex gap-2">
              <a href="https://www.instagram.com/asmitanutrition/" target="_blank" rel="noreferrer" className="grid place-items-center h-10 w-10 rounded-full border border-border hover:text-primary hover:border-primary/60 transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://wa.me/+919540219980/" target="_blank" rel="noreferrer" className="grid place-items-center h-10 w-10 rounded-full border border-border hover:text-primary hover:border-primary/60 transition">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-medium">Quick Links</div>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium">Reach Us</div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 95402 19980</li>
              <li className="flex items-center gap-2 break-all"><Mail className="h-4 w-4 text-primary" /> asmitanutritions@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Asmita Nutrition. All rights reserved.</div>
          <div>Crafted with care for a healthier you.</div>
        </div>
      </div>
    </footer>
  );
}
