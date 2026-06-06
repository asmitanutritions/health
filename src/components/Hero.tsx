import { ArrowRight, Sparkles, Users, Award, HeartPulse } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full bg-primary/20 blur-[120px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[500px] rounded-full bg-accent/15 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground animate-fade-up">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Personalized Nutrition & Fitness Guidance
        </div>

        <h1 className="mt-6 font-display text-4xl sm:text-6xl md:text-7xl leading-[1.05] animate-fade-up [animation-delay:120ms]">
          Transform your body.
          <br />
          <span className="text-gradient">Elevate your wellness.</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground animate-fade-up [animation-delay:240ms]">
          Expert support for weight gain, weight loss, height concerns, and fitness goals —
          built around your body, your lifestyle, and your dreams.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 animate-fade-up [animation-delay:360ms]">
          <a
            href="#book"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_0_40px_-8px_var(--glow)] hover:shadow-[0_0_60px_-4px_var(--glow)] hover:scale-[1.04] active:scale-95 transition-all"
          >
            Book Your Free Consult
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-medium glass hover:border-primary/40 hover:text-primary transition-all"
          >
            Contact Us
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-up [animation-delay:480ms]">
          {[
            { icon: Users, value: "2,500+", label: "Lives Guided" },
            { icon: HeartPulse, value: "98%", label: "Client Satisfaction" },
            { icon: Award, value: "7+", label: "Years Experience" },
            { icon: Sparkles, value: "100%", label: "Personalized" },
          ].map((s) => (
            <div key={s.label} className="glass lift rounded-2xl p-5 text-left">
              <s.icon className="h-5 w-5 text-primary" />
              <div className="mt-3 font-display text-2xl">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
