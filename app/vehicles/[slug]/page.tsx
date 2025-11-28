import { getVehicleBySlug, getAllVehicles } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import {
  Battery,
  Zap,
  DollarSign,
  Gauge,
  Users,
  PackageCheck,
  TrendingUp,
  ArrowLeft,
} from "lucide-react";
import DisclaimerBox from "@/components/DisclaimerBox";

export async function generateStaticParams() {
  const vehicles = getAllVehicles();
  return vehicles.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    return {
      title: "Vehicle Not Found",
    };
  }

  return {
    title: `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim} | ev.makr.io`,
    description: `Complete specs and details for the ${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim}. ${vehicle.range.epaRangeMiles} miles EPA range, ${vehicle.charging.connector} charging, ${vehicle.meta.notes}`,
  };
}

export default async function VehiclePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(vehicle.pricing.msrpBase);

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-neutral-light border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/vehicles"
            className="inline-flex items-center gap-2 text-electric-blue hover:text-electric-blue/80 transition-colors font-semibold"
          >
            <ArrowLeft size={20} />
            Back to All Vehicles
          </Link>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-electric-blue to-electric-green text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-2 text-white/80 font-semibold">{vehicle.make}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            {vehicle.year} {vehicle.model}
          </h1>
          <p className="text-xl md:text-2xl text-white/90">{vehicle.trim}</p>
        </div>
      </div>

      {/* Key Stats Row */}
      <div className="bg-neutral-light py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Battery className="text-electric-blue mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-neutral-charcoal">
                {vehicle.range.epaRangeMiles} mi
              </div>
              <div className="text-sm text-gray-600">EPA Range</div>
            </div>
            <div className="text-center">
              <Zap className="text-electric-green mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-neutral-charcoal">
                {vehicle.charging.connector}
              </div>
              <div className="text-sm text-gray-600">Connector</div>
            </div>
            <div className="text-center">
              <DollarSign className="text-electric-yellow mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-neutral-charcoal">
                {formattedPrice}
              </div>
              <div className="text-sm text-gray-600">Starting MSRP</div>
            </div>
            <div className="text-center">
              <TrendingUp className="text-electric-blue mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-neutral-charcoal">
                {vehicle.range.efficiencyMPGe} MPGe
              </div>
              <div className="text-sm text-gray-600">Efficiency</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About */}
        {vehicle.meta.notes && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-neutral-charcoal">
              About This Vehicle
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {vehicle.meta.notes}
            </p>
          </div>
        )}

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Range & Battery */}
          <div className="bg-neutral-light rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Battery className="text-electric-blue" size={24} />
              Range & Battery
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">EPA Range:</span>
                <span className="font-semibold">
                  {vehicle.range.epaRangeMiles} miles
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Battery Capacity:</span>
                <span className="font-semibold">
                  {vehicle.range.batteryCapacityKwh} kWh
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Efficiency:</span>
                <span className="font-semibold">
                  {vehicle.range.efficiencyMPGe} MPGe
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">kWh per 100 miles:</span>
                <span className="font-semibold">
                  {vehicle.range.efficiencyKwhPer100Mi} kWh
                </span>
              </div>
            </div>
          </div>

          {/* Charging */}
          <div className="bg-neutral-light rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Zap className="text-electric-green" size={24} />
              Charging
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Connector Type:</span>
                <span className="font-semibold">{vehicle.charging.connector}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">AC Charging (Max):</span>
                <span className="font-semibold">
                  {vehicle.charging.acChargingMaxKw} kW
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">DC Fast Charging (Max):</span>
                <span className="font-semibold">
                  {vehicle.charging.dcChargingMaxKw} kW
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">10-80% Charge Time:</span>
                <span className="font-semibold">
                  ~{vehicle.charging.chargingTime10to80Minutes} min
                </span>
              </div>
            </div>
          </div>

          {/* Performance */}
          <div className="bg-neutral-light rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Gauge className="text-electric-yellow" size={24} />
              Performance
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Horsepower:</span>
                <span className="font-semibold">{vehicle.performance.horsepower} hp</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Torque:</span>
                <span className="font-semibold">
                  {vehicle.performance.torque} lb-ft
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">0-60 mph:</span>
                <span className="font-semibold">
                  {vehicle.performance.zeroTo60} sec
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Drivetrain:</span>
                <span className="font-semibold">{vehicle.performance.drivetrain}</span>
              </div>
            </div>
          </div>

          {/* Dimensions & Capacity */}
          <div className="bg-neutral-light rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Users className="text-electric-blue" size={24} />
              Dimensions & Capacity
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Seating:</span>
                <span className="font-semibold">
                  {vehicle.physical.seatingCapacity} passengers
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cargo Volume:</span>
                <span className="font-semibold">
                  {vehicle.physical.cargoVolumeCuFt} cu ft
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Towing Capacity:</span>
                <span className="font-semibold">
                  {vehicle.physical.towingCapacityLbs > 0
                    ? `${vehicle.physical.towingCapacityLbs.toLocaleString()} lbs`
                    : "N/A"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Curb Weight:</span>
                <span className="font-semibold">
                  {vehicle.physical.curbWeightLbs.toLocaleString()} lbs
                </span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-neutral-light rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <PackageCheck className="text-electric-green" size={24} />
              Features
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Heat Pump:</span>
                <span className="font-semibold">
                  {vehicle.features.hasHeatPump ? "✓ Yes" : "✗ No"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Vehicle-to-Load (V2L):</span>
                <span className="font-semibold">
                  {vehicle.features.hasV2L ? "✓ Yes" : "✗ No"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Vehicle-to-Home (V2H):</span>
                <span className="font-semibold">
                  {vehicle.features.hasV2H ? "✓ Yes" : "✗ No"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Driver Assist:</span>
                <span className="font-semibold text-sm">
                  {vehicle.features.autopilotLevel}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Important Disclaimer */}
        <DisclaimerBox type="info">
          <p className="mb-2">
            <strong>Data Verification:</strong> Specifications verified from{" "}
            {vehicle.meta.dataSource} as of {vehicle.meta.lastVerified}.
          </p>
          <p>
            Always verify current specifications, pricing, and availability with the
            manufacturer before making purchasing decisions. Features and
            specifications are subject to change.
          </p>
        </DisclaimerBox>

        {/* External Links */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={vehicle.meta.manufacturerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-electric-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-electric-blue/90 transition-colors inline-block"
          >
            View on Manufacturer Site →
          </a>
          <Link
            href="/guides/getting-started"
            className="border-2 border-electric-blue text-electric-blue px-6 py-3 rounded-lg font-semibold hover:bg-electric-blue/10 transition-colors inline-block"
          >
            New Owner? Read the Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
