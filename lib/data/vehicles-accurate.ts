/**
 * ACCURATE VEHICLE DATA - Top 7 EV Models (2024-2026)
 * 
 * Data compiled from: Car and Driver, Motor Trend, Edmunds, U.S. News, KBB, InsideEVs
 * Last updated: November 28, 2025
 * 
 * ALL TRIM LEVELS INCLUDED - Complete pricing ranges from base to top tier
 */

export interface VehicleTrim {
  name: string;
  msrp: number;
  range: number; // EPA estimated miles
  power: number; // horsepower
  drivetrain: 'RWD' | 'AWD' | 'FWD';
  battery: number; // kWh
  acceleration?: string; // 0-60 mph time
}

export interface VehicleData {
  id: string;
  brand: string;
  model: string;
  year: number;
  trims: VehicleTrim[];
  priceRange: string;
  rangeMin: number;
  rangeMax: number;
  charging: string;
  chargingPort: string;
  notes?: string;
}

/**
 * 2026 SUBARU SOLTERRA
 * Major upgrade year: +61 mi range, +18-123 hp, NACS connector, battery preconditioning
 */
export const subaru_solterra_2026: VehicleData = {
  id: 'subaru-solterra-2026',
  brand: 'Subaru',
  model: 'Solterra',
  year: 2026,
  trims: [
    {
      name: 'Premium',
      msrp: 38495,
      range: 288,
      power: 233,
      drivetrain: 'AWD',
      battery: 74.7,
      acceleration: '6.5s'
    },
    {
      name: 'Limited',
      msrp: 41395,
      range: 288,
      power: 233,
      drivetrain: 'AWD',
      battery: 74.7,
      acceleration: '6.5s'
    },
    {
      name: 'Touring XT',
      msrp: 45555,
      range: 278,
      power: 338,
      drivetrain: 'AWD',
      battery: 74.7,
      acceleration: '5.2s'
    }
  ],
  priceRange: '$38,495 - $45,555',
  rangeMin: 278,
  rangeMax: 288,
  charging: '150 kW DC fast charging',
  chargingPort: 'NACS (with CCS adapter)',
  notes: '2026 adds +61 mi range, +18-123 hp, NACS connector, battery preconditioning'
};

/**
 * 2026 HYUNDAI IONIQ 5
 * Massive price cuts: $7,600-$9,800 less than 2025
 * Larger 84 kWh battery, NACS charging
 */
export const hyundai_ioniq5_2026: VehicleData = {
  id: 'hyundai-ioniq-5-2026',
  brand: 'Hyundai',
  model: 'IONIQ 5',
  year: 2026,
  trims: [
    {
      name: 'SE Standard Range',
      msrp: 35000,
      range: 245,
      power: 168,
      drivetrain: 'RWD',
      battery: 63,
      acceleration: '7.3s'
    },
    {
      name: 'SE RWD',
      msrp: 37500,
      range: 318,
      power: 225,
      drivetrain: 'RWD',
      battery: 84
    },
    {
      name: 'SE AWD',
      msrp: 41000,
      range: 290,
      power: 320,
      drivetrain: 'AWD',
      battery: 84,
      acceleration: '4.5s'
    },
    {
      name: 'SEL RWD',
      msrp: 41000,
      range: 318,
      power: 225,
      drivetrain: 'RWD',
      battery: 84
    },
    {
      name: 'SEL AWD',
      msrp: 44500,
      range: 290,
      power: 320,
      drivetrain: 'AWD',
      battery: 84,
      acceleration: '4.5s'
    },
    {
      name: 'XRT AWD',
      msrp: 47000,
      range: 259,
      power: 320,
      drivetrain: 'AWD',
      battery: 84,
      acceleration: '4.5s'
    },
    {
      name: 'Limited RWD',
      msrp: 45000,
      range: 318,
      power: 225,
      drivetrain: 'RWD',
      battery: 84
    },
    {
      name: 'Limited AWD',
      msrp: 48900,
      range: 269,
      power: 320,
      drivetrain: 'AWD',
      battery: 84
    },
    {
      name: 'N (Performance)',
      msrp: 67000,
      range: 221,
      power: 641,
      drivetrain: 'AWD',
      battery: 84,
      acceleration: '3.4s'
    }
  ],
  priceRange: '$35,000 - $67,000',
  rangeMin: 221,
  rangeMax: 318,
  charging: '800V, 350 kW DC (10-80% in 18 min)',
  chargingPort: 'NACS (with CCS adapter)',
  notes: '2026: $7,600-$9,800 price cuts, NACS port, XRT off-road trim'
};

/**
 * 2025 KIA EV6
 * Refreshed: larger 84 kWh battery, NACS charging, 601-641 hp GT
 */
