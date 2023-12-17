/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.ejs' ,
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '767px'}, // un écran small est considéré (max-width: 767px) à la place de (min-width: 640px)
      },
      colors: {
        customTrBlack: 'rgba(15, 15, 15, 0.8)',
        customTrBlack2: 'rgba(36, 36, 36, 0.733)',
        customTrWhite: 'rgba( 239, 239, 239, 0.15)',
        customTrWhite2: 'rgba( 239, 239, 239, 0.7)',
      },
      fontSize: {
        'xs': '0.8rem', //text-xs
        'md': '1rem', //text-md
        '4.5xl': '2.75rem', //text-4.5xl
      },
      lineHeight: {
        'xs': '1rem', //text-xs
        'md': '1.5rem', //text-md
        '4.5xl': '1rem', //text-4.5xl
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
        '88': '38rem', //h-88
        '90': '46rem', //h-90
        '95': '47rem', //h-95
        '97': '48rem', //h-97
        '100': '49rem', //h-100
        '110': '53rem', //h-110
      },
      width: {
        '85': '21rem', //w-85
        '100': '24rem', //w-100
        '200': '52rem', //w-200
      },
      padding: {
        '26': '6.5rem', //px-26
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