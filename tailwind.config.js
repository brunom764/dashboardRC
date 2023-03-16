/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {custom: {
      600: '#469C57',
      700: '#1A3C21'
    }},
  },
  plugins: [],
}