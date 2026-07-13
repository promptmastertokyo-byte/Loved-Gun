import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#122437",
        sky: "#45a7dc",
        mint: "#a7d9c7",
        paper: "#f7fafb",
      },
    },
  },
  plugins: [],
};

export default config;
