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
        primary: '#110f23',
        primarylight: '#191534',
        primarylighter: '#211b45',
        secondary: '#eb055a',
        border: '#3c355d'
      }
    },
  },
  plugins: [],
};
export default config;
