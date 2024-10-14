import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#215881",
        "light-blue": "#aac1d8",
        cream: "#fbf3e4",
        orange: "#ff5757",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
        brittany: ["Brittany Signature", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};

export default config;
