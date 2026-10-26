/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        felt: {
          950: '#03120b',
          900: '#071f14',
          800: '#0d3121',
          700: '#14452f',
          600: '#1b5e3f',
        },
        gold: {
          300: '#fef08a',
          400: '#facc15',
          500: '#e5b842',
          600: '#ca8a04',
          700: '#a16207',
        },
        casino: {
          black: '#090a0c',
          card: '#12141a',
          rim: '#181a20',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      boxShadow: {
        'felt': 'inset 0 0 80px rgba(0, 0, 0, 0.7), 0 20px 50px rgba(0, 0, 0, 0.8)',
        'pot': '0 0 35px rgba(229, 184, 66, 0.25)',
        'active-turn': '0 0 25px rgba(229, 184, 66, 0.45)',
        'chip': '0 4px 8px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.4)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        chipFloat: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'chip-float': 'chipFloat 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
