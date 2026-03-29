import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Achievement } from "@/types/content";

type AchievementsSectionProps = {
  achievements: Achievement[];
};

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <section id="achievements" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Achievements"
          title="Competitive results that reinforce engineering execution."
        />

        <div className="mt-8 space-y-4">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement.title} delay={index * 0.04}>
              <article className="section-shell rounded-3xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                    {achievement.title}
                  </h3>
                  {achievement.year?.toLowerCase() === "ongoing" ? (
                    <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                      {achievement.year}
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-base font-semibold text-accent">
                  {achievement.metric}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {achievement.detail}
                </p>
                {achievement.links && achievement.links.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {achievement.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-border px-3 py-1 text-xs font-medium text-accent hover:border-accent/45"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
