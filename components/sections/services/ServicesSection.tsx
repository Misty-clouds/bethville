import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionLead } from "@/components/shared/SectionLead";
import { services } from "@/lib/content";
import { ServiceCard } from "./ServiceCard";
import { ServiceStack } from "./ServiceStack";

export function ServicesSection() {
  return (
    <section
      aria-labelledby="services-heading"
      className="flex w-full flex-col items-center px-2.5 pb-[50px] md:px-[50px]"
    >
      <div className="flex w-full flex-col items-center rounded-[36px] bg-[linear-gradient(180deg,rgba(247,244,242,0)_27.3253%,#f9f7f6_100%)]">
        <div className="flex w-full flex-col items-center gap-16 px-2.5 py-[60px] md:gap-[84px] md:px-[60px] md:py-20 lg:px-0">
          <div className="flex w-full max-w-[1280px] flex-col items-center justify-center gap-6 md:px-[60px]">
            <SectionHeading id="services-heading" className="text-center">
              Our Virtual Services
            </SectionHeading>
            <SectionLead className="max-w-[630px]">
              Customized bookkeeping and financial management for established businesses, designed to support your success.
            </SectionLead>
          </div>

          <Reveal amount={0.1} className="w-full max-w-[1280px] lg:px-[60px]">
            <ServiceStack>
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </ServiceStack>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
