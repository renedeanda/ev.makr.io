"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, X, Zap, Battery, DollarSign, Gauge } from "lucide-react";
import { getAllVehicleModels } from "@/lib/data";
import { VehicleModel } from "@/lib/data-models";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function CompareClient() {
  const allModels = getAllVehicleModels();
  const [selectedModels, setSelectedModels] = useState<VehicleModel[]>([]);

  const addModel = (model: VehicleModel) => {
    if (selectedModels.length < 4 && !selectedModels.find(m => m.slug === model.slug)) {
      setSelectedModels([...selectedModels, model]);
    }
  };

  const removeModel = (slug: string) => {
    setSelectedModels(selectedModels.filter(m => m.slug !== slug));
  };

  return (
    <div className="min-h-screen bg-gray-bg">
      {/* Header */}
      <div className="bg-white border-b border-gray-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/vehicles"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-semibold mb-4"
          >
            <ArrowLeft size={20} />
            Back to Vehicles
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate mb-3">
            Compare EV Models
          </h1>
          <p className="text-lg text-slate-light max-w-3xl">
            Select up to 4 electric vehicles to compare specifications side-by-side
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Selection Area */}
        {selectedModels.length < 4 && (
          <Card variant="bordered" className="p-6 mb-8 bg-white">
            <div className="flex items-center gap-3 mb-4">
              <Plus className="text-primary" size={24} />
              <h2 className="text-xl font-bold text-slate">
                Select Vehicles to Compare ({selectedModels.length}/4)
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {allModels
                .filter(m => !selectedModels.find(sm => sm.slug === m.slug))
                .slice(0, 12)
                .map((model) => (
                  <button
                    key={model.slug}
                    onClick={() => addModel(model)}
                    className="p-4 border-2 border-gray-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-left"
                  >
                    <p className="font-semibold text-slate text-sm">{model.make}</p>
                    <p className="text-sm text-slate-light">{model.model}</p>
                    <p className="text-xs text-primary mt-1">${model.priceRange.min.toLocaleString()}+</p>
                  </button>
              ))}
            </div>
          </Card>
        )}

        {/* Comparison Table */}
        {selectedModels.length > 0 && (
          <Card variant="bordered" className="overflow-hidden bg-white">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-br from-primary/5 to-eco-green/5 border-b-2 border-primary">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-slate sticky left-0 bg-gradient-to-br from-primary/5 to-eco-green/5">
                      Specification
                    </th>
                    {selectedModels.map((model) => (
                      <th key={model.slug} className="px-6 py-4 text-center min-w-[200px]">
                        <div className="flex flex-col items-center gap-2">
                          <button
                            onClick={() => removeModel(model.slug)}
                            className="ml-auto p-1 hover:bg-primary/10 rounded-full transition-colors"
                            title="Remove"
                          >
                            <X size={18} className="text-slate-light" />
                          </button>
                          <div className="text-center">
                            <p className="font-bold text-slate">{model.make}</p>
                            <p className="text-sm text-slate-light">{model.model}</p>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-border">
                  {/* Price */}
                  <tr className="hover:bg-gray-bg/50">
                    <td className="px-6 py-4 font-semibold text-slate sticky left-0 bg-white">
                      <div className="flex items-center gap-2">
                        <DollarSign size={18} className="text-eco-green" />
                        Price Range
                      </div>
                    </td>
                    {selectedModels.map((model) => (
                      <td key={model.slug} className="px-6 py-4 text-center">
                        <p className="font-semibold text-slate">
                          ${model.priceRange.min.toLocaleString()} - ${model.priceRange.max.toLocaleString()}
                        </p>
                      </td>
                    ))}
                  </tr>

                  {/* Range */}
                  <tr className="hover:bg-gray-bg/50">
                    <td className="px-6 py-4 font-semibold text-slate sticky left-0 bg-white">
                      <div className="flex items-center gap-2">
                        <Battery size={18} className="text-primary" />
                        Range (EPA)
                      </div>
                    </td>
                    {selectedModels.map((model) => (
                      <td key={model.slug} className="px-6 py-4 text-center">
                        <p className="font-semibold text-slate">
                          {model.rangeMin} - {model.rangeMax} mi
                        </p>
                      </td>
                    ))}
                  </tr>

                  {/* Model Years */}
                  <tr className="hover:bg-gray-bg/50">
                    <td className="px-6 py-4 font-semibold text-slate sticky left-0 bg-white">
                      Model Years
                    </td>
                    {selectedModels.map((model) => (
                      <td key={model.slug} className="px-6 py-4 text-center">
                        <p className="text-sm text-slate-light">
                          {Math.min(...model.years)} - {Math.max(...model.years)}
                        </p>
                      </td>
                    ))}
                  </tr>

                  {/* Connectors */}
                  <tr className="hover:bg-gray-bg/50">
                    <td className="px-6 py-4 font-semibold text-slate sticky left-0 bg-white">
                      <div className="flex items-center gap-2">
                        <Zap size={18} className="text-eco-green" />
                        Charging Connector
                      </div>
                    </td>
                    {selectedModels.map((model) => (
                      <td key={model.slug} className="px-6 py-4 text-center">
                        <div className="flex flex-wrap justify-center gap-2">
                          {model.connectors.map((connector) => (
                            <span
                              key={connector}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded"
                            >
                              {connector}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Trim Count */}
                  <tr className="hover:bg-gray-bg/50">
                    <td className="px-6 py-4 font-semibold text-slate sticky left-0 bg-white">
                      Available Trims
                    </td>
                    {selectedModels.map((model) => (
                      <td key={model.slug} className="px-6 py-4 text-center">
                        <p className="text-sm text-slate-light">
                          {model.vehicleCount} {model.vehicleCount === 1 ? 'variant' : 'variants'}
                        </p>
                      </td>
                    ))}
                  </tr>

                  {/* View Details Link */}
                  <tr className="bg-gray-bg">
                    <td className="px-6 py-4 font-semibold text-slate sticky left-0 bg-gray-bg">
                      Details
                    </td>
                    {selectedModels.map((model) => (
                      <td key={model.slug} className="px-6 py-4 text-center">
                        <Link
                          href={model.urlPath}
                          className="inline-block px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors text-sm"
                        >
                          View Full Specs
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {selectedModels.length === 0 && (
          <Card variant="bordered" className="p-12 text-center bg-white">
            <div className="max-w-md mx-auto">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate mb-2">
                No Vehicles Selected
              </h3>
              <p className="text-slate-light">
                Select up to 4 vehicles from the list above to start comparing
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
