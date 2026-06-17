/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "640px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      primary: "var(--font-inter)",
      mono: "var(--font-jetbrainsMono)",
      serif: "var(--font-playfair)",
    },
    extend: {
      colors: {
        primary: "#fafafa",
        accent: "#7f77dd",
        "accent-hover": "#534ab7",
        "accent-focus": "#a78bfa",
        "accent-light": "#eeedfe",
        "font-primary": "#666666",
        "font-secondary": "#111111",
        "divider": "#e8e8e8",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
