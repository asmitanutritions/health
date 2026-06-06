import logo from "@/assets/asmita-logo.png";

export function Logo({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <div
      className={`${className} relative rounded-full overflow-hidden ring-1 ring-primary/40 shadow-[0_0_24px_-4px_var(--glow-soft)]`}
    >
      <img
        src={logo}
        alt="Asmita Nutrition"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
