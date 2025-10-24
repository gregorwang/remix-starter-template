import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "CursorGothic",
          "CursorGothic Fallback",
          "system-ui",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundColor: {
        'custom-dark': 'rgb(38, 37, 30)',
      },
    },
  },
  plugins: [],
} satisfies Config;
