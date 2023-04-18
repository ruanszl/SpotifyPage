/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Roboto, sans-serif',
      },
      fontSize:{
        'xxs':'2px'
      },
      width:{
        'eg': '623px',
        'ex': '92px',
        'gw': '130px',  
      },
      height: {
        'ww': '91px'
      },
      backgroundImage: {
        app: 'url(/fundo.png)'
      },
    },
  },
  plugins: [],
}
