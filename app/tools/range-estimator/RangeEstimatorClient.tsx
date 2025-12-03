"use client";

import { useState } from "react";
import { Battery, Thermometer, Gauge, TrendingUp, Mountain, Wind, AlertCircle } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function RangeEstimatorClient() {
  const [epaRange, setEpaRange] = useState(300);
  const [temperature, setTemperature] = useState(70); // Fahrenheit
  const [speed, setSpeed] = useState(65); // MPH
  const [terrain, setTerrain] = useState<"flat" | "hilly" | "mountainous">("flat");
  const [drivingStyle, setDrivingStyle] = useState<"eco" | "normal" | "aggressive">("normal");
  const [climate, setClimate] = useState(true); // AC/Heating usage

  // Calculate range based on factors
  const calculateRealWorldRange = () => {
    let rangeFactor = 1.0;

    // Temperature impact (biggest factor)
    // Optimal range is 60-80°F
    if (temperature < 32) {
      rangeFactor *= 0.55; // -45% in freezing temps
    } else if (temperature < 50) {
      rangeFactor *= 0.75; // -25% in cold temps
    } else if (temperature > 90) {
      rangeFactor *= 0.85; // -15% in hot temps
    } else if (temperature >= 60 && temperature <= 80) {
      rangeFactor *= 1.0; // Optimal
    } else {
      rangeFactor *= 0.90; // -10% in slightly off temps
    }

    // Speed impact (aerodynamic drag increases exponentially)
    if (speed <= 55) {
      rangeFactor *= 1.0; // Optimal efficiency
    } else if (speed <= 65) {
      rangeFactor *= 0.90; // -10%
    } else if (speed <= 75) {
      rangeFactor *= 0.75; // -25%
    } else {
      rangeFactor *= 0.65; // -35%
    }

    // Terrain impact
    const terrainFactors = {
      flat: 1.0,
      hilly: 0.90, // -10%
      mountainous: 0.80, // -20%
    };
    rangeFactor *= terrainFactors[terrain];

    // Driving style impact
    const styleFactors = {
      eco: 1.10, // +10% with regenerative braking
      normal: 1.0,
      aggressive: 0.85, // -15%
    };
    rangeFactor *= styleFactors[drivingStyle];

    // Climate control impact (AC/Heat)
    if (climate) {
      if (temperature < 40 || temperature > 85) {
        rangeFactor *= 0.85; // -15% for heating/cooling in extreme temps
      } else {
        rangeFactor *= 0.95; // -5% for mild climate control
      }
    }

    const estimatedRange = Math.round(epaRange * rangeFactor);
    const percentageOfEPA = Math.round(rangeFactor * 100);

    return {
      estimatedRange,
      percentageOfEPA,
      rangeFactor,
    };
  };

  const results = calculateRealWorldRange();

  // Determine warning level
  const getWarningLevel = () => {
    if (results.percentageOfEPA >= 90) return "excellent";
    if (results.percentageOfEPA >= 75) return "good";
    if (results.percentageOfEPA >= 60) return "moderate";
    return "poor";
  };

  const warningLevel = getWarningLevel();
  const warningConfig = {
    excellent: {
      color: "eco-green",
      bgClass: "bg-eco-green/10 border-eco-green/20",
      textClass: "text-eco-green",
      icon: "✓",
      message: "Excellent conditions for optimal range!",
    },
    good: {
      color: "primary",
      bgClass: "bg-primary/10 border-primary/20",
      textClass: "text-primary",
      icon: "✓",
      message: "Good conditions with minor range reduction.",
    },
    moderate: {
      color: "warning-amber",
      bgClass: "bg-amber-100 border-amber-200",
      textClass: "text-amber-700",
      icon: "!",
      message: "Moderate range reduction expected.",
    },
    poor: {
      color: "error",
      bgClass: "bg-red-100 border-red-200",
      textClass: "text-red-700",
      icon: "⚠",
      message: "Significant range reduction in these conditions.",
    },
  };

  const warning = warningConfig[warningLevel];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate mb-4">
          EV Range Estimator
        </h1>
        <p className="text-xl text-slate-light max-w-3xl mx-auto">
          Calculate your real-world EV range based on temperature, speed, terrain, and driving conditions.
        </p>
      </div>

      {/* Input Card */}
      <Card variant="bordered" className="p-8 mb-8">
        <h2 className="text-2xl font-bold text-slate mb-6">Enter Your Conditions</h2>

        <div className="space-y-8">
          {/* EPA Range */}
          <div>
            <label className="block text-sm font-semibold text-slate mb-2 flex items-center gap-2">
              <Battery size={18} className="text-primary" />
              EPA Rated Range (miles)
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="100"
                max="500"
                step="10"
                value={epaRange}
                onChange={(e) => setEpaRange(Number(e.target.value))}
                className="flex-1"
              />
              <span className="text-lg font-bold text-primary min-w-[100px]">
                {epaRange} mi
              </span>
            </div>
            <p className="text-xs text-slate-light mt-1">Check your vehicle's EPA rating</p>
          </div>

          {/* Temperature */}
          <div>
            <label className="block text-sm font-semibold text-slate mb-2 flex items-center gap-2">
              <Thermometer size={18} className="text-primary" />
              Outside Temperature (°F)
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="0"
                max="110"
                step="5"
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
                className="flex-1"
              />
              <span className="text-lg font-bold text-primary min-w-[100px]">
                {temperature}°F
              </span>
            </div>
            <p className="text-xs text-slate-light mt-1">
              {temperature < 32 && "❄️ Freezing - Significant impact"}
              {temperature >= 32 && temperature < 50 && "🥶 Cold - Moderate impact"}
              {temperature >= 50 && temperature < 60 && "😊 Cool - Minor impact"}
              {temperature >= 60 && temperature <= 80 && "✅ Optimal - No impact"}
              {temperature > 80 && temperature <= 90 && "☀️ Warm - Minor impact"}
              {temperature > 90 && "🔥 Hot - Moderate impact"}
            </p>
          </div>

          {/* Speed */}
          <div>
            <label className="block text-sm font-semibold text-slate mb-2 flex items-center gap-2">
              <Gauge size={18} className="text-primary" />
              Average Highway Speed (MPH)
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="45"
                max="85"
                step="5"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="flex-1"
              />
              <span className="text-lg font-bold text-primary min-w-[100px]">
                {speed} MPH
              </span>
            </div>
            <p className="text-xs text-slate-light mt-1">
              {speed <= 55 && "✅ Optimal efficiency"}
              {speed > 55 && speed <= 65 && "Good efficiency"}
              {speed > 65 && speed <= 75 && "Reduced efficiency"}
              {speed > 75 && "⚠️ Significantly reduced efficiency"}
            </p>
          </div>

          {/* Terrain */}
          <div>
            <label className="block text-sm font-semibold text-slate mb-3 flex items-center gap-2">
              <Mountain size={18} className="text-primary" />
              Terrain Type
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setTerrain("flat")}
                className={`p-4 rounded-lg border-2 transition-all ${
                  terrain === "flat"
                    ? "border-primary bg-primary/10"
                    : "border-gray-border hover:border-primary/50"
                }`}
              >
                <p className="font-semibold text-slate mb-1">Flat</p>
                <p className="text-xs text-slate-light">No impact</p>
              </button>
              <button
                onClick={() => setTerrain("hilly")}
                className={`p-4 rounded-lg border-2 transition-all ${
                  terrain === "hilly"
                    ? "border-primary bg-primary/10"
                    : "border-gray-border hover:border-primary/50"
                }`}
              >
                <p className="font-semibold text-slate mb-1">Hilly</p>
                <p className="text-xs text-slate-light">-10%</p>
              </button>
              <button
                onClick={() => setTerrain("mountainous")}
                className={`p-4 rounded-lg border-2 transition-all ${
                  terrain === "mountainous"
                    ? "border-primary bg-primary/10"
                    : "border-gray-border hover:border-primary/50"
                }`}
              >
                <p className="font-semibold text-slate mb-1">Mountains</p>
                <p className="text-xs text-slate-light">-20%</p>
              </button>
            </div>
          </div>

          {/* Driving Style */}
          <div>
            <label className="block text-sm font-semibold text-slate mb-3 flex items-center gap-2">
              <TrendingUp size={18} className="text-primary" />
              Driving Style
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setDrivingStyle("eco")}
                className={`p-4 rounded-lg border-2 transition-all ${
                  drivingStyle === "eco"
                    ? "border-eco-green bg-eco-green/10"
                    : "border-gray-border hover:border-eco-green/50"
                }`}
              >
                <p className="font-semibold text-slate mb-1">Eco</p>
                <p className="text-xs text-slate-light">+10% range</p>
              </button>
              <button
                onClick={() => setDrivingStyle("normal")}
                className={`p-4 rounded-lg border-2 transition-all ${
                  drivingStyle === "normal"
                    ? "border-primary bg-primary/10"
                    : "border-gray-border hover:border-primary/50"
                }`}
              >
                <p className="font-semibold text-slate mb-1">Normal</p>
                <p className="text-xs text-slate-light">Standard</p>
              </button>
              <button
                onClick={() => setDrivingStyle("aggressive")}
                className={`p-4 rounded-lg border-2 transition-all ${
                  drivingStyle === "aggressive"
                    ? "border-primary bg-primary/10"
                    : "border-gray-border hover:border-primary/50"
                }`}
              >
                <p className="font-semibold text-slate mb-1">Aggressive</p>
                <p className="text-xs text-slate-light">-15%</p>
              </button>
            </div>
          </div>

          {/* Climate Control */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer p-4 rounded-lg border-2 border-gray-border hover:border-primary/50 transition-all">
              <input
                type="checkbox"
                checked={climate}
                onChange={(e) => setClimate(e.target.checked)}
                className="w-5 h-5 text-primary"
              />
              <div className="flex-1">
                <p className="font-semibold text-slate flex items-center gap-2">
                  <Wind size={18} className="text-primary" />
                  Using Climate Control (AC/Heat)
                </p>
                <p className="text-xs text-slate-light mt-1">
                  AC or heating can reduce range by 5-15% depending on temperature
                </p>
              </div>
            </label>
          </div>
        </div>
      </Card>

      {/* Results */}
      <div className="space-y-6">
        {/* Main Result Card */}
        <Card variant="bordered" className="p-8 bg-gradient-to-br from-primary/5 to-eco-green/5">
          <div className="text-center">
            <p className="text-sm font-semibold text-slate-light uppercase tracking-wide mb-2">
              Estimated Real-World Range
            </p>
            <p className="text-6xl md:text-7xl font-bold text-primary mb-4">
              {results.estimatedRange}
              <span className="text-3xl text-slate-light ml-2">miles</span>
            </p>
            <p className="text-lg text-slate-light">
              {results.percentageOfEPA}% of EPA rated range ({epaRange} mi)
            </p>
          </div>
        </Card>

        {/* Warning/Info Card */}
        <Card variant="bordered" className={`p-6 border ${warning.bgClass}`}>
          <div className="flex items-start gap-4">
            <div className="text-3xl">{warning.icon}</div>
            <div>
              <p className={`font-bold text-lg mb-1 ${warning.textClass}`}>
                {warning.message}
              </p>
              <p className="text-sm text-slate-light leading-relaxed">
                {warningLevel === "excellent" && "You're driving in near-optimal conditions. Your range should closely match or exceed EPA estimates."}
                {warningLevel === "good" && "Your conditions are good for EV range. Some minor reduction is normal but manageable."}
                {warningLevel === "moderate" && "Several factors are reducing your range. Plan for more frequent charging stops on long trips."}
                {warningLevel === "poor" && "Challenging conditions ahead. Cold temperatures and high speeds significantly impact range. Plan charging stops carefully and add buffer time."}
              </p>
            </div>
          </div>
        </Card>

        {/* Tips Card */}
        <Card variant="bordered" className="p-6">
          <h3 className="text-xl font-bold text-slate mb-4 flex items-center gap-2">
            <AlertCircle size={24} className="text-primary" />
            Tips to Maximize Range
          </h3>
          <ul className="space-y-3 text-slate-light">
            <li className="flex items-start gap-2">
              <span className="text-eco-green font-bold">•</span>
              <span><strong>Precondition your vehicle</strong> while plugged in to warm/cool the cabin and battery before departure</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-eco-green font-bold">•</span>
              <span><strong>Use Eco mode</strong> to optimize energy consumption and regenerative braking</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-eco-green font-bold">•</span>
              <span><strong>Maintain steady speeds</strong> - aggressive acceleration and braking wastes energy</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-eco-green font-bold">•</span>
              <span><strong>Use heated seats instead of cabin heat</strong> when possible - they use less energy</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-eco-green font-bold">•</span>
              <span><strong>Keep tires properly inflated</strong> to reduce rolling resistance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-eco-green font-bold">•</span>
              <span><strong>In winter, park in a garage</strong> if possible to keep the battery warmer</span>
            </li>
          </ul>
        </Card>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-slate mb-4">
          Learn More About EV Range
        </h3>
        <p className="text-slate-light mb-6">
          Explore our guides for tips on maximizing range and understanding battery performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/guides/battery-care-tips" variant="primary" size="lg">
            Battery Care Tips
          </Button>
          <Button href="/guides/winter-driving-cold-weather" variant="outline" size="lg">
            Winter Driving Guide
          </Button>
        </div>
      </div>
    </div>
  );
}
