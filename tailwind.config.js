/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      heading: ["Gilda Display", "serif"], // For headings
      body: ["Urbanist", "sans-serif"], // For body text
    },
    extend: {
      colors: {
        // customPurple: "#6A669D",
        roomBG: "#EFF2F7",
        eventBg: "#EFF2F7",
        display: "#6A669D",
        title: "#141414",
        customPurple: {
          50: "#E1E0EB",
          100: "#CDCCDE",
          200: "#B5B3CE",
          300: "#9C99BE",
          400: "#8380AD",
          500: "#6A669D",
          600: "#585583",
          700: "#474469",
          800: "#35334F",
          900: "#232234",
          950: "#15141F",
        customWhite: "#E5E7EB",
        customBlue: {
          950: "#172554",
        },
        customGray: {
          50: "#D0D0D0",
          100: "#B1B1B1",
          200: "#8A8A8A",
          300: "#626262",
          400: "#3B3B3B",
          500: "#141414",
          600: "#111111",
          700: "#0D0D0D",
          800: "#0A0A0A",
          900: "#070707",
          950: "#040404",
        },
        customStone: {
          50: "#FCFCFB",
          100: "#FBFAF9",
          200: "#F9F8F6",
          300: "#F6F5F3",
          400: "#F4F3F0",
          500: "#F2F0ED",
          600: "#CAC8C6",
          700: "#A1A09E",
          800: "#797877",
          900: "#51504F",
          950: "#30302F",
        },
        customSlate: {
          50: "#FCFCFD",
          100: "#FAFBFC",
          200: "#F7F9FB",
          300: "#F4F6FA",
          400: "#F2F4F8",
          500: "#EFF2F7",
          600: "#C7CACE",
          700: "#9FA1A5",
          800: "#78797C",
          900: "#505152",
          950: "#303031",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
