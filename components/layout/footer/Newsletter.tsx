import { LinkRow } from "@/components/shared/LinkRow";
import { contactLinks } from "@/lib/content";
import { NewsletterForm } from "./NewsletterForm";

/**
 * Newsletter card. The original positions every child absolutely inside a
 * fixed-size card (with a few quirky offsets on mobile) — reproduced as-is.
 */
export function Newsletter() {
  const [email, phone] = contactLinks;

  return (
    <aside
      aria-labelledby="newsletter-heading"
      className="relative h-[476px] w-[319px] shrink-0 overflow-hidden rounded-[25px] bg-newsletter md:h-[277px] md:w-[717px] lg:h-[218px] lg:w-[1115px] xl:h-[277px] xl:w-[1414px]"
    >
      <h2
        id="newsletter-heading"
        className="absolute inset-x-0 top-[99px] pr-[2.14%] text-center font-inter text-[19px] leading-[1.2] font-bold whitespace-pre italic text-black md:top-[29px] md:text-[34px]"
      >
        Subscribe to our Newsletter
      </h2>

      <div className="absolute top-[195px] left-[9px] w-[300px] md:top-[106px] md:left-1/2 md:w-[685px] md:-translate-x-1/2 lg:top-[78px] xl:top-[106px]">
        <NewsletterForm />
      </div>

      {/* Mobile: two independently offset rows, as on the original */}
      <LinkRow
        label={email.label}
        icon={email.icon}
        iconSize={email.iconSize}
        showArrow={false}
        className="absolute top-[297px] left-[-2px] w-64 flex-none pl-6 md:hidden"
      />
      <LinkRow
        label={phone.label}
        icon={phone.icon}
        iconSize={phone.iconSize}
        showArrow={false}
        className="absolute top-[379px] left-12 w-64 flex-none md:hidden"
      />

      {/* Tablet and up: one row of two */}
      <div className="absolute inset-x-0 hidden gap-8 md:top-[180px] md:flex md:px-[76px] lg:top-[121px] lg:px-[60px] xl:top-[180px] xl:px-[127px]">
        {contactLinks.map((link) => (
          <LinkRow
            key={link.label}
            label={link.label}
            icon={link.icon}
            iconSize={link.iconSize}
            showArrow={false}
          />
        ))}
      </div>
    </aside>
  );
}
