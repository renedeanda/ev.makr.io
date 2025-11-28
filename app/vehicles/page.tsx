import { getAllVehicles } from "@/lib/data";
import VehicleCard from "@/components/VehicleCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Electric Vehicles (2023-2026) | ev.makr.io",
  description:
    "Browse and compare all electric vehicles available in the United States. Filter by make, year, range, price, and charging connector type.",
  keywords: [
    "electric vehicles 2026",
    "EV comparison",
    "best electric cars",
    "EV specs",
    "NACS EVs",
    "CCS1 EVs",
  ],
};

export default function VehiclesPage() {
  const vehicles = getAllVehicles();
  const vehicleCount = vehicles.length;

  // Get unique makes for filtering display
  const makes = Array.from(new Set(vehicles.map((v) => v.make))).sort();
  const years = Array.from(new Set(vehicles.map((v) => v.year))).sort(
    (a, b) => b - a
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-electric-blue to-electric-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Electric Vehicles
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Browse {vehicleCount} electric vehicles available in the United States
            (2023-2026 model years)
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-neutral-light py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-electric-blue">
                {vehicleCount}
              </div>
              <div className="text-sm text-gray-600">Total Vehicles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-electric-green">
                {makes.length}
              </div>
              <div className="text-sm text-gray-600">Brands</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-electric-yellow">
                {years.length}
              </div>
              <div className="text-sm text-gray-600">Model Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-electric-blue">
                {
                  vehicles.filter((v) => v.charging.connector === "NACS")
                    .length
                }
              </div>
              <div className="text-sm text-gray-600">NACS-Equipped</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-electric-blue/30 rounded-lg p-6 mb-8">
          <h2 className="font-bold text-lg mb-2 text-neutral-charcoal">
            🔍 Filtering Coming Soon
          </h2>
          <p className="text-gray-700 text-sm">
            Advanced filtering by price range, EV range, connector type (NACS/CCS1),
            and features is coming in the next update. For now, browse all vehicles
            below sorted by newest first.
          </p>
        </div>
      </div>

      {/* Vehicles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-neutral-charcoal">
          All Vehicles ({vehicleCount})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} showComparison />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-electric-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which EV to Choose?
          </h2>
          <p className="text-xl mb-8">
            Check out our guides to help you understand what matters most.
          </p>
          <a
            href="/guides/getting-started"
            className="bg-white text-electric-blue px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition-colors inline-block"
          >
            Read the Beginner's Guide
          </a>
        </div>
      </div>
    </div>
  );
}
