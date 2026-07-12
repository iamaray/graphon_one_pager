"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import graphonIcon from "@/app/graphon_icon_2.svg";
import ComingSoonButton from "./ComingSoonButton";
import TypedHeroWord from "./TypedHeroWord";

const exchangeStages = ["Source", "Structure", "Permission", "Compute"];

export default function TopCard() {
  const [isIconRotated, setIsIconRotated] = useState(false);
  const rotateIcon = useCallback(() => {
    setIsIconRotated((current) => !current);
  }, []);

  return (
    <section className="relative min-h-[calc(100svh-var(--top-nav-height))] overflow-hidden border-b border-border">
      <div
        className="technical-grid absolute inset-0 opacity-50"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-[calc(100svh-var(--top-nav-height))] w-full max-w-[88rem] items-center px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="reveal relative z-10 w-full max-w-5xl">
          <div className="mb-8 flex max-w-3xl items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
            The Science Data Exchange
            <span className="h-px flex-1 bg-border" />
          </div>

          <h1 className="font-display text-[clamp(3.6rem,7.5vw,7.75rem)] leading-[0.88] tracking-[-0.055em] text-foreground">
            Compute
            <span className="mt-2 flex items-center gap-[0.12em]">
              <Image
                src={graphonIcon}
                alt=""
                className={`h-[0.68em] w-auto shrink-0 brightness-0 invert transition-transform duration-500 ${isIconRotated ? "rotate-180" : ""}`}
                priority
              />
              <TypedHeroWord onWordChange={rotateIcon} />
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-foreground/75 sm:text-lg sm:leading-8">
            The AI industry needs access to frontier data. We&apos;re solving
            this by building the exchange and infrastructure layer that brings
            scientific data to scale, starting with the life-sciences.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <ComingSoonButton />
          </div>
        </div>
      </div>

      <div className="relative border-t border-border bg-background/70">
        <div className="mx-auto grid w-full max-w-[88rem] grid-cols-2 sm:grid-cols-4">
          {exchangeStages.map((stage) => (
            <div
              key={stage}
              className="flex items-center gap-4 border-border px-5 py-5 sm:border-r sm:px-8 last:border-r-0"
            >
              <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-foreground/70">
                {stage}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
