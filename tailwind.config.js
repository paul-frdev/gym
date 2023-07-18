/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: '#ef4444',
      },
      fontFamily: {
        logo: ['Pacifico'],
        body: ['Roboto'],
      },
    },
  },
  plugins: [],
};
