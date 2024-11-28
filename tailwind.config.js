/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Para el directorio "app" si usas la nueva estructura.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

