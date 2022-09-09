/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,ts}",
  ],

  theme: {
    extend: {
      fontFamily: {

        amaticsc: ["amaticsc", "cursive"],
      },
    },

  },
  plugins: [],
}
