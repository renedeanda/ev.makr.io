import Link from "next/link";
import { ArrowRight, BookOpen, Car, Zap, Calculator } from "lucide-react";
import VehicleCard from "@/components/VehicleCard";
import DisclaimerBox from "@/components/DisclaimerBox";
import { getAllVehicles } from "@/lib/data";

export default function Home() {
  const vehicles = getAllVehicles();
  const featuredVehicles = vehicles.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-electric-blue to-electric-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              New to EVs?
              <br />
              You&apos;re in the Right Place
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              A comprehensive, beginner-friendly guide to electric vehicle
              ownership—built by a new EV owner learning alongside you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/guides/getting-started"
                className="bg-white text-electric-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/vehicles"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Explore Vehicles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Builders */}
      <section className="bg-neutral-light py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-charcoal">
            <div className="flex items-center gap-2">
              <span className="font-semibold">✓ No Affiliations</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">✓ Educational Only</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">✓ Always Check Your Manual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Path Navigation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neutral-charcoal">
            Choose Your Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/guides/considering-an-ev"
              className="bg-white border-2 border-neutral-light rounded-lg p-8 hover:border-electric-blue transition-colors group"
            >
              <Car
                className="text-electric-blue mb-4 group-hover:scale-110 transition-transform"
                size={48}
              />
              <h3 className="text-2xl font-bold mb-3 text-neutral-charcoal">
                I&apos;m Considering an EV
              </h3>
              <p className="text-gray-600 mb-4">
                Learn about costs, range, charging, and if an EV is right for you.
              </p>
              <span className="text-electric-blue font-semibold inline-flex items-center gap-2">
                Start Here
                <ArrowRight size={18} />
              </span>
            </Link>

            <Link
              href="/guides/first-week"
              className="bg-white border-2 border-neutral-light rounded-lg p-8 hover:border-electric-green transition-colors group"
            >
              <Zap
                className="text-electric-green mb-4 group-hover:scale-110 transition-transform"
                size={48}
              />
              <h3 className="text-2xl font-bold mb-3 text-neutral-charcoal">
                I Just Got an EV
              </h3>
              <p className="text-gray-600 mb-4">
                Your complete first-week guide to charging, apps, and getting started.
              </p>
              <span className="text-electric-green font-semibold inline-flex items-center gap-2">
                First Week Guide
                <ArrowRight size={18} />
              </span>
            </Link>

            <Link
              href="/guides"
              className="bg-white border-2 border-neutral-light rounded-lg p-8 hover:border-electric-yellow transition-colors group"
            >
              <BookOpen
                className="text-electric-yellow mb-4 group-hover:scale-110 transition-transform"
                size={48}
              />
              <h3 className="text-2xl font-bold mb-3 text-neutral-charcoal">
                I&apos;m an EV Owner
              </h3>
              <p className="text-gray-600 mb-4">
                Deep dives on battery care, road trips, maintenance, and optimization.
              </p>
              <span className="text-electric-yellow font-semibold inline-flex items-center gap-2">
                Browse All Guides
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Tools */}
      <section className="bg-neutral-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neutral-charcoal">
            Quick Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/tools/comparison"
              className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow text-center"
            >
              <Calculator className="text-electric-blue mx-auto mb-3" size={40} />
              <h3 className="font-bold text-lg mb-2">Vehicle Comparison</h3>
              <p className="text-sm text-gray-600">
                Compare specs side-by-side
              </p>
            </Link>

            <Link
              href="/tools/cost-calculator"
              className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow text-center"
            >
              <Calculator className="text-electric-green mx-auto mb-3" size={40} />
              <h3 className="font-bold text-lg mb-2">Cost Calculator</h3>
              <p className="text-sm text-gray-600">EV vs. Gas comparison</p>
            </Link>

            <Link
              href="/tools/range-estimator"
              className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow text-center"
            >
              <Calculator className="text-electric-yellow mx-auto mb-3" size={40} />
              <h3 className="font-bold text-lg mb-2">Range Estimator</h3>
              <p className="text-sm text-gray-600">Real-world range calculator</p>
            </Link>

            <Link
              href="/tools/charging-time"
              className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow text-center"
            >
              <Zap className="text-electric-blue mx-auto mb-3" size={40} />
              <h3 className="font-bold text-lg mb-2">Charging Time</h3>
              <p className="text-sm text-gray-600">Calculate charge duration</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      {featuredVehicles.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-charcoal">
                Featured Vehicles
              </h2>
              <Link
                href="/vehicles"
                className="text-electric-blue font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                View All
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Important Information */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <DisclaimerBox type="info">
            <p>
              <strong>About This Site:</strong> ev.makr.io is built by a new EV
              owner (2026 Subaru Solterra) who understands the overwhelming amount
              of information facing new owners. This isn&apos;t written by an
              automotive journalist—it&apos;s written by someone learning
              alongside you, documenting the journey, and creating the guide they
              wish they had when starting.
            </p>
          </DisclaimerBox>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-electric-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl mb-8">
            Start with our comprehensive beginner&apos;s guide or explore specific
            topics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/guides"
              className="bg-white text-electric-blue px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition-colors"
            >
              Browse All Guides
            </Link>
            <Link
              href="/charging"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              Learn About Charging
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
