/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F700B5",
        "secondary": '#00C9A7',
        "main" : {
          100: '#ffd4f4',
          400: '#1c1c1c',
          500: '#121212'
        }
      }
    },
  },
  plugins: [],
}
