import { Brand } from '../types';

export const brands: Brand[] = [
  {
    "id": "bmw",
    "name": "BMW",
    "slug": "bmw",
    "parentCompany": "BMW Group",
    "countryOfOrigin": "Germany",
    "chargingStrategy": {
      "currentConnector": "NACS (2026+), CCS1 (2023-2025)",
      "nacsAdoptionTimeline": "Native NACS starting with 2026 model year vehicles"
    },
    "networkPartnerships": [
      "Partnership with Mercedes, Stellantis, Honda, Hyundai, Kia for IONNA charging network",
      "NACS adapter program for CCS1 models",
      "Compatible with all major charging networks"
    ],
    "content": {
      "description": "BMW offers a comprehensive lineup of electric vehicles, from the sporty i4 sedan to the flagship iX SUV. Known for premium quality, advanced technology, and the signature 'Ultimate Driving Machine' experience, BMW's EVs combine performance, luxury, and innovation.",
      "evStrategySummary": "BMW is committed to electrification across its entire lineup. Current offerings include i4, iX, i5, i7, and more. Focus on maintaining BMW's sporty driving dynamics while adding electric efficiency and advanced technology. Premium features, excellent range, and available Driving Assistant Professional autonomous driving features.",
      "logoUrl": "/images/brands/bmw-logo.svg",
      "websiteUrl": "https://www.bmwusa.com/all-electric-vehicles.html"
    }
  },
  {
    "id": "chevrolet",
    "name": "Chevrolet",
    "slug": "chevrolet",
    "parentCompany": "General Motors",
    "countryOfOrigin": "United States",
    "chargingStrategy": {
      "currentConnector": "NACS (2026+), CCS1 (2024-2025)",
      "nacsAdoptionTimeline": "Native NACS starting with 2026 models (Equinox EV, Blazer EV, Silverado EV)"
    },
    "networkPartnerships": [
      "GM Energy (home charging solutions)",
      "Free NACS adapter program for 2024-2025 CCS1 models",
      "Partnership with EVgo for public charging"
    ],
    "content": {
      "description": "Chevrolet is bringing affordable electric vehicles to market with the Equinox EV starting around $35,000. Built on GM's Ultium platform, Chevy EVs offer competitive range, fast charging, and available Super Cruise hands-free driving technology.",
      "evStrategySummary": "GM's mainstream brand focusing on affordable EVs for mass market adoption. Equinox EV targets budget-conscious buyers while Blazer EV and Silverado EV serve performance and truck markets. All-electric future with Ultium platform enabling multiple body styles and price points.",
      "logoUrl": "/images/brands/chevrolet-logo.svg",
      "websiteUrl": "https://www.chevrolet.com/electric"
    }
  },
  {
    "id": "genesis",
    "name": "Genesis",
    "slug": "genesis",
    "parentCompany": "Hyundai Motor Group",
    "countryOfOrigin": "South Korea",
    "chargingStrategy": {
      "currentConnector": "NACS (2026+), CCS1 (2023-2025)",
      "nacsAdoptionTimeline": "Native NACS starting with 2026 models (GV60, GV70 Electrified)"
    },
    "networkPartnerships": [
      "Shares 800V charging technology with Hyundai and Kia",
      "NACS adapter program for existing CCS1 models",
      "Compatible with Electrify America network"
    ],
    "content": {
      "description": "Genesis is Hyundai's luxury brand, offering premium electric vehicles with cutting-edge technology. The GV60 and Electrified GV70 feature 800V architecture enabling ultra-fast charging (10-80% in 18 minutes), luxurious interiors, and advanced driver assistance systems.",
      "evStrategySummary": "Genesis positions itself as a luxury EV brand with premium features, advanced technology, and competitive pricing compared to European luxury brands. Shares platform and technology with Hyundai IONIQ 5 and Kia EV6 but with elevated materials, design, and amenities. Focus on innovation, performance, and luxury.",
      "logoUrl": "/images/brands/genesis-logo.svg",
      "websiteUrl": "https://www.genesis.com/us/en/electrified.html"
    }
  },
  {
    "id": "honda",
    "name": "Honda",
    "slug": "honda",
    "parentCompany": "Honda Motor Company",
    "countryOfOrigin": "Japan",
    "chargingStrategy": {
      "currentConnector": "NACS (2026+), CCS1 (2024-2025)",
      "nacsAdoptionTimeline": "Native NACS starting with 2026 Prologue"
    },
    "networkPartnerships": [
      "Partnership with GM for Ultium platform EVs",
      "Compatible with all major U.S. charging networks"
    ],
    "content": {
      "description": "Honda entered the EV market with the Prologue, built in partnership with GM on the Ultium platform. Known for reliability and quality, Honda brings their engineering expertise to electric mobility with spacious SUVs and advanced driver assistance.",
      "evStrategySummary": "Honda is leveraging GM's Ultium platform for initial EV offerings while developing proprietary electric architecture for future models. Focus on practical, reliable EVs with Honda's signature quality and advanced safety features. Targeting mainstream American buyers with familiar SUV form factors.",
      "logoUrl": "/images/brands/honda-logo.svg",
      "websiteUrl": "https://automobiles.honda.com/prologue"
    }
  },
  {
    "id": "mercedes-benz",
    "name": "Mercedes-Benz",
    "slug": "mercedes-benz",
    "parentCompany": "Mercedes-Benz Group AG",
    "countryOfOrigin": "Germany",
    "chargingStrategy": {
      "currentConnector": "NACS (2026+), CCS1 (2023-2025)",
      "nacsAdoptionTimeline": "Native NACS starting with 2026 model year vehicles"
    },
    "networkPartnerships": [
      "Partnership with BMW, Stellantis, Honda, Hyundai, Kia for IONNA charging network",
      "Mercedes me Charge service for access to multiple networks",
      "NACS adapter program for existing CCS1 models"
    ],
    "content": {
      "description": "Mercedes-Benz EQ electric vehicles represent the pinnacle of luxury and technology. From the flagship EQS sedan and SUV to the mid-size EQE models, Mercedes offers Level 3 autonomous driving (Drive Pilot), premium interiors, and the advanced MBUX Hyperscreen infotainment system.",
      "evStrategySummary": "Mercedes-Benz is transitioning to an all-electric future with the EQ brand. Focus on luxury, advanced technology, and innovation. Features include Drive Pilot Level 3 autonomous driving (approved highways), MBUX Hyperscreen, premium materials, and long-range capabilities. Targeting affluent buyers seeking cutting-edge electric luxury.",
      "logoUrl": "/images/brands/mercedes-benz-logo.svg",
      "websiteUrl": "https://www.mbusa.com/en/vehicles/class/eq"
    }
  },
  {
    "id": "subaru",
    "name": "Subaru",
    "slug": "subaru",
    "parentCompany": "Subaru Corporation",
    "countryOfOrigin": "Japan",
    "chargingStrategy": {
      "currentConnector": "NACS (2026+), CCS1 (2023-2025)",
      "nacsAdoptionTimeline": "Native NACS starting with 2026 Solterra"
    },
    "networkPartnerships": [
      "Working with Toyota on charging infrastructure",
      "Compatible with all major U.S. networks"
    ],
    "content": {
      "description": "Subaru entered the EV market with the Solterra, co-developed with Toyota on the e-TNGA platform. Known for Symmetrical All-Wheel Drive, Subaru brings their off-road capability heritage to the electric SUV segment.",
      "evStrategySummary": "Focused on AWD electric SUVs with emphasis on safety, capability, and Subaru's signature EyeSight driver assistance. Partnership with Toyota allows shared development costs while maintaining Subaru's brand identity.",
      "logoUrl": "/images/brands/subaru-logo.svg",
      "websiteUrl": "https://www.subaru.com"
    }
  }
];
