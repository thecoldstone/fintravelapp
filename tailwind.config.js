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
        'bg_home': "url(https://live.staticflickr.com/65535/52313647932_f764b8ef57_o.jpg)"
      }
    },
    screens: {
      'xs': '300px',
      ...defaultTheme.screens
    }
  },
  plugins: [],
}