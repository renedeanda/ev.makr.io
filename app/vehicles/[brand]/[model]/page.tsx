"use client";

import { useState, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Zap, Battery, DollarSign, Gauge, Info } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { getVehiclesByModel } from "@/lib/data";
import { Vehicle } from "@/lib/types";

interface PageProps {
  params: Promise<{ brand: string; model: string }>;
}

export default function VehicleModelPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const { brand, model } = resolvedParams;
  
  // Decode URL parameters
  const decodedBrand = decodeURIComponent(brand);
  const decodedModel = decodeURIComponent(model);
  
  const vehicles = getVehiclesByModel(decodedBrand, decodedModel);
  
  if (vehicles.length === 0) {
    notFound();
  }
  
  const latestVehicle = vehicles[0]; // Newest year first
  const years = Array.from(new Set(vehicles.map((v) => v.year))).sort((a, b) => b - a);
  const [selectedYear, setSelectedYear] = useState(years[0]);
  
  const selectedYearVehicles = vehicles.filter((v) => v.year === selectedYear);
  
  // Get major changes for display
  const getMajorChanges = (year: number): string[] => {
    const changes: string[] = [];
    
    // Find vehicles from this year and previous year
    const currentYearVehicle = vehicles.find((v) => v.year === year);
    const previousYearVehicle = vehicles.find((v) => v.year === year - 1);
    
    if (!currentYearVehicle) return changes;
    
    if (!previousYearVehicle) {
      changes.push("Initial release");
      return changes;
    }
    
    // Check for connector changes
    if (currentYearVehicle.charging.connector !== previousYearVehicle.charging.connector) {
      changes.push(
        `Upgraded to ${currentYearVehicle.charging.connector} charging (was ${previousYearVehicle.charging.connector})`
      );
    }
    
    // Check for range improvements
    const rangeDiff = currentYearVehicle.range.epaRangeMiles - previousYearVehicle.range.epaRangeMiles;
    if (rangeDiff >= 10) {
      changes.push(`Improved range: +${rangeDiff} miles (now ${currentYearVehicle.range.epaRangeMiles} mi)`);
    }
    
    // Check for battery capacity changes
    if (currentYearVehicle.range.batteryCapacityKwh !== previousYearVehicle.range.batteryCapacityKwh) {
      changes.push(
        `Battery capacity: ${currentYearVehicle.range.batteryCapacityKwh} kWh (was ${previousYearVehicle.range.batteryCapacityKwh} kWh)`
      );
    }
    
    // Check for major feature additions
    if (currentYearVehicle.features.hasHeatPump && !previousYearVehicle.features.hasHeatPump) {
      changes.push("Added heat pump for improved cold weather efficiency");
    }
    
    if (currentYearVehicle.features.hasV2L && !previousYearVehicle.features.hasV2L) {
      changes.push("Added Vehicle-to-Load (V2L) capability");
    }
    
    return changes;
  };
  
  const currentYearChanges = getMajorChanges(selectedYear);
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-eco-green text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/vehicles" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to All Vehicles
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {latestVehicle.make} {latestVehicle.model}
              </h1>
              <p className="text-xl text-white/90">
                Available model years: {years.join(", ")}
              </p>
            </div>
            
            <div className="flex gap-2">
              {latestVehicle.charging.connector && (
                <Badge variant="outline-light" size="md">
                  {latestVehicle.charging.connector}
                </Badge>
              )}
              <Badge variant="outline-light" size="md">
                All-Electric
              </Badge>
            </div>
          </div>
        </div>
      </div>
      
      {/* Year Selection Tabs */}
      <div className="bg-gray-bg border-b border-gray-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all duration-200 ${
                  selectedYear === year
                    ? "bg-primary text-white shadow-soft"
                    : "bg-white text-slate hover:bg-gray-bg border border-gray-border"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  {year}
                  {year === years[0] && (
                    <Badge variant="eco" size="sm">
                      Latest
                    </Badge>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Major Changes Callout */}
      {currentYearChanges.length > 0 && (
        <div className="bg-eco-green/5 border-b border-eco-green/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-start gap-3">
              <Info className="text-eco-green mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-2 text-slate">
                  What's New in {selectedYear}
                </h3>
                <ul className="space-y-1">
                  {currentYearChanges.map((change, index) => (
                    <li key={index} className="text-slate-light">
                      • {change}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Solterra Owner's Guide Banner */}
      {latestVehicle.make === "Subaru" && latestVehicle.model === "Solterra" && (
        <div className="bg-gradient-to-r from-primary/5 to-eco-green/5 border-b border-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Card variant="bordered" className="p-6 bg-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="eco" size="sm">NEW GUIDE</Badge>
                    <Badge variant="nacs" size="sm">2026 Owner's Guide</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-slate mb-2">
                    Complete 2026 Solterra Owner's Guide
                  </h3>
                  <p className="text-slate-light text-lg mb-3">
                    Everything you need to know about your 2026 Solterra: NACS charging, Plug & Charge at Tesla Superchargers, battery preconditioning, range optimization, and more.
                  </p>
                  <ul className="text-slate-light space-y-1">
                    <li className="flex items-center gap-2">
                      <span className="text-eco-green">✓</span>
                      <span>How to use Plug & Charge with Subaru Connect app</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-eco-green">✓</span>
                      <span>Maximizing your 288-mile range (real-world tips)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-eco-green">✓</span>
                      <span>Battery preconditioning for faster winter charging</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-eco-green">✓</span>
                      <span>Complete trim comparison (Premium, Limited, Touring XT)</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-shrink-0">
                  <Button href="/guides/2026-solterra-owners-guide" variant="primary" size="lg">
                    Read Complete Guide →
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card variant="bordered" className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Battery className="text-primary" size={24} />
              <h3 className="font-semibold text-slate">Range</h3>
            </div>
            <p className="text-3xl font-bold text-slate mb-1">
              {selectedYearVehicles[0].range.epaRangeMiles}
              <span className="text-lg font-normal text-slate-light"> mi</span>
            </p>
            <p className="text-sm text-slate-light">EPA Estimated</p>
          </Card>
          
          <Card variant="bordered" className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="text-eco-green" size={24} />
              <h3 className="font-semibold text-slate">Starting Price</h3>
            </div>
            <p className="text-3xl font-bold text-slate mb-1">
              ${selectedYearVehicles[0].pricing.msrpBase.toLocaleString()}
            </p>
            <p className="text-sm text-slate-light">MSRP</p>
          </Card>
          
          <Card variant="bordered" className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="text-eco-green" size={24} />
              <h3 className="font-semibold text-slate">DC Fast Charging</h3>
            </div>
            <p className="text-3xl font-bold text-slate mb-1">
              {selectedYearVehicles[0].charging.dcChargingMaxKw}
              <span className="text-lg font-normal text-slate-light"> kW</span>
            </p>
            <p className="text-sm text-slate-light">
              10-80% in ~{selectedYearVehicles[0].charging.chargingTime10to80Minutes} min
            </p>
          </Card>
          
          <Card variant="bordered" className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Gauge className="text-primary" size={24} />
              <h3 className="font-semibold text-slate">Performance</h3>
            </div>
            <p className="text-3xl font-bold text-slate mb-1">
              {selectedYearVehicles[0].performance.horsepower}
              <span className="text-lg font-normal text-slate-light"> hp</span>
            </p>
            <p className="text-sm text-slate-light">
              0-60: {selectedYearVehicles[0].performance.zeroTo60}s
            </p>
          </Card>
        </div>
        
        {/* Available Trims */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate mb-6">
            Available Trims ({selectedYear})
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedYearVehicles.map((vehicle) => (
              <Card key={vehicle.id} variant="hover" className="p-6">
                <h3 className="text-xl font-bold text-slate mb-4">{vehicle.trim}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-light">Starting MSRP</span>
                    <span className="font-semibold text-slate">
                      ${vehicle.pricing.msrpBase.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-light">EPA Range</span>
                    <span className="font-semibold text-slate">
                      {vehicle.range.epaRangeMiles} mi
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-light">Drivetrain</span>
                    <span className="font-semibold text-slate">
                      {vehicle.performance.drivetrain}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-light">Connector</span>
                    <Badge 
                      variant={vehicle.charging.connector === "NACS" ? "nacs" : "ccs1"} 
                      size="sm"
                    >
                      {vehicle.charging.connector}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {vehicle.features.hasHeatPump && (
                    <div className="flex items-center gap-2 text-sm text-eco-green">
                      <span className="text-lg">✓</span> Heat Pump
                    </div>
                  )}
                  {vehicle.features.hasV2L && (
                    <div className="flex items-center gap-2 text-sm text-eco-green">
                      <span className="text-lg">✓</span> Vehicle-to-Load (V2L)
                    </div>
                  )}
                  {vehicle.features.hasV2H && (
                    <div className="flex items-center gap-2 text-sm text-eco-green">
                      <span className="text-lg">✓</span> Vehicle-to-Home (V2H)
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Technical Specifications */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate mb-6">
            Technical Specifications ({selectedYear})
          </h2>
          
          <Card variant="bordered" className="overflow-hidden">
            <div className="divide-y divide-gray-border">
              {/* Battery & Range */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate mb-4">Battery & Range</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between">
                    <span className="text-slate-light">Battery Capacity</span>
                    <span className="font-semibold text-slate">
                      {selectedYearVehicles[0].range.batteryCapacityKwh} kWh
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-light">EPA Range</span>
                    <span className="font-semibold text-slate">
                      {selectedYearVehicles[0].range.epaRangeMiles} mi
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-light">Efficiency (MPGe)</span>
                    <span className="font-semibold text-slate">
                      {selectedYearVehicles[0].range.efficiencyMPGe} MPGe
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-light">Efficiency (kWh/100mi)</span>
                    <span className="font-semibold text-slate">
                      {selectedYearVehicles[0].range.efficiencyKwhPer100Mi} kWh
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Charging */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate mb-4">Charging</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between">
                    <span className="text-slate-light">Connector Type</span>
                    <Badge 
                      variant={selectedYearVehicles[0].charging.connector === "NACS" ? "nacs" : "ccs1"}
                    >
                      {selectedYearVehicles[0].charging.connector}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-light">AC Charging (Max)</span>
                    <span className="font-semibold text-slate">
                      {selectedYearVehicles[0].charging.acChargingMaxKw} kW
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-light">DC Fast Charging (Max)</span>
                    <span className="font-semibold text-slate">
                      {selectedYearVehicles[0].charging.dcChargingMaxKw} kW
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-light">10-80% Charge Time</span>
                    <span className="font-semibold text-slate">
                      ~{selectedYearVehicles[0].charging.chargingTime10to80Minutes} min
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Performance */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate mb-4">Performance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between">
                    <span className="text-slate-light">Horsepower</span>
                    <span className="font-semibold text-slate">
                      {selectedYearVehicles[0].performance.horsepower} hp
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-light">Torque</span>
                    <span className="font-semibold text-slate">
                      {selectedYearVehicles[0].performance.torque} lb-ft
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-light">0-60 mph</span>
                    <span className="font-semibold text-slate">
                      {selectedYearVehicles[0].performance.zeroTo60}s
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-light">Drivetrain</span>
                    <span className="font-semibold text-slate">
                      {selectedYearVehicles[0].performance.drivetrain}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Physical Dimensions */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate mb-4">Dimensions & Capacity</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between">
                    <span className="text-slate-light">Seating Capacity</span>
                    <span className="font-semibold text-slate">
                      {selectedYearVehicles[0].physical.seatingCapacity} passengers
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-light">Cargo Volume</span>
                    <span className="font-semibold text-slate">
                      {selectedYearVehicles[0].physical.cargoVolumeCuFt} cu ft
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-light">Towing Capacity</span>
                    <span className="font-semibold text-slate">
                      {selectedYearVehicles[0].physical.towingCapacityLbs.toLocaleString()} lbs
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-light">Curb Weight</span>
                    <span className="font-semibold text-slate">
                      {selectedYearVehicles[0].physical.curbWeightLbs.toLocaleString()} lbs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Data Source & Notes */}
        <Card variant="bordered" className="p-6 bg-gray-bg">
          <div className="flex items-start gap-3">
            <Info className="text-slate-light mt-1 flex-shrink-0" size={20} />
            <div className="text-sm">
              <p className="text-slate mb-2">
                <strong>Data Source:</strong> {selectedYearVehicles[0].meta.dataSource}
              </p>
              <p className="text-slate-light mb-2">
                <strong>Last Verified:</strong> {new Date(selectedYearVehicles[0].meta.lastVerified).toLocaleDateString()}
              </p>
              {selectedYearVehicles[0].meta.notes && (
                <p className="text-slate-light">
                  <strong>Note:</strong> {selectedYearVehicles[0].meta.notes}
                </p>
              )}
              <p className="text-slate-light mt-3">
                Always verify specifications with the manufacturer before making purchase decisions.
              </p>
            </div>
          </div>
        </Card>
        
        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-slate mb-4">
            Ready to Learn More?
          </h3>
          <p className="text-slate-light mb-6">
            Explore charging options, compare with other vehicles, or read our guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/guides/understanding-charging" variant="primary" size="lg">
              Learn About Charging
            </Button>
            <Button href="/tools/comparison" variant="outline" size="lg">
              Compare Vehicles
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
