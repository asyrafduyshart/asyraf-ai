import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#f6f1e8",
          warm: "#faf6ef",
          soft: "#f0e8dc",
          card: "#fffdf8",
        },
        ink: {
          DEFAULT: "#2a2420",
          soft: "#5c534c",
          mute: "#8a8076",
          faint: "#c4b8ab",
        },
        ochre: {
          DEFAULT: "#c4784a",
          soft: "#d4926a",
          deep: "#9a5a34",
          wash: "#f3e4d4",
        },
        terracotta: {
          DEFAULT: "#b85c38",
          soft: "#d47855",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        sketch: ["var(--font-sketch)", "Georgia", "serif"],
      },
      boxShadow: {
        page: "0 1px 2px rgba(42,36,32,0.04), 0 8px 24px rgba(42,36,32,0.06)",
        card: "0 1px 0 rgba(42,36,32,0.04), 0 4px 16px rgba(42,36,32,0.05)",
      },
      backgroundImage: {
        "paper-grain":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-in-soft": "fadeIn 0.3s ease-out forwards",
        "pop-in": "popIn 0.32s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.965) translateY(10px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
