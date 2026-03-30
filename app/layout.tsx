import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Reinvented Consulting — Build Business Credit That Banks Say YES To",
    template: "%s | Reinvented Consulting",
  },
  description:
    "Join 9,100+ entrepreneurs who've used Dub Washington's system to access $10K–$250K in business funding. Free webinar, courses, and mentorship.",
  keywords: ["business credit", "funding", "credit repair", "mentorship", "Dub Washington"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reinventedconsulting.com",
    siteName: "Reinvented Consulting",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@reinventedconsulting",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white font-sans text-navy antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
