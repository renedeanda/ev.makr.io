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
    name: "BMW",
    slug: "bmw",
    urlPath: "/vehicles?make=bmw",
    modelCount: 2,
    description: "German luxury automaker with NACS-equipped i4 and iX electric models.",
  },
  {
    name: "Chevrolet",
    slug: "chevrolet",
    urlPath: "/vehicles?make=chevrolet",
    modelCount: 2,
    description: "American brand offering affordable Equinox EV and performance Blazer EV.",
    featured: true,
  },
  {
    name: "Ford",
    slug: "ford",
    urlPath: "/vehicles?make=ford",
    modelCount: 2,
    description: "American automaker with F-150 Lightning electric truck and Mustang Mach-E SUV.",
    featured: true,
  },
  {
    name: "Genesis",
    slug: "genesis",
    urlPath: "/vehicles?make=genesis",
    modelCount: 2,
    description: "Hyundai's luxury brand with GV60 and GV70 Electrified models.",
  },
  {
    name: "Honda",
    slug: "honda",
    urlPath: "/vehicles?make=honda",
    modelCount: 1,
    description: "Japanese automaker entering EV market with Prologue SUV.",
  },
  {
    name: "Hyundai",
    slug: "hyundai",
    urlPath: "/vehicles?make=hyundai",
    modelCount: 1,
    description: "Korean automaker with award-winning IONIQ 5 crossover.",
    featured: true,
  },
  {
    name: "Kia",
    slug: "kia",
    urlPath: "/vehicles?make=kia",
    modelCount: 2,
    description: "Korean brand with popular EV6 crossover and EV9 3-row SUV.",
    featured: true,
  },
  {
    name: "Mercedes-Benz",
    slug: "mercedes-benz",
    urlPath: "/vehicles?make=mercedes-benz",
    modelCount: 2,
    description: "German luxury brand with EQE and EQS electric SUV models.",
  },
  {
    name: "Nissan",
    slug: "nissan",
    urlPath: "/vehicles?make=nissan",
    modelCount: 1,
    description: "Japanese automaker with Ariya electric crossover.",
  },
  {
    name: "Rivian",
    slug: "rivian",
    urlPath: "/vehicles?make=rivian",
    modelCount: 2,
    description: "American EV startup with R1T electric truck and R1S SUV.",
    featured: true,
  },
  {
    name: "Subaru",
    slug: "subaru",
    urlPath: "/vehicles?make=subaru",
    modelCount: 1,
    description: "Japanese brand with Solterra AWD electric crossover.",
  },
  {
    name: "Tesla",
    slug: "tesla",
    urlPath: "/vehicles?make=tesla",
    modelCount: 2,
    description: "EV pioneer with Model 3 sedan and Model Y crossover.",
    featured: true,
  },
  {
    name: "Volkswagen",
    slug: "volkswagen",
    urlPath: "/vehicles?make=volkswagen",
    modelCount: 1,
    description: "German automaker with ID.4 electric crossover.",
  },
];
