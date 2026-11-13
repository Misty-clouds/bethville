import { CheckCircleIcon } from "@/components/icons/CheckCircleIcon";
import { cn } from "@/lib/cn";

type FeaturePillProps = {
  label: string;
  /** Background utility for the pill (e.g. `bg-svc-1-pill`). */
  pillClassName: string;
  /** Text-color utility for the check icon (e.g. `text-svc-1-check`). */
  checkClassName: string;
};

export function FeaturePill({ label, pillClassName, checkClassName }: FeaturePillProps) {
  return (
    <li
      className={cn(
        "flex w-full items-center gap-2 overflow-hidden rounded-[36px] py-2.5 pr-3.5 pl-2.5 md:w-auto md:gap-[5px] md:pr-4 md:pl-3",
        pillClassName,
      )}
    >
      <CheckCircleIcon className={cn("size-6 shrink-0", checkClassName)} />
      <span className="text-left text-[18px] leading-[1.5]">{label}</span>
    </li>
  );
}
