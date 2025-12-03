import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import RangeEstimatorClient from "./RangeEstimatorClient";

export const metadata: Metadata = {
  title: "EV Range Estimator | ev.makr.io",
  description: "Calculate real-world EV range based on temperature, speed, terrain, and driving conditions. Get accurate range estimates for your electric vehicle.",
  keywords: ["EV range calculator", "electric vehicle range", "range estimator", "real world EV range", "cold weather range", "highway range"],
  authors: [{ name: "ev.makr.io" }],
  openGraph: {
    title: "EV Range Estimator",
    description: "Calculate real-world EV range based on driving conditions and environmental factors.",
    url: "https://ev.makr.io/tools/range-estimator",
    siteName: "ev.makr.io",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EV Range Estimator",
    description: "Calculate real-world EV range based on driving conditions and environmental factors.",
  },
  alternates: {
    canonical: "https://ev.makr.io/tools/range-estimator",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RangeEstimatorPage() {
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

      <RangeEstimatorClient />
    </div>
  );
}
