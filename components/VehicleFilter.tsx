"use client";

import { useState } from "react";
import ModelCard from "@/components/ModelCard";
import { VehicleModel } from "@/lib/data";
import { SlidersHorizontal, X } from "lucide-react";
import Button from "@/components/ui/Button";

interface VehicleFilterProps {
  models: VehicleModel[];
}

export default function VehicleFilter({ models }: VehicleFilterProps) {
  // Get unique values for filters
  const makes = Array.from(new Set(models.map((m) => m.make))).sort();
  const allYears = Array.from(new Set(models.flatMap((m) => m.years))).sort(
    (a, b) => b - a
  );
  const connectors = Array.from(new Set(models.flatMap((m) => m.connectors))).sort();
  
  // Filter state
  const [selectedMakes, setSelectedMakes] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [selectedConnectors, setSelectedConnectors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 150000]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Apply filters
  const filteredModels = models.filter((model) => {
    const matchesMake = selectedMakes.length === 0 || selectedMakes.includes(model.make);
    const matchesYear = selectedYears.length === 0 || selectedYears.some(year => model.years.includes(year));
    const matchesConnector = selectedConnectors.length === 0 || selectedConnectors.some(connector => model.connectors.includes(connector));
    const matchesPrice = model.priceRange.min <= priceRange[1] && model.priceRange.max >= priceRange[0];
    
    return matchesMake && matchesYear && matchesConnector && matchesPrice;
  });
  
  const modelCount = filteredModels.length;
  
  // Filter helpers
  const toggleMake = (make: string) => {
    setSelectedMakes(prev =>
      prev.includes(make) ? prev.filter(m => m !== make) : [...prev, make]
    );
  };
  
  const toggleYear = (year: number) => {
    setSelectedYears(prev =>
      prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]
    );
  };
  
  const toggleConnector = (connector: string) => {
    setSelectedConnectors(prev =>
      prev.includes(connector) ? prev.filter(c => c !== connector) : [...prev, connector]
    );
  };
  
  const clearFilters = () => {
    setSelectedMakes([]);
    setSelectedYears([]);
    setSelectedConnectors([]);
    setPriceRange([0, 150000]);
  };
  
  const hasActiveFilters = selectedMakes.length > 0 || selectedYears.length > 0 || selectedConnectors.length > 0 || priceRange[0] > 0 || priceRange[1] < 150000;

  return (
    <>
      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={() => setShowFilters(!showFilters)}
            variant="outline"
            size="md"
          >
            <SlidersHorizontal className="mr-2" size={18} />
            Filters
            {hasActiveFilters && (
              <span className="ml-2 bg-primary text-white rounded-full px-2 py-0.5 text-xs">
                Active
              </span>
            )}
          </Button>
          
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-slate-light hover:text-slate flex items-center gap-1"
            >
              <X size={16} />
              Clear All Filters
            </button>
          )}
        </div>
        
        {showFilters && (
          <div className="bg-gray-bg border border-gray-border rounded-card p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Make Filter */}
              <div>
                <h3 className="font-semibold text-slate mb-3 flex items-center justify-between">
                  Make
                  <span className="text-xs text-slate-light font-normal">Scroll ↕</span>
                </h3>
                <div className="space-y-2 max-h-48 overflow-y-auto border border-gray-border rounded-lg p-3 bg-white shadow-sm">
                  {makes.map((make) => (
                    <label key={make} className="flex items-center gap-2 cursor-pointer hover:bg-gray-bg p-1 rounded transition-colors">
                      <input
                        type="checkbox"
                        checked={selectedMakes.includes(make)}
                        onChange={() => toggleMake(make)}
                        className="rounded border-gray-border text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-slate">{make}</span>
                    </label>
                  ))}
                  <div className="text-center pt-2 text-xs text-slate-light border-t border-gray-border">
                    ↑ Scroll for more ↓
                  </div>
                </div>
              </div>
              
              {/* Year Filter */}
              <div>
                <h3 className="font-semibold text-slate mb-3">Model Year</h3>
                <div className="space-y-2 border border-gray-border rounded-lg p-3 bg-white shadow-sm">
                  {allYears.map((year) => (
                    <label key={year} className="flex items-center gap-2 cursor-pointer hover:bg-gray-bg p-1 rounded transition-colors">
                      <input
                        type="checkbox"
                        checked={selectedYears.includes(year)}
                        onChange={() => toggleYear(year)}
                        className="rounded border-gray-border text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-slate">{year}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Connector Filter */}
              <div>
                <h3 className="font-semibold text-slate mb-3">Connector Type</h3>
                <div className="space-y-2 border border-gray-border rounded-lg p-3 bg-white shadow-sm">
                  {connectors.map((connector) => (
                    <label key={connector} className="flex items-center gap-2 cursor-pointer hover:bg-gray-bg p-1 rounded transition-colors">
                      <input
                        type="checkbox"
                        checked={selectedConnectors.includes(connector)}
                        onChange={() => toggleConnector(connector)}
                        className="rounded border-gray-border text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-slate">{connector}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Price Range Filter */}
              <div>
                <h3 className="font-semibold text-slate mb-3">Price Range</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-slate-light">Min Price: ${priceRange[0].toLocaleString()}</label>
                    <input
                      type="range"
                      min="0"
                      max="150000"
                      step="5000"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-light">Max Price: ${priceRange[1].toLocaleString()}</label>
                    <input
                      type="range"
                      min="0"
                      max="150000"
                      step="5000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Models Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate">
          {hasActiveFilters ? 'Filtered Results' : 'All Models'} ({modelCount})
        </h2>
        
        {modelCount === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-light text-lg mb-4">No models match your filters.</p>
            <Button onClick={clearFilters} variant="primary">
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredModels.map((model) => (
              <ModelCard key={model.slug} model={model} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
