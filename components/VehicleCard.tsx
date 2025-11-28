import Link from "next/link";
import { Vehicle } from "@/lib/types";
import { Battery, Zap, DollarSign, Car } from "lucide-react";
import Badge from "@/components/ui/Badge";

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
  
  // Generate link to consolidated model page: /vehicles/brand/model
  const brandSlug = vehicle.make.toLowerCase().replace(/\s+/g, '-');
  const modelSlug = vehicle.model.toLowerCase().replace(/\s+/g, '-');
  const modelLink = `/vehicles/${brandSlug}/${modelSlug}`;

  return (
    <div className="bg-white border border-gray-border rounded-card overflow-hidden hover:shadow-card-hover transition-all duration-300 group">
      <div className="aspect-video bg-gradient-to-br from-primary/10 via-eco-green/10 to-primary/5 relative overflow-hidden">
        {/* Pattern background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '24px 24px',
            color: 'rgb(59, 130, 246, 0.2)'
          }}></div>
        </div>
        
        {/* Car icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Car className="text-primary/20 group-hover:text-primary/30 transition-colors" size={80} strokeWidth={1.5} />
        </div>
        
        {/* Make/Model overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/20 to-transparent">
          <p className="text-white/90 font-semibold text-sm drop-shadow-lg">
            {vehicle.make}
          </p>
        </div>
        
        {/* Year badge */}
        <div className="absolute top-3 right-3">
          <Badge variant="primary" size="sm">
            {vehicle.year}
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate mb-1">
            {vehicle.make} {vehicle.model}
          </h3>
          <p className="text-sm text-slate-light">{vehicle.trim}</p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-sm">
            <Battery className="text-primary" size={18} />
            <span className="font-semibold text-slate">{vehicle.range.epaRangeMiles} mi</span>
            <span className="text-slate-light">EPA Range</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Zap className="text-eco-green" size={18} />
            <Badge 
              variant={vehicle.charging.connector === "NACS" ? "nacs" : "ccs1"}
              size="sm"
            >
              {vehicle.charging.connector}
            </Badge>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="text-eco-green" size={18} />
            <span className="font-semibold text-slate">{formattedPrice}</span>
            <span className="text-slate-light">Starting MSRP</span>
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            href={modelLink}
            className="flex-1 bg-primary text-white text-center py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors font-semibold shadow-soft"
          >
            Learn More
          </Link>
          {showComparison && (
            <button className="border-2 border-primary text-primary py-2 px-4 rounded-lg hover:bg-primary/5 transition-colors font-semibold">
              Compare
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
