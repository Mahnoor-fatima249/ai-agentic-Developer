import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ---- Monochrome Pro base scale ----
        mono: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        // ---- Semantic tokens (use these in components, not "mono-XXX" directly) ----
        background: {
          DEFAULT: "#F8FAFC",   // page background (light)
          dark: "#0F172A",      // page background (dark)
        },
        surface: {
          DEFAULT: "#FFFFFF",   // cards, panels (light)
          dark: "#1E293B",      // cards, panels (dark)
        },
        border: {
          DEFAULT: "#E2E8F0",
          dark: "#334155",
        },
        "text-primary": {
          DEFAULT: "#0F172A",
          dark: "#F1F5F9",
        },
        "text-secondary": {
          DEFAULT: "#64748B",
          dark: "#94A3B8",
        },
        // ---- Status colors (kept minimal, used sparingly) ----
        success: "#16A34A",
        warning: "#D97706",
        danger: "#DC2626",
        info: "#475569",
      },
      borderRadius: {
        card: "12px",
        control: "8px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
