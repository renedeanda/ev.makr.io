import { Vehicle } from '../types';

export const vehicles: Vehicle[] = [
  {
    "id": "2024-chevrolet-blazer-ev-2lt",
    "year": 2024,
    "make": "Chevrolet",
    "model": "Blazer EV",
    "trim": "2LT",
    "slug": "2024-chevrolet-blazer-ev-2lt",
    "pricing": {
      "msrpBase": 56715,
      "msrpMax": 61715
    },
    "range": {
      "epaRangeMiles": 293,
      "batteryCapacityKwh": 85,
      "efficiencyMPGe": 98,
      "efficiencyKwhPer100Mi": 34.4
    },
    "performance": {
      "horsepower": 288,
      "torque": 333,
      "zeroTo60": 6,
      "topSpeed": 112,
      "drivetrain": "RWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11.5,
      "dcChargingMaxKw": 190,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 64.1,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5025
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Super Cruise (hands-free highway driving)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-chevrolet-blazer-ev.jpg",
      "manufacturerUrl": "https://www.chevrolet.com/electric/blazer-ev",
      "availabilityStatus": "Available",
      "dataSource": "Chevrolet.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "GM Ultium platform with fast charging. Super Cruise hands-free driving available. Transitioning to NACS 2025+."
    }
  },
  {
    "id": "2024-chevrolet-blazer-ev-rs",
    "year": 2024,
    "make": "Chevrolet",
    "model": "Blazer EV",
    "trim": "RS AWD",
    "slug": "2024-chevrolet-blazer-ev-rs",
    "pricing": { "msrpBase": 61790, "msrpMax": 66790 },
    "range": { "epaRangeMiles": 283, "batteryCapacityKwh": 85, "efficiencyMPGe": 95, "efficiencyKwhPer100Mi": 35.5 },
    "performance": { "horsepower": 288, "torque": 333, "zeroTo60": 6.0, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 190, "chargingTime10to80Minutes": 34 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 25.5, "towingCapacityLbs": 0, "curbWeightLbs": 5150 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Super Cruise ready" },
    "meta": { "imageUrl": "/images/vehicles/2024-chevrolet-blazer-ev-rs.jpg", "manufacturerUrl": "https://www.chevrolet.com/electric/blazer-ev", "availabilityStatus": "Available", "dataSource": "Chevrolet.com, Inside EVs, Edmunds", "lastVerified": "2025-12-02", "notes": "2024 Blazer EV RS: Sport trim with 288 HP AWD, 283 mi range. Black exterior trim, sport interior." }
  },
  {
    "id": "2025-chevrolet-blazer-ev-ss",
    "year": 2025,
    "make": "Chevrolet",
    "model": "Blazer EV",
    "trim": "SS AWD",
    "slug": "2025-chevrolet-blazer-ev-ss",
    "pricing": { "msrpBase": 65995, "msrpMax": 70995 },
    "range": { "epaRangeMiles": 303, "batteryCapacityKwh": 85, "efficiencyMPGe": 93, "efficiencyKwhPer100Mi": 36.3 },
    "performance": { "horsepower": 615, "torque": 650, "zeroTo60": 3.4, "topSpeed": 125, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 190, "chargingTime10to80Minutes": 34 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 25.5, "towingCapacityLbs": 0, "curbWeightLbs": 5350 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Super Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2025-chevrolet-blazer-ev-ss.jpg", "manufacturerUrl": "https://www.chevrolet.com/electric/blazer-ev", "availabilityStatus": "Available", "dataSource": "Chevrolet.com, Car and Driver", "lastVerified": "2025-12-02", "notes": "2025 Blazer EV SS: Performance variant with 615 HP, 0-60 in 3.4s with WOW mode. 303 mi range. Native NACS connector." }
  },
  {
    "id": "2024-chevrolet-silverado-ev-wt",
    "year": 2024,
    "make": "Chevrolet",
    "model": "Silverado EV",
    "trim": "WT",
    "slug": "2024-chevrolet-silverado-ev-wt",
    "pricing": { "msrpBase": 79800, "msrpMax": 84800 },
    "range": { "epaRangeMiles": 450, "batteryCapacityKwh": 200, "efficiencyMPGe": 65, "efficiencyKwhPer100Mi": 51.9 },
    "performance": { "horsepower": 510, "torque": 615, "zeroTo60": 5.5, "topSpeed": 105, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 0, "towingCapacityLbs": 8500, "curbWeightLbs": 8500 },
    "features": { "hasHeatPump": false, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Super Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2024-chevrolet-silverado-ev.jpg", "manufacturerUrl": "https://www.chevrolet.com/electric/silverado-ev", "availabilityStatus": "Available", "dataSource": "Chevrolet.com, GM Authority", "lastVerified": "2025-12-02", "notes": "2024 Silverado EV WT: Work truck with 450 mi range, 510 HP, 8,500 lb towing. V2L and V2H capability." }
  },
  {
    "id": "2025-chevrolet-silverado-ev-wt-standard",
    "year": 2025,
    "make": "Chevrolet",
    "model": "Silverado EV",
    "trim": "WT Standard Range",
    "slug": "2025-chevrolet-silverado-ev-wt-standard",
    "pricing": { "msrpBase": 57095, "msrpMax": 62095 },
    "range": { "epaRangeMiles": 282, "batteryCapacityKwh": 122, "efficiencyMPGe": 60, "efficiencyKwhPer100Mi": 56.3 },
    "performance": { "horsepower": 510, "torque": 615, "zeroTo60": 5.5, "topSpeed": 105, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 25 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 0, "towingCapacityLbs": 8500, "curbWeightLbs": 8200 },
    "features": { "hasHeatPump": false, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Super Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2025-chevrolet-silverado-ev.jpg", "manufacturerUrl": "https://www.chevrolet.com/electric/silverado-ev", "availabilityStatus": "Available", "dataSource": "Chevrolet.com, GM Authority, Motor Authority", "lastVerified": "2025-12-02", "notes": "2025 Silverado EV WT Standard: Base work truck starting at $57,095. 282 mi range, 510 HP, 8,500 lb towing. Native NACS." }
  },
  {
    "id": "2025-chevrolet-silverado-ev-wt-max",
    "year": 2025,
    "make": "Chevrolet",
    "model": "Silverado EV",
    "trim": "WT Max Range",
    "slug": "2025-chevrolet-silverado-ev-wt-max",
    "pricing": { "msrpBase": 72500, "msrpMax": 77500 },
    "range": { "epaRangeMiles": 492, "batteryCapacityKwh": 200, "efficiencyMPGe": 64, "efficiencyKwhPer100Mi": 52.7 },
    "performance": { "horsepower": 510, "torque": 615, "zeroTo60": 5.5, "topSpeed": 105, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 0, "towingCapacityLbs": 8500, "curbWeightLbs": 8500 },
    "features": { "hasHeatPump": false, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Super Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2025-chevrolet-silverado-ev.jpg", "manufacturerUrl": "https://www.chevrolet.com/electric/silverado-ev", "availabilityStatus": "Available", "dataSource": "Chevrolet.com, Chevrolet News", "lastVerified": "2025-12-02", "notes": "2025 Silverado EV WT Max Range: Record 492 mi EPA range - highest of any EV truck. 510 HP, 8,500 lb towing, V2H capability." }
  },
  {
    "id": "2025-chevrolet-silverado-ev-rst",
    "year": 2025,
    "make": "Chevrolet",
    "model": "Silverado EV",
    "trim": "RST",
    "slug": "2025-chevrolet-silverado-ev-rst",
    "pricing": { "msrpBase": 89995, "msrpMax": 94995 },
    "range": { "epaRangeMiles": 390, "batteryCapacityKwh": 170, "efficiencyMPGe": 62, "efficiencyKwhPer100Mi": 54.4 },
    "performance": { "horsepower": 754, "torque": 785, "zeroTo60": 4.5, "topSpeed": 110, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 35 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 0, "towingCapacityLbs": 12500, "curbWeightLbs": 9000 },
    "features": { "hasHeatPump": false, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Super Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2025-chevrolet-silverado-ev-rst.jpg", "manufacturerUrl": "https://www.chevrolet.com/electric/silverado-ev", "availabilityStatus": "Available", "dataSource": "Chevrolet.com, GM Authority", "lastVerified": "2025-12-02", "notes": "2025 Silverado EV RST: Performance truck with 754 HP, 12,500 lb towing, 390 mi range. 0-60 in 4.5s, Super Cruise, V2H." }
  },
  {
    "id": "2026-chevrolet-silverado-ev-trail-boss",
    "year": 2026,
    "make": "Chevrolet",
    "model": "Silverado EV",
    "trim": "Trail Boss",
    "slug": "2026-chevrolet-silverado-ev-trail-boss",
    "pricing": { "msrpBase": 95000, "msrpMax": 100000 },
    "range": { "epaRangeMiles": 380, "batteryCapacityKwh": 170, "efficiencyMPGe": 61, "efficiencyKwhPer100Mi": 55.3 },
    "performance": { "horsepower": 725, "torque": 750, "zeroTo60": 4.7, "topSpeed": 108, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 35 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 0, "towingCapacityLbs": 11000, "curbWeightLbs": 8900 },
    "features": { "hasHeatPump": false, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Super Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2026-chevrolet-silverado-ev.jpg", "manufacturerUrl": "https://www.chevrolet.com/electric/silverado-ev", "availabilityStatus": "Announced", "dataSource": "Car and Driver, GM Authority", "lastVerified": "2025-12-02", "notes": "2026 Silverado EV Trail Boss: Off-road focused trim with 725 HP, 11,000 lb towing, 380 mi range. Native NACS, Super Cruise." }
  },
  {
    "id": "2024-ford-f150-lightning-lariat",
    "year": 2024,
    "make": "Ford",
    "model": "F-150 Lightning",
    "trim": "Lariat Extended Range",
    "slug": "2024-ford-f150-lightning-lariat",
    "pricing": {
      "msrpBase": 74995,
      "msrpMax": 78995
    },
    "range": {
      "epaRangeMiles": 320,
      "batteryCapacityKwh": 131,
      "efficiencyMPGe": 66,
      "efficiencyKwhPer100Mi": 51
    },
    "performance": {
      "horsepower": 580,
      "torque": 775,
      "zeroTo60": 4,
      "topSpeed": 110,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 19.2,
      "dcChargingMaxKw": 155,
      "chargingTime10to80Minutes": 44
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 52.8,
      "towingCapacityLbs": 10000,
      "curbWeightLbs": 6590
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": true,
      "hasV2H": true,
      "autopilotLevel": "BlueCruise (hands-free highway driving)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-ford-f150-lightning.jpg",
      "manufacturerUrl": "https://www.ford.com/trucks/f150/f150-lightning/",
      "availabilityStatus": "Available",
      "dataSource": "Ford.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "Electric version of America's best-selling truck. Exceptional towing (10,000 lbs). V2H can power your home during outages. Free NACS adapter for Supercharger access."
    }
  },
  {
    "id": "2025-ford-f150-lightning-pro",
    "year": 2025,
    "make": "Ford",
    "model": "F-150 Lightning",
    "trim": "Pro",
    "slug": "2025-ford-f150-lightning-pro",
    "pricing": { "msrpBase": 49875, "msrpMax": 49875 },
    "range": { "epaRangeMiles": 240, "batteryCapacityKwh": 98, "efficiencyMPGe": 70, "efficiencyKwhPer100Mi": 48.2 },
    "performance": { "horsepower": 452, "torque": 775, "zeroTo60": 4.5, "topSpeed": 110, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 44 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 52.8, "towingCapacityLbs": 7700, "curbWeightLbs": 6500 },
    "features": { "hasHeatPump": false, "hasV2L": true, "hasV2H": true, "autopilotLevel": "BlueCruise 1.2 available" },
    "meta": { "imageUrl": "/images/vehicles/2025-ford-f150-lightning-pro.jpg", "manufacturerUrl": "https://www.ford.com/trucks/f150/f150-lightning/", "availabilityStatus": "Available", "dataSource": "Ford.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "Base F-150 Lightning. Commercial/fleet focus. 98 kWh battery, 240 mi range, 7,700 lb towing. NACS with adapter." }
  },
  {
    "id": "2025-ford-f150-lightning-stx",
    "year": 2025,
    "make": "Ford",
    "model": "F-150 Lightning",
    "trim": "STX",
    "slug": "2025-ford-f150-lightning-stx",
    "pricing": { "msrpBase": 57000, "msrpMax": 57000 },
    "range": { "epaRangeMiles": 240, "batteryCapacityKwh": 98, "efficiencyMPGe": 70, "efficiencyKwhPer100Mi": 48.2 },
    "performance": { "horsepower": 452, "torque": 775, "zeroTo60": 4.5, "topSpeed": 110, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 44 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 52.8, "towingCapacityLbs": 7700, "curbWeightLbs": 6520 },
    "features": { "hasHeatPump": false, "hasV2L": true, "hasV2H": true, "autopilotLevel": "BlueCruise 1.2 available" },
    "meta": { "imageUrl": "/images/vehicles/2025-ford-f150-lightning-stx.jpg", "manufacturerUrl": "https://www.ford.com/trucks/f150/f150-lightning/", "availabilityStatus": "Available", "dataSource": "Ford.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "NEW 2025 STX trim replaces XLT. Sport appearance, 18\" wheels, standard battery. 7,700 lb towing." }
  },
  {
    "id": "2025-ford-f150-lightning-flash",
    "year": 2025,
    "make": "Ford",
    "model": "F-150 Lightning",
    "trim": "Flash",
    "slug": "2025-ford-f150-lightning-flash",
    "pricing": { "msrpBase": 70090, "msrpMax": 70090 },
    "range": { "epaRangeMiles": 300, "batteryCapacityKwh": 131, "efficiencyMPGe": 76, "efficiencyKwhPer100Mi": 44.3 },
    "performance": { "horsepower": 580, "torque": 775, "zeroTo60": 4.0, "topSpeed": 110, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 44 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 52.8, "towingCapacityLbs": 10000, "curbWeightLbs": 6740 },
    "features": { "hasHeatPump": false, "hasV2L": true, "hasV2H": true, "autopilotLevel": "BlueCruise 1.2 included" },
    "meta": { "imageUrl": "/images/vehicles/2025-ford-f150-lightning-flash.jpg", "manufacturerUrl": "https://www.ford.com/trucks/f150/f150-lightning/", "availabilityStatus": "Available", "dataSource": "Ford.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "Flash: extended range 131 kWh battery, 300 mi EPA. 580 hp, 10,000 lb towing with Max Trailer package." }
  },
  {
    "id": "2025-ford-f150-lightning-lariat",
    "year": 2025,
    "make": "Ford",
    "model": "F-150 Lightning",
    "trim": "Lariat Extended Range",
    "slug": "2025-ford-f150-lightning-lariat",
    "pricing": { "msrpBase": 79090, "msrpMax": 79090 },
    "range": { "epaRangeMiles": 320, "batteryCapacityKwh": 131, "efficiencyMPGe": 78, "efficiencyKwhPer100Mi": 43.2 },
    "performance": { "horsepower": 580, "torque": 775, "zeroTo60": 4.0, "topSpeed": 110, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 44 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 52.8, "towingCapacityLbs": 10000, "curbWeightLbs": 6770 },
    "features": { "hasHeatPump": false, "hasV2L": true, "hasV2H": true, "autopilotLevel": "BlueCruise 1.2 included" },
    "meta": { "imageUrl": "/images/vehicles/2025-ford-f150-lightning-lariat.jpg", "manufacturerUrl": "https://www.ford.com/trucks/f150/f150-lightning/", "availabilityStatus": "Available", "dataSource": "Ford.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "Lariat: Premium trim, 320 mi range (best F-150 Lightning range). Leather, heated/cooled seats, 10k lb towing." }
  },
  {
    "id": "2025-ford-f150-lightning-platinum",
    "year": 2025,
    "make": "Ford",
    "model": "F-150 Lightning",
    "trim": "Platinum",
    "slug": "2025-ford-f150-lightning-platinum",
    "pricing": { "msrpBase": 87090, "msrpMax": 87090 },
    "range": { "epaRangeMiles": 300, "batteryCapacityKwh": 131, "efficiencyMPGe": 76, "efficiencyKwhPer100Mi": 44.3 },
    "performance": { "horsepower": 580, "torque": 775, "zeroTo60": 4.0, "topSpeed": 110, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 44 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 52.8, "towingCapacityLbs": 10000, "curbWeightLbs": 6800 },
    "features": { "hasHeatPump": false, "hasV2L": true, "hasV2H": true, "autopilotLevel": "BlueCruise 1.2 included" },
    "meta": { "imageUrl": "/images/vehicles/2025-ford-f150-lightning-platinum.jpg", "manufacturerUrl": "https://www.ford.com/trucks/f150/f150-lightning/", "availabilityStatus": "Available", "dataSource": "Ford.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "Top Platinum trim: Luxury features, 22\" wheels, panoramic roof, Bang & Olufsen audio, 10k lb towing." }
  },
  {
    "id": "2024-ford-mustang-mach-e-premium",
    "year": 2024,
    "make": "Ford",
    "model": "Mustang Mach-E",
    "trim": "Premium AWD Extended Range",
    "slug": "2024-ford-mustang-mach-e-premium",
    "pricing": {
      "msrpBase": 54995,
      "msrpMax": 59995
    },
    "range": {
      "epaRangeMiles": 290,
      "batteryCapacityKwh": 91,
      "efficiencyMPGe": 93,
      "efficiencyKwhPer100Mi": 36.2
    },
    "performance": {
      "horsepower": 346,
      "torque": 428,
      "zeroTo60": 5.2,
      "topSpeed": 111,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 10.5,
      "dcChargingMaxKw": 150,
      "chargingTime10to80Minutes": 38
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 59.7,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 4920
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "BlueCruise (hands-free highway driving)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-ford-mustang-mach-e.jpg",
      "manufacturerUrl": "https://www.ford.com/suvs/mach-e/",
      "availabilityStatus": "Available",
      "dataSource": "Ford.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "Sporty electric SUV with Mustang heritage. BlueCruise hands-free driving. Free NACS adapter for Supercharger access."
    }
  },
  {
    "id": "2024-hyundai-ioniq-5-sel-awd",
    "year": 2024,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "SEL AWD",
    "slug": "2024-hyundai-ioniq-5-sel-awd",
    "pricing": {
      "msrpBase": 51300,
      "msrpMax": 56000
    },
    "range": {
      "epaRangeMiles": 266,
      "batteryCapacityKwh": 77.4,
      "efficiencyMPGe": 104,
      "efficiencyKwhPer100Mi": 32.5
    },
    "performance": {
      "horsepower": 320,
      "torque": 446,
      "zeroTo60": 4.7,
      "topSpeed": 115,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 10.9,
      "dcChargingMaxKw": 250,
      "chargingTime10to80Minutes": 18
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 59.3,
      "towingCapacityLbs": 1650,
      "curbWeightLbs": 4678
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": true,
      "hasV2H": true,
      "autopilotLevel": "Highway Driving Assist 2"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-hyundai-ioniq-5.jpg",
      "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5",
      "availabilityStatus": "Available",
      "dataSource": "Hyundai.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "Award-winning design with 800V architecture. V2L and V2H capabilities. Shares platform with Kia EV6. NACS adapter available 2025."
    }
  },
  {
    "id": "2022-kia-ev6-light-rwd",
    "year": 2022,
    "make": "Kia",
    "model": "EV6",
    "trim": "Light RWD",
    "slug": "2022-kia-ev6-light-rwd",
    "pricing": { "msrpBase": 42115, "msrpMax": 42115 },
    "range": { "epaRangeMiles": 232, "batteryCapacityKwh": 58, "efficiencyMPGe": 105, "efficiencyKwhPer100Mi": 32.1 },
    "performance": { "horsepower": 167, "torque": 258, "zeroTo60": 8.0, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.9, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 50.2, "towingCapacityLbs": 0, "curbWeightLbs": 3900 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist" },
    "meta": { "imageUrl": "/images/vehicles/2022-kia-ev6.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev6", "availabilityStatus": "Available", "dataSource": "Kia.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-29", "notes": "First year EV6 production for North America. Base Light trim with 58 kWh battery, not rated for towing. 800V ultra-fast charging architecture." }
  },
  {
    "id": "2022-kia-ev6-wind-rwd",
    "year": 2022,
    "make": "Kia",
    "model": "EV6",
    "trim": "Wind RWD",
    "slug": "2022-kia-ev6-wind-rwd",
    "pricing": { "msrpBase": 48215, "msrpMax": 48215 },
    "range": { "epaRangeMiles": 310, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 117, "efficiencyKwhPer100Mi": 28.8 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.2, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.9, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 50.2, "towingCapacityLbs": 2300, "curbWeightLbs": 4100 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist" },
    "meta": { "imageUrl": "/images/vehicles/2022-kia-ev6.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev6", "availabilityStatus": "Available", "dataSource": "Kia.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-29", "notes": "Best range in 2022 lineup at 310 miles. 77.4 kWh battery with RWD efficiency. Adds towing capability (2,300 lbs)." }
  },
  {
    "id": "2022-kia-ev6-wind-awd",
    "year": 2022,
    "make": "Kia",
    "model": "EV6",
    "trim": "Wind AWD",
    "slug": "2022-kia-ev6-wind-awd",
    "pricing": { "msrpBase": 52115, "msrpMax": 52115 },
    "range": { "epaRangeMiles": 274, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 105, "efficiencyKwhPer100Mi": 32.1 },
    "performance": { "horsepower": 320, "torque": 446, "zeroTo60": 4.6, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.9, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 50.2, "towingCapacityLbs": 2300, "curbWeightLbs": 4500 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist" },
    "meta": { "imageUrl": "/images/vehicles/2022-kia-ev6.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev6", "availabilityStatus": "Available", "dataSource": "Kia.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-29", "notes": "Dual motor AWD with 320 hp. Quick 4.6s 0-60 time. 77.4 kWh battery, towing capable." }
  },
  {
    "id": "2022-kia-ev6-gtline-awd",
    "year": 2022,
    "make": "Kia",
    "model": "EV6",
    "trim": "GT-Line AWD",
    "slug": "2022-kia-ev6-gtline-awd",
    "pricing": { "msrpBase": 57115, "msrpMax": 57115 },
    "range": { "epaRangeMiles": 274, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 105, "efficiencyKwhPer100Mi": 32.1 },
    "performance": { "horsepower": 320, "torque": 446, "zeroTo60": 4.5, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.9, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 50.2, "towingCapacityLbs": 2300, "curbWeightLbs": 4600 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2022-kia-ev6-gtline.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev6", "availabilityStatus": "Available", "dataSource": "Kia.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-29", "notes": "Top 2022 trim. Sport styling, D-shaped steering wheel, surround-view camera, sunroof. 320 hp AWD, 0-60 in 4.5s." }
  },
  {
    "id": "2023-kia-ev6-light-rwd",
    "year": 2023,
    "make": "Kia",
    "model": "EV6",
    "trim": "Light RWD",
    "slug": "2023-kia-ev6-light-rwd",
    "pricing": { "msrpBase": 42600, "msrpMax": 42600 },
    "range": { "epaRangeMiles": 232, "batteryCapacityKwh": 58, "efficiencyMPGe": 105, "efficiencyKwhPer100Mi": 32.1 },
    "performance": { "horsepower": 167, "torque": 258, "zeroTo60": 8.0, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.9, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 50.2, "towingCapacityLbs": 0, "curbWeightLbs": 3900 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist" },
    "meta": { "imageUrl": "/images/vehicles/2023-kia-ev6.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev6", "availabilityStatus": "Available", "dataSource": "Kia.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-29", "notes": "2023 adds GT trim to lineup. Base Light trim continues with 58 kWh battery." }
  },
  {
    "id": "2023-kia-ev6-wind-rwd",
    "year": 2023,
    "make": "Kia",
    "model": "EV6",
    "trim": "Wind RWD",
    "slug": "2023-kia-ev6-wind-rwd",
    "pricing": { "msrpBase": 48700, "msrpMax": 48700 },
    "range": { "epaRangeMiles": 310, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 117, "efficiencyKwhPer100Mi": 28.8 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.2, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.9, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 50.2, "towingCapacityLbs": 2300, "curbWeightLbs": 4100 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist" },
    "meta": { "imageUrl": "/images/vehicles/2023-kia-ev6.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev6", "availabilityStatus": "Available", "dataSource": "Kia.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-29", "notes": "Best range option at 310 miles. RWD efficiency with 77.4 kWh battery." }
  },
  {
    "id": "2023-kia-ev6-wind-awd",
    "year": 2023,
    "make": "Kia",
    "model": "EV6",
    "trim": "Wind AWD",
    "slug": "2023-kia-ev6-wind-awd",
    "pricing": { "msrpBase": 52600, "msrpMax": 52600 },
    "range": { "epaRangeMiles": 274, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 105, "efficiencyKwhPer100Mi": 32.1 },
    "performance": { "horsepower": 320, "torque": 446, "zeroTo60": 4.6, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.9, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 50.2, "towingCapacityLbs": 2300, "curbWeightLbs": 4500 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist" },
    "meta": { "imageUrl": "/images/vehicles/2023-kia-ev6.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev6", "availabilityStatus": "Available", "dataSource": "Kia.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-29", "notes": "Dual motor AWD with 320 hp. Popular mid-tier trim." }
  },
  {
    "id": "2023-kia-ev6-gtline-awd",
    "year": 2023,
    "make": "Kia",
    "model": "EV6",
    "trim": "GT-Line AWD",
    "slug": "2023-kia-ev6-gtline-awd",
    "pricing": { "msrpBase": 57600, "msrpMax": 57600 },
    "range": { "epaRangeMiles": 274, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 105, "efficiencyKwhPer100Mi": 32.1 },
    "performance": { "horsepower": 320, "torque": 446, "zeroTo60": 4.5, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.9, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 50.2, "towingCapacityLbs": 2300, "curbWeightLbs": 4600 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2023-kia-ev6-gtline.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev6", "availabilityStatus": "Available", "dataSource": "Kia.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-29", "notes": "Sport styling with premium features. 320 hp AWD." }
  },
  {
    "id": "2023-kia-ev6-gt",
    "year": 2023,
    "make": "Kia",
    "model": "EV6",
    "trim": "GT",
    "slug": "2023-kia-ev6-gt",
    "pricing": { "msrpBase": 61600, "msrpMax": 61600 },
    "range": { "epaRangeMiles": 206, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 89, "efficiencyKwhPer100Mi": 37.9 },
    "performance": { "horsepower": 576, "torque": 545, "zeroTo60": 3.2, "topSpeed": 162, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.9, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 50.2, "towingCapacityLbs": 0, "curbWeightLbs": 4900 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2023-kia-ev6-gt.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev6", "availabilityStatus": "Available", "dataSource": "Kia.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-29", "notes": "NEW for 2023: First EV6 GT with 576 hp, 0-60 in 3.2s. Track-focused with adaptive suspension, drift mode, GT mode. Performance reduces range to 206 mi." }
  },
  {
    "id": "2024-kia-ev6-gt-line",
    "year": 2024,
    "make": "Kia",
    "model": "EV6",
    "trim": "GT-Line AWD",
    "slug": "2024-kia-ev6-gt-line",
    "pricing": {
      "msrpBase": 51900,
      "msrpMax": 56900
    },
    "range": {
      "epaRangeMiles": 282,
      "batteryCapacityKwh": 77.4,
      "efficiencyMPGe": 105,
      "efficiencyKwhPer100Mi": 32.1
    },
    "performance": {
      "horsepower": 320,
      "torque": 446,
      "zeroTo60": 4.6,
      "topSpeed": 115,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 10.9,
      "dcChargingMaxKw": 240,
      "chargingTime10to80Minutes": 18
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 50.2,
      "towingCapacityLbs": 1650,
      "curbWeightLbs": 4695
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": true,
      "hasV2H": false,
      "autopilotLevel": "Highway Driving Assist 2"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-kia-ev6.jpg",
      "manufacturerUrl": "https://www.kia.com/us/en/ev6",
      "availabilityStatus": "Available",
      "dataSource": "Kia.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "800V architecture enables ultra-fast charging (10-80% in 18 min). V2L can power devices and appliances. NACS adapter available 2025."
    }
  },
  {
    "id": "2025-kia-ev6-light",
    "year": 2025,
    "make": "Kia",
    "model": "EV6",
    "trim": "Light",
    "slug": "2025-kia-ev6-light",
    "pricing": { "msrpBase": 42900, "msrpMax": 42900 },
    "range": { "epaRangeMiles": 237, "batteryCapacityKwh": 63, "efficiencyMPGe": 100, "efficiencyKwhPer100Mi": 33.6 },
    "performance": { "horsepower": 167, "torque": 258, "zeroTo60": 8.3, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 50.2, "towingCapacityLbs": 1650, "curbWeightLbs": 3900 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-kia-ev6.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev6", "availabilityStatus": "Available", "dataSource": "Kia.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "Base EV6 trim. 63 kWh battery, RWD. 2025 adds NACS port and larger 84 kWh battery option." }
  },
  {
    "id": "2025-kia-ev6-light-lr-rwd",
    "year": 2025,
    "make": "Kia",
    "model": "EV6",
    "trim": "Light Long Range RWD",
    "slug": "2025-kia-ev6-light-lr-rwd",
    "pricing": { "msrpBase": 47900, "msrpMax": 47900 },
    "range": { "epaRangeMiles": 319, "batteryCapacityKwh": 84, "efficiencyMPGe": 117, "efficiencyKwhPer100Mi": 28.8 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.3, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 50.2, "towingCapacityLbs": 1650, "curbWeightLbs": 4100 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-kia-ev6.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev6", "availabilityStatus": "Available", "dataSource": "Kia.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "84 kWh long-range battery, 319 mi EPA range - best in EV6 lineup. RWD for efficiency." }
  },
  {
    "id": "2025-kia-ev6-light-lr-awd",
    "year": 2025,
    "make": "Kia",
    "model": "EV6",
    "trim": "Light Long Range AWD",
    "slug": "2025-kia-ev6-light-lr-awd",
    "pricing": { "msrpBase": 50900, "msrpMax": 50900 },
    "range": { "epaRangeMiles": 295, "batteryCapacityKwh": 84, "efficiencyMPGe": 105, "efficiencyKwhPer100Mi": 32.1 },
    "performance": { "horsepower": 320, "torque": 446, "zeroTo60": 5.0, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 50.2, "towingCapacityLbs": 1650, "curbWeightLbs": 4500 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-kia-ev6.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev6", "availabilityStatus": "Available", "dataSource": "Kia.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "84 kWh battery with dual motor AWD. 320 hp, 0-60 in 5.0s. Great balance of range and performance." }
  },
  {
    "id": "2025-kia-ev6-wind-rwd",
    "year": 2025,
    "make": "Kia",
    "model": "EV6",
    "trim": "Wind RWD",
    "slug": "2025-kia-ev6-wind-rwd",
    "pricing": { "msrpBase": 50000, "msrpMax": 50000 },
    "range": { "epaRangeMiles": 319, "batteryCapacityKwh": 84, "efficiencyMPGe": 117, "efficiencyKwhPer100Mi": 28.8 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.3, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 50.2, "towingCapacityLbs": 1650, "curbWeightLbs": 4100 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-kia-ev6.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev6", "availabilityStatus": "Available", "dataSource": "Kia.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "Wind trim adds: 12.3\" digital cluster, heated/ventilated seats, smart cruise control, 319 mi range." }
  },
  {
    "id": "2025-kia-ev6-wind-awd",
    "year": 2025,
    "make": "Kia",
    "model": "EV6",
    "trim": "Wind AWD",
    "slug": "2025-kia-ev6-wind-awd",
    "pricing": { "msrpBase": 52900, "msrpMax": 52900 },
    "range": { "epaRangeMiles": 295, "batteryCapacityKwh": 84, "efficiencyMPGe": 105, "efficiencyKwhPer100Mi": 32.1 },
    "performance": { "horsepower": 320, "torque": 446, "zeroTo60": 4.5, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 50.2, "towingCapacityLbs": 1650, "curbWeightLbs": 4500 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-kia-ev6.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev6", "availabilityStatus": "Available", "dataSource": "Kia.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "Wind AWD: 320 hp dual motor, premium features, 0-60 in 4.5s. Popular mid-range trim." }
  },
  {
    "id": "2025-kia-ev6-gtline-rwd",
    "year": 2025,
    "make": "Kia",
    "model": "EV6",
    "trim": "GT-Line RWD",
    "slug": "2025-kia-ev6-gtline-rwd",
    "pricing": { "msrpBase": 55000, "msrpMax": 55000 },
    "range": { "epaRangeMiles": 319, "batteryCapacityKwh": 84, "efficiencyMPGe": 117, "efficiencyKwhPer100Mi": 28.8 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.3, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 50.2, "towingCapacityLbs": 1650, "curbWeightLbs": 4200 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-kia-ev6-gtline.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev6", "availabilityStatus": "Available", "dataSource": "Kia.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "GT-Line adds sport styling, 20\" wheels, GT seats, Meridian audio. RWD for maximum range." }
  },
  {
    "id": "2025-kia-ev6-gtline-awd",
    "year": 2025,
    "make": "Kia",
    "model": "EV6",
    "trim": "GT-Line AWD",
    "slug": "2025-kia-ev6-gtline-awd",
    "pricing": { "msrpBase": 58900, "msrpMax": 58900 },
    "range": { "epaRangeMiles": 271, "batteryCapacityKwh": 84, "efficiencyMPGe": 105, "efficiencyKwhPer100Mi": 32.1 },
    "performance": { "horsepower": 320, "torque": 446, "zeroTo60": 4.5, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 50.2, "towingCapacityLbs": 1650, "curbWeightLbs": 4600 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-kia-ev6-gtline.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev6", "availabilityStatus": "Available", "dataSource": "Kia.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "GT-Line AWD: Sport styling, 320 hp, premium Meridian audio, HDA2. Fast 0-60 in 4.5s." }
  },
  {
    "id": "2025-kia-ev6-gt",
    "year": 2025,
    "make": "Kia",
    "model": "EV6",
    "trim": "GT",
    "slug": "2025-kia-ev6-gt",
    "pricing": { "msrpBase": 63800, "msrpMax": 63800 },
    "range": { "epaRangeMiles": 231, "batteryCapacityKwh": 84, "efficiencyMPGe": 85, "efficiencyKwhPer100Mi": 39.6 },
    "performance": { "horsepower": 641, "torque": 545, "zeroTo60": 3.2, "topSpeed": 162, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 50.2, "towingCapacityLbs": 0, "curbWeightLbs": 4900 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-kia-ev6-gt.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev6", "availabilityStatus": "Available", "dataSource": "Kia.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "EV6 GT: 641 hp beast, 0-60 in 3.2s. GT mode, drift mode, track suspension. Still uses CCS1 connector." }
  },
  {
    "id": "2024-nissan-ariya-engage",
    "year": 2024,
    "make": "Nissan",
    "model": "Ariya",
    "trim": "Engage+ e-4ORCE",
    "slug": "2024-nissan-ariya-engage",
    "pricing": {
      "msrpBase": 52550,
      "msrpMax": 57550
    },
    "range": {
      "epaRangeMiles": 265,
      "batteryCapacityKwh": 87,
      "efficiencyMPGe": 89,
      "efficiencyKwhPer100Mi": 37.9
    },
    "performance": {
      "horsepower": 389,
      "torque": 442,
      "zeroTo60": 4.8,
      "topSpeed": 100,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 7.2,
      "dcChargingMaxKw": 130,
      "chargingTime10to80Minutes": 44
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 59.7,
      "towingCapacityLbs": 1500,
      "curbWeightLbs": 5150
    },
    "features": {
      "hasHeatPump": false,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "ProPILOT Assist 2.0"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-nissan-ariya.jpg",
      "manufacturerUrl": "https://www.nissanusa.com/vehicles/electric-cars/ariya.html",
      "availabilityStatus": "Available",
      "dataSource": "Nissan.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "Nissan's first modern EV (replacing the Leaf). Premium interior with advanced driver assistance. NACS plans announced for future models."
    }
  },
  {
    "id": "2024-nissan-ariya-venture-fwd",
    "year": 2024,
    "make": "Nissan",
    "model": "Ariya",
    "trim": "Venture+ FWD",
    "slug": "2024-nissan-ariya-venture-fwd",
    "pricing": { "msrpBase": 47000, "msrpMax": 52000 },
    "range": { "epaRangeMiles": 304, "batteryCapacityKwh": 87, "efficiencyMPGe": 99, "efficiencyKwhPer100Mi": 34.1 },
    "performance": { "horsepower": 238, "torque": 221, "zeroTo60": 7.5, "topSpeed": 100, "drivetrain": "FWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 7.2, "dcChargingMaxKw": 130, "chargingTime10to80Minutes": 44 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.7, "towingCapacityLbs": 1500, "curbWeightLbs": 4850 },
    "features": { "hasHeatPump": false, "hasV2L": false, "hasV2H": false, "autopilotLevel": "ProPILOT Assist 2.0" },
    "meta": { "imageUrl": "/images/vehicles/2024-nissan-ariya.jpg", "manufacturerUrl": "https://www.nissanusa.com/vehicles/electric-cars/ariya.html", "availabilityStatus": "Available", "dataSource": "Nissan.com, EPA", "lastVerified": "2025-12-02", "notes": "2024 Ariya Venture+ FWD: 304 mi range, 238 HP. 87 kWh battery, ProPILOT Assist 2.0, premium interior." }
  },
  {
    "id": "2024-nissan-ariya-venture-awd",
    "year": 2024,
    "make": "Nissan",
    "model": "Ariya",
    "trim": "Venture+ e-4ORCE AWD",
    "slug": "2024-nissan-ariya-venture-awd",
    "pricing": { "msrpBase": 50000, "msrpMax": 55000 },
    "range": { "epaRangeMiles": 285, "batteryCapacityKwh": 87, "efficiencyMPGe": 94, "efficiencyKwhPer100Mi": 35.9 },
    "performance": { "horsepower": 389, "torque": 442, "zeroTo60": 4.8, "topSpeed": 100, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 7.2, "dcChargingMaxKw": 130, "chargingTime10to80Minutes": 44 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.7, "towingCapacityLbs": 1500, "curbWeightLbs": 5100 },
    "features": { "hasHeatPump": false, "hasV2L": false, "hasV2H": false, "autopilotLevel": "ProPILOT Assist 2.0" },
    "meta": { "imageUrl": "/images/vehicles/2024-nissan-ariya-awd.jpg", "manufacturerUrl": "https://www.nissanusa.com/vehicles/electric-cars/ariya.html", "availabilityStatus": "Available", "dataSource": "Nissan.com, EPA", "lastVerified": "2025-12-02", "notes": "2024 Ariya Venture+ AWD: 285 mi range, 389 HP e-4ORCE dual motor. 0-60 in 4.8s, all-weather capability." }
  },
  {
    "id": "2024-nissan-ariya-evolve-fwd",
    "year": 2024,
    "make": "Nissan",
    "model": "Ariya",
    "trim": "Evolve+ FWD",
    "slug": "2024-nissan-ariya-evolve-fwd",
    "pricing": { "msrpBase": 50000, "msrpMax": 55000 },
    "range": { "epaRangeMiles": 304, "batteryCapacityKwh": 87, "efficiencyMPGe": 99, "efficiencyKwhPer100Mi": 34.1 },
    "performance": { "horsepower": 238, "torque": 221, "zeroTo60": 7.5, "topSpeed": 100, "drivetrain": "FWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 7.2, "dcChargingMaxKw": 130, "chargingTime10to80Minutes": 44 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.7, "towingCapacityLbs": 1500, "curbWeightLbs": 4850 },
    "features": { "hasHeatPump": false, "hasV2L": false, "hasV2H": false, "autopilotLevel": "ProPILOT Assist 2.0" },
    "meta": { "imageUrl": "/images/vehicles/2024-nissan-ariya.jpg", "manufacturerUrl": "https://www.nissanusa.com/vehicles/electric-cars/ariya.html", "availabilityStatus": "Available", "dataSource": "Nissan.com, EPA", "lastVerified": "2025-12-02", "notes": "2024 Ariya Evolve+ FWD: Mid-tier trim, 304 mi range. Enhanced features, premium materials, ProPILOT 2.0." }
  },
  {
    "id": "2024-nissan-ariya-platinum-awd",
    "year": 2024,
    "make": "Nissan",
    "model": "Ariya",
    "trim": "Platinum+ e-4ORCE AWD",
    "slug": "2024-nissan-ariya-platinum-awd",
    "pricing": { "msrpBase": 60000, "msrpMax": 65000 },
    "range": { "epaRangeMiles": 265, "batteryCapacityKwh": 87, "efficiencyMPGe": 89, "efficiencyKwhPer100Mi": 37.9 },
    "performance": { "horsepower": 389, "torque": 442, "zeroTo60": 4.8, "topSpeed": 100, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 7.2, "dcChargingMaxKw": 130, "chargingTime10to80Minutes": 44 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.7, "towingCapacityLbs": 1500, "curbWeightLbs": 5200 },
    "features": { "hasHeatPump": false, "hasV2L": false, "hasV2H": false, "autopilotLevel": "ProPILOT Assist 2.0" },
    "meta": { "imageUrl": "/images/vehicles/2024-nissan-ariya-platinum.jpg", "manufacturerUrl": "https://www.nissanusa.com/vehicles/electric-cars/ariya.html", "availabilityStatus": "Available", "dataSource": "Nissan.com, EPA", "lastVerified": "2025-12-02", "notes": "2024 Ariya Platinum+ AWD: Top trim, 265 mi range, 389 HP. Premium leather, Bose audio, ProPILOT 2.0." }
  },
  {
    "id": "2025-nissan-ariya-venture-fwd",
    "year": 2025,
    "make": "Nissan",
    "model": "Ariya",
    "trim": "Venture+ FWD",
    "slug": "2025-nissan-ariya-venture-fwd",
    "pricing": { "msrpBase": 47500, "msrpMax": 52500 },
    "range": { "epaRangeMiles": 304, "batteryCapacityKwh": 87, "efficiencyMPGe": 99, "efficiencyKwhPer100Mi": 34.1 },
    "performance": { "horsepower": 238, "torque": 221, "zeroTo60": 7.5, "topSpeed": 100, "drivetrain": "FWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 7.2, "dcChargingMaxKw": 130, "chargingTime10to80Minutes": 44 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.7, "towingCapacityLbs": 1500, "curbWeightLbs": 4850 },
    "features": { "hasHeatPump": false, "hasV2L": false, "hasV2H": false, "autopilotLevel": "ProPILOT Assist 2.0" },
    "meta": { "imageUrl": "/images/vehicles/2025-nissan-ariya.jpg", "manufacturerUrl": "https://www.nissanusa.com/vehicles/electric-cars/ariya.html", "availabilityStatus": "Available", "dataSource": "Nissan.com, EPA", "lastVerified": "2025-12-02", "notes": "2025 Ariya Venture+ FWD: 304 mi range, 238 HP. Nissan's modern EV with premium features." }
  },
  {
    "id": "2025-nissan-ariya-venture-awd",
    "year": 2025,
    "make": "Nissan",
    "model": "Ariya",
    "trim": "Venture+ e-4ORCE AWD",
    "slug": "2025-nissan-ariya-venture-awd",
    "pricing": { "msrpBase": 50500, "msrpMax": 55500 },
    "range": { "epaRangeMiles": 285, "batteryCapacityKwh": 87, "efficiencyMPGe": 94, "efficiencyKwhPer100Mi": 35.9 },
    "performance": { "horsepower": 389, "torque": 442, "zeroTo60": 4.8, "topSpeed": 100, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 7.2, "dcChargingMaxKw": 130, "chargingTime10to80Minutes": 44 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.7, "towingCapacityLbs": 1500, "curbWeightLbs": 5100 },
    "features": { "hasHeatPump": false, "hasV2L": false, "hasV2H": false, "autopilotLevel": "ProPILOT Assist 2.0" },
    "meta": { "imageUrl": "/images/vehicles/2025-nissan-ariya-awd.jpg", "manufacturerUrl": "https://www.nissanusa.com/vehicles/electric-cars/ariya.html", "availabilityStatus": "Available", "dataSource": "Nissan.com, EPA", "lastVerified": "2025-12-02", "notes": "2025 Ariya Venture+ AWD: 285 mi range, 389 HP e-4ORCE. Dual motor AWD, 0-60 in 4.8s." }
  },
  {
    "id": "2025-nissan-ariya-evolve-fwd",
    "year": 2025,
    "make": "Nissan",
    "model": "Ariya",
    "trim": "Evolve+ FWD",
    "slug": "2025-nissan-ariya-evolve-fwd",
    "pricing": { "msrpBase": 50500, "msrpMax": 55500 },
    "range": { "epaRangeMiles": 304, "batteryCapacityKwh": 87, "efficiencyMPGe": 99, "efficiencyKwhPer100Mi": 34.1 },
    "performance": { "horsepower": 238, "torque": 221, "zeroTo60": 7.5, "topSpeed": 100, "drivetrain": "FWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 7.2, "dcChargingMaxKw": 130, "chargingTime10to80Minutes": 44 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.7, "towingCapacityLbs": 1500, "curbWeightLbs": 4850 },
    "features": { "hasHeatPump": false, "hasV2L": false, "hasV2H": false, "autopilotLevel": "ProPILOT Assist 2.0" },
    "meta": { "imageUrl": "/images/vehicles/2025-nissan-ariya.jpg", "manufacturerUrl": "https://www.nissanusa.com/vehicles/electric-cars/ariya.html", "availabilityStatus": "Available", "dataSource": "Nissan.com, EPA", "lastVerified": "2025-12-02", "notes": "2025 Ariya Evolve+ FWD: Mid-level trim, 304 mi range. Enhanced comfort and technology features." }
  },
  {
    "id": "2025-nissan-ariya-platinum-awd",
    "year": 2025,
    "make": "Nissan",
    "model": "Ariya",
    "trim": "Platinum+ e-4ORCE AWD",
    "slug": "2025-nissan-ariya-platinum-awd",
    "pricing": { "msrpBase": 60500, "msrpMax": 65500 },
    "range": { "epaRangeMiles": 265, "batteryCapacityKwh": 87, "efficiencyMPGe": 89, "efficiencyKwhPer100Mi": 37.9 },
    "performance": { "horsepower": 389, "torque": 442, "zeroTo60": 4.8, "topSpeed": 100, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 7.2, "dcChargingMaxKw": 130, "chargingTime10to80Minutes": 44 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.7, "towingCapacityLbs": 1500, "curbWeightLbs": 5200 },
    "features": { "hasHeatPump": false, "hasV2L": false, "hasV2H": false, "autopilotLevel": "ProPILOT Assist 2.0" },
    "meta": { "imageUrl": "/images/vehicles/2025-nissan-ariya-platinum.jpg", "manufacturerUrl": "https://www.nissanusa.com/vehicles/electric-cars/ariya.html", "availabilityStatus": "Available", "dataSource": "Nissan.com, EPA", "lastVerified": "2025-12-02", "notes": "2025 Ariya Platinum+ AWD: Premium trim, 265 mi range, 389 HP. Leather interior, Bose audio system." }
  },
  {
    "id": "2026-nissan-ariya-venture-fwd",
    "year": 2026,
    "make": "Nissan",
    "model": "Ariya",
    "trim": "Venture+ FWD",
    "slug": "2026-nissan-ariya-venture-fwd",
    "pricing": { "msrpBase": 48000, "msrpMax": 53000 },
    "range": { "epaRangeMiles": 304, "batteryCapacityKwh": 87, "efficiencyMPGe": 99, "efficiencyKwhPer100Mi": 34.1 },
    "performance": { "horsepower": 238, "torque": 221, "zeroTo60": 7.5, "topSpeed": 100, "drivetrain": "FWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 7.2, "dcChargingMaxKw": 130, "chargingTime10to80Minutes": 44 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.7, "towingCapacityLbs": 1500, "curbWeightLbs": 4850 },
    "features": { "hasHeatPump": false, "hasV2L": false, "hasV2H": false, "autopilotLevel": "ProPILOT Assist 2.0" },
    "meta": { "imageUrl": "/images/vehicles/2026-nissan-ariya.jpg", "manufacturerUrl": "https://www.nissanusa.com/vehicles/electric-cars/ariya.html", "availabilityStatus": "Available", "dataSource": "Nissan.com, EPA", "lastVerified": "2025-12-02", "notes": "2026 Ariya Venture+ FWD: 304 mi range, native NACS connector. Direct Supercharger access, ProPILOT 2.0." }
  },
  {
    "id": "2026-nissan-ariya-venture-awd",
    "year": 2026,
    "make": "Nissan",
    "model": "Ariya",
    "trim": "Venture+ e-4ORCE AWD",
    "slug": "2026-nissan-ariya-venture-awd",
    "pricing": { "msrpBase": 51000, "msrpMax": 56000 },
    "range": { "epaRangeMiles": 285, "batteryCapacityKwh": 87, "efficiencyMPGe": 94, "efficiencyKwhPer100Mi": 35.9 },
    "performance": { "horsepower": 389, "torque": 442, "zeroTo60": 4.8, "topSpeed": 100, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 7.2, "dcChargingMaxKw": 130, "chargingTime10to80Minutes": 44 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.7, "towingCapacityLbs": 1500, "curbWeightLbs": 5100 },
    "features": { "hasHeatPump": false, "hasV2L": false, "hasV2H": false, "autopilotLevel": "ProPILOT Assist 2.0" },
    "meta": { "imageUrl": "/images/vehicles/2026-nissan-ariya-awd.jpg", "manufacturerUrl": "https://www.nissanusa.com/vehicles/electric-cars/ariya.html", "availabilityStatus": "Available", "dataSource": "Nissan.com, EPA", "lastVerified": "2025-12-02", "notes": "2026 Ariya Venture+ AWD: 285 mi range, 389 HP e-4ORCE, native NACS. Dual motor performance, 0-60 in 4.8s." }
  },
  {
    "id": "2026-nissan-ariya-evolve-fwd",
    "year": 2026,
    "make": "Nissan",
    "model": "Ariya",
    "trim": "Evolve+ FWD",
    "slug": "2026-nissan-ariya-evolve-fwd",
    "pricing": { "msrpBase": 51000, "msrpMax": 56000 },
    "range": { "epaRangeMiles": 304, "batteryCapacityKwh": 87, "efficiencyMPGe": 99, "efficiencyKwhPer100Mi": 34.1 },
    "performance": { "horsepower": 238, "torque": 221, "zeroTo60": 7.5, "topSpeed": 100, "drivetrain": "FWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 7.2, "dcChargingMaxKw": 130, "chargingTime10to80Minutes": 44 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.7, "towingCapacityLbs": 1500, "curbWeightLbs": 4850 },
    "features": { "hasHeatPump": false, "hasV2L": false, "hasV2H": false, "autopilotLevel": "ProPILOT Assist 2.0" },
    "meta": { "imageUrl": "/images/vehicles/2026-nissan-ariya.jpg", "manufacturerUrl": "https://www.nissanusa.com/vehicles/electric-cars/ariya.html", "availabilityStatus": "Available", "dataSource": "Nissan.com, EPA", "lastVerified": "2025-12-02", "notes": "2026 Ariya Evolve+ FWD: Mid-tier, 304 mi range, native NACS. Enhanced features and premium materials." }
  },
  {
    "id": "2026-nissan-ariya-platinum-awd",
    "year": 2026,
    "make": "Nissan",
    "model": "Ariya",
    "trim": "Platinum+ e-4ORCE AWD",
    "slug": "2026-nissan-ariya-platinum-awd",
    "pricing": { "msrpBase": 61000, "msrpMax": 66000 },
    "range": { "epaRangeMiles": 265, "batteryCapacityKwh": 87, "efficiencyMPGe": 89, "efficiencyKwhPer100Mi": 37.9 },
    "performance": { "horsepower": 389, "torque": 442, "zeroTo60": 4.8, "topSpeed": 100, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 7.2, "dcChargingMaxKw": 130, "chargingTime10to80Minutes": 44 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.7, "towingCapacityLbs": 1500, "curbWeightLbs": 5200 },
    "features": { "hasHeatPump": false, "hasV2L": false, "hasV2H": false, "autopilotLevel": "ProPILOT Assist 2.0" },
    "meta": { "imageUrl": "/images/vehicles/2026-nissan-ariya-platinum.jpg", "manufacturerUrl": "https://www.nissanusa.com/vehicles/electric-cars/ariya.html", "availabilityStatus": "Available", "dataSource": "Nissan.com, EPA", "lastVerified": "2025-12-02", "notes": "2026 Ariya Platinum+ AWD: Top trim, 265 mi range, 389 HP, native NACS. Premium leather, Bose audio." }
  },
  {
    "id": "2024-rivian-r1t-dual-motor",
    "year": 2024,
    "make": "Rivian",
    "model": "R1T",
    "trim": "Dual Motor",
    "slug": "2024-rivian-r1t-dual-motor",
    "pricing": {
      "msrpBase": 73000,
      "msrpMax": 83000
    },
    "range": {
      "epaRangeMiles": 270,
      "batteryCapacityKwh": 92,
      "efficiencyMPGe": 71,
      "efficiencyKwhPer100Mi": 47.5
    },
    "performance": {
      "horsepower": 533,
      "torque": 610,
      "zeroTo60": 4.5,
      "topSpeed": 110,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11.5,
      "dcChargingMaxKw": 220,
      "chargingTime10to80Minutes": 30
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 54,
      "towingCapacityLbs": 11000,
      "curbWeightLbs": 7148
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": true,
      "hasV2H": false,
      "autopilotLevel": "Driver+"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-rivian-r1t.jpg",
      "manufacturerUrl": "https://rivian.com/r1t",
      "availabilityStatus": "Available",
      "dataSource": "Rivian.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "Adventure-focused electric truck with innovative gear tunnel. Exceptional off-road capability. Native NACS starting 2025, access to Rivian Adventure Network + Tesla Superchargers."
    }
  },
  {
    "id": "2024-tesla-model-3-long-range",
    "year": 2024,
    "make": "Tesla",
    "model": "Model 3",
    "trim": "Long Range",
    "slug": "2024-tesla-model-3-long-range",
    "pricing": {
      "msrpBase": 47240,
      "msrpMax": 47240
    },
    "range": {
      "epaRangeMiles": 341,
      "batteryCapacityKwh": 82,
      "efficiencyMPGe": 132,
      "efficiencyKwhPer100Mi": 25.6
    },
    "performance": {
      "horsepower": 346,
      "torque": 389,
      "zeroTo60": 4.2,
      "topSpeed": 145,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 250,
      "chargingTime10to80Minutes": 27
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 23,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 4034
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Autopilot included, FSD available"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-tesla-model-3.jpg",
      "manufacturerUrl": "https://www.tesla.com/model3",
      "availabilityStatus": "Available",
      "dataSource": "Tesla.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "Best-selling EV sedan. Native NACS with access to entire Supercharger network. Known for efficiency and tech features."
    }
  },
  {
    "id": "2024-tesla-model-y-long-range",
    "year": 2024,
    "make": "Tesla",
    "model": "Model Y",
    "trim": "Long Range",
    "slug": "2024-tesla-model-y-long-range",
    "pricing": {
      "msrpBase": 48990,
      "msrpMax": 48990
    },
    "range": {
      "epaRangeMiles": 330,
      "batteryCapacityKwh": 82,
      "efficiencyMPGe": 122,
      "efficiencyKwhPer100Mi": 27.7
    },
    "performance": {
      "horsepower": 384,
      "torque": 376,
      "zeroTo60": 4.8,
      "topSpeed": 135,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 250,
      "chargingTime10to80Minutes": 27
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 76,
      "towingCapacityLbs": 3500,
      "curbWeightLbs": 4398
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Autopilot included, FSD available"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-tesla-model-y.jpg",
      "manufacturerUrl": "https://www.tesla.com/modely",
      "availabilityStatus": "Available",
      "dataSource": "Tesla.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "Best-selling EV in America. Compact SUV with excellent cargo space and efficiency."
    }
  },
  {
    "id": "2024-volkswagen-id4-pro-s",
    "year": 2024,
    "make": "Volkswagen",
    "model": "ID.4",
    "trim": "Pro S AWD",
    "slug": "2024-volkswagen-id4-pro-s",
    "pricing": {
      "msrpBase": 48990,
      "msrpMax": 53990
    },
    "range": {
      "epaRangeMiles": 255,
      "batteryCapacityKwh": 82,
      "efficiencyMPGe": 99,
      "efficiencyKwhPer100Mi": 34
    },
    "performance": {
      "horsepower": 295,
      "torque": 339,
      "zeroTo60": 5.8,
      "topSpeed": 112,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 135,
      "chargingTime10to80Minutes": 38
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 64.2,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 4960
    },
    "features": {
      "hasHeatPump": false,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "IQ.Drive with Travel Assist"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-volkswagen-id4.jpg",
      "manufacturerUrl": "https://www.vw.com/en/models/id-4.html",
      "availabilityStatus": "Available",
      "dataSource": "VW.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "Spacious electric SUV with traditional VW quality. Three years of free charging on Electrify America network included. NACS adapter available."
    }
  },
  {
    "id": "2024-bmw-i4-edrive35",
    "year": 2024,
    "make": "BMW",
    "model": "i4",
    "trim": "eDrive35",
    "slug": "2024-bmw-i4-edrive35",
    "pricing": {
      "msrpBase": 57900,
      "msrpMax": 62900
    },
    "range": {
      "epaRangeMiles": 276,
      "batteryCapacityKwh": 70.2,
      "efficiencyMPGe": 104,
      "efficiencyKwhPer100Mi": 32.4
    },
    "performance": {
      "horsepower": 282,
      "torque": 295,
      "zeroTo60": 6.0,
      "topSpeed": 118,
      "drivetrain": "RWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 180,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 45.6,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 4650
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Driving Assistant Professional"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-bmw-i4.jpg",
      "manufacturerUrl": "https://www.bmwusa.com/vehicles/bmwi/bmw-i4.html",
      "availabilityStatus": "Available",
      "dataSource": "BMW.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-30",
      "notes": "Entry-level i4 with smaller battery pack. Excellent efficiency at 104 MPGe. RWD provides classic BMW driving dynamics at an accessible price point."
    }
  },
  {
    "id": "2024-bmw-i4-edrive40",
    "year": 2024,
    "make": "BMW",
    "model": "i4",
    "trim": "eDrive40",
    "slug": "2024-bmw-i4-edrive40",
    "pricing": {
      "msrpBase": 59400,
      "msrpMax": 64400
    },
    "range": {
      "epaRangeMiles": 301,
      "batteryCapacityKwh": 83.9,
      "efficiencyMPGe": 99,
      "efficiencyKwhPer100Mi": 34.1
    },
    "performance": {
      "horsepower": 335,
      "torque": 317,
      "zeroTo60": 5.5,
      "topSpeed": 118,
      "drivetrain": "RWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 205,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 45.6,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 4970
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Driving Assistant Professional"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-bmw-i4.jpg",
      "manufacturerUrl": "https://www.bmwusa.com/vehicles/bmwi/bmw-i4.html",
      "availabilityStatus": "Available",
      "dataSource": "BMW.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-30",
      "notes": "Popular i4 configuration with excellent 301-mile range and 335 HP. RWD for classic BMW driving feel. CCS1 connector with adapter available for Tesla Supercharger access."
    }
  },
  {
    "id": "2024-bmw-i4-xdrive40",
    "year": 2024,
    "make": "BMW",
    "model": "i4",
    "trim": "xDrive40",
    "slug": "2024-bmw-i4-xdrive40",
    "pricing": {
      "msrpBase": 63400,
      "msrpMax": 68400
    },
    "range": {
      "epaRangeMiles": 307,
      "batteryCapacityKwh": 83.9,
      "efficiencyMPGe": 95,
      "efficiencyKwhPer100Mi": 35.5
    },
    "performance": {
      "horsepower": 396,
      "torque": 586,
      "zeroTo60": 4.9,
      "topSpeed": 118,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 205,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 45.6,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5150
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Driving Assistant Professional"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-bmw-i4.jpg",
      "manufacturerUrl": "https://www.bmwusa.com/vehicles/bmwi/bmw-i4.html",
      "availabilityStatus": "Available",
      "dataSource": "BMW.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-30",
      "notes": "AWD i4 with 396 HP and excellent all-weather capability. 0-60 in 4.9 seconds. Combines performance with practical 307-mile range."
    }
  },
  {
    "id": "2024-bmw-i4-m50",
    "year": 2024,
    "make": "BMW",
    "model": "i4",
    "trim": "M50",
    "slug": "2024-bmw-i4-m50",
    "pricing": {
      "msrpBase": 67300,
      "msrpMax": 72300
    },
    "range": {
      "epaRangeMiles": 270,
      "batteryCapacityKwh": 83.9,
      "efficiencyMPGe": 89,
      "efficiencyKwhPer100Mi": 37.9
    },
    "performance": {
      "horsepower": 536,
      "torque": 586,
      "zeroTo60": 3.7,
      "topSpeed": 140,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 205,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 45.6,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5200
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Driving Assistant Professional"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-bmw-i4.jpg",
      "manufacturerUrl": "https://www.bmwusa.com/vehicles/bmwi/bmw-i4.html",
      "availabilityStatus": "Available",
      "dataSource": "BMW.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-30",
      "notes": "Performance-oriented i4 M50 with 536 HP and blistering 3.7-second 0-60 time. M Sport brakes, adaptive M suspension, and iconic M styling. Top speed of 140 mph."
    }
  },
  {
    "id": "2025-bmw-i4-edrive40",
    "year": 2025,
    "make": "BMW",
    "model": "i4",
    "trim": "eDrive40",
    "slug": "2025-bmw-i4-edrive40",
    "pricing": {
      "msrpBase": 60900,
      "msrpMax": 65900
    },
    "range": {
      "epaRangeMiles": 318,
      "batteryCapacityKwh": 83.9,
      "efficiencyMPGe": 102,
      "efficiencyKwhPer100Mi": 33.0
    },
    "performance": {
      "horsepower": 335,
      "torque": 317,
      "zeroTo60": 5.5,
      "topSpeed": 118,
      "drivetrain": "RWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 205,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 45.6,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 4970
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Driving Assistant Professional"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2025-bmw-i4.jpg",
      "manufacturerUrl": "https://www.bmwusa.com/vehicles/bmwi/bmw-i4.html",
      "availabilityStatus": "Available",
      "dataSource": "BMW.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-30",
      "notes": "2025 i4 eDrive40 with improved range of 318 miles and better efficiency. CCS1 connector with adapter available for Supercharger access."
    }
  },
  {
    "id": "2025-bmw-i4-xdrive40",
    "year": 2025,
    "make": "BMW",
    "model": "i4",
    "trim": "xDrive40",
    "slug": "2025-bmw-i4-xdrive40",
    "pricing": {
      "msrpBase": 64900,
      "msrpMax": 69900
    },
    "range": {
      "epaRangeMiles": 287,
      "batteryCapacityKwh": 83.9,
      "efficiencyMPGe": 95,
      "efficiencyKwhPer100Mi": 35.5
    },
    "performance": {
      "horsepower": 396,
      "torque": 586,
      "zeroTo60": 4.9,
      "topSpeed": 118,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 205,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 45.6,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5150
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Driving Assistant Professional"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2025-bmw-i4.jpg",
      "manufacturerUrl": "https://www.bmwusa.com/vehicles/bmwi/bmw-i4.html",
      "availabilityStatus": "Available",
      "dataSource": "BMW.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-30",
      "notes": "2025 xDrive40 with AWD and 396 HP. Excellent performance with 0-60 in 4.9 seconds. 287-mile range balances performance and practicality."
    }
  },
  {
    "id": "2025-bmw-i4-m50",
    "year": 2025,
    "make": "BMW",
    "model": "i4",
    "trim": "M50",
    "slug": "2025-bmw-i4-m50",
    "pricing": {
      "msrpBase": 68800,
      "msrpMax": 73800
    },
    "range": {
      "epaRangeMiles": 267,
      "batteryCapacityKwh": 83.9,
      "efficiencyMPGe": 89,
      "efficiencyKwhPer100Mi": 37.9
    },
    "performance": {
      "horsepower": 536,
      "torque": 586,
      "zeroTo60": 3.7,
      "topSpeed": 140,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 205,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 45.6,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5200
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Driving Assistant Professional"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2025-bmw-i4.jpg",
      "manufacturerUrl": "https://www.bmwusa.com/vehicles/bmwi/bmw-i4.html",
      "availabilityStatus": "Available",
      "dataSource": "BMW.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-30",
      "notes": "2025 M50 performance sedan with 536 HP. 0-60 in 3.7 seconds makes it one of the quickest electric sedans. M Sport features throughout."
    }
  },
  {
    "id": "2026-bmw-i4-edrive40",
    "year": 2026,
    "make": "BMW",
    "model": "i4",
    "trim": "eDrive40",
    "slug": "2026-bmw-i4-edrive40",
    "pricing": {
      "msrpBase": 59400,
      "msrpMax": 65000
    },
    "range": {
      "epaRangeMiles": 301,
      "batteryCapacityKwh": 83.9,
      "efficiencyMPGe": 99,
      "efficiencyKwhPer100Mi": 34.1
    },
    "performance": {
      "horsepower": 335,
      "torque": 317,
      "zeroTo60": 5.5,
      "topSpeed": 118,
      "drivetrain": "RWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 205,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 45.6,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 4970
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Driving Assistant Professional"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-bmw-i4.jpg",
      "manufacturerUrl": "https://www.bmwusa.com/vehicles/bmwi/bmw-i4.html",
      "availabilityStatus": "Available",
      "dataSource": "BMW.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "BMW's electric sedan based on the popular 4 Series Gran Coupe. 2026 model features native NACS connector for direct Supercharger access. Excellent 300+ mile range, premium interior, and BMW driving dynamics. Rear-wheel drive for classic BMW feel."
    }
  },
  {
    "id": "2026-bmw-i4-xdrive40",
    "year": 2026,
    "make": "BMW",
    "model": "i4",
    "trim": "xDrive40",
    "slug": "2026-bmw-i4-xdrive40",
    "pricing": {
      "msrpBase": 66400,
      "msrpMax": 71400
    },
    "range": {
      "epaRangeMiles": 287,
      "batteryCapacityKwh": 83.9,
      "efficiencyMPGe": 95,
      "efficiencyKwhPer100Mi": 35.5
    },
    "performance": {
      "horsepower": 396,
      "torque": 586,
      "zeroTo60": 4.9,
      "topSpeed": 118,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 205,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 45.6,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5150
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Driving Assistant Professional"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-bmw-i4.jpg",
      "manufacturerUrl": "https://www.bmwusa.com/vehicles/bmwi/bmw-i4.html",
      "availabilityStatus": "Available",
      "dataSource": "BMW.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-30",
      "notes": "2026 xDrive40 with native NACS and 396 HP. AWD provides excellent traction. Direct Supercharger access without adapters."
    }
  },
  {
    "id": "2026-bmw-i4-m60",
    "year": 2026,
    "make": "BMW",
    "model": "i4",
    "trim": "M60",
    "slug": "2026-bmw-i4-m60",
    "pricing": {
      "msrpBase": 75800,
      "msrpMax": 80800
    },
    "range": {
      "epaRangeMiles": 278,
      "batteryCapacityKwh": 83.9,
      "efficiencyMPGe": 88,
      "efficiencyKwhPer100Mi": 38.3
    },
    "performance": {
      "horsepower": 591,
      "torque": 605,
      "zeroTo60": 3.5,
      "topSpeed": 143,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 205,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 45.6,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5250
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Driving Assistant Professional"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-bmw-i4.jpg",
      "manufacturerUrl": "https://www.bmwusa.com/vehicles/bmwi/bmw-i4.html",
      "availabilityStatus": "Available",
      "dataSource": "BMW.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-30",
      "notes": "New-for-2026 M60 flagship with 591 HP and 3.5-second 0-60. Native NACS connector. Ultimate i4 performance with M Sport technology throughout."
    }
  },
  {
    "id": "2024-bmw-ix-xdrive50",
    "year": 2024,
    "make": "BMW",
    "model": "iX",
    "trim": "xDrive50",
    "slug": "2024-bmw-ix-xdrive50",
    "pricing": {
      "msrpBase": 87000,
      "msrpMax": 95000
    },
    "range": {
      "epaRangeMiles": 307,
      "batteryCapacityKwh": 111.5,
      "efficiencyMPGe": 86,
      "efficiencyKwhPer100Mi": 39.2
    },
    "performance": {
      "horsepower": 516,
      "torque": 564,
      "zeroTo60": 4.6,
      "topSpeed": 124,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 195,
      "chargingTime10to80Minutes": 35
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 77.9,
      "towingCapacityLbs": 6000,
      "curbWeightLbs": 5659
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Driving Assistant Professional"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-bmw-ix.jpg",
      "manufacturerUrl": "https://www.bmwusa.com/vehicles/bmwi/bmw-ix.html",
      "availabilityStatus": "Available",
      "dataSource": "BMW.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-30",
      "notes": "2024 iX xDrive50 with 516 HP and 307-mile range. CCS1 connector with adapter available for Supercharger access. Premium luxury SUV with 6,000 lb towing capacity."
    }
  },
  {
    "id": "2024-bmw-ix-m60",
    "year": 2024,
    "make": "BMW",
    "model": "iX",
    "trim": "M60",
    "slug": "2024-bmw-ix-m60",
    "pricing": {
      "msrpBase": 109895,
      "msrpMax": 115000
    },
    "range": {
      "epaRangeMiles": 296,
      "batteryCapacityKwh": 111.5,
      "efficiencyMPGe": 82,
      "efficiencyKwhPer100Mi": 41.1
    },
    "performance": {
      "horsepower": 610,
      "torque": 811,
      "zeroTo60": 3.6,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 195,
      "chargingTime10to80Minutes": 35
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 77.9,
      "towingCapacityLbs": 6000,
      "curbWeightLbs": 5769
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Driving Assistant Professional"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-bmw-ix.jpg",
      "manufacturerUrl": "https://www.bmwusa.com/vehicles/bmwi/bmw-ix.html",
      "availabilityStatus": "Available",
      "dataSource": "BMW.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-30",
      "notes": "Performance iX M60 with 610 HP and 811 lb-ft of torque. 0-60 in 3.6 seconds. M Sport suspension, brakes, and styling. Luxury meets performance."
    }
  },
  {
    "id": "2025-bmw-ix-xdrive50",
    "year": 2025,
    "make": "BMW",
    "model": "iX",
    "trim": "xDrive50",
    "slug": "2025-bmw-ix-xdrive50",
    "pricing": {
      "msrpBase": 88500,
      "msrpMax": 96500
    },
    "range": {
      "epaRangeMiles": 324,
      "batteryCapacityKwh": 111.5,
      "efficiencyMPGe": 89,
      "efficiencyKwhPer100Mi": 37.9
    },
    "performance": {
      "horsepower": 516,
      "torque": 564,
      "zeroTo60": 4.6,
      "topSpeed": 124,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 195,
      "chargingTime10to80Minutes": 35
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 77.9,
      "towingCapacityLbs": 6000,
      "curbWeightLbs": 5659
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Driving Assistant Professional"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2025-bmw-ix.jpg",
      "manufacturerUrl": "https://www.bmwusa.com/vehicles/bmwi/bmw-ix.html",
      "availabilityStatus": "Available",
      "dataSource": "BMW.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-30",
      "notes": "2025 iX xDrive50 with improved 324-mile range. 516 HP, excellent efficiency at 89 MPGe. Premium luxury SUV with advanced technology."
    }
  },
  {
    "id": "2025-bmw-ix-m60",
    "year": 2025,
    "make": "BMW",
    "model": "iX",
    "trim": "M60",
    "slug": "2025-bmw-ix-m60",
    "pricing": {
      "msrpBase": 111395,
      "msrpMax": 117000
    },
    "range": {
      "epaRangeMiles": 296,
      "batteryCapacityKwh": 111.5,
      "efficiencyMPGe": 82,
      "efficiencyKwhPer100Mi": 41.1
    },
    "performance": {
      "horsepower": 610,
      "torque": 811,
      "zeroTo60": 3.6,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 195,
      "chargingTime10to80Minutes": 35
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 77.9,
      "towingCapacityLbs": 6000,
      "curbWeightLbs": 5769
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Driving Assistant Professional"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2025-bmw-ix.jpg",
      "manufacturerUrl": "https://www.bmwusa.com/vehicles/bmwi/bmw-ix.html",
      "availabilityStatus": "Available",
      "dataSource": "BMW.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-30",
      "notes": "2025 M60 performance SUV with 610 HP. 0-60 in 3.6 seconds with massive 811 lb-ft torque. M Sport technology and luxury combined."
    }
  },
  {
    "id": "2026-bmw-ix-xdrive45",
    "year": 2026,
    "make": "BMW",
    "model": "iX",
    "trim": "xDrive45",
    "slug": "2026-bmw-ix-xdrive45",
    "pricing": {
      "msrpBase": 75000,
      "msrpMax": 82000
    },
    "range": {
      "epaRangeMiles": 312,
      "batteryCapacityKwh": 94.0,
      "efficiencyMPGe": 92,
      "efficiencyKwhPer100Mi": 36.6
    },
    "performance": {
      "horsepower": 402,
      "torque": 494,
      "zeroTo60": 5.5,
      "topSpeed": 118,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 195,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 77.9,
      "towingCapacityLbs": 6000,
      "curbWeightLbs": 5450
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Driving Assistant Professional"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-bmw-ix.jpg",
      "manufacturerUrl": "https://www.bmwusa.com/vehicles/bmwi/bmw-ix.html",
      "availabilityStatus": "Available",
      "dataSource": "BMW.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-30",
      "notes": "New-for-2026 xDrive45 entry-level iX with native NACS. 402 HP, 312-mile range. Direct Supercharger access. More accessible price point."
    }
  },
  {
    "id": "2026-bmw-ix-xdrive50",
    "year": 2026,
    "make": "BMW",
    "model": "iX",
    "trim": "xDrive50",
    "slug": "2026-bmw-ix-xdrive50",
    "pricing": {
      "msrpBase": 87000,
      "msrpMax": 95000
    },
    "range": {
      "epaRangeMiles": 324,
      "batteryCapacityKwh": 111.5,
      "efficiencyMPGe": 86,
      "efficiencyKwhPer100Mi": 39.2
    },
    "performance": {
      "horsepower": 516,
      "torque": 564,
      "zeroTo60": 4.6,
      "topSpeed": 124,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 195,
      "chargingTime10to80Minutes": 35
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 77.9,
      "towingCapacityLbs": 6000,
      "curbWeightLbs": 5659
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Driving Assistant Professional"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-bmw-ix.jpg",
      "manufacturerUrl": "https://www.bmwusa.com/vehicles/bmwi/bmw-ix.html",
      "availabilityStatus": "Available",
      "dataSource": "BMW.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "BMW's flagship electric SUV with premium luxury features and advanced technology. 2026 model features native NACS connector. Spacious interior, excellent range, and impressive 516 HP. Towing capacity of 6,000 lbs. Premium materials and BMW's iconic driving dynamics."
    }
  },
  {
    "id": "2026-bmw-ix-xdrive60",
    "year": 2026,
    "make": "BMW",
    "model": "iX",
    "trim": "xDrive60",
    "slug": "2026-bmw-ix-xdrive60",
    "pricing": {
      "msrpBase": 95000,
      "msrpMax": 103000
    },
    "range": {
      "epaRangeMiles": 364,
      "batteryCapacityKwh": 111.5,
      "efficiencyMPGe": 91,
      "efficiencyKwhPer100Mi": 37.0
    },
    "performance": {
      "horsepower": 536,
      "torque": 586,
      "zeroTo60": 4.4,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 195,
      "chargingTime10to80Minutes": 35
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 77.9,
      "towingCapacityLbs": 6000,
      "curbWeightLbs": 5700
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Driving Assistant Professional"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-bmw-ix.jpg",
      "manufacturerUrl": "https://www.bmwusa.com/vehicles/bmwi/bmw-ix.html",
      "availabilityStatus": "Available",
      "dataSource": "BMW.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-30",
      "notes": "New-for-2026 xDrive60 with 364-mile range and 536 HP. Native NACS connector. Best range in the iX lineup with excellent performance."
    }
  },
  {
    "id": "2026-bmw-ix-m70",
    "year": 2026,
    "make": "BMW",
    "model": "iX",
    "trim": "M70",
    "slug": "2026-bmw-ix-m70",
    "pricing": {
      "msrpBase": 122000,
      "msrpMax": 130000
    },
    "range": {
      "epaRangeMiles": 302,
      "batteryCapacityKwh": 111.5,
      "efficiencyMPGe": 82,
      "efficiencyKwhPer100Mi": 41.1
    },
    "performance": {
      "horsepower": 650,
      "torque": 811,
      "zeroTo60": 3.4,
      "topSpeed": 155,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 195,
      "chargingTime10to80Minutes": 35
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 77.9,
      "towingCapacityLbs": 6000,
      "curbWeightLbs": 5850
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Driving Assistant Professional"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-bmw-ix.jpg",
      "manufacturerUrl": "https://www.bmwusa.com/vehicles/bmwi/bmw-ix.html",
      "availabilityStatus": "Available",
      "dataSource": "BMW.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-30",
      "notes": "New flagship M70 with incredible 650 HP and 811 lb-ft torque. 0-60 in 3.4 seconds. Native NACS. Top speed of 155 mph. Ultimate performance SUV."
    }
  },
  {
    "id": "2025-chevrolet-equinox-ev-lt-fwd",
    "year": 2025,
    "make": "Chevrolet",
    "model": "Equinox EV",
    "trim": "LT FWD",
    "slug": "2025-chevrolet-equinox-ev-lt-fwd",
    "pricing": { "msrpBase": 33600, "msrpMax": 33600 },
    "range": { "epaRangeMiles": 319, "batteryCapacityKwh": 85, "efficiencyMPGe": 102, "efficiencyKwhPer100Mi": 33.0 },
    "performance": { "horsepower": 220, "torque": 242, "zeroTo60": 7.4, "topSpeed": 112, "drivetrain": "FWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 42 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 57.2, "towingCapacityLbs": 0, "curbWeightLbs": 4460 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Chevy Safety Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-chevrolet-equinox-ev.jpg", "manufacturerUrl": "https://www.chevrolet.com/electric/equinox-ev", "availabilityStatus": "Available", "dataSource": "Chevrolet.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "Most affordable EV in America at $33,600! Eligible for $7,500 federal tax credit. 319 mi range, Google Built-in." }
  },
  {
    "id": "2025-chevrolet-equinox-ev-lt-awd",
    "year": 2025,
    "make": "Chevrolet",
    "model": "Equinox EV",
    "trim": "LT AWD",
    "slug": "2025-chevrolet-equinox-ev-lt-awd",
    "pricing": { "msrpBase": 39500, "msrpMax": 39500 },
    "range": { "epaRangeMiles": 285, "batteryCapacityKwh": 85, "efficiencyMPGe": 93, "efficiencyKwhPer100Mi": 36.2 },
    "performance": { "horsepower": 300, "torque": 332, "zeroTo60": 5.7, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 42 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 57.2, "towingCapacityLbs": 1200, "curbWeightLbs": 4870 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Chevy Safety Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-chevrolet-equinox-ev.jpg", "manufacturerUrl": "https://www.chevrolet.com/electric/equinox-ev", "availabilityStatus": "Available", "dataSource": "Chevrolet.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "LT AWD: 300 hp dual motor, 0-60 in 5.7s. 285 mi range, 1,200 lb towing. Eligible for $7,500 tax credit." }
  },
  {
    "id": "2025-chevrolet-equinox-ev-rs-fwd",
    "year": 2025,
    "make": "Chevrolet",
    "model": "Equinox EV",
    "trim": "RS FWD",
    "slug": "2025-chevrolet-equinox-ev-rs-fwd",
    "pricing": { "msrpBase": 43400, "msrpMax": 43400 },
    "range": { "epaRangeMiles": 319, "batteryCapacityKwh": 85, "efficiencyMPGe": 102, "efficiencyKwhPer100Mi": 33.0 },
    "performance": { "horsepower": 220, "torque": 242, "zeroTo60": 7.4, "topSpeed": 112, "drivetrain": "FWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 42 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 57.2, "towingCapacityLbs": 0, "curbWeightLbs": 4500 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Super Cruise ready" },
    "meta": { "imageUrl": "/images/vehicles/2025-chevrolet-equinox-ev-rs.jpg", "manufacturerUrl": "https://www.chevrolet.com/electric/equinox-ev", "availabilityStatus": "Available", "dataSource": "Chevrolet.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "RS sport trim: Black exterior trim, 19\" wheels, sport interior. 319 mi range. Super Cruise available." }
  },
  {
    "id": "2025-chevrolet-equinox-ev-rs-awd",
    "year": 2025,
    "make": "Chevrolet",
    "model": "Equinox EV",
    "trim": "RS AWD",
    "slug": "2025-chevrolet-equinox-ev-rs-awd",
    "pricing": { "msrpBase": 47800, "msrpMax": 47800 },
    "range": { "epaRangeMiles": 285, "batteryCapacityKwh": 85, "efficiencyMPGe": 93, "efficiencyKwhPer100Mi": 36.2 },
    "performance": { "horsepower": 300, "torque": 332, "zeroTo60": 5.7, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 42 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 57.2, "towingCapacityLbs": 1200, "curbWeightLbs": 4910 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Super Cruise ready" },
    "meta": { "imageUrl": "/images/vehicles/2025-chevrolet-equinox-ev-rs.jpg", "manufacturerUrl": "https://www.chevrolet.com/electric/equinox-ev", "availabilityStatus": "Available", "dataSource": "Chevrolet.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "Top RS AWD: Sport styling, 300 hp, 0-60 in 5.7s, 1,200 lb towing. Super Cruise hands-free available." }
  },
  {
    "id": "2026-chevrolet-equinox-ev-2lt",
    "year": 2026,
    "make": "Chevrolet",
    "model": "Equinox EV",
    "trim": "2LT",
    "slug": "2026-chevrolet-equinox-ev-2lt",
    "pricing": {
      "msrpBase": 35000,
      "msrpMax": 42000
    },
    "range": {
      "epaRangeMiles": 319,
      "batteryCapacityKwh": 85,
      "efficiencyMPGe": 102,
      "efficiencyKwhPer100Mi": 33
    },
    "performance": {
      "horsepower": 210,
      "torque": 242,
      "zeroTo60": 6.8,
      "topSpeed": 112,
      "drivetrain": "FWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 11.5,
      "dcChargingMaxKw": 150,
      "chargingTime10to80Minutes": 42
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 57.2,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 4900
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Super Cruise (optional)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-chevrolet-equinox-ev.jpg",
      "manufacturerUrl": "https://www.chevrolet.com/electric/equinox-ev",
      "availabilityStatus": "Available",
      "dataSource": "Chevrolet.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "One of the most affordable EVs available in 2026. GM Ultium platform with native NACS connector for direct Tesla Supercharger access. Excellent range for the price point. Super Cruise hands-free driving available on higher trims."
    }
  },
  {
    "id": "2026-ford-f150-lightning-pro",
    "year": 2026,
    "make": "Ford",
    "model": "F-150 Lightning",
    "trim": "Pro",
    "slug": "2026-ford-f150-lightning-pro",
    "pricing": { "msrpBase": 49780, "msrpMax": 49780 },
    "range": { "epaRangeMiles": 290, "batteryCapacityKwh": 123, "efficiencyMPGe": 76, "efficiencyKwhPer100Mi": 44.3 },
    "performance": { "horsepower": 536, "torque": 775, "zeroTo60": 4.2, "topSpeed": 110, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 42 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 52.8, "towingCapacityLbs": 7700, "curbWeightLbs": 6600 },
    "features": { "hasHeatPump": false, "hasV2L": true, "hasV2H": true, "autopilotLevel": "BlueCruise 1.3 available" },
    "meta": { "imageUrl": "/images/vehicles/2026-ford-f150-lightning-pro.jpg", "manufacturerUrl": "https://www.ford.com/trucks/f150/f150-lightning/", "availabilityStatus": "Available", "dataSource": "Ford.com, Motor Trend", "lastVerified": "2025-11-29", "notes": "2026 Pro: Fleet model. New standard 123 kWh battery (was 98 kWh), 290+ mi range (+50 mi), 536 hp (+84 hp). Fleet only." }
  },
  {
    "id": "2026-ford-f150-lightning-stx",
    "year": 2026,
    "make": "Ford",
    "model": "F-150 Lightning",
    "trim": "STX",
    "slug": "2026-ford-f150-lightning-stx",
    "pricing": { "msrpBase": 65540, "msrpMax": 65540 },
    "range": { "epaRangeMiles": 290, "batteryCapacityKwh": 123, "efficiencyMPGe": 76, "efficiencyKwhPer100Mi": 44.3 },
    "performance": { "horsepower": 536, "torque": 775, "zeroTo60": 4.2, "topSpeed": 110, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 42 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 52.8, "towingCapacityLbs": 7700, "curbWeightLbs": 6620 },
    "features": { "hasHeatPump": false, "hasV2L": true, "hasV2H": true, "autopilotLevel": "BlueCruise 1.3 available" },
    "meta": { "imageUrl": "/images/vehicles/2026-ford-f150-lightning-stx.jpg", "manufacturerUrl": "https://www.ford.com/trucks/f150/f150-lightning/", "availabilityStatus": "Available", "dataSource": "Ford.com, Motor Trend", "lastVerified": "2025-11-29", "notes": "NEW 2026 STX (replaces XLT): 123 kWh extended battery standard (huge upgrade), 290 mi range, 536 hp. Same $65,540 MSRP as 2025 XLT but much better specs. Best value trim." }
  },
  {
    "id": "2026-ford-f150-lightning-flash",
    "year": 2026,
    "make": "Ford",
    "model": "F-150 Lightning",
    "trim": "Flash",
    "slug": "2026-ford-f150-lightning-flash",
    "pricing": { "msrpBase": 69995, "msrpMax": 69995 },
    "range": { "epaRangeMiles": 300, "batteryCapacityKwh": 123, "efficiencyMPGe": 76, "efficiencyKwhPer100Mi": 44.3 },
    "performance": { "horsepower": 536, "torque": 775, "zeroTo60": 4.2, "topSpeed": 110, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 42 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 52.8, "towingCapacityLbs": 10000, "curbWeightLbs": 6740 },
    "features": { "hasHeatPump": false, "hasV2L": true, "hasV2H": true, "autopilotLevel": "BlueCruise 1.3 included" },
    "meta": { "imageUrl": "/images/vehicles/2026-ford-f150-lightning-flash.jpg", "manufacturerUrl": "https://www.ford.com/trucks/f150/f150-lightning/", "availabilityStatus": "Available", "dataSource": "Ford.com, Motor Trend", "lastVerified": "2025-11-29", "notes": "2026 Flash: 123 kWh battery, 300 mi range, 536 hp, 10,000 lb towing. Sport appearance package." }
  },
  {
    "id": "2026-ford-f150-lightning-lariat",
    "year": 2026,
    "make": "Ford",
    "model": "F-150 Lightning",
    "trim": "Lariat Extended Range",
    "slug": "2026-ford-f150-lightning-lariat",
    "pricing": { "msrpBase": 76995, "msrpMax": 81995 },
    "range": { "epaRangeMiles": 320, "batteryCapacityKwh": 131, "efficiencyMPGe": 78, "efficiencyKwhPer100Mi": 43.2 },
    "performance": { "horsepower": 580, "torque": 775, "zeroTo60": 4.0, "topSpeed": 110, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 44 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 52.8, "towingCapacityLbs": 10000, "curbWeightLbs": 6770 },
    "features": { "hasHeatPump": false, "hasV2L": true, "hasV2H": true, "autopilotLevel": "BlueCruise 1.3 included" },
    "meta": { "imageUrl": "/images/vehicles/2026-ford-f150-lightning-lariat.jpg", "manufacturerUrl": "https://www.ford.com/trucks/f150/f150-lightning/", "availabilityStatus": "Available", "dataSource": "Ford.com, Motor Trend", "lastVerified": "2025-11-29", "notes": "2026 Lariat: Premium trim, 131 kWh battery, 320 mi range (best F-150 Lightning range). 580 hp, leather, heated/cooled seats, 10k lb towing." }
  },
  {
    "id": "2026-ford-f150-lightning-platinum",
    "year": 2026,
    "make": "Ford",
    "model": "F-150 Lightning",
    "trim": "Platinum",
    "slug": "2026-ford-f150-lightning-platinum",
    "pricing": { "msrpBase": 84995, "msrpMax": 87190 },
    "range": { "epaRangeMiles": 300, "batteryCapacityKwh": 131, "efficiencyMPGe": 76, "efficiencyKwhPer100Mi": 44.3 },
    "performance": { "horsepower": 580, "torque": 775, "zeroTo60": 4.0, "topSpeed": 110, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 44 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 52.8, "towingCapacityLbs": 10000, "curbWeightLbs": 6800 },
    "features": { "hasHeatPump": false, "hasV2L": true, "hasV2H": true, "autopilotLevel": "BlueCruise 1.3 included" },
    "meta": { "imageUrl": "/images/vehicles/2026-ford-f150-lightning-platinum.jpg", "manufacturerUrl": "https://www.ford.com/trucks/f150/f150-lightning/", "availabilityStatus": "Available", "dataSource": "Ford.com, Motor Trend", "lastVerified": "2025-11-29", "notes": "2026 Platinum: Top luxury trim. 131 kWh, 300 mi range, 580 hp, 22\" wheels, panoramic roof, Bang & Olufsen audio, massage seats, 10k lb towing." }
  },
  {
    "id": "2025-ford-mustang-mach-e-select-rwd",
    "year": 2025,
    "make": "Ford",
    "model": "Mustang Mach-E",
    "trim": "Select RWD",
    "slug": "2025-ford-mustang-mach-e-select-rwd",
    "pricing": { "msrpBase": 36495, "msrpMax": 39000 },
    "range": { "epaRangeMiles": 260, "batteryCapacityKwh": 70, "efficiencyMPGe": 110, "efficiencyKwhPer100Mi": 30.7 },
    "performance": { "horsepower": 264, "torque": 387, "zeroTo60": 6.3, "topSpeed": 114, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 10.5, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 36 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.6, "towingCapacityLbs": 0, "curbWeightLbs": 4555 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Ford Co-Pilot360 2.0" },
    "meta": { "imageUrl": "/images/vehicles/2025-ford-mustang-mach-e.jpg", "manufacturerUrl": "https://www.ford.com/suvs/mach-e/", "availabilityStatus": "Available", "dataSource": "Ford.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 Mach-E Select (base): 70 kWh battery, 260 mi range, 264 hp RWD. Most affordable Mustang Mach-E." }
  },
  {
    "id": "2025-ford-mustang-mach-e-premium-rwd-sr",
    "year": 2025,
    "make": "Ford",
    "model": "Mustang Mach-E",
    "trim": "Premium RWD (Standard Range)",
    "slug": "2025-ford-mustang-mach-e-premium-rwd-sr",
    "pricing": { "msrpBase": 39995, "msrpMax": 42000 },
    "range": { "epaRangeMiles": 250, "batteryCapacityKwh": 70, "efficiencyMPGe": 107, "efficiencyKwhPer100Mi": 31.5 },
    "performance": { "horsepower": 266, "torque": 387, "zeroTo60": 6.3, "topSpeed": 114, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 10.5, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 36 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.6, "towingCapacityLbs": 0, "curbWeightLbs": 4595 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Ford Co-Pilot360 2.0" },
    "meta": { "imageUrl": "/images/vehicles/2025-ford-mustang-mach-e.jpg", "manufacturerUrl": "https://www.ford.com/suvs/mach-e/", "availabilityStatus": "Available", "dataSource": "Ford.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 Mach-E Premium RWD SR: 70 kWh battery, 250 mi range, premium features, heated seats, power liftgate." }
  },
  {
    "id": "2025-ford-mustang-mach-e-premium-rwd-er",
    "year": 2025,
    "make": "Ford",
    "model": "Mustang Mach-E",
    "trim": "Premium RWD (Extended Range)",
    "slug": "2025-ford-mustang-mach-e-premium-rwd-er",
    "pricing": { "msrpBase": 42995, "msrpMax": 45000 },
    "range": { "epaRangeMiles": 320, "batteryCapacityKwh": 91, "efficiencyMPGe": 110, "efficiencyKwhPer100Mi": 30.7 },
    "performance": { "horsepower": 290, "torque": 387, "zeroTo60": 5.8, "topSpeed": 114, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 10.5, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 45 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.6, "towingCapacityLbs": 0, "curbWeightLbs": 4835 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Ford Co-Pilot360 2.0" },
    "meta": { "imageUrl": "/images/vehicles/2025-ford-mustang-mach-e.jpg", "manufacturerUrl": "https://www.ford.com/suvs/mach-e/", "availabilityStatus": "Available", "dataSource": "Ford.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 Mach-E Premium RWD ER: 91 kWh battery, 320 mi range (longest Mach-E range), 290 hp. Best range option." }
  },
  {
    "id": "2025-ford-mustang-mach-e-premium-awd-sr",
    "year": 2025,
    "make": "Ford",
    "model": "Mustang Mach-E",
    "trim": "Premium AWD (Standard Range)",
    "slug": "2025-ford-mustang-mach-e-premium-awd-sr",
    "pricing": { "msrpBase": 42995, "msrpMax": 45000 },
    "range": { "epaRangeMiles": 230, "batteryCapacityKwh": 70, "efficiencyMPGe": 91, "efficiencyKwhPer100Mi": 37.1 },
    "performance": { "horsepower": 266, "torque": 428, "zeroTo60": 5.5, "topSpeed": 114, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 10.5, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 36 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.6, "towingCapacityLbs": 0, "curbWeightLbs": 4740 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Ford Co-Pilot360 2.0" },
    "meta": { "imageUrl": "/images/vehicles/2025-ford-mustang-mach-e.jpg", "manufacturerUrl": "https://www.ford.com/suvs/mach-e/", "availabilityStatus": "Available", "dataSource": "Ford.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 Mach-E Premium AWD SR: 70 kWh battery, 230 mi range, dual motor AWD for better traction and performance." }
  },
  {
    "id": "2025-ford-mustang-mach-e-premium-awd-er",
    "year": 2025,
    "make": "Ford",
    "model": "Mustang Mach-E",
    "trim": "Premium AWD (Extended Range)",
    "slug": "2025-ford-mustang-mach-e-premium-awd-er",
    "pricing": { "msrpBase": 45995, "msrpMax": 48000 },
    "range": { "epaRangeMiles": 300, "batteryCapacityKwh": 91, "efficiencyMPGe": 100, "efficiencyKwhPer100Mi": 33.7 },
    "performance": { "horsepower": 346, "torque": 428, "zeroTo60": 5.2, "topSpeed": 114, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 10.5, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 45 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.6, "towingCapacityLbs": 0, "curbWeightLbs": 4995 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Ford Co-Pilot360 2.0" },
    "meta": { "imageUrl": "/images/vehicles/2025-ford-mustang-mach-e.jpg", "manufacturerUrl": "https://www.ford.com/suvs/mach-e/", "availabilityStatus": "Available", "dataSource": "Ford.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 Mach-E Premium AWD ER: 91 kWh battery, 300 mi range, 346 hp dual motor. Balanced performance and range." }
  },
  {
    "id": "2025-ford-mustang-mach-e-gt",
    "year": 2025,
    "make": "Ford",
    "model": "Mustang Mach-E",
    "trim": "GT",
    "slug": "2025-ford-mustang-mach-e-gt",
    "pricing": { "msrpBase": 52495, "msrpMax": 55000 },
    "range": { "epaRangeMiles": 280, "batteryCapacityKwh": 91, "efficiencyMPGe": 94, "efficiencyKwhPer100Mi": 35.9 },
    "performance": { "horsepower": 480, "torque": 634, "zeroTo60": 3.5, "topSpeed": 130, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 10.5, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 45 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.6, "towingCapacityLbs": 0, "curbWeightLbs": 5100 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Ford Co-Pilot360 2.0" },
    "meta": { "imageUrl": "/images/vehicles/2025-ford-mustang-mach-e-gt.jpg", "manufacturerUrl": "https://www.ford.com/suvs/mach-e/", "availabilityStatus": "Available", "dataSource": "Ford.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 Mach-E GT (performance): 91 kWh battery, 280 mi range, 480 hp, 634 lb-ft torque, 3.5s 0-60. Sport-tuned suspension, MagneRide dampers." }
  },
  {
    "id": "2024-genesis-gv60-advanced",
    "year": 2024,
    "make": "Genesis",
    "model": "GV60",
    "trim": "Advanced AWD",
    "slug": "2024-genesis-gv60-advanced",
    "pricing": { "msrpBase": 52000, "msrpMax": 57000 },
    "range": { "epaRangeMiles": 248, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 95, "efficiencyKwhPer100Mi": 35.5 },
    "performance": { "horsepower": 314, "torque": 446, "zeroTo60": 4.0, "topSpeed": 146, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.9, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 52.7, "towingCapacityLbs": 0, "curbWeightLbs": 4590 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2024-genesis-gv60.jpg", "manufacturerUrl": "https://www.genesis.com/us/en/models/gv60.html", "availabilityStatus": "Available", "dataSource": "Genesis.com, EPA", "lastVerified": "2025-12-02", "notes": "2024 GV60 Advanced: 314 HP AWD luxury compact SUV, 248 mi range. 800V architecture, 18 min 10-80% charging." }
  },
  {
    "id": "2024-genesis-gv60-performance",
    "year": 2024,
    "make": "Genesis",
    "model": "GV60",
    "trim": "Performance AWD",
    "slug": "2024-genesis-gv60-performance",
    "pricing": { "msrpBase": 68000, "msrpMax": 73000 },
    "range": { "epaRangeMiles": 235, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 90, "efficiencyKwhPer100Mi": 37.4 },
    "performance": { "horsepower": 429, "torque": 446, "zeroTo60": 3.7, "topSpeed": 146, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.9, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 52.7, "towingCapacityLbs": 0, "curbWeightLbs": 4680 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2024-genesis-gv60-performance.jpg", "manufacturerUrl": "https://www.genesis.com/us/en/models/gv60.html", "availabilityStatus": "Available", "dataSource": "Genesis.com, EPA", "lastVerified": "2025-12-02", "notes": "2024 GV60 Performance: 429 HP AWD, 235 mi range. Boost mode delivers 483 HP. Performance trim with sport tuning." }
  },
  {
    "id": "2024-genesis-gv70-electrified",
    "year": 2024,
    "make": "Genesis",
    "model": "Electrified GV70",
    "trim": "Advanced",
    "slug": "2024-genesis-gv70-electrified",
    "pricing": { "msrpBase": 64000, "msrpMax": 69000 },
    "range": { "epaRangeMiles": 236, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 91, "efficiencyKwhPer100Mi": 37.0 },
    "performance": { "horsepower": 429, "torque": 516, "zeroTo60": 4.5, "topSpeed": 155, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.9, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 28.9, "towingCapacityLbs": 0, "curbWeightLbs": 5180 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2024-genesis-gv70-electrified.jpg", "manufacturerUrl": "https://www.genesis.com/us/en/models/gv70-electrified.html", "availabilityStatus": "Available", "dataSource": "Genesis.com, EPA", "lastVerified": "2025-12-02", "notes": "2024 Electrified GV70: 429 HP AWD luxury SUV, 236 mi range. 800V architecture, 18 min 10-80% charging." }
  },
  {
    "id": "2024-genesis-g80-electrified",
    "year": 2024,
    "make": "Genesis",
    "model": "Electrified G80",
    "trim": "Advanced",
    "slug": "2024-genesis-g80-electrified",
    "pricing": { "msrpBase": 74000, "msrpMax": 79000 },
    "range": { "epaRangeMiles": 282, "batteryCapacityKwh": 87.2, "efficiencyMPGe": 97, "efficiencyKwhPer100Mi": 34.8 },
    "performance": { "horsepower": 365, "torque": 516, "zeroTo60": 4.9, "topSpeed": 145, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.9, "dcChargingMaxKw": 225, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 13.1, "towingCapacityLbs": 0, "curbWeightLbs": 5180 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2024-genesis-g80-electrified.jpg", "manufacturerUrl": "https://www.genesis.com/us/en/models/g80-electrified.html", "availabilityStatus": "Available", "dataSource": "Genesis.com, EPA", "lastVerified": "2025-12-02", "notes": "2024 Electrified G80: 365 HP AWD luxury sedan, 282 mi range. Larger 87.2 kWh battery, 225 kW charging." }
  },
  {
    "id": "2025-genesis-gv60-advanced",
    "year": 2025,
    "make": "Genesis",
    "model": "GV60",
    "trim": "Advanced AWD",
    "slug": "2025-genesis-gv60-advanced",
    "pricing": { "msrpBase": 52500, "msrpMax": 57500 },
    "range": { "epaRangeMiles": 248, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 95, "efficiencyKwhPer100Mi": 35.5 },
    "performance": { "horsepower": 314, "torque": 446, "zeroTo60": 4.0, "topSpeed": 146, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.9, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 52.7, "towingCapacityLbs": 0, "curbWeightLbs": 4590 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-genesis-gv60.jpg", "manufacturerUrl": "https://www.genesis.com/us/en/models/gv60.html", "availabilityStatus": "Available", "dataSource": "Genesis.com, EPA", "lastVerified": "2025-12-02", "notes": "2025 GV60 Advanced: 314 HP AWD luxury compact SUV, 248 mi range. 800V architecture enables ultra-fast charging." }
  },
  {
    "id": "2025-genesis-gv60-performance",
    "year": 2025,
    "make": "Genesis",
    "model": "GV60",
    "trim": "Performance AWD",
    "slug": "2025-genesis-gv60-performance",
    "pricing": { "msrpBase": 68500, "msrpMax": 73500 },
    "range": { "epaRangeMiles": 235, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 90, "efficiencyKwhPer100Mi": 37.4 },
    "performance": { "horsepower": 429, "torque": 446, "zeroTo60": 3.7, "topSpeed": 146, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.9, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 52.7, "towingCapacityLbs": 0, "curbWeightLbs": 4680 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-genesis-gv60-performance.jpg", "manufacturerUrl": "https://www.genesis.com/us/en/models/gv60.html", "availabilityStatus": "Available", "dataSource": "Genesis.com, EPA", "lastVerified": "2025-12-02", "notes": "2025 GV60 Performance: 429 HP AWD (483 HP boost mode), 235 mi range. Sport-tuned with performance features." }
  },
  {
    "id": "2025-genesis-gv70-electrified",
    "year": 2025,
    "make": "Genesis",
    "model": "Electrified GV70",
    "trim": "Advanced",
    "slug": "2025-genesis-gv70-electrified",
    "pricing": { "msrpBase": 64500, "msrpMax": 69500 },
    "range": { "epaRangeMiles": 236, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 91, "efficiencyKwhPer100Mi": 37.0 },
    "performance": { "horsepower": 429, "torque": 516, "zeroTo60": 4.5, "topSpeed": 155, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.9, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 28.9, "towingCapacityLbs": 0, "curbWeightLbs": 5180 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-genesis-gv70-electrified.jpg", "manufacturerUrl": "https://www.genesis.com/us/en/models/gv70-electrified.html", "availabilityStatus": "Available", "dataSource": "Genesis.com, EPA", "lastVerified": "2025-12-02", "notes": "2025 Electrified GV70: 429 HP AWD luxury compact SUV, 236 mi range. 800V fast charging architecture." }
  },
  {
    "id": "2025-genesis-g80-electrified",
    "year": 2025,
    "make": "Genesis",
    "model": "Electrified G80",
    "trim": "Advanced",
    "slug": "2025-genesis-g80-electrified",
    "pricing": { "msrpBase": 74500, "msrpMax": 79500 },
    "range": { "epaRangeMiles": 282, "batteryCapacityKwh": 87.2, "efficiencyMPGe": 97, "efficiencyKwhPer100Mi": 34.8 },
    "performance": { "horsepower": 365, "torque": 516, "zeroTo60": 4.9, "topSpeed": 145, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.9, "dcChargingMaxKw": 225, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 13.1, "towingCapacityLbs": 0, "curbWeightLbs": 5180 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-genesis-g80-electrified.jpg", "manufacturerUrl": "https://www.genesis.com/us/en/models/g80-electrified.html", "availabilityStatus": "Available", "dataSource": "Genesis.com, EPA", "lastVerified": "2025-12-02", "notes": "2025 Electrified G80: 365 HP AWD luxury sedan, 282 mi range. Premium flagship with 87.2 kWh battery." }
  },
  {
    "id": "2026-genesis-gv60-advanced",
    "year": 2026,
    "make": "Genesis",
    "model": "GV60",
    "trim": "Advanced AWD",
    "slug": "2026-genesis-gv60-advanced",
    "pricing": {
      "msrpBase": 53500,
      "msrpMax": 58500
    },
    "range": {
      "epaRangeMiles": 248,
      "batteryCapacityKwh": 77.4,
      "efficiencyMPGe": 95,
      "efficiencyKwhPer100Mi": 35.5
    },
    "performance": {
      "horsepower": 314,
      "torque": 446,
      "zeroTo60": 4,
      "topSpeed": 146,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 10.9,
      "dcChargingMaxKw": 240,
      "chargingTime10to80Minutes": 18
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 52.7,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 4590
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": true,
      "hasV2H": false,
      "autopilotLevel": "Highway Driving Assist 2"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-genesis-gv60.jpg",
      "manufacturerUrl": "https://www.genesis.com/us/en/models/gv60.html",
      "availabilityStatus": "Available",
      "dataSource": "Genesis.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "Luxury compact SUV with 800V architecture enabling ultra-fast charging (10-80% in 18 min). Native NACS connector in 2026. Shares platform with Hyundai IONIQ 5 and Kia EV6 but with premium features and interior. Impressive 0-60 performance."
    }
  },
  {
    "id": "2026-genesis-gv70-electrified",
    "year": 2026,
    "make": "Genesis",
    "model": "Electrified GV70",
    "trim": "Advanced",
    "slug": "2026-genesis-gv70-electrified",
    "pricing": {
      "msrpBase": 65000,
      "msrpMax": 70000
    },
    "range": {
      "epaRangeMiles": 236,
      "batteryCapacityKwh": 77.4,
      "efficiencyMPGe": 91,
      "efficiencyKwhPer100Mi": 37
    },
    "performance": {
      "horsepower": 429,
      "torque": 516,
      "zeroTo60": 4.5,
      "topSpeed": 155,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 10.9,
      "dcChargingMaxKw": 240,
      "chargingTime10to80Minutes": 18
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 28.9,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5180
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Highway Driving Assist 2"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-genesis-gv70-electrified.jpg",
      "manufacturerUrl": "https://www.genesis.com/us/en/models/gv70-electrified.html",
      "availabilityStatus": "Available",
      "dataSource": "Genesis.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "Luxury electric SUV with premium interior and impressive 429 HP. 800V architecture for ultra-fast charging. Native NACS connector in 2026 for direct Supercharger access. More traditional SUV shape than GV60, with luxurious appointments and advanced driver assistance."
    }
  },
  {
    "id": "2026-genesis-gv60-performance",
    "year": 2026,
    "make": "Genesis",
    "model": "GV60",
    "trim": "Performance AWD",
    "slug": "2026-genesis-gv60-performance",
    "pricing": { "msrpBase": 69000, "msrpMax": 74000 },
    "range": { "epaRangeMiles": 235, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 90, "efficiencyKwhPer100Mi": 37.4 },
    "performance": { "horsepower": 429, "torque": 446, "zeroTo60": 3.7, "topSpeed": 146, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 10.9, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 52.7, "towingCapacityLbs": 0, "curbWeightLbs": 4680 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-genesis-gv60-performance.jpg", "manufacturerUrl": "https://www.genesis.com/us/en/models/gv60.html", "availabilityStatus": "Available", "dataSource": "Genesis.com, EPA", "lastVerified": "2025-12-02", "notes": "2026 GV60 Performance: 429 HP AWD (483 HP boost mode), 235 mi range. Native NACS, sport-tuned suspension, 0-60 in 3.7s." }
  },
  {
    "id": "2026-genesis-g80-electrified",
    "year": 2026,
    "make": "Genesis",
    "model": "Electrified G80",
    "trim": "Advanced",
    "slug": "2026-genesis-g80-electrified",
    "pricing": { "msrpBase": 75000, "msrpMax": 80000 },
    "range": { "epaRangeMiles": 282, "batteryCapacityKwh": 87.2, "efficiencyMPGe": 97, "efficiencyKwhPer100Mi": 34.8 },
    "performance": { "horsepower": 365, "torque": 516, "zeroTo60": 4.9, "topSpeed": 145, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 10.9, "dcChargingMaxKw": 225, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 13.1, "towingCapacityLbs": 0, "curbWeightLbs": 5180 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-genesis-g80-electrified.jpg", "manufacturerUrl": "https://www.genesis.com/us/en/models/g80-electrified.html", "availabilityStatus": "Available", "dataSource": "Genesis.com, EPA", "lastVerified": "2025-12-02", "notes": "2026 Electrified G80: 365 HP AWD flagship sedan, 282 mi range. Native NACS, 87.2 kWh battery, premium luxury features." }
  },
  {
    "id": "2024-honda-prologue-ex",
    "year": 2024,
    "make": "Honda",
    "model": "Prologue",
    "trim": "EX FWD",
    "slug": "2024-honda-prologue-ex",
    "pricing": { "msrpBase": 47400, "msrpMax": 50400 },
    "range": { "epaRangeMiles": 296, "batteryCapacityKwh": 85, "efficiencyMPGe": 99, "efficiencyKwhPer100Mi": 34.1 },
    "performance": { "horsepower": 212, "torque": 242, "zeroTo60": 7.2, "topSpeed": 112, "drivetrain": "FWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 155, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 71, "towingCapacityLbs": 1500, "curbWeightLbs": 4850 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Honda Sensing" },
    "meta": { "imageUrl": "/images/vehicles/2024-honda-prologue.jpg", "manufacturerUrl": "https://automobiles.honda.com/prologue", "availabilityStatus": "Available", "dataSource": "Honda.com, EPA", "lastVerified": "2025-12-02", "notes": "2024 Prologue EX: Base FWD trim, 296 mi range. Built on GM Ultium platform, Honda Sensing, spacious SUV." }
  },
  {
    "id": "2024-honda-prologue-touring-fwd",
    "year": 2024,
    "make": "Honda",
    "model": "Prologue",
    "trim": "Touring FWD",
    "slug": "2024-honda-prologue-touring-fwd",
    "pricing": { "msrpBase": 50400, "msrpMax": 53400 },
    "range": { "epaRangeMiles": 296, "batteryCapacityKwh": 85, "efficiencyMPGe": 99, "efficiencyKwhPer100Mi": 34.1 },
    "performance": { "horsepower": 212, "torque": 242, "zeroTo60": 7.2, "topSpeed": 112, "drivetrain": "FWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 155, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 71, "towingCapacityLbs": 1500, "curbWeightLbs": 4875 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Honda Sensing" },
    "meta": { "imageUrl": "/images/vehicles/2024-honda-prologue.jpg", "manufacturerUrl": "https://automobiles.honda.com/prologue", "availabilityStatus": "Available", "dataSource": "Honda.com, EPA", "lastVerified": "2025-12-02", "notes": "2024 Prologue Touring FWD: Mid-tier, 296 mi range. Enhanced features, premium materials, Honda Sensing." }
  },
  {
    "id": "2024-honda-prologue-touring-awd",
    "year": 2024,
    "make": "Honda",
    "model": "Prologue",
    "trim": "Touring AWD",
    "slug": "2024-honda-prologue-touring-awd",
    "pricing": { "msrpBase": 52900, "msrpMax": 55900 },
    "range": { "epaRangeMiles": 273, "batteryCapacityKwh": 85, "efficiencyMPGe": 94, "efficiencyKwhPer100Mi": 35.9 },
    "performance": { "horsepower": 288, "torque": 333, "zeroTo60": 5.8, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 155, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 71, "towingCapacityLbs": 1500, "curbWeightLbs": 5025 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Honda Sensing" },
    "meta": { "imageUrl": "/images/vehicles/2024-honda-prologue-awd.jpg", "manufacturerUrl": "https://automobiles.honda.com/prologue", "availabilityStatus": "Available", "dataSource": "Honda.com, EPA", "lastVerified": "2025-12-02", "notes": "2024 Prologue Touring AWD: 273 mi range, 288 HP dual motor. All-weather capability, 0-60 in 5.8s." }
  },
  {
    "id": "2024-honda-prologue-elite",
    "year": 2024,
    "make": "Honda",
    "model": "Prologue",
    "trim": "Elite AWD",
    "slug": "2024-honda-prologue-elite",
    "pricing": { "msrpBase": 54000, "msrpMax": 57000 },
    "range": { "epaRangeMiles": 273, "batteryCapacityKwh": 85, "efficiencyMPGe": 94, "efficiencyKwhPer100Mi": 35.9 },
    "performance": { "horsepower": 288, "torque": 333, "zeroTo60": 5.8, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 155, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 71, "towingCapacityLbs": 1500, "curbWeightLbs": 5050 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Honda Sensing Elite" },
    "meta": { "imageUrl": "/images/vehicles/2024-honda-prologue-elite.jpg", "manufacturerUrl": "https://automobiles.honda.com/prologue", "availabilityStatus": "Available", "dataSource": "Honda.com, EPA", "lastVerified": "2025-12-02", "notes": "2024 Prologue Elite: Top trim AWD, 273 mi range, 288 HP. Premium features, Honda Sensing Elite." }
  },
  {
    "id": "2025-honda-prologue-ex",
    "year": 2025,
    "make": "Honda",
    "model": "Prologue",
    "trim": "EX FWD",
    "slug": "2025-honda-prologue-ex",
    "pricing": { "msrpBase": 47900, "msrpMax": 50900 },
    "range": { "epaRangeMiles": 296, "batteryCapacityKwh": 85, "efficiencyMPGe": 99, "efficiencyKwhPer100Mi": 34.1 },
    "performance": { "horsepower": 212, "torque": 242, "zeroTo60": 7.2, "topSpeed": 112, "drivetrain": "FWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 155, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 71, "towingCapacityLbs": 1500, "curbWeightLbs": 4850 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Honda Sensing" },
    "meta": { "imageUrl": "/images/vehicles/2025-honda-prologue.jpg", "manufacturerUrl": "https://automobiles.honda.com/prologue", "availabilityStatus": "Available", "dataSource": "Honda.com, EPA", "lastVerified": "2025-12-02", "notes": "2025 Prologue EX: Base FWD, 296 mi range. Honda's first dedicated EV on GM Ultium platform." }
  },
  {
    "id": "2025-honda-prologue-touring-fwd",
    "year": 2025,
    "make": "Honda",
    "model": "Prologue",
    "trim": "Touring FWD",
    "slug": "2025-honda-prologue-touring-fwd",
    "pricing": { "msrpBase": 50900, "msrpMax": 53900 },
    "range": { "epaRangeMiles": 296, "batteryCapacityKwh": 85, "efficiencyMPGe": 99, "efficiencyKwhPer100Mi": 34.1 },
    "performance": { "horsepower": 212, "torque": 242, "zeroTo60": 7.2, "topSpeed": 112, "drivetrain": "FWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 155, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 71, "towingCapacityLbs": 1500, "curbWeightLbs": 4875 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Honda Sensing" },
    "meta": { "imageUrl": "/images/vehicles/2025-honda-prologue.jpg", "manufacturerUrl": "https://automobiles.honda.com/prologue", "availabilityStatus": "Available", "dataSource": "Honda.com, EPA", "lastVerified": "2025-12-02", "notes": "2025 Prologue Touring FWD: Mid-trim, 296 mi range. Enhanced comfort and technology features." }
  },
  {
    "id": "2025-honda-prologue-touring-awd",
    "year": 2025,
    "make": "Honda",
    "model": "Prologue",
    "trim": "Touring AWD",
    "slug": "2025-honda-prologue-touring-awd",
    "pricing": { "msrpBase": 53400, "msrpMax": 56400 },
    "range": { "epaRangeMiles": 273, "batteryCapacityKwh": 85, "efficiencyMPGe": 94, "efficiencyKwhPer100Mi": 35.9 },
    "performance": { "horsepower": 288, "torque": 333, "zeroTo60": 5.8, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 155, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 71, "towingCapacityLbs": 1500, "curbWeightLbs": 5025 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Honda Sensing" },
    "meta": { "imageUrl": "/images/vehicles/2025-honda-prologue-awd.jpg", "manufacturerUrl": "https://automobiles.honda.com/prologue", "availabilityStatus": "Available", "dataSource": "Honda.com, EPA", "lastVerified": "2025-12-02", "notes": "2025 Prologue Touring AWD: 273 mi range, 288 HP dual motor. Dual motor AWD, 0-60 in 5.8s." }
  },
  {
    "id": "2025-honda-prologue-elite",
    "year": 2025,
    "make": "Honda",
    "model": "Prologue",
    "trim": "Elite AWD",
    "slug": "2025-honda-prologue-elite",
    "pricing": { "msrpBase": 54500, "msrpMax": 57500 },
    "range": { "epaRangeMiles": 273, "batteryCapacityKwh": 85, "efficiencyMPGe": 94, "efficiencyKwhPer100Mi": 35.9 },
    "performance": { "horsepower": 288, "torque": 333, "zeroTo60": 5.8, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 155, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 71, "towingCapacityLbs": 1500, "curbWeightLbs": 5050 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Honda Sensing Elite" },
    "meta": { "imageUrl": "/images/vehicles/2025-honda-prologue-elite.jpg", "manufacturerUrl": "https://automobiles.honda.com/prologue", "availabilityStatus": "Available", "dataSource": "Honda.com, EPA", "lastVerified": "2025-12-02", "notes": "2025 Prologue Elite: Premium AWD trim, 273 mi range, 288 HP. Honda Sensing Elite, luxury features." }
  },
  {
    "id": "2026-honda-prologue-ex",
    "year": 2026,
    "make": "Honda",
    "model": "Prologue",
    "trim": "EX FWD",
    "slug": "2026-honda-prologue-ex",
    "pricing": { "msrpBase": 48400, "msrpMax": 51400 },
    "range": { "epaRangeMiles": 296, "batteryCapacityKwh": 85, "efficiencyMPGe": 99, "efficiencyKwhPer100Mi": 34.1 },
    "performance": { "horsepower": 212, "torque": 242, "zeroTo60": 7.2, "topSpeed": 112, "drivetrain": "FWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 155, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 71, "towingCapacityLbs": 1500, "curbWeightLbs": 4850 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Honda Sensing" },
    "meta": { "imageUrl": "/images/vehicles/2026-honda-prologue.jpg", "manufacturerUrl": "https://automobiles.honda.com/prologue", "availabilityStatus": "Available", "dataSource": "Honda.com, EPA", "lastVerified": "2025-12-02", "notes": "2026 Prologue EX: Base FWD, 296 mi range, native NACS. Direct Supercharger access, Honda Sensing." }
  },
  {
    "id": "2026-honda-prologue-touring-fwd",
    "year": 2026,
    "make": "Honda",
    "model": "Prologue",
    "trim": "Touring FWD",
    "slug": "2026-honda-prologue-touring-fwd",
    "pricing": { "msrpBase": 51400, "msrpMax": 54400 },
    "range": { "epaRangeMiles": 296, "batteryCapacityKwh": 85, "efficiencyMPGe": 99, "efficiencyKwhPer100Mi": 34.1 },
    "performance": { "horsepower": 212, "torque": 242, "zeroTo60": 7.2, "topSpeed": 112, "drivetrain": "FWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 155, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 71, "towingCapacityLbs": 1500, "curbWeightLbs": 4875 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Honda Sensing" },
    "meta": { "imageUrl": "/images/vehicles/2026-honda-prologue.jpg", "manufacturerUrl": "https://automobiles.honda.com/prologue", "availabilityStatus": "Available", "dataSource": "Honda.com, EPA", "lastVerified": "2025-12-02", "notes": "2026 Prologue Touring FWD: Mid-trim, 296 mi range, native NACS. Enhanced features, direct Supercharger access." }
  },
  {
    "id": "2026-honda-prologue-touring-awd",
    "year": 2026,
    "make": "Honda",
    "model": "Prologue",
    "trim": "Touring AWD",
    "slug": "2026-honda-prologue-touring-awd",
    "pricing": { "msrpBase": 53900, "msrpMax": 56900 },
    "range": { "epaRangeMiles": 273, "batteryCapacityKwh": 85, "efficiencyMPGe": 94, "efficiencyKwhPer100Mi": 35.9 },
    "performance": { "horsepower": 288, "torque": 333, "zeroTo60": 5.8, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 155, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 71, "towingCapacityLbs": 1500, "curbWeightLbs": 5025 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Honda Sensing" },
    "meta": { "imageUrl": "/images/vehicles/2026-honda-prologue-awd.jpg", "manufacturerUrl": "https://automobiles.honda.com/prologue", "availabilityStatus": "Available", "dataSource": "Honda.com, EPA", "lastVerified": "2025-12-02", "notes": "2026 Prologue Touring AWD: 273 mi range, 288 HP, native NACS. Dual motor AWD, 0-60 in 5.8s." }
  },
  {
    "id": "2026-honda-prologue-elite",
    "year": 2026,
    "make": "Honda",
    "model": "Prologue",
    "trim": "Elite AWD",
    "slug": "2026-honda-prologue-elite",
    "pricing": {
      "msrpBase": 52500,
      "msrpMax": 57500
    },
    "range": {
      "epaRangeMiles": 273,
      "batteryCapacityKwh": 85,
      "efficiencyMPGe": 94,
      "efficiencyKwhPer100Mi": 35.9
    },
    "performance": {
      "horsepower": 288,
      "torque": 333,
      "zeroTo60": 5.8,
      "topSpeed": 112,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 11.5,
      "dcChargingMaxKw": 155,
      "chargingTime10to80Minutes": 40
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 71,
      "towingCapacityLbs": 1500,
      "curbWeightLbs": 5050
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Honda Sensing Elite"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-honda-prologue.jpg",
      "manufacturerUrl": "https://automobiles.honda.com/prologue",
      "availabilityStatus": "Available",
      "dataSource": "Honda.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "Honda's first dedicated EV, built in partnership with GM on Ultium platform. Native NACS connector for Tesla Supercharger access. Spacious SUV with Honda quality and reliability. Available with Honda Sensing Elite advanced driver assistance."
    }
  },
  {
    "id": "2026-hyundai-ioniq-5-se-standard",
    "year": 2026,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "SE Standard Range",
    "slug": "2026-hyundai-ioniq-5-se-standard",
    "pricing": {
      "msrpBase": 35000,
      "msrpMax": 35000
    },
    "range": {
      "epaRangeMiles": 245,
      "batteryCapacityKwh": 63,
      "efficiencyMPGe": 100,
      "efficiencyKwhPer100Mi": 33.6
    },
    "performance": {
      "horsepower": 168,
      "torque": 258,
      "zeroTo60": 7.3,
      "topSpeed": 115,
      "drivetrain": "RWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 350,
      "chargingTime10to80Minutes": 18
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 59.3,
      "towingCapacityLbs": 1650,
      "curbWeightLbs": 4200
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": true,
      "hasV2H": false,
      "autopilotLevel": "Highway Driving Assist 2"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-hyundai-ioniq-5.jpg",
      "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5",
      "availabilityStatus": "Available",
      "dataSource": "Hyundai.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "Most affordable IONIQ 5 trim. 63 kWh battery, RWD only. 2026 includes NACS connector and $7,600 price cut from 2025."
    }
  },
  {
    "id": "2026-hyundai-ioniq-5-se-rwd",
    "year": 2026,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "SE RWD",
    "slug": "2026-hyundai-ioniq-5-se-rwd",
    "pricing": { "msrpBase": 37500, "msrpMax": 37500 },
    "range": { "epaRangeMiles": 318, "batteryCapacityKwh": 84, "efficiencyMPGe": 114, "efficiencyKwhPer100Mi": 29.6 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.1, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.3, "towingCapacityLbs": 1650, "curbWeightLbs": 4200 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-hyundai-ioniq-5.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5", "availabilityStatus": "Available", "dataSource": "Hyundai.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "84 kWh long-range battery, best range in lineup at 318 miles EPA. RWD for efficiency." }
  },
  {
    "id": "2026-hyundai-ioniq-5-se-awd",
    "year": 2026,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "SE AWD",
    "slug": "2026-hyundai-ioniq-5-se-awd",
    "pricing": { "msrpBase": 41000, "msrpMax": 41000 },
    "range": { "epaRangeMiles": 290, "batteryCapacityKwh": 84, "efficiencyMPGe": 105, "efficiencyKwhPer100Mi": 32.1 },
    "performance": { "horsepower": 320, "torque": 446, "zeroTo60": 4.5, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.3, "towingCapacityLbs": 1650, "curbWeightLbs": 4600 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-hyundai-ioniq-5.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5", "availabilityStatus": "Available", "dataSource": "Hyundai.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "84 kWh battery with AWD. 320 hp dual motor system, 0-60 in 4.5s. V2H capable." }
  },
  {
    "id": "2026-hyundai-ioniq-5-sel-rwd",
    "year": 2026,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "SEL RWD",
    "slug": "2026-hyundai-ioniq-5-sel-rwd",
    "pricing": { "msrpBase": 41000, "msrpMax": 41000 },
    "range": { "epaRangeMiles": 318, "batteryCapacityKwh": 84, "efficiencyMPGe": 114, "efficiencyKwhPer100Mi": 29.6 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.1, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.3, "towingCapacityLbs": 1650, "curbWeightLbs": 4200 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-hyundai-ioniq-5.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5", "availabilityStatus": "Available", "dataSource": "Hyundai.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "SEL trim adds premium features: heated seats, smart cruise control, wireless charging. 318 mi range." }
  },
  {
    "id": "2026-hyundai-ioniq-5-xrt-awd",
    "year": 2026,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "XRT AWD",
    "slug": "2026-hyundai-ioniq-5-xrt-awd",
    "pricing": { "msrpBase": 47000, "msrpMax": 47000 },
    "range": { "epaRangeMiles": 259, "batteryCapacityKwh": 84, "efficiencyMPGe": 98, "efficiencyKwhPer100Mi": 34.4 },
    "performance": { "horsepower": 320, "torque": 446, "zeroTo60": 4.5, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.3, "towingCapacityLbs": 2300, "curbWeightLbs": 4800 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-hyundai-ioniq-5-xrt.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5", "availabilityStatus": "Available", "dataSource": "Hyundai.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "NEW 2026 off-road trim. Raised suspension, all-terrain tires, skid plates. 2,300 lb towing capacity." }
  },
  {
    "id": "2026-hyundai-ioniq-5-limited-rwd",
    "year": 2026,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "Limited RWD",
    "slug": "2026-hyundai-ioniq-5-limited-rwd",
    "pricing": { "msrpBase": 45000, "msrpMax": 45000 },
    "range": { "epaRangeMiles": 318, "batteryCapacityKwh": 84, "efficiencyMPGe": 114, "efficiencyKwhPer100Mi": 29.6 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.1, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.3, "towingCapacityLbs": 1650, "curbWeightLbs": 4300 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-hyundai-ioniq-5.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5", "availabilityStatus": "Available", "dataSource": "Hyundai.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "Top luxury trim. Adds: ventilated seats, Bose audio, surround-view camera, smart park assist." }
  },
  {
    "id": "2026-hyundai-ioniq-5-limited-awd",
    "year": 2026,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "Limited AWD",
    "slug": "2026-hyundai-ioniq-5-limited-awd",
    "pricing": { "msrpBase": 48900, "msrpMax": 48900 },
    "range": { "epaRangeMiles": 269, "batteryCapacityKwh": 84, "efficiencyMPGe": 105, "efficiencyKwhPer100Mi": 32.1 },
    "performance": { "horsepower": 320, "torque": 446, "zeroTo60": 4.5, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 59.3, "towingCapacityLbs": 1650, "curbWeightLbs": 4700 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-hyundai-ioniq-5.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5", "availabilityStatus": "Available", "dataSource": "Hyundai.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "Top AWD luxury trim. 320 hp, full feature set: ventilated seats, Bose audio, HDA2, V2H/V2L." }
  },
  {
    "id": "2026-hyundai-ioniq-5-sel-awd",
    "year": 2026,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "SEL AWD",
    "slug": "2026-hyundai-ioniq-5-sel-awd",
    "pricing": {
      "msrpBase": 44500,
      "msrpMax": 44500
    },
    "range": {
      "epaRangeMiles": 290,
      "batteryCapacityKwh": 84,
      "efficiencyMPGe": 107,
      "efficiencyKwhPer100Mi": 31.5
    },
    "performance": {
      "horsepower": 320,
      "torque": 446,
      "zeroTo60": 4.5,
      "topSpeed": 115,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 250,
      "chargingTime10to80Minutes": 18
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 59.3,
      "towingCapacityLbs": 1650,
      "curbWeightLbs": 4700
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": true,
      "hasV2H": true,
      "autopilotLevel": "Highway Driving Assist 2"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-hyundai-ioniq-5.jpg",
      "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5",
      "availabilityStatus": "Available",
      "dataSource": "Hyundai.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "2026 model features native NACS connector for direct Tesla Supercharger access without adapter. Award-winning design with 800V architecture. Enhanced battery capacity and range. V2L and V2H capabilities."
    }
  },
  {
    "id": "2026-hyundai-ioniq-5-n",
    "year": 2026,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "N (Performance)",
    "slug": "2026-hyundai-ioniq-5-n",
    "pricing": {
      "msrpBase": 67000,
      "msrpMax": 67000
    },
    "range": {
      "epaRangeMiles": 221,
      "batteryCapacityKwh": 84,
      "efficiencyMPGe": 84,
      "efficiencyKwhPer100Mi": 40.2
    },
    "performance": {
      "horsepower": 641,
      "torque": 545,
      "zeroTo60": 3.4,
      "topSpeed": 162,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 350,
      "chargingTime10to80Minutes": 18
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 59.3,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 4900
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": true,
      "hasV2H": false,
      "autopilotLevel": "N Active Sound+"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-hyundai-ioniq-5-n.jpg",
      "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5-n",
      "availabilityStatus": "Available",
      "dataSource": "Hyundai.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "Hyundai N performance variant. 641 hp, 0-60 in 3.4s. Track-focused with N Grin Boost mode, drift optimizer, launch control. Enhanced suspension, brakes, and cooling systems."
    }
  },
  {
    "id": "2024-hyundai-ioniq-6-se-std",
    "year": 2024,
    "make": "Hyundai",
    "model": "IONIQ 6",
    "trim": "SE Standard Range RWD",
    "slug": "2024-hyundai-ioniq-6-se-std",
    "pricing": { "msrpBase": 37500, "msrpMax": 40500 },
    "range": { "epaRangeMiles": 240, "batteryCapacityKwh": 53, "efficiencyMPGe": 140, "efficiencyKwhPer100Mi": 24.1 },
    "performance": { "horsepower": 149, "torque": 258, "zeroTo60": 8.5, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 175, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 11.2, "towingCapacityLbs": 0, "curbWeightLbs": 3880 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2024-hyundai-ioniq-6.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-6", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA", "lastVerified": "2025-12-02", "notes": "2024 IONIQ 6 SE: Aerodynamic sedan with 140 MPGe efficiency. 53 kWh battery, 240 mi range. Streamlined design, 0.21 drag coefficient." }
  },
  {
    "id": "2024-hyundai-ioniq-6-se-rwd",
    "year": 2024,
    "make": "Hyundai",
    "model": "IONIQ 6",
    "trim": "SE Long Range RWD",
    "slug": "2024-hyundai-ioniq-6-se-rwd",
    "pricing": { "msrpBase": 41600, "msrpMax": 44600 },
    "range": { "epaRangeMiles": 361, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 140, "efficiencyKwhPer100Mi": 24.1 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.2, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 11.2, "towingCapacityLbs": 0, "curbWeightLbs": 4085 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2024-hyundai-ioniq-6.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-6", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA", "lastVerified": "2025-12-02", "notes": "2024 IONIQ 6 SE Long Range: 361 mi EPA range, 140 MPGe efficiency. 800V architecture, 18 min 10-80% charging." }
  },
  {
    "id": "2024-hyundai-ioniq-6-sel-rwd",
    "year": 2024,
    "make": "Hyundai",
    "model": "IONIQ 6",
    "trim": "SEL Long Range RWD",
    "slug": "2024-hyundai-ioniq-6-sel-rwd",
    "pricing": { "msrpBase": 45500, "msrpMax": 48500 },
    "range": { "epaRangeMiles": 361, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 140, "efficiencyKwhPer100Mi": 24.1 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.2, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 11.2, "towingCapacityLbs": 0, "curbWeightLbs": 4105 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2024-hyundai-ioniq-6.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-6", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA", "lastVerified": "2025-12-02", "notes": "2024 IONIQ 6 SEL: Mid-tier trim with 361 mi range. Premium features, digital mirrors available, 140 MPGe efficiency." }
  },
  {
    "id": "2024-hyundai-ioniq-6-sel-awd",
    "year": 2024,
    "make": "Hyundai",
    "model": "IONIQ 6",
    "trim": "SEL Long Range AWD",
    "slug": "2024-hyundai-ioniq-6-sel-awd",
    "pricing": { "msrpBase": 48500, "msrpMax": 51500 },
    "range": { "epaRangeMiles": 316, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 120, "efficiencyKwhPer100Mi": 28.1 },
    "performance": { "horsepower": 320, "torque": 446, "zeroTo60": 5.1, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 11.2, "towingCapacityLbs": 0, "curbWeightLbs": 4320 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2024-hyundai-ioniq-6-awd.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-6", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA", "lastVerified": "2025-12-02", "notes": "2024 IONIQ 6 SEL AWD: 320 HP dual motor, 316 mi range, 0-60 in 5.1s. Enhanced traction, 800V fast charging." }
  },
  {
    "id": "2024-hyundai-ioniq-6-limited-rwd",
    "year": 2024,
    "make": "Hyundai",
    "model": "IONIQ 6",
    "trim": "Limited Long Range RWD",
    "slug": "2024-hyundai-ioniq-6-limited-rwd",
    "pricing": { "msrpBase": 49000, "msrpMax": 52000 },
    "range": { "epaRangeMiles": 361, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 140, "efficiencyKwhPer100Mi": 24.1 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.2, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 11.2, "towingCapacityLbs": 0, "curbWeightLbs": 4120 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2024-hyundai-ioniq-6.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-6", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA", "lastVerified": "2025-12-02", "notes": "2024 IONIQ 6 Limited: Top trim with 361 mi range. Premium interior, Bose audio, Highway Driving Assist 2, relaxation seats." }
  },
  {
    "id": "2024-hyundai-ioniq-6-limited-awd",
    "year": 2024,
    "make": "Hyundai",
    "model": "IONIQ 6",
    "trim": "Limited Long Range AWD",
    "slug": "2024-hyundai-ioniq-6-limited-awd",
    "pricing": { "msrpBase": 52000, "msrpMax": 55000 },
    "range": { "epaRangeMiles": 316, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 120, "efficiencyKwhPer100Mi": 28.1 },
    "performance": { "horsepower": 320, "torque": 446, "zeroTo60": 5.1, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 11.2, "towingCapacityLbs": 0, "curbWeightLbs": 4340 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2024-hyundai-ioniq-6-awd.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-6", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA", "lastVerified": "2025-12-02", "notes": "2024 IONIQ 6 Limited AWD: Top trim with 320 HP, 316 mi range. Luxury features, dual motor performance, 0-60 in 5.1s." }
  },
  {
    "id": "2025-hyundai-ioniq-6-se-std",
    "year": 2025,
    "make": "Hyundai",
    "model": "IONIQ 6",
    "trim": "SE Standard Range RWD",
    "slug": "2025-hyundai-ioniq-6-se-std",
    "pricing": { "msrpBase": 38000, "msrpMax": 41000 },
    "range": { "epaRangeMiles": 240, "batteryCapacityKwh": 53, "efficiencyMPGe": 140, "efficiencyKwhPer100Mi": 24.1 },
    "performance": { "horsepower": 149, "torque": 258, "zeroTo60": 8.5, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 175, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 11.2, "towingCapacityLbs": 0, "curbWeightLbs": 3880 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-hyundai-ioniq-6.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-6", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA", "lastVerified": "2025-12-02", "notes": "2025 IONIQ 6 SE: Entry sedan with 140 MPGe efficiency. Aerodynamic design, 0.21 Cd, 53 kWh battery." }
  },
  {
    "id": "2025-hyundai-ioniq-6-se-rwd",
    "year": 2025,
    "make": "Hyundai",
    "model": "IONIQ 6",
    "trim": "SE Long Range RWD",
    "slug": "2025-hyundai-ioniq-6-se-rwd",
    "pricing": { "msrpBase": 42000, "msrpMax": 45000 },
    "range": { "epaRangeMiles": 361, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 140, "efficiencyKwhPer100Mi": 24.1 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.2, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 11.2, "towingCapacityLbs": 0, "curbWeightLbs": 4085 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-hyundai-ioniq-6.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-6", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA", "lastVerified": "2025-12-02", "notes": "2025 IONIQ 6 SE Long Range: 361 mi range, class-leading efficiency. 800V architecture, 18 min 10-80%." }
  },
  {
    "id": "2025-hyundai-ioniq-6-sel-rwd",
    "year": 2025,
    "make": "Hyundai",
    "model": "IONIQ 6",
    "trim": "SEL Long Range RWD",
    "slug": "2025-hyundai-ioniq-6-sel-rwd",
    "pricing": { "msrpBase": 46000, "msrpMax": 49000 },
    "range": { "epaRangeMiles": 361, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 140, "efficiencyKwhPer100Mi": 24.1 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.2, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 11.2, "towingCapacityLbs": 0, "curbWeightLbs": 4105 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-hyundai-ioniq-6.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-6", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA", "lastVerified": "2025-12-02", "notes": "2025 IONIQ 6 SEL: Mid-trim with 361 mi range. Digital mirrors, premium features, ultra-efficient at 140 MPGe." }
  },
  {
    "id": "2025-hyundai-ioniq-6-sel-awd",
    "year": 2025,
    "make": "Hyundai",
    "model": "IONIQ 6",
    "trim": "SEL Long Range AWD",
    "slug": "2025-hyundai-ioniq-6-sel-awd",
    "pricing": { "msrpBase": 49000, "msrpMax": 52000 },
    "range": { "epaRangeMiles": 316, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 120, "efficiencyKwhPer100Mi": 28.1 },
    "performance": { "horsepower": 320, "torque": 446, "zeroTo60": 5.1, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 11.2, "towingCapacityLbs": 0, "curbWeightLbs": 4320 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-hyundai-ioniq-6-awd.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-6", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA", "lastVerified": "2025-12-02", "notes": "2025 IONIQ 6 SEL AWD: 320 HP dual motor, 316 mi range. Enhanced performance with 800V charging." }
  },
  {
    "id": "2025-hyundai-ioniq-6-limited-rwd",
    "year": 2025,
    "make": "Hyundai",
    "model": "IONIQ 6",
    "trim": "Limited Long Range RWD",
    "slug": "2025-hyundai-ioniq-6-limited-rwd",
    "pricing": { "msrpBase": 49500, "msrpMax": 52500 },
    "range": { "epaRangeMiles": 361, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 140, "efficiencyKwhPer100Mi": 24.1 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.2, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 11.2, "towingCapacityLbs": 0, "curbWeightLbs": 4120 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-hyundai-ioniq-6.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-6", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA", "lastVerified": "2025-12-02", "notes": "2025 IONIQ 6 Limited: Premium trim with 361 mi range. Bose audio, relaxation seats, Highway Driving Assist 2." }
  },
  {
    "id": "2025-hyundai-ioniq-6-limited-awd",
    "year": 2025,
    "make": "Hyundai",
    "model": "IONIQ 6",
    "trim": "Limited Long Range AWD",
    "slug": "2025-hyundai-ioniq-6-limited-awd",
    "pricing": { "msrpBase": 52500, "msrpMax": 55500 },
    "range": { "epaRangeMiles": 316, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 120, "efficiencyKwhPer100Mi": 28.1 },
    "performance": { "horsepower": 320, "torque": 446, "zeroTo60": 5.1, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 11.2, "towingCapacityLbs": 0, "curbWeightLbs": 4340 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-hyundai-ioniq-6-awd.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-6", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA", "lastVerified": "2025-12-02", "notes": "2025 IONIQ 6 Limited AWD: Top trim with 320 HP, 316 mi range. Luxury features, dual motor, 0-60 in 5.1s." }
  },
  {
    "id": "2026-hyundai-ioniq-6-se-std",
    "year": 2026,
    "make": "Hyundai",
    "model": "IONIQ 6",
    "trim": "SE Standard Range RWD",
    "slug": "2026-hyundai-ioniq-6-se-std",
    "pricing": { "msrpBase": 38500, "msrpMax": 41500 },
    "range": { "epaRangeMiles": 240, "batteryCapacityKwh": 53, "efficiencyMPGe": 140, "efficiencyKwhPer100Mi": 24.1 },
    "performance": { "horsepower": 149, "torque": 258, "zeroTo60": 8.5, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 175, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 11.2, "towingCapacityLbs": 0, "curbWeightLbs": 3880 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-hyundai-ioniq-6.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-6", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA", "lastVerified": "2025-12-02", "notes": "2026 IONIQ 6 SE: Native NACS for direct Supercharger access. 140 MPGe efficiency, aerodynamic sedan design." }
  },
  {
    "id": "2026-hyundai-ioniq-6-se-rwd",
    "year": 2026,
    "make": "Hyundai",
    "model": "IONIQ 6",
    "trim": "SE Long Range RWD",
    "slug": "2026-hyundai-ioniq-6-se-rwd",
    "pricing": { "msrpBase": 42500, "msrpMax": 45500 },
    "range": { "epaRangeMiles": 361, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 140, "efficiencyKwhPer100Mi": 24.1 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.2, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 11.2, "towingCapacityLbs": 0, "curbWeightLbs": 4085 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-hyundai-ioniq-6.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-6", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA", "lastVerified": "2025-12-02", "notes": "2026 IONIQ 6 SE Long Range: 361 mi range, native NACS. 800V fast charging, 18 min 10-80%, 140 MPGe." }
  },
  {
    "id": "2026-hyundai-ioniq-6-sel-rwd",
    "year": 2026,
    "make": "Hyundai",
    "model": "IONIQ 6",
    "trim": "SEL Long Range RWD",
    "slug": "2026-hyundai-ioniq-6-sel-rwd",
    "pricing": { "msrpBase": 46500, "msrpMax": 49500 },
    "range": { "epaRangeMiles": 361, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 140, "efficiencyKwhPer100Mi": 24.1 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.2, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 11.2, "towingCapacityLbs": 0, "curbWeightLbs": 4105 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-hyundai-ioniq-6.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-6", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA", "lastVerified": "2025-12-02", "notes": "2026 IONIQ 6 SEL: Mid-tier with 361 mi range, native NACS. Digital mirrors, premium tech, 140 MPGe." }
  },
  {
    "id": "2026-hyundai-ioniq-6-sel-awd",
    "year": 2026,
    "make": "Hyundai",
    "model": "IONIQ 6",
    "trim": "SEL Long Range AWD",
    "slug": "2026-hyundai-ioniq-6-sel-awd",
    "pricing": { "msrpBase": 49500, "msrpMax": 52500 },
    "range": { "epaRangeMiles": 316, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 120, "efficiencyKwhPer100Mi": 28.1 },
    "performance": { "horsepower": 320, "torque": 446, "zeroTo60": 5.1, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 11.2, "towingCapacityLbs": 0, "curbWeightLbs": 4320 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-hyundai-ioniq-6-awd.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-6", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA", "lastVerified": "2025-12-02", "notes": "2026 IONIQ 6 SEL AWD: 320 HP dual motor, 316 mi range, native NACS. 0-60 in 5.1s, 800V charging." }
  },
  {
    "id": "2026-hyundai-ioniq-6-limited-rwd",
    "year": 2026,
    "make": "Hyundai",
    "model": "IONIQ 6",
    "trim": "Limited Long Range RWD",
    "slug": "2026-hyundai-ioniq-6-limited-rwd",
    "pricing": { "msrpBase": 50000, "msrpMax": 53000 },
    "range": { "epaRangeMiles": 361, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 140, "efficiencyKwhPer100Mi": 24.1 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.2, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 11.2, "towingCapacityLbs": 0, "curbWeightLbs": 4120 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-hyundai-ioniq-6.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-6", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA", "lastVerified": "2025-12-02", "notes": "2026 IONIQ 6 Limited: Top trim, 361 mi range, native NACS. Bose audio, relaxation seats, premium interior." }
  },
  {
    "id": "2026-hyundai-ioniq-6-limited-awd",
    "year": 2026,
    "make": "Hyundai",
    "model": "IONIQ 6",
    "trim": "Limited Long Range AWD",
    "slug": "2026-hyundai-ioniq-6-limited-awd",
    "pricing": { "msrpBase": 53000, "msrpMax": 56000 },
    "range": { "epaRangeMiles": 316, "batteryCapacityKwh": 77.4, "efficiencyMPGe": 120, "efficiencyKwhPer100Mi": 28.1 },
    "performance": { "horsepower": 320, "torque": 446, "zeroTo60": 5.1, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 11.2, "towingCapacityLbs": 0, "curbWeightLbs": 4340 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-hyundai-ioniq-6-awd.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-6", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA", "lastVerified": "2025-12-02", "notes": "2026 IONIQ 6 Limited AWD: Top-tier 320 HP, 316 mi range, native NACS. Luxury features, dual motor, 0-60 in 5.1s." }
  },
  {
    "id": "2026-kia-ev9-light-rwd",
    "year": 2026,
    "make": "Kia",
    "model": "EV9",
    "trim": "Light RWD",
    "slug": "2026-kia-ev9-light-rwd",
    "pricing": { "msrpBase": 54900, "msrpMax": 54900 },
    "range": { "epaRangeMiles": 230, "batteryCapacityKwh": 76.1, "efficiencyMPGe": 88, "efficiencyKwhPer100Mi": 38.3 },
    "performance": { "horsepower": 201, "torque": 258, "zeroTo60": 8.5, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 210, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 81.7, "towingCapacityLbs": 0, "curbWeightLbs": 5350 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-kia-ev9.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev9", "availabilityStatus": "Available", "dataSource": "Kia.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "Base EV9 trim. 76.1 kWh battery, RWD only, 7-seater. Most affordable 3-row electric SUV at $54,900. Native NACS charging." }
  },
  {
    "id": "2026-kia-ev9-light-lr-rwd",
    "year": 2026,
    "make": "Kia",
    "model": "EV9",
    "trim": "Light Long Range RWD",
    "slug": "2026-kia-ev9-light-lr-rwd",
    "pricing": { "msrpBase": 57900, "msrpMax": 57900 },
    "range": { "epaRangeMiles": 305, "batteryCapacityKwh": 99.8, "efficiencyMPGe": 95, "efficiencyKwhPer100Mi": 35.5 },
    "performance": { "horsepower": 201, "torque": 258, "zeroTo60": 8.2, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 81.7, "towingCapacityLbs": 0, "curbWeightLbs": 5550 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-kia-ev9.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev9", "availabilityStatus": "Available", "dataSource": "Kia.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "Long range EV9 with 99.8 kWh battery. Best range in lineup at 305 miles EPA. RWD for maximum efficiency. 800V ultra-fast charging." }
  },
  {
    "id": "2026-kia-ev9-wind-awd",
    "year": 2026,
    "make": "Kia",
    "model": "EV9",
    "trim": "Wind AWD",
    "slug": "2026-kia-ev9-wind-awd",
    "pricing": { "msrpBase": 64900, "msrpMax": 64900 },
    "range": { "epaRangeMiles": 283, "batteryCapacityKwh": 99.8, "efficiencyMPGe": 90, "efficiencyKwhPer100Mi": 37.5 },
    "performance": { "horsepower": 379, "torque": 516, "zeroTo60": 5.2, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 81.7, "towingCapacityLbs": 5000, "curbWeightLbs": 5750 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-kia-ev9.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev9", "availabilityStatus": "Available", "dataSource": "Kia.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "Mid-tier AWD trim. 379 hp dual motors, 5.2s 0-60. Adds premium features: heated/ventilated seats, power liftgate, blind-spot cameras." }
  },
  {
    "id": "2026-kia-ev9-land-awd",
    "year": 2026,
    "make": "Kia",
    "model": "EV9",
    "trim": "Land AWD",
    "slug": "2026-kia-ev9-land-awd",
    "pricing": { "msrpBase": 68900, "msrpMax": 68900 },
    "range": { "epaRangeMiles": 280, "batteryCapacityKwh": 99.8, "efficiencyMPGe": 90, "efficiencyKwhPer100Mi": 37.5 },
    "performance": { "horsepower": 379, "torque": 516, "zeroTo60": 5.0, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 240, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 81.7, "towingCapacityLbs": 5000, "curbWeightLbs": 5850 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-kia-ev9.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev9", "availabilityStatus": "Available", "dataSource": "Kia.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "Luxury trim with premium interior. Adds: Meridian audio, relaxation seats, digital side mirrors, augmented reality HUD. Nightfall Edition package available." }
  },
  {
    "id": "2026-kia-ev9-gt-line",
    "year": 2026,
    "make": "Kia",
    "model": "EV9",
    "trim": "GT-Line AWD",
    "slug": "2026-kia-ev9-gt-line",
    "pricing": {
      "msrpBase": 65900,
      "msrpMax": 71900
    },
    "range": {
      "epaRangeMiles": 285,
      "batteryCapacityKwh": 99.8,
      "efficiencyMPGe": 90,
      "efficiencyKwhPer100Mi": 37.5
    },
    "performance": {
      "horsepower": 379,
      "torque": 516,
      "zeroTo60": 4.9,
      "topSpeed": 115,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 240,
      "chargingTime10to80Minutes": 24
    },
    "physical": {
      "seatingCapacity": 7,
      "cargoVolumeCuFt": 81.7,
      "towingCapacityLbs": 5000,
      "curbWeightLbs": 5850
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": true,
      "hasV2H": false,
      "autopilotLevel": "Highway Driving Assist 2"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-kia-ev9.jpg",
      "manufacturerUrl": "https://www.kia.com/us/en/ev9",
      "availabilityStatus": "Available",
      "dataSource": "Kia.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "2026 model features native NACS connector. Three-row electric SUV with spacious interior. 800V architecture for ultra-fast charging. V2L can power appliances. Premium features and build quality."
    }
  },
  // Mercedes-Benz EQE Sedan (2024-2026) - 10 vehicles
  {
    "id": "2026-mercedes-eqe-320-plus",
    "year": 2026,
    "make": "Mercedes-Benz",
    "model": "EQE",
    "trim": "320+",
    "slug": "2026-mercedes-eqe-320-plus",
    "pricing": {
      "msrpBase": 66200,
      "msrpMax": 70000
    },
    "range": {
      "epaRangeMiles": 308,
      "batteryCapacityKwh": 96,
      "efficiencyMPGe": 94,
      "efficiencyKwhPer100Mi": 35.9
    },
    "performance": {
      "horsepower": 315,
      "torque": 416,
      "zeroTo60": 6.2,
      "topSpeed": 130,
      "drivetrain": "RWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 170,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 12,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 4826
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-mercedes-eqe.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqe/sedan",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2026 EQE 320+: Base RWD sedan with 315 HP, 308 mi range. Increased power from 288 HP in 2025. EQE500 discontinued for 2026. More affordable entry point to Mercedes luxury EV sedan."
    }
  },
  {
    "id": "2026-mercedes-eqe-320-4matic",
    "year": 2026,
    "make": "Mercedes-Benz",
    "model": "EQE",
    "trim": "320 4MATIC",
    "slug": "2026-mercedes-eqe-320-4matic",
    "pricing": {
      "msrpBase": 68700,
      "msrpMax": 73000
    },
    "range": {
      "epaRangeMiles": 267,
      "batteryCapacityKwh": 90.5,
      "efficiencyMPGe": 86,
      "efficiencyKwhPer100Mi": 39.2
    },
    "performance": {
      "horsepower": 315,
      "torque": 416,
      "zeroTo60": 6.2,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 170,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 12,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5026
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-mercedes-eqe.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqe/sedan",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2026 EQE 320 4MATIC: AWD with 315 HP, 267 mi range. Slightly smaller 90.5 kWh battery vs. RWD. All-weather traction with 4MATIC."
    }
  },
  {
    "id": "2026-mercedes-amg-eqe",
    "year": 2026,
    "make": "Mercedes-Benz",
    "model": "EQE",
    "trim": "AMG EQE",
    "slug": "2026-mercedes-amg-eqe",
    "pricing": {
      "msrpBase": 108050,
      "msrpMax": 115000
    },
    "range": {
      "epaRangeMiles": 220,
      "batteryCapacityKwh": 96,
      "efficiencyMPGe": 73,
      "efficiencyKwhPer100Mi": 46.2
    },
    "performance": {
      "horsepower": 617,
      "torque": 701,
      "zeroTo60": 2.9,
      "topSpeed": 149,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 170,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 12,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5291
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-mercedes-amg-eqe.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/amg-eqe",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2026 AMG EQE: Performance sedan with 617 HP, 0-60 in 2.9s. AMG Dynamic Plus package adds 60 HP. Sporty handling with AMG suspension."
    }
  },
  {
    "id": "2025-mercedes-eqe-350-plus",
    "year": 2025,
    "make": "Mercedes-Benz",
    "model": "EQE",
    "trim": "350+",
    "slug": "2025-mercedes-eqe-350-plus",
    "pricing": {
      "msrpBase": 74900,
      "msrpMax": 80000
    },
    "range": {
      "epaRangeMiles": 308,
      "batteryCapacityKwh": 96,
      "efficiencyMPGe": 94,
      "efficiencyKwhPer100Mi": 35.9
    },
    "performance": {
      "horsepower": 288,
      "torque": 391,
      "zeroTo60": 5.6,
      "topSpeed": 130,
      "drivetrain": "RWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 170,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 12,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 4826
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2025-mercedes-eqe.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqe/sedan",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2025 EQE 350+: RWD with 288 HP, 308 mi range. Upgraded to 96 kWh battery from 90.6 kWh in 2024. Excellent efficiency at 94 MPGe."
    }
  },
  {
    "id": "2025-mercedes-eqe-350-4matic",
    "year": 2025,
    "make": "Mercedes-Benz",
    "model": "EQE",
    "trim": "350 4MATIC",
    "slug": "2025-mercedes-eqe-350-4matic",
    "pricing": {
      "msrpBase": 77900,
      "msrpMax": 83000
    },
    "range": {
      "epaRangeMiles": 267,
      "batteryCapacityKwh": 90.6,
      "efficiencyMPGe": 86,
      "efficiencyKwhPer100Mi": 39.2
    },
    "performance": {
      "horsepower": 288,
      "torque": 564,
      "zeroTo60": 5.2,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 170,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 12,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5026
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2025-mercedes-eqe.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqe/sedan",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2025 EQE 350 4MATIC: AWD with 288 HP, 5.2s 0-60. Retains 90.6 kWh battery. Higher torque (564 lb-ft) vs RWD."
    }
  },
  {
    "id": "2025-mercedes-eqe-500-4matic",
    "year": 2025,
    "make": "Mercedes-Benz",
    "model": "EQE",
    "trim": "500 4MATIC",
    "slug": "2025-mercedes-eqe-500-4matic",
    "pricing": {
      "msrpBase": 85900,
      "msrpMax": 92000
    },
    "range": {
      "epaRangeMiles": 266,
      "batteryCapacityKwh": 96,
      "efficiencyMPGe": 86,
      "efficiencyKwhPer100Mi": 39.2
    },
    "performance": {
      "horsepower": 402,
      "torque": 633,
      "zeroTo60": 4.0,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 170,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 12,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5150
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2025-mercedes-eqe.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqe/sedan",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2025 EQE 500 4MATIC: 402 HP, 4.0s 0-60. Performance-oriented variant with 96 kWh battery. Discontinued for 2026."
    }
  },
  {
    "id": "2025-mercedes-amg-eqe",
    "year": 2025,
    "make": "Mercedes-Benz",
    "model": "EQE",
    "trim": "AMG EQE",
    "slug": "2025-mercedes-amg-eqe",
    "pricing": {
      "msrpBase": 108050,
      "msrpMax": 115000
    },
    "range": {
      "epaRangeMiles": 220,
      "batteryCapacityKwh": 96,
      "efficiencyMPGe": 73,
      "efficiencyKwhPer100Mi": 46.2
    },
    "performance": {
      "horsepower": 617,
      "torque": 701,
      "zeroTo60": 2.9,
      "topSpeed": 149,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 170,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 12,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5291
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2025-mercedes-amg-eqe.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/amg-eqe",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2025 AMG EQE: 617 HP, 0-60 in 2.9s. Track-ready performance sedan with AMG suspension and braking. Optional Dynamic Plus package."
    }
  },
  {
    "id": "2024-mercedes-eqe-350-plus",
    "year": 2024,
    "make": "Mercedes-Benz",
    "model": "EQE",
    "trim": "350+",
    "slug": "2024-mercedes-eqe-350-plus",
    "pricing": {
      "msrpBase": 75000,
      "msrpMax": 80000
    },
    "range": {
      "epaRangeMiles": 298,
      "batteryCapacityKwh": 90.6,
      "efficiencyMPGe": 92,
      "efficiencyKwhPer100Mi": 36.6
    },
    "performance": {
      "horsepower": 288,
      "torque": 391,
      "zeroTo60": 5.6,
      "topSpeed": 130,
      "drivetrain": "RWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 170,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 12,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 4826
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-mercedes-eqe.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqe/sedan",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2024 EQE 350+: RWD with 288 HP, 298 mi range. 90.6 kWh battery. First year with Drive Pilot Level 3 autonomy."
    }
  },
  {
    "id": "2024-mercedes-eqe-350-4matic",
    "year": 2024,
    "make": "Mercedes-Benz",
    "model": "EQE",
    "trim": "350 4MATIC",
    "slug": "2024-mercedes-eqe-350-4matic",
    "pricing": {
      "msrpBase": 78000,
      "msrpMax": 83000
    },
    "range": {
      "epaRangeMiles": 267,
      "batteryCapacityKwh": 90.6,
      "efficiencyMPGe": 86,
      "efficiencyKwhPer100Mi": 39.2
    },
    "performance": {
      "horsepower": 288,
      "torque": 564,
      "zeroTo60": 5.3,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 170,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 12,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5026
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-mercedes-eqe.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqe/sedan",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2024 EQE 350 4MATIC: AWD with 288 HP, 267 mi range. All-weather capability with dual-motor AWD."
    }
  },
  {
    "id": "2024-mercedes-eqe-500-4matic",
    "year": 2024,
    "make": "Mercedes-Benz",
    "model": "EQE",
    "trim": "500 4MATIC",
    "slug": "2024-mercedes-eqe-500-4matic",
    "pricing": {
      "msrpBase": 86000,
      "msrpMax": 92000
    },
    "range": {
      "epaRangeMiles": 266,
      "batteryCapacityKwh": 90.6,
      "efficiencyMPGe": 86,
      "efficiencyKwhPer100Mi": 39.2
    },
    "performance": {
      "horsepower": 402,
      "torque": 633,
      "zeroTo60": 4.0,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 170,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 12,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5150
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-mercedes-eqe.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqe/sedan",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2024 EQE 500 4MATIC: 402 HP, 4.0s 0-60. Performance variant with 90.6 kWh battery."
    }
  },
  // Mercedes-Benz EQE SUV (2024-2026) - 10 vehicles
  {
    "id": "2026-mercedes-eqe-suv-320-plus",
    "year": 2026,
    "make": "Mercedes-Benz",
    "model": "EQE SUV",
    "trim": "320+",
    "slug": "2026-mercedes-eqe-suv-320-plus",
    "pricing": {
      "msrpBase": 64950,
      "msrpMax": 70000
    },
    "range": {
      "epaRangeMiles": 270,
      "batteryCapacityKwh": 96,
      "efficiencyMPGe": 85,
      "efficiencyKwhPer100Mi": 39.6
    },
    "performance": {
      "horsepower": 315,
      "torque": 417,
      "zeroTo60": 5.9,
      "topSpeed": 130,
      "drivetrain": "RWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 170,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 14,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5820
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-mercedes-eqe-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqe/suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2026 EQE SUV 320+: 315 HP RWD, 270 mi range. More affordable entry to luxury EV SUV segment. 96 kWh battery upgrade from 90.6 kWh."
    }
  },
  {
    "id": "2026-mercedes-eqe-suv-320-4matic",
    "year": 2026,
    "make": "Mercedes-Benz",
    "model": "EQE SUV",
    "trim": "320 4MATIC",
    "slug": "2026-mercedes-eqe-suv-320-4matic",
    "pricing": {
      "msrpBase": 67450,
      "msrpMax": 73000
    },
    "range": {
      "epaRangeMiles": 253,
      "batteryCapacityKwh": 90.5,
      "efficiencyMPGe": 81,
      "efficiencyKwhPer100Mi": 41.6
    },
    "performance": {
      "horsepower": 315,
      "torque": 417,
      "zeroTo60": 5.9,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 170,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 14,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 6020
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-mercedes-eqe-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqe/suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2026 EQE SUV 320 4MATIC: 315 HP AWD, 253 mi range. All-weather capability with 4MATIC. Smaller 90.5 kWh battery vs RWD."
    }
  },
  {
    "id": "2026-mercedes-amg-eqe-suv",
    "year": 2026,
    "make": "Mercedes-Benz",
    "model": "EQE SUV",
    "trim": "AMG EQE",
    "slug": "2026-mercedes-amg-eqe-suv",
    "pricing": {
      "msrpBase": 97550,
      "msrpMax": 105000
    },
    "range": {
      "epaRangeMiles": 230,
      "batteryCapacityKwh": 96,
      "efficiencyMPGe": 70,
      "efficiencyKwhPer100Mi": 48.1
    },
    "performance": {
      "horsepower": 617,
      "torque": 738,
      "zeroTo60": 3.1,
      "topSpeed": 149,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 170,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 14,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 6380
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-mercedes-amg-eqe-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/amg-eqe-suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2026 AMG EQE SUV: 617 HP, 3.1s 0-60. Performance SUV with AMG suspension, brakes. Fastest accelerating Mercedes SUV."
    }
  },
  {
    "id": "2025-mercedes-eqe-suv-350-plus",
    "year": 2025,
    "make": "Mercedes-Benz",
    "model": "EQE SUV",
    "trim": "350+",
    "slug": "2025-mercedes-eqe-suv-350-plus",
    "pricing": {
      "msrpBase": 77900,
      "msrpMax": 83000
    },
    "range": {
      "epaRangeMiles": 302,
      "batteryCapacityKwh": 96,
      "efficiencyMPGe": 91,
      "efficiencyKwhPer100Mi": 37
    },
    "performance": {
      "horsepower": 288,
      "torque": 391,
      "zeroTo60": 6.4,
      "topSpeed": 130,
      "drivetrain": "RWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 170,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 14,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5820
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2025-mercedes-eqe-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqe/suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2025 EQE SUV 350+: 288 HP RWD, 302 mi range. Upgraded to 96 kWh battery. Excellent efficiency for luxury SUV."
    }
  },
  {
    "id": "2025-mercedes-eqe-suv-350-4matic",
    "year": 2025,
    "make": "Mercedes-Benz",
    "model": "EQE SUV",
    "trim": "350 4MATIC",
    "slug": "2025-mercedes-eqe-suv-350-4matic",
    "pricing": {
      "msrpBase": 80900,
      "msrpMax": 86000
    },
    "range": {
      "epaRangeMiles": 253,
      "batteryCapacityKwh": 90.6,
      "efficiencyMPGe": 81,
      "efficiencyKwhPer100Mi": 41.6
    },
    "performance": {
      "horsepower": 288,
      "torque": 564,
      "zeroTo60": 5.6,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 170,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 14,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 6020
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2025-mercedes-eqe-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqe/suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2025 EQE SUV 350 4MATIC: 288 HP AWD, 253 mi range. Dual-motor AWD with higher torque (564 lb-ft)."
    }
  },
  {
    "id": "2025-mercedes-eqe-suv-500-4matic",
    "year": 2025,
    "make": "Mercedes-Benz",
    "model": "EQE SUV",
    "trim": "500 4MATIC",
    "slug": "2025-mercedes-eqe-suv-500-4matic",
    "pricing": {
      "msrpBase": 93900,
      "msrpMax": 100000
    },
    "range": {
      "epaRangeMiles": 264,
      "batteryCapacityKwh": 96,
      "efficiencyMPGe": 87,
      "efficiencyKwhPer100Mi": 38.7
    },
    "performance": {
      "horsepower": 402,
      "torque": 633,
      "zeroTo60": 4.3,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 170,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 14,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 6220
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2025-mercedes-eqe-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqe/suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2025 EQE SUV 500 4MATIC: 402 HP, 4.3s 0-60. Performance variant with 96 kWh battery. Discontinued for 2026."
    }
  },
  {
    "id": "2025-mercedes-amg-eqe-suv",
    "year": 2025,
    "make": "Mercedes-Benz",
    "model": "EQE SUV",
    "trim": "AMG EQE",
    "slug": "2025-mercedes-amg-eqe-suv",
    "pricing": {
      "msrpBase": 117000,
      "msrpMax": 125000
    },
    "range": {
      "epaRangeMiles": 230,
      "batteryCapacityKwh": 96,
      "efficiencyMPGe": 70,
      "efficiencyKwhPer100Mi": 48.1
    },
    "performance": {
      "horsepower": 617,
      "torque": 738,
      "zeroTo60": 3.1,
      "topSpeed": 149,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 170,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 14,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 6380
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2025-mercedes-amg-eqe-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/amg-eqe-suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2025 AMG EQE SUV: 617 HP, 3.1s 0-60. Track-ready SUV with AMG performance upgrades."
    }
  },
  {
    "id": "2024-mercedes-eqe-suv-350-plus",
    "year": 2024,
    "make": "Mercedes-Benz",
    "model": "EQE SUV",
    "trim": "350+",
    "slug": "2024-mercedes-eqe-suv-350-plus",
    "pricing": {
      "msrpBase": 79050,
      "msrpMax": 85000
    },
    "range": {
      "epaRangeMiles": 280,
      "batteryCapacityKwh": 90.6,
      "efficiencyMPGe": 88,
      "efficiencyKwhPer100Mi": 38.3
    },
    "performance": {
      "horsepower": 288,
      "torque": 391,
      "zeroTo60": 6.4,
      "topSpeed": 130,
      "drivetrain": "RWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 170,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 14,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5820
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-mercedes-eqe-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqe/suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2024 EQE SUV 350+: 288 HP RWD, 280 mi range. 90.6 kWh battery. First year for EQE SUV in US market."
    }
  },
  {
    "id": "2024-mercedes-eqe-suv-350-4matic",
    "year": 2024,
    "make": "Mercedes-Benz",
    "model": "EQE SUV",
    "trim": "350 4MATIC",
    "slug": "2024-mercedes-eqe-suv-350-4matic",
    "pricing": {
      "msrpBase": 82050,
      "msrpMax": 88000
    },
    "range": {
      "epaRangeMiles": 253,
      "batteryCapacityKwh": 90.6,
      "efficiencyMPGe": 81,
      "efficiencyKwhPer100Mi": 41.6
    },
    "performance": {
      "horsepower": 288,
      "torque": 564,
      "zeroTo60": 5.6,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 170,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 14,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 6020
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-mercedes-eqe-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqe/suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2024 EQE SUV 350 4MATIC: 288 HP AWD, 253 mi range. Dual-motor AWD for all-weather capability."
    }
  },
  {
    "id": "2024-mercedes-eqe-suv-500-4matic",
    "year": 2024,
    "make": "Mercedes-Benz",
    "model": "EQE SUV",
    "trim": "500 4MATIC",
    "slug": "2024-mercedes-eqe-suv-500-4matic",
    "pricing": {
      "msrpBase": 92000,
      "msrpMax": 98000
    },
    "range": {
      "epaRangeMiles": 264,
      "batteryCapacityKwh": 90.6,
      "efficiencyMPGe": 86,
      "efficiencyKwhPer100Mi": 39.2
    },
    "performance": {
      "horsepower": 402,
      "torque": 633,
      "zeroTo60": 4.3,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 170,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 14,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 6220
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-mercedes-eqe-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqe/suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2024 EQE SUV 500 4MATIC: 402 HP, 4.3s 0-60. Performance SUV variant with 90.6 kWh battery."
    }
  },
  // Mercedes-Benz EQS Sedan (2024-2026) - 10 vehicles
  {
    "id": "2026-mercedes-eqs-450-plus",
    "year": 2026,
    "make": "Mercedes-Benz",
    "model": "EQS",
    "trim": "450+",
    "slug": "2026-mercedes-eqs-450-plus",
    "pricing": {
      "msrpBase": 99900,
      "msrpMax": 105000
    },
    "range": {
      "epaRangeMiles": 390,
      "batteryCapacityKwh": 118,
      "efficiencyMPGe": 97,
      "efficiencyKwhPer100Mi": 34.7
    },
    "performance": {
      "horsepower": 335,
      "torque": 419,
      "zeroTo60": 5.4,
      "topSpeed": 130,
      "drivetrain": "RWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 200,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 22,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5550
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-mercedes-eqs.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqs/sedan",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2026 EQS 450+: 335 HP RWD, 390 mi range. Flagship luxury sedan with 118 kWh battery. MBUX Hyperscreen standard. Excellent efficiency at 97 MPGe."
    }
  },
  {
    "id": "2026-mercedes-eqs-450-4matic",
    "year": 2026,
    "make": "Mercedes-Benz",
    "model": "EQS",
    "trim": "450 4MATIC",
    "slug": "2026-mercedes-eqs-450-4matic",
    "pricing": {
      "msrpBase": 102900,
      "msrpMax": 108000
    },
    "range": {
      "epaRangeMiles": 367,
      "batteryCapacityKwh": 118,
      "efficiencyMPGe": 92,
      "efficiencyKwhPer100Mi": 36.6
    },
    "performance": {
      "horsepower": 335,
      "torque": 590,
      "zeroTo60": 5.3,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 200,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 22,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5806
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-mercedes-eqs.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqs/sedan",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2026 EQS 450 4MATIC: 335 HP AWD, 367 mi range. Dual-motor AWD with higher torque (590 lb-ft). All-weather capability."
    }
  },
  {
    "id": "2026-mercedes-eqs-580-4matic",
    "year": 2026,
    "make": "Mercedes-Benz",
    "model": "EQS",
    "trim": "580 4MATIC",
    "slug": "2026-mercedes-eqs-580-4matic",
    "pricing": {
      "msrpBase": 123900,
      "msrpMax": 130000
    },
    "range": {
      "epaRangeMiles": 371,
      "batteryCapacityKwh": 118,
      "efficiencyMPGe": 94,
      "efficiencyKwhPer100Mi": 35.8
    },
    "performance": {
      "horsepower": 536,
      "torque": 633,
      "zeroTo60": 3.7,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 200,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 22,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5806
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-mercedes-eqs.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqs/sedan",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2026 EQS 580 4MATIC: 536 HP, 3.7s 0-60. Performance flagship sedan with 371 mi range. Balance of power and efficiency."
    }
  },
  {
    "id": "2025-mercedes-eqs-450-plus",
    "year": 2025,
    "make": "Mercedes-Benz",
    "model": "EQS",
    "trim": "450+",
    "slug": "2025-mercedes-eqs-450-plus",
    "pricing": {
      "msrpBase": 104400,
      "msrpMax": 110000
    },
    "range": {
      "epaRangeMiles": 390,
      "batteryCapacityKwh": 118,
      "efficiencyMPGe": 97,
      "efficiencyKwhPer100Mi": 34.7
    },
    "performance": {
      "horsepower": 335,
      "torque": 419,
      "zeroTo60": 5.4,
      "topSpeed": 130,
      "drivetrain": "RWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 200,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 22,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5550
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2025-mercedes-eqs.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqs/sedan",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2025 EQS 450+: 335 HP RWD, 390 mi range. Upgraded to 118 kWh battery from 107.8 kWh in 2024. Impressive 11% range increase."
    }
  },
  {
    "id": "2025-mercedes-eqs-450-4matic",
    "year": 2025,
    "make": "Mercedes-Benz",
    "model": "EQS",
    "trim": "450 4MATIC",
    "slug": "2025-mercedes-eqs-450-4matic",
    "pricing": {
      "msrpBase": 107400,
      "msrpMax": 113000
    },
    "range": {
      "epaRangeMiles": 367,
      "batteryCapacityKwh": 118,
      "efficiencyMPGe": 92,
      "efficiencyKwhPer100Mi": 36.6
    },
    "performance": {
      "horsepower": 335,
      "torque": 590,
      "zeroTo60": 5.3,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 200,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 22,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5806
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2025-mercedes-eqs.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqs/sedan",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2025 EQS 450 4MATIC: 335 HP AWD, 367 mi range. 118 kWh battery, dual-motor AWD with 590 lb-ft torque."
    }
  },
  {
    "id": "2025-mercedes-eqs-580-4matic",
    "year": 2025,
    "make": "Mercedes-Benz",
    "model": "EQS",
    "trim": "580 4MATIC",
    "slug": "2025-mercedes-eqs-580-4matic",
    "pricing": {
      "msrpBase": 127350,
      "msrpMax": 135000
    },
    "range": {
      "epaRangeMiles": 371,
      "batteryCapacityKwh": 118,
      "efficiencyMPGe": 94,
      "efficiencyKwhPer100Mi": 35.8
    },
    "performance": {
      "horsepower": 536,
      "torque": 633,
      "zeroTo60": 3.7,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 200,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 22,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5806
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2025-mercedes-eqs.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqs/sedan",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2025 EQS 580 4MATIC: 536 HP, 3.7s 0-60. Performance sedan with 371 mi range. 118 kWh battery with 200 kW charging."
    }
  },
  {
    "id": "2025-mercedes-amg-eqs",
    "year": 2025,
    "make": "Mercedes-Benz",
    "model": "EQS",
    "trim": "AMG EQS",
    "slug": "2025-mercedes-amg-eqs",
    "pricing": {
      "msrpBase": 147550,
      "msrpMax": 155000
    },
    "range": {
      "epaRangeMiles": 315,
      "batteryCapacityKwh": 118,
      "efficiencyMPGe": 75,
      "efficiencyKwhPer100Mi": 44.9
    },
    "performance": {
      "horsepower": 649,
      "torque": 752,
      "zeroTo60": 3.4,
      "topSpeed": 155,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 200,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 22,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5890
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2025-mercedes-amg-eqs.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/amg-eqs",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2025 AMG EQS: 649 HP, 3.4s 0-60. Performance flagship with AMG suspension, brakes. 118 kWh battery, 315 mi range."
    }
  },
  {
    "id": "2024-mercedes-eqs-450-plus",
    "year": 2024,
    "make": "Mercedes-Benz",
    "model": "EQS",
    "trim": "450+",
    "slug": "2024-mercedes-eqs-450-plus",
    "pricing": {
      "msrpBase": 104400,
      "msrpMax": 110000
    },
    "range": {
      "epaRangeMiles": 350,
      "batteryCapacityKwh": 107.8,
      "efficiencyMPGe": 95,
      "efficiencyKwhPer100Mi": 35.4
    },
    "performance": {
      "horsepower": 335,
      "torque": 419,
      "zeroTo60": 5.9,
      "topSpeed": 130,
      "drivetrain": "RWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 200,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 22,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5550
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-mercedes-eqs.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqs/sedan",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2024 EQS 450+: 335 HP RWD, 350 mi range. 107.8 kWh battery. Flagship luxury sedan with Drive Pilot Level 3 autonomy."
    }
  },
  {
    "id": "2024-mercedes-eqs-580-4matic",
    "year": 2024,
    "make": "Mercedes-Benz",
    "model": "EQS",
    "trim": "580 4MATIC",
    "slug": "2024-mercedes-eqs-580-4matic",
    "pricing": {
      "msrpBase": 125950,
      "msrpMax": 133000
    },
    "range": {
      "epaRangeMiles": 345,
      "batteryCapacityKwh": 107.8,
      "efficiencyMPGe": 93,
      "efficiencyKwhPer100Mi": 36.2
    },
    "performance": {
      "horsepower": 516,
      "torque": 633,
      "zeroTo60": 4.2,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 200,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 22,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5806
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-mercedes-eqs.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqs/sedan",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2024 EQS 580 4MATIC: 516 HP, 4.2s 0-60. Performance sedan with 345 mi range. 107.8 kWh battery."
    }
  },
  {
    "id": "2024-mercedes-amg-eqs",
    "year": 2024,
    "make": "Mercedes-Benz",
    "model": "EQS",
    "trim": "AMG EQS",
    "slug": "2024-mercedes-amg-eqs",
    "pricing": {
      "msrpBase": 147000,
      "msrpMax": 155000
    },
    "range": {
      "epaRangeMiles": 305,
      "batteryCapacityKwh": 107.8,
      "efficiencyMPGe": 72,
      "efficiencyKwhPer100Mi": 46.8
    },
    "performance": {
      "horsepower": 750,
      "torque": 752,
      "zeroTo60": 3.4,
      "topSpeed": 155,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 200,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 22,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5890
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-mercedes-amg-eqs.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/amg-eqs",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2024 AMG EQS: 750 HP, 3.4s 0-60. Most powerful AMG EQS with 107.8 kWh battery. 305 mi range."
    }
  },
  // Mercedes-Benz EQS SUV (2024-2026) - 10 vehicles
  {
    "id": "2026-mercedes-eqs-suv-450-plus",
    "year": 2026,
    "make": "Mercedes-Benz",
    "model": "EQS SUV",
    "trim": "450+",
    "slug": "2026-mercedes-eqs-suv-450-plus",
    "pricing": {
      "msrpBase": 99900,
      "msrpMax": 105000
    },
    "range": {
      "epaRangeMiles": 390,
      "batteryCapacityKwh": 118,
      "efficiencyMPGe": 90,
      "efficiencyKwhPer100Mi": 37.4
    },
    "performance": {
      "horsepower": 355,
      "torque": 419,
      "zeroTo60": 5.8,
      "topSpeed": 130,
      "drivetrain": "RWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 200,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 23,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 6100
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-mercedes-eqs-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqs/suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2026 EQS SUV 450+: 355 HP RWD, 390 mi range. Flagship luxury SUV with 118 kWh battery. Optional 7-seat configuration."
    }
  },
  {
    "id": "2026-mercedes-eqs-suv-450-4matic",
    "year": 2026,
    "make": "Mercedes-Benz",
    "model": "EQS SUV",
    "trim": "450 4MATIC",
    "slug": "2026-mercedes-eqs-suv-450-4matic",
    "pricing": {
      "msrpBase": 102900,
      "msrpMax": 108000
    },
    "range": {
      "epaRangeMiles": 367,
      "batteryCapacityKwh": 118,
      "efficiencyMPGe": 87,
      "efficiencyKwhPer100Mi": 38.7
    },
    "performance": {
      "horsepower": 355,
      "torque": 590,
      "zeroTo60": 5.2,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 200,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 7,
      "cargoVolumeCuFt": 23,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 6350
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-mercedes-eqs-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqs/suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2026 EQS SUV 450 4MATIC: 355 HP AWD, 367 mi range. Dual-motor AWD with 7-seat option. High torque (590 lb-ft)."
    }
  },
  {
    "id": "2026-mercedes-eqs-suv-580-4matic",
    "year": 2026,
    "make": "Mercedes-Benz",
    "model": "EQS SUV",
    "trim": "580 4MATIC",
    "slug": "2026-mercedes-eqs-suv-580-4matic",
    "pricing": {
      "msrpBase": 123900,
      "msrpMax": 130000
    },
    "range": {
      "epaRangeMiles": 371,
      "batteryCapacityKwh": 118,
      "efficiencyMPGe": 89,
      "efficiencyKwhPer100Mi": 37.8
    },
    "performance": {
      "horsepower": 536,
      "torque": 633,
      "zeroTo60": 4.5,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 200,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 7,
      "cargoVolumeCuFt": 23,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 6350
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-mercedes-eqs-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqs/suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2026 EQS SUV 580 4MATIC: 536 HP, 4.5s 0-60. Performance SUV with 371 mi range. 7-seat luxury with impressive efficiency."
    }
  },
  {
    "id": "2025-mercedes-eqs-suv-450-plus",
    "year": 2025,
    "make": "Mercedes-Benz",
    "model": "EQS SUV",
    "trim": "450+",
    "slug": "2025-mercedes-eqs-suv-450-plus",
    "pricing": {
      "msrpBase": 106400,
      "msrpMax": 112000
    },
    "range": {
      "epaRangeMiles": 323,
      "batteryCapacityKwh": 118,
      "efficiencyMPGe": 86,
      "efficiencyKwhPer100Mi": 39.2
    },
    "performance": {
      "horsepower": 355,
      "torque": 419,
      "zeroTo60": 5.8,
      "topSpeed": 130,
      "drivetrain": "RWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 200,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 23,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 6100
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2025-mercedes-eqs-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqs/suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2025 EQS SUV 450+: 355 HP RWD, 323 mi range. 118 kWh battery, luxury 5-seat SUV. MBUX Hyperscreen available."
    }
  },
  {
    "id": "2025-mercedes-eqs-suv-450-4matic",
    "year": 2025,
    "make": "Mercedes-Benz",
    "model": "EQS SUV",
    "trim": "450 4MATIC",
    "slug": "2025-mercedes-eqs-suv-450-4matic",
    "pricing": {
      "msrpBase": 109400,
      "msrpMax": 115000
    },
    "range": {
      "epaRangeMiles": 312,
      "batteryCapacityKwh": 118,
      "efficiencyMPGe": 83,
      "efficiencyKwhPer100Mi": 40.6
    },
    "performance": {
      "horsepower": 355,
      "torque": 590,
      "zeroTo60": 5.2,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 200,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 7,
      "cargoVolumeCuFt": 23,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 6350
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2025-mercedes-eqs-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqs/suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2025 EQS SUV 450 4MATIC: 355 HP AWD, 312 mi range. 7-seat configuration. Dual-motor AWD with 590 lb-ft torque."
    }
  },
  {
    "id": "2025-mercedes-eqs-suv-580-4matic",
    "year": 2025,
    "make": "Mercedes-Benz",
    "model": "EQS SUV",
    "trim": "580 4MATIC",
    "slug": "2025-mercedes-eqs-suv-580-4matic",
    "pricing": {
      "msrpBase": 129250,
      "msrpMax": 136000
    },
    "range": {
      "epaRangeMiles": 317,
      "batteryCapacityKwh": 118,
      "efficiencyMPGe": 85,
      "efficiencyKwhPer100Mi": 39.6
    },
    "performance": {
      "horsepower": 536,
      "torque": 633,
      "zeroTo60": 4.5,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 200,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 7,
      "cargoVolumeCuFt": 23,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 6350
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2025-mercedes-eqs-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqs/suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2025 EQS SUV 580 4MATIC: 536 HP, 4.5s 0-60. Performance SUV with 317 mi range. 7-seat luxury with strong acceleration."
    }
  },
  {
    "id": "2025-mercedes-maybach-eqs-680-suv",
    "year": 2025,
    "make": "Mercedes-Benz",
    "model": "EQS SUV",
    "trim": "Maybach EQS 680",
    "slug": "2025-mercedes-maybach-eqs-680-suv",
    "pricing": {
      "msrpBase": 200000,
      "msrpMax": 215000
    },
    "range": {
      "epaRangeMiles": 302,
      "batteryCapacityKwh": 118,
      "efficiencyMPGe": 82,
      "efficiencyKwhPer100Mi": 41.1
    },
    "performance": {
      "horsepower": 649,
      "torque": 700,
      "zeroTo60": 4.0,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 200,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 4,
      "cargoVolumeCuFt": 23,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 6600
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2025-mercedes-maybach-eqs-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/maybach-eqs-suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2025 Maybach EQS 680 SUV: 649 HP, ultra-luxury SUV with 4-seat executive configuration. 302 mi range. Maybach-exclusive features and materials."
    }
  },
  {
    "id": "2024-mercedes-eqs-suv-450-plus",
    "year": 2024,
    "make": "Mercedes-Benz",
    "model": "EQS SUV",
    "trim": "450+",
    "slug": "2024-mercedes-eqs-suv-450-plus",
    "pricing": {
      "msrpBase": 106000,
      "msrpMax": 112000
    },
    "range": {
      "epaRangeMiles": 323,
      "batteryCapacityKwh": 107.8,
      "efficiencyMPGe": 85,
      "efficiencyKwhPer100Mi": 39.6
    },
    "performance": {
      "horsepower": 355,
      "torque": 419,
      "zeroTo60": 5.8,
      "topSpeed": 130,
      "drivetrain": "RWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 200,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 23,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 6100
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-mercedes-eqs-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqs/suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2024 EQS SUV 450+: 355 HP RWD, 323 mi range. 107.8 kWh battery. First year for EQS SUV in US. 5-seat luxury."
    }
  },
  {
    "id": "2024-mercedes-eqs-suv-450-4matic",
    "year": 2024,
    "make": "Mercedes-Benz",
    "model": "EQS SUV",
    "trim": "450 4MATIC",
    "slug": "2024-mercedes-eqs-suv-450-4matic",
    "pricing": {
      "msrpBase": 109000,
      "msrpMax": 115000
    },
    "range": {
      "epaRangeMiles": 312,
      "batteryCapacityKwh": 107.8,
      "efficiencyMPGe": 82,
      "efficiencyKwhPer100Mi": 41.1
    },
    "performance": {
      "horsepower": 355,
      "torque": 590,
      "zeroTo60": 5.2,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 200,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 7,
      "cargoVolumeCuFt": 23,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 6350
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-mercedes-eqs-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqs/suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2024 EQS SUV 450 4MATIC: 355 HP AWD, 312 mi range. 7-seat option. Dual-motor AWD with 107.8 kWh battery."
    }
  },
  {
    "id": "2024-mercedes-eqs-suv-580-4matic",
    "year": 2024,
    "make": "Mercedes-Benz",
    "model": "EQS SUV",
    "trim": "580 4MATIC",
    "slug": "2024-mercedes-eqs-suv-580-4matic",
    "pricing": {
      "msrpBase": 129000,
      "msrpMax": 136000
    },
    "range": {
      "epaRangeMiles": 317,
      "batteryCapacityKwh": 107.8,
      "efficiencyMPGe": 84,
      "efficiencyKwhPer100Mi": 40.1
    },
    "performance": {
      "horsepower": 536,
      "torque": 633,
      "zeroTo60": 4.5,
      "topSpeed": 130,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "CCS1",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 200,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 7,
      "cargoVolumeCuFt": 23,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 6350
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2024-mercedes-eqs-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqs/suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz USA, Car and Driver, Motor Trend",
      "lastVerified": "2025-12-01",
      "notes": "2024 EQS SUV 580 4MATIC: 536 HP, 4.5s 0-60. Performance SUV with 317 mi range. 7-seat configuration with 107.8 kWh battery."
    }
  },
  {
    "id": "2026-rivian-r1s-dual-motor",
    "year": 2026,
    "make": "Rivian",
    "model": "R1S",
    "trim": "Dual Motor",
    "slug": "2026-rivian-r1s-dual-motor",
    "pricing": {
      "msrpBase": 76000,
      "msrpMax": 86000
    },
    "range": {
      "epaRangeMiles": 285,
      "batteryCapacityKwh": 106,
      "efficiencyMPGe": 74,
      "efficiencyKwhPer100Mi": 45.6
    },
    "performance": {
      "horsepower": 533,
      "torque": 610,
      "zeroTo60": 4.5,
      "topSpeed": 110,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 11.5,
      "dcChargingMaxKw": 220,
      "chargingTime10to80Minutes": 30
    },
    "physical": {
      "seatingCapacity": 7,
      "cargoVolumeCuFt": 88,
      "towingCapacityLbs": 7700,
      "curbWeightLbs": 7150
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": true,
      "hasV2H": false,
      "autopilotLevel": "Driver+"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-rivian-r1s.jpg",
      "manufacturerUrl": "https://rivian.com/r1s",
      "availabilityStatus": "Available",
      "dataSource": "Rivian.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "2026 model features native NACS connector. Adventure-focused electric SUV with 7 seats. Exceptional off-road capability. Larger battery and improved range over previous years. Access to Rivian Adventure Network + Tesla Superchargers."
    }
  },
  {
    "id": "2023-subaru-solterra-premium",
    "year": 2023,
    "make": "Subaru",
    "model": "Solterra",
    "trim": "Premium",
    "slug": "2023-subaru-solterra-premium",
    "pricing": { "msrpBase": 44995, "msrpMax": 44995 },
    "range": { "epaRangeMiles": 228, "batteryCapacityKwh": 72.8, "efficiencyMPGe": 94, "efficiencyKwhPer100Mi": 35.9 },
    "performance": { "horsepower": 215, "torque": 249, "zeroTo60": 7.3, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 6.6, "dcChargingMaxKw": 100, "chargingTime10to80Minutes": 56 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 30.3, "towingCapacityLbs": 0, "curbWeightLbs": 4500 },
    "features": { "hasHeatPump": false, "hasV2L": false, "hasV2H": false, "autopilotLevel": "EyeSight Driver Assist" },
    "meta": { "imageUrl": "/images/vehicles/2023-subaru-solterra.jpg", "manufacturerUrl": "https://www.subaru.com/vehicles/solterra.html", "availabilityStatus": "Discontinued", "dataSource": "Subaru.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "First year Solterra (2023): Co-developed with Toyota bZ4X. 228 mi range, CCS1 connector, 100 kW DC charging. 2026 model adds +61 mi range, +123 hp, NACS." }
  },
  {
    "id": "2024-subaru-solterra-premium",
    "year": 2024,
    "make": "Subaru",
    "model": "Solterra",
    "trim": "Premium",
    "slug": "2024-subaru-solterra-premium",
    "pricing": { "msrpBase": 46220, "msrpMax": 46220 },
    "range": { "epaRangeMiles": 227, "batteryCapacityKwh": 72.8, "efficiencyMPGe": 96, "efficiencyKwhPer100Mi": 35.1 },
    "performance": { "horsepower": 215, "torque": 249, "zeroTo60": 7.3, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 6.6, "dcChargingMaxKw": 100, "chargingTime10to80Minutes": 56 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 30.3, "towingCapacityLbs": 0, "curbWeightLbs": 4520 },
    "features": { "hasHeatPump": false, "hasV2L": false, "hasV2H": false, "autopilotLevel": "EyeSight Driver Assist" },
    "meta": { "imageUrl": "/images/vehicles/2024-subaru-solterra.jpg", "manufacturerUrl": "https://www.subaru.com/vehicles/solterra.html", "availabilityStatus": "Discontinued", "dataSource": "Subaru.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "2024 Solterra: Minor updates from 2023. Still 227 mi range, CCS1. Wait for 2026 refresh recommended - adds +61 mi range, +18-123 hp, NACS connector." }
  },
  {
    "id": "2025-subaru-solterra-premium",
    "year": 2025,
    "make": "Subaru",
    "model": "Solterra",
    "trim": "Premium",
    "slug": "2025-subaru-solterra-premium",
    "pricing": { "msrpBase": 46220, "msrpMax": 46220 },
    "range": { "epaRangeMiles": 227, "batteryCapacityKwh": 72.8, "efficiencyMPGe": 96, "efficiencyKwhPer100Mi": 35.1 },
    "performance": { "horsepower": 215, "torque": 249, "zeroTo60": 7.3, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 6.6, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 37 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 30.3, "towingCapacityLbs": 0, "curbWeightLbs": 4520 },
    "features": { "hasHeatPump": false, "hasV2L": false, "hasV2H": false, "autopilotLevel": "EyeSight Driver Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-subaru-solterra.jpg", "manufacturerUrl": "https://www.subaru.com/vehicles/solterra.html", "availabilityStatus": "Discontinued", "dataSource": "Subaru.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "Final pre-refresh year (2025): Same 227 mi range as 2023-2024. Improved DC charging to 150 kW. 2026 MODEL MAJOR REFRESH: +61 mi range, +18-123 hp, NACS, battery preconditioning!" }
  },
  {
    "id": "2026-subaru-solterra-premium",
    "year": 2026,
    "make": "Subaru",
    "model": "Solterra",
    "trim": "Premium",
    "slug": "2026-subaru-solterra-premium",
    "pricing": {
      "msrpBase": 38495,
      "msrpMax": 38495
    },
    "range": {
      "epaRangeMiles": 288,
      "batteryCapacityKwh": 74.7,
      "efficiencyMPGe": 95,
      "efficiencyKwhPer100Mi": 35.5
    },
    "performance": {
      "horsepower": 233,
      "torque": 249,
      "zeroTo60": 6.5,
      "topSpeed": 100,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 6.6,
      "dcChargingMaxKw": 150,
      "chargingTime10to80Minutes": 40
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 30.3,
      "towingCapacityLbs": 2700,
      "curbWeightLbs": 4250
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "EyeSight with Lane Centering"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-subaru-solterra.jpg",
      "manufacturerUrl": "https://www.subaru.com/solterra",
      "availabilityStatus": "Available",
      "dataSource": "Subaru.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "Base trim. 2026 model features native NACS charging, +61 mi range improvement, and battery preconditioning."
    }
  },
  {
    "id": "2026-subaru-solterra-limited",
    "year": 2026,
    "make": "Subaru",
    "model": "Solterra",
    "trim": "Limited",
    "slug": "2026-subaru-solterra-limited",
    "pricing": {
      "msrpBase": 41395,
      "msrpMax": 41395
    },
    "range": {
      "epaRangeMiles": 288,
      "batteryCapacityKwh": 74.7,
      "efficiencyMPGe": 95,
      "efficiencyKwhPer100Mi": 35.5
    },
    "performance": {
      "horsepower": 233,
      "torque": 249,
      "zeroTo60": 6.5,
      "topSpeed": 100,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 6.6,
      "dcChargingMaxKw": 150,
      "chargingTime10to80Minutes": 40
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 30.3,
      "towingCapacityLbs": 2700,
      "curbWeightLbs": 4280
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "EyeSight with Lane Centering"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-subaru-solterra.jpg",
      "manufacturerUrl": "https://www.subaru.com/solterra",
      "availabilityStatus": "Available",
      "dataSource": "Subaru.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "Mid-level trim with additional features. 2026 model features native NACS charging and improved range."
    }
  },
  {
    "id": "2026-subaru-solterra-limited-xt",
    "year": 2026,
    "make": "Subaru",
    "model": "Solterra",
    "trim": "Limited XT",
    "slug": "2026-subaru-solterra-limited-xt",
    "pricing": {
      "msrpBase": 42895,
      "msrpMax": 42895
    },
    "range": {
      "epaRangeMiles": 278,
      "batteryCapacityKwh": 74.7,
      "efficiencyMPGe": 92,
      "efficiencyKwhPer100Mi": 36.6
    },
    "performance": {
      "horsepower": 338,
      "torque": 332,
      "zeroTo60": 5.2,
      "topSpeed": 100,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 6.6,
      "dcChargingMaxKw": 150,
      "chargingTime10to80Minutes": 40
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 30.3,
      "towingCapacityLbs": 2700,
      "curbWeightLbs": 4320
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "EyeSight with Lane Centering"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-subaru-solterra.jpg",
      "manufacturerUrl": "https://www.subaru.com/solterra",
      "availabilityStatus": "Available",
      "dataSource": "Subaru.com official specs, media.subaru.com press releases",
      "lastVerified": "2025-11-28",
      "notes": "NEW 2026 XT trim: 338 hp dual motors, 0-60 in 5.2s. Same performance as Touring XT but Limited trim features. Perfect middle ground between comfort and performance."
    }
  },
  {
    "id": "2026-subaru-solterra-touring-xt",
    "year": 2026,
    "make": "Subaru",
    "model": "Solterra",
    "trim": "Touring XT",
    "slug": "2026-subaru-solterra-touring-xt",
    "pricing": {
      "msrpBase": 45555,
      "msrpMax": 45555
    },
    "range": {
      "epaRangeMiles": 278,
      "batteryCapacityKwh": 74.7,
      "efficiencyMPGe": 92,
      "efficiencyKwhPer100Mi": 36.6
    },
    "performance": {
      "horsepower": 338,
      "torque": 332,
      "zeroTo60": 5.2,
      "topSpeed": 100,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 6.6,
      "dcChargingMaxKw": 150,
      "chargingTime10to80Minutes": 40
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 30.3,
      "towingCapacityLbs": 2700,
      "curbWeightLbs": 4350
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "EyeSight with Lane Centering"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-subaru-solterra.jpg",
      "manufacturerUrl": "https://www.subaru.com/solterra",
      "availabilityStatus": "Available",
      "dataSource": "Subaru.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "Top performance trim with dual motors. +123 hp over base model. 2026 features native NACS charging."
    }
  },
  {
    "id": "2026-tesla-model-3-standard-rwd",
    "year": 2026,
    "make": "Tesla",
    "model": "Model 3",
    "trim": "Standard RWD",
    "slug": "2026-tesla-model-3-standard-rwd",
    "pricing": { "msrpBase": 38630, "msrpMax": 38630 },
    "range": { "epaRangeMiles": 321, "batteryCapacityKwh": 70, "efficiencyMPGe": 130, "efficiencyKwhPer100Mi": 26.0 },
    "performance": { "horsepower": 286, "torque": 307, "zeroTo60": 5.8, "topSpeed": 140, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 25 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 23, "towingCapacityLbs": 0, "curbWeightLbs": 3862 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2026-tesla-model-3.jpg", "manufacturerUrl": "https://www.tesla.com/model3", "availabilityStatus": "Available", "dataSource": "Tesla.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "NEW 2026 base Model 3. 70 kWh battery, 321 mi range, most affordable Tesla sedan at $38,630." }
  },
  {
    "id": "2026-tesla-model-3-premium-rwd",
    "year": 2026,
    "make": "Tesla",
    "model": "Model 3",
    "trim": "Premium RWD",
    "slug": "2026-tesla-model-3-premium-rwd",
    "pricing": { "msrpBase": 44130, "msrpMax": 44130 },
    "range": { "epaRangeMiles": 363, "batteryCapacityKwh": 80, "efficiencyMPGe": 138, "efficiencyKwhPer100Mi": 24.5 },
    "performance": { "horsepower": 286, "torque": 307, "zeroTo60": 4.9, "topSpeed": 145, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 25 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 23, "towingCapacityLbs": 0, "curbWeightLbs": 3946 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2026-tesla-model-3.jpg", "manufacturerUrl": "https://www.tesla.com/model3", "availabilityStatus": "Available", "dataSource": "Tesla.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "Premium RWD (formerly 'Long Range'). 80 kWh battery, 363 mi EPA - best Model 3 range. Simplified 2026 naming." }
  },
  {
    "id": "2026-tesla-model-3-performance",
    "year": 2026,
    "make": "Tesla",
    "model": "Model 3",
    "trim": "Performance",
    "slug": "2026-tesla-model-3-performance",
    "pricing": { "msrpBase": 56630, "msrpMax": 56630 },
    "range": { "epaRangeMiles": 298, "batteryCapacityKwh": 80, "efficiencyMPGe": 115, "efficiencyKwhPer100Mi": 29.4 },
    "performance": { "horsepower": 510, "torque": 487, "zeroTo60": 2.9, "topSpeed": 163, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 25 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 23, "towingCapacityLbs": 0, "curbWeightLbs": 4048 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2026-tesla-model-3-performance.jpg", "manufacturerUrl": "https://www.tesla.com/model3", "availabilityStatus": "Available", "dataSource": "Tesla.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "Model 3 Performance: 510 hp, 0-60 in 2.9s, 163 mph top speed. Track Mode, carbon fiber spoiler, sport brakes." }
  },
  {
    "id": "2026-tesla-model-3-long-range",
    "year": 2026,
    "make": "Tesla",
    "model": "Model 3",
    "trim": "Long Range",
    "slug": "2026-tesla-model-3-long-range",
    "pricing": {
      "msrpBase": 48490,
      "msrpMax": 48490
    },
    "range": {
      "epaRangeMiles": 363,
      "batteryCapacityKwh": 82,
      "efficiencyMPGe": 138,
      "efficiencyKwhPer100Mi": 24.5
    },
    "performance": {
      "horsepower": 366,
      "torque": 389,
      "zeroTo60": 4,
      "topSpeed": 145,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 250,
      "chargingTime10to80Minutes": 25
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 23,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 4034
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Autopilot included, FSD available"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-tesla-model-3.jpg",
      "manufacturerUrl": "https://www.tesla.com/model3",
      "availabilityStatus": "Available",
      "dataSource": "Tesla.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "Refreshed 2026 model with improved range and efficiency. Best-selling EV sedan. Native NACS with access to entire Supercharger network. New Highland design with enhanced interior."
    }
  },
  {
    "id": "2026-tesla-model-y-long-range",
    "year": 2026,
    "make": "Tesla",
    "model": "Model Y",
    "trim": "Long Range",
    "slug": "2026-tesla-model-y-long-range",
    "pricing": {
      "msrpBase": 49990,
      "msrpMax": 49990
    },
    "range": {
      "epaRangeMiles": 350,
      "batteryCapacityKwh": 82,
      "efficiencyMPGe": 127,
      "efficiencyKwhPer100Mi": 26.5
    },
    "performance": {
      "horsepower": 384,
      "torque": 376,
      "zeroTo60": 4.5,
      "topSpeed": 135,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 250,
      "chargingTime10to80Minutes": 25
    },
    "physical": {
      "seatingCapacity": 7,
      "cargoVolumeCuFt": 76,
      "towingCapacityLbs": 3500,
      "curbWeightLbs": 4398
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Autopilot included, FSD available"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-tesla-model-y.jpg",
      "manufacturerUrl": "https://www.tesla.com/modely",
      "availabilityStatus": "Available",
      "dataSource": "Tesla.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "America's best-selling EV. 2026 model features improved efficiency and range. Optional 7-seat configuration. Excellent cargo space and practicality."
    }
  },
  {
    "id": "2026-tesla-model-y-standard-rwd",
    "year": 2026,
    "make": "Tesla",
    "model": "Model Y",
    "trim": "Standard RWD",
    "slug": "2026-tesla-model-y-standard-rwd",
    "pricing": { "msrpBase": 41630, "msrpMax": 41630 },
    "range": { "epaRangeMiles": 321, "batteryCapacityKwh": 69.5, "efficiencyMPGe": 123, "efficiencyKwhPer100Mi": 27.4 },
    "performance": { "horsepower": 300, "torque": 325, "zeroTo60": 6.8, "topSpeed": 135, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 25 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 76, "towingCapacityLbs": 2200, "curbWeightLbs": 4120 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2026-tesla-model-y.jpg", "manufacturerUrl": "https://www.tesla.com/modely", "availabilityStatus": "Available", "dataSource": "Tesla.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "NEW 2026 base Model Y. 69.5 kWh battery, RWD, 321 mi range. Most affordable Model Y at $41,630. Juniper refresh with updated interior." }
  },
  {
    "id": "2026-tesla-model-y-premium-rwd",
    "year": 2026,
    "make": "Tesla",
    "model": "Model Y",
    "trim": "Premium RWD",
    "slug": "2026-tesla-model-y-premium-rwd",
    "pricing": { "msrpBase": 46630, "msrpMax": 46630 },
    "range": { "epaRangeMiles": 357, "batteryCapacityKwh": 75, "efficiencyMPGe": 129, "efficiencyKwhPer100Mi": 26.1 },
    "performance": { "horsepower": 310, "torque": 340, "zeroTo60": 5.4, "topSpeed": 135, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 25 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 76, "towingCapacityLbs": 2200, "curbWeightLbs": 4250 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2026-tesla-model-y.jpg", "manufacturerUrl": "https://www.tesla.com/modely", "availabilityStatus": "Available", "dataSource": "Tesla.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "Premium RWD: 75 kWh battery, 357 mi EPA range - best Model Y efficiency. Ventilated seats, improved materials." }
  },
  {
    "id": "2026-tesla-model-y-performance",
    "year": 2026,
    "make": "Tesla",
    "model": "Model Y",
    "trim": "Performance",
    "slug": "2026-tesla-model-y-performance",
    "pricing": { "msrpBase": 59130, "msrpMax": 59130 },
    "range": { "epaRangeMiles": 306, "batteryCapacityKwh": 75, "efficiencyMPGe": 111, "efficiencyKwhPer100Mi": 30.4 },
    "performance": { "horsepower": 460, "torque": 487, "zeroTo60": 3.3, "topSpeed": 155, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 25 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 76, "towingCapacityLbs": 3500, "curbWeightLbs": 4555 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2026-tesla-model-y-performance.jpg", "manufacturerUrl": "https://www.tesla.com/modely", "availabilityStatus": "Available", "dataSource": "Tesla.com official specs, EPA FuelEconomy.gov", "lastVerified": "2025-11-28", "notes": "Model Y Performance: 460 hp, 0-60 in 3.3s, 155 mph top speed. Track Mode, performance brakes, lowered suspension." }
  },
  {
    "id": "2026-tesla-cybertruck-awd",
    "year": 2026,
    "make": "Tesla",
    "model": "Cybertruck",
    "trim": "AWD",
    "slug": "2026-tesla-cybertruck-awd",
    "pricing": { "msrpBase": 82235, "msrpMax": 82235 },
    "range": { "epaRangeMiles": 340, "batteryCapacityKwh": 122.4, "efficiencyMPGe": 76, "efficiencyKwhPer100Mi": 44.4 },
    "performance": { "horsepower": 593, "torque": 671, "zeroTo60": 4.1, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 45 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 67, "towingCapacityLbs": 11000, "curbWeightLbs": 6843 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2026-tesla-cybertruck-awd.jpg", "manufacturerUrl": "https://www.tesla.com/cybertruck", "availabilityStatus": "Available", "dataSource": "Tesla.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "Dual-motor AWD Cybertruck. 340 mi range, 593 hp, 11,000 lb towing capacity, stainless steel exoskeleton." }
  },
  {
    "id": "2024-cadillac-lyriq-rwd",
    "year": 2024,
    "make": "Cadillac",
    "model": "Lyriq",
    "trim": "Luxury RWD",
    "slug": "2024-cadillac-lyriq-rwd",
    "pricing": { "msrpBase": 57000, "msrpMax": 63000 },
    "range": { "epaRangeMiles": 314, "batteryCapacityKwh": 102, "efficiencyMPGe": 97, "efficiencyKwhPer100Mi": 34.8 },
    "performance": { "horsepower": 340, "torque": 325, "zeroTo60": 5.9, "topSpeed": 120, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 190, "chargingTime10to80Minutes": 35 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 60.8, "towingCapacityLbs": 0, "curbWeightLbs": 5610 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Super Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2024-cadillac-lyriq.jpg", "manufacturerUrl": "https://www.cadillac.com/electric/lyriq", "availabilityStatus": "Available", "dataSource": "Cadillac.com, EPA", "lastVerified": "2025-12-02", "notes": "2024 Lyriq Luxury RWD: 314 mi range, 340 HP. 102 kWh battery, Super Cruise hands-free driving, 33-inch curved display." }
  },
  {
    "id": "2024-cadillac-lyriq-awd",
    "year": 2024,
    "make": "Cadillac",
    "model": "Lyriq",
    "trim": "Luxury AWD",
    "slug": "2024-cadillac-lyriq-awd",
    "pricing": { "msrpBase": 62000, "msrpMax": 68000 },
    "range": { "epaRangeMiles": 307, "batteryCapacityKwh": 102, "efficiencyMPGe": 93, "efficiencyKwhPer100Mi": 36.3 },
    "performance": { "horsepower": 500, "torque": 450, "zeroTo60": 4.9, "topSpeed": 120, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 190, "chargingTime10to80Minutes": 35 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 60.8, "towingCapacityLbs": 0, "curbWeightLbs": 5820 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Super Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2024-cadillac-lyriq-awd.jpg", "manufacturerUrl": "https://www.cadillac.com/electric/lyriq", "availabilityStatus": "Available", "dataSource": "Cadillac.com, EPA", "lastVerified": "2025-12-02", "notes": "2024 Lyriq Luxury AWD: 307 mi range, 500 HP dual motor. 0-60 in 4.9s, Super Cruise, premium luxury features." }
  },
  {
    "id": "2024-cadillac-lyriq-sport-awd",
    "year": 2024,
    "make": "Cadillac",
    "model": "Lyriq",
    "trim": "Sport AWD",
    "slug": "2024-cadillac-lyriq-sport-awd",
    "pricing": { "msrpBase": 67000, "msrpMax": 73000 },
    "range": { "epaRangeMiles": 307, "batteryCapacityKwh": 102, "efficiencyMPGe": 93, "efficiencyKwhPer100Mi": 36.3 },
    "performance": { "horsepower": 500, "torque": 450, "zeroTo60": 4.6, "topSpeed": 125, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 190, "chargingTime10to80Minutes": 35 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 60.8, "towingCapacityLbs": 0, "curbWeightLbs": 5850 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Super Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2024-cadillac-lyriq-sport.jpg", "manufacturerUrl": "https://www.cadillac.com/electric/lyriq", "availabilityStatus": "Available", "dataSource": "Cadillac.com, EPA", "lastVerified": "2025-12-02", "notes": "2024 Lyriq Sport: Performance trim, 307 mi range, 500 HP. 0-60 in 4.6s, sport-tuned suspension, performance brakes." }
  },
  {
    "id": "2025-cadillac-lyriq-rwd",
    "year": 2025,
    "make": "Cadillac",
    "model": "Lyriq",
    "trim": "Luxury RWD",
    "slug": "2025-cadillac-lyriq-rwd",
    "pricing": { "msrpBase": 57500, "msrpMax": 63500 },
    "range": { "epaRangeMiles": 314, "batteryCapacityKwh": 102, "efficiencyMPGe": 97, "efficiencyKwhPer100Mi": 34.8 },
    "performance": { "horsepower": 340, "torque": 325, "zeroTo60": 5.9, "topSpeed": 120, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 190, "chargingTime10to80Minutes": 35 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 60.8, "towingCapacityLbs": 0, "curbWeightLbs": 5610 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Super Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2025-cadillac-lyriq.jpg", "manufacturerUrl": "https://www.cadillac.com/electric/lyriq", "availabilityStatus": "Available", "dataSource": "Cadillac.com, EPA", "lastVerified": "2025-12-02", "notes": "2025 Lyriq Luxury RWD: 314 mi range, 340 HP. 102 kWh battery, Super Cruise, 33-inch curved LED display." }
  },
  {
    "id": "2025-cadillac-lyriq-awd",
    "year": 2025,
    "make": "Cadillac",
    "model": "Lyriq",
    "trim": "Luxury AWD",
    "slug": "2025-cadillac-lyriq-awd",
    "pricing": { "msrpBase": 62500, "msrpMax": 68500 },
    "range": { "epaRangeMiles": 307, "batteryCapacityKwh": 102, "efficiencyMPGe": 93, "efficiencyKwhPer100Mi": 36.3 },
    "performance": { "horsepower": 500, "torque": 450, "zeroTo60": 4.9, "topSpeed": 120, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 190, "chargingTime10to80Minutes": 35 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 60.8, "towingCapacityLbs": 0, "curbWeightLbs": 5820 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Super Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2025-cadillac-lyriq-awd.jpg", "manufacturerUrl": "https://www.cadillac.com/electric/lyriq", "availabilityStatus": "Available", "dataSource": "Cadillac.com, EPA", "lastVerified": "2025-12-02", "notes": "2025 Lyriq Luxury AWD: 307 mi range, 500 HP dual motor. 0-60 in 4.9s, luxury amenities, hands-free Super Cruise." }
  },
  {
    "id": "2025-cadillac-lyriq-sport-awd",
    "year": 2025,
    "make": "Cadillac",
    "model": "Lyriq",
    "trim": "Sport AWD",
    "slug": "2025-cadillac-lyriq-sport-awd",
    "pricing": { "msrpBase": 67500, "msrpMax": 73500 },
    "range": { "epaRangeMiles": 307, "batteryCapacityKwh": 102, "efficiencyMPGe": 93, "efficiencyKwhPer100Mi": 36.3 },
    "performance": { "horsepower": 500, "torque": 450, "zeroTo60": 4.6, "topSpeed": 125, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 190, "chargingTime10to80Minutes": 35 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 60.8, "towingCapacityLbs": 0, "curbWeightLbs": 5850 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Super Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2025-cadillac-lyriq-sport.jpg", "manufacturerUrl": "https://www.cadillac.com/electric/lyriq", "availabilityStatus": "Available", "dataSource": "Cadillac.com, EPA", "lastVerified": "2025-12-02", "notes": "2025 Lyriq Sport: Performance AWD trim, 307 mi range, 500 HP. Sport-tuned suspension, 0-60 in 4.6s." }
  },
  {
    "id": "2026-cadillac-lyriq-rwd",
    "year": 2026,
    "make": "Cadillac",
    "model": "Lyriq",
    "trim": "Luxury RWD",
    "slug": "2026-cadillac-lyriq-rwd",
    "pricing": { "msrpBase": 57195, "msrpMax": 63590 },
    "range": { "epaRangeMiles": 326, "batteryCapacityKwh": 102, "efficiencyMPGe": 104, "efficiencyKwhPer100Mi": 32.5 },
    "performance": { "horsepower": 365, "torque": 325, "zeroTo60": 5.7, "topSpeed": 120, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 190, "chargingTime10to80Minutes": 35 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 60.8, "towingCapacityLbs": 0, "curbWeightLbs": 5610 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Super Cruise (hands-free highway driving)" },
    "meta": { "imageUrl": "/images/vehicles/2026-cadillac-lyriq.jpg", "manufacturerUrl": "https://www.cadillac.com/electric/lyriq", "availabilityStatus": "Available", "dataSource": "Cadillac.com official specs", "lastVerified": "2025-11-29", "notes": "2026 Lyriq RWD with 326 mi range. 102 kWh battery, 365 hp, Super Cruise available." }
  },
  {
    "id": "2026-cadillac-lyriq-awd",
    "year": 2026,
    "make": "Cadillac",
    "model": "Lyriq",
    "trim": "Luxury AWD",
    "slug": "2026-cadillac-lyriq-awd",
    "pricing": { "msrpBase": 62500, "msrpMax": 68500 },
    "range": { "epaRangeMiles": 310, "batteryCapacityKwh": 102, "efficiencyMPGe": 96, "efficiencyKwhPer100Mi": 35.1 },
    "performance": { "horsepower": 500, "torque": 450, "zeroTo60": 4.9, "topSpeed": 120, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 190, "chargingTime10to80Minutes": 35 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 60.8, "towingCapacityLbs": 0, "curbWeightLbs": 5820 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Super Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2026-cadillac-lyriq-awd.jpg", "manufacturerUrl": "https://www.cadillac.com/electric/lyriq", "availabilityStatus": "Available", "dataSource": "Cadillac.com, EPA", "lastVerified": "2025-12-02", "notes": "2026 Lyriq Luxury AWD: 310 mi range, 500 HP dual motor, native NACS. 0-60 in 4.9s, Super Cruise hands-free." }
  },
  {
    "id": "2026-cadillac-lyriq-sport-awd",
    "year": 2026,
    "make": "Cadillac",
    "model": "Lyriq",
    "trim": "Sport AWD",
    "slug": "2026-cadillac-lyriq-sport-awd",
    "pricing": { "msrpBase": 68000, "msrpMax": 74000 },
    "range": { "epaRangeMiles": 310, "batteryCapacityKwh": 102, "efficiencyMPGe": 96, "efficiencyKwhPer100Mi": 35.1 },
    "performance": { "horsepower": 500, "torque": 450, "zeroTo60": 4.6, "topSpeed": 125, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 190, "chargingTime10to80Minutes": 35 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 60.8, "towingCapacityLbs": 0, "curbWeightLbs": 5850 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Super Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2026-cadillac-lyriq-sport.jpg", "manufacturerUrl": "https://www.cadillac.com/electric/lyriq", "availabilityStatus": "Available", "dataSource": "Cadillac.com, EPA", "lastVerified": "2025-12-02", "notes": "2026 Lyriq Sport AWD: Performance trim, 310 mi range, 500 HP, native NACS. Sport suspension, 0-60 in 4.6s." }
  },
  {
    "id": "2024-volkswagen-id-buzz-rwd",
    "year": 2024,
    "make": "Volkswagen",
    "model": "ID. Buzz",
    "trim": "Pro S RWD",
    "slug": "2024-volkswagen-id-buzz-rwd",
    "pricing": { "msrpBase": 61545, "msrpMax": 65545 },
    "range": { "epaRangeMiles": 234, "batteryCapacityKwh": 86, "efficiencyMPGe": 83, "efficiencyKwhPer100Mi": 40.7 },
    "performance": { "horsepower": 282, "torque": 413, "zeroTo60": 6.9, "topSpeed": 99, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 200, "chargingTime10to80Minutes": 26 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 145.8, "towingCapacityLbs": 0, "curbWeightLbs": 5932 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "IQ.Drive (adaptive cruise, lane keeping)" },
    "meta": { "imageUrl": "/images/vehicles/2024-volkswagen-id-buzz.jpg", "manufacturerUrl": "https://www.vw.com/en/models/id-buzz.html", "availabilityStatus": "Available", "dataSource": "VW.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "Iconic retro van styling with modern EV tech. 7-passenger seating, 145.8 cu ft cargo." }
  },
  {
    "id": "2022-lucid-air-dream-edition-range",
    "year": 2022,
    "make": "Lucid",
    "model": "Air",
    "trim": "Dream Edition Range",
    "slug": "2022-lucid-air-dream-edition-range",
    "pricing": { "msrpBase": 169000, "msrpMax": 174000 },
    "range": { "epaRangeMiles": 520, "batteryCapacityKwh": 118, "efficiencyMPGe": 140, "efficiencyKwhPer100Mi": 24.1 },
    "performance": { "horsepower": 933, "torque": 885, "zeroTo60": 2.5, "topSpeed": 168, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 300, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.4, "towingCapacityLbs": 0, "curbWeightLbs": 5200 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2022-lucid-air-dream-edition-range.jpg", "manufacturerUrl": "https://lucidmotors.com/air", "availabilityStatus": "Discontinued", "dataSource": "LucidMotors.com, Car and Driver, Wikipedia", "lastVerified": "2025-12-02", "notes": "2022 Lucid Air Dream Edition Range: First production year. 520 mi range - record-breaking at launch. 933 HP dual-motor AWD. Limited production - now discontinued." }
  },
  {
    "id": "2022-lucid-air-dream-edition-performance",
    "year": 2022,
    "make": "Lucid",
    "model": "Air",
    "trim": "Dream Edition Performance",
    "slug": "2022-lucid-air-dream-edition-performance",
    "pricing": { "msrpBase": 169000, "msrpMax": 174000 },
    "range": { "epaRangeMiles": 471, "batteryCapacityKwh": 118, "efficiencyMPGe": 131, "efficiencyKwhPer100Mi": 25.7 },
    "performance": { "horsepower": 1111, "torque": 921, "zeroTo60": 2.5, "topSpeed": 168, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 300, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.4, "towingCapacityLbs": 0, "curbWeightLbs": 5200 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2022-lucid-air-dream-edition-performance.jpg", "manufacturerUrl": "https://lucidmotors.com/air", "availabilityStatus": "Discontinued", "dataSource": "LucidMotors.com, Car and Driver, Wikipedia", "lastVerified": "2025-12-02", "notes": "2022 Lucid Air Dream Edition Performance: 1111 HP - most powerful luxury sedan at launch. 0-60 in 2.5s, 471 mi range. Limited production - now discontinued." }
  },
  {
    "id": "2022-lucid-air-grand-touring",
    "year": 2022,
    "make": "Lucid",
    "model": "Air",
    "trim": "Grand Touring",
    "slug": "2022-lucid-air-grand-touring",
    "pricing": { "msrpBase": 138000, "msrpMax": 143000 },
    "range": { "epaRangeMiles": 516, "batteryCapacityKwh": 118, "efficiencyMPGe": 135, "efficiencyKwhPer100Mi": 25.0 },
    "performance": { "horsepower": 819, "torque": 885, "zeroTo60": 3.0, "topSpeed": 168, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 300, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.4, "towingCapacityLbs": 0, "curbWeightLbs": 5200 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2022-lucid-air-grand-touring.jpg", "manufacturerUrl": "https://lucidmotors.com/air-grand-touring", "availabilityStatus": "Available", "dataSource": "LucidMotors.com, Car and Driver", "lastVerified": "2025-12-02", "notes": "2022 Lucid Air Grand Touring: 819 HP, 516 mi range. 118 kWh battery, dual-motor AWD. First full production year." }
  },
  {
    "id": "2023-lucid-air-pure",
    "year": 2023,
    "make": "Lucid",
    "model": "Air",
    "trim": "Pure",
    "slug": "2023-lucid-air-pure",
    "pricing": { "msrpBase": 87400, "msrpMax": 92400 },
    "range": { "epaRangeMiles": 419, "batteryCapacityKwh": 88, "efficiencyMPGe": 140, "efficiencyKwhPer100Mi": 24.1 },
    "performance": { "horsepower": 480, "torque": 406, "zeroTo60": 4.5, "topSpeed": 124, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 200, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.4, "towingCapacityLbs": 0, "curbWeightLbs": 4564 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2023-lucid-air-pure.jpg", "manufacturerUrl": "https://lucidmotors.com/air-pure", "availabilityStatus": "Available", "dataSource": "LucidMotors.com, Cars.com", "lastVerified": "2025-12-02", "notes": "2023 Lucid Air Pure: Entry-level trim introduced. 480 HP RWD, 419 mi range with 88 kWh battery. Most efficient EV sedan." }
  },
  {
    "id": "2023-lucid-air-touring",
    "year": 2023,
    "make": "Lucid",
    "model": "Air",
    "trim": "Touring",
    "slug": "2023-lucid-air-touring",
    "pricing": { "msrpBase": 107400, "msrpMax": 112400 },
    "range": { "epaRangeMiles": 425, "batteryCapacityKwh": 92, "efficiencyMPGe": 135, "efficiencyKwhPer100Mi": 25.0 },
    "performance": { "horsepower": 620, "torque": 885, "zeroTo60": 3.4, "topSpeed": 140, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.4, "towingCapacityLbs": 0, "curbWeightLbs": 5050 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2023-lucid-air-touring.jpg", "manufacturerUrl": "https://lucidmotors.com/air-touring", "availabilityStatus": "Available", "dataSource": "LucidMotors.com, Cars.com", "lastVerified": "2025-12-02", "notes": "2023 Lucid Air Touring: 620 HP dual-motor AWD, 425 mi range. Mid-level performance trim with 0-60 in 3.4s." }
  },
  {
    "id": "2023-lucid-air-grand-touring",
    "year": 2023,
    "make": "Lucid",
    "model": "Air",
    "trim": "Grand Touring",
    "slug": "2023-lucid-air-grand-touring",
    "pricing": { "msrpBase": 126000, "msrpMax": 131000 },
    "range": { "epaRangeMiles": 516, "batteryCapacityKwh": 118, "efficiencyMPGe": 135, "efficiencyKwhPer100Mi": 25.0 },
    "performance": { "horsepower": 819, "torque": 885, "zeroTo60": 3.0, "topSpeed": 168, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 300, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.4, "towingCapacityLbs": 0, "curbWeightLbs": 5200 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2023-lucid-air-grand-touring.jpg", "manufacturerUrl": "https://lucidmotors.com/air-grand-touring", "availabilityStatus": "Available", "dataSource": "LucidMotors.com, Cars.com", "lastVerified": "2025-12-02", "notes": "2023 Lucid Air Grand Touring: 819 HP, 516 mi range - longest range EV sedan. 118 kWh battery, 168 mph top speed." }
  },
  {
    "id": "2023-lucid-air-sapphire",
    "year": 2023,
    "make": "Lucid",
    "model": "Air",
    "trim": "Sapphire",
    "slug": "2023-lucid-air-sapphire",
    "pricing": { "msrpBase": 249000, "msrpMax": 254000 },
    "range": { "epaRangeMiles": 427, "batteryCapacityKwh": 118, "efficiencyMPGe": 112, "efficiencyKwhPer100Mi": 30.1 },
    "performance": { "horsepower": 1234, "torque": 1430, "zeroTo60": 1.89, "topSpeed": 205, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 300, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.4, "towingCapacityLbs": 0, "curbWeightLbs": 5300 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2023-lucid-air-sapphire.jpg", "manufacturerUrl": "https://lucidmotors.com/air-sapphire", "availabilityStatus": "Available", "dataSource": "LucidMotors.com, Motor Trend", "lastVerified": "2025-12-02", "notes": "2023 Lucid Air Sapphire: New tri-motor hypercar. 1234 HP, 0-60 in 1.89s, 205 mph top speed. Most powerful luxury sedan ever made." }
  },
  {
    "id": "2024-lucid-air-pure",
    "year": 2024,
    "make": "Lucid",
    "model": "Air",
    "trim": "Pure",
    "slug": "2024-lucid-air-pure",
    "pricing": { "msrpBase": 69900, "msrpMax": 74900 },
    "range": { "epaRangeMiles": 420, "batteryCapacityKwh": 84, "efficiencyMPGe": 146, "efficiencyKwhPer100Mi": 23.1 },
    "performance": { "horsepower": 430, "torque": 406, "zeroTo60": 4.5, "topSpeed": 124, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 200, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.4, "towingCapacityLbs": 0, "curbWeightLbs": 4564 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2024-lucid-air-pure.jpg", "manufacturerUrl": "https://lucidmotors.com/air-pure", "availabilityStatus": "Available", "dataSource": "LucidMotors.com, Lucid Owners Forum", "lastVerified": "2025-12-02", "notes": "2024 Lucid Air Pure: Reduced battery to 84 kWh, improved to 420 mi range. 146 MPGe - most efficient sedan. New RWD base model." }
  },
  {
    "id": "2024-lucid-air-touring",
    "year": 2024,
    "make": "Lucid",
    "model": "Air",
    "trim": "Touring",
    "slug": "2024-lucid-air-touring",
    "pricing": { "msrpBase": 78900, "msrpMax": 83900 },
    "range": { "epaRangeMiles": 411, "batteryCapacityKwh": 92, "efficiencyMPGe": 135, "efficiencyKwhPer100Mi": 25.0 },
    "performance": { "horsepower": 620, "torque": 885, "zeroTo60": 3.0, "topSpeed": 140, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.4, "towingCapacityLbs": 0, "curbWeightLbs": 5050 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2024-lucid-air-touring.jpg", "manufacturerUrl": "https://lucidmotors.com/air-touring", "availabilityStatus": "Available", "dataSource": "LucidMotors.com, Lucid Owners Forum", "lastVerified": "2025-12-02", "notes": "2024 Lucid Air Touring: 620 HP AWD, 411 mi range (reduced from 425 mi due to EPA test changes). 0-60 in 3.0s." }
  },
  {
    "id": "2024-lucid-air-grand-touring",
    "year": 2024,
    "make": "Lucid",
    "model": "Air",
    "trim": "Grand Touring",
    "slug": "2024-lucid-air-grand-touring",
    "pricing": { "msrpBase": 110900, "msrpMax": 115900 },
    "range": { "epaRangeMiles": 516, "batteryCapacityKwh": 118, "efficiencyMPGe": 135, "efficiencyKwhPer100Mi": 25.0 },
    "performance": { "horsepower": 819, "torque": 885, "zeroTo60": 3.0, "topSpeed": 168, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.4, "towingCapacityLbs": 0, "curbWeightLbs": 5250 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2024-lucid-air-grand-touring.jpg", "manufacturerUrl": "https://lucidmotors.com/air-grand-touring", "availabilityStatus": "Available", "dataSource": "LucidMotors.com", "lastVerified": "2025-12-02", "notes": "2024 Lucid Air Grand Touring: 819 HP, 516 mi range - longest range EV sedan. 118 kWh battery, 168 mph top speed." }
  },
  {
    "id": "2024-lucid-air-sapphire",
    "year": 2024,
    "make": "Lucid",
    "model": "Air",
    "trim": "Sapphire",
    "slug": "2024-lucid-air-sapphire",
    "pricing": { "msrpBase": 249000, "msrpMax": 254000 },
    "range": { "epaRangeMiles": 427, "batteryCapacityKwh": 118, "efficiencyMPGe": 112, "efficiencyKwhPer100Mi": 30.1 },
    "performance": { "horsepower": 1234, "torque": 1430, "zeroTo60": 1.89, "topSpeed": 205, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 300, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.4, "towingCapacityLbs": 0, "curbWeightLbs": 5300 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2024-lucid-air-sapphire.jpg", "manufacturerUrl": "https://lucidmotors.com/air-sapphire", "availabilityStatus": "Available", "dataSource": "LucidMotors.com", "lastVerified": "2025-12-02", "notes": "2024 Lucid Air Sapphire: 1234 HP tri-motor hypercar. 0-60 in 1.89s, 205 mph top speed. Most powerful luxury sedan." }
  },
  {
    "id": "2025-lucid-air-pure",
    "year": 2025,
    "make": "Lucid",
    "model": "Air",
    "trim": "Pure",
    "slug": "2025-lucid-air-pure",
    "pricing": { "msrpBase": 69900, "msrpMax": 74900 },
    "range": { "epaRangeMiles": 419, "batteryCapacityKwh": 84, "efficiencyMPGe": 146, "efficiencyKwhPer100Mi": 23.1 },
    "performance": { "horsepower": 430, "torque": 406, "zeroTo60": 4.5, "topSpeed": 124, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 200, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.4, "towingCapacityLbs": 0, "curbWeightLbs": 4564 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2025-lucid-air-pure.jpg", "manufacturerUrl": "https://lucidmotors.com/air-pure", "availabilityStatus": "Available", "dataSource": "LucidMotors.com official specs", "lastVerified": "2025-12-01", "notes": "Lucid Air Pure: 419 mi range, 146 MPGe efficiency. Most efficient EV sedan with 84 kWh battery and 430 HP." }
  },
  {
    "id": "2025-lucid-air-touring",
    "year": 2025,
    "make": "Lucid",
    "model": "Air",
    "trim": "Touring",
    "slug": "2025-lucid-air-touring",
    "pricing": { "msrpBase": 78900, "msrpMax": 83900 },
    "range": { "epaRangeMiles": 406, "batteryCapacityKwh": 92, "efficiencyMPGe": 135, "efficiencyKwhPer100Mi": 25.0 },
    "performance": { "horsepower": 620, "torque": 885, "zeroTo60": 3.0, "topSpeed": 140, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.4, "towingCapacityLbs": 0, "curbWeightLbs": 5050 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2025-lucid-air-touring.jpg", "manufacturerUrl": "https://lucidmotors.com/air-touring", "availabilityStatus": "Available", "dataSource": "LucidMotors.com official specs", "lastVerified": "2025-12-01", "notes": "Lucid Air Touring: 620 HP dual-motor AWD, 406 mi range. 0-60 in 3.0 seconds with 92 kWh battery." }
  },
  {
    "id": "2025-lucid-air-grand-touring",
    "year": 2025,
    "make": "Lucid",
    "model": "Air",
    "trim": "Grand Touring",
    "slug": "2025-lucid-air-grand-touring",
    "pricing": { "msrpBase": 110900, "msrpMax": 115900 },
    "range": { "epaRangeMiles": 512, "batteryCapacityKwh": 118, "efficiencyMPGe": 135, "efficiencyKwhPer100Mi": 25.0 },
    "performance": { "horsepower": 819, "torque": 885, "zeroTo60": 3.0, "topSpeed": 168, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.4, "towingCapacityLbs": 0, "curbWeightLbs": 5250 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2025-lucid-air-grand-touring.jpg", "manufacturerUrl": "https://lucidmotors.com/air-grand-touring", "availabilityStatus": "Available", "dataSource": "LucidMotors.com official specs", "lastVerified": "2025-12-01", "notes": "Lucid Air Grand Touring: 819 HP, 512 mi range - longest range EV sedan. 118 kWh battery, 168 mph top speed." }
  },
  {
    "id": "2025-lucid-air-sapphire",
    "year": 2025,
    "make": "Lucid",
    "model": "Air",
    "trim": "Sapphire",
    "slug": "2025-lucid-air-sapphire",
    "pricing": { "msrpBase": 249000, "msrpMax": 254000 },
    "range": { "epaRangeMiles": 427, "batteryCapacityKwh": 118, "efficiencyMPGe": 112, "efficiencyKwhPer100Mi": 30.1 },
    "performance": { "horsepower": 1234, "torque": 1430, "zeroTo60": 1.9, "topSpeed": 205, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 300, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.4, "towingCapacityLbs": 0, "curbWeightLbs": 5300 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2025-lucid-air-sapphire.jpg", "manufacturerUrl": "https://lucidmotors.com/air-sapphire", "availabilityStatus": "Available", "dataSource": "LucidMotors.com official specs", "lastVerified": "2025-12-01", "notes": "Lucid Air Sapphire: 1234 HP tri-motor hypercar. 0-60 in 1.9s, 205 mph top speed. Most powerful luxury sedan ever made." }
  },
  {
    "id": "2026-lucid-air-pure",
    "year": 2026,
    "make": "Lucid",
    "model": "Air",
    "trim": "Pure",
    "slug": "2026-lucid-air-pure",
    "pricing": { "msrpBase": 70900, "msrpMax": 75900 },
    "range": { "epaRangeMiles": 420, "batteryCapacityKwh": 84, "efficiencyMPGe": 146, "efficiencyKwhPer100Mi": 23.1 },
    "performance": { "horsepower": 430, "torque": 406, "zeroTo60": 4.3, "topSpeed": 124, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 200, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.4, "towingCapacityLbs": 0, "curbWeightLbs": 4564 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2026-lucid-air-pure.jpg", "manufacturerUrl": "https://lucidmotors.com/air-pure", "availabilityStatus": "Available", "dataSource": "LucidMotors.com official specs", "lastVerified": "2025-12-01", "notes": "2026 Lucid Air Pure: 420 mi range, 146 MPGe. Supercharger access with NACS adapter. 5 mi/kWh efficiency - most efficient sedan." }
  },
  {
    "id": "2026-lucid-air-touring",
    "year": 2026,
    "make": "Lucid",
    "model": "Air",
    "trim": "Touring",
    "slug": "2026-lucid-air-touring",
    "pricing": { "msrpBase": 79900, "msrpMax": 84900 },
    "range": { "epaRangeMiles": 406, "batteryCapacityKwh": 92, "efficiencyMPGe": 135, "efficiencyKwhPer100Mi": 25.0 },
    "performance": { "horsepower": 620, "torque": 885, "zeroTo60": 3.0, "topSpeed": 140, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.4, "towingCapacityLbs": 0, "curbWeightLbs": 5050 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2026-lucid-air-touring.jpg", "manufacturerUrl": "https://lucidmotors.com/air-touring", "availabilityStatus": "Available", "dataSource": "LucidMotors.com official specs", "lastVerified": "2025-12-01", "notes": "2026 Lucid Air Touring: 620 HP AWD, 406 mi range, 0-60 in 3.0s. Supercharger access with NACS adapter included." }
  },
  {
    "id": "2026-lucid-air-grand-touring",
    "year": 2026,
    "make": "Lucid",
    "model": "Air",
    "trim": "Grand Touring",
    "slug": "2026-lucid-air-grand-touring",
    "pricing": { "msrpBase": 114900, "msrpMax": 119900 },
    "range": { "epaRangeMiles": 512, "batteryCapacityKwh": 118, "efficiencyMPGe": 135, "efficiencyKwhPer100Mi": 25.0 },
    "performance": { "horsepower": 819, "torque": 885, "zeroTo60": 3.0, "topSpeed": 168, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.4, "towingCapacityLbs": 0, "curbWeightLbs": 5250 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2026-lucid-air-grand-touring.jpg", "manufacturerUrl": "https://lucidmotors.com/air-grand-touring", "availabilityStatus": "Available", "dataSource": "LucidMotors.com official specs", "lastVerified": "2025-12-01", "notes": "2026 Lucid Air Grand Touring: 819 HP, 512 mi range - longest range EV sedan. Supercharger access with NACS adapter." }
  },
  {
    "id": "2026-lucid-air-sapphire",
    "year": 2026,
    "make": "Lucid",
    "model": "Air",
    "trim": "Sapphire",
    "slug": "2026-lucid-air-sapphire",
    "pricing": { "msrpBase": 249000, "msrpMax": 254000 },
    "range": { "epaRangeMiles": 427, "batteryCapacityKwh": 118, "efficiencyMPGe": 112, "efficiencyKwhPer100Mi": 30.1 },
    "performance": { "horsepower": 1234, "torque": 1430, "zeroTo60": 1.9, "topSpeed": 205, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 300, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.4, "towingCapacityLbs": 0, "curbWeightLbs": 5300 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2026-lucid-air-sapphire.jpg", "manufacturerUrl": "https://lucidmotors.com/air-sapphire", "availabilityStatus": "Available", "dataSource": "LucidMotors.com official specs", "lastVerified": "2025-12-01", "notes": "2026 Lucid Air Sapphire: 1234 HP tri-motor, 0-60 in 1.9s, 205 mph. Most powerful luxury sedan ever. Supercharger access with NACS adapter." }
  },
  {
    "id": "2025-lucid-gravity-touring",
    "year": 2025,
    "make": "Lucid",
    "model": "Gravity",
    "trim": "Touring",
    "slug": "2025-lucid-gravity-touring",
    "pricing": { "msrpBase": 79900, "msrpMax": 84900 },
    "range": { "epaRangeMiles": 337, "batteryCapacityKwh": 89, "efficiencyMPGe": 111, "efficiencyKwhPer100Mi": 30.4 },
    "performance": { "horsepower": 560, "torque": 811, "zeroTo60": 3.8, "topSpeed": 155, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 400, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 48, "towingCapacityLbs": 0, "curbWeightLbs": 6100 },
    "features": { "hasHeatPump": false, "hasV2L": true, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2025-lucid-gravity-touring.jpg", "manufacturerUrl": "https://lucidmotors.com/gravity", "availabilityStatus": "Available", "dataSource": "LucidMotors.com, Car and Driver, Inside EVs", "lastVerified": "2025-12-02", "notes": "2025 Lucid Gravity Touring: Entry-level luxury SUV. 560 HP AWD, 337 mi range with 89 kWh battery. 400 kW fast charging - 200 mi in 15 min. 6-7 passenger seating." }
  },
  {
    "id": "2025-lucid-gravity-grand-touring",
    "year": 2025,
    "make": "Lucid",
    "model": "Gravity",
    "trim": "Grand Touring",
    "slug": "2025-lucid-gravity-grand-touring",
    "pricing": { "msrpBase": 94900, "msrpMax": 99900 },
    "range": { "epaRangeMiles": 450, "batteryCapacityKwh": 123, "efficiencyMPGe": 98, "efficiencyKwhPer100Mi": 34.4 },
    "performance": { "horsepower": 828, "torque": 909, "zeroTo60": 3.4, "topSpeed": 160, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 400, "chargingTime10to80Minutes": 20 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 48, "towingCapacityLbs": 0, "curbWeightLbs": 6150 },
    "features": { "hasHeatPump": false, "hasV2L": true, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2025-lucid-gravity-grand-touring.jpg", "manufacturerUrl": "https://lucidmotors.com/gravity", "availabilityStatus": "Available", "dataSource": "LucidMotors.com, Car and Driver, Electrek", "lastVerified": "2025-12-02", "notes": "2025 Lucid Gravity Grand Touring: 828 HP, 450 mi EPA range - longest range 3-row SUV. 123 kWh battery, 400 kW DC fast charging, 0-60 in 3.4s." }
  },
  {
    "id": "2026-lucid-gravity-touring",
    "year": 2026,
    "make": "Lucid",
    "model": "Gravity",
    "trim": "Touring",
    "slug": "2026-lucid-gravity-touring",
    "pricing": { "msrpBase": 79900, "msrpMax": 84900 },
    "range": { "epaRangeMiles": 337, "batteryCapacityKwh": 89, "efficiencyMPGe": 111, "efficiencyKwhPer100Mi": 30.4 },
    "performance": { "horsepower": 560, "torque": 811, "zeroTo60": 3.8, "topSpeed": 155, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 400, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 48, "towingCapacityLbs": 0, "curbWeightLbs": 6100 },
    "features": { "hasHeatPump": false, "hasV2L": true, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2026-lucid-gravity-touring.jpg", "manufacturerUrl": "https://lucidmotors.com/gravity", "availabilityStatus": "Available", "dataSource": "LucidMotors.com, Car and Driver, Inside EVs", "lastVerified": "2025-12-02", "notes": "2026 Lucid Gravity Touring: 560 HP AWD, 337 mi range, 400 kW DC fast charging. NACS adapter included for Supercharger access. 6-7 passenger seating." }
  },
  {
    "id": "2026-lucid-gravity-grand-touring",
    "year": 2026,
    "make": "Lucid",
    "model": "Gravity",
    "trim": "Grand Touring",
    "slug": "2026-lucid-gravity-grand-touring",
    "pricing": { "msrpBase": 94900, "msrpMax": 99900 },
    "range": { "epaRangeMiles": 450, "batteryCapacityKwh": 123, "efficiencyMPGe": 98, "efficiencyKwhPer100Mi": 34.4 },
    "performance": { "horsepower": 828, "torque": 909, "zeroTo60": 3.4, "topSpeed": 160, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 400, "chargingTime10to80Minutes": 20 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 48, "towingCapacityLbs": 0, "curbWeightLbs": 6150 },
    "features": { "hasHeatPump": false, "hasV2L": true, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2026-lucid-gravity-grand-touring.jpg", "manufacturerUrl": "https://lucidmotors.com/gravity", "availabilityStatus": "Available", "dataSource": "LucidMotors.com, Car and Driver, Electrek", "lastVerified": "2025-12-02", "notes": "2026 Lucid Gravity Grand Touring: 828 HP, 450 mi EPA range - longest range 3-row SUV. 123 kWh battery, NACS adapter for Supercharger access, 0-60 in 3.4s." }
  },
  {
    "id": "2026-toyota-bz-fwd-plus",
    "year": 2026,
    "make": "Toyota",
    "model": "bZ",
    "trim": "XLE FWD Plus",
    "slug": "2026-toyota-bz-fwd-plus",
    "pricing": { "msrpBase": 48000, "msrpMax": 52000 },
    "range": { "epaRangeMiles": 314, "batteryCapacityKwh": 74.7, "efficiencyMPGe": 120, "efficiencyKwhPer100Mi": 28.2 },
    "performance": { "horsepower": 221, "torque": 196, "zeroTo60": 7.1, "topSpeed": 100, "drivetrain": "FWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 32 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.7, "towingCapacityLbs": 1500, "curbWeightLbs": 4420 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Toyota Safety Sense 3.0" },
    "meta": { "imageUrl": "/images/vehicles/2026-toyota-bz.jpg", "manufacturerUrl": "https://www.toyota.com/bz", "availabilityStatus": "Available", "dataSource": "Toyota.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2026 Refresh: Renamed from bZ4X. Major improvements: 314 mi range (+62 mi), 74.7 kWh battery (from 71.4 kWh), 221 hp (from 201 hp), NACS charging (was CCS1), improved fast charging to 150 kW. Built on e-TNGA platform (shares tech with Subaru Solterra). 2023-2025 models sold as 'bZ4X' with CCS1 connector." }
  },
  {
    "id": "2025-toyota-bz4x-xle-fwd",
    "year": 2025,
    "make": "Toyota",
    "model": "bZ",
    "trim": "XLE FWD (bZ4X)",
    "slug": "2025-toyota-bz4x-xle-fwd",
    "pricing": { "msrpBase": 38465, "msrpMax": 42000 },
    "range": { "epaRangeMiles": 252, "batteryCapacityKwh": 71.4, "efficiencyMPGe": 132, "efficiencyKwhPer100Mi": 25.6 },
    "performance": { "horsepower": 201, "torque": 196, "zeroTo60": 7.5, "topSpeed": 100, "drivetrain": "FWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 6.6, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 32 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.7, "towingCapacityLbs": 1500, "curbWeightLbs": 4250 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Toyota Safety Sense 2.5+" },
    "meta": { "imageUrl": "/images/vehicles/2025-toyota-bz4x.jpg", "manufacturerUrl": "https://www.toyota.com/bz4x", "availabilityStatus": "Available", "dataSource": "Toyota.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 bZ4X (pre-refresh): Major price cut to $38,465 (-$6,000 vs 2024). 252 mi FWD range, CCS1 connector. Renamed to 'bZ' for 2026 with NACS charging." }
  },
  {
    "id": "2025-toyota-bz4x-limited-awd",
    "year": 2025,
    "make": "Toyota",
    "model": "bZ",
    "trim": "Limited AWD (bZ4X)",
    "slug": "2025-toyota-bz4x-limited-awd",
    "pricing": { "msrpBase": 43195, "msrpMax": 46500 },
    "range": { "epaRangeMiles": 222, "batteryCapacityKwh": 72.8, "efficiencyMPGe": 114, "efficiencyKwhPer100Mi": 29.6 },
    "performance": { "horsepower": 214, "torque": 248, "zeroTo60": 6.9, "topSpeed": 100, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 6.6, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 35 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.7, "towingCapacityLbs": 1500, "curbWeightLbs": 4420 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Toyota Safety Sense 2.5+" },
    "meta": { "imageUrl": "/images/vehicles/2025-toyota-bz4x.jpg", "manufacturerUrl": "https://www.toyota.com/bz4x", "availabilityStatus": "Available", "dataSource": "Toyota.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 bZ4X Limited AWD: Dual motor with 214 hp, 222 mi range. Includes premium features, heated seats, power liftgate. Price reduced $5,380 from 2024." }
  },
  {
    "id": "2024-toyota-bz4x-xle-fwd",
    "year": 2024,
    "make": "Toyota",
    "model": "bZ",
    "trim": "XLE FWD (bZ4X)",
    "slug": "2024-toyota-bz4x-xle-fwd",
    "pricing": { "msrpBase": 44420, "msrpMax": 47000 },
    "range": { "epaRangeMiles": 252, "batteryCapacityKwh": 71.4, "efficiencyMPGe": 132, "efficiencyKwhPer100Mi": 25.6 },
    "performance": { "horsepower": 201, "torque": 196, "zeroTo60": 7.5, "topSpeed": 100, "drivetrain": "FWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 6.6, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 32 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.7, "towingCapacityLbs": 1500, "curbWeightLbs": 4250 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Toyota Safety Sense 2.5+" },
    "meta": { "imageUrl": "/images/vehicles/2024-toyota-bz4x.jpg", "manufacturerUrl": "https://www.toyota.com/bz4x", "availabilityStatus": "Available", "dataSource": "Toyota.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2024 bZ4X: CCS1 connector, 252 mi FWD range. Named bZ4X (2023-2025), renamed to 'bZ' for 2026. Built on e-TNGA platform with Subaru." }
  },
  {
    "id": "2023-toyota-bz4x-xle-awd",
    "year": 2023,
    "make": "Toyota",
    "model": "bZ",
    "trim": "XLE AWD (bZ4X)",
    "slug": "2023-toyota-bz4x-xle-awd",
    "pricing": { "msrpBase": 44080, "msrpMax": 46500 },
    "range": { "epaRangeMiles": 228, "batteryCapacityKwh": 72.8, "efficiencyMPGe": 115, "efficiencyKwhPer100Mi": 29.3 },
    "performance": { "horsepower": 214, "torque": 248, "zeroTo60": 6.9, "topSpeed": 100, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 6.6, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 35 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.7, "towingCapacityLbs": 1500, "curbWeightLbs": 4420 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Toyota Safety Sense 2.5+" },
    "meta": { "imageUrl": "/images/vehicles/2023-toyota-bz4x.jpg", "manufacturerUrl": "https://www.toyota.com/bz4x", "availabilityStatus": "Available", "dataSource": "Toyota.com, InsideEVs", "lastVerified": "2025-11-29", "notes": "2023 bZ4X: Toyota's first mass-market EV. Dual motor AWD, 228 mi range, CCS1 connector. Shares e-TNGA platform with Subaru Solterra." }
  },
  {
    "id": "2026-toyota-bz-xle-fwd",
    "year": 2026,
    "make": "Toyota",
    "model": "bZ",
    "trim": "XLE FWD",
    "slug": "2026-toyota-bz-xle-fwd",
    "pricing": { "msrpBase": 42000, "msrpMax": 44000 },
    "range": { "epaRangeMiles": 236, "batteryCapacityKwh": 57.7, "efficiencyMPGe": 128, "efficiencyKwhPer100Mi": 26.3 },
    "performance": { "horsepower": 168, "torque": 184, "zeroTo60": 8.2, "topSpeed": 100, "drivetrain": "FWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.7, "towingCapacityLbs": 1500, "curbWeightLbs": 4100 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Toyota Safety Sense 3.0" },
    "meta": { "imageUrl": "/images/vehicles/2026-toyota-bz.jpg", "manufacturerUrl": "https://www.toyota.com/bz", "availabilityStatus": "Available", "dataSource": "Toyota.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2026 bZ XLE FWD (base): Entry trim with smaller 57.7 kWh battery, 236 mi range, 168 hp. NACS charging standard." }
  },
  {
    "id": "2026-toyota-bz-limited-fwd",
    "year": 2026,
    "make": "Toyota",
    "model": "bZ",
    "trim": "Limited FWD",
    "slug": "2026-toyota-bz-limited-fwd",
    "pricing": { "msrpBase": 49500, "msrpMax": 51500 },
    "range": { "epaRangeMiles": 299, "batteryCapacityKwh": 74.7, "efficiencyMPGe": 116, "efficiencyKwhPer100Mi": 29.1 },
    "performance": { "horsepower": 221, "torque": 196, "zeroTo60": 7.1, "topSpeed": 100, "drivetrain": "FWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 32 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.7, "towingCapacityLbs": 1500, "curbWeightLbs": 4420 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Toyota Safety Sense 3.0" },
    "meta": { "imageUrl": "/images/vehicles/2026-toyota-bz.jpg", "manufacturerUrl": "https://www.toyota.com/bz", "availabilityStatus": "Available", "dataSource": "Toyota.com, Motor Trend", "lastVerified": "2025-11-29", "notes": "2026 bZ Limited FWD: 74.7 kWh battery, 299 mi range (lower than Plus due to 20-inch wheels), 221 hp, premium interior features." }
  },
  {
    "id": "2026-toyota-bz-xle-awd",
    "year": 2026,
    "make": "Toyota",
    "model": "bZ",
    "trim": "XLE AWD",
    "slug": "2026-toyota-bz-xle-awd",
    "pricing": { "msrpBase": 50000, "msrpMax": 52000 },
    "range": { "epaRangeMiles": 288, "batteryCapacityKwh": 74.7, "efficiencyMPGe": 109, "efficiencyKwhPer100Mi": 30.9 },
    "performance": { "horsepower": 338, "torque": 332, "zeroTo60": 4.9, "topSpeed": 100, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 32 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.7, "towingCapacityLbs": 1500, "curbWeightLbs": 4640 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Toyota Safety Sense 3.0" },
    "meta": { "imageUrl": "/images/vehicles/2026-toyota-bz.jpg", "manufacturerUrl": "https://www.toyota.com/bz", "availabilityStatus": "Available", "dataSource": "Toyota.com, Motor Trend", "lastVerified": "2025-11-29", "notes": "2026 bZ XLE AWD: Dual motor with 338 hp, 288 mi range, 4.9s 0-60. Significant performance upgrade over FWD models." }
  },
  {
    "id": "2026-toyota-bz-limited-awd",
    "year": 2026,
    "make": "Toyota",
    "model": "bZ",
    "trim": "Limited AWD",
    "slug": "2026-toyota-bz-limited-awd",
    "pricing": { "msrpBase": 51500, "msrpMax": 53500 },
    "range": { "epaRangeMiles": 278, "batteryCapacityKwh": 74.7, "efficiencyMPGe": 107, "efficiencyKwhPer100Mi": 31.5 },
    "performance": { "horsepower": 338, "torque": 332, "zeroTo60": 4.9, "topSpeed": 100, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 32 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.7, "towingCapacityLbs": 1500, "curbWeightLbs": 4640 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Toyota Safety Sense 3.0" },
    "meta": { "imageUrl": "/images/vehicles/2026-toyota-bz.jpg", "manufacturerUrl": "https://www.toyota.com/bz", "availabilityStatus": "Available", "dataSource": "Toyota.com, Motor Trend", "lastVerified": "2025-11-29", "notes": "2026 bZ Limited AWD: Top trim with 338 hp dual motor, 278 mi range, premium features, heated seats, power liftgate, 4.9s 0-60." }
  },
  {
    "id": "2024-polestar-2-single-motor",
    "year": 2024,
    "make": "Polestar",
    "model": "2",
    "trim": "Long Range Single Motor",
    "slug": "2024-polestar-2-single-motor",
    "pricing": { "msrpBase": 49900, "msrpMax": 54900 },
    "range": { "epaRangeMiles": 320, "batteryCapacityKwh": 82, "efficiencyMPGe": 105, "efficiencyKwhPer100Mi": 32.1 },
    "performance": { "horsepower": 299, "torque": 361, "zeroTo60": 5.9, "topSpeed": 127, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 205, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 15.5, "towingCapacityLbs": 0, "curbWeightLbs": 4520 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2024-polestar-2.jpg", "manufacturerUrl": "https://www.polestar.com/us/polestar-2", "availabilityStatus": "Available", "dataSource": "Polestar.com official specs", "lastVerified": "2025-12-01", "notes": "2024 Polestar 2 Single Motor: 299 HP RWD, 320 mi range. 82 kWh battery. Most efficient configuration." }
  },
  {
    "id": "2024-polestar-2-dual-motor",
    "year": 2024,
    "make": "Polestar",
    "model": "2",
    "trim": "Long Range Dual Motor",
    "slug": "2024-polestar-2-dual-motor",
    "pricing": { "msrpBase": 55300, "msrpMax": 60300 },
    "range": { "epaRangeMiles": 276, "batteryCapacityKwh": 78, "efficiencyMPGe": 94, "efficiencyKwhPer100Mi": 35.9 },
    "performance": { "horsepower": 421, "torque": 546, "zeroTo60": 4.3, "topSpeed": 127, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 155, "chargingTime10to80Minutes": 32 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 15.5, "towingCapacityLbs": 0, "curbWeightLbs": 4680 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2024-polestar-2.jpg", "manufacturerUrl": "https://www.polestar.com/us/polestar-2", "availabilityStatus": "Available", "dataSource": "Polestar.com official specs", "lastVerified": "2025-12-01", "notes": "2024 Polestar 2 Dual Motor: 421 HP AWD, 276 mi range. 78 kWh battery with 0-60 in 4.3 seconds." }
  },
  {
    "id": "2024-polestar-2-performance",
    "year": 2024,
    "make": "Polestar",
    "model": "2",
    "trim": "Dual Motor Performance",
    "slug": "2024-polestar-2-performance",
    "pricing": { "msrpBase": 64400, "msrpMax": 69400 },
    "range": { "epaRangeMiles": 247, "batteryCapacityKwh": 78, "efficiencyMPGe": 87, "efficiencyKwhPer100Mi": 38.8 },
    "performance": { "horsepower": 455, "torque": 546, "zeroTo60": 4.1, "topSpeed": 127, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 155, "chargingTime10to80Minutes": 32 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 15.5, "towingCapacityLbs": 0, "curbWeightLbs": 4740 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2024-polestar-2.jpg", "manufacturerUrl": "https://www.polestar.com/us/polestar-2", "availabilityStatus": "Available", "dataSource": "Polestar.com official specs", "lastVerified": "2025-12-01", "notes": "2024 Polestar 2 Performance: 455 HP, 0-60 in 4.1s. Performance pack with upgraded suspension and 22-inch wheels." }
  },
  {
    "id": "2025-polestar-2-awd",
    "year": 2025,
    "make": "Polestar",
    "model": "2",
    "trim": "Long Range Dual Motor Performance",
    "slug": "2025-polestar-2-awd",
    "pricing": { "msrpBase": 66200, "msrpMax": 71200 },
    "range": { "epaRangeMiles": 254, "batteryCapacityKwh": 79, "efficiencyMPGe": 91, "efficiencyKwhPer100Mi": 37.1 },
    "performance": { "horsepower": 469, "torque": 546, "zeroTo60": 4.0, "topSpeed": 127, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 205, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 15.5, "towingCapacityLbs": 0, "curbWeightLbs": 4740 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-polestar-2.jpg", "manufacturerUrl": "https://www.polestar.com/us/polestar-2", "availabilityStatus": "Available", "dataSource": "Polestar.com official specs", "lastVerified": "2025-12-01", "notes": "2025 Polestar 2: Single config, fully loaded. 469 HP AWD, 254 mi range. Includes all Performance, Plus, Pilot, and Climate packs standard." }
  },
  {
    "id": "2025-polestar-3-single-motor",
    "year": 2025,
    "make": "Polestar",
    "model": "3",
    "trim": "Long Range Single Motor",
    "slug": "2025-polestar-3-single-motor",
    "pricing": { "msrpBase": 67500, "msrpMax": 72500 },
    "range": { "epaRangeMiles": 350, "batteryCapacityKwh": 111, "efficiencyMPGe": 97, "efficiencyKwhPer100Mi": 34.8 },
    "performance": { "horsepower": 399, "torque": 361, "zeroTo60": 5.5, "topSpeed": 130, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 51.8, "towingCapacityLbs": 4400, "curbWeightLbs": 5520 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist with LiDAR" },
    "meta": { "imageUrl": "/images/vehicles/2025-polestar-3.jpg", "manufacturerUrl": "https://www.polestar.com/us/polestar-3", "availabilityStatus": "Available", "dataSource": "Polestar.com official specs", "lastVerified": "2025-12-01", "notes": "2025 Polestar 3 Single Motor: 399 HP RWD, 350 mi range. 111 kWh battery with LiDAR for advanced ADAS." }
  },
  {
    "id": "2025-polestar-3-dual-motor",
    "year": 2025,
    "make": "Polestar",
    "model": "3",
    "trim": "Long Range Dual Motor",
    "slug": "2025-polestar-3-dual-motor",
    "pricing": { "msrpBase": 73400, "msrpMax": 78400 },
    "range": { "epaRangeMiles": 315, "batteryCapacityKwh": 111, "efficiencyMPGe": 89, "efficiencyKwhPer100Mi": 37.9 },
    "performance": { "horsepower": 489, "torque": 620, "zeroTo60": 4.8, "topSpeed": 130, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 51.8, "towingCapacityLbs": 4400, "curbWeightLbs": 5620 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist with LiDAR" },
    "meta": { "imageUrl": "/images/vehicles/2025-polestar-3.jpg", "manufacturerUrl": "https://www.polestar.com/us/polestar-3", "availabilityStatus": "Available", "dataSource": "Polestar.com official specs", "lastVerified": "2025-12-01", "notes": "2025 Polestar 3 Dual Motor: 489 HP AWD, 315 mi range. 4,400 lb towing capacity with 111 kWh battery." }
  },
  {
    "id": "2025-polestar-3-performance",
    "year": 2025,
    "make": "Polestar",
    "model": "3",
    "trim": "Long Range Performance",
    "slug": "2025-polestar-3-performance",
    "pricing": { "msrpBase": 79400, "msrpMax": 84400 },
    "range": { "epaRangeMiles": 279, "batteryCapacityKwh": 111, "efficiencyMPGe": 81, "efficiencyKwhPer100Mi": 41.6 },
    "performance": { "horsepower": 510, "torque": 620, "zeroTo60": 4.5, "topSpeed": 130, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 51.8, "towingCapacityLbs": 4400, "curbWeightLbs": 5670 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist with LiDAR" },
    "meta": { "imageUrl": "/images/vehicles/2025-polestar-3.jpg", "manufacturerUrl": "https://www.polestar.com/us/polestar-3", "availabilityStatus": "Available", "dataSource": "Polestar.com official specs", "lastVerified": "2025-12-01", "notes": "2025 Polestar 3 Performance: 510 HP, 0-60 in 4.5s. Performance pack with 22-inch wheels and upgraded suspension." }
  },
  {
    "id": "2026-polestar-3-single-motor",
    "year": 2026,
    "make": "Polestar",
    "model": "3",
    "trim": "Single Motor",
    "slug": "2026-polestar-3-single-motor",
    "pricing": { "msrpBase": 68500, "msrpMax": 73500 },
    "range": { "epaRangeMiles": 348, "batteryCapacityKwh": 92, "efficiencyMPGe": 98, "efficiencyKwhPer100Mi": 34.4 },
    "performance": { "horsepower": 329, "torque": 361, "zeroTo60": 6.0, "topSpeed": 130, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 310, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 51.8, "towingCapacityLbs": 4400, "curbWeightLbs": 5450 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist with LiDAR" },
    "meta": { "imageUrl": "/images/vehicles/2026-polestar-3.jpg", "manufacturerUrl": "https://www.polestar.com/us/polestar-3", "availabilityStatus": "Available", "dataSource": "Polestar.com official specs", "lastVerified": "2025-12-01", "notes": "2026 Polestar 3 Single Motor: 800V architecture, native NACS. 310 kW charging (24 min 10-80%). 92 kWh battery, 348 mi range." }
  },
  {
    "id": "2026-polestar-3-dual-motor",
    "year": 2026,
    "make": "Polestar",
    "model": "3",
    "trim": "Dual Motor",
    "slug": "2026-polestar-3-dual-motor",
    "pricing": { "msrpBase": 74400, "msrpMax": 79400 },
    "range": { "epaRangeMiles": 310, "batteryCapacityKwh": 111, "efficiencyMPGe": 89, "efficiencyKwhPer100Mi": 37.9 },
    "performance": { "horsepower": 536, "torque": 620, "zeroTo60": 4.6, "topSpeed": 130, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 51.8, "towingCapacityLbs": 4400, "curbWeightLbs": 5620 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist with LiDAR" },
    "meta": { "imageUrl": "/images/vehicles/2026-polestar-3.jpg", "manufacturerUrl": "https://www.polestar.com/us/polestar-3", "availabilityStatus": "Available", "dataSource": "Polestar.com official specs", "lastVerified": "2025-12-01", "notes": "2026 Polestar 3 Dual Motor: 800V, native NACS, 536 HP AWD. 350 kW charging (22 min 10-80%). 111 kWh battery." }
  },
  {
    "id": "2026-polestar-3-performance",
    "year": 2026,
    "make": "Polestar",
    "model": "3",
    "trim": "Performance",
    "slug": "2026-polestar-3-performance",
    "pricing": { "msrpBase": 80400, "msrpMax": 85400 },
    "range": { "epaRangeMiles": 275, "batteryCapacityKwh": 111, "efficiencyMPGe": 81, "efficiencyKwhPer100Mi": 41.6 },
    "performance": { "horsepower": 671, "torque": 679, "zeroTo60": 4.2, "topSpeed": 130, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 51.8, "towingCapacityLbs": 4400, "curbWeightLbs": 5700 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist with LiDAR" },
    "meta": { "imageUrl": "/images/vehicles/2026-polestar-3.jpg", "manufacturerUrl": "https://www.polestar.com/us/polestar-3", "availabilityStatus": "Available", "dataSource": "Polestar.com official specs", "lastVerified": "2025-12-01", "notes": "2026 Polestar 3 Performance: 671 HP, 0-60 in 4.2s. 800V with native NACS, 350 kW charging. Most powerful Polestar SUV." }
  },
  {
    "id": "2024-audi-q4-etron-55-awd",
    "year": 2024,
    "make": "Audi",
    "model": "Q4 e-tron",
    "trim": "55 quattro",
    "slug": "2024-audi-q4-etron-55-awd",
    "pricing": { "msrpBase": 56800, "msrpMax": 60800 },
    "range": { "epaRangeMiles": 265, "batteryCapacityKwh": 82, "efficiencyMPGe": 100, "efficiencyKwhPer100Mi": 33.7 },
    "performance": { "horsepower": 335, "torque": 339, "zeroTo60": 5.0, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 175, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 62.2, "towingCapacityLbs": 2700, "curbWeightLbs": 5061 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Audi Pre Sense, Adaptive Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2024-audi-q4-etron.jpg", "manufacturerUrl": "https://www.audiusa.com/us/web/en/models/q4-e-tron.html", "availabilityStatus": "Available", "dataSource": "AudiUSA.com, InsideEVs", "lastVerified": "2025-11-29", "notes": "Q4 e-tron 55 quattro AWD. 82 kWh battery, 335 hp, 265 mi range. 175 kW DC fast charging." }
  },
  // Additional Audi vehicles (2024-2026) - 14 vehicles
  {
    "id": "2026-audi-q4-etron-45-rwd",
    "year": 2026,
    "make": "Audi",
    "model": "Q4 e-tron",
    "trim": "45",
    "slug": "2026-audi-q4-etron-45-rwd",
    "pricing": { "msrpBase": 50000, "msrpMax": 54000 },
    "range": { "epaRangeMiles": 288, "batteryCapacityKwh": 77, "efficiencyMPGe": 112, "efficiencyKwhPer100Mi": 30.1 },
    "performance": { "horsepower": 282, "torque": 339, "zeroTo60": 6.2, "topSpeed": 112, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 175, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 62.2, "towingCapacityLbs": 2200, "curbWeightLbs": 4900 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Audi Pre Sense, Adaptive Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2026-audi-q4-etron.jpg", "manufacturerUrl": "https://www.audiusa.com/us/web/en/models/q4-e-tron.html", "availabilityStatus": "Available", "dataSource": "Car and Driver, Motor Trend, Audi USA", "lastVerified": "2025-12-01", "notes": "2026 Q4 e-tron 45: RWD with 282 HP, 288 mi range. 77 kWh battery, excellent efficiency at 112 MPGe." }
  },
  {
    "id": "2026-audi-q4-etron-55-awd",
    "year": 2026,
    "make": "Audi",
    "model": "Q4 e-tron",
    "trim": "55 quattro",
    "slug": "2026-audi-q4-etron-55-awd",
    "pricing": { "msrpBase": 54000, "msrpMax": 58000 },
    "range": { "epaRangeMiles": 258, "batteryCapacityKwh": 77, "efficiencyMPGe": 104, "efficiencyKwhPer100Mi": 32.4 },
    "performance": { "horsepower": 335, "torque": 339, "zeroTo60": 5.0, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 175, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 62.2, "towingCapacityLbs": 2700, "curbWeightLbs": 5061 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Audi Pre Sense, Adaptive Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2026-audi-q4-etron.jpg", "manufacturerUrl": "https://www.audiusa.com/us/web/en/models/q4-e-tron.html", "availabilityStatus": "Available", "dataSource": "Car and Driver, Motor Trend, Audi USA", "lastVerified": "2025-12-01", "notes": "2026 Q4 e-tron 55 quattro: AWD with 335 HP, 5.0s 0-60. 258 mi range with dual-motor AWD." }
  },
  {
    "id": "2025-audi-q4-etron-45-rwd",
    "year": 2025,
    "make": "Audi",
    "model": "Q4 e-tron",
    "trim": "45",
    "slug": "2025-audi-q4-etron-45-rwd",
    "pricing": { "msrpBase": 49800, "msrpMax": 54000 },
    "range": { "epaRangeMiles": 288, "batteryCapacityKwh": 77, "efficiencyMPGe": 112, "efficiencyKwhPer100Mi": 30.1 },
    "performance": { "horsepower": 282, "torque": 339, "zeroTo60": 6.2, "topSpeed": 112, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 175, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 62.2, "towingCapacityLbs": 2200, "curbWeightLbs": 4900 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Audi Pre Sense, Adaptive Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2025-audi-q4-etron.jpg", "manufacturerUrl": "https://www.audiusa.com/us/web/en/models/q4-e-tron.html", "availabilityStatus": "Available", "dataSource": "Car and Driver, Motor Trend, Audi USA", "lastVerified": "2025-12-01", "notes": "2025 Q4 e-tron 45: RWD with 282 HP, 288 mi range. 77 kWh battery, 175 kW DC fast charging." }
  },
  {
    "id": "2025-audi-q4-etron-55-awd",
    "year": 2025,
    "make": "Audi",
    "model": "Q4 e-tron",
    "trim": "55 quattro",
    "slug": "2025-audi-q4-etron-55-awd",
    "pricing": { "msrpBase": 54000, "msrpMax": 58000 },
    "range": { "epaRangeMiles": 258, "batteryCapacityKwh": 77, "efficiencyMPGe": 104, "efficiencyKwhPer100Mi": 32.4 },
    "performance": { "horsepower": 335, "torque": 339, "zeroTo60": 5.0, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 175, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 62.2, "towingCapacityLbs": 2700, "curbWeightLbs": 5061 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Audi Pre Sense, Adaptive Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2025-audi-q4-etron.jpg", "manufacturerUrl": "https://www.audiusa.com/us/web/en/models/q4-e-tron.html", "availabilityStatus": "Available", "dataSource": "Car and Driver, Motor Trend, Audi USA", "lastVerified": "2025-12-01", "notes": "2025 Q4 e-tron 55 quattro: AWD with 335 HP, 5.0s 0-60. 258 mi range with dual-motor AWD." }
  },
  {
    "id": "2025-audi-etron-gt-s",
    "year": 2025,
    "make": "Audi",
    "model": "e-tron GT",
    "trim": "S e-tron GT",
    "slug": "2025-audi-etron-gt-s",
    "pricing": { "msrpBase": 105000, "msrpMax": 115000 },
    "range": { "epaRangeMiles": 300, "batteryCapacityKwh": 97, "efficiencyMPGe": 90, "efficiencyKwhPer100Mi": 37.4 },
    "performance": { "horsepower": 671, "torque": 546, "zeroTo60": 3.4, "topSpeed": 152, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 320, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 4, "cargoVolumeCuFt": 13, "towingCapacityLbs": 0, "curbWeightLbs": 5070 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Audi Driver Assistance" },
    "meta": { "imageUrl": "/images/vehicles/2025-audi-etron-gt.jpg", "manufacturerUrl": "https://www.audiusa.com/us/web/en/models/e-tron-gt.html", "availabilityStatus": "Available", "dataSource": "Car and Driver, Motor Trend, Audi USA", "lastVerified": "2025-12-01", "notes": "2025 e-tron GT S: 671 HP, 3.4s 0-60. Updated with 97 kWh battery, 320 kW charging (18 min 10-80%). 300 mi range." }
  },
  {
    "id": "2025-audi-rs-etron-gt",
    "year": 2025,
    "make": "Audi",
    "model": "e-tron GT",
    "trim": "RS e-tron GT",
    "slug": "2025-audi-rs-etron-gt",
    "pricing": { "msrpBase": 140000, "msrpMax": 150000 },
    "range": { "epaRangeMiles": 294, "batteryCapacityKwh": 97, "efficiencyMPGe": 87, "efficiencyKwhPer100Mi": 38.7 },
    "performance": { "horsepower": 845, "torque": 638, "zeroTo60": 2.8, "topSpeed": 155, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 320, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 4, "cargoVolumeCuFt": 13, "towingCapacityLbs": 0, "curbWeightLbs": 5100 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Audi Driver Assistance" },
    "meta": { "imageUrl": "/images/vehicles/2025-audi-rs-etron-gt.jpg", "manufacturerUrl": "https://www.audiusa.com/us/web/en/models/e-tron-gt.html", "availabilityStatus": "Available", "dataSource": "Car and Driver, Motor Trend, Audi USA", "lastVerified": "2025-12-01", "notes": "2025 RS e-tron GT: 845 HP, 2.8s 0-60. Performance variant with 97 kWh battery, 294 mi range. 320 kW fast charging." }
  },
  {
    "id": "2025-audi-rs-etron-gt-performance",
    "year": 2025,
    "make": "Audi",
    "model": "e-tron GT",
    "trim": "RS e-tron GT Performance",
    "slug": "2025-audi-rs-etron-gt-performance",
    "pricing": { "msrpBase": 155000, "msrpMax": 165000 },
    "range": { "epaRangeMiles": 278, "batteryCapacityKwh": 97, "efficiencyMPGe": 83, "efficiencyKwhPer100Mi": 40.6 },
    "performance": { "horsepower": 912, "torque": 701, "zeroTo60": 2.5, "topSpeed": 155, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 320, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 4, "cargoVolumeCuFt": 13, "towingCapacityLbs": 0, "curbWeightLbs": 5169 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Audi Driver Assistance" },
    "meta": { "imageUrl": "/images/vehicles/2025-audi-rs-etron-gt-performance.jpg", "manufacturerUrl": "https://www.audiusa.com/us/web/en/models/e-tron-gt.html", "availabilityStatus": "Available", "dataSource": "Car and Driver, Motor Trend, Audi USA", "lastVerified": "2025-12-01", "notes": "2025 RS e-tron GT Performance: 912 HP, 2.5s 0-60 (2.1s tested). Flagship performance sedan. 97 kWh battery, 278 mi range." }
  },
  {
    "id": "2026-audi-etron-gt-s",
    "year": 2026,
    "make": "Audi",
    "model": "e-tron GT",
    "trim": "S e-tron GT",
    "slug": "2026-audi-etron-gt-s",
    "pricing": { "msrpBase": 107000, "msrpMax": 117000 },
    "range": { "epaRangeMiles": 300, "batteryCapacityKwh": 97, "efficiencyMPGe": 90, "efficiencyKwhPer100Mi": 37.4 },
    "performance": { "horsepower": 671, "torque": 546, "zeroTo60": 3.4, "topSpeed": 152, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 320, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 4, "cargoVolumeCuFt": 13, "towingCapacityLbs": 0, "curbWeightLbs": 5070 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Audi Driver Assistance" },
    "meta": { "imageUrl": "/images/vehicles/2026-audi-etron-gt.jpg", "manufacturerUrl": "https://www.audiusa.com/us/web/en/models/e-tron-gt.html", "availabilityStatus": "Available", "dataSource": "Car and Driver, Motor Trend, Audi USA", "lastVerified": "2025-12-01", "notes": "2026 e-tron GT S: Minor updates. All-wheel steering now standard. 671 HP, 3.4s 0-60. 300 mi range with 97 kWh battery." }
  },
  {
    "id": "2026-audi-rs-etron-gt",
    "year": 2026,
    "make": "Audi",
    "model": "e-tron GT",
    "trim": "RS e-tron GT",
    "slug": "2026-audi-rs-etron-gt",
    "pricing": { "msrpBase": 142000, "msrpMax": 152000 },
    "range": { "epaRangeMiles": 294, "batteryCapacityKwh": 97, "efficiencyMPGe": 87, "efficiencyKwhPer100Mi": 38.7 },
    "performance": { "horsepower": 845, "torque": 638, "zeroTo60": 2.8, "topSpeed": 155, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 320, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 4, "cargoVolumeCuFt": 13, "towingCapacityLbs": 0, "curbWeightLbs": 5100 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Audi Driver Assistance" },
    "meta": { "imageUrl": "/images/vehicles/2026-audi-rs-etron-gt.jpg", "manufacturerUrl": "https://www.audiusa.com/us/web/en/models/e-tron-gt.html", "availabilityStatus": "Available", "dataSource": "Car and Driver, Motor Trend, Audi USA", "lastVerified": "2025-12-01", "notes": "2026 RS e-tron GT: 21-inch wheels now standard. 845 HP, 2.8s 0-60. 294 mi range. All-wheel steering standard." }
  },
  {
    "id": "2024-audi-etron-gt",
    "year": 2024,
    "make": "Audi",
    "model": "e-tron GT",
    "trim": "e-tron GT",
    "slug": "2024-audi-etron-gt",
    "pricing": { "msrpBase": 103895, "msrpMax": 110000 },
    "range": { "epaRangeMiles": 249, "batteryCapacityKwh": 83.7, "efficiencyMPGe": 82, "efficiencyKwhPer100Mi": 41.1 },
    "performance": { "horsepower": 522, "torque": 472, "zeroTo60": 3.9, "topSpeed": 152, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 270, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 4, "cargoVolumeCuFt": 13, "towingCapacityLbs": 0, "curbWeightLbs": 5060 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Audi Driver Assistance" },
    "meta": { "imageUrl": "/images/vehicles/2024-audi-etron-gt.jpg", "manufacturerUrl": "https://www.audiusa.com/us/web/en/models/e-tron-gt.html", "availabilityStatus": "Available", "dataSource": "Car and Driver, Motor Trend, Audi USA", "lastVerified": "2025-12-01", "notes": "2024 e-tron GT: 522 HP, 3.9s 0-60. 83.7 kWh battery, 249 mi range. 270 kW DC fast charging." }
  },
  {
    "id": "2024-audi-rs-etron-gt",
    "year": 2024,
    "make": "Audi",
    "model": "e-tron GT",
    "trim": "RS e-tron GT",
    "slug": "2024-audi-rs-etron-gt",
    "pricing": { "msrpBase": 143000, "msrpMax": 150000 },
    "range": { "epaRangeMiles": 249, "batteryCapacityKwh": 83.7, "efficiencyMPGe": 82, "efficiencyKwhPer100Mi": 41.1 },
    "performance": { "horsepower": 637, "torque": 612, "zeroTo60": 2.9, "topSpeed": 155, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 270, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 4, "cargoVolumeCuFt": 13, "towingCapacityLbs": 0, "curbWeightLbs": 5150 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Audi Driver Assistance" },
    "meta": { "imageUrl": "/images/vehicles/2024-audi-rs-etron-gt.jpg", "manufacturerUrl": "https://www.audiusa.com/us/web/en/models/e-tron-gt.html", "availabilityStatus": "Available", "dataSource": "Car and Driver, Motor Trend, Audi USA", "lastVerified": "2025-12-01", "notes": "2024 RS e-tron GT: 637 HP, 2.9s 0-60. Performance sedan with 83.7 kWh battery, 249 mi range. 270 kW charging." }
  },
  {
    "id": "2024-audi-q8-etron-suv",
    "year": 2024,
    "make": "Audi",
    "model": "Q8 e-tron",
    "trim": "Premium Plus",
    "slug": "2024-audi-q8-etron-suv",
    "pricing": { "msrpBase": 74400, "msrpMax": 82000 },
    "range": { "epaRangeMiles": 285, "batteryCapacityKwh": 106, "efficiencyMPGe": 85, "efficiencyKwhPer100Mi": 39.6 },
    "performance": { "horsepower": 402, "torque": 490, "zeroTo60": 5.4, "topSpeed": 124, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 170, "chargingTime10to80Minutes": 31 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 28.5, "towingCapacityLbs": 4000, "curbWeightLbs": 5962 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Audi Pre Sense, Adaptive Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2024-audi-q8-etron.jpg", "manufacturerUrl": "https://www.audiusa.com/us/web/en/models/q8-e-tron.html", "availabilityStatus": "Discontinued", "dataSource": "Car and Driver, Motor Trend, Audi USA", "lastVerified": "2025-12-01", "notes": "2024 Q8 e-tron SUV: 402 HP, 285 mi range. 106 kWh battery (114 kWh gross). Discontinued February 2025. 170 kW charging." }
  },
  {
    "id": "2024-audi-q8-etron-sportback",
    "year": 2024,
    "make": "Audi",
    "model": "Q8 e-tron Sportback",
    "trim": "Premium Plus",
    "slug": "2024-audi-q8-etron-sportback",
    "pricing": { "msrpBase": 77800, "msrpMax": 85000 },
    "range": { "epaRangeMiles": 296, "batteryCapacityKwh": 106, "efficiencyMPGe": 88, "efficiencyKwhPer100Mi": 38.3 },
    "performance": { "horsepower": 402, "torque": 490, "zeroTo60": 5.4, "topSpeed": 124, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 170, "chargingTime10to80Minutes": 31 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.2, "towingCapacityLbs": 4000, "curbWeightLbs": 5962 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Audi Pre Sense, Adaptive Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2024-audi-q8-etron-sportback.jpg", "manufacturerUrl": "https://www.audiusa.com/us/web/en/models/q8-e-tron.html", "availabilityStatus": "Discontinued", "dataSource": "Car and Driver, Motor Trend, Audi USA", "lastVerified": "2025-12-01", "notes": "2024 Q8 e-tron Sportback: Sloped roofline, 296 mi range (300 with Ultra package). 402 HP. Discontinued February 2025." }
  },
  {
    "id": "2024-audi-sq8-etron",
    "year": 2024,
    "make": "Audi",
    "model": "SQ8 e-tron",
    "trim": "Prestige",
    "slug": "2024-audi-sq8-etron",
    "pricing": { "msrpBase": 88000, "msrpMax": 95000 },
    "range": { "epaRangeMiles": 253, "batteryCapacityKwh": 106, "efficiencyMPGe": 78, "efficiencyKwhPer100Mi": 43.2 },
    "performance": { "horsepower": 496, "torque": 717, "zeroTo60": 4.5, "topSpeed": 130, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 170, "chargingTime10to80Minutes": 31 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 28.5, "towingCapacityLbs": 4000, "curbWeightLbs": 6100 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Audi Pre Sense, Adaptive Cruise" },
    "meta": { "imageUrl": "/images/vehicles/2024-audi-sq8-etron.jpg", "manufacturerUrl": "https://www.audiusa.com/us/web/en/models/q8-e-tron.html", "availabilityStatus": "Discontinued", "dataSource": "Car and Driver, Motor Trend, Audi USA", "lastVerified": "2025-12-01", "notes": "2024 SQ8 e-tron: Performance SUV with 496 HP, 4.5s 0-60. Three motors (one front, two rear). 253 mi range. Discontinued February 2025." }
  },
  {
    "id": "2024-porsche-taycan-base",
    "year": 2024,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "Base RWD",
    "slug": "2024-porsche-taycan-base",
    "pricing": { "msrpBase": 92550, "msrpMax": 102550 },
    "range": { "epaRangeMiles": 246, "batteryCapacityKwh": 93, "efficiencyMPGe": 79, "efficiencyKwhPer100Mi": 42.7 },
    "performance": { "horsepower": 402, "torque": 254, "zeroTo60": 5.1, "topSpeed": 143, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 270, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 12.9, "towingCapacityLbs": 0, "curbWeightLbs": 4740 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2024-porsche-taycan.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver, Motor Trend", "lastVerified": "2025-12-02", "notes": "2024 Taycan Base RWD: Entry-level with 402 HP, 246 mi EPA range. 93 kWh battery, 270 kW DC fast charging." }
  },
  {
    "id": "2024-porsche-taycan-4",
    "year": 2024,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "4 AWD",
    "slug": "2024-porsche-taycan-4",
    "pricing": { "msrpBase": 99650, "msrpMax": 109650 },
    "range": { "epaRangeMiles": 241, "batteryCapacityKwh": 93, "efficiencyMPGe": 77, "efficiencyKwhPer100Mi": 43.8 },
    "performance": { "horsepower": 469, "torque": 263, "zeroTo60": 4.6, "topSpeed": 143, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 270, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 12.9, "towingCapacityLbs": 0, "curbWeightLbs": 4960 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2024-porsche-taycan.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver", "lastVerified": "2025-12-02", "notes": "2024 Taycan 4 AWD: Dual-motor with 469 HP, 241 mi range. 0-60 in 4.6s." }
  },
  {
    "id": "2024-porsche-taycan-4s",
    "year": 2024,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "4S AWD",
    "slug": "2024-porsche-taycan-4s",
    "pricing": { "msrpBase": 113350, "msrpMax": 123350 },
    "range": { "epaRangeMiles": 235, "batteryCapacityKwh": 93, "efficiencyMPGe": 76, "efficiencyKwhPer100Mi": 44.4 },
    "performance": { "horsepower": 562, "torque": 479, "zeroTo60": 3.8, "topSpeed": 155, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 270, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 12.9, "towingCapacityLbs": 0, "curbWeightLbs": 5015 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2024-porsche-taycan-4s.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver", "lastVerified": "2025-12-02", "notes": "2024 Taycan 4S: 562 HP dual-motor AWD, 235 mi range. Performance-focused with 3.8s 0-60." }
  },
  {
    "id": "2024-porsche-taycan-gts",
    "year": 2024,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "GTS AWD",
    "slug": "2024-porsche-taycan-gts",
    "pricing": { "msrpBase": 140950, "msrpMax": 150950 },
    "range": { "epaRangeMiles": 246, "batteryCapacityKwh": 93, "efficiencyMPGe": 79, "efficiencyKwhPer100Mi": 42.7 },
    "performance": { "horsepower": 590, "torque": 626, "zeroTo60": 3.5, "topSpeed": 155, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 270, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 12.9, "towingCapacityLbs": 0, "curbWeightLbs": 5060 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2024-porsche-taycan-gts.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver", "lastVerified": "2025-12-02", "notes": "2024 Taycan GTS: Sport-focused 590 HP, 246 mi range with outstanding efficiency. 0-60 in 3.5s." }
  },
  {
    "id": "2024-porsche-taycan-turbo",
    "year": 2024,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "Turbo AWD",
    "slug": "2024-porsche-taycan-turbo",
    "pricing": { "msrpBase": 162450, "msrpMax": 172450 },
    "range": { "epaRangeMiles": 238, "batteryCapacityKwh": 93, "efficiencyMPGe": 76, "efficiencyKwhPer100Mi": 44.4 },
    "performance": { "horsepower": 670, "torque": 626, "zeroTo60": 3.0, "topSpeed": 161, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 270, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 12.9, "towingCapacityLbs": 0, "curbWeightLbs": 5140 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2024-porsche-taycan-turbo.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver", "lastVerified": "2025-12-02", "notes": "2024 Taycan Turbo: High-performance 670 HP, 0-60 in 3.0s, 161 mph top speed. 238 mi range." }
  },
  {
    "id": "2024-porsche-taycan-turbo-s",
    "year": 2024,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "Turbo S AWD",
    "slug": "2024-porsche-taycan-turbo-s",
    "pricing": { "msrpBase": 196550, "msrpMax": 206550 },
    "range": { "epaRangeMiles": 228, "batteryCapacityKwh": 93, "efficiencyMPGe": 73, "efficiencyKwhPer100Mi": 46.2 },
    "performance": { "horsepower": 750, "torque": 774, "zeroTo60": 2.6, "topSpeed": 161, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 270, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 12.9, "towingCapacityLbs": 0, "curbWeightLbs": 5200 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2024-porsche-taycan-turbo-s.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver, Motor Trend", "lastVerified": "2025-12-02", "notes": "2024 Taycan Turbo S: Flagship sedan with 750 HP, 0-60 in 2.6s. Peak performance with 161 mph top speed." }
  },
  {
    "id": "2024-porsche-taycan-4-cross-turismo",
    "year": 2024,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "4 Cross Turismo AWD",
    "slug": "2024-porsche-taycan-4-cross-turismo",
    "pricing": { "msrpBase": 101900, "msrpMax": 111900 },
    "range": { "epaRangeMiles": 235, "batteryCapacityKwh": 93, "efficiencyMPGe": 75, "efficiencyKwhPer100Mi": 45.0 },
    "performance": { "horsepower": 469, "torque": 263, "zeroTo60": 4.8, "topSpeed": 136, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 270, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 35.3, "towingCapacityLbs": 0, "curbWeightLbs": 5010 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2024-porsche-taycan-cross-turismo.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver", "lastVerified": "2025-12-02", "notes": "2024 Taycan 4 Cross Turismo: Wagon body with SUV cues, 469 HP AWD, 235 mi range. 35.3 cu ft cargo." }
  },
  {
    "id": "2024-porsche-taycan-4s-cross-turismo",
    "year": 2024,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "4S Cross Turismo AWD",
    "slug": "2024-porsche-taycan-4s-cross-turismo",
    "pricing": { "msrpBase": 118200, "msrpMax": 128200 },
    "range": { "epaRangeMiles": 227, "batteryCapacityKwh": 93, "efficiencyMPGe": 73, "efficiencyKwhPer100Mi": 46.2 },
    "performance": { "horsepower": 562, "torque": 479, "zeroTo60": 3.9, "topSpeed": 149, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 270, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 35.3, "towingCapacityLbs": 0, "curbWeightLbs": 5070 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2024-porsche-taycan-cross-turismo.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver", "lastVerified": "2025-12-02", "notes": "2024 Taycan 4S Cross Turismo: Performance wagon, 562 HP, 227 mi range. 0-60 in 3.9s with practical cargo space." }
  },
  {
    "id": "2024-porsche-taycan-turbo-cross-turismo",
    "year": 2024,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "Turbo Cross Turismo AWD",
    "slug": "2024-porsche-taycan-turbo-cross-turismo",
    "pricing": { "msrpBase": 163400, "msrpMax": 173400 },
    "range": { "epaRangeMiles": 229, "batteryCapacityKwh": 93, "efficiencyMPGe": 74, "efficiencyKwhPer100Mi": 45.6 },
    "performance": { "horsepower": 616, "torque": 626, "zeroTo60": 3.2, "topSpeed": 155, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 270, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 35.3, "towingCapacityLbs": 0, "curbWeightLbs": 5195 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2024-porsche-taycan-cross-turismo.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver", "lastVerified": "2025-12-02", "notes": "2024 Taycan Turbo Cross Turismo: High-performance wagon, 616 HP, 0-60 in 3.2s. Combines utility with speed." }
  },
  {
    "id": "2024-porsche-taycan-turbo-s-cross-turismo",
    "year": 2024,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "Turbo S Cross Turismo AWD",
    "slug": "2024-porsche-taycan-turbo-s-cross-turismo",
    "pricing": { "msrpBase": 197500, "msrpMax": 207500 },
    "range": { "epaRangeMiles": 220, "batteryCapacityKwh": 93, "efficiencyMPGe": 71, "efficiencyKwhPer100Mi": 47.5 },
    "performance": { "horsepower": 750, "torque": 774, "zeroTo60": 2.7, "topSpeed": 155, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 270, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 35.3, "towingCapacityLbs": 0, "curbWeightLbs": 5255 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2024-porsche-taycan-cross-turismo.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver", "lastVerified": "2025-12-02", "notes": "2024 Taycan Turbo S Cross Turismo: Ultimate wagon with 750 HP, 0-60 in 2.7s. Fastest practical Taycan variant." }
  },
  {
    "id": "2024-porsche-taycan-gts-sport-turismo",
    "year": 2024,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "GTS Sport Turismo AWD",
    "slug": "2024-porsche-taycan-gts-sport-turismo",
    "pricing": { "msrpBase": 141200, "msrpMax": 151200 },
    "range": { "epaRangeMiles": 242, "batteryCapacityKwh": 93, "efficiencyMPGe": 78, "efficiencyKwhPer100Mi": 43.3 },
    "performance": { "horsepower": 590, "torque": 626, "zeroTo60": 3.5, "topSpeed": 155, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 270, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 35.3, "towingCapacityLbs": 0, "curbWeightLbs": 5110 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2024-porsche-taycan-sport-turismo.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver", "lastVerified": "2025-12-02", "notes": "2024 Taycan GTS Sport Turismo: Sleeker wagon without Cross Turismo cladding. 590 HP, 242 mi range, 0-60 in 3.5s." }
  },
  {
    "id": "2025-porsche-taycan-base",
    "year": 2025,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "Base (Performance Battery Plus)",
    "slug": "2025-porsche-taycan-base",
    "pricing": { "msrpBase": 109650, "msrpMax": 119650 },
    "range": { "epaRangeMiles": 318, "batteryCapacityKwh": 97, "efficiencyMPGe": 84, "efficiencyKwhPer100Mi": 40.2 },
    "performance": { "horsepower": 402, "torque": 368, "zeroTo60": 4.5, "topSpeed": 143, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 320, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 12.9, "towingCapacityLbs": 0, "curbWeightLbs": 4960 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2025-porsche-taycan.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 Taycan refresh with 97 kWh Performance Battery Plus. 318 mi EPA range, 320 kW fast charging, 18 min 10-80%." }
  },
  {
    "id": "2025-porsche-taycan-4s",
    "year": 2025,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "4S AWD",
    "slug": "2025-porsche-taycan-4s",
    "pricing": { "msrpBase": 120495, "msrpMax": 130495 },
    "range": { "epaRangeMiles": 295, "batteryCapacityKwh": 97, "efficiencyMPGe": 93, "efficiencyKwhPer100Mi": 36.3 },
    "performance": { "horsepower": 536, "torque": 479, "zeroTo60": 3.5, "topSpeed": 155, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 320, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 12.9, "towingCapacityLbs": 0, "curbWeightLbs": 5015 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2025-porsche-taycan-4s.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver", "lastVerified": "2025-12-02", "notes": "2025 Taycan 4S: 536 HP AWD, 295 mi range with new 97 kWh battery. 320 kW DC charging, 18 min 10-80%." }
  },
  {
    "id": "2025-porsche-taycan-gts",
    "year": 2025,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "GTS AWD",
    "slug": "2025-porsche-taycan-gts",
    "pricing": { "msrpBase": 153495, "msrpMax": 163495 },
    "range": { "epaRangeMiles": 289, "batteryCapacityKwh": 97, "efficiencyMPGe": 91, "efficiencyKwhPer100Mi": 37.1 },
    "performance": { "horsepower": 690, "torque": 626, "zeroTo60": 3.1, "topSpeed": 155, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 320, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 12.9, "towingCapacityLbs": 0, "curbWeightLbs": 5060 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2025-porsche-taycan-gts.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver", "lastVerified": "2025-12-02", "notes": "2025 Taycan GTS: Sport-focused 690 HP, 289 mi range. Increased power from 2024, 320 kW charging, 0-60 in 3.1s." }
  },
  {
    "id": "2025-porsche-taycan-turbo",
    "year": 2025,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "Turbo AWD",
    "slug": "2025-porsche-taycan-turbo",
    "pricing": { "msrpBase": 175595, "msrpMax": 185595 },
    "range": { "epaRangeMiles": 292, "batteryCapacityKwh": 97, "efficiencyMPGe": 91, "efficiencyKwhPer100Mi": 37.1 },
    "performance": { "horsepower": 697, "torque": 626, "zeroTo60": 2.7, "topSpeed": 161, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 320, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 12.9, "towingCapacityLbs": 0, "curbWeightLbs": 5140 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2025-porsche-taycan-turbo.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver", "lastVerified": "2025-12-02", "notes": "2025 Taycan Turbo: 697 HP, 292 mi range, 0-60 in 2.7s. Enhanced battery and charging vs 2024." }
  },
  {
    "id": "2025-porsche-taycan-turbo-s",
    "year": 2025,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "Turbo S AWD",
    "slug": "2025-porsche-taycan-turbo-s",
    "pricing": { "msrpBase": 210995, "msrpMax": 220995 },
    "range": { "epaRangeMiles": 266, "batteryCapacityKwh": 97, "efficiencyMPGe": 87, "efficiencyKwhPer100Mi": 38.8 },
    "performance": { "horsepower": 764, "torque": 774, "zeroTo60": 2.3, "topSpeed": 161, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 320, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 12.9, "towingCapacityLbs": 0, "curbWeightLbs": 5200 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2025-porsche-taycan-turbo-s.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver", "lastVerified": "2025-12-02", "notes": "2025 Taycan Turbo S: 764 HP (938 HP with launch control), 0-60 in 2.3s. Flagship performance sedan." }
  },
  {
    "id": "2025-porsche-taycan-4-cross-turismo",
    "year": 2025,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "4 Cross Turismo AWD",
    "slug": "2025-porsche-taycan-4-cross-turismo",
    "pricing": { "msrpBase": 113095, "msrpMax": 123095 },
    "range": { "epaRangeMiles": 277, "batteryCapacityKwh": 97, "efficiencyMPGe": 91, "efficiencyKwhPer100Mi": 37.1 },
    "performance": { "horsepower": 429, "torque": 263, "zeroTo60": 4.5, "topSpeed": 136, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 320, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 35.3, "towingCapacityLbs": 0, "curbWeightLbs": 5010 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2025-porsche-taycan-cross-turismo.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver", "lastVerified": "2025-12-02", "notes": "2025 Taycan 4 Cross Turismo: 429 HP AWD wagon, 277 mi range. 35.3 cu ft cargo, 320 kW fast charging." }
  },
  {
    "id": "2025-porsche-taycan-turbo-s-cross-turismo",
    "year": 2025,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "Turbo S Cross Turismo AWD",
    "slug": "2025-porsche-taycan-turbo-s-cross-turismo",
    "pricing": { "msrpBase": 213695, "msrpMax": 223695 },
    "range": { "epaRangeMiles": 261, "batteryCapacityKwh": 97, "efficiencyMPGe": 86, "efficiencyKwhPer100Mi": 39.2 },
    "performance": { "horsepower": 764, "torque": 774, "zeroTo60": 2.7, "topSpeed": 155, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 320, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 35.3, "towingCapacityLbs": 0, "curbWeightLbs": 5255 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2025-porsche-taycan-cross-turismo.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver", "lastVerified": "2025-12-02", "notes": "2025 Taycan Turbo S Cross Turismo: 764 HP wagon (938 HP w/ launch), 261 mi range, 0-60 in 2.7s. Ultimate performance wagon." }
  },
  {
    "id": "2026-porsche-taycan-base",
    "year": 2026,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "Base RWD",
    "slug": "2026-porsche-taycan-base",
    "pricing": { "msrpBase": 102550, "msrpMax": 112550 },
    "range": { "epaRangeMiles": 318, "batteryCapacityKwh": 97, "efficiencyMPGe": 84, "efficiencyKwhPer100Mi": 40.2 },
    "performance": { "horsepower": 402, "torque": 368, "zeroTo60": 4.5, "topSpeed": 143, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 320, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 12.9, "towingCapacityLbs": 0, "curbWeightLbs": 4960 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2026-porsche-taycan.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver, Motor Trend", "lastVerified": "2025-12-02", "notes": "2026 Taycan Base RWD: 402 HP, 318 mi EPA range with 97 kWh battery. 320 kW fast charging, 18 min 10-80%." }
  },
  {
    "id": "2026-porsche-taycan-4s",
    "year": 2026,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "4S AWD",
    "slug": "2026-porsche-taycan-4s",
    "pricing": { "msrpBase": 126000, "msrpMax": 136000 },
    "range": { "epaRangeMiles": 295, "batteryCapacityKwh": 97, "efficiencyMPGe": 93, "efficiencyKwhPer100Mi": 36.3 },
    "performance": { "horsepower": 536, "torque": 479, "zeroTo60": 3.5, "topSpeed": 155, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 320, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 12.9, "towingCapacityLbs": 0, "curbWeightLbs": 5015 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2026-porsche-taycan-4s.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver", "lastVerified": "2025-12-02", "notes": "2026 Taycan 4S: 536 HP AWD, 295 mi range. Premium performance with 320 kW charging capability." }
  },
  {
    "id": "2026-porsche-taycan-turbo-s",
    "year": 2026,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "Turbo S AWD",
    "slug": "2026-porsche-taycan-turbo-s",
    "pricing": { "msrpBase": 215000, "msrpMax": 225000 },
    "range": { "epaRangeMiles": 266, "batteryCapacityKwh": 97, "efficiencyMPGe": 87, "efficiencyKwhPer100Mi": 38.8 },
    "performance": { "horsepower": 764, "torque": 774, "zeroTo60": 2.3, "topSpeed": 161, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 320, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 12.9, "towingCapacityLbs": 0, "curbWeightLbs": 5200 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2026-porsche-taycan-turbo-s.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver", "lastVerified": "2025-12-02", "notes": "2026 Taycan Turbo S: 764 HP (938 HP w/ launch control), 0-60 in 2.3s. Peak performance with 161 mph top speed." }
  },
  {
    "id": "2026-porsche-taycan-4-cross-turismo",
    "year": 2026,
    "make": "Porsche",
    "model": "Taycan",
    "trim": "4 Cross Turismo AWD",
    "slug": "2026-porsche-taycan-4-cross-turismo",
    "pricing": { "msrpBase": 114250, "msrpMax": 124250 },
    "range": { "epaRangeMiles": 277, "batteryCapacityKwh": 97, "efficiencyMPGe": 91, "efficiencyKwhPer100Mi": 37.1 },
    "performance": { "horsepower": 429, "torque": 263, "zeroTo60": 4.5, "topSpeed": 136, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 320, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 35.3, "towingCapacityLbs": 0, "curbWeightLbs": 5010 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Porsche InnoDrive" },
    "meta": { "imageUrl": "/images/vehicles/2026-porsche-taycan-cross-turismo.jpg", "manufacturerUrl": "https://www.porsche.com/usa/models/taycan", "availabilityStatus": "Available", "dataSource": "Porsche.com, Car and Driver", "lastVerified": "2025-12-02", "notes": "2026 Taycan 4 Cross Turismo: 429 HP AWD wagon, 277 mi range, 35.3 cu ft cargo. Practical performance wagon." }
  },
  {
    "id": "2025-tesla-model-3-long-range-rwd",
    "year": 2025,
    "make": "Tesla",
    "model": "Model 3",
    "trim": "Long Range RWD",
    "slug": "2025-tesla-model-3-long-range-rwd",
    "pricing": { "msrpBase": 44130, "msrpMax": 44130 },
    "range": { "epaRangeMiles": 363, "batteryCapacityKwh": 78, "efficiencyMPGe": 137, "efficiencyKwhPer100Mi": 24.7 },
    "performance": { "horsepower": 257, "torque": 266, "zeroTo60": 5.6, "topSpeed": 145, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 25 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 23, "towingCapacityLbs": 0, "curbWeightLbs": 3862 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2025-tesla-model-3.jpg", "manufacturerUrl": "https://www.tesla.com/model3", "availabilityStatus": "Available", "dataSource": "Tesla.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-29", "notes": "2025 Model 3 Long Range RWD: 257 hp, 363 mi EPA range (best Model 3 efficiency). Highland refresh design with NACS." }
  },
  {
    "id": "2025-tesla-model-3-long-range-awd",
    "year": 2025,
    "make": "Tesla",
    "model": "Model 3",
    "trim": "Long Range AWD",
    "slug": "2025-tesla-model-3-long-range-awd",
    "pricing": { "msrpBase": 48130, "msrpMax": 48130 },
    "range": { "epaRangeMiles": 346, "batteryCapacityKwh": 78, "efficiencyMPGe": 130, "efficiencyKwhPer100Mi": 26.0 },
    "performance": { "horsepower": 394, "torque": 377, "zeroTo60": 4.0, "topSpeed": 145, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 25 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 23, "towingCapacityLbs": 0, "curbWeightLbs": 4034 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2025-tesla-model-3.jpg", "manufacturerUrl": "https://www.tesla.com/model3", "availabilityStatus": "Available", "dataSource": "Tesla.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 Model 3 Long Range AWD: Dual motor, 394 hp, 346 mi range, 4.0s 0-60 mph. NACS charging standard." }
  },
  {
    "id": "2025-tesla-model-3-performance",
    "year": 2025,
    "make": "Tesla",
    "model": "Model 3",
    "trim": "Performance",
    "slug": "2025-tesla-model-3-performance",
    "pricing": { "msrpBase": 52990, "msrpMax": 52990 },
    "range": { "epaRangeMiles": 303, "batteryCapacityKwh": 78, "efficiencyMPGe": 115, "efficiencyKwhPer100Mi": 29.3 },
    "performance": { "horsepower": 510, "torque": 487, "zeroTo60": 2.9, "topSpeed": 163, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 25 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 23, "towingCapacityLbs": 0, "curbWeightLbs": 4048 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2025-tesla-model-3-performance.jpg", "manufacturerUrl": "https://www.tesla.com/model3", "availabilityStatus": "Available", "dataSource": "Tesla.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 Model 3 Performance: 510 hp, 2.9s 0-60 mph, Track Mode, carbon fiber spoiler, upgraded brakes. NACS charging." }
  },
  {
    "id": "2025-tesla-model-y-long-range-rwd",
    "year": 2025,
    "make": "Tesla",
    "model": "Model Y",
    "trim": "Long Range RWD",
    "slug": "2025-tesla-model-y-long-range-rwd",
    "pricing": { "msrpBase": 44990, "msrpMax": 44990 },
    "range": { "epaRangeMiles": 337, "batteryCapacityKwh": 75, "efficiencyMPGe": 122, "efficiencyKwhPer100Mi": 27.7 },
    "performance": { "horsepower": 295, "torque": 310, "zeroTo60": 6.5, "topSpeed": 135, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 25 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 76, "towingCapacityLbs": 2200, "curbWeightLbs": 4120 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2025-tesla-model-y.jpg", "manufacturerUrl": "https://www.tesla.com/modely", "availabilityStatus": "Available", "dataSource": "Tesla.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 Model Y Long Range RWD: 295 hp, 337 mi EPA range, excellent efficiency. NACS charging standard." }
  },
  {
    "id": "2025-tesla-model-y-long-range-awd",
    "year": 2025,
    "make": "Tesla",
    "model": "Model Y",
    "trim": "Long Range AWD",
    "slug": "2025-tesla-model-y-long-range-awd",
    "pricing": { "msrpBase": 49990, "msrpMax": 49990 },
    "range": { "epaRangeMiles": 311, "batteryCapacityKwh": 75, "efficiencyMPGe": 117, "efficiencyKwhPer100Mi": 28.8 },
    "performance": { "horsepower": 384, "torque": 376, "zeroTo60": 4.4, "topSpeed": 135, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 25 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 76, "towingCapacityLbs": 3500, "curbWeightLbs": 4398 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2025-tesla-model-y.jpg", "manufacturerUrl": "https://www.tesla.com/modely", "availabilityStatus": "Available", "dataSource": "Tesla.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 Model Y Long Range AWD: Dual motor, 384 hp, 311 mi range. America's best-selling EV with NACS." }
  },
  {
    "id": "2025-tesla-model-y-performance",
    "year": 2025,
    "make": "Tesla",
    "model": "Model Y",
    "trim": "Performance",
    "slug": "2025-tesla-model-y-performance",
    "pricing": { "msrpBase": 55990, "msrpMax": 55990 },
    "range": { "epaRangeMiles": 277, "batteryCapacityKwh": 75, "efficiencyMPGe": 107, "efficiencyKwhPer100Mi": 31.6 },
    "performance": { "horsepower": 450, "torque": 471, "zeroTo60": 3.6, "topSpeed": 155, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 25 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 76, "towingCapacityLbs": 3500, "curbWeightLbs": 4555 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2025-tesla-model-y-performance.jpg", "manufacturerUrl": "https://www.tesla.com/modely", "availabilityStatus": "Available", "dataSource": "Tesla.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 Model Y Performance: 450 hp, 3.6s 0-60 mph, Track Mode, performance brakes. NACS charging standard." }
  },
  {
    "id": "2025-tesla-cybertruck-awd",
    "year": 2025,
    "make": "Tesla",
    "model": "Cybertruck",
    "trim": "AWD",
    "slug": "2025-tesla-cybertruck-awd",
    "pricing": { "msrpBase": 79990, "msrpMax": 79990 },
    "range": { "epaRangeMiles": 325, "batteryCapacityKwh": 123, "efficiencyMPGe": 75, "efficiencyKwhPer100Mi": 45.0 },
    "performance": { "horsepower": 600, "torque": 671, "zeroTo60": 3.9, "topSpeed": 113, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 45 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 67, "towingCapacityLbs": 11000, "curbWeightLbs": 6843 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2025-tesla-cybertruck-awd.jpg", "manufacturerUrl": "https://www.tesla.com/cybertruck", "availabilityStatus": "Available", "dataSource": "Tesla.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 Cybertruck AWD dual-motor: 600 hp, 325 mi range, 11,000 lb towing. Stainless steel exoskeleton, adaptive air suspension. NACS charging, V2L capable." }
  },
  {
    "id": "2025-tesla-cybertruck-cyberbeast",
    "year": 2025,
    "make": "Tesla",
    "model": "Cybertruck",
    "trim": "Cyberbeast",
    "slug": "2025-tesla-cybertruck-cyberbeast",
    "pricing": { "msrpBase": 99990, "msrpMax": 99990 },
    "range": { "epaRangeMiles": 320, "batteryCapacityKwh": 123, "efficiencyMPGe": 73, "efficiencyKwhPer100Mi": 46.2 },
    "performance": { "horsepower": 845, "torque": 930, "zeroTo60": 2.6, "topSpeed": 131, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 45 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 67, "towingCapacityLbs": 11000, "curbWeightLbs": 6995 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2025-tesla-cybertruck-cyberbeast.jpg", "manufacturerUrl": "https://www.tesla.com/cybertruck", "availabilityStatus": "Available", "dataSource": "Tesla.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 Cybertruck Cyberbeast tri-motor: 845 hp, 2.6s 0-60 mph, launch control, rear-wheel torque vectoring. Beast mode performance with NACS and V2L." }
  },
  {
    "id": "2026-tesla-cybertruck-cyberbeast",
    "year": 2026,
    "make": "Tesla",
    "model": "Cybertruck",
    "trim": "Cyberbeast",
    "slug": "2026-tesla-cybertruck-cyberbeast",
    "pricing": { "msrpBase": 99990, "msrpMax": 99990 },
    "range": { "epaRangeMiles": 320, "batteryCapacityKwh": 123, "efficiencyMPGe": 73, "efficiencyKwhPer100Mi": 46.2 },
    "performance": { "horsepower": 845, "torque": 930, "zeroTo60": 2.6, "topSpeed": 131, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 45 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 67, "towingCapacityLbs": 11000, "curbWeightLbs": 6995 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2026-tesla-cybertruck-cyberbeast.jpg", "manufacturerUrl": "https://www.tesla.com/cybertruck", "availabilityStatus": "Available", "dataSource": "Tesla.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2026 Cybertruck Cyberbeast tri-motor: 845 hp, 2.6s 0-60 mph, most powerful production truck. NACS charging standard, V2L capable." }
  },
  {
    "id": "2025-tesla-model-s-awd",
    "year": 2025,
    "make": "Tesla",
    "model": "Model S",
    "trim": "All-Wheel Drive",
    "slug": "2025-tesla-model-s-awd",
    "pricing": { "msrpBase": 82000, "msrpMax": 82000 },
    "range": { "epaRangeMiles": 402, "batteryCapacityKwh": 100, "efficiencyMPGe": 105, "efficiencyKwhPer100Mi": 32.1 },
    "performance": { "horsepower": 670, "torque": 700, "zeroTo60": 3.1, "topSpeed": 130, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 28, "towingCapacityLbs": 0, "curbWeightLbs": 4561 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2025-tesla-model-s.jpg", "manufacturerUrl": "https://www.tesla.com/models", "availabilityStatus": "Available", "dataSource": "Tesla.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 Model S AWD: 670 hp, 402 mi EPA range, 3.1s 0-60 mph. Flagship luxury sedan with NACS charging." }
  },
  {
    "id": "2025-tesla-model-s-plaid",
    "year": 2025,
    "make": "Tesla",
    "model": "Model S",
    "trim": "Plaid",
    "slug": "2025-tesla-model-s-plaid",
    "pricing": { "msrpBase": 97000, "msrpMax": 97000 },
    "range": { "epaRangeMiles": 348, "batteryCapacityKwh": 100, "efficiencyMPGe": 98, "efficiencyKwhPer100Mi": 34.4 },
    "performance": { "horsepower": 1020, "torque": 1050, "zeroTo60": 2.1, "topSpeed": 200, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 28, "towingCapacityLbs": 0, "curbWeightLbs": 4766 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2025-tesla-model-s-plaid.jpg", "manufacturerUrl": "https://www.tesla.com/models", "availabilityStatus": "Available", "dataSource": "Tesla.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 Model S Plaid: 1,020 hp tri-motor, 2.1s 0-60 mph (fastest production sedan), 200 mph top speed. Track Mode, carbon ceramic brakes available. NACS charging." }
  },
  {
    "id": "2026-tesla-model-s-awd",
    "year": 2026,
    "make": "Tesla",
    "model": "Model S",
    "trim": "All-Wheel Drive",
    "slug": "2026-tesla-model-s-awd",
    "pricing": { "msrpBase": 82000, "msrpMax": 82000 },
    "range": { "epaRangeMiles": 410, "batteryCapacityKwh": 100, "efficiencyMPGe": 107, "efficiencyKwhPer100Mi": 31.5 },
    "performance": { "horsepower": 670, "torque": 700, "zeroTo60": 3.1, "topSpeed": 130, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 28, "towingCapacityLbs": 0, "curbWeightLbs": 4561 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2026-tesla-model-s.jpg", "manufacturerUrl": "https://www.tesla.com/models", "availabilityStatus": "Available", "dataSource": "Tesla.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2026 Model S AWD: 670 hp, 410 mi EPA range (+8 mi vs 2025), improved aerodynamic wheels, Frost Blue paint option, enhanced suspension. NACS charging standard." }
  },
  {
    "id": "2026-tesla-model-s-plaid",
    "year": 2026,
    "make": "Tesla",
    "model": "Model S",
    "trim": "Plaid",
    "slug": "2026-tesla-model-s-plaid",
    "pricing": { "msrpBase": 97000, "msrpMax": 97000 },
    "range": { "epaRangeMiles": 368, "batteryCapacityKwh": 100, "efficiencyMPGe": 100, "efficiencyKwhPer100Mi": 33.7 },
    "performance": { "horsepower": 1020, "torque": 1050, "zeroTo60": 2.1, "topSpeed": 200, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 28, "towingCapacityLbs": 0, "curbWeightLbs": 4766 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2026-tesla-model-s-plaid.jpg", "manufacturerUrl": "https://www.tesla.com/models", "availabilityStatus": "Available", "dataSource": "Tesla.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2026 Model S Plaid: 1,020 hp tri-motor, 2.1s 0-60 mph, 368 mi range (+20 mi vs 2025). Fastest production sedan with NACS." }
  },
  {
    "id": "2025-tesla-model-x-awd",
    "year": 2025,
    "make": "Tesla",
    "model": "Model X",
    "trim": "All-Wheel Drive",
    "slug": "2025-tesla-model-x-awd",
    "pricing": { "msrpBase": 82000, "msrpMax": 82000 },
    "range": { "epaRangeMiles": 329, "batteryCapacityKwh": 100, "efficiencyMPGe": 89, "efficiencyKwhPer100Mi": 37.9 },
    "performance": { "horsepower": 670, "torque": 700, "zeroTo60": 3.8, "topSpeed": 149, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 88, "towingCapacityLbs": 5000, "curbWeightLbs": 5185 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2025-tesla-model-x.jpg", "manufacturerUrl": "https://www.tesla.com/modelx", "availabilityStatus": "Available", "dataSource": "Tesla.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 Model X AWD: 670 hp, 329 mi range, 3.8s 0-60 mph. Iconic falcon-wing doors, 7-seat luxury SUV with NACS." }
  },
  {
    "id": "2025-tesla-model-x-plaid",
    "year": 2025,
    "make": "Tesla",
    "model": "Model X",
    "trim": "Plaid",
    "slug": "2025-tesla-model-x-plaid",
    "pricing": { "msrpBase": 97000, "msrpMax": 97000 },
    "range": { "epaRangeMiles": 314, "batteryCapacityKwh": 100, "efficiencyMPGe": 85, "efficiencyKwhPer100Mi": 39.7 },
    "performance": { "horsepower": 1020, "torque": 1050, "zeroTo60": 2.5, "topSpeed": 149, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 88, "towingCapacityLbs": 5000, "curbWeightLbs": 5390 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2025-tesla-model-x-plaid.jpg", "manufacturerUrl": "https://www.tesla.com/modelx", "availabilityStatus": "Available", "dataSource": "Tesla.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 Model X Plaid: 1,020 hp tri-motor, 2.5s 0-60 mph (fastest production SUV). Falcon-wing doors, 7 seats with NACS." }
  },
  {
    "id": "2026-tesla-model-x-awd",
    "year": 2026,
    "make": "Tesla",
    "model": "Model X",
    "trim": "All-Wheel Drive",
    "slug": "2026-tesla-model-x-awd",
    "pricing": { "msrpBase": 93880, "msrpMax": 93880 },
    "range": { "epaRangeMiles": 352, "batteryCapacityKwh": 100, "efficiencyMPGe": 92, "efficiencyKwhPer100Mi": 36.6 },
    "performance": { "horsepower": 670, "torque": 700, "zeroTo60": 3.8, "topSpeed": 149, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 88, "towingCapacityLbs": 5000, "curbWeightLbs": 5185 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2026-tesla-model-x.jpg", "manufacturerUrl": "https://www.tesla.com/modelx", "availabilityStatus": "Available", "dataSource": "Tesla.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2026 Model X AWD: 670 hp, 352 mi range (+23 mi vs 2025), improved sound deadening, aerodynamic wheels. Falcon-wing doors with NACS." }
  },
  {
    "id": "2026-tesla-model-x-plaid",
    "year": 2026,
    "make": "Tesla",
    "model": "Model X",
    "trim": "Plaid",
    "slug": "2026-tesla-model-x-plaid",
    "pricing": { "msrpBase": 106380, "msrpMax": 106380 },
    "range": { "epaRangeMiles": 335, "batteryCapacityKwh": 100, "efficiencyMPGe": 88, "efficiencyKwhPer100Mi": 38.3 },
    "performance": { "horsepower": 1020, "torque": 1050, "zeroTo60": 2.5, "topSpeed": 149, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 88, "towingCapacityLbs": 5000, "curbWeightLbs": 5390 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Autopilot included, FSD available" },
    "meta": { "imageUrl": "/images/vehicles/2026-tesla-model-x-plaid.jpg", "manufacturerUrl": "https://www.tesla.com/modelx", "availabilityStatus": "Available", "dataSource": "Tesla.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2026 Model X Plaid: 1,020 hp tri-motor, 2.5s 0-60 mph, 335 mi range (+21 mi vs 2025). Fastest production SUV with NACS." }
  },
  {
    "id": "2025-rivian-r1t-dual-motor-max",
    "year": 2025,
    "make": "Rivian",
    "model": "R1T",
    "trim": "Dual Motor Max",
    "slug": "2025-rivian-r1t-dual-motor-max",
    "pricing": { "msrpBase": 73000, "msrpMax": 73000 },
    "range": { "epaRangeMiles": 420, "batteryCapacityKwh": 141.5, "efficiencyMPGe": 75, "efficiencyKwhPer100Mi": 45.0 },
    "performance": { "horsepower": 533, "torque": 610, "zeroTo60": 4.5, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 220, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 54, "towingCapacityLbs": 11000, "curbWeightLbs": 7148 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Driver+" },
    "meta": { "imageUrl": "/images/vehicles/2025-rivian-r1t.jpg", "manufacturerUrl": "https://rivian.com/r1t", "availabilityStatus": "Available", "dataSource": "Rivian.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 R1T Dual Motor Max: 533 hp, 420 mi EPA range (longest R1T range), 141.5 kWh battery. 11,000 lb towing. NACS charging, V2L and V2H capable." }
  },
  {
    "id": "2025-rivian-r1t-performance-dual-max",
    "year": 2025,
    "make": "Rivian",
    "model": "R1T",
    "trim": "Performance Dual Motor Max",
    "slug": "2025-rivian-r1t-performance-dual-max",
    "pricing": { "msrpBase": 80000, "msrpMax": 80000 },
    "range": { "epaRangeMiles": 400, "batteryCapacityKwh": 141.5, "efficiencyMPGe": 72, "efficiencyKwhPer100Mi": 46.8 },
    "performance": { "horsepower": 665, "torque": 829, "zeroTo60": 3.4, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 220, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 54, "towingCapacityLbs": 11000, "curbWeightLbs": 7200 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Driver+" },
    "meta": { "imageUrl": "/images/vehicles/2025-rivian-r1t.jpg", "manufacturerUrl": "https://rivian.com/r1t", "availabilityStatus": "Available", "dataSource": "Rivian.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 R1T Performance Dual Motor Max: 665 hp, 400 mi range, 3.4s 0-60 mph. Performance upgrade with enhanced power. NACS charging, V2L/V2H capable." }
  },
  {
    "id": "2025-rivian-r1t-tri-motor-max",
    "year": 2025,
    "make": "Rivian",
    "model": "R1T",
    "trim": "Tri Motor Max",
    "slug": "2025-rivian-r1t-tri-motor-max",
    "pricing": { "msrpBase": 87000, "msrpMax": 87000 },
    "range": { "epaRangeMiles": 371, "batteryCapacityKwh": 141.5, "efficiencyMPGe": 68, "efficiencyKwhPer100Mi": 49.6 },
    "performance": { "horsepower": 850, "torque": 1103, "zeroTo60": 2.9, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 220, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 54, "towingCapacityLbs": 11000, "curbWeightLbs": 7300 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Driver+" },
    "meta": { "imageUrl": "/images/vehicles/2025-rivian-r1t.jpg", "manufacturerUrl": "https://rivian.com/r1t", "availabilityStatus": "Available", "dataSource": "Rivian.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 R1T Tri Motor Max: 850 hp, 2.9s 0-60 mph, 371 mi range. Three motors (two rear, one front) for exceptional performance. NACS charging, V2L/V2H capable." }
  },
  {
    "id": "2026-rivian-r1t-dual-motor-max",
    "year": 2026,
    "make": "Rivian",
    "model": "R1T",
    "trim": "Dual Motor Max",
    "slug": "2026-rivian-r1t-dual-motor-max",
    "pricing": { "msrpBase": 73000, "msrpMax": 73000 },
    "range": { "epaRangeMiles": 420, "batteryCapacityKwh": 141.5, "efficiencyMPGe": 75, "efficiencyKwhPer100Mi": 45.0 },
    "performance": { "horsepower": 533, "torque": 610, "zeroTo60": 4.5, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 220, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 54, "towingCapacityLbs": 11000, "curbWeightLbs": 7148 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Driver+" },
    "meta": { "imageUrl": "/images/vehicles/2026-rivian-r1t.jpg", "manufacturerUrl": "https://rivian.com/r1t", "availabilityStatus": "Available", "dataSource": "Rivian.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2026 R1T Dual Motor Max: 533 hp, 420 mi EPA range, 141.5 kWh Max battery. 11,000 lb towing. NACS charging, V2L and V2H capable." }
  },
  {
    "id": "2026-rivian-r1t-performance-dual-max",
    "year": 2026,
    "make": "Rivian",
    "model": "R1T",
    "trim": "Performance Dual Motor Max",
    "slug": "2026-rivian-r1t-performance-dual-max",
    "pricing": { "msrpBase": 80000, "msrpMax": 80000 },
    "range": { "epaRangeMiles": 400, "batteryCapacityKwh": 141.5, "efficiencyMPGe": 72, "efficiencyKwhPer100Mi": 46.8 },
    "performance": { "horsepower": 665, "torque": 829, "zeroTo60": 3.4, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 220, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 54, "towingCapacityLbs": 11000, "curbWeightLbs": 7200 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Driver+" },
    "meta": { "imageUrl": "/images/vehicles/2026-rivian-r1t.jpg", "manufacturerUrl": "https://rivian.com/r1t", "availabilityStatus": "Available", "dataSource": "Rivian.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2026 R1T Performance Dual Motor Max: 665 hp, 400 mi range, 3.4s 0-60 mph. Performance upgrade with enhanced power and responsiveness. NACS charging, V2L/V2H capable." }
  },
  {
    "id": "2026-rivian-r1t-tri-motor-max",
    "year": 2026,
    "make": "Rivian",
    "model": "R1T",
    "trim": "Tri Motor Max",
    "slug": "2026-rivian-r1t-tri-motor-max",
    "pricing": { "msrpBase": 87000, "msrpMax": 87000 },
    "range": { "epaRangeMiles": 371, "batteryCapacityKwh": 141.5, "efficiencyMPGe": 68, "efficiencyKwhPer100Mi": 49.6 },
    "performance": { "horsepower": 850, "torque": 1103, "zeroTo60": 2.9, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 220, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 54, "towingCapacityLbs": 11000, "curbWeightLbs": 7300 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Driver+" },
    "meta": { "imageUrl": "/images/vehicles/2026-rivian-r1t.jpg", "manufacturerUrl": "https://rivian.com/r1t", "availabilityStatus": "Available", "dataSource": "Rivian.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2026 R1T Tri Motor Max: 850 hp, 2.9s 0-60 mph, 371 mi range. Three motors for exceptional off-road capability. NACS charging, V2L/V2H capable." }
  },
  {
    "id": "2026-rivian-r1t-quad-motor-max",
    "year": 2026,
    "make": "Rivian",
    "model": "R1T",
    "trim": "Quad Motor Max",
    "slug": "2026-rivian-r1t-quad-motor-max",
    "pricing": { "msrpBase": 95000, "msrpMax": 95000 },
    "range": { "epaRangeMiles": 374, "batteryCapacityKwh": 140, "efficiencyMPGe": 66, "efficiencyKwhPer100Mi": 51.1 },
    "performance": { "horsepower": 1025, "torque": 1198, "zeroTo60": 2.6, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 220, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 54, "towingCapacityLbs": 11000, "curbWeightLbs": 7400 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Driver+" },
    "meta": { "imageUrl": "/images/vehicles/2026-rivian-r1t.jpg", "manufacturerUrl": "https://rivian.com/r1t", "availabilityStatus": "Available", "dataSource": "Rivian.com, Car and Driver, Edmunds", "lastVerified": "2025-11-29", "notes": "NEW 2026 R1T Quad Motor Max: 1,025 hp (+215 hp vs previous), 1,198 lb-ft torque, 2.6s 0-60 mph. Most powerful production truck. NACS charging, V2L/V2H capable." }
  },
  {
    "id": "2025-rivian-r1s-dual-motor-max",
    "year": 2025,
    "make": "Rivian",
    "model": "R1S",
    "trim": "Dual Motor Max",
    "slug": "2025-rivian-r1s-dual-motor-max",
    "pricing": { "msrpBase": 78000, "msrpMax": 78000 },
    "range": { "epaRangeMiles": 410, "batteryCapacityKwh": 140, "efficiencyMPGe": 76, "efficiencyKwhPer100Mi": 44.4 },
    "performance": { "horsepower": 533, "torque": 610, "zeroTo60": 4.5, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 220, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 88, "towingCapacityLbs": 7700, "curbWeightLbs": 7160 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Driver+" },
    "meta": { "imageUrl": "/images/vehicles/2025-rivian-r1s.jpg", "manufacturerUrl": "https://rivian.com/r1s", "availabilityStatus": "Available", "dataSource": "Rivian.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 R1S Dual Motor Max: 533 hp, 410 mi EPA range (longest R1S range), 140 kWh Max battery, 7-seat SUV. 7,700 lb towing. NACS charging, V2L/V2H capable." }
  },
  {
    "id": "2025-rivian-r1s-performance-dual-max",
    "year": 2025,
    "make": "Rivian",
    "model": "R1S",
    "trim": "Performance Dual Motor Max",
    "slug": "2025-rivian-r1s-performance-dual-max",
    "pricing": { "msrpBase": 85000, "msrpMax": 85000 },
    "range": { "epaRangeMiles": 390, "batteryCapacityKwh": 140, "efficiencyMPGe": 73, "efficiencyKwhPer100Mi": 46.2 },
    "performance": { "horsepower": 665, "torque": 829, "zeroTo60": 3.4, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 220, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 88, "towingCapacityLbs": 7700, "curbWeightLbs": 7210 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Driver+" },
    "meta": { "imageUrl": "/images/vehicles/2025-rivian-r1s.jpg", "manufacturerUrl": "https://rivian.com/r1s", "availabilityStatus": "Available", "dataSource": "Rivian.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 R1S Performance Dual Motor Max: 665 hp, 390 mi range, 3.4s 0-60 mph. Performance upgrade for 7-seat electric SUV. NACS charging, V2L/V2H capable." }
  },
  {
    "id": "2025-rivian-r1s-tri-motor-max",
    "year": 2025,
    "make": "Rivian",
    "model": "R1S",
    "trim": "Tri Motor Max",
    "slug": "2025-rivian-r1s-tri-motor-max",
    "pricing": { "msrpBase": 92000, "msrpMax": 92000 },
    "range": { "epaRangeMiles": 371, "batteryCapacityKwh": 140, "efficiencyMPGe": 69, "efficiencyKwhPer100Mi": 48.9 },
    "performance": { "horsepower": 850, "torque": 1103, "zeroTo60": 2.9, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 220, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 88, "towingCapacityLbs": 7700, "curbWeightLbs": 7310 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Driver+" },
    "meta": { "imageUrl": "/images/vehicles/2025-rivian-r1s.jpg", "manufacturerUrl": "https://rivian.com/r1s", "availabilityStatus": "Available", "dataSource": "Rivian.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2025 R1S Tri Motor Max: 850 hp, 2.9s 0-60 mph, 371 mi range. Three motors for exceptional performance in 7-seat SUV. NACS charging, V2L/V2H capable." }
  },
  {
    "id": "2026-rivian-r1s-dual-motor-max",
    "year": 2026,
    "make": "Rivian",
    "model": "R1S",
    "trim": "Dual Motor Max",
    "slug": "2026-rivian-r1s-dual-motor-max",
    "pricing": { "msrpBase": 78000, "msrpMax": 78000 },
    "range": { "epaRangeMiles": 410, "batteryCapacityKwh": 140, "efficiencyMPGe": 76, "efficiencyKwhPer100Mi": 44.4 },
    "performance": { "horsepower": 533, "torque": 610, "zeroTo60": 4.5, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 220, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 88, "towingCapacityLbs": 7700, "curbWeightLbs": 7160 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Driver+" },
    "meta": { "imageUrl": "/images/vehicles/2026-rivian-r1s.jpg", "manufacturerUrl": "https://rivian.com/r1s", "availabilityStatus": "Available", "dataSource": "Rivian.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2026 R1S Dual Motor Max: 533 hp, 410 mi EPA range, 7-seat electric SUV. 7,700 lb towing capacity. NACS charging, V2L/V2H capable." }
  },
  {
    "id": "2026-rivian-r1s-performance-dual-max",
    "year": 2026,
    "make": "Rivian",
    "model": "R1S",
    "trim": "Performance Dual Motor Max",
    "slug": "2026-rivian-r1s-performance-dual-max",
    "pricing": { "msrpBase": 85000, "msrpMax": 85000 },
    "range": { "epaRangeMiles": 390, "batteryCapacityKwh": 140, "efficiencyMPGe": 73, "efficiencyKwhPer100Mi": 46.2 },
    "performance": { "horsepower": 665, "torque": 829, "zeroTo60": 3.4, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 220, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 88, "towingCapacityLbs": 7700, "curbWeightLbs": 7210 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Driver+" },
    "meta": { "imageUrl": "/images/vehicles/2026-rivian-r1s.jpg", "manufacturerUrl": "https://rivian.com/r1s", "availabilityStatus": "Available", "dataSource": "Rivian.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2026 R1S Performance Dual Motor Max: 665 hp, 390 mi range, 3.4s 0-60 mph. Enhanced performance with 7-seat versatility. NACS charging, V2L/V2H capable." }
  },
  {
    "id": "2026-rivian-r1s-tri-motor-max",
    "year": 2026,
    "make": "Rivian",
    "model": "R1S",
    "trim": "Tri Motor Max",
    "slug": "2026-rivian-r1s-tri-motor-max",
    "pricing": { "msrpBase": 92000, "msrpMax": 92000 },
    "range": { "epaRangeMiles": 371, "batteryCapacityKwh": 140, "efficiencyMPGe": 69, "efficiencyKwhPer100Mi": 48.9 },
    "performance": { "horsepower": 850, "torque": 1103, "zeroTo60": 2.9, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 220, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 88, "towingCapacityLbs": 7700, "curbWeightLbs": 7310 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Driver+" },
    "meta": { "imageUrl": "/images/vehicles/2026-rivian-r1s.jpg", "manufacturerUrl": "https://rivian.com/r1s", "availabilityStatus": "Available", "dataSource": "Rivian.com, Car and Driver", "lastVerified": "2025-11-29", "notes": "2026 R1S Tri Motor Max: 850 hp, 2.9s 0-60 mph, 371 mi range. Three motors for exceptional off-road and on-road performance. NACS charging, V2L/V2H capable." }
  },
  {
    "id": "2026-rivian-r1s-quad-motor-max",
    "year": 2026,
    "make": "Rivian",
    "model": "R1S",
    "trim": "Quad Motor Max",
    "slug": "2026-rivian-r1s-quad-motor-max",
    "pricing": { "msrpBase": 100000, "msrpMax": 100000 },
    "range": { "epaRangeMiles": 374, "batteryCapacityKwh": 140, "efficiencyMPGe": 67, "efficiencyKwhPer100Mi": 50.3 },
    "performance": { "horsepower": 1025, "torque": 1198, "zeroTo60": 2.6, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11.5, "dcChargingMaxKw": 220, "chargingTime10to80Minutes": 40 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 88, "towingCapacityLbs": 7700, "curbWeightLbs": 7410 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Driver+" },
    "meta": { "imageUrl": "/images/vehicles/2026-rivian-r1s.jpg", "manufacturerUrl": "https://rivian.com/r1s", "availabilityStatus": "Available", "dataSource": "Rivian.com, Car and Driver, Edmunds", "lastVerified": "2025-11-29", "notes": "NEW 2026 R1S Quad Motor Max: 1,025 hp (+215 hp vs previous), 1,198 lb-ft torque, 2.6s 0-60 mph. Most powerful production SUV. NACS charging, V2L/V2H capable." }
  },
  {
    "id": "2026-kia-ev4-light",
    "year": 2026,
    "make": "Kia",
    "model": "EV4",
    "trim": "Light",
    "slug": "2026-kia-ev4-light",
    "pricing": { "msrpBase": 40000, "msrpMax": 40000 },
    "range": { "epaRangeMiles": 235, "batteryCapacityKwh": 58, "efficiencyMPGe": 120, "efficiencyKwhPer100Mi": 28.1 },
    "performance": { "horsepower": 201, "torque": 188, "zeroTo60": 7.5, "topSpeed": 118, "drivetrain": "FWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 25 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 25, "towingCapacityLbs": 0, "curbWeightLbs": 3600 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-kia-ev4.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev4", "availabilityStatus": "Announced", "dataSource": "Kia.com, InsideEVs, Electrek", "lastVerified": "2025-11-30", "notes": "NEW 2026 Kia EV4 Light: Compact electric sedan, 201 hp FWD, 235 mi range with standard battery. NACS charging standard, V2L capable. Starting under $40k." }
  },
  {
    "id": "2026-kia-ev4-wind",
    "year": 2026,
    "make": "Kia",
    "model": "EV4",
    "trim": "Wind",
    "slug": "2026-kia-ev4-wind",
    "pricing": { "msrpBase": 43500, "msrpMax": 43500 },
    "range": { "epaRangeMiles": 330, "batteryCapacityKwh": 81, "efficiencyMPGe": 125, "efficiencyKwhPer100Mi": 27.0 },
    "performance": { "horsepower": 201, "torque": 188, "zeroTo60": 7.3, "topSpeed": 118, "drivetrain": "FWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 200, "chargingTime10to80Minutes": 27 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 25, "towingCapacityLbs": 0, "curbWeightLbs": 3750 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-kia-ev4.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev4", "availabilityStatus": "Announced", "dataSource": "Kia.com, InsideEVs, Electrek", "lastVerified": "2025-11-30", "notes": "2026 Kia EV4 Wind: 201 hp, 330 mi range with long-range battery. Mid-trim with enhanced features. NACS charging, V2L capable." }
  },
  {
    "id": "2026-kia-ev4-gt-line",
    "year": 2026,
    "make": "Kia",
    "model": "EV4",
    "trim": "GT-Line",
    "slug": "2026-kia-ev4-gt-line",
    "pricing": { "msrpBase": 46000, "msrpMax": 46000 },
    "range": { "epaRangeMiles": 330, "batteryCapacityKwh": 81, "efficiencyMPGe": 125, "efficiencyKwhPer100Mi": 27.0 },
    "performance": { "horsepower": 201, "torque": 188, "zeroTo60": 7.3, "topSpeed": 118, "drivetrain": "FWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 200, "chargingTime10to80Minutes": 27 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 25, "towingCapacityLbs": 0, "curbWeightLbs": 3780 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-kia-ev4.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev4", "availabilityStatus": "Announced", "dataSource": "Kia.com, InsideEVs, Electrek", "lastVerified": "2025-11-30", "notes": "2026 Kia EV4 GT-Line: 201 hp, 330 mi range, sporty styling package. Top trim with premium features. NACS charging, V2L capable. GT performance variant (402+ hp) coming later." }
  },
  {
    "id": "2026-subaru-uncharted-fwd",
    "year": 2026,
    "make": "Subaru",
    "model": "Uncharted",
    "trim": "FWD",
    "slug": "2026-subaru-uncharted-fwd",
    "pricing": { "msrpBase": 43000, "msrpMax": 43000 },
    "range": { "epaRangeMiles": 305, "batteryCapacityKwh": 75, "efficiencyMPGe": 118, "efficiencyKwhPer100Mi": 28.6 },
    "performance": { "horsepower": 221, "torque": 221, "zeroTo60": 7.0, "topSpeed": 112, "drivetrain": "FWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 32 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 30, "towingCapacityLbs": 0, "curbWeightLbs": 4000 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "EyeSight with Lane Centering" },
    "meta": { "imageUrl": "/images/vehicles/2026-subaru-uncharted.jpg", "manufacturerUrl": "https://www.subaru.com/electric", "availabilityStatus": "Announced", "dataSource": "Subaru.com, Car and Driver, Motor Trend", "lastVerified": "2025-11-30", "notes": "NEW 2026 Subaru Uncharted FWD: Compact electric SUV, 221 hp, 305 mi range. Front-wheel drive configuration for efficiency. NACS charging standard." }
  },
  {
    "id": "2026-subaru-uncharted-awd",
    "year": 2026,
    "make": "Subaru",
    "model": "Uncharted",
    "trim": "AWD",
    "slug": "2026-subaru-uncharted-awd",
    "pricing": { "msrpBase": 50000, "msrpMax": 50000 },
    "range": { "epaRangeMiles": 290, "batteryCapacityKwh": 75, "efficiencyMPGe": 110, "efficiencyKwhPer100Mi": 30.7 },
    "performance": { "horsepower": 338, "torque": 339, "zeroTo60": 5.3, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 32 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 30, "towingCapacityLbs": 1500, "curbWeightLbs": 4300 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "EyeSight with Lane Centering" },
    "meta": { "imageUrl": "/images/vehicles/2026-subaru-uncharted.jpg", "manufacturerUrl": "https://www.subaru.com/electric", "availabilityStatus": "Announced", "dataSource": "Subaru.com, Car and Driver, Motor Trend", "lastVerified": "2025-11-30", "notes": "NEW 2026 Subaru Uncharted AWD: 338 hp dual-motor AWD, 290 mi range. Signature Subaru all-wheel drive capability. NACS charging, 1,500 lb towing." }
  },
  {
    "id": "2026-subaru-trailseeker-premium",
    "year": 2026,
    "make": "Subaru",
    "model": "Trailseeker",
    "trim": "Premium",
    "slug": "2026-subaru-trailseeker-premium",
    "pricing": { "msrpBase": 39995, "msrpMax": 39995 },
    "range": { "epaRangeMiles": 280, "batteryCapacityKwh": 74.7, "efficiencyMPGe": 100, "efficiencyKwhPer100Mi": 33.8 },
    "performance": { "horsepower": 375, "torque": 376, "zeroTo60": 4.4, "topSpeed": 118, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.2, "towingCapacityLbs": 3500, "curbWeightLbs": 4600 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "EyeSight with Lane Centering" },
    "meta": { "imageUrl": "/images/vehicles/2026-subaru-trailseeker.jpg", "manufacturerUrl": "https://www.subaru.com/electric", "availabilityStatus": "Announced", "dataSource": "Subaru.com Press Release, December 4, 2025", "lastVerified": "2025-12-04", "notes": "NEW 2026 Subaru Trailseeker Premium: All-electric SUV, 375 hp, 280 mi range, 0-60 in 4.4 sec. Features X-MODE Dual-Mode, 14-inch touchscreen, heated seats, 18-inch wheels. NACS charging, 3,500 lb towing, 8.3-inch ground clearance." }
  },
  {
    "id": "2026-subaru-trailseeker-limited",
    "year": 2026,
    "make": "Subaru",
    "model": "Trailseeker",
    "trim": "Limited",
    "slug": "2026-subaru-trailseeker-limited",
    "pricing": { "msrpBase": 43995, "msrpMax": 43995 },
    "range": { "epaRangeMiles": 280, "batteryCapacityKwh": 74.7, "efficiencyMPGe": 100, "efficiencyKwhPer100Mi": 33.8 },
    "performance": { "horsepower": 375, "torque": 376, "zeroTo60": 4.4, "topSpeed": 118, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.2, "towingCapacityLbs": 3500, "curbWeightLbs": 4600 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "EyeSight with Lane Centering" },
    "meta": { "imageUrl": "/images/vehicles/2026-subaru-trailseeker.jpg", "manufacturerUrl": "https://www.subaru.com/electric", "availabilityStatus": "Announced", "dataSource": "Subaru.com Press Release, December 4, 2025", "lastVerified": "2025-12-04", "notes": "NEW 2026 Subaru Trailseeker Limited: Adds Harman Kardon speaker system, panoramic view monitor, 20-inch wheels, heated rear seats, leather-wrapped steering wheel, hands-free power gate, digital key, 120V AC outlet. All Premium features included." }
  },
  {
    "id": "2026-subaru-trailseeker-touring",
    "year": 2026,
    "make": "Subaru",
    "model": "Trailseeker",
    "trim": "Touring",
    "slug": "2026-subaru-trailseeker-touring",
    "pricing": { "msrpBase": 46555, "msrpMax": 46555 },
    "range": { "epaRangeMiles": 280, "batteryCapacityKwh": 74.7, "efficiencyMPGe": 100, "efficiencyKwhPer100Mi": 33.8 },
    "performance": { "horsepower": 375, "torque": 376, "zeroTo60": 4.4, "topSpeed": 118, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.2, "towingCapacityLbs": 3500, "curbWeightLbs": 4600 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "EyeSight with Lane Centering" },
    "meta": { "imageUrl": "/images/vehicles/2026-subaru-trailseeker.jpg", "manufacturerUrl": "https://www.subaru.com/electric", "availabilityStatus": "Announced", "dataSource": "Subaru.com Press Release, December 4, 2025", "lastVerified": "2025-12-04", "notes": "NEW 2026 Subaru Trailseeker Touring: Top-tier trim with gloss black hood accent, panoramic glass roof with motorized shade, ventilated front seats with radiant leg warmers. Optional two-tone paint and leather upholstery available. All Limited features included." }
  },
  {
    "id": "2024-kia-ev9-light-rwd",
    "year": 2024,
    "make": "Kia",
    "model": "EV9",
    "trim": "Light RWD",
    "slug": "2024-kia-ev9-light-rwd",
    "pricing": { "msrpBase": 54900, "msrpMax": 54900 },
    "range": { "epaRangeMiles": 230, "batteryCapacityKwh": 76.1, "efficiencyMPGe": 90, "efficiencyKwhPer100Mi": 37.5 },
    "performance": { "horsepower": 215, "torque": 258, "zeroTo60": 8.5, "topSpeed": 101, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 210, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 81.7, "towingCapacityLbs": 0, "curbWeightLbs": 5515 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2024-kia-ev9.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev9", "availabilityStatus": "Available", "dataSource": "Kia.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2024 EV9 Light RWD: Base 7-seat electric SUV, 215 hp, 230 mi EPA range. 76.1 kWh battery. Most affordable 3-row EV. CCS1 charging (NACS from 2026)." }
  },
  {
    "id": "2024-kia-ev9-light-lr-rwd",
    "year": 2024,
    "make": "Kia",
    "model": "EV9",
    "trim": "Light Long Range RWD",
    "slug": "2024-kia-ev9-light-lr-rwd",
    "pricing": { "msrpBase": 59900, "msrpMax": 59900 },
    "range": { "epaRangeMiles": 304, "batteryCapacityKwh": 99.8, "efficiencyMPGe": 97, "efficiencyKwhPer100Mi": 34.8 },
    "performance": { "horsepower": 201, "torque": 258, "zeroTo60": 8.8, "topSpeed": 101, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 210, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 81.7, "towingCapacityLbs": 0, "curbWeightLbs": 5690 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2024-kia-ev9.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev9", "availabilityStatus": "Available", "dataSource": "Kia.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2024 EV9 Light Long Range: 201 hp, 304 mi EPA range (longest range in 2024 lineup). 99.8 kWh battery, RWD for efficiency. 800V ultra-fast charging. CCS1 connector." }
  },
  {
    "id": "2024-kia-ev9-wind-awd",
    "year": 2024,
    "make": "Kia",
    "model": "EV9",
    "trim": "Wind AWD",
    "slug": "2024-kia-ev9-wind-awd",
    "pricing": { "msrpBase": 63900, "msrpMax": 63900 },
    "range": { "epaRangeMiles": 280, "batteryCapacityKwh": 99.8, "efficiencyMPGe": 89, "efficiencyKwhPer100Mi": 37.9 },
    "performance": { "horsepower": 379, "torque": 516, "zeroTo60": 5.2, "topSpeed": 107, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 210, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 81.7, "towingCapacityLbs": 5000, "curbWeightLbs": 5845 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2024-kia-ev9.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev9", "availabilityStatus": "Available", "dataSource": "Kia.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2024 EV9 Wind AWD: Mid-tier trim, 379 hp dual motors, 280 mi range, 5.2s 0-60. Premium features: heated/ventilated seats, power liftgate. 5,000 lb towing. CCS1 charging." }
  },
  {
    "id": "2024-kia-ev9-land-awd",
    "year": 2024,
    "make": "Kia",
    "model": "EV9",
    "trim": "Land AWD",
    "slug": "2024-kia-ev9-land-awd",
    "pricing": { "msrpBase": 67900, "msrpMax": 67900 },
    "range": { "epaRangeMiles": 280, "batteryCapacityKwh": 99.8, "efficiencyMPGe": 89, "efficiencyKwhPer100Mi": 37.9 },
    "performance": { "horsepower": 379, "torque": 516, "zeroTo60": 5.2, "topSpeed": 107, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 210, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 81.7, "towingCapacityLbs": 5000, "curbWeightLbs": 5870 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2024-kia-ev9.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev9", "availabilityStatus": "Available", "dataSource": "Kia.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2024 EV9 Land AWD: Luxury trim, 379 hp, 280 mi range. Premium interior with Meridian audio, relaxation seats, digital side mirrors, AR HUD. CCS1 charging." }
  },
  {
    "id": "2024-kia-ev9-gt-line-awd",
    "year": 2024,
    "make": "Kia",
    "model": "EV9",
    "trim": "GT-Line AWD",
    "slug": "2024-kia-ev9-gt-line-awd",
    "pricing": { "msrpBase": 71900, "msrpMax": 71900 },
    "range": { "epaRangeMiles": 270, "batteryCapacityKwh": 99.8, "efficiencyMPGe": 87, "efficiencyKwhPer100Mi": 38.8 },
    "performance": { "horsepower": 379, "torque": 516, "zeroTo60": 5.0, "topSpeed": 107, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 210, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 81.7, "towingCapacityLbs": 5000, "curbWeightLbs": 5905 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2024-kia-ev9.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev9", "availabilityStatus": "Available", "dataSource": "Kia.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2024 EV9 GT-Line AWD: Sport-tuned trim, 379 hp, 270 mi range, 5.0s 0-60. Sport suspension, unique styling. Full luxury features. CCS1 charging." }
  },
  {
    "id": "2025-kia-ev9-light-rwd",
    "year": 2025,
    "make": "Kia",
    "model": "EV9",
    "trim": "Light RWD",
    "slug": "2025-kia-ev9-light-rwd",
    "pricing": { "msrpBase": 54900, "msrpMax": 54900 },
    "range": { "epaRangeMiles": 230, "batteryCapacityKwh": 76.1, "efficiencyMPGe": 90, "efficiencyKwhPer100Mi": 37.5 },
    "performance": { "horsepower": 215, "torque": 258, "zeroTo60": 8.5, "topSpeed": 101, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 210, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 81.7, "towingCapacityLbs": 0, "curbWeightLbs": 5515 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-kia-ev9.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev9", "availabilityStatus": "Available", "dataSource": "Kia.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2025 EV9 Light RWD: Base 7-seat electric SUV, 215 hp, 230 mi EPA range. 76.1 kWh battery. Most affordable 3-row EV. CCS1 charging (NACS adapter included)." }
  },
  {
    "id": "2025-kia-ev9-light-lr-rwd",
    "year": 2025,
    "make": "Kia",
    "model": "EV9",
    "trim": "Light Long Range RWD",
    "slug": "2025-kia-ev9-light-lr-rwd",
    "pricing": { "msrpBase": 59900, "msrpMax": 59900 },
    "range": { "epaRangeMiles": 304, "batteryCapacityKwh": 99.8, "efficiencyMPGe": 97, "efficiencyKwhPer100Mi": 34.8 },
    "performance": { "horsepower": 201, "torque": 258, "zeroTo60": 8.8, "topSpeed": 101, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 210, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 81.7, "towingCapacityLbs": 0, "curbWeightLbs": 5690 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-kia-ev9.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev9", "availabilityStatus": "Available", "dataSource": "Kia.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2025 EV9 Light Long Range: 201 hp, 304 mi EPA range (longest range). 99.8 kWh battery, RWD for efficiency. 800V ultra-fast charging. CCS1 with NACS adapter." }
  },
  {
    "id": "2025-kia-ev9-wind-awd",
    "year": 2025,
    "make": "Kia",
    "model": "EV9",
    "trim": "Wind AWD",
    "slug": "2025-kia-ev9-wind-awd",
    "pricing": { "msrpBase": 63900, "msrpMax": 63900 },
    "range": { "epaRangeMiles": 280, "batteryCapacityKwh": 99.8, "efficiencyMPGe": 89, "efficiencyKwhPer100Mi": 37.9 },
    "performance": { "horsepower": 379, "torque": 516, "zeroTo60": 5.2, "topSpeed": 107, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 210, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 81.7, "towingCapacityLbs": 5000, "curbWeightLbs": 5845 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-kia-ev9.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev9", "availabilityStatus": "Available", "dataSource": "Kia.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2025 EV9 Wind AWD: Mid-tier trim, 379 hp dual motors, 280 mi range, 5.2s 0-60. Premium features: heated/ventilated seats, power liftgate. 5,000 lb towing. CCS1 with NACS adapter." }
  },
  {
    "id": "2025-kia-ev9-land-awd",
    "year": 2025,
    "make": "Kia",
    "model": "EV9",
    "trim": "Land AWD",
    "slug": "2025-kia-ev9-land-awd",
    "pricing": { "msrpBase": 67900, "msrpMax": 67900 },
    "range": { "epaRangeMiles": 280, "batteryCapacityKwh": 99.8, "efficiencyMPGe": 89, "efficiencyKwhPer100Mi": 37.9 },
    "performance": { "horsepower": 379, "torque": 516, "zeroTo60": 5.2, "topSpeed": 107, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 210, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 81.7, "towingCapacityLbs": 5000, "curbWeightLbs": 5870 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-kia-ev9.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev9", "availabilityStatus": "Available", "dataSource": "Kia.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2025 EV9 Land AWD: Luxury trim, 379 hp, 280 mi range. Premium interior with Meridian audio, relaxation seats, digital side mirrors, AR HUD. CCS1 with NACS adapter." }
  },
  {
    "id": "2025-kia-ev9-gt-line-awd",
    "year": 2025,
    "make": "Kia",
    "model": "EV9",
    "trim": "GT-Line AWD",
    "slug": "2025-kia-ev9-gt-line-awd",
    "pricing": { "msrpBase": 71900, "msrpMax": 71900 },
    "range": { "epaRangeMiles": 270, "batteryCapacityKwh": 99.8, "efficiencyMPGe": 87, "efficiencyKwhPer100Mi": 38.8 },
    "performance": { "horsepower": 379, "torque": 516, "zeroTo60": 5.0, "topSpeed": 107, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 210, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 81.7, "towingCapacityLbs": 5000, "curbWeightLbs": 5905 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-kia-ev9.jpg", "manufacturerUrl": "https://www.kia.com/us/en/ev9", "availabilityStatus": "Available", "dataSource": "Kia.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2025 EV9 GT-Line AWD: Sport-tuned trim, 379 hp, 270 mi range, 5.0s 0-60. Sport suspension, unique styling. Full luxury features. CCS1 with NACS adapter." }
  },
  {
    "id": "2024-hyundai-ioniq-5-se-standard",
    "year": 2024,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "SE Standard",
    "slug": "2024-hyundai-ioniq-5-se-standard",
    "pricing": { "msrpBase": 41800, "msrpMax": 41800 },
    "range": { "epaRangeMiles": 220, "batteryCapacityKwh": 63.1, "efficiencyMPGe": 114, "efficiencyKwhPer100Mi": 29.6 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.4, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 230, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.2, "towingCapacityLbs": 0, "curbWeightLbs": 4200 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2024-hyundai-ioniq-5.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2024 IONIQ 5 SE Standard: Base trim, 225 hp, 220 mi range. 63.1 kWh battery, 800V ultra-fast charging. V2L/V2H capable. CCS1 connector." }
  },
  {
    "id": "2024-hyundai-ioniq-5-se-rwd",
    "year": 2024,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "SE RWD",
    "slug": "2024-hyundai-ioniq-5-se-rwd",
    "pricing": { "msrpBase": 43975, "msrpMax": 43975 },
    "range": { "epaRangeMiles": 303, "batteryCapacityKwh": 84, "efficiencyMPGe": 132, "efficiencyKwhPer100Mi": 25.6 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.4, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 230, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.2, "towingCapacityLbs": 0, "curbWeightLbs": 4400 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2024-hyundai-ioniq-5.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2024 IONIQ 5 SE RWD: 225 hp, 303 mi range with 84 kWh long-range battery. Best efficiency in lineup. 800V charging, V2L/V2H. CCS1 connector." }
  },
  {
    "id": "2024-hyundai-ioniq-5-sel-rwd",
    "year": 2024,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "SEL RWD",
    "slug": "2024-hyundai-ioniq-5-sel-rwd",
    "pricing": { "msrpBase": 47575, "msrpMax": 47575 },
    "range": { "epaRangeMiles": 303, "batteryCapacityKwh": 84, "efficiencyMPGe": 132, "efficiencyKwhPer100Mi": 25.6 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.4, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 230, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.2, "towingCapacityLbs": 0, "curbWeightLbs": 4420 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2024-hyundai-ioniq-5.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2024 IONIQ 5 SEL RWD: 225 hp, 303 mi range. Mid-trim adds heated seats, smart cruise, wireless charging. 800V charging, V2L/V2H. CCS1 connector." }
  },
  {
    "id": "2024-hyundai-ioniq-5-limited-rwd",
    "year": 2024,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "Limited RWD",
    "slug": "2024-hyundai-ioniq-5-limited-rwd",
    "pricing": { "msrpBase": 52600, "msrpMax": 52600 },
    "range": { "epaRangeMiles": 303, "batteryCapacityKwh": 84, "efficiencyMPGe": 132, "efficiencyKwhPer100Mi": 25.6 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.4, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 230, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.2, "towingCapacityLbs": 0, "curbWeightLbs": 4450 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2024-hyundai-ioniq-5.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2024 IONIQ 5 Limited RWD: Top luxury trim, 225 hp, 303 mi range. Adds ventilated seats, Bose audio, surround-view camera. V2L/V2H. CCS1 connector." }
  },
  {
    "id": "2024-hyundai-ioniq-5-limited-awd",
    "year": 2024,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "Limited AWD",
    "slug": "2024-hyundai-ioniq-5-limited-awd",
    "pricing": { "msrpBase": 55650, "msrpMax": 55650 },
    "range": { "epaRangeMiles": 260, "batteryCapacityKwh": 84, "efficiencyMPGe": 110, "efficiencyKwhPer100Mi": 30.7 },
    "performance": { "horsepower": 320, "torque": 446, "zeroTo60": 4.5, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 230, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.2, "towingCapacityLbs": 0, "curbWeightLbs": 4700 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2024-hyundai-ioniq-5.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2024 IONIQ 5 Limited AWD: Top AWD luxury trim, 320 hp dual motor, 260 mi range, 4.5s 0-60. Full luxury features. V2L/V2H. CCS1 connector." }
  },
  {
    "id": "2025-hyundai-ioniq-5-se-standard",
    "year": 2025,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "SE Standard",
    "slug": "2025-hyundai-ioniq-5-se-standard",
    "pricing": { "msrpBase": 43975, "msrpMax": 43975 },
    "range": { "epaRangeMiles": 221, "batteryCapacityKwh": 63.1, "efficiencyMPGe": 114, "efficiencyKwhPer100Mi": 29.6 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.4, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 230, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.2, "towingCapacityLbs": 0, "curbWeightLbs": 4200 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-hyundai-ioniq-5.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2025 IONIQ 5 SE Standard: Base trim, 225 hp, 221 mi range. 63.1 kWh battery, 800V ultra-fast charging. V2L/V2H capable. CCS1 with NACS adapter." }
  },
  {
    "id": "2025-hyundai-ioniq-5-se-rwd",
    "year": 2025,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "SE RWD",
    "slug": "2025-hyundai-ioniq-5-se-rwd",
    "pricing": { "msrpBase": 45975, "msrpMax": 45975 },
    "range": { "epaRangeMiles": 303, "batteryCapacityKwh": 84, "efficiencyMPGe": 132, "efficiencyKwhPer100Mi": 25.6 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.4, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 230, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.2, "towingCapacityLbs": 0, "curbWeightLbs": 4400 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-hyundai-ioniq-5.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2025 IONIQ 5 SE RWD: 225 hp, 303 mi range with 84 kWh long-range battery. Best efficiency. 800V charging, V2L/V2H. CCS1 with NACS adapter." }
  },
  {
    "id": "2025-hyundai-ioniq-5-se-awd",
    "year": 2025,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "SE AWD",
    "slug": "2025-hyundai-ioniq-5-se-awd",
    "pricing": { "msrpBase": 49475, "msrpMax": 49475 },
    "range": { "epaRangeMiles": 260, "batteryCapacityKwh": 84, "efficiencyMPGe": 110, "efficiencyKwhPer100Mi": 30.7 },
    "performance": { "horsepower": 320, "torque": 446, "zeroTo60": 4.5, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 230, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.2, "towingCapacityLbs": 0, "curbWeightLbs": 4700 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-hyundai-ioniq-5.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2025 IONIQ 5 SE AWD: 320 hp dual motor, 260 mi range, 4.5s 0-60. 800V charging, V2L/V2H. CCS1 with NACS adapter." }
  },
  {
    "id": "2025-hyundai-ioniq-5-sel-rwd",
    "year": 2025,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "SEL RWD",
    "slug": "2025-hyundai-ioniq-5-sel-rwd",
    "pricing": { "msrpBase": 49575, "msrpMax": 49575 },
    "range": { "epaRangeMiles": 303, "batteryCapacityKwh": 84, "efficiencyMPGe": 132, "efficiencyKwhPer100Mi": 25.6 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.4, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 230, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.2, "towingCapacityLbs": 0, "curbWeightLbs": 4420 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-hyundai-ioniq-5.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2025 IONIQ 5 SEL RWD: 225 hp, 303 mi range. Mid-trim adds heated seats, smart cruise, wireless charging. V2L/V2H. CCS1 with NACS adapter." }
  },
  {
    "id": "2025-hyundai-ioniq-5-sel-awd",
    "year": 2025,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "SEL AWD",
    "slug": "2025-hyundai-ioniq-5-sel-awd",
    "pricing": { "msrpBase": 53075, "msrpMax": 53075 },
    "range": { "epaRangeMiles": 260, "batteryCapacityKwh": 84, "efficiencyMPGe": 110, "efficiencyKwhPer100Mi": 30.7 },
    "performance": { "horsepower": 320, "torque": 446, "zeroTo60": 4.5, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 230, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.2, "towingCapacityLbs": 0, "curbWeightLbs": 4700 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-hyundai-ioniq-5.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2025 IONIQ 5 SEL AWD: 320 hp dual motor, 260 mi range. Mid-trim with premium features. V2L/V2H. CCS1 with NACS adapter." }
  },
  {
    "id": "2025-hyundai-ioniq-5-limited-rwd",
    "year": 2025,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "Limited RWD",
    "slug": "2025-hyundai-ioniq-5-limited-rwd",
    "pricing": { "msrpBase": 54600, "msrpMax": 54600 },
    "range": { "epaRangeMiles": 303, "batteryCapacityKwh": 84, "efficiencyMPGe": 132, "efficiencyKwhPer100Mi": 25.6 },
    "performance": { "horsepower": 225, "torque": 258, "zeroTo60": 7.4, "topSpeed": 115, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 230, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.2, "towingCapacityLbs": 0, "curbWeightLbs": 4450 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-hyundai-ioniq-5.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2025 IONIQ 5 Limited RWD: Top luxury trim, 225 hp, 303 mi range. Ventilated seats, Bose audio, surround-view camera. V2L/V2H. CCS1 with NACS adapter." }
  },
  {
    "id": "2025-hyundai-ioniq-5-limited-awd",
    "year": 2025,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "Limited AWD",
    "slug": "2025-hyundai-ioniq-5-limited-awd",
    "pricing": { "msrpBase": 58100, "msrpMax": 58100 },
    "range": { "epaRangeMiles": 260, "batteryCapacityKwh": 84, "efficiencyMPGe": 110, "efficiencyKwhPer100Mi": 30.7 },
    "performance": { "horsepower": 320, "torque": 446, "zeroTo60": 4.5, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 230, "chargingTime10to80Minutes": 18 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 27.2, "towingCapacityLbs": 0, "curbWeightLbs": 4700 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": true, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2025-hyundai-ioniq-5.jpg", "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5", "availabilityStatus": "Available", "dataSource": "Hyundai.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2025 IONIQ 5 Limited AWD: Top AWD luxury trim, 320 hp, 260 mi range, 4.5s 0-60. Full luxury features, V2L/V2H. CCS1 with NACS adapter." }
  },
  {
    "id": "2025-volkswagen-id4-pro-rwd",
    "year": 2025,
    "make": "Volkswagen",
    "model": "ID.4",
    "trim": "Pro RWD",
    "slug": "2025-volkswagen-id4-pro-rwd",
    "pricing": { "msrpBase": 41995, "msrpMax": 41995 },
    "range": { "epaRangeMiles": 291, "batteryCapacityKwh": 82, "efficiencyMPGe": 109, "efficiencyKwhPer100Mi": 31.0 },
    "performance": { "horsepower": 282, "torque": 339, "zeroTo60": 6.9, "topSpeed": 112, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 170, "chargingTime10to80Minutes": 35 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 64.2, "towingCapacityLbs": 0, "curbWeightLbs": 4598 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Travel Assist with Lane Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-volkswagen-id4.jpg", "manufacturerUrl": "https://www.vw.com/en/models/id-4.html", "availabilityStatus": "Available", "dataSource": "VW.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2025 ID.4 Pro RWD: Base trim, 282 hp, 291 mi range. 82 kWh battery, rear-wheel drive for efficiency. CCS1 (NACS adapter available)." }
  },
  {
    "id": "2025-volkswagen-id4-pro-awd",
    "year": 2025,
    "make": "Volkswagen",
    "model": "ID.4",
    "trim": "Pro AWD",
    "slug": "2025-volkswagen-id4-pro-awd",
    "pricing": { "msrpBase": 45995, "msrpMax": 45995 },
    "range": { "epaRangeMiles": 263, "batteryCapacityKwh": 82, "efficiencyMPGe": 99, "efficiencyKwhPer100Mi": 34.0 },
    "performance": { "horsepower": 335, "torque": 368, "zeroTo60": 5.4, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 170, "chargingTime10to80Minutes": 35 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 64.2, "towingCapacityLbs": 2700, "curbWeightLbs": 4945 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Travel Assist with Lane Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-volkswagen-id4.jpg", "manufacturerUrl": "https://www.vw.com/en/models/id-4.html", "availabilityStatus": "Available", "dataSource": "VW.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2025 ID.4 Pro AWD: 335 hp dual-motor, 263 mi range, 5.4s 0-60. 2,700 lb towing capacity. CCS1 (NACS adapter available)." }
  },
  {
    "id": "2025-volkswagen-id4-pro-s-rwd",
    "year": 2025,
    "make": "Volkswagen",
    "model": "ID.4",
    "trim": "Pro S RWD",
    "slug": "2025-volkswagen-id4-pro-s-rwd",
    "pricing": { "msrpBase": 47995, "msrpMax": 47995 },
    "range": { "epaRangeMiles": 291, "batteryCapacityKwh": 82, "efficiencyMPGe": 109, "efficiencyKwhPer100Mi": 31.0 },
    "performance": { "horsepower": 282, "torque": 339, "zeroTo60": 6.9, "topSpeed": 112, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 170, "chargingTime10to80Minutes": 35 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 64.2, "towingCapacityLbs": 0, "curbWeightLbs": 4630 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Travel Assist with Lane Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-volkswagen-id4.jpg", "manufacturerUrl": "https://www.vw.com/en/models/id-4.html", "availabilityStatus": "Available", "dataSource": "VW.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2025 ID.4 Pro S RWD: Premium trim, 282 hp, 291 mi range. Adds premium audio, upgraded interior, panoramic sunroof. CCS1 (NACS adapter available)." }
  },
  {
    "id": "2025-volkswagen-id4-pro-s-awd",
    "year": 2025,
    "make": "Volkswagen",
    "model": "ID.4",
    "trim": "Pro S AWD",
    "slug": "2025-volkswagen-id4-pro-s-awd",
    "pricing": { "msrpBase": 51995, "msrpMax": 51995 },
    "range": { "epaRangeMiles": 263, "batteryCapacityKwh": 82, "efficiencyMPGe": 99, "efficiencyKwhPer100Mi": 34.0 },
    "performance": { "horsepower": 335, "torque": 368, "zeroTo60": 5.4, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 170, "chargingTime10to80Minutes": 35 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 64.2, "towingCapacityLbs": 2700, "curbWeightLbs": 4975 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Travel Assist with Lane Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-volkswagen-id4.jpg", "manufacturerUrl": "https://www.vw.com/en/models/id-4.html", "availabilityStatus": "Available", "dataSource": "VW.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2025 ID.4 Pro S AWD: Premium AWD trim, 335 hp, 263 mi range, 5.4s 0-60. 2,700 lb towing. Premium features. CCS1 (NACS adapter available)." }
  },
  {
    "id": "2026-volkswagen-id4-pro-rwd",
    "year": 2026,
    "make": "Volkswagen",
    "model": "ID.4",
    "trim": "Pro RWD",
    "slug": "2026-volkswagen-id4-pro-rwd",
    "pricing": { "msrpBase": 42500, "msrpMax": 42500 },
    "range": { "epaRangeMiles": 291, "batteryCapacityKwh": 82, "efficiencyMPGe": 109, "efficiencyKwhPer100Mi": 31.0 },
    "performance": { "horsepower": 282, "torque": 339, "zeroTo60": 6.9, "topSpeed": 112, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 170, "chargingTime10to80Minutes": 35 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 64.2, "towingCapacityLbs": 0, "curbWeightLbs": 4598 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Travel Assist with Lane Assist" },
    "meta": { "imageUrl": "/images/vehicles/2026-volkswagen-id4.jpg", "manufacturerUrl": "https://www.vw.com/en/models/id-4.html", "availabilityStatus": "Available", "dataSource": "VW.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2026 ID.4 Pro RWD: Base trim, 282 hp, 291 mi range. 82 kWh battery. NACS charging standard for 2026." }
  },
  {
    "id": "2026-volkswagen-id4-pro-awd",
    "year": 2026,
    "make": "Volkswagen",
    "model": "ID.4",
    "trim": "Pro AWD",
    "slug": "2026-volkswagen-id4-pro-awd",
    "pricing": { "msrpBase": 46500, "msrpMax": 46500 },
    "range": { "epaRangeMiles": 263, "batteryCapacityKwh": 82, "efficiencyMPGe": 99, "efficiencyKwhPer100Mi": 34.0 },
    "performance": { "horsepower": 335, "torque": 368, "zeroTo60": 5.4, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 170, "chargingTime10to80Minutes": 35 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 64.2, "towingCapacityLbs": 2700, "curbWeightLbs": 4945 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Travel Assist with Lane Assist" },
    "meta": { "imageUrl": "/images/vehicles/2026-volkswagen-id4.jpg", "manufacturerUrl": "https://www.vw.com/en/models/id-4.html", "availabilityStatus": "Available", "dataSource": "VW.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2026 ID.4 Pro AWD: 335 hp dual-motor, 263 mi range, 5.4s 0-60. 2,700 lb towing capacity. NACS charging standard." }
  },
  {
    "id": "2026-volkswagen-id4-pro-s-rwd",
    "year": 2026,
    "make": "Volkswagen",
    "model": "ID.4",
    "trim": "Pro S RWD",
    "slug": "2026-volkswagen-id4-pro-s-rwd",
    "pricing": { "msrpBase": 48500, "msrpMax": 48500 },
    "range": { "epaRangeMiles": 291, "batteryCapacityKwh": 82, "efficiencyMPGe": 109, "efficiencyKwhPer100Mi": 31.0 },
    "performance": { "horsepower": 282, "torque": 339, "zeroTo60": 6.9, "topSpeed": 112, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 170, "chargingTime10to80Minutes": 35 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 64.2, "towingCapacityLbs": 0, "curbWeightLbs": 4630 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Travel Assist with Lane Assist" },
    "meta": { "imageUrl": "/images/vehicles/2026-volkswagen-id4.jpg", "manufacturerUrl": "https://www.vw.com/en/models/id-4.html", "availabilityStatus": "Available", "dataSource": "VW.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2026 ID.4 Pro S RWD: Premium trim, 282 hp, 291 mi range. Premium audio, upgraded interior, panoramic sunroof. NACS charging standard." }
  },
  {
    "id": "2026-volkswagen-id4-pro-s-awd",
    "year": 2026,
    "make": "Volkswagen",
    "model": "ID.4",
    "trim": "Pro S AWD",
    "slug": "2026-volkswagen-id4-pro-s-awd",
    "pricing": { "msrpBase": 52500, "msrpMax": 52500 },
    "range": { "epaRangeMiles": 263, "batteryCapacityKwh": 82, "efficiencyMPGe": 99, "efficiencyKwhPer100Mi": 34.0 },
    "performance": { "horsepower": 335, "torque": 368, "zeroTo60": 5.4, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 170, "chargingTime10to80Minutes": 35 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 64.2, "towingCapacityLbs": 2700, "curbWeightLbs": 4975 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Travel Assist with Lane Assist" },
    "meta": { "imageUrl": "/images/vehicles/2026-volkswagen-id4.jpg", "manufacturerUrl": "https://www.vw.com/en/models/id-4.html", "availabilityStatus": "Available", "dataSource": "VW.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2026 ID.4 Pro S AWD: Premium AWD trim, 335 hp, 263 mi range, 5.4s 0-60. 2,700 lb towing. Premium features. NACS charging standard." }
  },
  {
    "id": "2025-volkswagen-id-buzz-pro-s-rwd",
    "year": 2025,
    "make": "Volkswagen",
    "model": "ID. Buzz",
    "trim": "Pro S RWD",
    "slug": "2025-volkswagen-id-buzz-pro-s-rwd",
    "pricing": { "msrpBase": 61545, "msrpMax": 61545 },
    "range": { "epaRangeMiles": 234, "batteryCapacityKwh": 86, "efficiencyMPGe": 95, "efficiencyKwhPer100Mi": 35.5 },
    "performance": { "horsepower": 282, "torque": 339, "zeroTo60": 7.6, "topSpeed": 99, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 170, "chargingTime10to80Minutes": 38 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 145.8, "towingCapacityLbs": 0, "curbWeightLbs": 5685 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Travel Assist with Lane Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-volkswagen-id-buzz.jpg", "manufacturerUrl": "https://www.vw.com/en/models/id-buzz.html", "availabilityStatus": "Available", "dataSource": "VW.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2025 ID. Buzz Pro S RWD: Iconic retro van styling, 282 hp, 234 mi range. 7-passenger seating, 145.8 cu ft cargo. CCS1 (NACS adapter available)." }
  },
  {
    "id": "2025-volkswagen-id-buzz-pro-s-plus-rwd",
    "year": 2025,
    "make": "Volkswagen",
    "model": "ID. Buzz",
    "trim": "Pro S Plus RWD",
    "slug": "2025-volkswagen-id-buzz-pro-s-plus-rwd",
    "pricing": { "msrpBase": 65545, "msrpMax": 65545 },
    "range": { "epaRangeMiles": 234, "batteryCapacityKwh": 86, "efficiencyMPGe": 95, "efficiencyKwhPer100Mi": 35.5 },
    "performance": { "horsepower": 282, "torque": 339, "zeroTo60": 7.6, "topSpeed": 99, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 170, "chargingTime10to80Minutes": 38 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 145.8, "towingCapacityLbs": 0, "curbWeightLbs": 5715 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Travel Assist with Lane Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-volkswagen-id-buzz.jpg", "manufacturerUrl": "https://www.vw.com/en/models/id-buzz.html", "availabilityStatus": "Available", "dataSource": "VW.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2025 ID. Buzz Pro S Plus RWD: Premium trim, 282 hp, 234 mi range. Adds premium audio, panoramic sunroof, enhanced interior. CCS1 (NACS adapter available)." }
  },
  {
    "id": "2025-volkswagen-id-buzz-pro-s-plus-awd",
    "year": 2025,
    "make": "Volkswagen",
    "model": "ID. Buzz",
    "trim": "Pro S Plus AWD",
    "slug": "2025-volkswagen-id-buzz-pro-s-plus-awd",
    "pricing": { "msrpBase": 69995, "msrpMax": 69995 },
    "range": { "epaRangeMiles": 231, "batteryCapacityKwh": 86, "efficiencyMPGe": 90, "efficiencyKwhPer100Mi": 37.4 },
    "performance": { "horsepower": 335, "torque": 368, "zeroTo60": 6.2, "topSpeed": 99, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 170, "chargingTime10to80Minutes": 38 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 145.8, "towingCapacityLbs": 2700, "curbWeightLbs": 6015 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Travel Assist with Lane Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-volkswagen-id-buzz.jpg", "manufacturerUrl": "https://www.vw.com/en/models/id-buzz.html", "availabilityStatus": "Available", "dataSource": "VW.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2025 ID. Buzz Pro S Plus AWD: Premium AWD trim, 335 hp dual-motor, 231 mi range, 6.2s 0-60. 2,700 lb towing. CCS1 (NACS adapter available)." }
  },
  {
    "id": "2026-volkswagen-id-buzz-pro-s-rwd",
    "year": 2026,
    "make": "Volkswagen",
    "model": "ID. Buzz",
    "trim": "Pro S RWD",
    "slug": "2026-volkswagen-id-buzz-pro-s-rwd",
    "pricing": { "msrpBase": 62500, "msrpMax": 62500 },
    "range": { "epaRangeMiles": 234, "batteryCapacityKwh": 86, "efficiencyMPGe": 95, "efficiencyKwhPer100Mi": 35.5 },
    "performance": { "horsepower": 282, "torque": 339, "zeroTo60": 7.6, "topSpeed": 99, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 170, "chargingTime10to80Minutes": 38 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 145.8, "towingCapacityLbs": 0, "curbWeightLbs": 5685 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Travel Assist with Lane Assist" },
    "meta": { "imageUrl": "/images/vehicles/2026-volkswagen-id-buzz.jpg", "manufacturerUrl": "https://www.vw.com/en/models/id-buzz.html", "availabilityStatus": "Available", "dataSource": "VW.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2026 ID. Buzz Pro S RWD: Iconic retro van, 282 hp, 234 mi range. 7-passenger seating, 145.8 cu ft cargo. NACS charging standard." }
  },
  {
    "id": "2026-volkswagen-id-buzz-pro-s-plus-rwd",
    "year": 2026,
    "make": "Volkswagen",
    "model": "ID. Buzz",
    "trim": "Pro S Plus RWD",
    "slug": "2026-volkswagen-id-buzz-pro-s-plus-rwd",
    "pricing": { "msrpBase": 66500, "msrpMax": 66500 },
    "range": { "epaRangeMiles": 234, "batteryCapacityKwh": 86, "efficiencyMPGe": 95, "efficiencyKwhPer100Mi": 35.5 },
    "performance": { "horsepower": 282, "torque": 339, "zeroTo60": 7.6, "topSpeed": 99, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 170, "chargingTime10to80Minutes": 38 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 145.8, "towingCapacityLbs": 0, "curbWeightLbs": 5715 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Travel Assist with Lane Assist" },
    "meta": { "imageUrl": "/images/vehicles/2026-volkswagen-id-buzz.jpg", "manufacturerUrl": "https://www.vw.com/en/models/id-buzz.html", "availabilityStatus": "Available", "dataSource": "VW.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2026 ID. Buzz Pro S Plus RWD: Premium trim, 282 hp, 234 mi range. Premium audio, panoramic sunroof. NACS charging standard." }
  },
  {
    "id": "2026-volkswagen-id-buzz-pro-s-plus-awd",
    "year": 2026,
    "make": "Volkswagen",
    "model": "ID. Buzz",
    "trim": "Pro S Plus AWD",
    "slug": "2026-volkswagen-id-buzz-pro-s-plus-awd",
    "pricing": { "msrpBase": 70995, "msrpMax": 70995 },
    "range": { "epaRangeMiles": 231, "batteryCapacityKwh": 86, "efficiencyMPGe": 90, "efficiencyKwhPer100Mi": 37.4 },
    "performance": { "horsepower": 335, "torque": 368, "zeroTo60": 6.2, "topSpeed": 99, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 170, "chargingTime10to80Minutes": 38 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 145.8, "towingCapacityLbs": 2700, "curbWeightLbs": 6015 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Travel Assist with Lane Assist" },
    "meta": { "imageUrl": "/images/vehicles/2026-volkswagen-id-buzz.jpg", "manufacturerUrl": "https://www.vw.com/en/models/id-buzz.html", "availabilityStatus": "Available", "dataSource": "VW.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2026 ID. Buzz Pro S Plus AWD: Premium AWD trim, 335 hp dual-motor, 231 mi range, 6.2s 0-60. 2,700 lb towing. NACS charging standard." }
  },
  {
    "id": "2024-ford-mustang-mach-e-select-rwd",
    "year": 2024,
    "make": "Ford",
    "model": "Mustang Mach-E",
    "trim": "Select RWD",
    "slug": "2024-ford-mustang-mach-e-select-rwd",
    "pricing": { "msrpBase": 41995, "msrpMax": 41995 },
    "range": { "epaRangeMiles": 250, "batteryCapacityKwh": 70, "efficiencyMPGe": 100, "efficiencyKwhPer100Mi": 33.7 },
    "performance": { "horsepower": 266, "torque": 317, "zeroTo60": 6.5, "topSpeed": 114, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.5, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 38 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 34.4, "towingCapacityLbs": 0, "curbWeightLbs": 4394 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "BlueCruise" },
    "meta": { "imageUrl": "/images/vehicles/2024-ford-mustang-mach-e.jpg", "manufacturerUrl": "https://www.ford.com/suvs/mach-e/", "availabilityStatus": "Available", "dataSource": "Ford.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2024 Mach-E Select: Base trim, 266 hp, 250 mi range. 70 kWh battery, RWD. Most affordable Mustang Mach-E. CCS1 connector." }
  },
  {
    "id": "2024-ford-mustang-mach-e-premium-rwd-er",
    "year": 2024,
    "make": "Ford",
    "model": "Mustang Mach-E",
    "trim": "Premium RWD ER",
    "slug": "2024-ford-mustang-mach-e-premium-rwd-er",
    "pricing": { "msrpBase": 46995, "msrpMax": 46995 },
    "range": { "epaRangeMiles": 312, "batteryCapacityKwh": 91, "efficiencyMPGe": 107, "efficiencyKwhPer100Mi": 31.5 },
    "performance": { "horsepower": 290, "torque": 317, "zeroTo60": 6.3, "topSpeed": 114, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.5, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 45 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 34.4, "towingCapacityLbs": 0, "curbWeightLbs": 4555 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "BlueCruise" },
    "meta": { "imageUrl": "/images/vehicles/2024-ford-mustang-mach-e.jpg", "manufacturerUrl": "https://www.ford.com/suvs/mach-e/", "availabilityStatus": "Available", "dataSource": "Ford.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2024 Mach-E Premium RWD ER: 290 hp, 312 mi range. 91 kWh extended range battery. Premium features. CCS1 connector." }
  },
  {
    "id": "2024-ford-mustang-mach-e-premium-awd-sr",
    "year": 2024,
    "make": "Ford",
    "model": "Mustang Mach-E",
    "trim": "Premium AWD SR",
    "slug": "2024-ford-mustang-mach-e-premium-awd-sr",
    "pricing": { "msrpBase": 47495, "msrpMax": 47495 },
    "range": { "epaRangeMiles": 226, "batteryCapacityKwh": 70, "efficiencyMPGe": 90, "efficiencyKwhPer100Mi": 37.5 },
    "performance": { "horsepower": 346, "torque": 428, "zeroTo60": 5.2, "topSpeed": 114, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.5, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 38 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 34.4, "towingCapacityLbs": 0, "curbWeightLbs": 4665 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "BlueCruise" },
    "meta": { "imageUrl": "/images/vehicles/2024-ford-mustang-mach-e.jpg", "manufacturerUrl": "https://www.ford.com/suvs/mach-e/", "availabilityStatus": "Available", "dataSource": "Ford.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2024 Mach-E Premium AWD SR: 346 hp dual-motor, 226 mi range, 5.2s 0-60. Standard range with AWD performance. CCS1 connector." }
  },
  {
    "id": "2024-ford-mustang-mach-e-premium-awd-er",
    "year": 2024,
    "make": "Ford",
    "model": "Mustang Mach-E",
    "trim": "Premium AWD ER",
    "slug": "2024-ford-mustang-mach-e-premium-awd-er",
    "pricing": { "msrpBase": 50995, "msrpMax": 50995 },
    "range": { "epaRangeMiles": 290, "batteryCapacityKwh": 91, "efficiencyMPGe": 97, "efficiencyKwhPer100Mi": 34.8 },
    "performance": { "horsepower": 346, "torque": 428, "zeroTo60": 5.1, "topSpeed": 114, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.5, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 45 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 34.4, "towingCapacityLbs": 0, "curbWeightLbs": 4825 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "BlueCruise" },
    "meta": { "imageUrl": "/images/vehicles/2024-ford-mustang-mach-e.jpg", "manufacturerUrl": "https://www.ford.com/suvs/mach-e/", "availabilityStatus": "Available", "dataSource": "Ford.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2024 Mach-E Premium AWD ER: 346 hp, 290 mi range. Extended range with dual motors. Balanced performance and range. CCS1 connector." }
  },
  {
    "id": "2024-ford-mustang-mach-e-gt",
    "year": 2024,
    "make": "Ford",
    "model": "Mustang Mach-E",
    "trim": "GT",
    "slug": "2024-ford-mustang-mach-e-gt",
    "pricing": { "msrpBase": 63995, "msrpMax": 63995 },
    "range": { "epaRangeMiles": 270, "batteryCapacityKwh": 91, "efficiencyMPGe": 88, "efficiencyKwhPer100Mi": 38.3 },
    "performance": { "horsepower": 480, "torque": 634, "zeroTo60": 3.5, "topSpeed": 124, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 10.5, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 45 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 34.4, "towingCapacityLbs": 0, "curbWeightLbs": 4920 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "BlueCruise" },
    "meta": { "imageUrl": "/images/vehicles/2024-ford-mustang-mach-e-gt.jpg", "manufacturerUrl": "https://www.ford.com/suvs/mach-e/", "availabilityStatus": "Available", "dataSource": "Ford.com, EPA FuelEconomy.gov", "lastVerified": "2025-11-30", "notes": "2024 Mach-E GT: Performance trim, 480 hp, 634 lb-ft torque, 3.5s 0-60. 270 mi range. Sport-tuned suspension with MagneRide dampers. CCS1 connector." }
  },
  {
    "id": "2026-hyundai-ioniq-9-s-rwd",
    "year": 2026,
    "make": "Hyundai",
    "model": "IONIQ 9",
    "trim": "S RWD",
    "slug": "2026-hyundai-ioniq-9-s-rwd",
    "pricing": { "msrpBase": 58955, "msrpMax": 60555 },
    "range": { "epaRangeMiles": 335, "batteryCapacityKwh": 110.3, "efficiencyMPGe": 92, "efficiencyKwhPer100Mi": 36.6 },
    "performance": { "horsepower": 215, "torque": 258, "zeroTo60": 7.2, "topSpeed": 112, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 88.1, "towingCapacityLbs": 0, "curbWeightLbs": 5600 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-hyundai-ioniq-9.jpg", "manufacturerUrl": "https://www.hyundaiusa.com/us/en/vehicles/ioniq-9", "availabilityStatus": "Available", "dataSource": "Hyundai.com, Car and Driver, EV Database", "lastVerified": "2025-12-03", "notes": "2026 IONIQ 9: First Hyundai with native NACS. 3-row midsize SUV with 335 mi range. 110.3 kWh battery, 350 kW charging (10-80% in 24 min). 400V/800V multi-charging. 7-passenger seating." }
  },
  {
    "id": "2026-hyundai-ioniq-9-se-awd",
    "year": 2026,
    "make": "Hyundai",
    "model": "IONIQ 9",
    "trim": "SE AWD",
    "slug": "2026-hyundai-ioniq-9-se-awd",
    "pricing": { "msrpBase": 64325, "msrpMax": 66325 },
    "range": { "epaRangeMiles": 303, "batteryCapacityKwh": 110.3, "efficiencyMPGe": 88, "efficiencyKwhPer100Mi": 38.3 },
    "performance": { "horsepower": 310, "torque": 445, "zeroTo60": 6.0, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 88.1, "towingCapacityLbs": 0, "curbWeightLbs": 5800 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-hyundai-ioniq-9.jpg", "manufacturerUrl": "https://www.hyundaiusa.com/us/en/vehicles/ioniq-9", "availabilityStatus": "Available", "dataSource": "Hyundai.com, Car and Driver", "lastVerified": "2025-12-03", "notes": "2026 IONIQ 9 SE AWD: Dual motor with 310 hp, 303 mi range. 800V architecture, native NACS, V2L capability. 7-passenger configuration." }
  },
  {
    "id": "2026-hyundai-ioniq-9-sel-awd",
    "year": 2026,
    "make": "Hyundai",
    "model": "IONIQ 9",
    "trim": "SEL AWD",
    "slug": "2026-hyundai-ioniq-9-sel-awd",
    "pricing": { "msrpBase": 67920, "msrpMax": 69920 },
    "range": { "epaRangeMiles": 303, "batteryCapacityKwh": 110.3, "efficiencyMPGe": 88, "efficiencyKwhPer100Mi": 38.3 },
    "performance": { "horsepower": 310, "torque": 445, "zeroTo60": 6.0, "topSpeed": 115, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 88.1, "towingCapacityLbs": 0, "curbWeightLbs": 5800 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-hyundai-ioniq-9.jpg", "manufacturerUrl": "https://www.hyundaiusa.com/us/en/vehicles/ioniq-9", "availabilityStatus": "Available", "dataSource": "Hyundai.com", "lastVerified": "2025-12-03", "notes": "2026 IONIQ 9 SEL: Mid-level trim with dual motor AWD, 303 mi range. Premium features, 800V fast charging, native NACS connector." }
  },
  {
    "id": "2026-hyundai-ioniq-9-limited-awd",
    "year": 2026,
    "make": "Hyundai",
    "model": "IONIQ 9",
    "trim": "Limited AWD",
    "slug": "2026-hyundai-ioniq-9-limited-awd",
    "pricing": { "msrpBase": 72850, "msrpMax": 74850 },
    "range": { "epaRangeMiles": 311, "batteryCapacityKwh": 110.3, "efficiencyMPGe": 85, "efficiencyKwhPer100Mi": 39.6 },
    "performance": { "horsepower": 422, "torque": 516, "zeroTo60": 4.9, "topSpeed": 120, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 6, "cargoVolumeCuFt": 88.1, "towingCapacityLbs": 0, "curbWeightLbs": 5900 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-hyundai-ioniq-9.jpg", "manufacturerUrl": "https://www.hyundaiusa.com/us/en/vehicles/ioniq-9", "availabilityStatus": "Available", "dataSource": "Hyundai.com, Car and Driver", "lastVerified": "2025-12-03", "notes": "2026 IONIQ 9 Limited: Performance model with 422 hp, 4.9s 0-60, 311 mi range. Captain's chairs (6-passenger), premium features, 350 kW charging." }
  },
  {
    "id": "2026-hyundai-ioniq-9-calligraphy-awd",
    "year": 2026,
    "make": "Hyundai",
    "model": "IONIQ 9",
    "trim": "Calligraphy AWD",
    "slug": "2026-hyundai-ioniq-9-calligraphy-awd",
    "pricing": { "msrpBase": 76590, "msrpMax": 79090 },
    "range": { "epaRangeMiles": 307, "batteryCapacityKwh": 110.3, "efficiencyMPGe": 85, "efficiencyKwhPer100Mi": 39.6 },
    "performance": { "horsepower": 422, "torque": 516, "zeroTo60": 4.4, "topSpeed": 120, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 24 },
    "physical": { "seatingCapacity": 6, "cargoVolumeCuFt": 88.1, "towingCapacityLbs": 0, "curbWeightLbs": 5950 },
    "features": { "hasHeatPump": true, "hasV2L": true, "hasV2H": false, "autopilotLevel": "Highway Driving Assist 2" },
    "meta": { "imageUrl": "/images/vehicles/2026-hyundai-ioniq-9.jpg", "manufacturerUrl": "https://www.hyundaiusa.com/us/en/vehicles/ioniq-9", "availabilityStatus": "Available", "dataSource": "Hyundai.com, Motor1", "lastVerified": "2025-12-03", "notes": "2026 IONIQ 9 Calligraphy: Flagship trim with 422 hp, 4.4s 0-60. Luxury 6-passenger SUV with captain's chairs, 307 mi range, native NACS, 800V ultra-fast charging." }
  },
  {
    "id": "2019-kia-niro-ev-ex",
    "year": 2019,
    "make": "Kia",
    "model": "Niro EV",
    "trim": "EX",
    "slug": "2019-kia-niro-ev-ex",
    "pricing": { "msrpBase": 39495, "msrpMax": 45045 },
    "range": { "epaRangeMiles": 239, "batteryCapacityKwh": 64, "efficiencyMPGe": 112, "efficiencyKwhPer100Mi": 30.1 },
    "performance": { "horsepower": 201, "torque": 291, "zeroTo60": 7.5, "topSpeed": 104, "drivetrain": "FWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 7.2, "dcChargingMaxKw": 77, "chargingTime10to80Minutes": 60 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 54.5, "towingCapacityLbs": 0, "curbWeightLbs": 3854 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "None" },
    "meta": { "imageUrl": "/images/vehicles/2019-kia-niro-ev.jpg", "manufacturerUrl": "https://www.kia.com/us/en/niro-ev", "availabilityStatus": "Discontinued", "dataSource": "Kia.com, EPA FuelEconomy.gov, EV Database", "lastVerified": "2025-12-03", "notes": "2019 Kia Niro EV: First gen compact crossover EV with 239 mi range. 64 kWh battery, 77 kW DC fast charging. 112 MPGe efficiency." }
  },
  {
    "id": "2020-kia-niro-ev-ex",
    "year": 2020,
    "make": "Kia",
    "model": "Niro EV",
    "trim": "EX",
    "slug": "2020-kia-niro-ev-ex",
    "pricing": { "msrpBase": 39090, "msrpMax": 44650 },
    "range": { "epaRangeMiles": 239, "batteryCapacityKwh": 64, "efficiencyMPGe": 112, "efficiencyKwhPer100Mi": 30.1 },
    "performance": { "horsepower": 201, "torque": 291, "zeroTo60": 7.5, "topSpeed": 104, "drivetrain": "FWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 7.2, "dcChargingMaxKw": 77, "chargingTime10to80Minutes": 60 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 54.5, "towingCapacityLbs": 0, "curbWeightLbs": 3854 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "None" },
    "meta": { "imageUrl": "/images/vehicles/2020-kia-niro-ev.jpg", "manufacturerUrl": "https://www.kia.com/us/en/niro-ev", "availabilityStatus": "Discontinued", "dataSource": "Kia.com, EPA FuelEconomy.gov", "lastVerified": "2025-12-03", "notes": "2020 Kia Niro EV: First generation with same specs as 2019. 239 mi range, 64 kWh battery, 112 MPGe." }
  },
  {
    "id": "2021-kia-niro-ev-ex",
    "year": 2021,
    "make": "Kia",
    "model": "Niro EV",
    "trim": "EX",
    "slug": "2021-kia-niro-ev-ex",
    "pricing": { "msrpBase": 39090, "msrpMax": 44650 },
    "range": { "epaRangeMiles": 239, "batteryCapacityKwh": 64, "efficiencyMPGe": 112, "efficiencyKwhPer100Mi": 30.1 },
    "performance": { "horsepower": 201, "torque": 291, "zeroTo60": 6.2, "topSpeed": 104, "drivetrain": "FWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 7.2, "dcChargingMaxKw": 77, "chargingTime10to80Minutes": 60 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 54.5, "towingCapacityLbs": 0, "curbWeightLbs": 3854 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "None" },
    "meta": { "imageUrl": "/images/vehicles/2021-kia-niro-ev.jpg", "manufacturerUrl": "https://www.kia.com/us/en/niro-ev", "availabilityStatus": "Discontinued", "dataSource": "Kia.com", "lastVerified": "2025-12-03", "notes": "2021 Kia Niro EV: Improved 0-60 time to 6.2s. 239 mi range, 64 kWh battery, 112 MPGe efficiency." }
  },
  {
    "id": "2022-kia-niro-ev-ex",
    "year": 2022,
    "make": "Kia",
    "model": "Niro EV",
    "trim": "EX",
    "slug": "2022-kia-niro-ev-ex",
    "pricing": { "msrpBase": 40385, "msrpMax": 45945 },
    "range": { "epaRangeMiles": 239, "batteryCapacityKwh": 64, "efficiencyMPGe": 112, "efficiencyKwhPer100Mi": 30.1 },
    "performance": { "horsepower": 201, "torque": 291, "zeroTo60": 6.2, "topSpeed": 104, "drivetrain": "FWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 7.2, "dcChargingMaxKw": 77, "chargingTime10to80Minutes": 60 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 54.5, "towingCapacityLbs": 0, "curbWeightLbs": 3854 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "None" },
    "meta": { "imageUrl": "/images/vehicles/2022-kia-niro-ev.jpg", "manufacturerUrl": "https://www.kia.com/us/en/niro-ev", "availabilityStatus": "Discontinued", "dataSource": "Kia.com", "lastVerified": "2025-12-03", "notes": "2022 Kia Niro EV: Last year of first generation. 239 mi range, 64 kWh battery, 112 MPGe." }
  },
  {
    "id": "2023-kia-niro-ev-wind",
    "year": 2023,
    "make": "Kia",
    "model": "Niro EV",
    "trim": "Wind",
    "slug": "2023-kia-niro-ev-wind",
    "pricing": { "msrpBase": 39450, "msrpMax": 45950 },
    "range": { "epaRangeMiles": 253, "batteryCapacityKwh": 64.8, "efficiencyMPGe": 123, "efficiencyKwhPer100Mi": 27.4 },
    "performance": { "horsepower": 201, "torque": 188, "zeroTo60": 6.7, "topSpeed": 104, "drivetrain": "FWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 85, "chargingTime10to80Minutes": 43 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 63.7, "towingCapacityLbs": 0, "curbWeightLbs": 3737 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Highway Driving Assist" },
    "meta": { "imageUrl": "/images/vehicles/2023-kia-niro-ev.jpg", "manufacturerUrl": "https://www.kia.com/us/en/niro-ev", "availabilityStatus": "Available", "dataSource": "Kia.com, EV Database", "lastVerified": "2025-12-03", "notes": "2023 Kia Niro EV: Second generation with 253 mi range (+14 mi). 64.8 kWh battery, 85 kW fast charging, 123 MPGe. Improved efficiency and cargo space." }
  },
  {
    "id": "2024-kia-niro-ev-wind",
    "year": 2024,
    "make": "Kia",
    "model": "Niro EV",
    "trim": "Wind",
    "slug": "2024-kia-niro-ev-wind",
    "pricing": { "msrpBase": 39450, "msrpMax": 45950 },
    "range": { "epaRangeMiles": 253, "batteryCapacityKwh": 64.8, "efficiencyMPGe": 123, "efficiencyKwhPer100Mi": 27.4 },
    "performance": { "horsepower": 201, "torque": 188, "zeroTo60": 6.7, "topSpeed": 104, "drivetrain": "FWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 85, "chargingTime10to80Minutes": 43 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 63.7, "towingCapacityLbs": 0, "curbWeightLbs": 3737 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Highway Driving Assist" },
    "meta": { "imageUrl": "/images/vehicles/2024-kia-niro-ev.jpg", "manufacturerUrl": "https://www.kia.com/us/en/niro-ev", "availabilityStatus": "Available", "dataSource": "Kia.com", "lastVerified": "2025-12-03", "notes": "2024 Kia Niro EV: Second gen continues with 253 mi range, 64.8 kWh battery, 123 MPGe efficiency." }
  },
  {
    "id": "2025-kia-niro-ev-wind",
    "year": 2025,
    "make": "Kia",
    "model": "Niro EV",
    "trim": "Wind",
    "slug": "2025-kia-niro-ev-wind",
    "pricing": { "msrpBase": 40995, "msrpMax": 45995 },
    "range": { "epaRangeMiles": 253, "batteryCapacityKwh": 64.8, "efficiencyMPGe": 123, "efficiencyKwhPer100Mi": 27.4 },
    "performance": { "horsepower": 201, "torque": 188, "zeroTo60": 6.7, "topSpeed": 104, "drivetrain": "FWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 85, "chargingTime10to80Minutes": 43 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 63.7, "towingCapacityLbs": 0, "curbWeightLbs": 3737 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Highway Driving Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-kia-niro-ev.jpg", "manufacturerUrl": "https://www.kia.com/us/en/niro-ev", "availabilityStatus": "Available", "dataSource": "Kia.com", "lastVerified": "2025-12-03", "notes": "2025 Kia Niro EV: Compact crossover with 253 mi range, 64.8 kWh battery, 10-year battery warranty." }
  },
  {
    "id": "2026-kia-niro-ev-wind",
    "year": 2026,
    "make": "Kia",
    "model": "Niro EV",
    "trim": "Wind",
    "slug": "2026-kia-niro-ev-wind",
    "pricing": { "msrpBase": 33000, "msrpMax": 40000 },
    "range": { "epaRangeMiles": 253, "batteryCapacityKwh": 64.8, "efficiencyMPGe": 123, "efficiencyKwhPer100Mi": 27.4 },
    "performance": { "horsepower": 201, "torque": 188, "zeroTo60": 6.7, "topSpeed": 104, "drivetrain": "FWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 85, "chargingTime10to80Minutes": 43 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 63.7, "towingCapacityLbs": 0, "curbWeightLbs": 3737 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Highway Driving Assist" },
    "meta": { "imageUrl": "/images/vehicles/2026-kia-niro-ev.jpg", "manufacturerUrl": "https://www.kia.com/us/en/niro-ev", "availabilityStatus": "Announced", "dataSource": "Industry reports", "lastVerified": "2025-12-03", "notes": "2026 Kia Niro EV: Expected to adopt native NACS connector. Affordable compact crossover with 253 mi range." }
  },
  {
    "id": "2023-lexus-rz-450e-premium",
    "year": 2023,
    "make": "Lexus",
    "model": "RZ",
    "trim": "450e Premium AWD",
    "slug": "2023-lexus-rz-450e-premium",
    "pricing": { "msrpBase": 59650, "msrpMax": 65000 },
    "range": { "epaRangeMiles": 220, "batteryCapacityKwh": 71.4, "efficiencyMPGe": 107, "efficiencyKwhPer100Mi": 31.5 },
    "performance": { "horsepower": 308, "torque": 320, "zeroTo60": 5.0, "topSpeed": 100, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 7.6, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.6, "towingCapacityLbs": 0, "curbWeightLbs": 4740 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Lexus Safety System+ 3.0" },
    "meta": { "imageUrl": "/images/vehicles/2023-lexus-rz.jpg", "manufacturerUrl": "https://www.lexus.com/models/rz", "availabilityStatus": "Available", "dataSource": "Lexus.com, Car and Driver, InsideEVs", "lastVerified": "2025-12-03", "notes": "2023 Lexus RZ 450e: First Lexus EV for US market. Dual motor AWD with 308 hp, 220 mi range. 71.4 kWh battery, 150 kW DC fast charging. Based on Toyota bZ4X platform." }
  },
  {
    "id": "2024-lexus-rz-300e-premium",
    "year": 2024,
    "make": "Lexus",
    "model": "RZ",
    "trim": "300e Premium FWD",
    "slug": "2024-lexus-rz-300e-premium",
    "pricing": { "msrpBase": 55175, "msrpMax": 60905 },
    "range": { "epaRangeMiles": 266, "batteryCapacityKwh": 72.8, "efficiencyMPGe": 125, "efficiencyKwhPer100Mi": 27.0 },
    "performance": { "horsepower": 201, "torque": 196, "zeroTo60": 7.4, "topSpeed": 100, "drivetrain": "FWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 7.6, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.6, "towingCapacityLbs": 0, "curbWeightLbs": 4500 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Lexus Safety System+ 3.0" },
    "meta": { "imageUrl": "/images/vehicles/2024-lexus-rz.jpg", "manufacturerUrl": "https://www.lexus.com/models/rz", "availabilityStatus": "Available", "dataSource": "Lexus.com, Car and Driver", "lastVerified": "2025-12-03", "notes": "2024 Lexus RZ 300e: FWD model with improved range (266 mi). 201 hp, 125 MPGe efficiency. Premium luxury EV crossover." }
  },
  {
    "id": "2024-lexus-rz-450e-luxury",
    "year": 2024,
    "make": "Lexus",
    "model": "RZ",
    "trim": "450e Luxury AWD",
    "slug": "2024-lexus-rz-450e-luxury",
    "pricing": { "msrpBase": 65580, "msrpMax": 70000 },
    "range": { "epaRangeMiles": 220, "batteryCapacityKwh": 71.4, "efficiencyMPGe": 107, "efficiencyKwhPer100Mi": 31.5 },
    "performance": { "horsepower": 308, "torque": 320, "zeroTo60": 4.6, "topSpeed": 100, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 7.6, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.6, "towingCapacityLbs": 0, "curbWeightLbs": 4740 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Lexus Safety System+ 3.0" },
    "meta": { "imageUrl": "/images/vehicles/2024-lexus-rz.jpg", "manufacturerUrl": "https://www.lexus.com/models/rz", "availabilityStatus": "Available", "dataSource": "Lexus.com", "lastVerified": "2025-12-03", "notes": "2024 Lexus RZ 450e Luxury: Top trim AWD with 308 hp, 4.6s 0-60. Premium features, 220 mi range." }
  },
  {
    "id": "2025-lexus-rz-300e-premium",
    "year": 2025,
    "make": "Lexus",
    "model": "RZ",
    "trim": "300e Premium FWD",
    "slug": "2025-lexus-rz-300e-premium",
    "pricing": { "msrpBase": 48175, "msrpMax": 53905 },
    "range": { "epaRangeMiles": 266, "batteryCapacityKwh": 72.8, "efficiencyMPGe": 125, "efficiencyKwhPer100Mi": 27.0 },
    "performance": { "horsepower": 201, "torque": 196, "zeroTo60": 7.4, "topSpeed": 100, "drivetrain": "FWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 7.6, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.6, "towingCapacityLbs": 0, "curbWeightLbs": 4500 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Lexus Safety System+ 3.0" },
    "meta": { "imageUrl": "/images/vehicles/2025-lexus-rz.jpg", "manufacturerUrl": "https://www.lexus.com/models/rz", "availabilityStatus": "Available", "dataSource": "Lexus.com, U.S. News", "lastVerified": "2025-12-03", "notes": "2025 Lexus RZ 300e: Price reduced significantly from 2024. FWD with 266 mi range, 201 hp, 125 MPGe." }
  },
  {
    "id": "2025-lexus-rz-450e-premium",
    "year": 2025,
    "make": "Lexus",
    "model": "RZ",
    "trim": "450e Premium AWD",
    "slug": "2025-lexus-rz-450e-premium",
    "pricing": { "msrpBase": 52875, "msrpMax": 58605 },
    "range": { "epaRangeMiles": 220, "batteryCapacityKwh": 71.4, "efficiencyMPGe": 107, "efficiencyKwhPer100Mi": 31.5 },
    "performance": { "horsepower": 308, "torque": 320, "zeroTo60": 5.0, "topSpeed": 100, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 7.6, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.6, "towingCapacityLbs": 0, "curbWeightLbs": 4740 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Lexus Safety System+ 3.0" },
    "meta": { "imageUrl": "/images/vehicles/2025-lexus-rz.jpg", "manufacturerUrl": "https://www.lexus.com/models/rz", "availabilityStatus": "Available", "dataSource": "Lexus.com", "lastVerified": "2025-12-03", "notes": "2025 Lexus RZ 450e: Dual motor AWD with 308 hp, 220 mi range. Price reduced from 2024." }
  },
  {
    "id": "2026-lexus-rz-350e-base",
    "year": 2026,
    "make": "Lexus",
    "model": "RZ",
    "trim": "350e FWD",
    "slug": "2026-lexus-rz-350e-base",
    "pricing": { "msrpBase": 47295, "msrpMax": 52000 },
    "range": { "epaRangeMiles": 300, "batteryCapacityKwh": 74.69, "efficiencyMPGe": 130, "efficiencyKwhPer100Mi": 26.0 },
    "performance": { "horsepower": 221, "torque": 210, "zeroTo60": 7.1, "topSpeed": 105, "drivetrain": "FWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.6, "towingCapacityLbs": 0, "curbWeightLbs": 4550 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Lexus Safety System+ 3.0" },
    "meta": { "imageUrl": "/images/vehicles/2026-lexus-rz.jpg", "manufacturerUrl": "https://www.lexus.com/models/rz", "availabilityStatus": "Announced", "dataSource": "Lexus Newsroom, EV Charging Stations", "lastVerified": "2025-12-03", "notes": "2026 Lexus RZ 350e: Major update with native NACS connector, 300 mi range. 74.69 kWh battery, 11 kW AC charging (upgraded from 7.6 kW). Plug & Charge, Tesla Supercharger access." }
  },
  {
    "id": "2026-lexus-rz-450e-base",
    "year": 2026,
    "make": "Lexus",
    "model": "RZ",
    "trim": "450e AWD",
    "slug": "2026-lexus-rz-450e-base",
    "pricing": { "msrpBase": 52000, "msrpMax": 58000 },
    "range": { "epaRangeMiles": 266, "batteryCapacityKwh": 74.69, "efficiencyMPGe": 115, "efficiencyKwhPer100Mi": 29.3 },
    "performance": { "horsepower": 308, "torque": 320, "zeroTo60": 5.0, "topSpeed": 105, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.6, "towingCapacityLbs": 0, "curbWeightLbs": 4760 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Lexus Safety System+ 3.0" },
    "meta": { "imageUrl": "/images/vehicles/2026-lexus-rz.jpg", "manufacturerUrl": "https://www.lexus.com/models/rz", "availabilityStatus": "Announced", "dataSource": "Lexus Newsroom", "lastVerified": "2025-12-03", "notes": "2026 Lexus RZ 450e: Dual motor AWD with native NACS, 266 mi range, optional 375 hp upgrade ($1,750). Tesla Supercharger network access." }
  },
  {
    "id": "2026-lexus-rz-550e-f-sport",
    "year": 2026,
    "make": "Lexus",
    "model": "RZ",
    "trim": "550e F Sport AWD",
    "slug": "2026-lexus-rz-550e-f-sport",
    "pricing": { "msrpBase": 65000, "msrpMax": 72000 },
    "range": { "epaRangeMiles": 228, "batteryCapacityKwh": 76.96, "efficiencyMPGe": 105, "efficiencyKwhPer100Mi": 32.1 },
    "performance": { "horsepower": 402, "torque": 390, "zeroTo60": 4.1, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.6, "towingCapacityLbs": 0, "curbWeightLbs": 4900 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Lexus Safety System+ 3.0" },
    "meta": { "imageUrl": "/images/vehicles/2026-lexus-rz.jpg", "manufacturerUrl": "https://www.lexus.com/models/rz", "availabilityStatus": "Announced", "dataSource": "Lexus Newsroom, EV Charging Stations", "lastVerified": "2025-12-03", "notes": "2026 Lexus RZ 550e F Sport: NEW performance variant with 402 hp, 4.1s 0-60. Native NACS, 228 mi range, sport-tuned suspension." }
  },
  {
    "id": "2021-volvo-xc40-recharge-plus",
    "year": 2021,
    "make": "Volvo",
    "model": "XC40 Recharge",
    "trim": "Plus AWD",
    "slug": "2021-volvo-xc40-recharge-plus",
    "pricing": { "msrpBase": 53990, "msrpMax": 58150 },
    "range": { "epaRangeMiles": 208, "batteryCapacityKwh": 75, "efficiencyMPGe": 85, "efficiencyKwhPer100Mi": 39.7 },
    "performance": { "horsepower": 402, "torque": 486, "zeroTo60": 4.3, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 37 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 47.2, "towingCapacityLbs": 0, "curbWeightLbs": 4890 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2021-volvo-xc40-recharge.jpg", "manufacturerUrl": "https://www.volvocars.com/us/cars/xc40-electric/", "availabilityStatus": "Discontinued", "dataSource": "Volvo.com, EV Database", "lastVerified": "2025-12-03", "notes": "2021 Volvo XC40 Recharge: First Volvo BEV in US. Dual motor AWD with 402 hp, 4.3s 0-60, 208 mi range. 75 kWh battery, Google Built-in." }
  },
  {
    "id": "2022-volvo-xc40-recharge-plus",
    "year": 2022,
    "make": "Volvo",
    "model": "XC40 Recharge",
    "trim": "Plus AWD",
    "slug": "2022-volvo-xc40-recharge-plus",
    "pricing": { "msrpBase": 55300, "msrpMax": 58150 },
    "range": { "epaRangeMiles": 223, "batteryCapacityKwh": 75, "efficiencyMPGe": 92, "efficiencyKwhPer100Mi": 36.7 },
    "performance": { "horsepower": 402, "torque": 486, "zeroTo60": 4.3, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 37 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 47.2, "towingCapacityLbs": 0, "curbWeightLbs": 4890 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2022-volvo-xc40-recharge.jpg", "manufacturerUrl": "https://www.volvocars.com/us/cars/xc40-electric/", "availabilityStatus": "Discontinued", "dataSource": "Volvo.com, Car and Driver", "lastVerified": "2025-12-03", "notes": "2022 Volvo XC40 Recharge: Improved range to 223 mi. Dual motor AWD, 402 hp, 150 kW DC charging." }
  },
  {
    "id": "2023-volvo-xc40-recharge-core",
    "year": 2023,
    "make": "Volvo",
    "model": "XC40 Recharge",
    "trim": "Core AWD",
    "slug": "2023-volvo-xc40-recharge-core",
    "pricing": { "msrpBase": 54645, "msrpMax": 58000 },
    "range": { "epaRangeMiles": 223, "batteryCapacityKwh": 75, "efficiencyMPGe": 92, "efficiencyKwhPer100Mi": 36.7 },
    "performance": { "horsepower": 402, "torque": 486, "zeroTo60": 4.3, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 37 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 47.2, "towingCapacityLbs": 0, "curbWeightLbs": 4890 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2023-volvo-xc40-recharge.jpg", "manufacturerUrl": "https://www.volvocars.com/us/cars/xc40-electric/", "availabilityStatus": "Discontinued", "dataSource": "Volvo.com", "lastVerified": "2025-12-03", "notes": "2023 Volvo XC40 Recharge Core: Dual motor AWD compact SUV with 223 mi range, 402 hp." }
  },
  {
    "id": "2024-volvo-xc40-recharge-single-motor",
    "year": 2024,
    "make": "Volvo",
    "model": "XC40 Recharge",
    "trim": "Core RWD",
    "slug": "2024-volvo-xc40-recharge-single-motor",
    "pricing": { "msrpBase": 53645, "msrpMax": 58000 },
    "range": { "epaRangeMiles": 293, "batteryCapacityKwh": 79, "efficiencyMPGe": 106, "efficiencyKwhPer100Mi": 31.8 },
    "performance": { "horsepower": 248, "torque": 310, "zeroTo60": 6.5, "topSpeed": 112, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 200, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 47.2, "towingCapacityLbs": 0, "curbWeightLbs": 4650 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2024-volvo-xc40-recharge.jpg", "manufacturerUrl": "https://www.volvocars.com/us/cars/xc40-electric/", "availabilityStatus": "Available", "dataSource": "Volvo.com, Car and Driver", "lastVerified": "2025-12-03", "notes": "2024 Volvo XC40 Recharge: Major update with single motor RWD option. 293 mi range, 79 kWh battery, 200 kW DC charging. Improved efficiency (106 MPGe)." }
  },
  {
    "id": "2024-volvo-xc40-recharge-twin-motor",
    "year": 2024,
    "make": "Volvo",
    "model": "XC40 Recharge",
    "trim": "Core AWD",
    "slug": "2024-volvo-xc40-recharge-twin-motor",
    "pricing": { "msrpBase": 55395, "msrpMax": 60000 },
    "range": { "epaRangeMiles": 254, "batteryCapacityKwh": 75, "efficiencyMPGe": 98, "efficiencyKwhPer100Mi": 34.4 },
    "performance": { "horsepower": 402, "torque": 486, "zeroTo60": 4.5, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 200, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 47.2, "towingCapacityLbs": 0, "curbWeightLbs": 4890 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2024-volvo-xc40-recharge.jpg", "manufacturerUrl": "https://www.volvocars.com/us/cars/xc40-electric/", "availabilityStatus": "Available", "dataSource": "Volvo.com", "lastVerified": "2025-12-03", "notes": "2024 Volvo XC40 Recharge Twin Motor: Dual motor AWD with 402 hp, 254 mi range, 200 kW charging." }
  },
  {
    "id": "2022-volvo-c40-recharge-twin",
    "year": 2022,
    "make": "Volvo",
    "model": "C40 Recharge",
    "trim": "Twin AWD",
    "slug": "2022-volvo-c40-recharge-twin",
    "pricing": { "msrpBase": 59845, "msrpMax": 65000 },
    "range": { "epaRangeMiles": 226, "batteryCapacityKwh": 75, "efficiencyMPGe": 94, "efficiencyKwhPer100Mi": 35.9 },
    "performance": { "horsepower": 402, "torque": 486, "zeroTo60": 4.3, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 37 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 45.5, "towingCapacityLbs": 0, "curbWeightLbs": 4920 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2022-volvo-c40-recharge.jpg", "manufacturerUrl": "https://www.volvocars.com/us/cars/c40-electric/", "availabilityStatus": "Discontinued", "dataSource": "Volvo.com, Car and Driver", "lastVerified": "2025-12-03", "notes": "2022 Volvo C40 Recharge: Coupe crossover with fastback design. Dual motor AWD, 402 hp, 226 mi range. Same platform as XC40 Recharge." }
  },
  {
    "id": "2023-volvo-c40-recharge-core",
    "year": 2023,
    "make": "Volvo",
    "model": "C40 Recharge",
    "trim": "Core AWD",
    "slug": "2023-volvo-c40-recharge-core",
    "pricing": { "msrpBase": 58845, "msrpMax": 64000 },
    "range": { "epaRangeMiles": 226, "batteryCapacityKwh": 75, "efficiencyMPGe": 94, "efficiencyKwhPer100Mi": 35.9 },
    "performance": { "horsepower": 402, "torque": 486, "zeroTo60": 4.3, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 150, "chargingTime10to80Minutes": 37 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 45.5, "towingCapacityLbs": 0, "curbWeightLbs": 4920 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2023-volvo-c40-recharge.jpg", "manufacturerUrl": "https://www.volvocars.com/us/cars/c40-electric/", "availabilityStatus": "Discontinued", "dataSource": "Volvo.com", "lastVerified": "2025-12-03", "notes": "2023 Volvo C40 Recharge: Coupe crossover with 226 mi range, dual motor AWD, 402 hp." }
  },
  {
    "id": "2024-volvo-c40-recharge-single-motor",
    "year": 2024,
    "make": "Volvo",
    "model": "C40 Recharge",
    "trim": "Core RWD",
    "slug": "2024-volvo-c40-recharge-single-motor",
    "pricing": { "msrpBase": 54795, "msrpMax": 60000 },
    "range": { "epaRangeMiles": 297, "batteryCapacityKwh": 82, "efficiencyMPGe": 107, "efficiencyKwhPer100Mi": 31.5 },
    "performance": { "horsepower": 248, "torque": 310, "zeroTo60": 6.9, "topSpeed": 112, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 200, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 45.5, "towingCapacityLbs": 0, "curbWeightLbs": 4680 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2024-volvo-c40-recharge.jpg", "manufacturerUrl": "https://www.volvocars.com/us/cars/c40-electric/", "availabilityStatus": "Available", "dataSource": "Volvo.com, MotorTrend", "lastVerified": "2025-12-03", "notes": "2024 Volvo C40 Recharge: Major update with single motor RWD. 297 mi range, 82 kWh battery, 200 kW DC charging." }
  },
  {
    "id": "2024-volvo-c40-recharge-twin-motor",
    "year": 2024,
    "make": "Volvo",
    "model": "C40 Recharge",
    "trim": "Core AWD",
    "slug": "2024-volvo-c40-recharge-twin-motor",
    "pricing": { "msrpBase": 57000, "msrpMax": 63000 },
    "range": { "epaRangeMiles": 257, "batteryCapacityKwh": 77, "efficiencyMPGe": 99, "efficiencyKwhPer100Mi": 34.0 },
    "performance": { "horsepower": 402, "torque": 494, "zeroTo60": 4.6, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 200, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 45.5, "towingCapacityLbs": 0, "curbWeightLbs": 4920 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2024-volvo-c40-recharge.jpg", "manufacturerUrl": "https://www.volvocars.com/us/cars/c40-electric/", "availabilityStatus": "Available", "dataSource": "Volvo.com", "lastVerified": "2025-12-03", "notes": "2024 Volvo C40 Recharge Twin Motor: Dual motor AWD with 402 hp, 257 mi range, coupe crossover design." }
  },
  {
    "id": "2025-volvo-ec40-single-motor",
    "year": 2025,
    "make": "Volvo",
    "model": "EC40",
    "trim": "Core RWD",
    "slug": "2025-volvo-ec40-single-motor",
    "pricing": { "msrpBase": 54795, "msrpMax": 60295 },
    "range": { "epaRangeMiles": 298, "batteryCapacityKwh": 82, "efficiencyMPGe": 107, "efficiencyKwhPer100Mi": 31.5 },
    "performance": { "horsepower": 248, "torque": 310, "zeroTo60": 6.9, "topSpeed": 112, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 200, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 45.5, "towingCapacityLbs": 0, "curbWeightLbs": 4680 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-volvo-ec40.jpg", "manufacturerUrl": "https://www.volvocars.com/en-ca/cars/ec40-electric/", "availabilityStatus": "Available", "dataSource": "Volvo.com, EV Database", "lastVerified": "2025-12-03", "notes": "2025 Volvo EC40: Renamed from C40 Recharge. Single motor RWD with 298 mi range, 82 kWh battery, 200 kW charging." }
  },
  {
    "id": "2025-volvo-ec40-twin-motor",
    "year": 2025,
    "make": "Volvo",
    "model": "EC40",
    "trim": "Core AWD",
    "slug": "2025-volvo-ec40-twin-motor",
    "pricing": { "msrpBase": 57000, "msrpMax": 63000 },
    "range": { "epaRangeMiles": 268, "batteryCapacityKwh": 82, "efficiencyMPGe": 99, "efficiencyKwhPer100Mi": 34.0 },
    "performance": { "horsepower": 402, "torque": 494, "zeroTo60": 4.6, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 200, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 45.5, "towingCapacityLbs": 0, "curbWeightLbs": 4920 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-volvo-ec40.jpg", "manufacturerUrl": "https://www.volvocars.com/en-ca/cars/ec40-electric/", "availabilityStatus": "Available", "dataSource": "Volvo.com", "lastVerified": "2025-12-03", "notes": "2025 Volvo EC40 Twin Motor: Dual motor AWD with 402 hp, 268 mi range. Renamed from C40 Recharge." }
  },
  {
    "id": "2026-volvo-ec40-single-motor",
    "year": 2026,
    "make": "Volvo",
    "model": "EC40",
    "trim": "Core RWD",
    "slug": "2026-volvo-ec40-single-motor",
    "pricing": { "msrpBase": 55000, "msrpMax": 61000 },
    "range": { "epaRangeMiles": 298, "batteryCapacityKwh": 82, "efficiencyMPGe": 107, "efficiencyKwhPer100Mi": 31.5 },
    "performance": { "horsepower": 248, "torque": 310, "zeroTo60": 6.9, "topSpeed": 112, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 200, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 45.5, "towingCapacityLbs": 0, "curbWeightLbs": 4680 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2026-volvo-ec40.jpg", "manufacturerUrl": "https://www.volvocars.com/en-ca/cars/ec40-electric/", "availabilityStatus": "Announced", "dataSource": "Volvo.com", "lastVerified": "2025-12-03", "notes": "2026 Volvo EC40: Expected native NACS connector. Single motor RWD with 298 mi range, coupe crossover design." }
  },
  {
    "id": "2024-volvo-ex30-single-motor",
    "year": 2024,
    "make": "Volvo",
    "model": "EX30",
    "trim": "Extended Range RWD",
    "slug": "2024-volvo-ex30-single-motor",
    "pricing": { "msrpBase": 38950, "msrpMax": 44000 },
    "range": { "epaRangeMiles": 261, "batteryCapacityKwh": 69, "efficiencyMPGe": 116, "efficiencyKwhPer100Mi": 29.1 },
    "performance": { "horsepower": 268, "torque": 253, "zeroTo60": 5.1, "topSpeed": 112, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 153, "chargingTime10to80Minutes": 27 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 34.9, "towingCapacityLbs": 0, "curbWeightLbs": 3990 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2024-volvo-ex30.jpg", "manufacturerUrl": "https://www.volvocars.com/us/cars/ex30-electric/", "availabilityStatus": "Available", "dataSource": "Volvo.com, Car and Driver", "lastVerified": "2025-12-03", "notes": "2024 Volvo EX30: Compact SUV with 261 mi range. Most affordable Volvo EV, 69 kWh battery, 153 kW DC charging, Google Built-in." }
  },
  {
    "id": "2024-volvo-ex30-twin-motor",
    "year": 2024,
    "make": "Volvo",
    "model": "EX30",
    "trim": "Performance AWD",
    "slug": "2024-volvo-ex30-twin-motor",
    "pricing": { "msrpBase": 46000, "msrpMax": 52000 },
    "range": { "epaRangeMiles": 253, "batteryCapacityKwh": 69, "efficiencyMPGe": 109, "efficiencyKwhPer100Mi": 30.9 },
    "performance": { "horsepower": 422, "torque": 400, "zeroTo60": 3.4, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 153, "chargingTime10to80Minutes": 27 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 34.9, "towingCapacityLbs": 0, "curbWeightLbs": 4150 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2024-volvo-ex30.jpg", "manufacturerUrl": "https://www.volvocars.com/us/cars/ex30-electric/", "availabilityStatus": "Available", "dataSource": "Volvo.com", "lastVerified": "2025-12-03", "notes": "2024 Volvo EX30 Performance: Dual motor AWD with 422 hp, 3.4s 0-60, 253 mi range. Compact SUV." }
  },
  {
    "id": "2025-volvo-ex30-single-motor",
    "year": 2025,
    "make": "Volvo",
    "model": "EX30",
    "trim": "Extended Range RWD",
    "slug": "2025-volvo-ex30-single-motor",
    "pricing": { "msrpBase": 38950, "msrpMax": 44000 },
    "range": { "epaRangeMiles": 261, "batteryCapacityKwh": 69, "efficiencyMPGe": 116, "efficiencyKwhPer100Mi": 29.1 },
    "performance": { "horsepower": 268, "torque": 253, "zeroTo60": 5.1, "topSpeed": 112, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 153, "chargingTime10to80Minutes": 27 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 34.9, "towingCapacityLbs": 0, "curbWeightLbs": 3990 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-volvo-ex30.jpg", "manufacturerUrl": "https://www.volvocars.com/us/cars/ex30-electric/", "availabilityStatus": "Available", "dataSource": "Volvo.com", "lastVerified": "2025-12-03", "notes": "2025 Volvo EX30: Compact SUV with 261 mi range, 268 hp, most affordable Volvo EV." }
  },
  {
    "id": "2025-volvo-ex30-twin-motor",
    "year": 2025,
    "make": "Volvo",
    "model": "EX30",
    "trim": "Performance AWD",
    "slug": "2025-volvo-ex30-twin-motor",
    "pricing": { "msrpBase": 46000, "msrpMax": 52000 },
    "range": { "epaRangeMiles": 253, "batteryCapacityKwh": 69, "efficiencyMPGe": 109, "efficiencyKwhPer100Mi": 30.9 },
    "performance": { "horsepower": 422, "torque": 400, "zeroTo60": 3.4, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 153, "chargingTime10to80Minutes": 27 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 34.9, "towingCapacityLbs": 0, "curbWeightLbs": 4150 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-volvo-ex30.jpg", "manufacturerUrl": "https://www.volvocars.com/us/cars/ex30-electric/", "availabilityStatus": "Available", "dataSource": "Volvo.com", "lastVerified": "2025-12-03", "notes": "2025 Volvo EX30 Performance: Dual motor AWD with 422 hp, 3.4s 0-60, 253 mi range." }
  },
  {
    "id": "2026-volvo-ex30-single-motor",
    "year": 2026,
    "make": "Volvo",
    "model": "EX30",
    "trim": "Extended Range RWD",
    "slug": "2026-volvo-ex30-single-motor",
    "pricing": { "msrpBase": 38950, "msrpMax": 44000 },
    "range": { "epaRangeMiles": 261, "batteryCapacityKwh": 69, "efficiencyMPGe": 116, "efficiencyKwhPer100Mi": 29.1 },
    "performance": { "horsepower": 268, "torque": 253, "zeroTo60": 5.1, "topSpeed": 112, "drivetrain": "RWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 153, "chargingTime10to80Minutes": 27 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 34.9, "towingCapacityLbs": 0, "curbWeightLbs": 3990 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2026-volvo-ex30.jpg", "manufacturerUrl": "https://www.volvocars.com/us/cars/ex30-electric/", "availabilityStatus": "Announced", "dataSource": "Volvo.com", "lastVerified": "2025-12-03", "notes": "2026 Volvo EX30: Expected native NACS connector. Compact SUV with 261 mi range." }
  },
  {
    "id": "2026-volvo-ex30-cross-country",
    "year": 2026,
    "make": "Volvo",
    "model": "EX30",
    "trim": "Cross Country AWD",
    "slug": "2026-volvo-ex30-cross-country",
    "pricing": { "msrpBase": 48150, "msrpMax": 54000 },
    "range": { "epaRangeMiles": 227, "batteryCapacityKwh": 69, "efficiencyMPGe": 99, "efficiencyKwhPer100Mi": 34.0 },
    "performance": { "horsepower": 422, "torque": 400, "zeroTo60": 3.5, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 153, "chargingTime10to80Minutes": 27 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 34.9, "towingCapacityLbs": 0, "curbWeightLbs": 4200 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2026-volvo-ex30.jpg", "manufacturerUrl": "https://www.volvocars.com/us/cars/ex30-electric/", "availabilityStatus": "Announced", "dataSource": "Volvo.com", "lastVerified": "2025-12-03", "notes": "2026 Volvo EX30 Cross Country: NEW off-road variant with 422 hp, 227 mi range, increased ground clearance, native NACS." }
  },
  {
    "id": "2025-volvo-ex90-twin-motor",
    "year": 2025,
    "make": "Volvo",
    "model": "EX90",
    "trim": "Plus AWD",
    "slug": "2025-volvo-ex90-twin-motor",
    "pricing": { "msrpBase": 81290, "msrpMax": 90000 },
    "range": { "epaRangeMiles": 310, "batteryCapacityKwh": 111, "efficiencyMPGe": 84, "efficiencyKwhPer100Mi": 40.2 },
    "performance": { "horsepower": 402, "torque": 568, "zeroTo60": 5.7, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 83.6, "towingCapacityLbs": 0, "curbWeightLbs": 6120 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist + LiDAR" },
    "meta": { "imageUrl": "/images/vehicles/2025-volvo-ex90.jpg", "manufacturerUrl": "https://www.volvocars.com/us/cars/ex90-electric/", "availabilityStatus": "Available", "dataSource": "Volvo.com, InsideEVs, Car and Driver", "lastVerified": "2025-12-03", "notes": "2025 Volvo EX90: Flagship 3-row luxury SUV with 310 mi range. 111 kWh battery, 250 kW DC charging, LiDAR sensor, advanced safety, bi-directional charging (coming 2026)." }
  },
  {
    "id": "2025-volvo-ex90-performance",
    "year": 2025,
    "make": "Volvo",
    "model": "EX90",
    "trim": "Performance AWD",
    "slug": "2025-volvo-ex90-performance",
    "pricing": { "msrpBase": 90000, "msrpMax": 100000 },
    "range": { "epaRangeMiles": 300, "batteryCapacityKwh": 111, "efficiencyMPGe": 81, "efficiencyKwhPer100Mi": 41.6 },
    "performance": { "horsepower": 510, "torque": 671, "zeroTo60": 4.1, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 83.6, "towingCapacityLbs": 0, "curbWeightLbs": 6200 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist + LiDAR" },
    "meta": { "imageUrl": "/images/vehicles/2025-volvo-ex90.jpg", "manufacturerUrl": "https://www.volvocars.com/us/cars/ex90-electric/", "availabilityStatus": "Available", "dataSource": "Volvo.com, Car and Driver", "lastVerified": "2025-12-03", "notes": "2025 Volvo EX90 Performance: High-performance variant with 510 hp, 4.1s 0-60, 300 mi range. 7-passenger flagship SUV with LiDAR." }
  },
  {
    "id": "2026-volvo-ex90-twin-motor",
    "year": 2026,
    "make": "Volvo",
    "model": "EX90",
    "trim": "Plus AWD",
    "slug": "2026-volvo-ex90-twin-motor",
    "pricing": { "msrpBase": 81290, "msrpMax": 90000 },
    "range": { "epaRangeMiles": 310, "batteryCapacityKwh": 111, "efficiencyMPGe": 84, "efficiencyKwhPer100Mi": 40.2 },
    "performance": { "horsepower": 402, "torque": 568, "zeroTo60": 5.7, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 83.6, "towingCapacityLbs": 0, "curbWeightLbs": 6120 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": true, "autopilotLevel": "Pilot Assist + LiDAR" },
    "meta": { "imageUrl": "/images/vehicles/2026-volvo-ex90.jpg", "manufacturerUrl": "https://www.volvocars.com/us/cars/ex90-electric/", "availabilityStatus": "Announced", "dataSource": "Volvo.com", "lastVerified": "2025-12-03", "notes": "2026 Volvo EX90: Native NACS connector, V2H capability. Flagship 3-row SUV with 310 mi range, 111 kWh battery, LiDAR, 6 or 7-passenger." }
  },
  {
    "id": "2026-volvo-ex90-performance",
    "year": 2026,
    "make": "Volvo",
    "model": "EX90",
    "trim": "Performance AWD",
    "slug": "2026-volvo-ex90-performance",
    "pricing": { "msrpBase": 90000, "msrpMax": 100000 },
    "range": { "epaRangeMiles": 300, "batteryCapacityKwh": 111, "efficiencyMPGe": 81, "efficiencyKwhPer100Mi": 41.6 },
    "performance": { "horsepower": 510, "torque": 671, "zeroTo60": 4.1, "topSpeed": 112, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 30 },
    "physical": { "seatingCapacity": 7, "cargoVolumeCuFt": 83.6, "towingCapacityLbs": 0, "curbWeightLbs": 6200 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": true, "autopilotLevel": "Pilot Assist + LiDAR" },
    "meta": { "imageUrl": "/images/vehicles/2026-volvo-ex90.jpg", "manufacturerUrl": "https://www.volvocars.com/us/cars/ex90-electric/", "availabilityStatus": "Announced", "dataSource": "Volvo.com", "lastVerified": "2025-12-03", "notes": "2026 Volvo EX90 Performance: 510 hp, 4.1s 0-60, native NACS, V2H capability. Flagship 7-passenger luxury SUV with 300 mi range." }
  }
];
