import type { Metadata } from "next";
import { Nav } from "@/components/sidebar/nav";
import { Header } from "@/components/header/header";
import "./globals.css";
import { Montserrat } from 'next/font/google'
import {ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";


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
    <html lang="en" className={montserrat.className}>
      <body className="flex min-h-screen w-full flex-col">
      {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
