/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C1D1F",
        secondary: "#2A2B2D",
        accent: "#35363A",
        text: {
          primary: "#ECEDEE",
          secondary: "#687076"
        }
      }
    },
  },
  plugins: [],
}

