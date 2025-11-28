import { getAllVehicleModels, getAllVehicles } from "@/lib/data";
import VehicleFilter from "@/components/VehicleFilter";
import Button from "@/components/ui/Button";
import { Leaf } from "lucide-react";

export default function VehiclesPage() {
  const allModels = getAllVehicleModels();
  const allVehicles = getAllVehicles(); // For stats
  
  // Get unique values for stats
  const makes = Array.from(new Set(allModels.map((m) => m.make))).sort();
  const years = Array.from(new Set(allModels.flatMap((m) => m.years))).sort(
    (a, b) => b - a
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-primary via-primary to-eco-green text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 bg-eco-green/20 text-eco-green-light px-4 py-2 rounded-full mb-6">
            <Leaf size={16} />
            <span className="text-sm font-semibold">Complete EV Database</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Electric Vehicles
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Explore {allModels.length} electric vehicle models with {allVehicles.length} configurations (2024-2026 model years)
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gray-bg py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {allModels.length}
              </div>
              <div className="text-sm text-slate-light">EV Models</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-eco-green">
                {makes.length}
              </div>
              <div className="text-sm text-slate-light">Brands</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {years.length}
              </div>
              <div className="text-sm text-slate-light">Model Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-eco-green">
                {
                  allVehicles.filter((v) => v.charging.connector === "NACS")
                    .length
                }
              </div>
              <div className="text-sm text-slate-light">NACS-Equipped</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Models Grid */}
      <VehicleFilter models={allModels} />

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary to-eco-green text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which EV to Choose?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Check out our comprehensive guides to help you understand what matters most.
          </p>
          <Button href="/guides" variant="eco" size="lg">
            Read Our Guides
          </Button>
        </div>
      </div>
    </div>
  );
}
