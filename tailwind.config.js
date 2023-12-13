/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.ejs' ,
  ],
  theme: {
    extend: {
      colors: {
        customTrBlack: 'rgba(15, 15, 15, 0.8)',
        customTrBlack2: 'rgba(36, 36, 36, 0.733)',
        customTrWhite: 'rgba( 239, 239, 239, 0.15)',
        customTrWhite2: 'rgba( 239, 239, 239, 0.7)',
      },
      borderRadius: {
        '4xl': '2rem', //rounded-4xl
      },
      strokeWidth: {
        '0.5': 0.5, //stroke-0.5
      },
      spacing: {
        '90': '22rem', //mt-90
      },
      height: {
        '100': '49rem', //h-100
      },
      width: {
        '100': '24rem', //w-100
        '200': '52rem', //w-200
      },
      padding: {
        '30': '7.7rem', //px-30
        '100': '26rem', //px-100
      },
      boxShadow: {
        'customPurple': '0px 0px 30px rgba(75, 0, 214, 0.8)', //shadow-customPurple
        'customBlue': '0px 0px 30px rgba(0, 51, 214, 0.8)', //shadow-customBlue
        'customWhite': '0px 0px 20px rgba(255, 255, 255, 0.2)' //shadow-customWhite
      },
      scale: {
        '103': '1.03', //hover:scale-103
      },
    },
  },
  variants: {},
  plugins: [],
}