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
    "id": "2026-lucid-air-pure",
    "year": 2026,
    "make": "Lucid",
    "model": "Air",
    "trim": "Pure",
    "slug": "2026-lucid-air-pure",
    "pricing": { "msrpBase": 69900, "msrpMax": 74900 },
    "range": { "epaRangeMiles": 420, "batteryCapacityKwh": 84, "efficiencyMPGe": 146, "efficiencyKwhPer100Mi": 23.1 },
    "performance": { "horsepower": 430, "torque": 406, "zeroTo60": 4.5, "topSpeed": 124, "drivetrain": "RWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 19.2, "dcChargingMaxKw": 250, "chargingTime10to80Minutes": 21 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 32.4, "towingCapacityLbs": 0, "curbWeightLbs": 4564 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "DreamDrive Pro (Level 2+ ADAS)" },
    "meta": { "imageUrl": "/images/vehicles/2026-lucid-air-pure.jpg", "manufacturerUrl": "https://lucidmotors.com/air-pure", "availabilityStatus": "Available", "dataSource": "LucidMotors.com official specs", "lastVerified": "2025-11-29", "notes": "Lucid Air Pure: 420 mi range, 146 MPGe efficiency. Most efficient EV sedan. 84 kWh battery." }
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
    "meta": { "imageUrl": "/images/vehicles/2023-toyota-bz4x.jpg", "manufacturerUrl": "https://www.toyota.com/bz4x", "availabilityStatus": "Available", "dataSource": "Toyota.com, InsideEVs", "lastVerified": "2025-11-29", "notes": "2023 bZ4X (initial release): Toyota's first mass-market EV. Dual motor AWD, 228 mi range, CCS1 connector. Shares e-TNGA platform with Subaru Solterra." }
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
    "id": "2026-polestar-3-dual-motor",
    "year": 2026,
    "make": "Polestar",
    "model": "3",
    "trim": "Long Range Dual Motor",
    "slug": "2026-polestar-3-dual-motor",
    "pricing": { "msrpBase": 73400, "msrpMax": 78400 },
    "range": { "epaRangeMiles": 315, "batteryCapacityKwh": 106, "efficiencyMPGe": 89, "efficiencyKwhPer100Mi": 37.9 },
    "performance": { "horsepower": 544, "torque": 620, "zeroTo60": 4.8, "topSpeed": 130, "drivetrain": "AWD" },
    "charging": { "connector": "NACS", "acChargingMaxKw": 11, "dcChargingMaxKw": 350, "chargingTime10to80Minutes": 22 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 51.8, "towingCapacityLbs": 4400, "curbWeightLbs": 5670 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist with LiDAR" },
    "meta": { "imageUrl": "/images/vehicles/2026-polestar-3.jpg", "manufacturerUrl": "https://www.polestar.com/us/polestar-3", "availabilityStatus": "Available", "dataSource": "Polestar.com official specs", "lastVerified": "2025-11-29", "notes": "2026 Polestar 3 with new 800V architecture. 350 kW DC fast charging, 22 min 10-80%. 106 kWh battery, 544 hp." }
  },
  {
    "id": "2025-polestar-2-awd",
    "year": 2025,
    "make": "Polestar",
    "model": "2",
    "trim": "Long Range Dual Motor",
    "slug": "2025-polestar-2-awd",
    "pricing": { "msrpBase": 51200, "msrpMax": 56200 },
    "range": { "epaRangeMiles": 254, "batteryCapacityKwh": 79, "efficiencyMPGe": 91, "efficiencyKwhPer100Mi": 37.1 },
    "performance": { "horsepower": 469, "torque": 546, "zeroTo60": 4.3, "topSpeed": 127, "drivetrain": "AWD" },
    "charging": { "connector": "CCS1", "acChargingMaxKw": 11, "dcChargingMaxKw": 205, "chargingTime10to80Minutes": 28 },
    "physical": { "seatingCapacity": 5, "cargoVolumeCuFt": 15.5, "towingCapacityLbs": 0, "curbWeightLbs": 4740 },
    "features": { "hasHeatPump": true, "hasV2L": false, "hasV2H": false, "autopilotLevel": "Pilot Assist" },
    "meta": { "imageUrl": "/images/vehicles/2025-polestar-2.jpg", "manufacturerUrl": "https://www.polestar.com/us/polestar-2", "availabilityStatus": "Available", "dataSource": "Polestar.com official specs", "lastVerified": "2025-11-29", "notes": "2025 Polestar 2: Single config with 79 kWh battery, AWD, Performance pack. 469 hp, 254 mi range." }
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
  }
];
