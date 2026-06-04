import type { IconType } from "react-icons";
import type { ReactNode } from "react";
import { MdChevronRight } from "react-icons/md";

export type ExpandedInfoCardRow = {
  demo: ReactNode;
  description: string;
};

type ExternalLinkItemProps = {
  header: string;
  body: ReactNode;
  Icon: IconType;
  expandedRows?: ExpandedInfoCardRow[];
};

function InfoCardBody({ body }: { body: ReactNode }) {
  return (
    <div className="mt-4 space-y-4 break-words text-sm leading-6 text-text-muted [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-4 [&_ul]:pl-5">
      {body}
    </div>
  );
}

export default function InfoCard({
  header,
  body,
  Icon,
  expandedRows = [],
}: ExternalLinkItemProps) {
  const hasExpandedRows = expandedRows.length > 0;
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
        {hasExpandedRows ? (
          <MdChevronRight
            className="info-card-chevron mt-1 h-5 w-5 shrink-0 text-text-muted transition-transform duration-200"
            aria-hidden="true"
          />
        ) : null}
      </div>
      <InfoCardBody body={body} />
    </>
  );

  if (!hasExpandedRows) {
    return <div className={cardClassName}>{cardContent}</div>;
  }

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
