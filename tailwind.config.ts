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
        // Premium dark design system
        base: "#0B0F19",
        surface: "#151B2B",
        // Reinvented Consulting (Dub's demo pages)
        navy: {
          DEFAULT: "#0B0F19",
          light: "#1E2A40",
          card: "#151B2B",
          deep: "#080C15",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8C84A",
          dark: "#B8962E",
          muted: "#F0D060",
        },
        // CyberAutomations brand
        ca: {
          navy: "#0A0F1E",
          charcoal: "#111827",
          electric: "#00D4FF",
          mint: "#00FFB2",
          slate: "#1E293B",
          muted: "#64748B",
          offwhite: "#F8FAFC",
        },
        success: "#02C39A",
        muted: "#94A3B8",
        "off-white": "#0E1422",
        "text-primary": "#F8FAFC",
        "text-secondary": "#94A3B8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #0B0F19 0%, #151B2B 100%)",
        "gradient-gold": "linear-gradient(135deg, #F9D976 0%, #D4AF37 100%)",
        "gradient-gold-text": "linear-gradient(to right, #F9D976, #E7C05C, #D4AF37)",
        "hero-overlay": "linear-gradient(to right, rgba(11,15,25,0.95) 50%, rgba(11,15,25,0.6) 100%)",
        "hero-radial-glow": "radial-gradient(circle at center, rgba(212,175,55,0.15), transparent 50%)",
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
