const sectionDetails = {
  PRODUCE: {
    label: "Data Producers",
  },
  CONSUME: {
    label: "Data Consumers",
  },
} as const;

export default function DelinUserTypeHeader({
  action,
}: {
  action: keyof typeof sectionDetails;
}) {
  const details = sectionDetails[action];

  return (
    <header className="mx-auto w-full max-w-[88rem] px-5 pt-20 sm:px-8 sm:pt-28 lg:px-12 lg:pt-36">
      <div className="mb-8 border-b border-border pb-5">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent">
          {details.label}
        </p>
      </div>
      <h2 className="max-w-5xl font-display text-[clamp(3rem,6.2vw,6.75rem)] leading-[0.94] tracking-[-0.045em]">
        Do you <span className="text-accent">{action.toLowerCase()}</span>{" "}
        scientific data?
      </h2>
    </header>
  );
}
