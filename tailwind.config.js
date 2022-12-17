/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#EA3F30",
          "secondary": "#2E2E2E",
          "accent": "#FEF5F5",
          
        }
      }
    ]
  },
}
