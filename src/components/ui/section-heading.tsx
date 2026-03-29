type SectionHeadingProps = {
  eyebrow: string;
  title?: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="space-y-3">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
        {eyebrow}
      </p>
      {title ? (
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </header>
  );
}
