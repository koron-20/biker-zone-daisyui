/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  //...
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}
<html data-theme="cupcake"></html>