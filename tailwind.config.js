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
      transparent: 'transparent',
      current: 'currentColor',
      light: {
        primary: {
          DEFAULT: colors.white,
          accent: colors.blueGray[800],
        },
        secondary: {
          DEFAULT: colors.blueGray[100],
          accent: colors.blueGray[400],
        },
      },
      dark: {
        primary: {
          DEFAULT: colors.blueGray[800],
          accent: colors.blueGray[300],
        },
        secondary: {
          DEFAULT: colors.blueGray[700],
          accent: colors.blueGray[400],
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
