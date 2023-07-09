/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: { min: '370px', max: '650px' },
      md: { min: '650px', max: '1440px' },
    },
  },
  plugins: [],
};
