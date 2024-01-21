import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    preflight: false,
  },

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  important: "#__next",

  theme: {
    extend: {
      colors: {
        lighttextcolor: "#FFF",
        green: "#23856D",
        black: "#252B42",
        secondarytextcolor: "#737373",
        skyblue: "#23A6F0",
      },
    },
  },
  plugins: [],
};
export default config;
