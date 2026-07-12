import Image from "next/image";
import graphonLogo from "@/app/graphon_working_logo.svg";
import TopNav from "./TopNavItems";

export default function TopNavBar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[var(--top-nav-height)] w-full max-w-[88rem] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <a
          href="#about"
          className="flex min-w-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="GraphonMarkets home"
        >
          <Image
            src={graphonLogo}
            alt=""
            className="h-7 w-auto shrink-0 rotate-[270deg] brightness-0 invert"
            priority
          />
          <div className="hidden min-w-0 sm:block">
            <p className="text-sm font-semibold tracking-[-0.01em] text-foreground">
              GraphonMarkets
            </p>
            <p className="font-mono text-[0.56rem] uppercase tracking-[0.14em] text-muted">
              The Science Data Exchange
            </p>
          </div>
        </a>
        <TopNav />
      </div>
    </nav>
  );
}
