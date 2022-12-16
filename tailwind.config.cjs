/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: 'rgb(249, 249, 249)',
      gray: '#ddcbff',
      mainpurple: '#4a1e9e',
      secondarypurple: '#8a2be2',
      lightpurple: '#bb98ff',
      darkpurple: '#0E050F',
      rose: 'rgba(189, 43, 226,.2)',
      blue: 'rgb(60, 135, 194,.2)'
    },
    extend: {
      keyframes: {
        scroll: {
          '0%' : { 'top': '7px', 'opacity': '1' },
          '50%': { 'top': '25px', 'opacity': '0' },
          '100%': { 'top': '25px', 'opacity': '0' }
        }
      }
    },
  },
  plugins: [],
}