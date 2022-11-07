/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["corporate"],
    darkTheme: "corporate",
  },
  plugins: [require("daisyui")],
}