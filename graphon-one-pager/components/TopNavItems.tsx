"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "ABOUT" },
  { href: "1", label: "DATA PRODUCERS" },
  { href: "2", label: "DATA CONSUMERS" },
  { href: "3", label: "CONTACT US" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold">
      {navItems.map((item) => {
        const isActive = pathname == item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={
              isActive
                ? "text-foreground underline underline-offset-4"
                : "text-text-muted transition-colors hover:text-foreground"
            }
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
