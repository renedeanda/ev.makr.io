"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-neutral-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Zap className="text-electric-blue" size={28} />
            <span className="text-neutral-charcoal">
              ev.<span className="text-electric-blue">makr</span>.io
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/vehicles"
              className="text-neutral-charcoal hover:text-electric-blue transition-colors font-medium"
            >
              Vehicles
            </Link>
            <Link
              href="/charging"
              className="text-neutral-charcoal hover:text-electric-blue transition-colors font-medium"
            >
              Charging
            </Link>
            <Link
              href="/guides"
              className="text-neutral-charcoal hover:text-electric-blue transition-colors font-medium"
            >
              Guides
            </Link>
            <Link
              href="/tools"
              className="text-neutral-charcoal hover:text-electric-blue transition-colors font-medium"
            >
              Tools
            </Link>
            <Link
              href="/about"
              className="text-neutral-charcoal hover:text-electric-blue transition-colors font-medium"
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-charcoal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-light">
            <div className="flex flex-col gap-4">
              <Link
                href="/vehicles"
                className="text-neutral-charcoal hover:text-electric-blue transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Vehicles
              </Link>
              <Link
                href="/charging"
                className="text-neutral-charcoal hover:text-electric-blue transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Charging
              </Link>
              <Link
                href="/guides"
                className="text-neutral-charcoal hover:text-electric-blue transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Guides
              </Link>
              <Link
                href="/tools"
                className="text-neutral-charcoal hover:text-electric-blue transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
              </Link>
              <Link
                href="/about"
                className="text-neutral-charcoal hover:text-electric-blue transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
