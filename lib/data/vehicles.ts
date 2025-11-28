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
    "id": "2024-hyundai-ioniq5-sel-awd",
    "year": 2024,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "SEL AWD",
    "slug": "2024-hyundai-ioniq5-sel-awd",
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
      "imageUrl": "/images/vehicles/2024-hyundai-ioniq5.jpg",
      "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5",
      "availabilityStatus": "Available",
      "dataSource": "Hyundai.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "Award-winning design with 800V architecture. V2L and V2H capabilities. Shares platform with Kia EV6. NACS adapter available 2025."
    }
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
    "id": "2026-ford-f150-lightning-lariat",
    "year": 2026,
    "make": "Ford",
    "model": "F-150 Lightning",
    "trim": "Lariat Extended Range",
    "slug": "2026-ford-f150-lightning-lariat",
    "pricing": {
      "msrpBase": 76995,
      "msrpMax": 81995
    },
    "range": {
      "epaRangeMiles": 340,
      "batteryCapacityKwh": 140,
      "efficiencyMPGe": 68,
      "efficiencyKwhPer100Mi": 49.5
    },
    "performance": {
      "horsepower": 580,
      "torque": 775,
      "zeroTo60": 4,
      "topSpeed": 110,
      "drivetrain": "AWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 19.2,
      "dcChargingMaxKw": 175,
      "chargingTime10to80Minutes": 40
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 52.8,
      "towingCapacityLbs": 10000,
      "curbWeightLbs": 6650
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": true,
      "hasV2H": true,
      "autopilotLevel": "BlueCruise 1.5 (hands-free highway driving)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-ford-f150-lightning.jpg",
      "manufacturerUrl": "https://www.ford.com/trucks/f150/f150-lightning/",
      "availabilityStatus": "Available",
      "dataSource": "Ford.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "2026 model features native NACS connector for direct Supercharger access. Improved battery capacity and range. Electric version of America's best-selling truck. Exceptional towing (10,000 lbs). V2H can power your home during outages."
    }
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
    "id": "2026-hyundai-ioniq5-sel-awd",
    "year": 2026,
    "make": "Hyundai",
    "model": "IONIQ 5",
    "trim": "SEL AWD",
    "slug": "2026-hyundai-ioniq5-sel-awd",
    "pricing": {
      "msrpBase": 52500,
      "msrpMax": 57500
    },
    "range": {
      "epaRangeMiles": 280,
      "batteryCapacityKwh": 84,
      "efficiencyMPGe": 107,
      "efficiencyKwhPer100Mi": 31.5
    },
    "performance": {
      "horsepower": 320,
      "torque": 446,
      "zeroTo60": 4.7,
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
      "imageUrl": "/images/vehicles/2026-hyundai-ioniq5.jpg",
      "manufacturerUrl": "https://www.hyundai.com/us/en/vehicles/ioniq-5",
      "availabilityStatus": "Available",
      "dataSource": "Hyundai.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "2026 model features native NACS connector for direct Tesla Supercharger access without adapter. Award-winning design with 800V architecture. Enhanced battery capacity and range. V2L and V2H capabilities."
    }
  },
  {
    "id": "2026-kia-ev6-gt-line",
    "year": 2026,
    "make": "Kia",
    "model": "EV6",
    "trim": "GT-Line AWD",
    "slug": "2026-kia-ev6-gt-line",
    "pricing": {
      "msrpBase": 52900,
      "msrpMax": 57900
    },
    "range": {
      "epaRangeMiles": 295,
      "batteryCapacityKwh": 84,
      "efficiencyMPGe": 108,
      "efficiencyKwhPer100Mi": 31.2
    },
    "performance": {
      "horsepower": 320,
      "torque": 446,
      "zeroTo60": 4.5,
      "topSpeed": 117,
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
      "cargoVolumeCuFt": 50.2,
      "towingCapacityLbs": 1650,
      "curbWeightLbs": 4720
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": true,
      "hasV2H": false,
      "autopilotLevel": "Highway Driving Assist 2"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-kia-ev6.jpg",
      "manufacturerUrl": "https://www.kia.com/us/en/ev6",
      "availabilityStatus": "Available",
      "dataSource": "Kia.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "2026 model features native NACS connector for direct Tesla Supercharger access. 800V architecture enables ultra-fast charging (10-80% in 18 min). Enhanced range over 2024-2025 models."
    }
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
  {
    "id": "2026-mercedes-eqe-suv-350plus",
    "year": 2026,
    "make": "Mercedes-Benz",
    "model": "EQE SUV",
    "trim": "350+",
    "slug": "2026-mercedes-eqe-suv-350plus",
    "pricing": {
      "msrpBase": 78500,
      "msrpMax": 85000
    },
    "range": {
      "epaRangeMiles": 260,
      "batteryCapacityKwh": 90.6,
      "efficiencyMPGe": 91,
      "efficiencyKwhPer100Mi": 37
    },
    "performance": {
      "horsepower": 288,
      "torque": 391,
      "zeroTo60": 6.2,
      "topSpeed": 130,
      "drivetrain": "RWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 170,
      "chargingTime10to80Minutes": 32
    },
    "physical": {
      "seatingCapacity": 5,
      "cargoVolumeCuFt": 60,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 5820
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3 autonomous)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-mercedes-eqe-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqe/suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "Mercedes' mid-size electric SUV with premium features and technology. 2026 model features native NACS connector for Tesla Supercharger access. More affordable than EQS SUV while maintaining Mercedes luxury. MBUX infotainment with voice control. Drive Pilot Level 3 autonomy available."
    }
  },
  {
    "id": "2026-mercedes-eqs-suv-450plus",
    "year": 2026,
    "make": "Mercedes-Benz",
    "model": "EQS SUV",
    "trim": "450+",
    "slug": "2026-mercedes-eqs-suv-450plus",
    "pricing": {
      "msrpBase": 107500,
      "msrpMax": 115000
    },
    "range": {
      "epaRangeMiles": 305,
      "batteryCapacityKwh": 108.4,
      "efficiencyMPGe": 88,
      "efficiencyKwhPer100Mi": 38.3
    },
    "performance": {
      "horsepower": 329,
      "torque": 417,
      "zeroTo60": 5.8,
      "topSpeed": 130,
      "drivetrain": "RWD"
    },
    "charging": {
      "connector": "NACS",
      "acChargingMaxKw": 11,
      "dcChargingMaxKw": 200,
      "chargingTime10to80Minutes": 31
    },
    "physical": {
      "seatingCapacity": 7,
      "cargoVolumeCuFt": 74.8,
      "towingCapacityLbs": 0,
      "curbWeightLbs": 6195
    },
    "features": {
      "hasHeatPump": true,
      "hasV2L": false,
      "hasV2H": false,
      "autopilotLevel": "Drive Pilot (Level 3 autonomous)"
    },
    "meta": {
      "imageUrl": "/images/vehicles/2026-mercedes-eqs-suv.jpg",
      "manufacturerUrl": "https://www.mbusa.com/en/vehicles/class/eqs/suv",
      "availabilityStatus": "Available",
      "dataSource": "Mercedes-Benz.com official specs, EPA FuelEconomy.gov",
      "lastVerified": "2025-11-27",
      "notes": "Mercedes' flagship electric SUV with luxury appointments and advanced technology. 2026 model features native NACS connector. Spacious 7-seat configuration. Drive Pilot offers Level 3 autonomous driving on approved highways. Premium interior with MBUX Hyperscreen optional."
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
    "id": "2026-subaru-solterra-touring-xt",
    "year": 2026,
    "make": "Subaru",
    "model": "Solterra",
    "trim": "Touring XT",
    "slug": "2026-subaru-solterra-touring-xt",
    "pricing": {
      "msrpBase": 47000,
      "msrpMax": 52000
    },
    "range": {
      "epaRangeMiles": 260,
      "batteryCapacityKwh": 72.8,
      "efficiencyMPGe": 93,
      "efficiencyKwhPer100Mi": 36.3
    },
    "performance": {
      "horsepower": 215,
      "torque": 249,
      "zeroTo60": 7.5,
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
      "curbWeightLbs": 4300
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
      "notes": "Co-developed with Toyota on e-TNGA platform. 2026 model features native NACS charging and improved range over previous years."
    }
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
  }
];
