/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      colors: {
        board: {
          50: '#1f2937',
          100: '#334155',
          200: '#5b6472',
          600: '#d6d0c4',
          700: '#efe8d9',
          800: '#ffffff',
          900: '#1f2937',
        },
        accent: {
          100: '#e7f2ee',
          300: '#74a896',
          500: '#2f6e5b',
          700: '#245747',
          900: '#17362d',
        },
        highlight: {
          100: '#f9edd7',
          300: '#d6b578',
          500: '#b9913a',
          700: '#8d6e2d',
          900: '#5a451d',
        },
      },
      keyframes: {
        moveIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(18px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        squarePulse: {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(185, 145, 58, 0)',
          },
          '50%': {
            boxShadow: '0 0 0 10px rgba(185, 145, 58, 0.24)',
          },
        },
        pieceSlide: {
          '0%': {
            opacity: '0',
            transform: 'translate(-10px, 8px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0, 0)',
          },
        },
      },
      animation: {
        'move-in': 'moveIn 700ms ease-out both',
        'square-pulse': 'squarePulse 2.8s ease-in-out infinite',
        'piece-slide': 'pieceSlide 750ms ease-out both',
      },
    },
  },
  plugins: [],
}

