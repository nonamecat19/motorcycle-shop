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
    themes: [{
      'corporate': {
        primary: "#4b6bfb",
        secondary: "#7b92b2",
        accent: "#67cba0",
        neutral: "#ff7100",
        "neutral-content": "#edf2f7",
        "base-100": "#ffffff",
        "base-content": "#181a2a",
        "--rounded-box": "0.25rem",
        "--rounded-btn": ".125rem",
        "--rounded-badge": ".125rem",
        "--animation-btn": "0",
        "--animation-input": "0",
        "--btn-focus-scale": "1",
      }
    }],
    darkTheme: "corporate",
  },
  plugins: [require("daisyui")],
}