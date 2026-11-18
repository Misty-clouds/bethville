import { Header } from "@/components/layout/header/Header";
import { StarBadgeIcon } from "@/components/icons/StarBadgeIcon";
import { GlowButton } from "@/components/shared/GlowButton";
import { Reveal } from "@/components/shared/Reveal";
import { CONSULTATION_URL } from "@/lib/content";
import { appearHero, appearHeroLate } from "@/lib/motion";

export function HeroSection() {
  return (
    <section className="flex w-full flex-col items-center p-2.5 md:px-[50px] md:pt-5 md:pb-[50px]">
      <div className="flex w-full flex-col items-center gap-8 rounded-3xl bg-[linear-gradient(180deg,#f9f7f6_0%,rgba(247,244,242,0)_83.5547%)] md:gap-16 md:rounded-[36px] lg:gap-24 xl:gap-16">
        <Header />

        <div className="flex w-full max-w-[1280px] flex-col items-center gap-12 px-5 pb-10 md:px-[60px]">
          <div className="flex w-full flex-col items-center justify-center gap-12 md:gap-16 lg:flex-row lg:gap-8">
            {/* Copy */}
            <div className="flex w-full flex-col items-center gap-8 lg:min-w-0 lg:flex-1 lg:items-start">
              <div className="flex w-full flex-col items-center gap-6 lg:items-start">
                <Reveal transition={appearHero}>
                  <p className="relative flex items-center justify-center gap-2 overflow-hidden rounded-3xl px-4 py-2 ring-1 ring-ink-10 ring-inset">
                    <span className="flex h-[19px] w-5 items-center justify-center overflow-hidden">
                      <StarBadgeIcon className="size-[19px] text-star-badge" />
                    </span>
                    <span className="text-center text-base leading-6 lg:text-left">
                      Your Business. Our Expertise. Your Peace of Mind.
                    </span>
                  </p>
                </Reveal>

                <Reveal transition={appearHero} className="w-full xl:max-w-[540px]">
                  <h1 className="bg-[linear-gradient(49deg,#111011_0%,rgba(17,16,17,0.6)_100%)] bg-clip-text text-center font-serif text-[36px] leading-[1.2] tracking-[-1.44px] text-transparent md:text-[52px] md:tracking-[-2.08px] lg:text-left lg:text-[60px] lg:tracking-[-2.4px]">
                    Simplifying Bookkeeping, Taxes, Payroll &amp; HR — So You Can Focus on Growing Your Business.
                  </h1>
                </Reveal>
              </div>

              <div className="flex w-full flex-col items-center gap-8 lg:items-start">
                <Reveal transition={appearHero}>
                  <GlowButton href={CONSULTATION_URL}>Book a Free Consultation</GlowButton>
                </Reveal>

                <Reveal
                  transition={appearHeroLate}
                  className="h-px w-[245px] overflow-hidden rounded-[10px] bg-[linear-gradient(90deg,#eae8e1_0%,rgba(17,16,17,0.2)_49.0991%,#eae8e1_96.8469%)] md:w-[568px] md:bg-[linear-gradient(270deg,rgba(17,16,17,0.2)_0%_50%,rgba(17,16,17,0.2)_100%)] lg:w-[503px] lg:bg-[linear-gradient(270deg,rgba(234,232,225,0.2)_0%,rgba(17,16,17,0.2)_75.6757%,rgba(17,16,17,0)_100%)]"
                />

                <Reveal transition={appearHeroLate} className="flex w-full justify-center lg:justify-start">
                  <p className="max-w-[464px] text-center text-[18px] leading-[1.5] lg:text-left">
                    Helping businesses stay financially organized, tax-ready, and compliant through personalized bookkeeping, tax preparation, payroll management, and HR support.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* Portrait — tiled background, as on the original */}
            <Reveal y={0} transition={appearHero} className="w-full shrink-0 md:w-auto">
              <div
                role="img"
                aria-label="Elizabeth O. Akpoveta, founder of Bethville Bookkeeping Services"
                className="h-[334px] w-full overflow-hidden rounded-3xl bg-[url(/images/hero-portrait.jpeg)] bg-[length:306px_auto] bg-center bg-repeat md:size-[548px] md:bg-[length:396px_auto] lg:h-[420px] lg:w-[451px] xl:size-[500px]"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
