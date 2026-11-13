import { RatingStarsIcon } from "@/components/icons/RatingStarsIcon";
import type { Testimonial } from "@/lib/content";
import { cn } from "@/lib/cn";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const plain = testimonial.variant === "plain";

  return (
    <figure className="flex h-[460px] w-80 shrink-0 flex-col items-start justify-between rounded-2xl bg-card p-6 md:h-[420px] md:w-96">
      <RatingStarsIcon className="h-[25px] w-[120px]" aria-label="5 out of 5 stars" />
      <blockquote
        className={cn(
          "flex w-full flex-col items-start gap-4",
          testimonial.fixedQuoteHeight && "h-[200px]",
        )}
      >
        <p className="text-[18px] leading-[1.5]">{testimonial.quote}</p>
      </blockquote>
      {!plain && <div aria-hidden="true" className="h-0.5 w-full overflow-hidden bg-card-divider" />}
      <figcaption className="flex w-full items-start gap-4">
        <span
          className={cn(
            "text-[18px]",
            plain ? "leading-[26px] font-medium" : "leading-[1.5] font-bold",
          )}
        >
          {testimonial.name}
        </span>
      </figcaption>
    </figure>
  );
}