export const kia_ev6_2025: VehicleData = {
  id: 'kia-ev6-2025',
  brand: 'Kia',
  model: 'EV6',
  year: 2025,
  trims: [
    {
      name: 'Light',
      msrp: 42900,
      range: 237,
      power: 167,
      drivetrain: 'RWD',
      battery: 63,
      acceleration: '8.3s'
    },
    {
      name: 'Light Long Range RWD',
      msrp: 47900,
      range: 319,
      power: 225,
      drivetrain: 'RWD',
      battery: 84,
      acceleration: '7.3s'
    },
    {
      name: 'Light Long Range AWD',
      msrp: 50900,
      range: 295,
      power: 320,
      drivetrain: 'AWD',
      battery: 84,
      acceleration: '5.0s'
    },
    {
      name: 'Wind RWD',
      msrp: 50000,
      range: 319,
      power: 225,
      drivetrain: 'RWD',
      battery: 84,
      acceleration: '7.3s'
    },
    {
      name: 'Wind AWD',
      msrp: 52900,
      range: 295,
      power: 320,
      drivetrain: 'AWD',
      battery: 84,
      acceleration: '4.5s'
    },
    {
      name: 'GT-Line RWD',
      msrp: 55000,
      range: 319,
      power: 225,
      drivetrain: 'RWD',
      battery: 84
    },
    {
      name: 'GT-Line AWD',
      msrp: 58900,
      range: 271,
      power: 320,
      drivetrain: 'AWD',
      battery: 84,
      acceleration: '4.5s'
    },
    {
      name: 'GT',
      msrp: 63800,
      range: 231,
      power: 641,
      drivetrain: 'AWD',
      battery: 84,
      acceleration: '3.2s'
    }
  ],
  priceRange: '$42,900 - $63,800',
  rangeMin: 231,
  rangeMax: 319,
  charging: '800V, 350 kW DC (10-80% in 18 min)',
  chargingPort: 'NACS (GT uses CCS)',
  notes: '2025 refresh: +84 kWh battery, NACS port (except GT), 601-641 hp GT'
};

/**
 * 2026 TESLA MODEL 3
 * New Standard trim added, simplified naming (Premium replaces Long Range)
 */
export const tesla_model3_2026: VehicleData = {
  id: 'tesla-model3-2026',
  brand: 'Tesla',
  model: 'Model 3',
  year: 2026,
  trims: [
    {
      name: 'Standard RWD',
      msrp: 38630,
      range: 321,
      power: 286,
      drivetrain: 'RWD',
      battery: 70,
      acceleration: '5.8s'
    },
    {
      name: 'Premium RWD',
      msrp: 44130,
      range: 363,
      power: 286,
      drivetrain: 'RWD',
      battery: 80,
      acceleration: '4.9s'
    },
    {
      name: 'Premium AWD',
      msrp: 49130,
      range: 346,
      power: 394,
      drivetrain: 'AWD',
      battery: 80,
      acceleration: '4.0s'
    },
    {
      name: 'Performance',
      msrp: 56630,
      range: 298,
      power: 510,
      drivetrain: 'AWD',
      battery: 80,
      acceleration: '2.9s'
    }
  ],
  priceRange: '$38,630 - $56,630',
  rangeMin: 298,
  rangeMax: 363,
  charging: '250 kW DC fast charging',
  chargingPort: 'NACS',
  notes: 'New Standard trim for 2026, Premium replaces Long Range naming'
};

/**
 * 2026 TESLA MODEL Y
 * Juniper refresh: new Standard trim, improved interior, better ride
 */
export const tesla_modely_2026: VehicleData = {
  id: 'tesla-modely-2026',
  brand: 'Tesla',
  model: 'Model Y',
  year: 2026,
  trims: [
    {
      name: 'Standard RWD',
      msrp: 41630,
      range: 321,
      power: 300,
      drivetrain: 'RWD',
      battery: 69.5,
      acceleration: '6.8s'
    },
    {
      name: 'Premium RWD',
      msrp: 46630,
      range: 357,
      power: 310,
      drivetrain: 'RWD',
      battery: 75,
      acceleration: '5.4s'
    },
    {
      name: 'Long Range AWD',
      msrp: 50630,
      range: 327,
      power: 397,
      drivetrain: 'AWD',
      battery: 75,
      acceleration: '3.8s'
    },
    {
      name: 'Performance',
      msrp: 59130,
      range: 306,
      power: 460,
      drivetrain: 'AWD',
      battery: 75,
      acceleration: '3.3s'
    }
  ],
  priceRange: '$41,630 - $59,130',
  rangeMin: 306,
  rangeMax: 357,
  charging: '250 kW DC fast charging',
  chargingPort: 'NACS',
  notes: 'Juniper refresh: new Standard trim, ventilated seats, improved materials'
};

/**
 * 2025 FORD F-150 LIGHTNING
 * New STX trim for 2026, replacing XLT
 */
