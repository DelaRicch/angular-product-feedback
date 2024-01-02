/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#AD1FEA",
        "gray": "#647196",
        "button-white": "#F2F4FE",
        "error": "#D73737"
      }
    },
  },
  plugins: [],
}