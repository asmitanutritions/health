import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Clients } from "@/components/Clients";
import { LeadForm } from "@/components/LeadForm";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asmita Nutrition — Personalized Nutrition & Fitness Guidance" },
      { name: "description", content: "Premium nutrition and fitness consultation. Personalized plans for weight gain, weight loss, height, and fitness goals. Book your free consult." },
      { property: "og:title", content: "Asmita Nutrition — Nourishing Body · Enriching Life" },
      { property: "og:description", content: "Expert nutrition and fitness guidance built around your body, goals, and lifestyle." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Clients />
        <LeadForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
