import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        accent: "#3b82f6",
        glass: "rgb(255 255 255 / <alpha-value>)",
      },
    },
  },
  plugins: [],
} satisfies Config;

