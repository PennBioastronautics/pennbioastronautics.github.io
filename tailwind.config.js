/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'radion': ['Radion', 'Space Grotesk', 'sans-serif'],
        'custom-title': ['Radion', 'Space Grotesk', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        // Custom cream color
        cream: '#FFE4BE',
        // Primary red colors
        primary: {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ffa0a0',
          400: '#ff6b6b',
          500: '#FF5C5E', // Dark mode primary
          600: '#FF2F32', // Light mode primary
          700: '#e11d48',
          800: '#be123c',
          900: '#9f1239',
          950: '#881337',
        },
        // Secondary navy/cream colors
        secondary: {
          50: '#FFE4BE', // Light mode secondary (cream)
          100: '#ffd6a5',
          200: '#ffcd8b',
          300: '#ffc071',
          400: '#ffb357',
          500: '#ff9500',
          600: '#e6851a',
          700: '#cc7633',
          800: '#b3674d',
          900: '#995866',
          950: '#0E2540', // Dark mode secondary (navy)
        },
        // Third blue colors
        tertiary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#46A3FF', // Dark mode tertiary
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#05488A', // Light mode tertiary
          900: '#1e3a8a',
          950: '#1e40af',
        },
        // Background colors
        background: {
          light: '#FFE4BE',
          dark: '#0E2540',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite alternate',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '1' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        }
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #FF2F32 0%, #FF5C5E 100%)',
        'secondary-gradient': 'linear-gradient(135deg, #0E2540 0%, #05488A 100%)',
        'tertiary-gradient': 'linear-gradient(135deg, #05488A 0%, #46A3FF 100%)',
        'background-gradient': 'linear-gradient(135deg, #0E2540 0%, #05488A 25%, #46A3FF 50%, #FF5C5E 75%, #FF2F32 100%)',
      }
    },
  },
  plugins: [],
} 