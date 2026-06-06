import { useState, type ChangeEvent, type FormEvent, type InputHTMLAttributes, type ReactNode } from "react";
import { ArrowRight, Check, Instagram, MessageCircle, Loader2 } from "lucide-react";

const GOOGLE_FORM_SUBMIT =
  "https://docs.google.com/forms/d/e/1FAIpQLSegs9MWrQWXFyIGjzzeHPycwJC8nomT0AF1uVGhDFXFTd9upQ/formResponse";

const E = {
  name: "entry.1327173623",
  contact: "entry.318045873",
  age: "entry.68383794",
  address: "entry.1062987306",

  // Problem checkbox field
  problem: "entry.1499306097",
  problemOther: "entry.1499306097.other_option_response",

  // Goal multiple-choice field
  goal: "entry.1127449176",
};

const problemOptions = [
  "Under Weight",
  "Over Weight",
  "Digestive Issues",
  "BP Issue",
  "Height Growth Concern",
  "Low Energy / Fatigue",
  "Other",
];

const goals = ["Weight Gain", "Weight Loss", "Height", "Fitness", "Other"];

export function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    contact: "",
    age: "",
    problem: [] as string[],
    otherProblem: "",
    goal: "Weight Gain",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const update =
    (k: keyof Omit<typeof form, "problem">) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((p) => ({ ...p, [k]: e.target.value }));
    };

  const toggleProblem = (item: string) => (checked: boolean) => {
    setForm((p) => ({
      ...p,
      problem: checked ? [...p.problem, item] : p.problem.filter((x) => x !== item),
      otherProblem: item === "Other" && !checked ? "" : p.otherProblem,
    }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const body = new FormData();
    body.append(E.name, form.name);
    body.append(E.contact, form.contact);
    body.append(E.age, form.age);
    body.append(E.address, form.address);

    // Submit checkbox selections
    form.problem
      .filter((item) => item !== "Other")
      .forEach((item) => body.append(E.problem, item));

    if (form.problem.includes("Other")) {
      body.append(E.problem, "__other_option__");
      body.append(E.problemOther, form.otherProblem.trim() || "Other");
    }

    // Submit goal as single choice
    body.append(E.goal, form.goal);

    try {
      await fetch(GOOGLE_FORM_SUBMIT, {
        method: "POST",
        mode: "no-cors",
        body,
      });
      setStatus("success");
    } catch (error) {
      console.error("Form submit failed:", error);
      setStatus("idle");
    }
  };

  return (
    <section id="book" className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-primary/15 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary" /> Free Consultation
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Book Your <span className="text-gradient">Free Consult</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Share a few details and we'll reach out within 24 hours with personalized guidance.
          </p>
        </div>

        {status === "success" ? (
          <div className="mt-10 glass rounded-3xl p-10 sm:p-14 text-center glow-ring animate-fade-up">
            <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_60px_-5px_var(--glow)] animate-glow-pulse">
              <Check className="h-10 w-10 text-primary-foreground" strokeWidth={3} />
            </div>
            <h3 className="mt-6 font-display text-3xl md:text-4xl font-bold text-gradient">
              Successfully Submitted
            </h3>
            <p className="mt-3 text-muted-foreground text-lg">
              Thank you for reaching out. Our team will connect with you within 24 hours.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm">
              <a
                href="https://wa.me/+919540219980/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 glass hover:border-primary/50 hover:text-primary transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
              <a
                href="https://www.instagram.com/asmitanutrition/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 glass hover:border-primary/50 hover:text-primary transition"
              >
                <Instagram className="h-4 w-4" /> Follow on Instagram
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-10 glass rounded-3xl p-6 sm:p-9 lift hover:glow-ring">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="Name" value={form.name} onChange={update("name")} required placeholder="Your full name" />
              <Input label="Contact No" value={form.contact} onChange={update("contact")} required placeholder="10-digit number" inputMode="tel" />
              <Input label="Age" value={form.age} onChange={update("age")} required placeholder="e.g. 26" inputMode="numeric" />
              <Input label="Address" value={form.address} onChange={update("address")} required placeholder="City / Area" />

              <div className="sm:col-span-2">
                <Label>Problem</Label>
                <div className="mt-2 rounded-xl border border-border bg-input p-4 space-y-3">
                  {problemOptions.map((item) => (
                    <label key={item} className="flex items-center gap-3 text-sm">
                      <input
                        type="checkbox"
                        checked={form.problem.includes(item)}
                        onChange={(e) => toggleProblem(item)(e.target.checked)}
                        className="h-4 w-4 accent-primary"
                      />
                      <span>{item}</span>
                    </label>
                  ))}

                  {form.problem.includes("Other") && (
                    <input
                      value={form.otherProblem}
                      onChange={(e) => setForm((p) => ({ ...p, otherProblem: e.target.value }))}
                      placeholder="Type other problem"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary/60 focus:shadow-[0_0_25px_-5px_var(--glow)] transition"
                    />
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <Label>Select Goal</Label>
                <select
                  value={form.goal}
                  onChange={update("goal")}
                  className="mt-2 w-full bg-input rounded-xl px-4 py-3 text-sm outline-none border border-border focus:border-primary/60 focus:shadow-[0_0_25px_-5px_var(--glow)] transition appearance-none"
                >
                  {goals.map((g) => (
                    <option key={g} value={g} className="bg-background">
                      {g}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-7 w-full group inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_0_40px_-8px_var(--glow)] hover:shadow-[0_0_60px_-2px_var(--glow)] hover:scale-[1.02] active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
                </>
              ) : (
                <>
                  Book Your Free Consult
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm">
              <a
                href="https://wa.me/+919540219980/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 glass hover:border-primary/50 hover:text-primary transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
              <a
                href="https://www.instagram.com/asmitanutrition/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 glass hover:border-primary/50 hover:text-primary transition"
              >
                <Instagram className="h-4 w-4" /> Follow on Instagram
              </a>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Label({ children }: { children: ReactNode }) {
  return <label className="text-xs uppercase tracking-wider text-muted-foreground">{children}</label>;
}

function Input(props: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <div>
      <Label>{label}</Label>
      <input
        {...rest}
        className="mt-2 w-full bg-input rounded-xl px-4 py-3 text-sm outline-none border border-border focus:border-primary/60 focus:shadow-[0_0_25px_-5px_var(--glow)] transition"
      />
    </div>
  );
}
