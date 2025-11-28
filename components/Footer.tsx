import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-charcoal text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Disclaimer Section */}
        <div className="bg-neutral-charcoal/50 border border-gray-700 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-lg mb-3">⚠️ IMPORTANT DISCLAIMER</h3>
          <div className="text-sm text-gray-300 space-y-2">
            <p>
              This website provides general educational information about electric
              vehicles and is not a substitute for professional advice or your
              vehicle&apos;s owner&apos;s manual. Always consult your specific
              vehicle&apos;s documentation, manufacturer guidelines, and qualified
              professionals for:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Electrical installation and home charging setup</li>
              <li>Battery care and charging procedures specific to your model</li>
              <li>Safety protocols and emergency procedures</li>
              <li>Warranty terms and service requirements</li>
              <li>Technical specifications and capabilities</li>
            </ul>
            <p className="mt-4">
              Information on this site is provided &quot;as-is&quot; for educational
              purposes only. We are not affiliated with any vehicle manufacturer or
              charging network. Vehicle specifications, features, and availability
              are subject to change. Always verify current information with official
              manufacturer sources before making purchasing or operational decisions.
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-electric-blue mb-4">About</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-electric-green transition-colors">
                  About This Site
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-electric-green transition-colors">
                  Contact & Feedback
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-electric-blue mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/guides" className="hover:text-electric-green transition-colors">
                  All Guides
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="hover:text-electric-green transition-colors">
                  All Vehicles
                </Link>
              </li>
              <li>
                <Link href="/charging" className="hover:text-electric-green transition-colors">
                  Charging Networks
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-electric-blue mb-4">Popular Guides</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/guides/getting-started" className="hover:text-electric-green transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/guides/home-charging" className="hover:text-electric-green transition-colors">
                  Home Charging Setup
                </Link>
              </li>
              <li>
                <Link href="/guides/understanding-charging" className="hover:text-electric-green transition-colors">
                  Understanding Charging Levels
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-electric-blue mb-4">Built By</h4>
            <p className="text-sm text-gray-300 mb-2">
              A new EV owner (2026 Subaru Solterra) sharing the learning journey.
            </p>
            <p className="text-sm text-gray-300">
              Part of the{" "}
              <a
                href="https://makr.io"
                className="text-electric-green hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                makr.io
              </a>{" "}
              family
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} ev.makr.io • Educational resource for EV
            owners • Not affiliated with any manufacturer
          </p>
        </div>
      </div>
    </footer>
  );
}
