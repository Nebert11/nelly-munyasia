/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#E8F0EC',
          100: '#C7D9CE',
          200: '#9AB4A4',
          300: '#6E8F7A',
          400: '#456A52',
          500: '#1F6E52',
          600: '#155440',
          700: '#0B3D2E',
          800: '#042E20',
          900: '#031F16',
        },
        gold: {
          50: '#FBF6E6',
          100: '#F5E9C0',
          200: '#ECD384',
          300: '#E0BD52',
          400: '#C9A227',
          500: '#C0912A',
          600: '#9E7420',
          700: '#7C5A1A',
          800: '#5A4113',
          900: '#3D2C0D',
        },
        cream: {
          50: '#FBFAF5',
          100: '#F4F0E5',
          200: '#EAE3D0',
          300: '#DDD3B8',
          400: '#C9BC9A',
          500: '#B0A07E',
        },
        accent: {
          red: '#D9272E',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      letterSpacing: {
        'badge': '0.18em',
        'wide-lg': '0.12em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.9s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
