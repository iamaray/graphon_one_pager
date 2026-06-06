"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#about", label: "ABOUT" },
  { href: "#data-producers", label: "DATA PRODUCERS" },
  { href: "#data-consumers", label: "DATA CONSUMERS" },
] as const satisfies readonly { href: `#${string}`; label: string }[];

type NavHref = (typeof navItems)[number]["href"];

const defaultHref = navItems[0].href;
const activeSectionRootMargin = "-20% 0px -60% 0px";

function isNavHref(value: string): value is NavHref {
  return navItems.some((item) => item.href === value);
}

export default function TopNav() {
  const [activeHref, setActiveHref] = useState<NavHref>(defaultHref);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              first.boundingClientRect.top - second.boundingClientRect.top,
          )[0];

        if (!activeEntry) {
          return;
        }

        const href = `#${activeEntry.target.id}`;

        if (isNavHref(href)) {
          setActiveHref(href);
        }
      },
      { rootMargin: activeSectionRootMargin },
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.href.slice(1));

      if (section) {
        observer.observe(section);
      }
    });

    function syncHash() {
      if (isNavHref(window.location.hash)) {
        setActiveHref(window.location.hash);
      }
    }

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => {
      window.removeEventListener("hashchange", syncHash);
      observer.disconnect();
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
