/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Newsreader"', '"Lora"', '"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          dark: '#0e100c',
          card: '#141612',
          cardHover: '#1a1c17',
          border: '#242820',
          borderLight: '#32372c',
          lime: '#d4ff32',
          limeHover: '#bef21e',
          coral: '#ff6b57',
          blue: '#93c5fd',
          cream: '#f4f3ea',
          creamHover: '#ffffff',
          muted: '#8e9286',
        }
      }
    },
  },
  plugins: [],
};

