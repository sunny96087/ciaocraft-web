/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  theme: {
    extend: {
      colors: {
        'Primary-Orange': '#EA580C',
        'Primary-Dark': '#E1580E',
        'Primary-light': '#FA6C23',
        'Orange-light': '#F59460',
        'Orange-light-2': '#F8B490'
      }
    }
  },
  plugins: []
}
