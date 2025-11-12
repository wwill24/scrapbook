import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scrapbook Made for Pookie",
  description: "A colorful scrapbook of our memories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`hearts-bg ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen">
          <header className="sticky top-0 z-20">
            <div className="mx-auto max-w-6xl px-4 py-4">
              <div className="card flex items-center justify-between px-4 py-3">
                <Link href="/" className="flex items-center gap-2">
                  <FaHeart className="text-[20px]" style={{ color: "var(--pink-600)" }} />
                  <span className="pink-gradient-text font-semibold text-[18px]">Scrapbook Made for Pookie</span>
                </Link>
              </div>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-8">
            <PageTransition>{children}</PageTransition>
          </main>
        </div>
      </body>
    </html>
  );
}
