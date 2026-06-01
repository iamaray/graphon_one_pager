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
      <body>
        <TopNavBar />
        <main className="mx-auto flex max-w-4xl flex-col ">
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
