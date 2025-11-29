# ev.makr.io Development Roadmap

> **Last Updated:** November 28, 2025
> **Current Version:** 0.1.0 MVP
> **Vision:** The most comprehensive, beginner-friendly EV ownership resource in North America

---

## 🎯 Project Goals

1. **Demystify EV ownership** - Make the transition to electric vehicles accessible and confident
2. **Provide accurate, verified data** - All specifications sourced from manufacturers and EPA
3. **Build practical tools** - Interactive calculators and comparisons for real-world decisions
4. **Foster community learning** - Share experiences from real EV owners
5. **Remain independent** - No affiliations, ads, or sponsored content

---

## 📊 Current Status

**Phase 1 - COMPLETE ✅:**
- ✅ 80 vehicle detail pages (2023-2026 models)
- ✅ 9 comprehensive guides
- ✅ 15+ vehicle models with complete trim coverage (Solterra, EV9, IONIQ 5, EV6, Model 3/Y, F-150 Lightning)
- ✅ MDX content system with table formatting
- ✅ Accessibility-compliant design (WCAG 2.1 AA)
- ✅ Dynamic sitemap.xml for SEO
- ✅ Structured data (JSON-LD) for guides and vehicles
- ✅ Open Graph and Twitter cards for social sharing
- ✅ 2026 Solterra complete owner's guide
- ✅ Winter driving guide
- ✅ Road trip planning guide

**Phase 2 - In Progress:**
- ⏳ EV vs Gas cost calculator (80% complete)
- ⏳ Range estimator tool
- ⏳ Vehicle comparison tool (side-by-side)

**Polish & Refinement Needed:**
- 🔧 Vehicle filter/sort enhancements (add sorting options, improve UX)
- 🔧 Table responsiveness (make tables scrollable on mobile)
- 🔧 Search functionality (defer to later phase)
- 🔧 Vehicle data completeness (ensure all brands/models visible in filters)

---

## 🚀 Phase 1: MVP Foundation (Weeks 1-8)

**Target:** Launch-ready educational resource with core functionality

### Content (70% Complete)

**Vehicles:**
- [x] 80+ vehicle entries across 15+ models
- [x] 2023-2026 model year coverage
- [x] Complete trim lineups for top models (IONIQ 5, EV6, EV9, Solterra, Model 3/Y, F-150 Lightning)
- [ ] Add remaining popular models:
  - [ ] Volkswagen ID.4 (all trims)
  - [ ] Nissan Ariya (all trims)
  - [ ] BMW iX (all trims)
  - [ ] Mercedes EQS/EQE (all trims)
  - [ ] Audi e-tron/Q4 e-tron (all trims)
  - [ ] Polestar 2/3 (all trims)
  - [ ] Lucid Air (all trims)
  - [ ] Fisker Ocean (all trims if still available)

**Guides (70% Complete):**
- [x] Getting Started with EVs
- [x] Understanding Charging Levels
- [x] NACS vs CCS1 Connectors
- [x] Battery Care Tips (80% rule)
- [x] Essential EV Apps
- [x] Home Charging Installation
- [x] 2026 Solterra Owner's Guide
- [ ] **Missing Priority Guides:**
  - [ ] Winter Driving & Cold Weather Guide
  - [ ] Road Trip Planning Guide
  - [ ] EV Maintenance Schedule Guide
  - [ ] Understanding Tax Credits & Incentives (2025)
  - [ ] Workplace Charging Guide
  - [ ] EV Myths Debunked
  - [ ] Used EV Buying Guide

**Features:**
- [x] Homepage with three-path navigation
- [x] Vehicle detail pages with year comparison
- [x] Guide pages with MDX rendering
- [x] Responsive design (mobile-first)
- [x] Accessibility compliance
- [ ] **Client-side search** (Fuse.js)
- [ ] **Vehicle comparison tool** (side-by-side specs)

