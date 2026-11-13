import Image from "next/image";
import Link from "next/link";
import { PillButton } from "@/components/shared/PillButton";
import { Reveal } from "@/components/shared/Reveal";
import { CONSULTATION_URL, navLinks } from "@/lib/content";
import { appearHeader } from "@/lib/motion";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="relative z-10 w-full">
      {/* Laptop / desktop (≥1200px) */}
      <div className="hidden h-[100px] items-center justify-between px-[30px] py-6 lg:flex">
        <Link href="/" aria-label="Bethville Bookkeeping Services — home" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Bethville Bookkeeping Services"
            width={222}
            height={52}
            priority
            className="h-[52px] w-[222px] object-contain"
          />
        </Link>

        <Reveal y={20} amount={0} repeat transition={appearHeader}>
          <nav aria-label="Primary" className="flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center justify-center gap-[5px] rounded-md px-4 py-1 text-base leading-8 font-medium text-nav outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </Reveal>

        <Reveal y={20} amount={0} repeat transition={appearHeader}>
          <PillButton href={CONSULTATION_URL}>Contact</PillButton>
        </Reveal>
      </div>

      {/* Mobile / tablet (<1200px) */}
      <div className="flex h-[102px] items-center justify-between py-6 pr-6 pl-5 lg:hidden">
        <Link href="/" aria-label="Bethville Bookkeeping Services — home" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Bethville Bookkeeping Services"
            width={128}
            height={54}
            priority
            className="h-[54px] w-32 object-contain"
          />
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
}
