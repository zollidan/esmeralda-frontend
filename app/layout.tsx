import type { Metadata } from "next";
import { Nav } from "@/components/sidebar/nav";
import { Header } from "@/components/header/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "aaf-bet.ru",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen w-full flex-col">
        <main className="flex min-h-screen w-full flex-col">
          <Nav />

          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
