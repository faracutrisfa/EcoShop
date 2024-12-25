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
        grey: {
          50: "#F5F5F5",
          100: "#E6E6E6",
          200: "#CCCCCC",
          300: "#B3B3B3",
          400: "#999999",
          500: "#666666",
          600: "#333333",
          700: "#262626",
          800: "#191919",
          900: "#0D0D0D",
        },
      },
    },
  },
  plugins: [],
};