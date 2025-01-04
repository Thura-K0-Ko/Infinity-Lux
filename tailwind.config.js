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
        customPurple: "#6A669D", // Add my custom color
        customGray: {
          100: "#E6E5F2", // Lightest shade
          200: "#CFCDE5",
          300: "#B8B5D7",
          400: "#A29DC9",
          500: "#6A669D", // Base color
          600: "#5E5A8C",
          700: "#4B4770",
          800: "#383454",
          900: "#252238", // Darkest shade
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
