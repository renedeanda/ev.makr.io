export interface Brand {
  name: string;
  slug: string;
  urlPath: string;
  modelCount: number;
  description: string;
  featured?: boolean;
}

export const brands: Brand[] = [
  {
    name: "Audi",
    slug: "audi",
    urlPath: "/vehicles?make=audi",
    modelCount: 1,
    description: "Luxury German brand with Q4 e-tron electric SUV. Part of VW Group's MEB platform strategy with premium features and build quality.",
  },
  {
    name: "BMW",
    slug: "bmw",
    urlPath: "/vehicles?make=bmw",
    modelCount: 2,
    description: "German luxury automaker with i4 electric sedan and iX flagship SUV. 2026 models feature native NACS charging and premium driving dynamics.",
  },
  {
    name: "Cadillac",
    slug: "cadillac",
    urlPath: "/vehicles?make=cadillac",
    modelCount: 1,
    description: "GM's luxury brand with Lyriq electric SUV on Ultium platform. Features Super Cruise hands-free driving and 33-inch diagonal display.",
  },
  {
    name: "Chevrolet",
    slug: "chevrolet",
    urlPath: "/vehicles?make=chevrolet",
    modelCount: 2,
    description: "Most affordable EVs in America: Equinox EV starts at $33,600. Also offers performance Blazer EV. All qualify for $7,500 federal tax credit.",
    featured: true,
  },
  {
    name: "Ford",
    slug: "ford",
    urlPath: "/vehicles?make=ford",
    modelCount: 2,
    description: "Electric F-150 Lightning truck (10,000 lb towing, V2H power) and Mustang Mach-E SUV. First major automaker to adopt NACS connector.",
    featured: true,
  },
  {
    name: "Genesis",
    slug: "genesis",
    urlPath: "/vehicles?make=genesis",
    modelCount: 2,
    description: "Hyundai's luxury brand with 800V ultra-fast charging. GV60 compact SUV and GV70 Electrified luxury SUV with native NACS in 2026.",
  },
  {
    name: "Honda",
    slug: "honda",
    urlPath: "/vehicles?make=honda",
    modelCount: 1,
    description: "First dedicated EV: Prologue SUV built with GM on Ultium platform. Native NACS charging with Honda quality and reliability.",
  },
  {
    name: "Hyundai",
    slug: "hyundai",
    urlPath: "/vehicles?make=hyundai",
    modelCount: 1,
    description: "Award-winning IONIQ 5 with 800V architecture (10-80% in 18 min). 2026 model: $7,600-$9,800 price cuts, starts at $35,000.",
    featured: true,
  },
  {
    name: "Kia",
    slug: "kia",
    urlPath: "/vehicles?make=kia",
    modelCount: 2,
    description: "EV6 crossover (2023 World Car of the Year) and EV9 3-row SUV. 800V fast charging, 10-year battery warranty, excellent value.",
    featured: true,
  },
  {
    name: "Lucid",
    slug: "lucid",
    urlPath: "/vehicles?make=lucid",
    modelCount: 1,
    description: "Most efficient EV in America (5.0 mi/kWh). Air luxury sedan with 420+ mile range and 900V ultra-fast charging architecture.",
  },
  {
    name: "Mercedes-Benz",
    slug: "mercedes-benz",
    urlPath: "/vehicles?make=mercedes-benz",
    modelCount: 2,
    description: "Luxury EQ electric lineup: EQE and EQS SUVs. Features Level 3 Drive Pilot autonomous driving and MBUX Hyperscreen.",
  },
  {
    name: "Nissan",
    slug: "nissan",
    urlPath: "/vehicles?make=nissan",
    modelCount: 1,
    description: "Ariya electric crossover with e-4ORCE AWD. Nissan's first modern EV after pioneering Leaf (2010-2024).",
  },
  {
    name: "Polestar",
    slug: "polestar",
    urlPath: "/vehicles?make=polestar",
    modelCount: 2,
    description: "Volvo's electric performance brand. Polestar 2 sedan and Polestar 3 SUV with Android Automotive OS and Scandinavian design.",
  },
  {
    name: "Porsche",
    slug: "porsche",
    urlPath: "/vehicles?make=porsche",
    modelCount: 1,
    description: "Taycan electric sports car with 800V architecture. Classic Porsche performance with instant electric torque and rapid charging.",
  },
  {
    name: "Rivian",
    slug: "rivian",
    urlPath: "/vehicles?make=rivian",
    modelCount: 2,
    description: "Adventure-focused electric vehicles: R1T truck (11,000 lb towing) and R1S 7-seat SUV. Native NACS, proprietary Adventure Network.",
    featured: true,
  },
  {
    name: "Subaru",
    slug: "subaru",
    urlPath: "/vehicles?make=subaru",
    modelCount: 1,
    description: "Solterra AWD electric SUV co-developed with Toyota. 2026 model: +61 mi range (288 mi), +123 hp Touring XT, native NACS.",
    featured: true,
  },
  {
    name: "Tesla",
    slug: "tesla",
    urlPath: "/vehicles?make=tesla",
    modelCount: 3,
    description: "EV market leader with Model 3 sedan, Model Y SUV (America's best-selling EV), and Cybertruck. Native NACS, Supercharger network.",
    featured: true,
  },
  {
    name: "Toyota",
    slug: "toyota",
    urlPath: "/vehicles?make=toyota",
    modelCount: 1,
    description: "bZ4X electric SUV shares platform with Subaru Solterra (e-TNGA). Conservative EV approach from world's largest automaker.",
  },
  {
    name: "Volkswagen",
    slug: "volkswagen",
    urlPath: "/vehicles?make=volkswagen",
    modelCount: 2,
    description: "ID.4 electric crossover and ID. Buzz electric van on MEB platform. 3 years free Electrify America charging included.",
  },
];
