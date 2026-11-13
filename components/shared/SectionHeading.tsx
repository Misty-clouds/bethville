import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  children: string;
  className?: string;
  wrapperClassName?: string;
  id?: string;
};

/** Lustria h2 used by every section, with the Framer fade-up appear effect. */
export function SectionHeading({ children, className, wrapperClassName, id }: SectionHeadingProps) {
  return (
    <Reveal className={wrapperClassName}>
      <h2
        id={id}
        className={cn(
          "font-serif font-normal",
          "text-[28px] leading-[1.2] tracking-[-1.12px]",
          "md:text-[36px] md:tracking-[-1.44px]",
          "lg:text-[48px] lg:tracking-[-1.92px]",
          "xl:text-[52px] xl:tracking-[-2.08px]",
          className,
        )}
      >
        {children}
      </h2>
    </Reveal>
  );
}
