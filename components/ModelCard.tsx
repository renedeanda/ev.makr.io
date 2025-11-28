import Link from "next/link";
import { VehicleModel } from "@/lib/data";
import { Battery, Zap, DollarSign, Car, Calendar } from "lucide-react";
import Badge from "@/components/ui/Badge";

interface ModelCardProps {
  model: VehicleModel;
}

export default function ModelCard({ model }: ModelCardProps) {
  const formattedPriceMin = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(model.priceRange.min);
  
  const formattedPriceMax = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(model.priceRange.max);

  return (
    <div className="bg-white border-2 border-gray-border rounded-card overflow-hidden hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 group">
      <div className="aspect-video bg-gradient-to-br from-primary/5 via-eco-green/5 to-primary/10 relative overflow-hidden">
        {/* Pattern background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '24px 24px',
            color: 'rgb(5, 150, 105, 0.3)'
          }}></div>
        </div>
        
        {/* Car icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Car className="text-primary/15 group-hover:text-primary/25 transition-colors" size={96} strokeWidth={1.5} />
        </div>
        
        {/* Make overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate/40 to-transparent">
          <p className="text-white font-bold text-lg drop-shadow-lg">
            {model.make}
          </p>
        </div>
        
        {/* Year range badge */}
        <div className="absolute top-3 right-3 flex gap-2">
          {model.years.length > 1 ? (
            <Badge variant="primary" size="sm">
              {model.years[model.years.length - 1]}-{model.latestYear}
            </Badge>
          ) : (
            <Badge variant="primary" size="sm">
              {model.latestYear}
            </Badge>
          )}
        </div>
        
        {/* Connector badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {model.connectors.map((connector) => (
            <Badge 
              key={connector}
              variant={connector === "NACS" ? "nacs" : "ccs1"}
              size="sm"
            >
              {connector}
            </Badge>
          ))}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-slate mb-1 group-hover:text-primary transition-colors">
            {model.make} {model.model}
          </h3>
          <p className="text-sm text-slate-light flex items-center gap-2">
            <Calendar size={14} />
            {model.vehicleCount} {model.vehicleCount === 1 ? 'configuration' : 'configurations'} • {model.years.length} {model.years.length === 1 ? 'year' : 'years'}
          </p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-sm">
            <Battery className="text-eco-green flex-shrink-0" size={18} />
            <span className="font-semibold text-slate">{model.rangeMin}-{model.rangeMax} mi</span>
            <span className="text-slate-light">EPA Range</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Zap className="text-primary flex-shrink-0" size={18} />
            <span className="font-semibold text-slate">
              {model.connectors.join("/")}
            </span>
            <span className="text-slate-light">Charging</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="text-eco-green flex-shrink-0" size={18} />
            <span className="font-semibold text-slate">
              {formattedPriceMin}
              {model.priceRange.max !== model.priceRange.min && ` - ${formattedPriceMax}`}
            </span>
          </div>
        </div>

        <Link
          href={model.urlPath}
          className="block w-full bg-primary text-white text-center py-3 px-4 rounded-lg hover:bg-primary-dark transition-colors font-semibold shadow-soft"
        >
          View Details & Compare Years
        </Link>
      </div>
    </div>
  );
}
