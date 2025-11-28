import { getAllGuides } from "@/lib/data";
import Link from "next/link";
import { Metadata } from "next";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "EV Guides & Resources | ev.makr.io",
  description:
    "Comprehensive guides for new electric vehicle owners. Learn about charging, battery care, road trips, apps, and everything you need to know about EV ownership.",
  keywords: [
    "EV guides",
    "electric vehicle resources",
    "EV charging guide",
    "EV ownership tips",
    "new EV owner",
  ],
};

export default function GuidesPage() {
  const allGuides = getAllGuides();
  const featuredGuides = allGuides.filter((g) => g.featured);
  const otherGuides = allGuides.filter((g) => !g.featured);

  // Group by category
  const categories = Array.from(new Set(allGuides.map((g) => g.category)));

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-electric-blue to-electric-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">EV Guides</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Learn everything you need to know about electric vehicle ownership—from
            someone learning alongside you.
          </p>
        </div>
      </div>

      {/* Featured Guides */}
      {featuredGuides.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold mb-8 text-neutral-charcoal">
            Featured Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="bg-neutral-light rounded-lg p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-electric-blue"
              >
                <div className="flex items-start gap-3 mb-4">
                  <BookOpen className="text-electric-blue flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-charcoal mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{guide.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {guide.readingTime}
                      </span>
                      <span className="capitalize">{guide.category}</span>
                    </div>
                  </div>
                </div>
                <div className="text-electric-blue font-semibold inline-flex items-center gap-2">
                  Read Guide
                  <ArrowRight size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* All Guides by Category */}
      <div className="bg-neutral-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-neutral-charcoal">
            All Guides ({allGuides.length})
          </h2>

          {categories.map((category) => {
            const guidesInCategory = allGuides.filter(
              (g) => g.category === category
            );
            return (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-bold mb-4 text-neutral-charcoal capitalize">
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {guidesInCategory.map((guide) => (
                    <Link
                      key={guide.slug}
                      href={`/guides/${guide.slug}`}
                      className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-200 hover:border-electric-blue"
                    >
                      <h4 className="text-lg font-bold text-neutral-charcoal mb-2">
                        {guide.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {guide.description}
                      </p>
                      <div className="text-xs text-gray-500 flex items-center gap-2">
                        <Clock size={14} />
                        {guide.readingTime}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-electric-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Just Got an EV?
          </h2>
          <p className="text-xl mb-8">
            Start with our comprehensive first-week guide to get up to speed quickly.
          </p>
          <Link
            href="/guides/getting-started"
            className="bg-white text-electric-blue px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition-colors inline-block"
          >
            Read the Getting Started Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
