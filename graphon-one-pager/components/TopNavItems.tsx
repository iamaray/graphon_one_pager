"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#about", label: "ABOUT" },
  { href: "#data-producers", label: "DATA PRODUCERS" },
  { href: "#data-consumers", label: "DATA CONSUMERS" },
  { href: "#contact-us", label: "CONTACT US" },
] as const satisfies readonly { href: `#${string}`; label: string }[];

type NavHref = (typeof navItems)[number]["href"];

const defaultHref = navItems[0].href;

function isNavHref(value: string): value is NavHref {
  return navItems.some((item) => item.href === value);
}

export default function TopNav() {
  const [activeHref, setActiveHref] = useState<NavHref>(defaultHref);

  useEffect(() => {
    function syncActiveHref() {
      const hash = window.location.hash;

      setActiveHref(isNavHref(hash) ? hash : defaultHref);
    }

    syncActiveHref();
    window.addEventListener("hashchange", syncActiveHref);
    window.addEventListener("popstate", syncActiveHref);

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              Math.abs(first.boundingClientRect.top) -
              Math.abs(second.boundingClientRect.top),
          )[0];

        if (!activeEntry) {
          return;
        }

        const href = `#${activeEntry.target.id}`;

        if (isNavHref(href)) {
          setActiveHref(href);
        }
      },
      {
        rootMargin: "0px 0px -80% 0px",
      },
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.href.slice(1));

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener("hashchange", syncActiveHref);
      window.removeEventListener("popstate", syncActiveHref);
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
