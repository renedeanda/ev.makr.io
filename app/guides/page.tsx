import Link from "next/link";
import { BookOpen, Clock, ArrowRight, Zap, Battery, Wrench, Leaf } from "lucide-react";
import { getAllGuides } from "@/lib/guides";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Metadata } from "next";

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

const categoryIcons: Record<string, React.ReactNode> = {
  charging: <Zap className="text-primary" size={24} />,
  maintenance: <Wrench className="text-eco-green" size={24} />,
  battery: <Battery className="text-primary" size={24} />,
  default: <BookOpen className="text-primary" size={24} />,
};

export default function GuidesPage() {
  const allGuides = getAllGuides();
  const featuredGuides = allGuides.filter((g) => g.featured);

  // Group by category
  const categories = Array.from(new Set(allGuides.map((g) => g.category)));

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-primary to-eco-green text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 bg-eco-green/20 text-eco-green-light px-4 py-2 rounded-full mb-6">
            <Leaf size={16} />
            <span className="text-sm font-semibold">Expert EV Knowledge</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            EV Owner Guides
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Everything you need to know about electric vehicle ownership—from
            someone learning alongside you.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white border-b border-gray-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">{allGuides.length}</div>
              <div className="text-sm text-slate-light">Total Guides</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-eco-green">{featuredGuides.length}</div>
              <div className="text-sm text-slate-light">Featured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">{categories.length}</div>
              <div className="text-sm text-slate-light">Categories</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Guides */}
      {featuredGuides.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate">
              Featured Guides
            </h2>
            <p className="text-lg text-slate-light">
              Essential reading for every EV owner
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredGuides.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`}>
                <Card variant="hover" className="p-8 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                      {categoryIcons[guide.category] || categoryIcons.default}
                    </div>
                    <div className="flex-1">
                      <Badge variant="eco" size="sm" className="mb-3">
                        {guide.category}
                      </Badge>
                      <h3 className="text-2xl font-bold text-slate mb-3">
                        {guide.title}
                      </h3>
                      <p className="text-slate-light mb-4 leading-relaxed">
                        {guide.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-slate-light">
                        <span className="flex items-center gap-1">
                          <Clock size={16} />
                          {guide.readingTime}
                        </span>
                        <span>Updated {new Date(guide.updatedDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-primary font-semibold inline-flex items-center gap-2">
                    Read Guide
                    <ArrowRight size={18} />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* All Guides by Category */}
      <div className="bg-gray-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => {
            const guidesInCategory = allGuides.filter(
              (g) => g.category === category
            );
            return (
              <div key={category} className="mb-12 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    {categoryIcons[category] || categoryIcons.default}
                  </div>
                  <h3 className="text-2xl font-bold text-slate capitalize">
                    {category} ({guidesInCategory.length})
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {guidesInCategory.map((guide) => (
                    <Link key={guide.slug} href={`/guides/${guide.slug}`}>
                      <Card variant="hover" className="p-6 h-full">
                        <h4 className="text-xl font-bold text-slate mb-2">
                          {guide.title}
                        </h4>
                        <p className="text-sm text-slate-light mb-4 line-clamp-2">
                          {guide.description}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-slate-light">
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {guide.readingTime}
                          </span>
                          {guide.featured && (
                            <Badge variant="eco" size="sm">
                              Featured
                            </Badge>
                          )}
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Empty State */}
          {categories.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate mb-2">
                More Guides Coming Soon
              </h3>
              <p className="text-slate-light">
                We're working on comprehensive guides to help you with your EV journey.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary to-eco-green text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Check out our vehicle database or browse charging information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/vehicles" variant="eco" size="lg">
              Explore Vehicles
            </Button>
            <Button href="/about" variant="outline" size="lg">
              About This Site
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
