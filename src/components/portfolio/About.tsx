export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="About" title="Performance marketing that closes deals" />
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card>
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a performance-driven Digital Marketer specialising in Meta Ads
              and complete lead-to-sales funnels. I've handled monthly ad budgets up
              to <span className="text-accent font-semibold">₹10 Lakhs</span> and
              helped businesses generate revenue up to <span className="text-accent font-semibold">₹20 Crores</span>.
            </p>
          </Card>
          <Card>
            <p className="text-lg text-foreground/90 leading-relaxed">
              I generate quality leads, manage <span className="font-semibold" style={{ color: "var(--brand-glow)" }}>Sell.do CRM</span> follow-ups,
              coordinate with telecalling and sales teams, and track every lead until
              the sale closes — so marketing actually means revenue.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="text-xs uppercase tracking-[0.2em] font-semibold mb-3" style={{ color: "var(--brand-glow)" }}>
        {eyebrow}
      </div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`p-8 rounded-3xl border border-border transition-all hover:-translate-y-1 ${className}`}
      style={{ backgroundImage: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
    >
      {children}
    </div>
  );
}
