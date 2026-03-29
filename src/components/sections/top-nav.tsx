import { Container } from "@/components/ui/container";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#schooling", label: "Schooling" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#small-projects", label: "Small Builds" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function TopNav() {
  return (
    <div className="sticky top-2 z-40 py-3">
      <Container>
        <nav
          aria-label="Section Navigation"
          className="section-shell mx-auto flex w-fit flex-wrap items-center justify-center gap-1 rounded-full px-2 py-1"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:bg-surface-soft hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </div>
  );
}
