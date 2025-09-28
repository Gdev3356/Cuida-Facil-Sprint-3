// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- ESSENCIAL: Diz ao Tailwind para olhar seus componentes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
