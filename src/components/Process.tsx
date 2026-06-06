import { ClipboardList, Target, Sparkles } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Fill the form", desc: "Tell us a little about yourself in our quick lead form." },
  { icon: Target, title: "Share your goals & concerns", desc: "Talk us through your health goals and what you'd like to change." },
  { icon: Sparkles, title: "Get a free consultation", desc: "Receive personalized guidance and a clear next step toward results." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary" /> Process
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Three simple steps to a <span className="text-gradient">better you</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5 relative">
          <div className="hidden md:block absolute top-20 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="group glass lift rounded-2xl p-7 relative animate-fade-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="relative grid place-items-center h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[0_0_30px_-5px_var(--glow)] group-hover:scale-110 transition-transform">
                <s.icon className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full glass text-xs grid place-items-center font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-medium">{s.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
