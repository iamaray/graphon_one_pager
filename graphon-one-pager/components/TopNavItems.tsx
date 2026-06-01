"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "ABOUT" },
  { href: "1", label: "SELLERS" },
  { href: "2", label: "BUYERS" },
  { href: "3", label: "GET STARTED" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <div className="flex gap-5 items-center justify-center">
      {navItems.map((item) => {
        const isActive = pathname == item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={
              isActive
                ? "text-foreground underline underline-offset-4"
                : "text-muted transition-colors hover:text-foreground"
            }
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
