import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { aboutCopy } from "@/lib/content";
import { StatsRow } from "./StatsRow";

export function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="flex w-full flex-col items-center bg-page px-2.5 pt-10 pb-5 md:px-[50px] md:pt-[50px] md:pb-0"
    >
      <div className="flex w-full flex-col items-center rounded-3xl bg-[linear-gradient(180deg,#f9f7f6_0%,rgba(247,244,242,0)_100%)] md:rounded-[36px]">
        <div
          id="process"
          className="flex w-full flex-col items-center gap-16 pt-[60px] md:gap-8 md:py-20"
        >
          <div className="flex w-full max-w-[1280px] flex-col items-center justify-center gap-6 px-5 md:px-[60px] lg:px-8">
            <SectionHeading id="about-heading" wrapperClassName="w-full" className="text-center">
              About Bethville
            </SectionHeading>
            <Reveal className="w-full">
              <div className="mx-auto flex max-w-[640px] flex-col gap-6 text-center text-[20px] leading-[1.5] tracking-[-0.4px] md:max-w-none lg:max-w-[640px] xl:max-w-[860px]">
                {aboutCopy.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <div id="experience" className="flex w-full flex-col items-center md:pt-32 lg:pt-0">
            <div className="relative h-[437px] w-[323px] overflow-hidden md:h-[886px] md:w-[853px]">
              <Image
                src="/images/about-portrait.jpg"
                alt="Elizabeth O. Akpoveta"
                fill
                sizes="(min-width: 768px) 853px, 323px"
                className="object-cover object-[50%_100%]"
              />
            </div>

            <div className="flex w-full flex-col items-start gap-12 rounded-3xl px-8 pt-16 pb-8 xl:max-w-[1216px]">
              <StatsRow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
