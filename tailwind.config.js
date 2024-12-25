/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Baskerville"', "serif"],
        inter: ['"Inter"', "sans-serif"],
      },
      colors: {
        primary: "#658C4A",
        primaryLight: "#89BC68",
        secondary: "#E7CEC0",
      },
    },
  },
  plugins: [],
};
