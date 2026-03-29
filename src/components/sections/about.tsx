import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Profile } from "@/types/content";

type AboutSectionProps = {
  profile: Profile;
};

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 sm:py-24">
      <Container>
        <Reveal className="space-y-8">
          <SectionHeading
            eyebrow="About"
            title="Engineering with clarity, scalable solutions, and practical implementation."
            description={profile.summary}
          />

          <article className="section-shell rounded-3xl p-6 sm:p-8">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
