import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0D1B2A",
          light: "#1A2E3B",
          card: "#132232",
          deep: "#0A1929",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8C84A",
          dark: "#B8962E",
          muted: "#F0D060",
        },
        success: "#02C39A",
        muted: "#6B7A8D",
        "off-white": "#F8F9FA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #0D1B2A 0%, #1A2E3B 100%)",
        "gradient-gold": "linear-gradient(135deg, #D4AF37 0%, #F0D060 100%)",
        "hero-overlay": "linear-gradient(to right, rgba(13,27,42,0.95) 50%, rgba(13,27,42,0.6) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
