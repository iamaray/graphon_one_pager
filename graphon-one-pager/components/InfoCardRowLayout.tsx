export default function InfoCardRowLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="info-card-row mx-auto grid w-full max-w-6xl gap-4 px-4 py-8 sm:grid-cols-3 sm:gap-6 sm:px-6 sm:py-10 lg:px-8">
      {children}
    </div>
  );
}
