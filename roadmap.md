# ev.makr.io Roadmap & Data Quality Principles

## Data Quality Principles

### 1. **Battery Capacity Logic**
- Never show "battery capacity decreased" when manufacturers add new base trims with smaller batteries
- Only display battery capacity **upgrades** (maximum capacity increases)
- Show "Multiple battery options" when new sizes are available across trims
- **Location**: `components/VehicleYearSelector.tsx:66-89`

### 2. **Comprehensive Multi-Year Data**
- Prioritize complete vehicle lineups across multiple model years (2024-2026)
- Include all available trims for each model year
- Document production year ranges vs. available data years
- **Principle**: Show full production history, not just years we have data for

### 3. **Accurate Manufacturer-Specific Details**
- Research app names specific to each model (e.g., Subaru Connect for Solterra vs. MySubaru for other models)
- Verify charging connector types and timelines (NACS adoption varies by manufacturer)
- Document technology partnerships (e.g., Solterra using Toyota-based tech)

### 4. **Historical Accuracy in Guides**
- NACS created by Tesla in 2012, opened as standard in 2022, SAE adopted in 2024
- Don't oversimplify timelines (e.g., "2024+ All Teslas use NACS" when it's been used since 2012)
- Provide full context for industry shifts

### 5. **Table Rendering in Guides**
- All markdown tables must render with proper borders and styling
- Use explicit component overrides in MDX renderer with Tailwind classes
- **Location**: `app/guides/[slug]/page.tsx:77-99`

---

## Brands with Comprehensive Data (2024-2026)

### ✅ **Completed - High Data Quality**

**Kia (13 vehicles)**
- EV6: 7 trims across 2024-2026
- EV9: 6 trims across 2024-2026
- Notable: Dual battery options (63 kWh, 84 kWh), NACS adoption for 2025+

**Hyundai (11 vehicles)**
- IONIQ 5: Multiple configurations
- IONIQ 6: Various ranges
- Notable: E-GMP platform, 800V charging

**Volkswagen (14 vehicles)**
- ID.4: Comprehensive trim coverage
- ID.Buzz: Family hauler specs
- Notable: MEB platform, CCS1/NACS transition

**Ford (5 vehicles)**
- F-150 Lightning: Work truck to luxury
- Notable: Towing capacity focus, real-world range testing

**Subaru (3 vehicles)**
- Solterra: Complete 2024-2026 lineup
- Notable: Toyota partnership, Subaru Connect app (not MySubaru)

**BMW (18 vehicles)**
- i4: 10 vehicles across 2024-2026 (eDrive35, eDrive40, xDrive40, M50, M60)
- iX: 8 vehicles across 2024-2026 (xDrive40, xDrive45, xDrive50, xDrive60, M60, M70)
- Range: 267-364 miles
- Power: 282-650 HP
- Notable: 2026 models have native NACS

**Lucid (8 vehicles)**
- Air: 4 trims x 2 years (2025-2026)
- Pure (419-420 mi), Touring (406 mi), Grand Touring (512 mi), Sapphire (427 mi, 1234 HP)
- Range: 406-512 miles
- Power: 430-1234 HP
- Price: $69,900-$254,000
- Notable: Most efficient EV sedan (146 MPGe), longest range (512 mi), 0-60 in 1.9s (Sapphire)

**Polestar (11 vehicles)**
- Polestar 2: 4 vehicles (2024-2025)
- Polestar 3: 7 vehicles (2025-2026)
- Range: 247-350 miles
- Power: 299-671 HP
- Notable: 2026 Polestar 3 with 800V architecture, 350 kW charging, native NACS

**Mercedes-Benz (40 vehicles)**
- EQE Sedan: 10 vehicles (2024-2026)
- EQE SUV: 10 vehicles (2024-2026)
- EQS Sedan: 10 vehicles (2024-2026)
- EQS SUV: 10 vehicles (2024-2026, including Maybach EQS 680)
- Range: 220-390 miles
- Power: 315-912 HP (AMG variants)
- Price: $64,950-$215,000
- Notable: Drive Pilot Level 3 autonomy, 118 kWh battery in 2025-2026 EQS, 200-320 kW charging

**Audi (15 vehicles)**
- Q4 e-tron: 5 vehicles (2024-2026) - 45 RWD and 55 quattro AWD
- e-tron GT: 8 vehicles (2024-2026) - S, RS, RS Performance trims
- Q8 e-tron: 2 vehicles (2024) - SUV and Sportback
- SQ8 e-tron: 1 vehicle (2024) - Discontinued Feb 2025
- Range: 249-300 miles (e-tron GT), 258-288 miles (Q4 e-tron)
- Power: 282-912 HP
- Price: $49,800-$165,000
- Notable: 2025 e-tron GT with 97 kWh battery, 320 kW charging (18 min 10-80%), 912 HP RS Performance

---

## Technical Infrastructure

### SEO Optimization ✅
- **Meta tags**: Title, description, keywords dynamically generated for all pages
- **OpenGraph & Twitter cards**: Social sharing optimized
- **Canonical URLs**: Prevents duplicate content issues
- **Robots**: All pages indexed and followed
- **Structured data**: JSON-LD for articles in guides
- **Dynamic sitemap**: 264 pages automatically included

### Sitemap Coverage ✅
- ✅ Static pages (home, vehicles, guides, about)
- ✅ 48 vehicle model pages (brand/model combinations)
- ✅ 263+ individual vehicle detail pages
- ✅ 9 guide pages with proper lastModified dates

### Build System
- **Platform**: Next.js 16.0.5 with Turbopack
- **SSG**: 321 static pages generated
- **TypeScript**: Type-safe vehicle data models
- **Performance**: ~8s build time

---

## Data Sources & Verification

