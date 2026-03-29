import { cn } from "@/lib/cn";

type PillProps = {
  children: React.ReactNode;
  className?: string;
};

export function Pill({ children, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface-soft px-3 py-1 text-xs font-medium text-foreground/90",
        className,
      )}
    >
      {children}
    </span>
  );
}
