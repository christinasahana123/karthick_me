export function Navbar() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#expertise", label: "Expertise" },
    { href: "#achievements", label: "Results" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold text-lg tracking-tight">
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>
            Muthukarthik
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="tel:9361469482"
          className="text-sm font-semibold px-4 py-2 rounded-full text-primary-foreground transition-transform hover:scale-105"
          style={{ backgroundImage: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
