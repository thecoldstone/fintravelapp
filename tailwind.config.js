/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg_home': "url(https://lappeenranta.kuvat.fi/kuvat/Matkailu/Kaupunginlahti%2C%20auringonlasku%20hein%C3%A4kuussa.jpg?img=full)",
        'bg_lappeenranta': "url(https://live.staticflickr.com/7162/6790534457_4299ed994e_3k.jpg)" 
      }
    },
    screens: {
      'xs': '300px',
      ...defaultTheme.screens
    }
  },
  plugins: [],
}