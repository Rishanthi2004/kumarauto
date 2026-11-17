import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#F7B801",
          yellowHover: "#E5A800",
          yellowLight: "#FEF7E0",
          yellowDark: "#C69000",
          black: "#0D0E11",
          charcoal: "#16181D",
          charcoalLight: "#22252D",
          cream: "#F7F5EE",
          creamMuted: "#ECE8DC",
          cardBg: "#FFFFFF",
          border: "#E2DCD0",
          darkBorder: "#2A2D36",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-barlow-condensed)", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)",
        "grid-pattern-dark": "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
        "stripe-accent": "repeating-linear-gradient(45deg, #F7B801, #F7B801 10px, #0D0E11 10px, #0D0E11 20px)",
      },
      boxShadow: {
        'industrial': '0 4px 20px -2px rgba(13, 14, 17, 0.08)',
        'industrial-hover': '0 12px 30px -4px rgba(13, 14, 17, 0.16)',
        'yellow-glow': '0 0 25px rgba(247, 184, 1, 0.4)',
      }
    },
  },
  plugins: [],
};

export default config;
