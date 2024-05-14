/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')], 
  daisyui: {
    themes: [
      {
        'mytheme': { // Your custom theme name
          'base-100': '#3A73CD', // Background color for your theme
          // Other colors...
        },
      },
    ],
  },
};

