module.exports = {
  content: ['./**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: [],
      },
    },
    colors: {
      'primary-light-blue': '#00A0F3',
      'breonne-blue': '#2A5579',
      'cape-storm': '#3C4856',
      disable: '#A6ABBD',
      'secondary-white': '#F6F9FF',
      white: '#FFFFFF',
      golden: '#D5A419',
      'strong-pink': '#AD3B6F',
      'light-green': '#00B595',
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};
