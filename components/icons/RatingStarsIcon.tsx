import type { SVGProps } from "react";
import Svg from "./svg/rating-stars.svg";

export function RatingStarsIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return <Svg aria-hidden="true" focusable="false" className={className} {...props} />;
}
