import Link from "next/link";
import { Vehicle } from "@/lib/types";
import { Battery, Zap, DollarSign } from "lucide-react";

interface VehicleCardProps {
  vehicle: Vehicle;
  showComparison?: boolean;
}

export default function VehicleCard({
  vehicle,
  showComparison = false,
}: VehicleCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(vehicle.pricing.msrpBase);

  return (
    <div className="bg-white border border-neutral-light rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video bg-neutral-light relative">
        {/* Placeholder for vehicle image */}
        <div className="absolute inset-0 flex items-center justify-center text-neutral-charcoal/30">
          <span className="text-sm">Vehicle Image</span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-neutral-charcoal mb-1">
            {vehicle.year} {vehicle.make} {vehicle.model}
          </h3>
          <p className="text-sm text-gray-600">{vehicle.trim}</p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-sm">
            <Battery className="text-electric-blue" size={18} />
            <span className="font-semibold">{vehicle.range.epaRangeMiles} mi</span>
            <span className="text-gray-600">EPA Range</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Zap className="text-electric-green" size={18} />
            <span className="font-semibold">{vehicle.charging.connector}</span>
            <span className="text-gray-600">Connector</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="text-electric-yellow" size={18} />
            <span className="font-semibold">{formattedPrice}</span>
            <span className="text-gray-600">Starting MSRP</span>
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            href={`/vehicles/${vehicle.slug}`}
            className="flex-1 bg-electric-blue text-white text-center py-2 px-4 rounded-lg hover:bg-electric-blue/90 transition-colors font-semibold"
          >
            Learn More
          </Link>
          {showComparison && (
            <button className="border border-electric-blue text-electric-blue py-2 px-4 rounded-lg hover:bg-electric-blue/10 transition-colors font-semibold">
              Compare
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
