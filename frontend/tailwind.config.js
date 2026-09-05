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
          lime: '#bdf052',
          dark: '#070515',
          navy: '#0c0926',
          blue: '#38bdf8',
          yellow: '#facc15',
          purple: '#c084fc',
          orange: '#fb923c',
          50: '#F0F5FF',
          100: '#E0EBFF',
          200: '#BAD4FF',
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
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Syne', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
