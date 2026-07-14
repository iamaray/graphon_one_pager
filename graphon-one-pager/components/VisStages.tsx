type Props = {
  stages: string[];
};

export default function VisStages({ stages }: Props) {
  return (
    <ol className="grid list-none grid-cols-2 border-b border-border sm:grid-cols-4">
      {stages.map((stage, index) => (
        <li
          key={stage}
          className="group relative flex items-center justify-between gap-4 border-border px-5 py-4 transition-colors hover:bg-surface-muted/70 max-sm:odd:border-r max-sm:[&:nth-child(-n+2)]:border-b sm:border-r sm:px-8 sm:last:border-r-0"
        >
          <span className="flex items-baseline gap-3">
            <span className="font-mono text-[0.58rem] tracking-[0.08em] text-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-foreground/80 transition-colors group-hover:text-foreground">
              {stage}
            </span>
          </span>
          {index < stages.length - 1 && (
            <span
              aria-hidden="true"
              className="hidden font-mono text-[0.6rem] text-muted/70 sm:inline"
            >
              &rarr;
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
