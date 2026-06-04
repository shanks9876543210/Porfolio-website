/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        card: '#111111',
        primary: '#4F46E5',
        secondary: '#7C3AED',
        accent: '#06B6D4',
        muted: '#A1A1AA',
        border: '#1F1F1F',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Syne"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '64px 64px',
      },
    },
  },
  plugins: [],
}
