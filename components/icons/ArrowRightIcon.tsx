import type { SVGProps } from "react";
import Svg from "./svg/arrow-right.svg";

export function ArrowRightIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return <Svg aria-hidden="true" focusable="false" className={className} {...props} />;
}
