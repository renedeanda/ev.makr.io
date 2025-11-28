import type { Config } from "tailwindcss";

// Tailwind CSS v4 configuration
// Theme is defined in app/globals.css using @theme
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{mdx}",
    "./mdx-components.tsx",
  ],
};

// In Tailwind v4, plugins like @tailwindcss/typography are
// imported directly in the CSS file with @import

export default config;
