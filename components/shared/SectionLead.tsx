import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

type SectionLeadProps = {
  children: string;
  className?: string;
  wrapperClassName?: string;
};

/** 20/30 Satoshi intro paragraph that sits under section headings. */
export function SectionLead({ children, className, wrapperClassName }: SectionLeadProps) {
  return (
    <Reveal className={wrapperClassName}>
      <p className={cn("text-center text-[20px] leading-[1.5] tracking-[-0.4px]", className)}>
        {children}
      </p>
    </Reveal>
  );
}
