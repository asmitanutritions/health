import { Star } from "lucide-react";
import c1 from "@/assets/client-1.jpg";
import c2 from "@/assets/client-2.jpg";
import c3 from "@/assets/client-3.jpg";
import c4 from "@/assets/client-4.jpg";

const reviews = [
  { img: c1, name: "Riya Sharma", role: "Software Engineer · Bengaluru", text: "Truly life-changing guidance. I finally feel in control of my health, and the plan fit my busy schedule perfectly." },
  { img: c2, name: "Aman Verma", role: "Athlete · Delhi", text: "The sports nutrition advice transformed my training. More energy, better recovery, and visible results in weeks." },
  { img: c3, name: "Neha Kapoor", role: "Entrepreneur · Mumbai", text: "Warm, knowledgeable and patient. The personalized plan made all the difference — I'm down 8 kgs and full of energy." },
  { img: c4, name: "Karan Singh", role: "Student · Pune", text: "Helped me with healthy weight gain in a sustainable way. Loved the simple, honest, no-nonsense approach." },
];

export function Clients() {
  return (
    <section id="clients" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary" /> Clients
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Real stories. <span className="text-gradient">Real results.</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="group glass lift rounded-2xl p-6 hover:scale-[1.02] animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="img-hover h-12 w-12 rounded-full ring-2 ring-primary/30 group-hover:ring-primary transition">
                  <img
                    src={r.img}
                    alt={r.name}
                    loading="lazy"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
