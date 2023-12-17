/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#FEFEFE',
        'secondary':'#E3F2C1',
        'tertiary':'#C9DBB2',
        'quaternary' : '#AAC8A7',
        'darkText': '#48592C',
        'darkBg':'#08090A',
        'lightText':'#F7F4EA'
      }
    },
  },
  plugins: [],
}

