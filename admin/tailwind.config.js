module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        'xs': '480px',
 
      },
      fontSize: {
        'regular-14': '14px',
      },
      fontWeight: {
        'regular': '400',
      },

      colors: {
        secondary: '#ff5722',
        'secondary-dark': '#5a6268',
          'green-90': '#14532d',
          tertiary: '#222222',  // Define your custom green color here
        
         // Replace this with your desired secondary color,
        
      },
      backgroundImage: {
        'banneroffer': "url('/frontend/src/ASSETS/frontend/assets/banneroffer.png')",
      }
    },
  },
  variants: {
    extend: {
      top: ['responsive'],
    },
  },

  plugins: [],
}



