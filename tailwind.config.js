/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/index.html', "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}