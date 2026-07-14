// const exchangeStages = ["Source", "Structure", "Permission", "Compute"];

type Props = {
  stages: string[];
};

export default function VisStages({ stages }: Props) {
  return (
    <div className="relative border-t border-border bg-background/70">
      <div className="mx-auto grid w-full max-w-[88rem] grid-cols-2 sm:grid-cols-4">
        {stages.map((stage) => (
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
  );
}
