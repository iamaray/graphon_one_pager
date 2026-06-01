import type { IconType } from "react-icons";

type ExternalLinkItemProps = {
  header: string;
  body: string;
  Icon: IconType;
};

export default function InfoCard({
  header,
  body,
  Icon,
}: ExternalLinkItemProps) {
  return (
    <div className="group flex min-h-40 flex-col rounded-lg border border-border bg-surface p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-md focus-within:border-accent focus-within:ring-2 focus-within:ring-focus-ring/30">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface-muted text-accent">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="text-card-title font-semibold text-foreground">
          {header}
        </h2>
      </div>
      <p className="mt-4 break-words text-sm leading-6 text-text-muted">
        {body}
      </p>
    </div>
  );
}
