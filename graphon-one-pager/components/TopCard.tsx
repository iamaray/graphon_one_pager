import type { ButtonHTMLAttributes } from "react";
import { MdArrowForward } from "react-icons/md";
import TypedHeroWord from "./TypedHeroWord";

type TopCardButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary";
};

function TopCardButton({
  children,
  className = "",
  variant,
  ...props
}: TopCardButtonProps) {
  const variantClassName =
    variant === "primary"
      ? "bg-accent text-accent-foreground shadow-sm hover:bg-foreground/90"
      : "border border-border bg-surface-muted text-foreground hover:border-accent hover:bg-surface";

  return (
    <button
      type="button"
      className={`group inline-flex h-11 w-40 items-center justify-center rounded-md px-5 text-sm font-semibold transition duration-150 active:translate-y-px active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring/40 ${variantClassName} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <MdArrowForward
        className="ml-2 h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </button>
  );
}

export default function TopCard() {
  return (
    <section className="w-full px-5 py-12 shadow-sm sm:py-16">
      <div className="mx-auto flex max-w-3xl flex-col">
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          Compute &lt;&gt; <TypedHeroWord />
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted sm:text-lg">
          The AI industry is data-constrained. We&apos;re solving this by
          building the exchange and infrastructure layer on scientific data used
          at scale. GraphonMarkets provides an exchange where experimental
          science labs can sell data usage rights to firms training cutting-ege
          models.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <TopCardButton variant="primary">List Your Data</TopCardButton>
          <TopCardButton variant="secondary">Access Data</TopCardButton>
        </div>
      </div>
    </section>
  );
}
