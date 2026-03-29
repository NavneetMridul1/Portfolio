import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ExperienceItem } from "@/types/content";

type ExperienceSectionProps = {
  items: ExperienceItem[];
};

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Practical software engineering experience."
        />

        <div className="mt-8 space-y-6">
          {items.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 0.06}>
              <article className="section-shell rounded-3xl p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.company} | {item.location}
                    </p>
                  </div>
                  <p className="rounded-full border border-border bg-surface-soft px-4 py-1.5 font-mono text-xs text-muted-foreground">
                    {item.duration}
                  </p>
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <Pill key={tech}>{tech}</Pill>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
