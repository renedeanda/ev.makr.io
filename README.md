# ev.makr.io

> **A comprehensive, beginner-friendly educational resource for new and prospective electric vehicle owners in the United States**

Built by a new EV owner (2026 Subaru Solterra Touring XT owner) learning alongside you—documenting the journey and creating the guide I wish I had when starting.

---

## 🚗 Project Vision

ev.makr.io demystifies EV ownership through practical guides, vehicle comparisons, and tools that build confidence in the transition to electric mobility. This isn't written by an automotive journalist or industry veteran—it's written by someone learning alongside you, researching every detail, and sharing what actually matters for everyday EV ownership.

**Target Domain:** [ev.makr.io](https://ev.makr.io)
**Project Type:** Educational resource (non-commercial, informational)
**Status:** MVP in development

---

## ✨ Features

### Core Functionality

- **🚙 Vehicle Database** - Comprehensive specs for 50+ EVs (2023-2026 models)
- **⚡ Charging Network Guide** - Details on all major U.S. charging networks
- **📚 Educational Guides** - Beginner-friendly articles on every aspect of EV ownership
- **🛠️ Interactive Tools** - Calculators for cost comparison, range estimation, and charging time
- **🔍 Smart Search** - Client-side search powered by Fuse.js
- **📱 Mobile-First Design** - Fully responsive, accessible interface

### Content Highlights

- **Getting Started Guide** - Your complete first-week roadmap
- **Charging Levels Deep Dive** - Level 1, 2, and 3 explained
- **NACS vs. CCS1 Guide** - Understanding connector standards and the transition
- **The 80% Rule** - Battery care best practices
- **Essential EV Apps** - PlugShare, ABRP, and network-specific apps
- **Real-World Range** - Understanding EPA ratings vs. actual performance
- **Home Charging Installation** - Complete guide with safety disclaimers

---

## 🏗️ Tech Stack

```
Framework:     Next.js 15 (App Router)
Language:      TypeScript
Styling:       Tailwind CSS v4
Content:       MDX (in-repo, version-controlled)
Data Storage:  JSON files (no external database)
Search:        Fuse.js (client-side fuzzy search)
Icons:         Lucide React
Fonts:         Inter (Google Fonts)
Deployment:    Vercel
Analytics:     Vercel Analytics (built-in)
```

### Why This Stack?

- **No external dependencies** - All data stored locally as JSON/MDX
- **Fast performance** - Static generation, client-side search, optimized images
- **Easy maintenance** - Edit JSON files or MDX guides to update content
- **Free hosting** - Vercel's free tier is perfect for educational sites
- **SEO-friendly** - Server-side rendering, structured data, fast Core Web Vitals

---

## 📁 Project Structure

```
ev.makr.io/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout with Navigation & Footer
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles & Tailwind directives
├── components/                   # React components
│   ├── DisclaimerBox.tsx         # Safety/legal disclaimer component
│   ├── VehicleCard.tsx           # Vehicle display card
│   ├── Navigation.tsx            # Site navigation
│   └── Footer.tsx                # Footer with site-wide disclaimer
├── content/                      # MDX content files
│   └── guides/                   # Educational guides
│       └── getting-started.mdx   # Sample guide
├── data/                         # JSON data storage
│   ├── vehicles/                 # Vehicle specifications
│   │   └── 2026-subaru-solterra-touring-xt.json
│   ├── brands/                   # Brand information
│   │   └── subaru.json
│   └── networks/                 # Charging network details
│       └── tesla-supercharger.json
├── lib/                          # Utility functions
│   ├── types.ts                  # TypeScript type definitions
│   └── data.ts                   # Data loading utilities
├── public/                       # Static assets
│   └── images/                   # Vehicle/brand/charging images
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** (recommended: 20.x or later)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/renedeanda/ev.makr.io.git
cd ev.makr.io
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open in browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 📊 Data Management

### Adding a New Vehicle

Create a JSON file in `data/vehicles/` following this structure:

```json
{
  "id": "2026-kia-ev6-gt-line",
  "year": 2026,
  "make": "Kia",
  "model": "EV6",
  "trim": "GT-Line",
  "slug": "2026-kia-ev6-gt-line",
  "pricing": { "msrpBase": 48000, "msrpMax": 54000 },
  "range": {
    "epaRangeMiles": 310,
    "batteryCapacityKwh": 77.4,
    "efficiencyMPGe": 117,
    "efficiencyKwhPer100Mi": 28.8
  },
  // ... see full schema in lib/types.ts
}
```

**Data Verification:**
- Always cite sources (manufacturer websites, EPA FuelEconomy.gov)
- Include `lastVerified` date
- Mark unconfirmed specs as "TBD" or "Expected"

### Adding a New Guide

Create an MDX file in `content/guides/`:

```mdx
---
title: "Your Guide Title"
description: "Brief description for SEO and previews"
category: "charging"
tags: ["beginner", "home-charging"]
author: "ev.makr.io"
publishedDate: "2025-11-27"
updatedDate: "2025-11-27"
readingTime: "10 min"
featured: true
---

# Your Guide Title

Guide content goes here with full Markdown/MDX support...
```

### Adding a Charging Network

Create a JSON file in `data/networks/`:

```json
{
  "id": "electrify-america",
  "name": "Electrify America",
  "websiteUrl": "https://www.electrifyamerica.com",
  "details": {
    "stationCount": 950,
    "connectorTypes": ["CCS1"],
    "maxPowerKw": 350
  }
  // ... see full schema in lib/types.ts
}
```

---

## 🎨 Design System

### Color Palette

```css
--electric-blue:    #0066FF   /* Primary brand color */
--electric-green:   #00FF88   /* Sustainable energy accent */
--electric-yellow:  #FFD700   /* Charging/power accent */
--neutral-charcoal: #2D2D2D   /* Dark text */
--neutral-light:    #F5F5F5   /* Light backgrounds */
--warning-amber:    #FFA500   /* Safety warnings */
```

### Typography

- **Headings:** Inter (bold weights)
- **Body:** Inter (regular/medium)
- **Code:** System monospace

### Components

- **DisclaimerBox** - Three types: `safety`, `legal`, `info`
- **VehicleCard** - Displays vehicle with key specs and CTA
- **Navigation** - Sticky header with mobile menu
- **Footer** - Site-wide legal disclaimer + links

---

## 🔒 Legal & Safety Framework

### Site-Wide Disclaimer

Every page includes a comprehensive disclaimer in the footer covering:

- Not a substitute for professional advice or owner's manuals
- Electrical installation safety
- Battery care specific to your model
- Always verify with manufacturer sources

### Content-Specific Safety Callouts

Use `<DisclaimerBox>` component for context-specific warnings:

```tsx
<DisclaimerBox type="safety">
  Home charging installation involves high-voltage electrical work.
  Always hire a licensed electrician.
</DisclaimerBox>
```

**Critical:** Never provide electrical installation advice without safety disclaimers.

---

## 🌐 SEO & Performance

### Performance Targets

- **Lighthouse Score:** 95+ across all metrics
- **First Contentful Paint (FCP):** <1.5s
- **Largest Contentful Paint (LCP):** <2.5s
- **Cumulative Layout Shift (CLS):** <0.1

### SEO Best Practices

- **Metadata:** Every page has unique title/description
- **Structured Data:** Vehicle schema, HowTo schema, FAQPage schema
- **Mobile-First:** Fully responsive, touch-friendly
- **Fast Loading:** Image optimization, code splitting, prefetching
- **Accessibility:** WCAG 2.1 AA compliance

### Structured Data Example

```json
{
  "@context": "https://schema.org/",
  "@type": "Car",
  "name": "2026 Subaru Solterra",
  "manufacturer": { "@type": "Organization", "name": "Subaru" },
  "fuelType": "Electric",
  "mileageFromOdometer": { "@type": "QuantitativeValue", "value": "260", "unitCode": "SMI" }
}
```

---

## 🗺️ Roadmap

### Phase 1: MVP (Current)
- ✅ Project setup & architecture
- ✅ Core components (Navigation, Footer, VehicleCard, DisclaimerBox)
- ✅ Homepage with hero & three-path navigation
- ✅ Sample vehicle, brand, and network data
- ✅ First guide (Getting Started)
- ⏳ Additional guides (10 core guides)
- ⏳ Vehicle database (50+ models)
- ⏳ Search functionality (Fuse.js)

### Phase 2: Content Expansion
- All major U.S. EV brands (20+)
- Comprehensive charging network directory
- 20+ educational guides
- Interactive calculators (cost, range, charging time)
- Comparison tool

### Phase 3: Advanced Features
- User comments/feedback system
- Newsletter signup
- Video content integration
- Mobile app (PWA)
- Community forum

### Phase 4: Ongoing Maintenance
- Weekly updates for new models
- Monthly review of pricing/incentives
- Quarterly content audit
- User-submitted corrections via PR

---

## 🤝 Contributing

### How to Contribute

1. **Report Inaccuracies** - Open an issue with source citations
2. **Submit New Vehicles** - Pull request with JSON file + data sources
3. **Improve Guides** - PRs for typos, clarity, or additional tips
4. **Share Your Experience** - Comment with real-world insights

### Data Quality Standards

**We only include data we can verify.** Sources in order of preference:

1. Official manufacturer websites
2. EPA FuelEconomy.gov
3. NHTSA safety ratings
4. Manufacturer press releases
5. Reputable automotive publications (cross-referenced)

**For unconfirmed models:**
- Mark as "Expected" or "Announced"
- Include disclaimer: "Details not yet confirmed"
- Update immediately when official specs are released

---

## 📖 Content Governance

### Update Schedule

- **Weekly:** Check for newly announced models and spec updates
- **Monthly:** Review pricing, incentives, new charging stations
- **Quarterly:** Full audit of all vehicle specifications
- **Annually:** Major content refresh, design updates

### Version Control

All changes tracked via Git. Major updates include changelog entry.

---

## 🛠️ Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

---

## 📄 License & Attribution

### Content License

All original content (guides, articles, descriptions) is provided under **CC BY-NC-SA 4.0** (Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International).

### Code License

Code is provided under the **MIT License**.

### Data Sources

Vehicle specifications, charging network details, and other data are sourced from:
- Official manufacturer websites
- EPA FuelEconomy.gov
- Public charging network APIs
- Government databases (IRS for tax credits, etc.)

Always verify current information with official manufacturer sources before making purchasing decisions.

---

## 🙏 Acknowledgments

Built with inspiration from:
- The r/electricvehicles community
- PlugShare contributors
- A Better Route Planner developers
- Every new EV owner sharing their experiences

Special thanks to the Subaru Solterra community for helping this new owner learn the ropes!

---

## 📧 Contact

- **Website:** [ev.makr.io](https://ev.makr.io)
- **GitHub:** [github.com/renedeanda/ev.makr.io](https://github.com/renedeanda/ev.makr.io)
- **Issues:** [Report bugs or suggest features](https://github.com/renedeanda/ev.makr.io/issues)

Part of the [makr.io](https://makr.io) family of projects by Rene (Descartes Creations).

---

## 🚦 Development Status

**Current Version:** 0.1.0 (MVP in development)
**Target Launch:** 6-8 weeks from project start
**Last Updated:** November 27, 2025

---

## 📚 Additional Resources

### For Users
- [FuelEconomy.gov](https://www.fueleconomy.gov) - Official EPA range ratings
- [PlugShare](https://www.plugshare.com) - Find charging stations
- [A Better Route Planner](https://abetterrouteplanner.com) - Plan EV road trips

### For Developers
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com)
- [Fuse.js Documentation](https://fusejs.io)

---

**Happy EV ownership! 🔌⚡🚗**
