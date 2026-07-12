import type { IconType } from "react-icons";
import type { ReactNode } from "react";

type InfoCardProps = {
  header: string;
  body: ReactNode;
  Icon: IconType;
};

export default function InfoCard({ header, body, Icon }: InfoCardProps) {
  return (
    <article className="info-card relative flex min-h-full flex-col overflow-hidden border border-border bg-surface p-6 sm:p-7">
      <div className="mb-12 flex justify-end">
        <span className="flex h-11 w-11 items-center justify-center border border-border bg-background/40 text-accent">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>

      <h3 className="max-w-xs font-display text-3xl leading-[1.05] tracking-[-0.025em] text-foreground">
        {header}
      </h3>
      <div className="mt-6 h-px w-12 bg-accent" />
      <div className="mt-7 text-sm leading-6 text-foreground/70 [&_li]:border-t [&_li]:border-border/70 [&_li]:py-4 [&_li:first-child]:border-t-0 [&_li:first-child]:pt-0 [&_strong]:font-medium [&_strong]:text-foreground [&_ul]:space-y-0">
        {body}
      </div>
    </article>
  );
}
