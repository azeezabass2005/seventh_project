/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  theme: {
    extend: {},
    screens: {
      vs: '360px',
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: "1060px",
      lg: '1200px',
      xl: "1700px",

    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      primary: '#070918fe',
      secondary: '#070923',
      white: '#fff',
      dimWhite: '#aaa'
    }
  },
  plugins: [],
}


