import { LinkRow } from "@/components/shared/LinkRow";
import { socialLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="flex w-full flex-col items-center bg-page px-2.5 pb-2.5 lg:px-[50px] lg:pb-[50px]">
      <div className="flex w-full flex-col items-center rounded-3xl bg-[linear-gradient(180deg,rgba(247,244,242,0)_0%,#f9f7f6_100%)] lg:rounded-[36px]">
        <div className="flex w-full flex-col items-center justify-center gap-[84px] overflow-hidden px-5 py-20 lg:px-[60px] lg:pt-[120px] lg:pb-20 xl:pb-[120px]">
          <div className="flex w-full max-w-[1280px] flex-col items-center gap-8 lg:flex-row xl:px-[60px]">
            {socialLinks.map((link) => (
              <LinkRow
                key={link.href}
                href={link.href}
                label={link.label}
                icon={link.icon}
                iconSize={link.iconSize}
                className="w-full lg:w-auto"
              />
            ))}
          </div>

          <a
            href="https://babarogic.com"
            target="_blank"
            rel="noopener"
            className="flex w-full max-w-[1280px] items-center justify-center lg:px-[60px]"
          >
            <span className="text-center text-base leading-[1.2] text-ink-60">
              Bethville © 2024. Helping your Business Grow.
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
