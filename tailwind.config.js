/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/*.{html,js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#ffffff',
        'second': '#ff7100',
        'bg': '#ff6a00'
      }
    },
  },
  daisyui: {
    themes: ["corporate"],
    darkTheme: "corporate",
  },
  plugins: [require("daisyui")],
}