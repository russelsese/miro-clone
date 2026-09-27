/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'miro-yellow': '#ffd900',
        'miro-blue': '#4262ff',
        'miro-blue-hover': '#3354e0',
        'miro-bg': '#f2f2f2',
        'miro-canvas': '#f5f5f5',
        'miro-border': '#e0e0e0',
        'miro-text': '#1a1a1a',
        'miro-text-secondary': '#5f6368',
      },
      boxShadow: {
        'toolbar': '0 2px 8px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        'sm': '6px',
        'md': '10px',
        'lg': '16px',
      },
    },
  },
  plugins: [],
}
