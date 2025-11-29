import Link from "next/link";
import { Zap, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Disclaimer Section */}
        <div className="bg-slate/50 border border-slate-light/20 rounded-card p-6 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-warning-amber/20 p-2 rounded-lg">
              <span className="text-warning-amber text-lg">⚠️</span>
            </div>
            <h3 className="font-bold text-lg">IMPORTANT DISCLAIMER</h3>
          </div>
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
            <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
              <Zap size={18} />
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-eco-green-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="hover:text-eco-green-light transition-colors">
                  All Vehicles
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-eco-green-light transition-colors">
                  All Guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-eco-green-light transition-colors">
                  About This Site
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-4">Popular Guides</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/guides" className="hover:text-eco-green-light transition-colors">
                  Getting Started with EVs
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-eco-green-light transition-colors">
                  Understanding Charging
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-eco-green-light transition-colors">
                  Battery Care Tips
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-eco-green-light transition-colors">
                  Road Trip Planning
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-4">By Manufacturer</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/vehicles/tesla/model-y" className="hover:text-eco-green-light transition-colors">
                  Tesla Model Y
                </Link>
              </li>
              <li>
                <Link href="/vehicles/ford/mustang-mach-e" className="hover:text-eco-green-light transition-colors">
                  Ford Mustang Mach-E
                </Link>
              </li>
              <li>
                <Link href="/vehicles/hyundai/ioniq-5" className="hover:text-eco-green-light transition-colors">
                  Hyundai IONIQ 5
                </Link>
              </li>
              <li>
                <Link href="/vehicles/kia/ev6" className="hover:text-eco-green-light transition-colors">
                  Kia EV6
                </Link>
              </li>
              <li>
                <Link href="/vehicles/subaru/solterra" className="hover:text-eco-green-light transition-colors">
                  Subaru Solterra
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
              <Leaf size={18} />
              Built By
            </h4>
            <p className="text-sm text-gray-300 mb-3">
              A new EV owner (2026 Subaru Solterra) sharing the learning journey.
            </p>
            <p className="text-sm text-gray-300 mb-3">
              Part of the{" "}
              <a
                href="https://makr.io"
                className="text-eco-green-light hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                makr.io
              </a>{" "}
              family
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="text-eco-green">✓</span>
              <span>No Affiliations</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="text-eco-green">✓</span>
              <span>Educational Only</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-light/20 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} ev.makr.io • Educational resource for EV
            owners • Not affiliated with any manufacturer
          </p>
        </div>
      </div>
    </footer>
  );
}
