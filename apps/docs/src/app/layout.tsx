import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import "@repo/ui/styles.css"

const inter = Inter({
  display: "swap",
  subsets: ['latin'],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "New App",
  description: "sample new app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