**Infrastructure:**
- [x] Next.js 15 App Router setup
- [x] TypeScript data structure
- [x] MDX content system
- [x] Tailwind CSS v4 styling
- [x] Component library (Button, Card, Badge)
- [x] Formatting reference documentation
- [x] SEO optimization (meta tags, structured data, Open Graph, sitemap)
- [ ] Performance optimization (image optimization, lazy loading)

---

## 🎨 Phase 1.5: Polish & Refinement

**Target:** Improve UX and fix issues discovered after initial implementation

**Priority Fixes:**
- [ ] **Table Responsiveness** - Make MDX tables horizontally scrollable on mobile
  - Wrap tables in scrollable container
  - Add visual indicators for scrollable content
  - Ensure proper borders and styling
- [ ] **Vehicle Filter Enhancements**
  - Add sorting options (price, range, newest)
  - Verify all brands/models appear in filter dropdowns
  - Add vehicle count per filter option
  - Add "clear individual filter" buttons
- [ ] **Data Completeness Audit**
  - Verify getAllVehicleModels() returns all 30 models
  - Check for missing brands in filter
  - Ensure trim counts are accurate
- [x] **Data Quality & Accuracy Initiative** 🎯

  **Philosophy: Focus on Recent + Context**
  - **Recent 2-3 years**: Full trim coverage with detailed specs
  - **Older models**: Note first production year + major milestones, no exhaustive data
  - **Rationale**: Most buyers care about current/recent models; reduces data overwhelm

  **Example**: "Kia EV6 (First produced: 2022, GT trim added 2023)"
  - Full data: 2024-2025 models only
  - Context: Note 2022 launch, 2023 GT introduction, NACS switch in 2025
  - Skip: Exhaustive 2022-2023 trim details

  **Completed:**
  - [x] EV6 Data Audit (removed unreleased 2026, noted 2022 launch)
  - [x] Remove unreleased model years (2026 models not yet available)
  - [x] Add data quality section to ROADMAP

  **To Do:**
  - [ ] Verify all vehicle first production years are noted
  - [ ] Add "first produced" year to all model entries
  - [ ] Document major milestones (GT trims, NACS adoption, battery upgrades)
  - [ ] Ensure recent 2-3 years have complete trim coverage
  - [ ] Validate spec ranges between current trims (HP, range, pricing)
  - [ ] Cross-reference all data with manufacturer sources
  - [ ] Add "last verified" dates to all vehicle entries
  - [ ] Create data source citations for transparency
  - [ ] Priority models for recent data focus:
    - Tesla Model 3/Y (2024-2026 full data, note 2018/2020 launch)
    - Ford F-150 Lightning (2024-2026 full data, note 2022 launch)
    - Hyundai IONIQ 5 (2024-2026 full data, note 2022 launch, 2025 facelift)
    - Kia EV9 (2024-2026 full data)
    - Chevrolet Equinox EV (2025-2026 full data, note 2024 launch)
  - [ ] Document major platform changes with context:
    - NACS adoption timeline (which brands, which years)
    - Battery size increases (e.g., EV6: 58/77.4 kWh → 84 kWh in 2025)
    - Performance upgrades (e.g., EV6 GT: 576 hp in 2023 → 641 hp in 2025)
- [ ] **Mobile Experience**
  - Test all tables on mobile devices
  - Improve filter UI on mobile
  - Ensure cards are touch-friendly
- [ ] **Performance**
  - Add image optimization
  - Lazy load vehicle cards
  - Optimize bundle size

**Nice-to-Have:**
- [ ] Dark mode toggle
- [ ] Print-friendly CSS for guides
- [ ] Vehicle cards hover animations
- [ ] Breadcrumb navigation
- [ ] Back-to-top button

---

## ⚡ Phase 2: Interactive Tools & Expansion (Weeks 9-16)

**Target:** Transform from static resource to interactive platform

### Priority 1: Interactive Calculators

**Cost Calculator** `/tools/cost-calculator`
- **Inputs:**
  - EV MSRP, tax credits/rebates
  - Current gas car details (MPG, annual miles)
  - Gas price ($/gallon), electricity rate ($/kWh)
  - Ownership period (years)
