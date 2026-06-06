import aboutImg from "@/assets/about-nutritionist.jpg";
import { CheckCircle2, Leaf, Target, MessageSquareHeart, BookOpen } from "lucide-react";

const points = [
  { icon: Leaf, title: "Personalized Guidance", desc: "Plans designed around your unique body and lifestyle." },
  { icon: Target, title: "Goal-Based Plans", desc: "Clear, focused roadmaps to reach your targets faster." },
  { icon: MessageSquareHeart, title: "Supportive Consultation", desc: "Compassionate guidance, every step of the way." },
  { icon: BookOpen, title: "Easy-to-Understand Advice", desc: "Simple, actionable wellness insights — no jargon." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity" />
            <div className="relative glass rounded-3xl p-3 lift img-hover">
              <img
                src={aboutImg}
                alt="Asmita Nutrition expert"
                loading="lazy"
                width={1024}
                height={1280}
                className="rounded-2xl w-full h-[520px] object-cover"
              />
              <div className="absolute bottom-4 right-4 glass glow-ring rounded-2xl px-5 py-4 z-10 hidden sm:block">
                <div className="text-xs text-muted-foreground">Certified</div>
                <div className="font-display text-lg text-gradient">Nutrition Expert</div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-8 bg-primary" /> About Us
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              Real guidance. <span className="text-gradient">Real transformation.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              At Asmita Nutrition, we believe wellness is personal. We combine science-backed
              nutrition, fitness expertise, and warm human support to help you build a stronger,
              healthier, more confident you — at your own pace.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {points.map((p) => (
                <div
                  key={p.title}
                  className="glass lift rounded-xl p-4 group cursor-default"
                >
                  <div className="flex items-center gap-2">
                    <div className="grid place-items-center h-9 w-9 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <p.icon className="h-4 w-4" />
                    </div>
                    <div className="font-medium">{p.title}</div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Trusted by clients across India for honest, holistic guidance.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
