import { Card, SectionHeading } from "./About";

const jobs = [
  {
    period: "Dec 2023 — Present",
    role: "Digital Marketing Manager",
    company: "VIP Grand Properties, Chennai",
    points: [
      "Managed ₹10L+ monthly Meta Ads, generating ₹5–10 Cr sales",
      "Led 20-member telecaller team for lead follow-up & conversions",
      "Oversaw end-to-end campaigns: ads, creatives, shoots, and execution",
      "Managed Sell.Do CRM from enquiry to sales closure",
      "Collaborated with website & design teams for landing pages and creatives",
      "Executed campaigns for Real Estate, School Admissions, and Hotels",
    ],
  },
  {
    period: "Mar 2023 — Sep 2023",
    role: "Digital Marketing Executive",
    company: "Ozias Tech Solution, Anna Nagar",
    points: [
      "Worked in a digital marketing agency managing campaigns for multiple clients across industries",
      "Creative idea for digital marketing",
      "Planned and executed paid ads, social media campaigns, and creative content for diverse brands",
      "Handling social media campaign",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Social Media Executive",
    company: "Chennai Adman, Alandur",
    points: [
      "Assisted in social media planning & campaign execution",
      "Created engaging posts to support promotions",
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
