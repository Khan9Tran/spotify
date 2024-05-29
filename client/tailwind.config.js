/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          'bg-black-primary': '#000000',
          'bg-black-secondary': '#121212',

          'txt-white-primary': '#ffffff',
          'txt-white-secondary': '#f6f6f6',

          'bg-green-primary': '#1fdf64',
          'txt-green-primary': '#117a37',

          'bg-gray-primary': '#727272',
          'txt-gray-primary': '#a7a7a7',

          'bg-red-primary': '#e91429',
          'txt-red-primary': '#e35e60',
        },
        fontFamily: {
          'bold': ['CircularStd-Bold', 'sans-serif'],
          'light': ['CircularStd-Light', 'sans-serif'],
          'medium': ['CircularStd-Medium', 'sans-serif'],
        },
      },
    },
  },
  plugins: [],
}

