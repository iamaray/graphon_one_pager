export default function DelinAboutUsHeader({ body }: { body: string }) {
  return (
    <div className="flex flex-col">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-4 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        <div className="h-px flex-1 bg-border" />
        <h1 className="shrink-0 text-center text-sm font-semibold tracking-wide text-text-muted sm:text-base">
          {" "}
          <span className="text-foreground underline decoration-border decoration-2 underline-offset-4">
            ABOUT US
          </span>{" "}
        </h1>
        <div className="h-px flex-1 bg-border" />
      </div>
    </div>
  );
}
