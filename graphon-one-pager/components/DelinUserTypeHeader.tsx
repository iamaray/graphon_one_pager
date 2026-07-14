import VisStages from "./VisStages";

const sectionDetails = {
  PRODUCE: {
    label: "Data Producers",
  },
  CONSUME: {
    label: "Data Consumers",
  },
} as const;

const producerStages = ["produce", "structure", "permission", "license"];
const consumerStages = ["license", "aggregate", "configure", "train"];

export default function DelinUserTypeHeader({
  action,
}: {
  action: keyof typeof sectionDetails;
}) {
  const details = sectionDetails[action];
  const stages =
    details.label === "Data Producers" ? producerStages : consumerStages;

  return (
    <header className="mx-auto w-full max-w-[88rem] px-5 pt-20 sm:px-8 sm:pt-28 lg:px-12 lg:pt-36">
      <div className="mb-10">
        <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent">
            {details.label}
          </p>
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-muted">
            {String(stages.length).padStart(2, "0")} stages
          </p>
        </div>
        <VisStages stages={stages} />
      </div>
      <h2 className="max-w-5xl font-display text-[clamp(3rem,6.2vw,6.75rem)] leading-[0.94] tracking-[-0.045em]">
        Do you <span className="text-accent">{action.toLowerCase()}</span>{" "}
        scientific data?
      </h2>
    </header>
  );
}
