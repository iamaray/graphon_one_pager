"use client";

import type { ReactNode } from "react";
import { useCallback, useState } from "react";
import Image from "next/image";
import graphonIcon from "@/app/graphon_icon_2.svg";
import { FaXTwitter } from "react-icons/fa6";
import { MdArrowForward, MdEmail } from "react-icons/md";
import TypedHeroWord from "./TypedHeroWord";

type TopCardLinkProps = {
  children: ReactNode;
  href: string;
  variant: "primary" | "secondary";
};

function TopCardLink({ children, href, variant }: TopCardLinkProps) {
  const variantClassName =
    variant === "primary"
      ? "bg-accent text-accent-foreground shadow-sm hover:bg-foreground/90"
      : "border border-border bg-surface-muted text-foreground hover:border-accent hover:bg-surface";

  return (
    <a
      href={href}
      className={`group inline-flex h-11 w-40 items-center justify-center rounded-md px-5 text-sm font-semibold transition duration-150 active:translate-y-px active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring/40 ${variantClassName}`}
    >
      <span>{children}</span>
      <MdArrowForward
        className="ml-2 h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </a>
  );
}

export default function TopCard() {
  const [isIconRotated, setIsIconRotated] = useState(false);
  const rotateIcon = useCallback(() => {
    setIsIconRotated((current) => !current);
  }, []);

  return (
    <section className="w-full px-5 pb-8 pt-12 sm:pb-10 sm:pt-16">
      <div className="mx-auto flex max-w-3xl flex-col">
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          Compute{" "}
          <Image
            src={graphonIcon}
            alt=""
            className={`mx-2 inline-block h-8 w-auto align-[-0.1em] transition-transform duration-500 sm:h-10 ${isIconRotated ? "rotate-180" : ""}`}
          />{" "}
          <TypedHeroWord onWordChange={rotateIcon} />
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted sm:text-lg">
          The AI industry is data-constrained. We&apos;re solving this by
          building the exchange and infrastructure layer that makes frontier
          scientific data usable at scale.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <TopCardLink href="#data-producers" variant="primary">
            List Your Data
          </TopCardLink>
          <TopCardLink href="#data-consumers" variant="secondary">
            Access Data
          </TopCardLink>
        </div>
        <div
          id="contact-us"
          className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-base font-medium text-foreground"
        >
          <a
            href="mailto:arya@graphonmarkets.com"
            className="inline-flex items-center gap-3 transition-colors hover:text-text-muted"
          >
            <MdEmail className="h-6 w-6 shrink-0" aria-hidden="true" />
            <span>arya@graphonmarkets.com</span>
          </a>
          <a
            href="https://x.com/GraphonDataExch"
            className="inline-flex items-center gap-3 transition-colors hover:text-text-muted"
          >
            <FaXTwitter className="h-6 w-6 shrink-0" aria-hidden="true" />
            <span>GraphonDataExch</span>
          </a>
        </div>
      </div>
    </section>
  );
}
