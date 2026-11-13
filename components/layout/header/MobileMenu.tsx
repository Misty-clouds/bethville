"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type MouseEvent } from "react";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import { PillButton } from "@/components/shared/PillButton";
import { Reveal } from "@/components/shared/Reveal";
import { CONSULTATION_URL, navLinks, socialLinks } from "@/lib/content";
import { appearHeader } from "@/lib/motion";
import { HamburgerIcon } from "./HamburgerIcon";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  /** Mobile menu links smooth-scroll to in-page anchors (Framer `smoothScroll`). */
  const onNavigate = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    close();
    const hash = href.split("#")[1];
    const target = hash ? document.getElementById(hash) : href === "/" ? document.body : null;
    if (!target || window.location.pathname !== "/") return;
    event.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    window.history.replaceState(null, "", hash ? `#${hash}` : "/");
  };

  return (
    <div ref={rootRef} className="relative">
      <Reveal y={20} amount={0} repeat transition={appearHeader}>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          className="flex h-[42px] cursor-pointer items-center rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <span className="font-serif text-[22px] leading-none whitespace-pre text-menu-ink">
            Menu
          </span>
          <HamburgerIcon open={open} />
        </button>
      </Reveal>

      {open && (
        <div
          id={panelId}
          role="dialog"
          aria-label="Site menu"
          className="absolute top-full right-0 z-[11] mt-2 rounded-[10px]"
        >
          <div className="flex w-[300px] flex-col items-start gap-12 rounded-3xl bg-white p-10 ring-1 ring-menu-border ring-inset shadow-[0px_1.008px_0.605px_0px_rgba(0,0,0,0.00101),0px_2.389px_1.433px_0px_rgba(0,0,0,0.00239),0px_4.357px_2.614px_0px_rgba(0,0,0,0.00436),0px_7.244px_4.346px_0px_rgba(0,0,0,0.00724),0px_11.698px_7.019px_0px_rgba(0,0,0,0.0117),0px_19.148px_11.489px_0px_rgba(0,0,0,0.01915),0px_32.971px_19.783px_0px_rgba(0,0,0,0.03297),0px_60px_36px_0px_rgba(0,0,0,0.06)]">
            <div className="flex w-full flex-col items-start gap-8">
              <nav aria-label="Mobile" className="flex flex-col items-start gap-2.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={(event) => onNavigate(event, link.href)}
                    className="text-[22px] leading-[1.2] font-medium text-ink outline-none focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col items-start gap-[5px]">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-4 text-base leading-8 font-medium text-ink outline-none focus-visible:underline"
                  >
                    {"menuLabel" in link ? link.menuLabel : link.label}
                    <ArrowUpRightIcon className="size-[18px] text-menu-ink/60" />
                  </a>
                ))}
              </div>

              <PillButton href={CONSULTATION_URL}>Contact</PillButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
