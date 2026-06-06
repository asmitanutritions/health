import { Salad, Dumbbell, UserCheck, Scale, Activity, Trophy } from "lucide-react";

const services = [
  { icon: Salad, title: "Diet & Nutrition Counseling", desc: "Tailored nutrition strategies built around your body, goals, and routine." },
  { icon: Dumbbell, title: "Fitness Programs", desc: "Structured workouts that fit your level, schedule, and lifestyle." },
  { icon: UserCheck, title: "Personal Training", desc: "One-on-one coaching with focused attention and accountability." },
  { icon: Scale, title: "Weight Loss / Gain Consultation", desc: "Expert evaluation and a clear path toward your ideal weight goals." },
  { icon: Activity, title: "Weight Loss / Gain Program", desc: "Step-by-step programs designed for sustainable, healthy results." },
  { icon: Trophy, title: "Sports Nutrition", desc: "Performance-driven nutrition for athletes and active lifestyles." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary" /> Services
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Everything you need to <span className="text-gradient">thrive</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Holistic services that meet you where you are — and take you further.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group glass lift rounded-2xl p-6 relative overflow-hidden animate-fade-up"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary border border-primary/20 group-hover:border-primary/60 transition-colors">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-5 h-px bg-gradient-to-r from-primary/40 via-accent/30 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
