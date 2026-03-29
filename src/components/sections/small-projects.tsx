import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { DeployedProject } from "@/types/content";

type SmallProjectsSectionProps = {
  items: DeployedProject[];
};

export function SmallProjectsSection({ items }: SmallProjectsSectionProps) {
  return (
    <section id="small-projects" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="More Projects"
          description="Other live builds and supporting project work."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {items.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <article className="section-shell rounded-3xl p-6">
                <h3 className="text-xl font-semibold tracking-tight">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <Pill key={tech}>{tech}</Pill>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    GitHub
                  </a>
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
