"use client";

import { useState, useEffect } from "react";
import { DollarSign, Zap, Fuel, Wrench, TrendingDown, Share2, Calendar } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

// Preset configurations
const PRESETS = {
  commuter: {
    name: "Daily Commuter",
    evPrice: 42000,
    gasCarPrice: 32000,
    milesPerYear: 15000,
    gasMpg: 30,
    evEfficiency: 3.5,
  },
  family: {
    name: "Family SUV",
    evPrice: 55000,
    gasCarPrice: 42000,
    milesPerYear: 12000,
    gasMpg: 25,
    evEfficiency: 3.0,
  },
  roadtripper: {
    name: "Road Tripper",
    evPrice: 65000,
    gasCarPrice: 50000,
    milesPerYear: 20000,
    gasMpg: 28,
    evEfficiency: 3.2,
  },
};

export default function CostCalculatorClient() {
  // EV inputs
  const [evPrice, setEvPrice] = useState(45000);
  const [evRange, setEvRange] = useState(300);
  const [evEfficiency, setEvEfficiency] = useState(3.5); // mi/kWh
  const [electricityRate, setElectricityRate] = useState(0.14);
  const [evInsurance, setEvInsurance] = useState(1400); // Annual

  // Gas car inputs
  const [gasCarPrice, setGasCarPrice] = useState(35000);
  const [gasMpg, setGasMpg] = useState(30);
  const [gasPricePerGallon, setGasPricePerGallon] = useState(3.50);
  const [gasInsurance, setGasInsurance] = useState(1200); // Annual

  // Shared inputs
  const [milesPerYear, setMilesPerYear] = useState(12000);
  const [years, setYears] = useState(5);

  // Load from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('evPrice')) setEvPrice(Number(params.get('evPrice')));
    if (params.get('gasCarPrice')) setGasCarPrice(Number(params.get('gasCarPrice')));
    if (params.get('milesPerYear')) setMilesPerYear(Number(params.get('milesPerYear')));
    if (params.get('years')) setYears(Number(params.get('years')));
    if (params.get('gasMpg')) setGasMpg(Number(params.get('gasMpg')));
    if (params.get('evEfficiency')) setEvEfficiency(Number(params.get('evEfficiency')));
    if (params.get('electricityRate')) setElectricityRate(Number(params.get('electricityRate')));
    if (params.get('gasPricePerGallon')) setGasPricePerGallon(Number(params.get('gasPricePerGallon')));
  }, []);

  // Apply preset
  const applyPreset = (presetKey: keyof typeof PRESETS) => {
    const preset = PRESETS[presetKey];
    setEvPrice(preset.evPrice);
    setGasCarPrice(preset.gasCarPrice);
    setMilesPerYear(preset.milesPerYear);
    setGasMpg(preset.gasMpg);
    setEvEfficiency(preset.evEfficiency);
  };

  // Share via URL
  const shareCalculation = () => {
    const params = new URLSearchParams({
      evPrice: evPrice.toString(),
      gasCarPrice: gasCarPrice.toString(),
      milesPerYear: milesPerYear.toString(),
      years: years.toString(),
      gasMpg: gasMpg.toString(),
      evEfficiency: evEfficiency.toString(),
      electricityRate: electricityRate.toString(),
      gasPricePerGallon: gasPricePerGallon.toString(),
    });
    const url = `${window.location.origin}${window.location.pathname}?${params}`;
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard! Share this URL to show your comparison.');
  };

  // Calculate costs
  const calculateCosts = () => {
    // Annual fuel costs
    const evAnnualFuel = (milesPerYear / evEfficiency) * electricityRate;
    const gasAnnualFuel = (milesPerYear / gasMpg) * gasPricePerGallon;

    // Annual maintenance (EVs typically 30-40% less maintenance)
    const evAnnualMaintenance = 500; // Conservative estimate
    const gasAnnualMaintenance = 1200; // Oil changes, transmission, etc.

    // Total costs over period
    const evTotalFuel = evAnnualFuel * years;
    const gasTotalFuel = gasAnnualFuel * years;
    const evTotalMaintenance = evAnnualMaintenance * years;
    const gasTotalMaintenance = gasAnnualMaintenance * years;
    const evTotalInsurance = evInsurance * years;
    const gasTotalInsurance = gasInsurance * years;

    const evTotalCost = evPrice + evTotalFuel + evTotalMaintenance + evTotalInsurance;
    const gasTotalCost = gasCarPrice + gasTotalFuel + gasTotalMaintenance + gasTotalInsurance;

    const savings = gasTotalCost - evTotalCost;
    const savingsPerMonth = savings / (years * 12);

    // Calculate break-even point (in months)
    const purchasePriceDiff = evPrice - gasCarPrice;
    const monthlyFuelSavings = (gasAnnualFuel - evAnnualFuel) / 12;
    const monthlyMaintenanceSavings = (gasAnnualMaintenance - evAnnualMaintenance) / 12;
    const monthlyInsuranceDiff = (evInsurance - gasInsurance) / 12;
    const monthlySavings = monthlyFuelSavings + monthlyMaintenanceSavings - monthlyInsuranceDiff;

    let breakEvenMonths = null;
    if (monthlySavings > 0 && purchasePriceDiff > 0) {
      breakEvenMonths = Math.ceil(purchasePriceDiff / monthlySavings);
    }

    return {
      evAnnualFuel,
      gasAnnualFuel,
      evAnnualMaintenance,
      gasAnnualMaintenance,
      evTotalCost,
      gasTotalCost,
      savings,
      savingsPerMonth,
      evTotalFuel,
      gasTotalFuel,
      evTotalMaintenance,
      gasTotalMaintenance,
      evTotalInsurance,
      gasTotalInsurance,
      breakEvenMonths,
    };
  };

  const costs = calculateCosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate mb-4">
          EV vs Gas Cost Calculator
        </h1>
        <p className="text-xl text-slate-light max-w-3xl mx-auto">
          Compare the total cost of ownership between electric and gas vehicles over time, including purchase price, fuel, and maintenance costs.
        </p>
      </div>

      {/* Preset Templates */}
      <Card variant="bordered" className="p-6 mb-8 bg-gradient-to-br from-primary/5 to-eco-green/5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg text-slate mb-1">Quick Presets</h3>
            <p className="text-sm text-slate-light">Load common scenarios to get started</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => applyPreset('commuter')}
              className="px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Daily Commuter
            </button>
            <button
              onClick={() => applyPreset('family')}
              className="px-4 py-2 bg-eco-green text-white rounded-lg font-semibold hover:bg-eco-green-dark transition-colors"
            >
              Family SUV
            </button>
            <button
              onClick={() => applyPreset('roadtripper')}
              className="px-4 py-2 bg-accent-sage text-white rounded-lg font-semibold hover:bg-accent-sage-dark transition-colors"
            >
              Road Tripper
            </button>
            <button
              onClick={shareCalculation}
              className="px-4 py-2 bg-slate text-white rounded-lg font-semibold hover:bg-slate-light transition-colors inline-flex items-center gap-2"
            >
              <Share2 size={18} />
              Share
            </button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* EV Inputs */}
        <Card variant="bordered" className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="text-primary" size={32} />
            <h2 className="text-2xl font-bold text-slate">Electric Vehicle</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate mb-2">
                Purchase Price
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="25000"
                  max="100000"
                  step="1000"
                  value={evPrice}
                  onChange={(e) => setEvPrice(Number(e.target.value))}
                  className="flex-1"
                />
                <span className="text-lg font-bold text-primary min-w-[120px]">
                  ${evPrice.toLocaleString()}
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate mb-2">
                EPA Range (miles)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="150"
                  max="500"
                  step="10"
                  value={evRange}
                  onChange={(e) => setEvRange(Number(e.target.value))}
                  className="flex-1"
                />
                <span className="text-lg font-bold text-primary min-w-[120px]">
                  {evRange} mi
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate mb-2">
                Efficiency (mi/kWh)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="2.0"
                  max="5.0"
                  step="0.1"
                  value={evEfficiency}
                  onChange={(e) => setEvEfficiency(Number(e.target.value))}
                  className="flex-1"
                />
                <span className="text-lg font-bold text-primary min-w-[120px]">
                  {evEfficiency.toFixed(1)} mi/kWh
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate mb-2">
                Electricity Rate ($/kWh)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0.08"
                  max="0.40"
                  step="0.01"
                  value={electricityRate}
                  onChange={(e) => setElectricityRate(Number(e.target.value))}
                  className="flex-1"
                />
                <span className="text-lg font-bold text-primary min-w-[120px]">
                  ${electricityRate.toFixed(2)}/kWh
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate mb-2">
                Annual Insurance
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="800"
                  max="2500"
                  step="100"
                  value={evInsurance}
                  onChange={(e) => setEvInsurance(Number(e.target.value))}
                  className="flex-1"
                />
                <span className="text-lg font-bold text-primary min-w-[120px]">
                  ${evInsurance.toLocaleString()}/yr
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Gas Car Inputs */}
        <Card variant="bordered" className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Fuel className="text-slate" size={32} />
            <h2 className="text-2xl font-bold text-slate">Gas Vehicle</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate mb-2">
                Purchase Price
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="20000"
                  max="80000"
                  step="1000"
                  value={gasCarPrice}
                  onChange={(e) => setGasCarPrice(Number(e.target.value))}
                  className="flex-1"
                />
                <span className="text-lg font-bold text-slate min-w-[120px]">
                  ${gasCarPrice.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="h-[60px]"></div>

            <div>
              <label className="block text-sm font-semibold text-slate mb-2">
                Fuel Economy (MPG)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="15"
                  max="50"
                  step="1"
                  value={gasMpg}
                  onChange={(e) => setGasMpg(Number(e.target.value))}
                  className="flex-1"
                />
                <span className="text-lg font-bold text-slate min-w-[120px]">
                  {gasMpg} MPG
                </span>
              </div>
            </div>

            <div className="h-[60px]"></div>

            <div>
              <label className="block text-sm font-semibold text-slate mb-2">
                Gas Price ($/gallon)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="2.50"
                  max="6.00"
                  step="0.10"
                  value={gasPricePerGallon}
                  onChange={(e) => setGasPricePerGallon(Number(e.target.value))}
                  className="flex-1"
                />
                <span className="text-lg font-bold text-slate min-w-[120px]">
                  ${gasPricePerGallon.toFixed(2)}/gal
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate mb-2">
                Annual Insurance
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="800"
                  max="2500"
                  step="100"
                  value={gasInsurance}
                  onChange={(e) => setGasInsurance(Number(e.target.value))}
                  className="flex-1"
                />
                <span className="text-lg font-bold text-slate min-w-[120px]">
                  ${gasInsurance.toLocaleString()}/yr
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Shared Inputs */}
      <Card variant="bordered" className="p-6 mb-12">
        <h3 className="text-xl font-bold text-slate mb-6">Driving Habits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate mb-2">
              Miles Driven Per Year
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="5000"
                max="30000"
                step="1000"
                value={milesPerYear}
                onChange={(e) => setMilesPerYear(Number(e.target.value))}
                className="flex-1"
              />
              <span className="text-lg font-bold text-slate min-w-[140px]">
                {milesPerYear.toLocaleString()} mi/year
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate mb-2">
              Ownership Period
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="flex-1"
              />
              <span className="text-lg font-bold text-slate min-w-[140px]">
                {years} {years === 1 ? 'year' : 'years'}
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Results */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate mb-6 text-center">
          Total Cost of Ownership ({years} {years === 1 ? 'Year' : 'Years'})
        </h2>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card variant="bordered" className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="text-primary" size={28} />
              <h3 className="font-bold text-lg text-slate">Electric Vehicle</h3>
            </div>
            <p className="text-4xl font-bold text-primary mb-2">
              ${Math.round(costs.evTotalCost).toLocaleString()}
            </p>
            <p className="text-sm text-slate-light">
              ${Math.round(costs.evTotalCost / years).toLocaleString()}/year
            </p>
          </Card>

          <Card variant="bordered" className="p-6 bg-gray-bg">
            <div className="flex items-center gap-3 mb-3">
              <Fuel className="text-slate" size={28} />
              <h3 className="font-bold text-lg text-slate">Gas Vehicle</h3>
            </div>
            <p className="text-4xl font-bold text-slate mb-2">
              ${Math.round(costs.gasTotalCost).toLocaleString()}
            </p>
            <p className="text-sm text-slate-light">
              ${Math.round(costs.gasTotalCost / years).toLocaleString()}/year
            </p>
          </Card>

          <Card variant="bordered" className="p-6 bg-gradient-to-br from-eco-green/5 to-eco-green/10 border-eco-green/20">
            <div className="flex items-center gap-3 mb-3">
              <TrendingDown className="text-eco-green" size={28} />
              <h3 className="font-bold text-lg text-slate">
                {costs.savings > 0 ? 'You Save' : 'Extra Cost'}
              </h3>
            </div>
            <p className="text-4xl font-bold text-eco-green mb-2">
              ${Math.abs(Math.round(costs.savings)).toLocaleString()}
            </p>
            <p className="text-sm text-slate-light">
              ${Math.abs(Math.round(costs.savingsPerMonth)).toLocaleString()}/month
            </p>
          </Card>
        </div>

        {/* Detailed Breakdown */}
        <Card variant="bordered" className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-bg border-b-2 border-primary">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate">Cost Category</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-primary">Electric Vehicle</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-slate">Gas Vehicle</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-eco-green">Difference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-border">
                <tr className="hover:bg-gray-bg/50">
                  <td className="px-6 py-4 text-slate">Purchase Price</td>
                  <td className="px-6 py-4 text-right font-semibold text-primary">
                    ${evPrice.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-slate">
                    ${gasCarPrice.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-slate">
                    ${(gasCarPrice - evPrice).toLocaleString()}
                  </td>
                </tr>
                <tr className="hover:bg-gray-bg/50">
                  <td className="px-6 py-4 text-slate">
                    Fuel Costs ({years} {years === 1 ? 'year' : 'years'})
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-primary">
                    ${Math.round(costs.evTotalFuel).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-slate">
                    ${Math.round(costs.gasTotalFuel).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-eco-green">
                    -${Math.round(costs.gasTotalFuel - costs.evTotalFuel).toLocaleString()}
                  </td>
                </tr>
                <tr className="hover:bg-gray-bg/50">
                  <td className="px-6 py-4 text-slate">
                    Maintenance ({years} {years === 1 ? 'year' : 'years'})
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-primary">
                    ${costs.evTotalMaintenance.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-slate">
                    ${costs.gasTotalMaintenance.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-eco-green">
                    -${(costs.gasTotalMaintenance - costs.evTotalMaintenance).toLocaleString()}
                  </td>
                </tr>
                <tr className="hover:bg-gray-bg/50">
                  <td className="px-6 py-4 text-slate">
                    Insurance ({years} {years === 1 ? 'year' : 'years'})
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-primary">
                    ${costs.evTotalInsurance.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-slate">
                    ${costs.gasTotalInsurance.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-slate">
                    ${(costs.evTotalInsurance - costs.gasTotalInsurance) > 0 ? '+' : ''}${(costs.evTotalInsurance - costs.gasTotalInsurance).toLocaleString()}
                  </td>
                </tr>
                <tr className="bg-gray-bg font-bold">
                  <td className="px-6 py-4 text-slate">TOTAL</td>
                  <td className="px-6 py-4 text-right text-lg text-primary">
                    ${Math.round(costs.evTotalCost).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-right text-lg text-slate">
                    ${Math.round(costs.gasTotalCost).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-right text-lg text-eco-green">
                    {costs.savings > 0 ? '-' : '+'}${Math.abs(Math.round(costs.savings)).toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Insights */}
      <Card variant="bordered" className="p-6 bg-gradient-to-br from-eco-green/5 to-primary/5">
        <h3 className="text-xl font-bold text-slate mb-4">Cost Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="text-primary" size={20} />
              <h4 className="font-semibold text-slate">Electric Vehicle</h4>
            </div>
            <ul className="space-y-2 text-sm text-slate-light">
              <li>• Fuel cost: ${(costs.evAnnualFuel / 12).toFixed(0)}/month (${Math.round(costs.evAnnualFuel)}/year)</li>
              <li>• Maintenance: ${(500 / 12).toFixed(0)}/month ($500/year)</li>
              <li>• Cost per mile: ${((costs.evTotalCost) / (milesPerYear * years)).toFixed(3)}</li>
              <li>• After {years} years: {milesPerYear * years} miles driven</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Fuel className="text-slate" size={20} />
              <h4 className="font-semibold text-slate">Gas Vehicle</h4>
            </div>
            <ul className="space-y-2 text-sm text-slate-light">
              <li>• Fuel cost: ${(costs.gasAnnualFuel / 12).toFixed(0)}/month (${Math.round(costs.gasAnnualFuel)}/year)</li>
              <li>• Maintenance: $100/month ($1,200/year)</li>
              <li>• Cost per mile: ${((costs.gasTotalCost) / (milesPerYear * years)).toFixed(3)}</li>
              <li>• After {years} years: {milesPerYear * years} miles driven</li>
            </ul>
          </div>
        </div>

        {costs.savings > 0 && (
          <div className="mt-6 p-4 bg-eco-green/10 border border-eco-green/20 rounded-lg">
            <p className="text-slate font-semibold">
              💰 By choosing an EV, you'll save <span className="text-eco-green">${Math.round(costs.savings).toLocaleString()}</span> over {years} years!
            </p>
            <p className="text-sm text-slate-light mt-1">
              That's enough to cover {Math.floor(costs.savings / 1000)} months of typical car payments or a nice vacation.
            </p>
          </div>
        )}

        {/* Break-even Point */}
        {costs.breakEvenMonths !== null && (
          <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="text-primary" size={24} />
              <p className="text-slate font-semibold text-lg">
                Break-Even Point
              </p>
            </div>
            <p className="text-slate-light">
              You'll recover the higher purchase cost in <span className="text-primary font-bold">{costs.breakEvenMonths} months</span> ({(costs.breakEvenMonths / 12).toFixed(1)} years) through fuel and maintenance savings.
            </p>
          </div>
        )}
      </Card>

      {/* CTA */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-slate mb-4">
          Ready to Learn More About EVs?
        </h3>
        <p className="text-slate-light mb-6">
          Explore our comprehensive guides to understand charging, range, and EV ownership.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/guides/getting-started" variant="primary" size="lg">
            Getting Started Guide
          </Button>
          <Button href="/vehicles" variant="outline" size="lg">
            Browse EV Models
          </Button>
        </div>
      </div>
    </div>
  );
}
