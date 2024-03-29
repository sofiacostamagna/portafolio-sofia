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
        // secondary: "#F13024",
        secondary: "#D946EF",
      },
      backgroundImage: {
        explosion: "url('/assets/bg-explosion.png')",
      },
    },
  },
  plugins: [],
};
export default config;
