import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Vehicle, Brand, ChargingNetwork, Guide, GuideMetadata } from "./types";

const dataDirectory = path.join(process.cwd(), "data");
const contentDirectory = path.join(process.cwd(), "content");

// Vehicle Data Functions
export function getAllVehicles(): Vehicle[] {
  const vehiclesDir = path.join(dataDirectory, "vehicles");

  if (!fs.existsSync(vehiclesDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(vehiclesDir);
  const vehicles = fileNames
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => {
      const filePath = path.join(vehiclesDir, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      return JSON.parse(fileContents) as Vehicle;
    });

  return vehicles.sort((a, b) => b.year - a.year || a.make.localeCompare(b.make));
}

export function getVehicleBySlug(slug: string): Vehicle | null {
  const filePath = path.join(dataDirectory, "vehicles", `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents) as Vehicle;
}

export function getVehiclesByMake(make: string): Vehicle[] {
  const allVehicles = getAllVehicles();
  return allVehicles.filter(
    (vehicle) => vehicle.make.toLowerCase() === make.toLowerCase()
  );
}

// Brand Data Functions
export function getAllBrands(): Brand[] {
  const brandsDir = path.join(dataDirectory, "brands");

  if (!fs.existsSync(brandsDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(brandsDir);
  const brands = fileNames
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => {
      const filePath = path.join(brandsDir, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      return JSON.parse(fileContents) as Brand;
    });

  return brands.sort((a, b) => a.name.localeCompare(b.name));
}

export function getBrandBySlug(slug: string): Brand | null {
  const filePath = path.join(dataDirectory, "brands", `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents) as Brand;
}

// Charging Network Data Functions
export function getAllNetworks(): ChargingNetwork[] {
  const networksDir = path.join(dataDirectory, "networks");

  if (!fs.existsSync(networksDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(networksDir);
  const networks = fileNames
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => {
      const filePath = path.join(networksDir, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      return JSON.parse(fileContents) as ChargingNetwork;
    });

  return networks.sort((a, b) => b.details.stationCount - a.details.stationCount);
}

export function getNetworkBySlug(slug: string): ChargingNetwork | null {
  const filePath = path.join(dataDirectory, "networks", `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents) as ChargingNetwork;
}

// Guide/Content Functions
export function getAllGuides(): Guide[] {
  const guidesDir = path.join(contentDirectory, "guides");

  if (!fs.existsSync(guidesDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(guidesDir);
  const guides = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const filePath = path.join(guidesDir, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        ...(data as GuideMetadata),
        content,
      } as Guide;
    });

  return guides.sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}

export function getGuideBySlug(slug: string): Guide | null {
  const filePath = path.join(contentDirectory, "guides", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    ...(data as GuideMetadata),
    content,
  } as Guide;
}

export function getFeaturedGuides(): Guide[] {
  const allGuides = getAllGuides();
  return allGuides.filter((guide) => guide.featured);
}
