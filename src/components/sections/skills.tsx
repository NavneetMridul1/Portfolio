import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { SkillGroup } from "@/types/content";

type SkillsSectionProps = {
  groups: SkillGroup[];
};

export function SkillsSection({ groups }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Core technologies for building web applications & solving problems."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {groups.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.06}>
              <article className="section-shell h-full rounded-3xl p-6">
                <h3 className="text-lg font-semibold">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Pill key={item}>{item}</Pill>
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
