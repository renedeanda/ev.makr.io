// Vehicle Data Types
export interface Vehicle {
  id: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  slug: string;
  pricing: {
    msrpBase: number;
    msrpMax: number;
  };
  range: {
    epaRangeMiles: number;
    batteryCapacityKwh: number;
    efficiencyMPGe: number;
    efficiencyKwhPer100Mi: number;
  };
  performance: {
    horsepower: number;
    torque: number;
    zeroTo60: number;
    topSpeed: number;
    drivetrain: string;
  };
  charging: {
    connector: "NACS" | "CCS1" | "CHAdeMO";
    acChargingMaxKw: number;
    dcChargingMaxKw: number;
    chargingTime10to80Minutes: number;
  };
  physical: {
    seatingCapacity: number;
    cargoVolumeCuFt: number;
    towingCapacityLbs: number;
    curbWeightLbs: number;
  };
  features: {
    hasHeatPump: boolean;
    hasV2L: boolean;
    hasV2H: boolean;
    autopilotLevel: string;
  };
  meta: {
    imageUrl: string;
    manufacturerUrl: string;
    availabilityStatus: "Available" | "Pre-order" | "Discontinued" | "Announced";
    dataSource: string;
    lastVerified: string;
    notes?: string;
  };
}

// Brand Data Types
export interface Brand {
  id: string;
  name: string;
  slug: string;
  parentCompany: string;
  countryOfOrigin: string;
  chargingStrategy: {
    currentConnector: string;
    nacsAdoptionTimeline: string;
  };
  networkPartnerships: string[];
  content: {
    description: string;
    evStrategySummary: string;
    logoUrl: string;
    websiteUrl: string;
  };
}

// Charging Network Data Types
export interface ChargingNetwork {
  id: string;
  name: string;
  websiteUrl: string;
  appIosUrl: string;
  appAndroidUrl: string;
  details: {
    stationCount: number;
    statesAvailable: string[];
    connectorTypes: ("NACS" | "CCS1" | "CHAdeMO")[];
    maxPowerKw: number;
  };
  pricing: {
    pricingStructure: string;
    averageCostPerKwh: number;
    membershipAvailable: boolean;
  };
  access: {
    requiresAccount: boolean;
    paymentMethods: string[];
    hasPlugAndCharge: boolean;
  };
}

// Guide/Content Data Types
export interface Guide {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  author: string;
  publishedDate: string;
  updatedDate: string;
  readingTime: string;
  featured: boolean;
  content: string;
}

// Metadata Types
export interface GuideMetadata {
  title: string;
  description: string;
  category: string;
  tags: string[];
  author: string;
  publishedDate: string;
  updatedDate: string;
  readingTime: string;
  featured: boolean;
}
