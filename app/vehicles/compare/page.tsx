import { Metadata } from "next";
import CompareClient from "./CompareClient";

export const metadata: Metadata = {
  title: "Compare EV Models Side-by-Side | ev.makr.io",
  description: "Compare electric vehicle specifications side-by-side. Compare range, price, charging speed, and performance across multiple EV models.",
  keywords: ["EV comparison", "compare electric vehicles", "EV specs", "side by side comparison", "electric vehicle comparison tool"],
  openGraph: {
    title: "Compare EV Models Side-by-Side",
    description: "Compare electric vehicle specifications to find the perfect EV for your needs.",
    url: "https://ev.makr.io/vehicles/compare",
    siteName: "ev.makr.io",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ComparePage() {
  return <CompareClient />;
}
