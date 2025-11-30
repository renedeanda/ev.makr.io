import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { getVehiclesByModel, getAllVehicleModels, getVehicleModelBySlug } from "@/lib/data";
import { Metadata } from "next";
import VehicleYearSelector from "@/components/VehicleYearSelector";

interface PageProps {
  params: Promise<{ brand: string; model: string }>;
}

export async function generateStaticParams() {
  const vehicleModels = getAllVehicleModels();
  return vehicleModels.map((model) => ({
    brand: model.brandSlug,
    model: model.modelSlug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { brand, model } = await params;
  // Decode URL parameters
  const brandSlug = decodeURIComponent(brand);
  const modelSlug = decodeURIComponent(model);

  // Get the model to find the correct make/model names
  const vehicleModel = getVehicleModelBySlug(brandSlug, modelSlug);
  if (!vehicleModel) {
    return {
      title: "Vehicle Not Found",
    };
  }

  const vehicles = getVehiclesByModel(vehicleModel.make, vehicleModel.model);

  if (vehicles.length === 0) {
    return {
      title: "Vehicle Not Found",
    };
  }

  const latestVehicle = vehicles[0];

  // Use full production years from data-models.ts
  const fullProductionYears = vehicleModel.years;

  const baseUrl = 'https://ev.makr.io';
  const vehicleUrl = `${baseUrl}/vehicles/${brand}/${model}`;

  const yearRange = fullProductionYears.length === 1
    ? `${fullProductionYears[0]}`
    : `${Math.min(...fullProductionYears)}-${Math.max(...fullProductionYears)}`;

  const title = `${latestVehicle.make} ${latestVehicle.model} (${yearRange}) - Electric Vehicle Specs`;
  const description = `Complete specs for ${latestVehicle.make} ${latestVehicle.model} (${yearRange}): ${latestVehicle.range.epaRangeMiles} mi range, ${latestVehicle.charging.dcChargingMaxKw} kW DC fast charging, starting at $${latestVehicle.pricing.msrpBase.toLocaleString()}.`;

  return {
    title,
    description,
    keywords: [
      latestVehicle.make,
      latestVehicle.model,
      'electric vehicle',
      'EV specs',
      'EPA range',
      latestVehicle.charging.connector,
      'DC fast charging',
      ...fullProductionYears.map(y => `${y} ${latestVehicle.make} ${latestVehicle.model}`),
    ],
    authors: [{ name: 'ev.makr.io' }],
    openGraph: {
      title,
      description,
      url: vehicleUrl,
      siteName: 'ev.makr.io',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: vehicleUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function VehicleModelPage({ params }: PageProps) {
  const { brand, model } = await params;

  // Decode URL parameters
  const brandSlug = decodeURIComponent(brand);
  const modelSlug = decodeURIComponent(model);

  // Get the model to find the correct make/model names
  const vehicleModel = getVehicleModelBySlug(brandSlug, modelSlug);
  if (!vehicleModel) {
    notFound();
  }

  const vehicles = getVehiclesByModel(vehicleModel.make, vehicleModel.model);

  if (vehicles.length === 0) {
    notFound();
  }

  const latestVehicle = vehicles[0]; // Newest year first

  // Use full production years from data-models.ts for display
  const fullProductionYears = vehicleModel.years;

  // Get years with actual vehicle data for the year selector component
  const availableYears = Array.from(new Set(vehicles.map((v) => v.year))).sort((a, b) => b - a);

  // Calculate HP range across all trims
  const hpRange = {
    min: Math.min(...vehicles.map(v => v.performance.horsepower)),
    max: Math.max(...vehicles.map(v => v.performance.horsepower))
  };

  // Generate JSON-LD structured data for Vehicle
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${latestVehicle.make} ${latestVehicle.model}`,
    description: `${latestVehicle.make} ${latestVehicle.model} electric vehicle with ${latestVehicle.range.epaRangeMiles} miles EPA range and ${latestVehicle.charging.dcChargingMaxKw} kW DC fast charging.`,
    brand: {
      '@type': 'Brand',
      name: latestVehicle.make,
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: Math.min(...vehicles.map(v => v.pricing.msrpBase)),
      highPrice: Math.max(...vehicles.map(v => v.pricing.msrpMax || v.pricing.msrpBase)),
      availability: 'https://schema.org/InStock',
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'EPA Range',
        value: `${latestVehicle.range.epaRangeMiles} miles`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Battery Capacity',
        value: `${latestVehicle.range.batteryCapacityKwh} kWh`,
      },
      {
        '@type': 'PropertyValue',
        name: 'DC Fast Charging',
        value: `${latestVehicle.charging.dcChargingMaxKw} kW`,
      },
      {
        '@type': 'PropertyValue',
        name: 'Connector Type',
        value: latestVehicle.charging.connector,
      },
      {
        '@type': 'PropertyValue',
        name: 'Drivetrain',
        value: latestVehicle.performance.drivetrain,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
              <p className="text-xl text-white/90 mb-4">
                {fullProductionYears.length === 1
                  ? `${fullProductionYears[0]} Model Year`
                  : `Production Years: ${Math.min(...fullProductionYears)}-${Math.max(...fullProductionYears)}`}
              </p>

              {/* Key Specs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div>
                  <div className="text-white/70 text-sm mb-1">MSRP Range</div>
                  <div className="text-lg font-semibold">
                    ${(vehicleModel.priceRange.min / 1000).toFixed(0)}k - ${(vehicleModel.priceRange.max / 1000).toFixed(0)}k
                  </div>
                </div>
                <div>
                  <div className="text-white/70 text-sm mb-1">EPA Range</div>
                  <div className="text-lg font-semibold">
                    {vehicleModel.rangeMin} - {vehicleModel.rangeMax} mi
                  </div>
                </div>
                <div>
                  <div className="text-white/70 text-sm mb-1">Horsepower</div>
                  <div className="text-lg font-semibold">
                    {hpRange.min} - {hpRange.max} hp
                  </div>
                </div>
                <div>
                  <div className="text-white/70 text-sm mb-1">Trims Available</div>
                  <div className="text-lg font-semibold">
                    {vehicleModel.vehicleCount} {vehicleModel.vehicleCount === 1 ? 'trim' : 'trims'}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 items-start">
              {vehicleModel.connectors.map((connector) => (
                <Badge key={connector} variant="outline-light" size="md">
                  {connector}
                </Badge>
              ))}
              <Badge variant="outline-light" size="md">
                All-Electric
              </Badge>
            </div>
          </div>
        </div>
      </div>

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

      {/* Year Selector and Content (Client Component) */}
      <VehicleYearSelector vehicles={vehicles} years={availableYears} initialYear={availableYears[0]} />

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-12 text-center">
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
          <Button href="/vehicles/compare" variant="outline" size="lg">
            Compare Vehicles
          </Button>
        </div>
      </div>
    </div>
  );
}
