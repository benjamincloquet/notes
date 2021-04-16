/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        bottom: 'bottom',
        left: 'left',
      },
    },
    colors: {
      ...colors,
      light: colors.white,
      dark: colors.blueGray[800],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
