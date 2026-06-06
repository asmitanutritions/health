import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Instagram, MessageCircle, Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

const IG = "https://www.instagram.com/asmitanutrition/";
const WA = "https://wa.me/+919540219980/";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`glass rounded-2xl flex items-center justify-between gap-4 px-4 py-2.5 transition-all ${
            scrolled ? "glow-ring" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-3 group">
            <Logo />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-lg text-gradient">Asmita</span>
              <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                Nutrition
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors after:content-[''] after:absolute after:left-4 after:right-4 after:bottom-1 after:h-px after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={IG}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hidden sm:grid place-items-center h-10 w-10 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/60 hover:shadow-[0_0_20px_-5px_var(--glow)] transition-all"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="hidden sm:grid place-items-center h-10 w-10 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/60 hover:shadow-[0_0_20px_-5px_var(--glow)] transition-all"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="#book"
              className="hidden md:inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_0_30px_-8px_var(--glow)] hover:shadow-[0_0_45px_-5px_var(--glow)] hover:scale-[1.03] active:scale-95 transition-all"
            >
              Book Your Free Consult
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="lg:hidden grid place-items-center h-10 w-10 rounded-full border border-border text-foreground"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-3 animate-fade-up">
            <div className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="mt-2 text-center rounded-full px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground"
              >
                Book Your Free Consult
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
