import { LinkRow } from "@/components/shared/LinkRow";
import { businessAddress, contactLinks } from "@/lib/content";
import { NewsletterForm } from "./NewsletterForm";

export function Newsletter() {
  return (
    <aside
      aria-labelledby="newsletter-heading"
      className="flex w-[319px] max-w-full shrink-0 flex-col gap-8 rounded-[25px] bg-newsletter px-5 py-10 md:w-[717px] md:px-8 lg:w-[1115px] lg:px-[60px] xl:w-[1414px] xl:px-[127px]"
    >
      <h2
        id="newsletter-heading"
        className="text-center font-inter text-[19px] leading-[1.2] font-bold italic text-black md:text-[34px]"
      >
        Subscribe to our Newsletter
      </h2>

      <div className="mx-auto w-full max-w-[685px]">
        <NewsletterForm />
      </div>

      <div className="grid w-full gap-6 lg:grid-cols-[2fr_1fr_1fr]">
        {contactLinks.map((link) => (
          <LinkRow
            key={link.href}
            href={link.href}
            label={link.label}
            icon={link.icon}
            iconSize={link.iconSize}
            showArrow={false}
          />
        ))}
      </div>

      <address className="text-center text-[18px] leading-[1.5] text-ink not-italic">
        {businessAddress}
      </address>
    </aside>
  );
}
