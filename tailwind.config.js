/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js",
    "./public/**/*.html"
  ],
  theme: {
    colors: {
      'primary': '#A70000',
      'light': '#C45454',
      'secondary': '#043570',
      'gray': '#E5E5E5',
    },
    extend: {},
  },
  plugins: [],
}