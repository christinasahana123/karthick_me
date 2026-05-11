import { Card, SectionHeading } from "./About";

const blocks = [
  {
    icon: "📈",
    title: "Paid Ads Specialist",
    items: ["Meta Ads – ₹10L+ Monthly Budgets", "Facebook & Instagram Ads", "Lead Generation Campaigns", "Retargeting Funnels", "Campaign Optimization"],
  },
  {
    icon: "🎯",
    title: "Campaign Strategy",
    items: ["End-to-End Campaign Planning", "Creative Shoots & Execution", "Performance Tracking", "A/B Testing", "Budget Scaling"],
  },
  {
    icon: "🔗",
    title: "CRM & Lead Funnel",
    items: ["Sell.Do CRM Management", "Lead Assignment & Follow-up", "Telecalling Coordination", "Enquiry to Sale Closure", "Pipeline Monitoring"],
  },
  {
    icon: "👥",
    title: "Team Leadership",
    items: ["20-Member Telecaller Team", "Website & Design Collaboration", "Graphic & Video Teams", "Creative Planning & Execution", "Cross-functional Coordination"],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Expertise" title="What I do best" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {blocks.map((b) => (
            <Card key={b.title}>
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "var(--brand-glow)" }}>{b.title}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {b.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-accent">✓</span> {it}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
