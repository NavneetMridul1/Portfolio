import { Container } from "@/components/ui/container";
import type { Profile } from "@/types/content";

type SiteFooterProps = {
  profile: Profile;
};

export function SiteFooter({ profile }: SiteFooterProps) {
  return (
    <footer className="border-t border-border/70 py-8">
      <Container className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">{profile.role}</p>
      </Container>
    </footer>
  );
}
