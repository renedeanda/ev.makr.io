import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CostCalculatorClient from "./CostCalculatorClient";

export const metadata: Metadata = {
  title: "EV vs Gas Cost Calculator | ev.makr.io",
  description: "Compare the total cost of ownership between electric and gas vehicles. Calculate fuel savings, maintenance costs, and see your break-even point over 1-10 years.",
  keywords: ["EV cost calculator", "electric vehicle cost", "total cost of ownership", "EV savings", "gas vs electric", "fuel savings calculator"],
  authors: [{ name: "ev.makr.io" }],
  openGraph: {
    title: "EV vs Gas Cost Calculator",
    description: "Compare the total cost of ownership between electric and gas vehicles over time.",
    url: "https://ev.makr.io/tools/cost-calculator",
    siteName: "ev.makr.io",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EV vs Gas Cost Calculator",
    description: "Compare the total cost of ownership between electric and gas vehicles over time.",
  },
  alternates: {
    canonical: "https://ev.makr.io/tools/cost-calculator",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CostCalculatorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-neutral-light border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-electric-blue hover:text-electric-blue/80 transition-colors font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>

      <CostCalculatorClient />
    </div>
  );
}