export const ford_f150lightning_2025: VehicleData = {
  id: 'ford-f150lightning-2025',
  brand: 'Ford',
  model: 'F-150 Lightning',
  year: 2025,
  trims: [
    {
      name: 'Pro',
      msrp: 49875,
      range: 240,
      power: 452,
      drivetrain: 'AWD',
      battery: 98,
      acceleration: '4.5s'
    },
    {
      name: 'XLT/STX',
      msrp: 57000,
      range: 240,
      power: 452,
      drivetrain: 'AWD',
      battery: 98,
      acceleration: '4.5s'
    },
    {
      name: 'Flash',
      msrp: 70090,
      range: 300,
      power: 580,
      drivetrain: 'AWD',
      battery: 131,
      acceleration: '4.0s'
    },
    {
      name: 'Lariat',
      msrp: 79090,
      range: 320,
      power: 580,
      drivetrain: 'AWD',
      battery: 131,
      acceleration: '4.0s'
    },
    {
      name: 'Platinum',
      msrp: 87090,
      range: 300,
      power: 580,
      drivetrain: 'AWD',
      battery: 131,
      acceleration: '4.0s'
    }
  ],
  priceRange: '$49,875 - $87,090',
  rangeMin: 240,
  rangeMax: 320,
  charging: '150 kW DC fast charging',
  chargingPort: 'NACS (with CCS adapter)',
  notes: 'STX replaces XLT for 2026, 10,000 lb towing capacity with Max Trailer package'
};

/**
 * 2025 CHEVROLET EQUINOX EV
 * Most affordable EV: starts at $33,600, eligible for $7,500 tax credit
 */
export const chevrolet_equinoxev_2025: VehicleData = {
  id: 'chevrolet-equinoxev-2025',
  brand: 'Chevrolet',
  model: 'Equinox EV',
  year: 2025,
  trims: [
    {
      name: 'LT FWD',
      msrp: 33600,
      range: 319,
      power: 220,
      drivetrain: 'FWD',
      battery: 85,
      acceleration: '7.4s'
    },
    {
      name: 'LT AWD',
      msrp: 39500,
      range: 285,
      power: 300,
      drivetrain: 'AWD',
      battery: 85,
      acceleration: '5.7s'
    },
    {
      name: 'RS FWD',
      msrp: 43400,
      range: 319,
      power: 220,
      drivetrain: 'FWD',
      battery: 85,
      acceleration: '7.4s'
    },
    {
      name: 'RS AWD',
      msrp: 47800,
      range: 285,
      power: 300,
      drivetrain: 'AWD',
      battery: 85,
      acceleration: '5.7s'
    }
  ],
  priceRange: '$33,600 - $47,800',
  rangeMin: 285,
  rangeMax: 319,
  charging: '150 kW DC fast charging',
  chargingPort: 'NACS',
  notes: 'Eligible for $7,500 federal tax credit, Google Built-in, 17.7" touchscreen'
};

/**
 * ALL VEHICLES ARRAY
 */
export const allVehiclesAccurate: VehicleData[] = [
  subaru_solterra_2026,
  hyundai_ioniq5_2026,
  kia_ev6_2025,
  tesla_model3_2026,
  tesla_modely_2026,
  ford_f150lightning_2025,
  chevrolet_equinoxev_2025
];

/**
 * YEAR-OVER-YEAR COMPARISON DATA
 */
export const yearOverYearChanges = {
  subaru_solterra: {
    '2025_to_2026': {
      range_increase: 61, // miles
      power_increase_min: 18, // hp (Premium/Limited)
      power_increase_max: 123, // hp (Touring XT)
      new_features: ['NACS connector', 'Battery preconditioning', 'Enhanced AWD system'],
      price_change: 'Similar pricing'
    }
  },
  hyundai_ioniq5: {
    '2025_to_2026': {
      price_decrease: 9200, // average
      battery_increase: 6.6, // kWh (77.4 to 84)
      range_increase: 15, // miles average
      new_features: ['NACS charging', 'XRT off-road trim', '$7,600-$9,800 price cuts']
    }
  },
  kia_ev6: {
    '2024_to_2025': {
      battery_increase: 6.6, // kWh (77.4 to 84)
      range_increase: 9, // miles RWD
      power_increase_gt: 25, // hp (576 to 601, 641 with boost)
      new_features: ['NACS charging (except GT)', 'Wireless CarPlay/Android Auto', 'New steering wheel']
    }
  },
  tesla_model3: {
    '2025_to_2026': {
      new_trim: 'Standard RWD',
      naming_change: 'Long Range renamed to Premium',
      new_features: ['More affordable entry point', 'Simplified trim structure']
    }
  },
  tesla_modely: {
    '2025_to_2026': {
      refresh: 'Juniper',
      range_increase_performance: 29, // miles
      acceleration_improvement: 0.2, // seconds (Performance)
      new_features: ['Standard trim', 'Ventilated front seats', 'Better interior materials', '8" rear touchscreen']
    }
  }
};
