import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Profile } from "@/types/content";

type ProfilesSectionProps = {
  profile: Profile;
};

const profileItems = (profile: Profile) => [
  { label: "Email", href: `mailto:${profile.email}`, display: "Email" },
  { label: "GitHub", href: profile.links.github, display: "GitHub" },
  { label: "LinkedIn", href: profile.links.linkedin, display: "LinkedIn" },
  { label: "LeetCode", href: profile.links.leetcode, display: "LeetCode" },
  { label: "CodeChef", href: profile.links.codechef, display: "CodeChef" },
  { label: "Codeforces", href: profile.links.codeforces, display: "Codeforces" },
  { label: "Crio Portfolio", href: profile.links.crio, display: "Crio Portfolio" },
];

export function ProfilesSection({ profile }: ProfilesSectionProps) {
  const items = profileItems(profile);

  return (
    <section id="profiles" className="pt-12 pb-8 sm:pt-16 sm:pb-10">
      <Container>
        <SectionHeading
          eyebrow="Profiles"
          title="Profile Links"
          description="Coding profiles, GitHub, and portfolio references in one place."
        />

        <Reveal className="mt-8">
          <article className="section-shell rounded-2xl p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="block rounded-xl border border-border bg-background/50 px-4 py-3 transition hover:border-accent/45"
                >
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-accent underline underline-offset-4 sm:text-base">
                    {item.display}
                  </p>
                </a>
              ))}
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
