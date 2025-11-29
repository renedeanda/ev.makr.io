import Link from "next/link";
import { Battery, ArrowLeft, Home, Zap, AlertTriangle } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-eco-green/5 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Battery Icon */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
          <div className="relative bg-white p-8 rounded-full shadow-soft">
            <Battery className="text-primary" size={80} strokeWidth={1.5} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <AlertTriangle className="text-warning-amber" size={32} />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-6xl md:text-8xl font-bold text-slate mb-4">
          4<span className="text-primary">0</span>4
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-slate mb-4">
          Range Anxiety?
        </h2>
        <p className="text-lg text-slate-light mb-8 max-w-md mx-auto">
          This page seems to be out of range. Just like an EV on a road trip without charging stops, we couldn't find what you're looking for.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
          <Card variant="bordered" className="p-4">
            <div className="text-3xl font-bold text-primary mb-1">0%</div>
            <div className="text-xs text-slate-light">Page Charge</div>
          </Card>
          <Card variant="bordered" className="p-4">
            <div className="text-3xl font-bold text-eco-green mb-1">404</div>
            <div className="text-xs text-slate-light">Error Code</div>
          </Card>
          <Card variant="bordered" className="p-4">
            <div className="text-3xl font-bold text-slate mb-1">0mi</div>
            <div className="text-xs text-slate-light">To Destination</div>
          </Card>
        </div>

        {/* Helpful Suggestions */}
        <Card variant="bordered" className="p-6 mb-8 text-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-eco-green/10 p-2 rounded-lg">
              <Zap className="text-eco-green" size={24} />
            </div>
            <h3 className="font-bold text-lg text-slate">Need a Charge?</h3>
          </div>
          <p className="text-slate-light mb-4">
            No worries! Let's get you back on the road. Here are some helpful destinations:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-eco-green">✓</span>
              <Link href="/" className="text-primary hover:underline">
                Return to Homepage
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-eco-green">✓</span>
              <Link href="/vehicles" className="text-primary hover:underline">
                Browse 30 EV Models
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-eco-green">✓</span>
              <Link href="/guides" className="text-primary hover:underline">
                Read Our Guides
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-eco-green">✓</span>
              <Link href="/tools/cost-calculator" className="text-primary hover:underline">
                EV vs Gas Calculator
              </Link>
            </li>
          </ul>
        </Card>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary" size="lg">
            <Home className="mr-2" size={20} />
            Go Home
          </Button>
          <Button href="/vehicles" variant="outline" size="lg">
            <Battery className="mr-2" size={20} />
            Browse Vehicles
          </Button>
        </div>

        {/* Fun Footer */}
        <p className="mt-12 text-sm text-slate-light italic">
          "Unlike gas cars, EVs are silent. Unfortunately, so is this page." 🔇⚡
        </p>
      </div>
    </div>
  );
}
