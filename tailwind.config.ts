import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "electric-blue": "#0066FF",
        "electric-green": "#00FF88",
        "electric-yellow": "#FFD700",
        "neutral-charcoal": "#2D2D2D",
        "neutral-light": "#F5F5F5",
        "warning-amber": "#FFA500",
      },
    },
  },
  plugins: [],
};

export default config;
