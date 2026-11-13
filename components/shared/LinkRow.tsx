import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { cn } from "@/lib/cn";

type LinkRowProps = {
  label: string;
  icon: string;
  /** Large icons render 24px inside the 32px slot, small ones 22px. */
  iconSize: "large" | "small";
  href?: string;
  /** The newsletter contact rows keep the arrow slot but render no icon. */
  showArrow?: boolean;
  className?: string;
};

/**
 * Footer / newsletter row: icon + label on the left, arrow on the right,
 * underlined by a hairline. Renders as a link when `href` is given.
 */
export function LinkRow({ label, icon, iconSize, href, showArrow = true, className }: LinkRowProps) {
  const content = (
    <>
      <span className="flex items-center gap-[7px] overflow-hidden py-2">
        <span className="relative flex h-[33px] w-8 shrink-0 items-center justify-center">
          <Image
            src={icon}
            alt=""
            width={24}
            height={24}
            className={cn(iconSize === "large" ? "size-6" : "size-[22px]")}
          />
        </span>
        <span className="text-[18px] leading-[1.5] whitespace-pre">{label}</span>
      </span>
      <span className="relative size-6 shrink-0 overflow-hidden">
        {showArrow && <ArrowRightIcon className="absolute top-1 left-1 h-[13px] w-[14px] text-ink" />}
      </span>
    </>
  );

  const classes = cn(
    "relative flex min-w-0 flex-1 items-center justify-between pb-4 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-ink-20",
    className,
  );

  if (!href) return <div className={classes}>{content}</div>;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={cn(
        classes,
        "outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-surface",
      )}
    >
      {content}
    </a>
  );
}
