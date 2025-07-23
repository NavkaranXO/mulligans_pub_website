/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mahogany: {
          DEFAULT: '#5D2E1F',
          light: '#7A3B29',
          dark: '#4A2419',
        },
        amber: {
          DEFAULT: '#D4A04B',
          light: '#E0B76A',
          dark: '#B88A3F',
        },
        copper: {
          DEFAULT: '#B87333',
          light: '#C98D4F',
          dark: '#9E622C',
        },
        leather: {
          DEFAULT: '#8B4513',
          light: '#A05A1C',
          dark: '#6E370F',
        },
        oak: {
          DEFAULT: '#705335',
          light: '#8A6642',
          dark: '#5A422A',
        },
        burgundy: {
          DEFAULT: '#8C3A3A',
          light: '#A04545',
          dark: '#6E2E2E',
        },
        parchment: '#F5F1E6',
        smoke: '#F2EFE9',
        'dark-oak': '#2C1A0E',
        brass: '#CDA349',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'slide-up': 'slideUp 0.8s ease-in-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-in-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-in-out forwards',
        'pulse': 'pulse 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { transform: 'translateY(50px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          'from': { transform: 'translateX(50px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          'from': { transform: 'translateX(-50px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'pub': '0 4px 6px -1px rgba(93, 46, 31, 0.1), 0 2px 4px -1px rgba(93, 46, 31, 0.06)',
        'pub-lg': '0 10px 15px -3px rgba(93, 46, 31, 0.1), 0 4px 6px -2px rgba(93, 46, 31, 0.05)',
      },
    },
  },
  plugins: [],
}
