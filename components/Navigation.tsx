"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-border sticky top-0 z-50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl group">
            <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Zap className="text-primary" size={24} />
            </div>
            <span className="text-slate">
              ev.<span className="text-primary">makr</span>.io
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/vehicles"
              className="text-slate hover:text-primary transition-colors font-medium px-3 py-2 rounded-lg hover:bg-gray-bg"
            >
              Vehicles
            </Link>
            <Link
              href="/guides"
              className="text-slate hover:text-primary transition-colors font-medium px-3 py-2 rounded-lg hover:bg-gray-bg"
            >
              Guides
            </Link>
            <Link
              href="/about"
              className="text-slate hover:text-primary transition-colors font-medium px-3 py-2 rounded-lg hover:bg-gray-bg"
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate p-2 hover:bg-gray-bg rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-border">
            <div className="flex flex-col gap-2">
              <Link
                href="/vehicles"
                className="text-slate hover:text-primary hover:bg-gray-bg transition-colors font-medium px-4 py-3 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Vehicles
              </Link>
              <Link
                href="/guides"
                className="text-slate hover:text-primary hover:bg-gray-bg transition-colors font-medium px-4 py-3 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Guides
              </Link>
              <Link
                href="/about"
                className="text-slate hover:text-primary hover:bg-gray-bg transition-colors font-medium px-4 py-3 rounded-lg"
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
