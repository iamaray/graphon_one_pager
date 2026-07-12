import Link from "next/link";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#data-producers", label: "Produce" },
  { href: "#data-consumers", label: "Consume" },
  { href: "#contact-us", label: "Contact" },
] as const satisfies readonly { href: `#${string}`; label: string }[];

export default function TopNav() {
  return (
    <div className="flex items-center gap-5 sm:gap-7 lg:gap-9">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="font-mono text-[0.61rem] uppercase tracking-[0.14em] text-foreground/70 transition hover:text-accent focus-visible:outline-none focus-visible:text-accent"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
