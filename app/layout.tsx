import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import PageViewTracker from "@/components/PageViewTracker";

export const metadata: Metadata = {
  title: "ev.makr.io - Educational Resource for New EV Owners",
  description:
    "A comprehensive, beginner-friendly educational resource for new and prospective electric vehicle owners in the United States. Learn about charging, vehicles, and EV ownership from someone learning alongside you.",
  keywords: [
    "electric vehicles",
    "EV guide",
    "EV charging",
    "NACS",
    "CCS1",
    "EV ownership",
    "electric car",
    "Tesla Supercharger",
    "home charging",
    "EV range",
  ],
  authors: [{ name: "ev.makr.io" }],
  openGraph: {
    title: "ev.makr.io - Educational Resource for New EV Owners",
    description:
      "Comprehensive guide to electric vehicle ownership, charging, and everything in between.",
    type: "website",
    locale: "en_US",
    siteName: "ev.makr.io",
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'ev.makr.io - Educational Resource for New EV Owners',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ev.makr.io - Educational Resource for New EV Owners",
    description:
      "Comprehensive guide to electric vehicle ownership, charging, and everything in between.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <PageViewTracker />
        </Suspense>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
