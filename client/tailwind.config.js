/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-primary': '#000000',
        'black-secondary': '#121212',

        'white-primary': '#ffffff',
        'white-secondary': '#f6f6f6',

        'green-light': '#1fdf64',
        'green-dark': '#117a37',

        'gray-light': '#a7a7a7',
        'gray-dark': '#727272',
        'gray-very-dark': '#282424',

        'red-light': '#e91429',
        'red-dark': '#e35e60',

      },

      fontFamily: {
        'bold': ['Gotham-Bold', 'sans-serif'],
        'light': ['Gotham-Light', 'sans-serif'],
        'medium': ['Gotham-Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

