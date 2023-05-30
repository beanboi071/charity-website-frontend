/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#F6FFDE',
        'secondary':'#E3F2C1',
        'tertiary':'#C9DBB2',
        'quaternary' : '#AAC8A7'
      }
    },
  },
  plugins: [],
}

