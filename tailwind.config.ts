import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0e17",
        surface: "rgba(255,255,255,0.06)",
        glass: "rgba(255,255,255,0.08)",
        glassBorder: "rgba(255,255,255,0.12)",
        lime: "#d0ff00",
        limeGlow: "rgba(208,255,0,0.35)",
        warm: "#f7f3e8",
        steel: "#8892b0",
        navy: "#0f172a",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", '"Space Grotesk"', "system-ui", "sans-serif"],
        body: ["var(--font-inter)", '"Inter"', "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", '"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.08)",
        glow: "0 0 40px rgba(208,255,0,0.15)",
      },
      backdropBlur: {
        xs: "2px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
      animation: {
        "gradient-shift": "gradient-shift 20s ease infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