### Primary Sources
- Official manufacturer websites (.com specs)
- EPA FuelEconomy.gov for range/efficiency
- Manufacturer press releases for new features
- Industry publications (Car and Driver, Motor Trend, etc.)

### Data Verification Process
1. Cross-reference specs across multiple sources
2. Verify EPA range vs. manufacturer claims
3. Confirm pricing with latest manufacturer updates
4. Check for mid-year refreshes and changes
5. Document last verified date in metadata

---

## Content Quality Guidelines

### Guide Writing
- ✅ Tables must be formatted in markdown with proper syntax
- ✅ Update dates when content changes
- ✅ Use real-world examples and personal experiences
- ✅ Provide actionable advice, not just information
- ✅ Link to related guides for deeper dives

### Data Presentation
- ✅ Show ranges (e.g., "267-318 mi") instead of single values when multiple trims exist
- ✅ Highlight key differentiators (NACS vs CCS1, AWD vs RWD, battery sizes)
- ✅ Include year-specific specs in "What's New" sections
- ✅ Calculate min/max across ALL trims for model pages

---

## Future Priorities

### Brands Needing Comprehensive Data
1. **Chevrolet** - Blazer EV expansion (additional trims), Equinox EV, Silverado EV
2. **Genesis** - Electrified GV70, GV60, G80
3. **Rivian** - R1T, R1S (already 16 vehicles, consider expansion)
4. **Porsche** - Taycan all variants (currently 1 vehicle)

### Feature Enhancements
- [ ] Vehicle comparison tool (side-by-side specs)
- [ ] Filter by battery size, range, price, body style
- [ ] Charging network availability maps
- [ ] Real-world range estimates (temperature-adjusted)
- [ ] Total cost of ownership calculator
- [ ] Trade-in value tracking

### Content Expansion
- [ ] More detailed charging guides (network-specific)
- [ ] Winter driving tips per vehicle model
- [ ] Real-world road trip reports
- [ ] Maintenance cost comparisons
- [ ] Insurance cost analysis by model

---

## Data Quality Metrics

### Current Stats (as of Dec 2025)
- **Total Vehicles**: 263+
- **Total Brands**: 15+
- **Model Years**: 2024-2026
- **Guides**: 9 comprehensive guides
- **Static Pages**: 321 pages generated
- **Data Freshness**: All vehicles verified within last 30 days

### Quality Indicators
- ✅ All vehicles have complete specs (range, power, pricing, charging)
- ✅ All vehicles have lastVerified dates
- ✅ All vehicles have official dataSource attribution
- ✅ 100% of vehicles have metadata notes with key highlights
- ✅ All guides have proper markdown formatting and table rendering

---

## Principles for Adding New Data

### Before Adding a Vehicle
1. Verify official specs from manufacturer
2. Check EPA range data if available
3. Confirm pricing is current model year
4. Document charging connector type (CCS1, NACS, or adapter)
5. Add comprehensive notes highlighting key features

### Data Completeness Checklist
- [ ] All trims for a given model year
- [ ] Multiple model years (2024, 2025, 2026)
- [ ] Pricing (MSRP base and max)
- [ ] Range (EPA miles, battery kWh)
- [ ] Performance (HP, torque, 0-60, drivetrain)
- [ ] Charging (connector, AC/DC max kW, 10-80% time)
- [ ] Physical (seating, cargo, towing, weight)
- [ ] Features (heat pump, V2L, V2H, autopilot)
- [ ] Metadata (image URL, manufacturer URL, status, notes)

### Commit Message Format
```
Add comprehensive [YEAR-RANGE] [BRAND] vehicle data for [MODEL(S)]

**[Model] ([X] vehicles):**
- [Year]: [Trims] ([Range info])
- Range: [Min-Max] miles
- Power: [Min-Max] HP
- Price: $[Min]-$[Max]
- Notable: [Key features, tech, unique aspects]

Build: [X] pages generated (up from [Y])
```

---

## Contributing & Maintenance

### Regular Maintenance Tasks
- **Monthly**: Update vehicle pricing for new model years
- **Quarterly**: Verify EPA range data for newly tested vehicles
- **Bi-annually**: Review and update guides with new information
- **Annually**: Archive old model year data, add new years

### Quality Assurance
- Build succeeds without TypeScript errors
- All pages render correctly
- Sitemap includes all new pages
- Meta tags are properly generated
- No duplicate vehicle IDs

---

## Version History

### December 2025
- ✅ Fixed battery capacity display logic (no false "decreases")
- ✅ Fixed table rendering in markdown guides
- ✅ Corrected NACS historical timeline
- ✅ Fixed Subaru Solterra app name (Subaru Connect)
- ✅ Added comprehensive BMW i4 & iX data (18 vehicles)
- ✅ Added comprehensive Lucid Air data (8 vehicles)
- ✅ Added comprehensive Polestar 2 & 3 data (11 vehicles)
- ✅ Added comprehensive Mercedes-Benz EQE & EQS data (40 vehicles: sedans and SUVs)
- ✅ Added comprehensive Audi data (15 vehicles: Q4 e-tron, e-tron GT, Q8 e-tron, SQ8 e-tron)
- ✅ Verified SEO optimization across all pages
- ✅ Sitemap now includes 321 pages (up from 264)

### November 2025
- Added comprehensive Kia data (13 vehicles)
- Added comprehensive Hyundai data (11 vehicles)
- Added comprehensive VW data (14 vehicles)
- Added comprehensive Ford data (5 vehicles)
- Added comprehensive Subaru data (3 vehicles)
- Implemented full production year ranges display
- Added key specs ranges at top of vehicle pages

---

*This roadmap serves as both a guide for future development and a record of data quality principles. All contributors should adhere to these standards to maintain consistency and accuracy.*
