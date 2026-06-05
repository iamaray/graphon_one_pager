"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#about", label: "ABOUT" },
  { href: "#data-producers", label: "DATA PRODUCERS" },
  { href: "#data-consumers", label: "DATA CONSUMERS" },
  // { href: "#contact-us", label: "CONTACT US" },
] as const satisfies readonly { href: `#${string}`; label: string }[];

type NavHref = (typeof navItems)[number]["href"];

const defaultHref = navItems[0].href;

export default function TopNav() {
  const [activeHref, setActiveHref] = useState<NavHref>(defaultHref);

  useEffect(() => {
    let animationFrameId: number | null = null;

    function readTopNavHeight() {
      const rootStyles = getComputedStyle(document.documentElement);
      const rawHeight = rootStyles.getPropertyValue("--top-nav-height").trim();
      const numericHeight = Number.parseFloat(rawHeight);

      if (Number.isNaN(numericHeight)) {
        return 0;
      }

      if (rawHeight.endsWith("rem")) {
        const rootFontSize = Number.parseFloat(rootStyles.fontSize);

        return numericHeight * rootFontSize;
      }

      return numericHeight;
    }

    function updateActiveHref() {
      animationFrameId = null;

      const tolerance = 4;
      const activationY = window.scrollY + readTopNavHeight() + tolerance;
      const nextActive = navItems.reduce<{
        href: NavHref;
        top: number;
      }>(
        (current, item) => {
          const section = document.getElementById(item.href.slice(1));

          if (!section) {
            return current;
          }

          const sectionTop =
            section.getBoundingClientRect().top + window.scrollY;

          if (sectionTop > activationY || sectionTop < current.top) {
            return current;
          }

          return { href: item.href, top: sectionTop };
        },
        { href: defaultHref, top: Number.NEGATIVE_INFINITY },
      );

      setActiveHref(nextActive.href);
    }

    function scheduleUpdateActiveHref() {
      if (animationFrameId !== null) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(updateActiveHref);
    }

    scheduleUpdateActiveHref();
    window.addEventListener("scroll", scheduleUpdateActiveHref, {
      passive: true,
    });
    window.addEventListener("resize", scheduleUpdateActiveHref);
    window.addEventListener("hashchange", scheduleUpdateActiveHref);
    window.addEventListener("popstate", scheduleUpdateActiveHref);

    return () => {
      window.removeEventListener("scroll", scheduleUpdateActiveHref);
      window.removeEventListener("resize", scheduleUpdateActiveHref);
      window.removeEventListener("hashchange", scheduleUpdateActiveHref);
      window.removeEventListener("popstate", scheduleUpdateActiveHref);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-semibold sm:gap-x-10 lg:gap-x-12">
      {navItems.map((item) => {
        const isActive = activeHref === item.href;

        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={isActive ? "location" : undefined}
            className={
              isActive
                ? "text-foreground underline underline-offset-4"
                : "text-text-muted transition-colors hover:text-foreground"
            }
          >
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
