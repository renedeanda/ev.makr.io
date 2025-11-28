# MDX Guide Formatting Reference

> **Purpose**: This document provides formatting standards and best practices for creating MDX guide content for ev.makr.io. Follow these guidelines to ensure consistency, accessibility, and proper rendering across all guide pages.

---

## Table of Contents

1. [Frontmatter Requirements](#frontmatter-requirements)
2. [Headings & Structure](#headings--structure)
3. [Tables](#tables)
4. [Lists](#lists)
5. [Code Blocks](#code-blocks)
6. [Blockquotes & Callouts](#blockquotes--callouts)
7. [Links & References](#links--references)
8. [Bold & Emphasis](#bold--emphasis)
9. [Special Characters](#special-characters)
10. [Accessibility Guidelines](#accessibility-guidelines)
11. [Complete Example](#complete-example)

---

## Frontmatter Requirements

Every MDX guide MUST include frontmatter at the top of the file:

```yaml
---
title: "Guide Title: Keep It Clear and Descriptive"
description: "One sentence summary of what this guide covers. Aim for 120-160 characters for SEO."
publishedAt: "2025-11-28"
updatedAt: "2025-11-28"
featured: true
readingTime: "12 min"
category: "Vehicle-Specific Guides"
tags: ["tag1", "tag2", "tag3"]
author: "ev.makr.io"
---
```

### Required Fields

- **title**: Main heading shown on the guide page (will become `<h1>`)
- **description**: SEO meta description and preview text
- **publishedAt**: Initial publication date (YYYY-MM-DD)
- **updatedAt**: Last modification date (YYYY-MM-DD)
- **readingTime**: Estimated reading time (e.g., "8 min", "15 min")
- **category**: One of: "Getting Started", "Charging", "Vehicle-Specific Guides", "Buying & Ownership", "Technology"
- **tags**: Array of relevant tags for filtering and search
- **author**: Attribution (typically "ev.makr.io")

### Optional Fields

- **featured**: Set to `true` to feature on guides homepage (default: `false`)

---

## Headings & Structure

### Heading Hierarchy

Use proper heading hierarchy (don't skip levels):

```markdown
# Page Title (h1) - ONLY ONE per page, automatically from frontmatter

## Section Title (h2) - Major sections

### Subsection Title (h3) - Sub-topics within sections

#### Detail Level (h4) - Specific details (use sparingly)
```

### Best Practices

✅ **DO:**
- Use one `<h1>` per page (comes from frontmatter `title`)
- Use `##` for major sections
- Keep headings descriptive and action-oriented
- Use sentence case (not Title Case)
- Add blank lines before and after headings

❌ **DON'T:**
- Don't use multiple `#` (h1) headings
- Don't skip heading levels (e.g., h2 → h4)
- Don't use headings for emphasis

### Example

```markdown
## Understanding NACS Charging

The 2026 Solterra comes with native NACS charging, which gives you several advantages.

### What is NACS?

NACS (North American Charging Standard) is...
```

---

## Tables

Tables are powerful for comparisons and structured data. **CRITICAL**: Tables MUST have blank lines before and after.

### Basic Table Syntax

```markdown
## Previous section content here

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |

## Next section starts here
```

### Table Alignment

```markdown
| Left-aligned | Center-aligned | Right-aligned |
|:-------------|:--------------:|--------------:|
| Left         | Center         | Right         |
```

### Best Practices for Tables

✅ **DO:**
- Always add blank line BEFORE table
- Always add blank line AFTER table
- Use header row with descriptive column names
- Use bold (`**text**`) to emphasize key values
- Keep tables mobile-friendly (max 4-5 columns)
- Use checkmarks (✅/❌) for boolean values

❌ **DON'T:**
- Don't put tables immediately after headings without blank line
- Don't create tables with 6+ columns (bad for mobile)
- Don't use complex nested content in table cells

### Real-World Example

```markdown
### Charging Speed Comparison

| Outside Temp | Without Preconditioning | **With Preconditioning** |
|--------------|------------------------|--------------------------|
| **70°F+** | 150 kW | 150 kW (same) |
| **40-70°F** | 120-140 kW | 145-150 kW |
| **20-40°F** | 60-90 kW | **130-145 kW** |
| **<20°F** | 40-60 kW | **100-130 kW** |

**What This Means:**
Preconditioning makes a huge difference in cold weather...
```

### Table Styling

Tables automatically get styled with:
- Header background: Light gray (`--color-gray-bg`)
- Header border: Blue bottom border (`--color-primary`)
- Row hover: Light gray background
- Responsive: Scrollable on mobile

---

## Lists

### Unordered Lists

```markdown
- Item one
- Item two
  - Nested item
  - Another nested item
- Item three
```

### Ordered Lists

```markdown
1. First step
2. Second step
3. Third step
```

### Checkmark Lists

For feature lists and comparisons:

```markdown
**Advantages:**
- ✅ Native Tesla Supercharger access
- ✅ No adapter needed
- ✅ Faster charging speeds

**Disadvantages:**
- ❌ Limited to newer vehicles
- ❌ Transition period confusion
```

### Best Practices

✅ **DO:**
- Use `-` for unordered lists (consistent with most markdown)
- Use `1.`, `2.`, `3.` for ordered lists
- Add blank line before and after lists
- Keep list items concise (1-2 sentences max)
- Use parallel structure (all items start the same way)

❌ **DON'T:**
- Don't mix `*`, `-`, `+` for bullets in same list
- Don't create deeply nested lists (max 2 levels)

---

## Code Blocks

### Inline Code

Use backticks for inline code, commands, or UI elements:

```markdown
Open the **Subaru Connect** app and tap `Menu` → `EV Settings` → `Charging`.
```

### Code Blocks

Use triple backticks with language identifier:

````markdown
```bash
npm run build
```

```typescript
const vehicle: Vehicle = {
  make: "Subaru",
  model: "Solterra",
  year: 2026
};
```
````

### Best Practices

✅ **DO:**
- Always specify language after opening triple backticks
- Use code blocks for commands, JSON, code snippets
- Use inline code for UI elements, filenames, short commands

❌ **DON'T:**
- Don't use code blocks for emphasis (use **bold** instead)
- Don't forget language identifier

---

## Blockquotes & Callouts

### Basic Blockquote

```markdown
> **Note**: This is important information that readers should pay attention to.
```

### Callout Patterns

```markdown
> **2026 Advantage**: Native NACS connector means no adapter needed at Tesla Superchargers.

> **Pro Tip**: Enable battery preconditioning 30 minutes before fast charging for best results.

> **Warning**: Never charge to 100% daily - it degrades battery health over time.
```

### Best Practices

✅ **DO:**
- Start with bold label (`**Note**:`, `**Pro Tip**:`, etc.)
- Keep blockquotes concise (1-2 sentences)
- Use for important side information

❌ **DON'T:**
- Don't overuse blockquotes (max 2-3 per section)
- Don't use for main content flow

---

## Links & References

### Internal Links

Link to other pages within the site:

```markdown
See our [Home Charging Installation Guide](/guides/home-charging-installation) for details.

Compare [NACS vs CCS1](/guides/nacs-vs-ccs1) charging standards.

View the [Solterra vehicle page](/vehicles/subaru/solterra).
```

### External Links

Link to external resources:

```markdown
Check [Tesla's Supercharger Map](https://www.tesla.com/findus) for locations.

Download the [PlugShare app](https://www.plugshare.com) for real-time charger availability.
```

### Best Practices

✅ **DO:**
- Use descriptive link text (not "click here")
- Use absolute paths for internal links (`/guides/...`)
- Include `https://` for external links
- Add context around links

❌ **DON'T:**
- Don't use bare URLs (use `[text](url)` format)
- Don't use vague link text like "here" or "this"

---

## Bold & Emphasis

### Bold

Use `**text**` for important terms, emphasis, and headings within content:

```markdown
The **2026 Solterra** features **native NACS charging**, which means...

**First Time Experience:**
- Pull into Supercharger stall
- Open charge port
```

### Italic

Use `*text*` sparingly for subtle emphasis:

```markdown
The charging session *automatically* starts - no app needed.
```

### Best Practices

✅ **DO:**
- Use bold for key terms, important values, section labels
- Use bold for emphasis (sparingly)
- Use italic very rarely (bold is more visible)

❌ **DON'T:**
- Don't bold entire paragraphs
- Don't mix bold and italic on same text
- Don't overuse emphasis (loses impact)

---

## Special Characters

### HTML Entities

MDX may require HTML entities for certain characters:

```markdown
**Less than:** Use `&lt;` instead of `<`
**Greater than:** Use `&gt;` instead of `>`
**Ampersand:** Use `&amp;` instead of `&` (in some contexts)
```

### Common Symbols

These work directly in MDX:

```markdown
✅ Checkmark (yes)
❌ X mark (no)
→ Arrow
• Bullet point
```

### Example

```markdown
| Temperature | Speed |
|-------------|-------|
| **&lt;20°F** | 40-60 kW |
| **70°F+** | 150 kW |
```

---

## Accessibility Guidelines

### Writing for Accessibility

1. **Use descriptive headings**: Headings should clearly describe content
2. **Add alt text to images**: `![Solterra charging at Supercharger](url)`
3. **Use proper table headers**: Always include header row
4. **Avoid color-only indicators**: Don't rely solely on color (use ✅/❌ symbols)
5. **Keep link text descriptive**: "View charging guide" not "click here"

### High Contrast Requirements

- Text must have 4.5:1 contrast ratio minimum
- Important UI elements need 3:1 contrast
- Don't use low-contrast colors for text

### Example

❌ **Bad:**
```markdown
For more info, click [here](url).
```

✅ **Good:**
```markdown
Learn more about [battery preconditioning in cold weather](/guides/winter-driving).
```

---

## Complete Example

Here's a complete example showing all formatting in context:

```markdown
---
title: "2026 Model 3: Complete Charging Guide"
description: "Everything you need to know about charging your 2026 Tesla Model 3, from home charging to Supercharger road trips."
publishedAt: "2025-11-28"
updatedAt: "2025-11-28"
featured: true
readingTime: "10 min"
category: "Vehicle-Specific Guides"
tags: ["Model 3", "Tesla", "NACS", "Charging", "2026"]
author: "ev.makr.io"
---

# 2026 Tesla Model 3: Complete Charging Guide

**Congratulations on your 2026 Model 3!** This guide covers everything you need to know about charging your new EV efficiently.

## Understanding Your Charging Options

The 2026 Model 3 comes with **native NACS** (North American Charging Standard) charging, giving you access to the world's largest fast-charging network.

### Home Charging (Recommended)

**Level 2 Charging** is ideal for daily use:
- **Charging speed**: 11.5 kW (44 miles/hour)
- **Full charge time**: 0-100% in 7-8 hours
- **Cost**: ~$3-5 per full charge (location dependent)

**Installation Requirements:**
1. 240V outlet (like dryer outlet)
2. Professional electrician installation
3. NEMA 14-50 or hardwired Wall Connector

See our [Home Charging Installation Guide](/guides/home-charging-installation) for complete details.

### Supercharger Network

Your Model 3 has access to 50,000+ Tesla Superchargers worldwide.

| Charging Phase | Speed | Time |
|---------------|-------|------|
| **10-50%** | 250 kW | 10-12 min |
| **50-80%** | 150-200 kW | 15-18 min |
| **80-100%** | 50-100 kW | 20-25 min |

> **Pro Tip**: Charge to 80% and go - saves 20 minutes vs charging to 100%.

## Best Practices

**Daily Charging:**
- ✅ Charge at home overnight
- ✅ Set charge limit to 80%
- ✅ Plug in whenever parked

**Road Trip Charging:**
- ✅ Plan charging stops every 150-200 miles
- ✅ Use navigation to precondition battery
- ✅ Charge to 80% maximum at Superchargers

**What to Avoid:**
- ❌ Don't charge to 100% daily (battery degradation)
- ❌ Don't let battery drop below 10% regularly
- ❌ Don't charge past 80% unless needed for trip

## Finding Chargers

Use these apps to find charging stations:

- **Tesla App**: Shows all Supercharger locations with real-time availability
- **PlugShare**: Community-driven charger reviews and photos
- **A Better Route Planner**: Optimizes road trip charging stops

For more information, check our [Essential EV Apps Guide](/guides/essential-ev-apps).

---

*Last updated: November 28, 2025*

**Disclaimer**: This guide is for educational purposes. Always consult your official Tesla owner's manual.
```

---

## Quick Reference Checklist

Before publishing a guide, verify:

- [ ] Frontmatter includes all required fields
- [ ] Only one `#` (h1) heading (from title)
- [ ] Proper heading hierarchy (no skipped levels)
- [ ] Tables have blank lines before AND after
- [ ] Lists have blank lines before and after
- [ ] Links use descriptive text
- [ ] Special characters use HTML entities where needed (`&lt;`, `&gt;`)
- [ ] Blockquotes start with bold labels
- [ ] Reading time estimate is accurate
- [ ] All internal links are absolute paths (`/guides/...`)
- [ ] Content is accessible (descriptive headings, alt text, proper contrast)

---

## Common Mistakes to Avoid

1. **Missing blank lines around tables** → Tables won't render properly
2. **Using `<` or `>` directly** → Use `&lt;` and `&gt;` instead
3. **Multiple h1 headings** → Only one per page (from frontmatter)
4. **Skipping heading levels** → Always use proper hierarchy
5. **Non-descriptive link text** → Use "View charging guide" not "click here"
6. **Overusing bold/emphasis** → Less is more
7. **Tables with 6+ columns** → Bad for mobile, keep it simple
8. **No reading time estimate** → Required for SEO and UX

---

**Questions or suggestions?** Update this document or reach out to the team.

*Document version: 1.0 | Last updated: 2025-11-28*
