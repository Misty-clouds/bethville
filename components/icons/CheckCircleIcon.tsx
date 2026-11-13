import type { SVGProps } from "react";
import Svg from "./svg/check-circle.svg";

export function CheckCircleIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return <Svg aria-hidden="true" focusable="false" className={className} {...props} />;
}
