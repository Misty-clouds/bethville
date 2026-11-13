import Image from "next/image";
import type { Service, ServiceTheme } from "@/lib/content";
import { cn } from "@/lib/cn";
import { FeaturePill } from "./FeaturePill";

const THEMES: Record<ServiceTheme, { card: string; pill: string; check: string }> = {
  1: { card: "bg-svc-1", pill: "bg-svc-1-pill", check: "text-svc-1-check" },
  2: { card: "bg-svc-2", pill: "bg-svc-2-pill", check: "text-svc-2-check" },
  3: { card: "bg-svc-3", pill: "bg-svc-3-pill", check: "text-svc-3-check" },
  4: { card: "bg-svc-4", pill: "bg-svc-4-pill", check: "text-svc-4-check" },
  5: { card: "bg-svc-5", pill: "bg-svc-5-pill", check: "text-svc-5-check" },
  6: { card: "bg-svc-6", pill: "bg-svc-6-pill", check: "text-svc-6-check" },
};

export function ServiceCard({ service }: { service: Service }) {
  const theme = THEMES[service.theme];

  return (
    <article
      className={cn(
        "flex w-full items-start gap-24 overflow-hidden rounded-3xl px-6 pt-8 md:px-16 md:pt-16",
        theme.card,
      )}
    >
      <div
        className={cn(
          "flex w-full min-w-0 flex-col items-start gap-20 pb-16 lg:w-[468px] lg:shrink-0",
          service.columnClassName,
        )}
      >
        <div className="flex w-full flex-col items-start gap-8">
          <div className="flex w-full flex-col items-start gap-6">
            <h3 className="text-[24px] leading-[1.2] tracking-[-0.48px] md:text-[32px] md:tracking-[-0.64px] lg:text-[36px] lg:tracking-[-0.72px]">
              {service.title}
            </h3>
            <p className="text-left text-[18px] leading-[1.5] text-ink-60">{service.description}</p>
          </div>
          <ul className="flex w-full flex-col items-start gap-2.5">
            {service.features.map((feature) => (
              <FeaturePill
                key={feature}
                label={feature}
                pillClassName={theme.pill}
                checkClassName={theme.check}
              />
            ))}
          </ul>
        </div>
        {/* Empty 27px link slot present in the original card layout. */}
        <div aria-hidden="true" className="h-[27px] w-[140px]" />
      </div>

      {/* Images don't drive the card height — the text column does; overflow is clipped. */}
      <div className="relative hidden min-w-0 flex-1 self-stretch lg:block">
        <div className="absolute inset-x-0 top-0 flex flex-col items-end gap-[30px]">
          {service.images.map((image) => (
            <div key={image.src} className="relative h-[264px] w-[468px] overflow-hidden rounded-2xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="468px"
                className="rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
