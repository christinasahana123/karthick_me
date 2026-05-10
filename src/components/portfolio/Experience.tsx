import { Card, SectionHeading } from "./About";

const jobs = [
  {
    period: "2024 — Present",
    role: "Senior Digital Marketing Manager",
    company: "Real Estate (Plot & Villa Projects)",
    points: [
      "Managed monthly Meta Ads budgets up to ₹10 Lakhs across DTCP/RERA projects",
      "Led to ₹20Cr+ revenue with quality lead-to-sale conversion",
      "Owned Sell.do CRM, telecalling coordination & sales closure tracking",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Performance Marketer",
    company: "IAS Academy & Education Brands",
    points: [
      "Scaled student enquiry campaigns with optimized retargeting funnels",
      "Built creative pipelines with designers & video editors",
      "Improved cost-per-lead by 38% in 4 months",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Social Media & Ads Specialist",
    company: "Restaurant & Local Brands",
    points: [
      "Managed Facebook & Instagram pages end-to-end",
      "Ran offer & awareness campaigns generating consistent foot traffic",
      "Planned weekly content calendar & engagement strategy",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Work Experience" title="A track record of growth" />
        <div className="mt-12 relative">
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ backgroundImage: "linear-gradient(to bottom, transparent, var(--brand), transparent)" }}
          />
          <div className="space-y-10">
            {jobs.map((j, i) => (
              <div key={i} className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                  <div className="text-sm font-mono" style={{ color: "var(--brand-glow)" }}>{j.period}</div>
                  <h3 className="text-2xl font-bold mt-1">{j.role}</h3>
                  <div className="text-muted-foreground">{j.company}</div>
                </div>
                <div className="pl-12 md:pl-12 mt-4 md:mt-0">
                  <Card>
                    <ul className="space-y-2 text-foreground/85">
                      {j.points.map((p, k) => (
                        <li key={k} className="flex gap-2">
                          <span className="text-accent mt-1">▸</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
                <div
                  className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full -translate-x-1/2 ring-4 ring-background"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
