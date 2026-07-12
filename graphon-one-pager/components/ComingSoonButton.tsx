"use client";

export default function ComingSoonButton() {
  const scrollToContact = () => {
    document.getElementById("contact-us")?.scrollIntoView();
  };

  return (
    <button
      type="button"
      onClick={scrollToContact}
      className="inline-flex min-h-12 items-center justify-center border border-accent bg-accent px-7 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-colors hover:bg-transparent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      Coming soon
    </button>
  );
}
