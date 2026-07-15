import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function ContactUs() {
  return (
    <section
      id="contact-us"
      className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div
        className="technical-grid absolute inset-0 opacity-30"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-[88rem]">
        <div className="mb-10 flex items-center gap-4 pb-5">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <span className="h-px flex-1 bg-border" />
        </div>
        <h2 className="max-w-5xl font-display text-[clamp(3.4rem,7vw,7.5rem)] leading-[0.9] tracking-[-0.05em]">
          The Science Data Exchange
        </h2>
        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5 text-base font-medium text-foreground sm:mt-16">
          <a
            href="mailto:arya@graphonmarkets.com"
            className="inline-flex items-center gap-4 border-b border-border pb-2 transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <MdEmail className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span>arya@graphonmarkets.com</span>
          </a>
          <a
            href="https://x.com/GraphonDataExch"
            className="inline-flex items-center gap-4 border-b border-border pb-2 transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <FaXTwitter className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span>GraphonDataExch</span>
          </a>
        </div>
      </div>
    </section>
  );
}
