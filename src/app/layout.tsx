'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from '@/app/components/Navigation';
import FinanceContextProvider from '@/app/lib/store/finance-context';

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FinanceContextProvider>
          <Navigation />
          {children}
        </FinanceContextProvider>
      </body>
    </html>
  );
}
