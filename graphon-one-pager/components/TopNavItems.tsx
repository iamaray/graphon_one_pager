import Link from "next/link";

const navItems = [
  { href: "#about", label: "ABOUT" },
  // { href: "#how-it-works", label: "HOW IT WORKS" },
  { href: "#data-producers", label: "DATA PRODUCERS" },
  { href: "#data-consumers", label: "DATA CONSUMERS" },
  { href: "#contact-us", label: "CONTACT US" },
] as const satisfies readonly { href: `#${string}`; label: string }[];

export default function TopNav() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-semibold sm:gap-x-10 lg:gap-x-12">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-foreground underline decoration-transparent underline-offset-4 transition-all hover:decoration-foreground hover:underline-offset-8"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
