/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#070515',
        'brand-dark-card': '#100c2a',
        'brand-lime': '#c6ff7c',
        'brand-orange': '#ff5f2e',
        'brand-blue': '#b4dbff',
        'brand-yellow': '#fdf070',
        'brand-purple': '#c7caff',
        'brand-offwhite': '#f8f8f8',
        'brand-card-bg': '#fdfae7',
        'surface': '#0e0b24',
        'surface-subtle': '#161238',
      },
      fontFamily: {
        'sans': ['Geist', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        'display': ['Anton', 'sans-serif'],
        'heading': ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
