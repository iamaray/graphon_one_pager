"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import graphonLogo from "@/app/graphon_working_logo.svg";
import TopNav from "./TopNavItems";

export default function TopNavBar() {
  const navRef = useRef<HTMLElement>(null);
  const [isAtPageTop, setIsAtPageTop] = useState(true);
  const [isPointerNearTop, setIsPointerNearTop] = useState(false);
  const isVisible = isAtPageTop || isPointerNearTop;

  useEffect(() => {
    const updatePageTop = () => {
      const isScrolledToTop = window.scrollY === 0;
      setIsAtPageTop(isScrolledToTop);

      if (!isScrolledToTop) {
        setIsPointerNearTop(false);
      }
    };

    updatePageTop();
    window.addEventListener("scroll", updatePageTop, { passive: true });

    return () => {
      window.removeEventListener("scroll", updatePageTop);
    };
  }, []);

  useEffect(() => {
    const updatePointerPosition = (event: MouseEvent) => {
      setIsPointerNearTop(event.clientY <= (navRef.current?.offsetHeight ?? 0));
    };

    window.addEventListener("mousemove", updatePointerPosition, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", updatePointerPosition);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 border-b border-border bg-surface text-sm transition-transform duration-200 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      onFocusCapture={() => setIsPointerNearTop(true)}
      onBlurCapture={() => setIsPointerNearTop(false)}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-4 px-4 py-3 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Image
            src={graphonLogo}
            alt=""
            className="h-6 w-auto shrink-0 rotate-[270deg]"
          />
          <div className="flex min-w-0 flex-col">
            <p className="font-semibold tracking-wide text-foreground">
              GraphonMarkets
            </p>
            <p className="text-xs">The Science Data Exchange</p>
          </div>
        </div>
        <TopNav />
      </div>
    </nav>
  );
}
