import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Expertise } from "@/components/portfolio/Expertise";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Muthukarthik | Digital Marketer & Meta Ads Specialist" },
      {
        name: "description",
        content:
          "Muthukarthik — Performance-driven Digital Marketer with 3+ years of Meta Ads, real estate lead generation, CRM and sales funnel expertise. ₹20Cr+ revenue generated.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Expertise />
      <Achievements />
      <Contact />
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        © 2026 Muthukarthik · Crafted with passion for performance marketing.
      </footer>
    </main>
  );
}
