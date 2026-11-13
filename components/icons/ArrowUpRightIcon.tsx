import type { SVGProps } from "react";
import Svg from "./svg/arrow-up-right.svg";

export function ArrowUpRightIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return <Svg aria-hidden="true" focusable="false" className={className} {...props} />;
}
