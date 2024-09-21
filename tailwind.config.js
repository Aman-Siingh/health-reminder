/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        softGreen: '#A8E6CF',
        lightBlue: '#B2CFF9',
        warmWhite: '#FFFFFF',
        peach: '#FFABAB',
        slateGray: '#6A7B8A',
        ivory: '#FFFFF0', // Add Ivory
        snow: '#FFFAFA', // Add Snow
        ghostWhite: '#F8F8FF', // Add Ghost White
        seashell: '#FFF5EE', // Add Seashell
        mutedTeal: '#008080', // Muted Teal
        warmBeige: '#F5F5DC', // Warm Beige
        dustyRose: '#D4A5A5'
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
