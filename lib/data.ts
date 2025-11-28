// Data re-exports from TypeScript data files
import { Vehicle } from "./types";
import { vehicles as vehicleData } from "./data/vehicles";
import { models as modelData, VehicleModel } from "./data-models";
import { brands as brandData, Brand } from "./data-brands";

// Re-export types
export type { VehicleModel, Brand };

// ===== VEHICLE FUNCTIONS =====
export function getAllVehicles(): Vehicle[] {
  return [...vehicleData];
}

export function getVehicleBySlug(slug: string): Vehicle | null {
  return vehicleData.find(v => v.slug === slug) || null;
}

export function getVehiclesByMake(make: string): Vehicle[] {
  return vehicleData.filter(
    (vehicle) => vehicle.make.toLowerCase() === make.toLowerCase()
  );
}

export function getVehiclesByModel(make: string, model: string): Vehicle[] {
  return vehicleData.filter(
    (vehicle) => 
      vehicle.make.toLowerCase() === make.toLowerCase() && 
      vehicle.model.toLowerCase() === model.toLowerCase()
  ).sort((a, b) => b.year - a.year); // Newest first
}

// ===== MODEL FUNCTIONS =====
export function getAllVehicleModels(): VehicleModel[] {
  return [...modelData];
}

export function getVehicleModelBySlug(brandSlug: string, modelSlug: string): VehicleModel | null {
  return modelData.find(
    (model) => 
      model.brandSlug === brandSlug && 
      model.modelSlug === modelSlug
  ) || null;
}

export function getFeaturedModels(): VehicleModel[] {
  return modelData.filter((model) => model.featured);
}

// ===== BRAND FUNCTIONS =====
export function getAllBrands(): Brand[] {
  return [...brandData];
}

export function getBrandBySlug(slug: string): Brand | null {
  return brandData.find(b => b.slug === slug) || null;
}

export function getFeaturedBrands(): Brand[] {
  return brandData.filter((brand) => brand.featured);
}
