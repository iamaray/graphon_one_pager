import type { Metadata } from "next";
import "./globals.css";
import TopNavBar from "@/components/TopNavLayout";

export const metadata: Metadata = {
  title: "GraphonMarkets",
  description: "One-pager for the GraphonMarkets data rights exchange.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <TopNavBar />
        <main className="flex w-full flex-col bg-background pt-[var(--top-nav-height)]">
          {children}
        </main>
      </body>
    </html>
  );
}
