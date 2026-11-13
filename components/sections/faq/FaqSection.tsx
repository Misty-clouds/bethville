import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { faqs } from "@/lib/content";
import { FaqItem } from "./FaqItem";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="flex w-full flex-col items-center bg-page px-2.5 md:px-[50px]"
    >
      <div className="flex w-full flex-col items-start gap-8 rounded-3xl bg-[linear-gradient(0deg,rgba(247,244,242,0)_29.8661%,#f9f7f6_100%)] px-6 pt-[60px] pb-10 md:gap-16 md:rounded-[36px] md:px-[50px] md:pt-20 lg:px-[60px] lg:py-[120px]">
        <div className="flex w-full items-center justify-center">
          <SectionHeading id="faq-heading" wrapperClassName="w-full md:w-auto">
            Frequently Asked Questions
          </SectionHeading>
        </div>

        <div className="flex w-full flex-col items-center">
          <Reveal amount={0.2} className="flex w-full max-w-[1080px] justify-center">
            <div className="flex w-full flex-col items-start gap-3 lg:px-16">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  defaultOpen={index === 0 ? "md" : false}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
