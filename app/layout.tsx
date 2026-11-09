import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NKC Fleet Management Services | Corporate & Hospital Fleet Transport",
  description:
    "NKC Fleet Management Services (Pvt) Ltd — 19+ years delivering safe, tracked, and reliable fleet & staff transportation across Karachi, trusted by leading hospitals and institutions.",
  keywords: [
    "NKC Fleet",
    "fleet management Karachi",
    "staff transport Pakistan",
    "hospital fleet services",
    "vehicle tracking Karachi",
  ],
  openGraph: {
    title: "NKC Fleet Management Services",
    description:
      "Unparalleled transportation solutions through innovative technology and customer-centric service.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-dark">
        {children}
      </body>
    </html>
  );
}
