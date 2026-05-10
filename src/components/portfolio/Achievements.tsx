import { SectionHeading } from "./About";

const stats = [
  { value: "3+", label: "Years Experience", sub: "Digital Marketing" },
  { value: "₹10L", label: "Monthly Ad Budget", sub: "Meta Ads Handled" },
  { value: "₹20Cr+", label: "Revenue Generated", sub: "For Clients" },
  { value: "4+", label: "Industries", sub: "Real Estate · F&B · Education" },
];

const industries = [
  { title: "Real Estate", desc: "Plot sales, villa projects, gated communities, DTCP/RERA & luxury campaigns." },
  { title: "Restaurant", desc: "Local brand awareness, offer promotions and customer lead generation." },
  { title: "Education", desc: "School admissions, IAS academy promotions and student enquiry funnels." },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Results" title="Numbers that speak" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-6 rounded-3xl border border-border text-center"
              style={{ backgroundImage: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>
                {s.value}
              </div>
              <div className="font-semibold mt-2">{s.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Industries I've worked with</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className="p-8 rounded-3xl border border-border transition-all hover:-translate-y-1"
                style={{ backgroundImage: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
              >
                <h4 className="text-xl font-bold mb-3" style={{ color: "var(--brand-glow)" }}>{ind.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
