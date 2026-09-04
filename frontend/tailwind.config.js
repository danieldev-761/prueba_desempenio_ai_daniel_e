/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F5FF',
          100: '#E0EBFF',
          200: '#BA D4FF',
          500: '#2563EB',
          600: '#1D4ED8',
          800: '#1E3A8A',
          900: '#0F172A',
        },
        accent: {
          500: '#D97706',
          600: '#B45309',
        },
      },
    },
  },
  plugins: [],
}
