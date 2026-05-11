import profile from "@/assets/profile.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />
      <div
        className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full blur-3xl -z-10 opacity-30"
        style={{ backgroundImage: "var(--gradient-brand)" }}
      />
      <div
        className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full blur-3xl -z-10 opacity-20"
        style={{ backgroundImage: "var(--gradient-gold)" }}
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6" style={{ animation: "fadeUp 0.8s ease both" }}>
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border border-border bg-card/50">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for new projects
          </span>
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
            Hi, I'm <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>Muthukarthik</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Digital Marketing Manager · Meta Ads Specialist · CRM & Team Leader
          </p>
          <p className="text-base text-muted-foreground max-w-xl">
            Multidimensional Digital Marketing Manager with 3+ years of experience in handling high-budget campaigns, CRM management, and team leadership. Specialized in Meta Ads strategy, performance marketing, and end-to-end campaign execution.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full font-semibold text-primary-foreground transition-transform hover:scale-105"
              style={{ backgroundImage: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
            >
              Let's Work Together
            </a>
            <a
              href="#experience"
              className="px-6 py-3 rounded-full font-semibold border border-border bg-card/50 hover:bg-card transition-colors"
            >
              View Experience
            </a>
          </div>
        </div>

        <div className="relative flex justify-center" style={{ animation: "fadeUp 1s ease both" }}>
          <div
            className="absolute inset-8 rounded-full blur-2xl opacity-60"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          />
          <div
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4"
            style={{
              borderColor: "transparent",
              backgroundImage: "var(--gradient-brand)",
              padding: "4px",
              animation: "float 6s ease-in-out infinite, pulseGlow 4s ease-in-out infinite",
            }}
          >
            <img
              src={profile}
              alt="Muthukarthik portrait"
              width={832}
              height={1024}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 md:bottom-4 md:right-4 px-4 py-3 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="text-2xl font-bold text-accent">₹5–10Cr</div>
            <div className="text-xs text-muted-foreground">Sales Generated</div>
          </div>
          <div className="absolute -top-2 -left-2 md:top-4 md:left-0 px-4 py-3 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="text-2xl font-bold" style={{ color: "var(--brand-glow)" }}>3+ yrs</div>
            <div className="text-xs text-muted-foreground">Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