- **Outputs:**
  - 5-year total cost of ownership comparison
  - Annual fuel savings
  - Break-even point
  - Maintenance cost savings
  - Insurance delta
- **Features:**
  - Save calculations
  - Share via URL
  - Export to PDF
  - Preset templates (commuter, family, road tripper)

**Range Estimator** `/tools/range-estimator`
- **Inputs:**
  - Vehicle model (from database)
  - Outside temperature
  - Highway vs city % mix
  - Speed (mph)
  - Cargo/passenger weight
  - Climate control usage
- **Outputs:**
  - Real-world range estimate
  - Comparison to EPA rating
  - Range map visualization
  - Degradation over battery age

**Charging Time Calculator** `/tools/charging-time`
- **Inputs:**
  - Vehicle model (battery size, charging curve)
  - Charger type (Level 1/2/3, kW rating)
  - Current battery %
  - Target battery %
- **Outputs:**
  - Estimated charging time
  - Cost estimate
  - Recommended charging strategy
  - Nearby charger suggestions (API integration)

**Road Trip Planner** `/tools/road-trip`
- **Inputs:**
  - Start/end locations
  - Vehicle model
  - Departure time
  - Preferred charging networks
- **Outputs:**
  - Route with optimal charging stops
  - Total trip time including charging
  - Cost estimate per stop
  - Weather forecast impact
- **Integration:** Embed A Better Route Planner or similar API

### Priority 2: Enhanced Vehicle Database

**Vehicle Comparison Tool** `/vehicles/compare`
- Side-by-side comparison (up to 4 vehicles)
- Customizable comparison fields
- Export comparison table
- Share comparison via URL
- Visual charts for range, price, charging speed

**Advanced Filtering** `/vehicles`
- Filter by:
  - Price range (slider)
  - Range (min/max)
  - Body type (sedan, SUV, truck, etc.)
  - Seating capacity
  - Cargo space
  - AWD/RWD/FWD
  - Connector type (NACS/CCS1)
  - Tax credit eligibility
  - Manufacturer
  - 0-60 time
  - Towing capacity
  - V2L/V2H capability
- Save filter presets
- Sort by any spec

**Vehicle Detail Enhancements:**
- [ ] Photo galleries (exterior/interior)
- [ ] 360° exterior view
- [ ] Color options with photos
- [ ] Wheel options
- [ ] Dealer inventory links (no affiliation, just data)
- [ ] Owner reviews (curated)
- [ ] Common issues (community-sourced)
- [ ] Recall history (NHTSA API)

### Priority 3: Charging Network Directory

**Network Pages** `/networks/[network-slug]`
- Comprehensive details for each network:
  - Tesla Supercharger
  - Electrify America
  - EVgo
  - ChargePoint
  - Blink
  - Flo
  - Shell Recharge
  - BP Pulse
  - Rivian Adventure Network
  - GM Energy (Ultium Charge)
- **Data Points:**
  - Total station count
  - Connector types
  - Max charging speed
  - Pricing structure (per kWh, per minute, membership)
  - App features
  - NACS compatibility status
  - Reliability ratings (community data)
  - Coverage map embed

**Charger Locator** `/chargers`
- Map view of all charging networks
- Filter by connector type, speed, price
- Real-time availability (API integration with PlugShare/Open Charge Map)
- User reviews and photos
- Trip planning overlay

### Priority 4: Content Expansion

**Additional Guides:**
- [ ] Winter Driving Masterclass
- [ ] Summer Heat & Battery Management
- [ ] Apartment/Condo Charging Solutions
- [ ] EV Towing Guide
- [ ] Battery Degradation Deep Dive
- [ ] Regenerative Braking Explained
- [ ] EV Insurance Guide
- [ ] Selling Your Gas Car
- [ ] Living with One Car (EV-only households)
- [ ] Two-Car Strategy (EV + Hybrid)

**How-To Videos** (embedded YouTube)
- Setting up home charging
- Using different charging networks
- Planning your first road trip
- Understanding your EV dashboard

