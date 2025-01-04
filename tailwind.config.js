/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "Padauk", "sans-serif"],
      heading: ["serif"]
    },
    extend: {
      colors: {
        customPurple: "#6A669D", // Add my custom color
        roomBG: "#EFF2F7",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
