import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/context/ThemeContext";
import ThemeSwitcher from "@/src/components/ThemeSwitcher";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recipe App",
  description: "Recipe application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased transition-colors dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider>
          <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
              <h1 className="text-2xl font-bold tracking-tight">
                <Link
                  href="/recipes"
                  className="text-2xl font-bold tracking-tight transition hover:text-indigo-600"
                >
                  🍳 Recipes
                </Link>
              </h1>

              <ThemeSwitcher />
            </div>
          </header>

          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
