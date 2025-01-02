/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accentLight: "#E0EDF5",
        accentDark: "#28617F",
        backgroundLight: "#E0EDF5",
        textDark: "#003554",
        textLight: "#486A6C",
      },
      fontFamily: {
        material: ["Material Symbols Rounded", "sans-serif"],
      },
    },
  },
  plugins: [],
}