**State-by-State Guides:**
- Tax credits and rebates by state
- Charging infrastructure overview
- HOV lane access
- Registration fees
- Best/worst states for EV ownership

---

## 🎨 Phase 3: Community & Personalization (Weeks 17-24)

**Target:** Build engaged community and personalized experiences

### User Accounts & Profiles

**My Garage** `/garage`
- Add vehicles you own or are considering
- Track charging sessions
- Log maintenance
- Monitor range/efficiency over time
- Set charging schedules
- Expense tracking (electricity, maintenance)

**Personalized Dashboard**
- News relevant to your EV model
- Recall alerts
- Software update notifications
- Local charging network updates
- Weather alerts impacting range
- Maintenance reminders

**Saved Items:**
- Favorite vehicles
- Bookmarked guides
- Saved calculations
- Comparison presets

### Community Features

**User Reviews** `/vehicles/[model]/reviews`
- Owner reviews (verified via VIN?)
- Rating system (range, charging, comfort, tech, value)
- Photos from real owners
- Common issues/praise
- Long-term ownership updates

**Discussion Forums** `/community`
- Model-specific forums
- Regional meetups
- Q&A sections
- Best practices sharing
- Trip reports

**User-Generated Content:**
- Submit charging station reviews
- Share charging tips
- Road trip stories
- Maintenance logs
- DIY guides

### Social Features

- Follow other EV owners
- Share your garage
- Like/comment on reviews
- Upvote helpful guides
- Badges for contributions

---

## 🔬 Phase 4: Advanced Features & Data (Weeks 25-32)

**Target:** Become the authoritative EV data platform

### Incentives & Rebates Database

**Tax Credits Tracker** `/incentives`
- Federal tax credit eligibility (real-time IRS data)
- State rebates and incentives
- Local utility rebates
- Employer incentives
- Trade-in programs
- HOV lane access
- Registration fee waivers
- Free charging programs
- Interactive eligibility checker
- Historical tracking (price changes over time)

### Used EV Marketplace Insights

**Used EV Guide** `/used`
- Model-specific buying guides
- Depreciation curves by model
- Battery health checklist
- VIN decoder integration
- Warranty transfer info
- Average used prices (scraped from AutoTrader, CarGurus)
- Best used EV picks by budget
- Red flags to watch for

### Advanced Analytics

**EV Market Trends** `/trends`
- Sales data (monthly updates)
- Pricing trends
- New model announcements
- Range improvements year-over-year
- Charging network expansion
- Battery technology advances

**Real-World Data:**
- Crowd-sourced range data
- Charging speed real-world vs claimed
- Degradation curves by model/year
- Climate impact on efficiency
- Cost per mile analysis

### API & Data Access

**Public API** `/api/v1/`
- Vehicle specifications (JSON)
- Charging networks data
- Incentives data
- Rate-limited, free tier available
- Documentation site
- Code examples (Python, JavaScript)

**Data Exports:**
- CSV export of vehicle database
- PDF comparison reports
- Embeddable widgets for other sites

---

## 📱 Phase 5: Mobile & Progressive Web App (Weeks 33-40)

**Target:** Native-like mobile experience

### Progressive Web App

**Mobile-First Features:**
- Install to home screen
- Offline mode (cached guides)
- Push notifications (price drops, recalls)
- Location-based charger finder
- Camera for VIN scanning
- Native share integration

**Mobile-Specific Tools:**
- Quick range calculator
- Charging timer with notifications
- Trip expense tracker
- Photo upload for reviews
- Voice search

### Native Apps (Optional - Later Phase)

- iOS app (React Native or Swift)
- Android app (React Native or Kotlin)
- Apple CarPlay integration (charger finder)
- Android Auto integration

---

## 🌟 Phase 6: Premium Features (Future)

**Target:** Sustainable revenue for ongoing maintenance

### Premium Membership (Optional)

**Free Tier (Always Available):**
- All guides and educational content
- Basic vehicle database
- Simple comparison tool
- Community forums

