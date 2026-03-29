import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { SchoolingItem } from "@/types/content";

type SchoolingSectionProps = {
  items: SchoolingItem[];
};

export function SchoolingSection({ items }: SchoolingSectionProps) {
  return (
    <section id="schooling" className="pt-8 pb-16 sm:pt-10 sm:pb-20">
      <Container>
        <SectionHeading
          eyebrow="Education Journey"
          title="Schooling and academic journey."
        />

        <div className="mt-8 space-y-4">
          {items.map((item, index) => (
            <Reveal key={`${item.level}-${item.year}`} delay={index * 0.04}>
              <article className="section-shell rounded-3xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                    {item.level}
                  </h3>
                  <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                    {item.year}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                  {item.institution}
                </p>
                <p className="mt-2 text-sm font-semibold text-accent sm:text-base">
                  {item.score}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
