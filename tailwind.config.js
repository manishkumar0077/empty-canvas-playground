/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        temple: {
          ivory: '#FBF9F4',
          cream: '#F8F5F0',
          sandalwood: '#E8D5C4',
          'sandalwood-light': '#F0E6D6',
          kumkum: '#B91C1C',
          'kumkum-light': '#DC2626',
          saffron: '#F97316',
          'saffron-light': '#FB923C',
          gold: '#D97706',
          'gold-light': '#FBBF24',
          'gold-pale': '#FEF3C7',
          'brown-deep': '#1C1917',
          'brown-medium': '#44403C',
          'brown-light': '#78716C',
          rose: '#F43F5E',
          'rose-light': '#FB7185',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'sanskrit': ['Noto Sans Devanagari', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '104': '26rem',
        '112': '28rem',
        '128': '32rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'temple-texture': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"temple\" patternUnits=\"userSpaceOnUse\" width=\"20\" height=\"20\"><path d=\"M10 2L18 10L10 18L2 10Z\" fill=\"%23D97706\" opacity=\"0.03\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23temple)\"/></svg>')",
        'lotus-pattern': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 60 60\"><defs><pattern id=\"lotus\" patternUnits=\"userSpaceOnUse\" width=\"30\" height=\"30\"><circle cx=\"15\" cy=\"15\" r=\"8\" fill=\"none\" stroke=\"%23D97706\" stroke-width=\"0.5\" opacity=\"0.08\"/><circle cx=\"15\" cy=\"15\" r=\"4\" fill=\"%23F97316\" opacity=\"0.04\"/></pattern></defs><rect width=\"60\" height=\"60\" fill=\"url(%23lotus)\"/></svg>')",
        'mandala-bg': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\"><defs><pattern id=\"mandala\" patternUnits=\"userSpaceOnUse\" width=\"50\" height=\"50\"><g fill=\"none\" stroke=\"%23D97706\" stroke-width=\"0.3\" opacity=\"0.1\"><circle cx=\"25\" cy=\"25\" r=\"20\"/><circle cx=\"25\" cy=\"25\" r=\"15\"/><circle cx=\"25\" cy=\"25\" r=\"10\"/><circle cx=\"25\" cy=\"25\" r=\"5\"/></g></pattern></defs><rect width=\"200\" height=\"200\" fill=\"url(%23mandala)\"/></svg>')",
      },
      animation: {
        'diya-pulse': 'diya-pulse 3s ease-in-out infinite',
        'float-gentle': 'float-gentle 4s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in-scale': 'fade-in-scale 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'diya-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 10px rgba(217, 119, 6, 0.3), 0 0 20px rgba(217, 119, 6, 0.2)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(217, 119, 6, 0.5), 0 0 40px rgba(217, 119, 6, 0.3)',
            transform: 'scale(1.02)'
          },
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-scale': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'glow-pulse': {
          '0%': { boxShadow: '0 0 5px rgba(217, 119, 6, 0.4)' },
          '100%': { boxShadow: '0 0 20px rgba(217, 119, 6, 0.8), 0 0 30px rgba(217, 119, 6, 0.4)' },
        },
      },
      boxShadow: {
        'temple': '0 4px 6px -1px rgba(217, 119, 6, 0.1), 0 2px 4px -1px rgba(217, 119, 6, 0.06)',
        'temple-lg': '0 10px 15px -3px rgba(217, 119, 6, 0.1), 0 4px 6px -2px rgba(217, 119, 6, 0.05)',
        'gold-glow': '0 0 20px rgba(217, 119, 6, 0.3)',
        'kumkum-glow': '0 0 20px rgba(185, 28, 28, 0.3)',
      },
    },
  },
  plugins: [],
};