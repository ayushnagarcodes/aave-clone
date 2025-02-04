import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        brand: ["var(--font-brand)", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        pulse: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "35%": { opacity: "0.7" },
          "70%": { transform: "scale(2.5)", opacity: "0" },
          "100%": { transform: "scale(0)", opacity: "0" },
        },
        pulseDot: {
          "0%": { transform: "scale(1)" },
          "35%": { transform: "scale(1.2)" },
          "70%": { transform: "scale(1)" },
          "100%": { transform: "scale(1)" },
        },
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        pulse: "pulse 2s ease-out infinite both",
        pulseDot: "pulseDot 2s ease-out infinite both",
        slide: "slide 20s linear infinite both",
      },
      screens: {
        xs: "520px",
      },
    },
  },
  plugins: [],
} satisfies Config;
