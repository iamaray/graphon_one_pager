"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import graphonIcon from "@/app/graphon_icon_2.svg";
import TypedHeroWord from "./TypedHeroWord";

export default function TopCard() {
  const [isIconRotated, setIsIconRotated] = useState(false);
  const rotateIcon = useCallback(() => {
    setIsIconRotated((current) => !current);
  }, []);
  const scrollToContact = useCallback(() => {
    document.getElementById("contact-us")?.scrollIntoView();
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
        <p className="mt-5 max-w-2xl text-base leading-7 sm:text-lg">
          The AI industry is data-constrained. We&apos;re solving this by
          building the exchange and infrastructure layer that makes frontier
          scientific data usable at scale.
        </p>
        <div className="mt-8">
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex h-11 w-full max-w-[20.75rem] items-center justify-center rounded-md border border-border bg-background px-5 text-sm font-semibold tracking-wide text-foreground transition duration-150 hover:border-accent hover:bg-background active:translate-y-px active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring/40"
          >
            COMING SOON
          </button>
        </div>
      </div>
    </section>
  );
}
