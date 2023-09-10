/** @type {import('tailwindcss').Config} */
module.exports = {
  // daisyui: {
  //   themes: [
  //     {
  //       dark: {
  //         ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
  //         primary: '#F15B2E',
  //       },
  //     },
  //   ],
  // },
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'luxury'],
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
