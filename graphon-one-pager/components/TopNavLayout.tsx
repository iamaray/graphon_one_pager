"use client";

import ThemeToggle from "./ThemeToggle";
import TopNav from "./TopNavItems";

export default function TopNavBar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-surface text-sm">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-4 px-4 py-3 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-col">
          <p className="font-semibold tracking-wide text-foreground">
            GraphonMarkets
          </p>
          <p className="text-xs text-text-muted">The Science Data Exchange</p>
        </div>
        <TopNav />
        <ThemeToggle />
      </div>
    </nav>
  );
}
