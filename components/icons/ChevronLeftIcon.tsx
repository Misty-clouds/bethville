import type { SVGProps } from "react";
import Svg from "./svg/chevron-left.svg";

export function ChevronLeftIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return <Svg aria-hidden="true" focusable="false" className={className} {...props} />;
}
