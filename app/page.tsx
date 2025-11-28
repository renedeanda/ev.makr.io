import Link from "next/link";
import { ArrowRight, BookOpen, Car, Zap, Calculator, Battery, Leaf } from "lucide-react";
import ModelCard from "@/components/ModelCard";
import DisclaimerBox from "@/components/DisclaimerBox";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { getAllVehicles, getAllVehicleModels } from "@/lib/data";

export default function Home() {
  const vehicles = getAllVehicles();
  const models = getAllVehicleModels();
  const featuredModels = models.slice(0, 6); // Show 6 models

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-eco-green text-white py-24 md:py-32 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            {/* Eco badge */}
            <div className="inline-flex items-center gap-2 bg-eco-green/20 text-eco-green-light px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Leaf size={16} />
              <span className="text-sm font-semibold">Sustainable Transportation Education</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              New to EVs?
              <br />
              <span className="text-eco-green-light">You're in the Right Place</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              A comprehensive, beginner-friendly guide to electric vehicle
              ownership—built by a new EV owner (2026 Subaru Solterra) learning alongside you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/guides" variant="eco" size="lg">
                Browse Guides
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button href="/vehicles" variant="outline" size="lg">
                Explore {models.length} EV Models
              </Button>
            </div>
            
            {/* Stats Preview */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl">
              <div>
                <div className="text-3xl font-bold">{models.length}</div>
                <div className="text-sm text-white/70">EV Models</div>
              </div>
              <div>
                <div className="text-3xl font-bold">{vehicles.filter(v => v.charging.connector === 'NACS').length}</div>
                <div className="text-sm text-white/70">NACS Equipped</div>
              </div>
              <div>
                <div className="text-3xl font-bold">{Array.from(new Set(vehicles.map(v => v.make))).length}</div>
                <div className="text-sm text-white/70">Manufacturers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Builders */}
      <section className="bg-white border-b border-gray-border py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate">
            <div className="flex items-center gap-2">
              <span className="text-eco-green text-lg">✓</span>
              <span className="font-semibold">No Affiliations</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-eco-green text-lg">✓</span>
              <span className="font-semibold">Educational Only</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-eco-green text-lg">✓</span>
              <span className="font-semibold">Always Check Your Manual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Path Navigation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate">
              Choose Your Journey
            </h2>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Whether you're curious about EVs, just got one, or looking to optimize your experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/guides">
              <Card variant="hover" className="p-8 h-full">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Car className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate">
                  I'm Considering an EV
                </h3>
                <p className="text-slate-light mb-6 leading-relaxed">
                  Learn about costs, range, charging infrastructure, and if an EV is right for your lifestyle.
                </p>
                <span className="text-primary font-semibold inline-flex items-center gap-2">
                  Start Here
                  <ArrowRight size={18} />
                </span>
              </Card>
            </Link>

            <Link href="/guides">
              <Card variant="hover" className="p-8 h-full bg-gradient-to-br from-eco-green/5 to-white">
                <div className="bg-eco-green/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="text-eco-green" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate">
                  I Just Got an EV
                </h3>
                <p className="text-slate-light mb-6 leading-relaxed">
                  Your complete first-week guide to charging, essential apps, and getting started with confidence.
                </p>
                <span className="text-eco-green font-semibold inline-flex items-center gap-2">
                  First Week Guide
                  <ArrowRight size={18} />
                </span>
              </Card>
            </Link>

            <Link href="/guides">
              <Card variant="hover" className="p-8 h-full">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate">
                  I'm an EV Owner
                </h3>
                <p className="text-slate-light mb-6 leading-relaxed">
                  Deep dives on battery care, road trip planning, maintenance, and maximizing your EV experience.
                </p>
                <span className="text-primary font-semibold inline-flex items-center gap-2">
                  Browse All Guides
                  <ArrowRight size={18} />
                </span>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Tools */}
      <section className="bg-gray-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate">
              Helpful Tools
            </h2>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Make informed decisions with our comparison and calculation tools
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/vehicles">
              <Card variant="hover" className="p-6 text-center">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Battery className="text-primary" size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate">Vehicle Comparison</h3>
                <p className="text-sm text-slate-light">
                  Compare specs side-by-side
                </p>
              </Card>
            </Link>

            <Link href="/tools/cost-calculator">
              <Card variant="hover" className="p-6 text-center">
                <div className="bg-eco-green/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calculator className="text-eco-green" size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate">Cost Calculator</h3>
                <p className="text-sm text-slate-light">EV vs. Gas comparison</p>
              </Card>
            </Link>

            <Link href="/tools/range-estimator">
              <Card variant="hover" className="p-6 text-center">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Battery className="text-primary" size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate">Range Estimator</h3>
                <p className="text-sm text-slate-light">Real-world range calculator</p>
              </Card>
            </Link>

            <Link href="/guides">
              <Card variant="hover" className="p-6 text-center">
                <div className="bg-eco-green/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-eco-green" size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate">Charging Guide</h3>
                <p className="text-sm text-slate-light">Learn about charging levels</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Models */}
      {featuredModels.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate mb-3">
                  Popular Electric Vehicle Models
                </h2>
                <p className="text-lg text-slate-light">
                  Explore the top EV models available in 2024-2026
                </p>
              </div>
              <Button href="/vehicles" variant="outline" size="md" className="mt-4 md:mt-0">
                View All {models.length} Models
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredModels.map((model) => (
                <ModelCard key={model.slug} model={model} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Important Information */}
      <section className="py-16 bg-gray-bg border-y border-gray-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="bordered" className="p-8 bg-white">
            <div className="flex items-start gap-4">
              <div className="bg-eco-green/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Leaf className="text-eco-green" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3 text-slate">About This Site</h3>
                <p className="text-slate-light leading-relaxed">
                  ev.makr.io is built by a new EV owner (2026 Subaru Solterra) who understands 
                  the overwhelming amount of information facing new owners. This isn't written by an
                  automotive journalist—it's written by someone learning alongside you, documenting 
                  the journey, and creating the guide they wish they had when starting.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-eco-green text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your EV Journey?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Browse our comprehensive guides, compare vehicles, or explore charging options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/guides" variant="eco" size="lg">
              Browse All Guides
            </Button>
            <Button href="/vehicles" variant="outline" size="lg">
              Explore Vehicles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
