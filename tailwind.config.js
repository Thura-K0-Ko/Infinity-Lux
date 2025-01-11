/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Urbanist", "Padauk", "sans-serif"],
      serif: ["Gilda Display", "serif"],
    },
    extend: {
      colors: {
        customPurple: "#6A669D", // Add my custom color
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
