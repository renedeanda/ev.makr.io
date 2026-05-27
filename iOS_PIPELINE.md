# ev.makr.io → iOS Pipeline

A pointer doc for the iOS app candidates evidenced by this site's content. The canonical analysis lives in iBootstrap:

→ **[iBootstrap/portfolio/PORTFOLIO_BACKLOG.md](https://github.com/renedeanda/iBootstrap/blob/main/portfolio/PORTFOLIO_BACKLOG.md)** — full per-card details (grounding citations, market analysis, scorecards, free/paid splits, reuse maps, Apple APIs incl. ongoing-cost analysis, revenue models, positioning-checks)

This file is a short mirror so anyone working in ev.makr.io can find the iOS pipeline without leaving the site repo.

---

## Pipeline status (ev.makr.io)

| Pick | Tier | Status | Grounding citation | Status note |
|---|---|---|---|---|
| **Trip Planner** | Tier 2 — $14.99 lifetime, iPad Universal | Menu pick (2026 picking-guide alternate top-3) | [`/guides/road-trip-planning`](https://ev.makr.io/guides/road-trip-planning) — featured guide, 16 min, 417 lines; explicitly delegates to ABRP + PlugShare + manufacturer apps | The iOS-native consolidation play. WeatherKit-using (cost-modeled under 500k/mo free quota at 10k MAU). |

## Considered & cut

| Pick | Reason cut |
|---|---|
| **Will I Make It?** | The site has no explicit anxiety-check JTBD. The cost calculator and range estimator already exist as live tools on the site. The single-purpose anxiety calc can fold as a feature inside Trip Planner v1.x rather than ship as a standalone Tier 0 freebie (per the closed-Tier-0 rule). |
| **Charge Cost** | Already exists on the live site at [`/tools/cost-calculator`](https://ev.makr.io/tools/cost-calculator) with EV-vs-gas 5-year TCO + presets (Commuter / Family SUV / Road Tripper). An iOS port would be redundant. |
| **Winter Range Calculator** | The winter-driving guide explicitly names this calculator; the ev.makr.io audit surfaced it as a candidate. Founder de-selected as standalone; can re-pitch as Trip Planner v2 feature using the same geolocation + WeatherKit infrastructure already in v1. |
| **Battery Health Companion** | The battery-care-tips guide cluster surfaced this. Founder de-selected as standalone; can re-pitch as Trip Planner v2 feature (the 80% rule tracking + manufacturer-API battery status). |

## Why this pipeline exists

ev.makr.io has three explicit personas (homepage hero paths: "I'm Considering an EV" · "I Just Got an EV" · "I'm an EV Owner") and 8 cited JTBDs across charging, range, road-tripping, winter driving, and battery care. The site already runs a tools section (`/tools/cost-calculator`, `/tools/range-estimator`, `/vehicles/compare`, 80+ vehicle database). The road-trip JTBD is the largest piece of unaddressed iOS-native opportunity — the site's current solution requires opening 3+ external apps (ABRP + PlugShare + manufacturer's app).

**Web stays free, forever.** The iOS app is the freemium upsell with a generous free tier (single-leg trip planning, basic charger status, route preview) and a Tier 2 IAP unlocking multi-leg trips, preconditioning, App Intents, Live Activity, manufacturer-API integration, and backup-charger auto-suggestion.

## Process for shipping this pick

1. Re-read [PORTFOLIO_BACKLOG.md #1 Trip Planner](https://github.com/renedeanda/iBootstrap/blob/main/portfolio/PORTFOLIO_BACKLOG.md#1-trip-planner-evmakrio) — full card with WeatherKit cost-modeling subsection.
2. In iBootstrap, run `/new-app --draft "Trip Planner"`. The wizard walks 21 steps (spec/JTBDs first), then writes 17 decision docs locally.
3. Sleep on it (mandatory per [iBootstrap/CLAUDE.md](https://github.com/renedeanda/iBootstrap/blob/main/CLAUDE.md) taste rule 6).
4. Run `/new-app --commit trip-planner`. Scaffold renders, repo pushes.
5. Port the road-trip-planning guide content into the app as "method" reference + implement the route planner with manufacturer API integrations (Tesla · Ford · Rivian · Hyundai/Kia · GM/Chevy · Polestar).
6. In ev.makr.io: add `<AppStoreCTA category="trip-planner">` banner to every road-trip / charging guide page once the App Store listing is live.

## Cross-links

- iOS backlog (canonical): [iBootstrap/portfolio/PORTFOLIO_BACKLOG.md](https://github.com/renedeanda/iBootstrap/blob/main/portfolio/PORTFOLIO_BACKLOG.md)
- makr.io umbrella pipeline: [iBootstrap/portfolio/MAKRIO_PIPELINE.md](https://github.com/renedeanda/iBootstrap/blob/main/portfolio/MAKRIO_PIPELINE.md)
- Pricing logic: [iBootstrap/portfolio/MONETIZATION_MATRIX.md](https://github.com/renedeanda/iBootstrap/blob/main/portfolio/MONETIZATION_MATRIX.md)

Last reviewed: 2026-05-27. Keep in sync with PORTFOLIO_BACKLOG.md when either changes.
