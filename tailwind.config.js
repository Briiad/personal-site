/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00C9A7",
        "secondary": '#F700B5',
        "main" : {
          100: '#f7f7f7',
          300: '#100d14',
          400: '#1c1c1c',
          500: '#121212'
        }
      }
    },
  },
  plugins: [],
}
