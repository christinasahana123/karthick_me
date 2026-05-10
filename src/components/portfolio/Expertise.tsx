import { Card, SectionHeading } from "./About";

const blocks = [
  {
    icon: "📈",
    title: "Meta Ads",
    items: ["Facebook & Instagram Ads", "Lead Generation Campaigns", "Retargeting Funnels", "Budget Scaling", "Campaign Optimization"],
  },
  {
    icon: "📱",
    title: "Page Management",
    items: ["FB Page Maintenance", "Instagram Handling", "Content Planning", "Post Engagement", "Brand Presence"],
  },
  {
    icon: "🎯",
    title: "CRM & Sales Funnel",
    items: ["Sell.do CRM Mastery", "Lead Assignment", "Follow-up Tracking", "Telecalling Coordination", "Sale Closure Monitoring"],
  },
  {
    icon: "👥",
    title: "Team Management",
    items: ["Graphic Designers", "Video Editors", "Content Writers", "Telecalling Team", "Sales Team"],
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
