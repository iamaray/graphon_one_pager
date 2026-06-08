import type { IconType } from "react-icons";
import type { ReactNode } from "react";
import Image from "next/image";
import graphonIcon from "@/app/graphon_icon_2.svg";

export type InfoCardExpandedRow = {
  demo: ReactNode;
  description: string;
};

type InfoCardProps = {
  header: string;
  body: ReactNode;
  Icon: IconType;
  expandedRows: InfoCardExpandedRow[];
};

export default function InfoCard({
  header,
  body,
  Icon,
  expandedRows,
}: InfoCardProps) {
  const cardClassName =
    "info-card group flex min-h-40 flex-col rounded-lg border border-border bg-surface p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-md focus-within:border-accent focus-within:ring-2 focus-within:ring-focus-ring/30";
  const cardContent = (
    <>
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface-muted text-accent">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="text-card-title flex-1 text-sm font-semibold text-foreground">
          {header}
        </h2>
        <Image
          src={graphonIcon}
          alt=""
          className="info-card-chevron mt-1 h-5 w-5 shrink-0 transition-transform duration-200"
        />
      </div>
      <div className="mt-4 space-y-4 break-words text-sm leading-6 text-text-muted [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-4 [&_ul]:pl-5">
        {body}
      </div>
    </>
  );

  return (
    <details className={cardClassName}>
      <summary className="list-none cursor-pointer focus-visible:outline-none">
        {cardContent}
      </summary>
      <div className="mt-8 space-y-6 border-t border-border pt-6">
        {expandedRows.map((row, index) => (
          <div
            key={`${header}-${index}`}
            className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(14rem,18rem)] md:items-center md:gap-8"
          >
            <div>{row.demo}</div>
            <p className="text-sm leading-6 text-text-muted">
              {row.description}
            </p>
          </div>
        ))}
      </div>
    </details>
  );
}
