/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#003B6D',
        'blue-sky': '#6699CC',
        'dim-gray': '#676767',
        'dim-silver': '#BDBDBD',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
