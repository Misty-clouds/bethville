import type { SVGProps } from "react";
import Svg from "./svg/star-badge.svg";

export function StarBadgeIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return <Svg aria-hidden="true" focusable="false" className={className} {...props} />;
}
