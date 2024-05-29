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

          'red-light': '#e91429',
          'red-dark': '#e35e60',
        },

        fontFamily: {
          'bold': ['CircularStd-Bold', 'sans-serif'],
          'light': ['CircularStd-Light', 'sans-serif'],
          'medium': ['CircularStd-Medium', 'sans-serif'],
        },
    },
  },
  plugins: [],
}
