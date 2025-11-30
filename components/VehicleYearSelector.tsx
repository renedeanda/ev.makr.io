"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { Info, Battery, DollarSign, Zap, Gauge } from "lucide-react";
import { Vehicle } from "@/lib/types";

interface VehicleYearSelectorProps {
  vehicles: Vehicle[];
  years: number[];
  initialYear: number;
}

export default function VehicleYearSelector({ vehicles, years, initialYear }: VehicleYearSelectorProps) {
  const [selectedYear, setSelectedYear] = useState(initialYear);

  const selectedYearVehicles = vehicles.filter((v) => v.year === selectedYear);

  // Get major changes for display
  const getMajorChanges = (year: number): string[] => {
    const changes: string[] = [];

    // Find vehicles from this year and previous year
    const currentYearVehicle = vehicles.find((v) => v.year === year);
    const previousYearVehicle = vehicles.find((v) => v.year === year - 1);

    if (!currentYearVehicle) return changes;

    // If no previous year vehicle, don't show anything (could be missing data or first year we have data for)
    if (!previousYearVehicle) {
      return changes;
    }

    // Special handling for EV6 2025 - dual battery options
    if (currentYearVehicle.make === "Kia" && currentYearVehicle.model === "EV6" && year === 2025) {
      const currentYearVehicles = vehicles.filter((v) => v.year === year);
      const batteryOptions = Array.from(
        new Set(currentYearVehicles.map((v) => v.range.batteryCapacityKwh))
      ).sort((a, b) => a - b);

      if (batteryOptions.length > 1) {
        changes.push(
          `Two battery options: ${batteryOptions[0]} kWh (new base) and ${batteryOptions[1]} kWh (upgraded from ${previousYearVehicle.range.batteryCapacityKwh} kWh)`
        );
      }
      changes.push("Upgraded to NACS charging port (native Tesla Supercharger compatibility)");
      changes.push("Improved range: up to 319 miles (best in EV6 lineup)");
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

  // Calculate performance ranges for selected year
  const getPerformanceRange = (key: 'horsepower' | 'torque' | 'zeroTo60') => {
    const values = selectedYearVehicles.map(v => v.performance[key]);
    const min = Math.min(...values);
    const max = Math.max(...values);
    return min === max ? `${min}` : `${min}-${max}`;
  };

  return (
    <>
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
                    <Badge
                      variant={selectedYear === year ? "outline-light" : "eco"}
                      size="sm"
                    >
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Specs Grid for Selected Year */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card variant="bordered" className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Battery className="text-primary" size={24} />
              <h3 className="font-semibold text-slate">Range ({selectedYear})</h3>
            </div>
            <p className="text-3xl font-bold text-slate mb-1">
              {(() => {
                const ranges = selectedYearVehicles.map(v => v.range.epaRangeMiles);
                const minRange = Math.min(...ranges);
                const maxRange = Math.max(...ranges);
                return minRange === maxRange ? `${minRange}` : `${minRange}-${maxRange}`;
              })()}
              <span className="text-lg font-normal text-slate-light"> mi</span>
            </p>
            <p className="text-sm text-slate-light">EPA Range</p>
          </Card>

          <Card variant="bordered" className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="text-eco-green" size={24} />
              <h3 className="font-semibold text-slate">Price ({selectedYear})</h3>
            </div>
            <p className="text-3xl font-bold text-slate mb-1">
              {(() => {
                const prices = selectedYearVehicles.map(v => v.pricing.msrpBase);
                const minPrice = Math.min(...prices);
                const maxPrice = Math.max(...prices);
                return minPrice === maxPrice
                  ? `$${minPrice.toLocaleString()}`
                  : `$${(minPrice / 1000).toFixed(0)}k-${(maxPrice / 1000).toFixed(0)}k`;
              })()}
            </p>
            <p className="text-sm text-slate-light">MSRP Range</p>
          </Card>

          <Card variant="bordered" className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="text-eco-green" size={24} />
              <h3 className="font-semibold text-slate">Charging ({selectedYear})</h3>
            </div>
            <p className="text-3xl font-bold text-slate mb-1">
              {(() => {
                const chargeSpeeds = selectedYearVehicles.map(v => v.charging.dcChargingMaxKw);
                const uniqueSpeeds = Array.from(new Set(chargeSpeeds)).sort((a, b) => a - b);
                return uniqueSpeeds.length === 1 ? `${uniqueSpeeds[0]}` : `${uniqueSpeeds[0]}-${uniqueSpeeds[uniqueSpeeds.length - 1]}`;
              })()}
              <span className="text-lg font-normal text-slate-light"> kW</span>
            </p>
            <p className="text-sm text-slate-light">
              DC Fast Charging
            </p>
          </Card>

          <Card variant="bordered" className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Gauge className="text-primary" size={24} />
              <h3 className="font-semibold text-slate">Power ({selectedYear})</h3>
            </div>
            <p className="text-3xl font-bold text-slate mb-1">
              {getPerformanceRange('horsepower')}
              <span className="text-lg font-normal text-slate-light"> hp</span>
            </p>
            <p className="text-sm text-slate-light">
              0-60: {getPerformanceRange('zeroTo60')}s
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
                      {(() => {
                        const batteryCapacities = Array.from(
                          new Set(selectedYearVehicles.map(v => v.range.batteryCapacityKwh))
                        ).sort((a, b) => a - b);
                        return batteryCapacities.length > 1
                          ? `${batteryCapacities[0]}-${batteryCapacities[batteryCapacities.length - 1]} kWh`
                          : `${batteryCapacities[0]} kWh`;
                      })()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-light">EPA Range</span>
                    <span className="font-semibold text-slate">
                      {(() => {
                        const ranges = selectedYearVehicles.map(v => v.range.epaRangeMiles);
                        const minRange = Math.min(...ranges);
                        const maxRange = Math.max(...ranges);
                        return minRange === maxRange ? `${minRange} mi` : `${minRange}-${maxRange} mi`;
                      })()}
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
                      {getPerformanceRange('horsepower')} hp
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-light">Torque</span>
                    <span className="font-semibold text-slate">
                      {getPerformanceRange('torque')} lb-ft
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-light">0-60 mph</span>
                    <span className="font-semibold text-slate">
                      {getPerformanceRange('zeroTo60')}s
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
      </div>
    </>
  );
}
