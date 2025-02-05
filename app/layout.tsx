import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"

const montserrat = Montserrat({ subsets: ['cyrillic-ext'] })

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
    <ClerkProvider>
      <html lang="en">
        <body className={`${montserrat.className} flex min-h-screen w-full flex-col suppressHydrationWarning`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

