export default function TopCard() {
  return (
    <div className="w-full border-b border-border bg-surface px-5 py-12 text-center shadow-sm sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          The Exchange on Scientific Data Rights
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted sm:text-lg">
          A marketplace connecting researchers and engineers building
          state-of-the-art models with high-quality research data.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <p className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm">
            BUTTON 1
          </p>
          <p className="rounded-md border border-border bg-surface-muted px-5 py-2.5 text-sm font-semibold text-foreground">
            BUTTON 2
          </p>
        </div>
      </div>
    </div>
  );
}