**Premium Tier ($5/month or $40/year):**
- Advanced filtering & unlimited comparisons
- Historical price tracking & alerts
- Ad-free experience
- API access (higher rate limits)
- Excel/CSV exports
- Priority support
- Early access to new features
- Custom reports

**Affiliate Partnerships (Transparent Disclosure):**
- Charging equipment recommendations (Amazon Associates)
- Insurance quote comparisons
- Home solar partnerships
- Referral codes for charging networks (user benefit)

---

## 🛠️ Technical Roadmap

### Performance Optimization

- [ ] Implement image optimization (next/image)
- [ ] Add lazy loading for vehicle images
- [ ] Code splitting for faster initial load
- [ ] Service worker for offline support
- [ ] Edge caching for API responses
- [ ] Lighthouse score 95+ target

### SEO Enhancements

- [ ] Add structured data (Vehicle, HowTo, FAQPage schemas)
- [ ] Generate dynamic sitemaps
- [ ] Implement Open Graph tags
- [ ] Add Twitter Card metadata
- [ ] Create robots.txt
- [ ] Submit to Google Search Console
- [ ] Add breadcrumb navigation

### Analytics & Monitoring

- [ ] Set up Vercel Analytics
- [ ] Track user journeys (guides → vehicles)
- [ ] Monitor search queries (identify content gaps)
- [ ] Error tracking (Sentry integration)
- [ ] Performance monitoring (Core Web Vitals)
- [ ] A/B testing framework

### Data Pipeline

- [ ] Automated data updates (EPA API integration)
- [ ] Manufacturer RSS feed monitoring
- [ ] Price change alerts
- [ ] Recall monitoring (NHTSA API)
- [ ] Charging network status updates
- [ ] Weekly data verification cron jobs

---

## 📋 Content Roadmap

### Guides Priority Queue

**Must-Have (Phase 1-2):**
1. ✅ Getting Started with EVs
2. ✅ Understanding Charging Levels
3. ✅ NACS vs CCS1
4. ✅ Battery Care Tips
5. ✅ Essential EV Apps
6. ✅ Home Charging Installation
7. ⏳ Winter Driving Guide
8. ⏳ Road Trip Planning
9. ⏳ Tax Credits & Incentives
10. ⏳ EV Maintenance Schedule

**Should-Have (Phase 2-3):**
11. Used EV Buying Guide
12. Apartment Charging Solutions
13. EV Myths Debunked
14. Towing with an EV
15. One-Pedal Driving Explained
16. Understanding kW vs kWh
17. DC Fast Charging Deep Dive
18. Level 2 Charger Buying Guide
19. Solar + EV Integration
20. EV vs Hybrid vs PHEV

**Nice-to-Have (Phase 3-4):**
21. State-by-State EV Guides (50 states)
22. Brand Deep Dives (Tesla, Rivian, etc.)
23. Battery Chemistry Explained
24. Future of EV Technology
25. Converting to Electric (for businesses)

### Vehicle Database Expansion

**Current Coverage:** 80 vehicles, 15 models

**Target for Phase 2:** 150+ vehicles, 30+ models

**Priority Additions:**
- All Tesla models (S, 3, X, Y, Cybertruck) - all trims
- All Rivian models (R1T, R1S) - all trims
- Volkswagen ID.4 and ID. Buzz
- Nissan Ariya
- BMW iX, i4, i5, i7
- Mercedes EQS, EQE (sedan + SUV)
- Audi e-tron, Q4 e-tron, Q6 e-tron
- Polestar 2, 3, 4
- Lucid Air (all trims)
- Genesis GV60, GV70 Electric, Electrified G80
- Cadillac Lyriq
- GMC Hummer EV (truck + SUV)
- Volvo EX30, EX90, XC40 Recharge
- Fisker Ocean (if available)
- Honda Prologue
- Acura ZDX
- Mazda MX-30 (if still sold)
- Mini Cooper Electric
- Fiat 500e

