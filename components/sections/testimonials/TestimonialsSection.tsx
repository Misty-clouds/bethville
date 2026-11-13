import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionLead } from "@/components/shared/SectionLead";
import { testimonials } from "@/lib/content";
import { TestimonialCard } from "./TestimonialCard";
import { TestimonialTrack } from "./TestimonialTrack";

export function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="flex w-full flex-col items-center overflow-hidden bg-page px-2.5 md:px-[50px]"
    >
      <div className="flex w-full flex-col items-center gap-12 rounded-[36px] px-5 py-[60px] md:px-8 md:py-20 lg:px-[60px] xl:px-8">
        <div className="flex w-full max-w-[1280px] flex-col items-center justify-center gap-6 md:px-8">
          <SectionHeading id="testimonials-heading" className="text-center">
            Trusted by Businesses Like Yours
          </SectionHeading>
          <SectionLead className="max-w-[648px] md:max-w-none lg:max-w-[648px]">
            Our clients rely on Bethville Bookkeeping Services to keep their finances organized, compliant, and ready for growth.
          </SectionLead>
        </div>

        <TestimonialTrack>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </TestimonialTrack>
      </div>
    </section>
  );
}
