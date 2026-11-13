import { cn } from "@/lib/cn";

type PillButtonProps = {
  href: string;
  children: string;
  className?: string;
};

/** Solid blue "Contact" pill used in the header and mobile menu. */
export function PillButton({ href, children, className }: PillButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "flex h-12 items-center justify-center gap-[5px] overflow-hidden rounded-3xl bg-brand px-6 py-3",
        "text-base leading-6 font-medium whitespace-pre text-white",
        "outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
        className,
      )}
    >
      {children}
    </a>
  );
}