**Legacy EVs (Used Market):**
- Nissan Leaf (2018-2023)
- Chevy Bolt EV/EUV (2017-2023)
- BMW i3 (2014-2021)
- Tesla Model S/X (2017-2023)
- Volkswagen e-Golf (2015-2020)

---

## 🎯 Success Metrics

### Phase 1 Goals
- [ ] 10,000 monthly unique visitors
- [ ] 50+ published guides
- [ ] 100+ vehicle detail pages
- [ ] <1.5s page load time
- [ ] 95+ Lighthouse score
- [ ] 0 accessibility violations

### Phase 2 Goals
- [ ] 50,000 monthly unique visitors
- [ ] 1,000+ tool calculations performed
- [ ] 500+ vehicle comparisons
- [ ] 10+ charging networks documented
- [ ] Featured in EV news sites

### Phase 3 Goals
- [ ] 100,000 monthly unique visitors
- [ ] 1,000+ registered users
- [ ] 500+ user reviews
- [ ] 50+ community forum threads
- [ ] Partnership with major EV brand

### Phase 4 Goals
- [ ] 500,000 monthly unique visitors
- [ ] Recognized as top EV resource
- [ ] API used by 10+ third-party sites
- [ ] Featured in mainstream media
- [ ] Mobile app with 10,000+ downloads

---

## 🔄 Ongoing Maintenance

### Weekly Tasks
- Monitor for new model announcements
- Check for price updates
- Review user-submitted corrections
- Update charging network data
- Social media engagement

### Monthly Tasks
- Full vehicle database audit
- Guide content review and updates
- Performance monitoring review
- SEO rankings check
- Competitor analysis
- User feedback review

### Quarterly Tasks
- Major feature releases
- Design system updates
- A/B testing analysis
- Content strategy review
- Technology stack updates

---

## 💡 Future Ideas (Parking Lot)

**Experimental Features:**
- AR visualization of EVs in your driveway
- AI chatbot for EV questions
- Voice-controlled guide navigation
- Gamification (badges for reading guides)
- EV ownership simulator (try before you buy)
- Carbon footprint calculator
- Battery second-life guide
- DIY EV conversion resources
- Fleet management for businesses
- Insurance comparison tool

**Partnerships to Explore:**
- Charging networks (Electrify America, EVgo)
- EV manufacturers (data partnerships)
- Solar installers
- Home electricians network
- Insurance companies
- Rental car companies (EV rentals)

**Content Formats:**
- Weekly newsletter
- Podcast (EV owner interviews)
- YouTube channel (how-to videos)
- Instagram (EV tips)
- Twitter/X (news updates)
- LinkedIn (industry insights)

---

## 🚦 Priority Matrix

### Do First (High Impact, Quick Wins)
1. **Client-side search** (Fuse.js) - Week 9
2. **Cost calculator** - Week 10-11
3. **Range estimator** - Week 11-12
4. **Winter driving guide** - Week 9
5. **Vehicle comparison tool** - Week 13-14
6. **SEO optimization** - Week 15-16

### Schedule Next (High Impact, More Effort)
7. **Used EV buying guide** - Week 17
8. **Incentives database** - Week 18-20
9. **Charging network directory** - Week 21-23
10. **User accounts** - Week 24-26
11. **Community forums** - Week 27-28
12. **Mobile PWA** - Week 29-32

### Nice to Have (Lower Priority)
- API development
- Native mobile apps
- Premium features
- Video content
- Podcast

---

## 📞 Community Feedback Integration

**How to Request Features:**
1. Open GitHub issue with `[Feature Request]` label
2. Join discussions in community forum
3. Contact via ev.makr.io/contact

**How to Report Data Errors:**
1. GitHub issue with `[Data Error]` label
2. Include source citation
3. Specify vehicle/guide affected

**How to Contribute:**
1. Fork repository
2. Submit pull request
3. Cite sources for all data
4. Follow formatting guide

---

**Last Updated:** November 28, 2025
**Next Review:** December 15, 2025
**Maintained By:** Rene (Descartes Creations)

*This roadmap is a living document and will be updated based on user feedback, technology changes, and market developments.*
