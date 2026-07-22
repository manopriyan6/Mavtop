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
        background: "#09090B",
        "brand-navy": "#2D3A4F",
        "brand-red": "#DC2626",
        "brand-red-light": "#EF4444",
        "electric-blue": "#2563EB",
        "electric-blue-light": "#3B82F6",
        "purple-accent": "#7C3AED",
        "purple-light": "#8B5CF6",
        "glass-bg": "rgba(255,255,255,0.05)",
        "glass-border": "rgba(255,255,255,0.10)",
        muted: "#A1A1AA",
        "muted-dark": "#71717A",
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
        "marquee2": "marquee2 30s linear infinite",
        "aurora": "aurora 8s ease-in-out infinite alternate",
        "grid-pulse": "grid-pulse 4s ease-in-out infinite",
        "counter": "counter 2s ease-out forwards",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        aurora: {
          "0%": { transform: "translate(0%, 0%) scale(1)", opacity: "0.3" },
          "33%": { transform: "translate(5%, -5%) scale(1.1)", opacity: "0.5" },
          "66%": { transform: "translate(-5%, 5%) scale(0.9)", opacity: "0.4" },
          "100%": { transform: "translate(3%, -3%) scale(1.05)", opacity: "0.35" },
        },
        "grid-pulse": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(37, 99, 235, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(37, 99, 235, 0.8), 0 0 60px rgba(124, 58, 237, 0.4)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
