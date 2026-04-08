import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fdf6f0',
        'cream-dark': '#f5ece4',
        pink: {
          light: '#fce4f8',
          DEFAULT: '#e879c8',
          dark: '#c855a8',
        },
        purple: {
          light: '#f0e4fc',
          DEFAULT: '#a855f7',
          dark: '#7c3aed',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-pink': 'linear-gradient(135deg, #e879c8, #a855f7)',
        'gradient-pink-soft': 'linear-gradient(135deg, #f9a8e8, #c084fc)',
      },
    },
  },
  plugins: [],
}

export default config
