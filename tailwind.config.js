/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg_home': "url(https://lappeenranta.kuvat.fi/kuvat/Matkailu/Kaupunginlahti%2C%20auringonlasku%20hein%C3%A4kuussa.jpg?img=full)"
      }
    },
    screens: {
      'xs': '300px',
      ...defaultTheme.screens
    }
  },
  plugins: [],
}