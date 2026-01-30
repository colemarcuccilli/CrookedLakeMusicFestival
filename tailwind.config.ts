import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lake: {
          light: '#40c1ef',
          DEFAULT: '#4bafef',
          dark: '#2a8fd4',
          950: '#0b1e2f',
          900: '#0d2a42',
          800: '#0f3a5c',
          700: '#1a5a8a',
          600: '#2980b9',
          500: '#4bafef',
          400: '#40c1ef',
          300: '#7cd4fd',
          200: '#b9e5fe',
          100: '#e0f2fe',
          50: '#f0f9ff',
        },
        pink: {
          DEFAULT: '#ea207e',
          light: '#f04d9a',
          dark: '#c41868',
          600: '#c41868',
          500: '#ea207e',
          400: '#f04d9a',
          300: '#f580b5',
        },
        sunset: {
          DEFAULT: '#e2df20',
          light: '#eaec5a',
          dark: '#c4c21a',
          600: '#c4c21a',
          500: '#e2df20',
          400: '#eaec5a',
          300: '#f2f38a',
          200: '#f8f9c0',
        },
        sand: {
          50: '#fefdfb',
          100: '#fdf8f3',
          200: '#f5ebe0',
          800: '#44403c',
          900: '#1c1917',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        'blob': '30% 70% 70% 30% / 30% 30% 70% 70%',
        'pill': '9999px',
        '4xl': '2rem',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(75, 175, 239, 0.3)',
        'glow-md': '0 0 40px rgba(75, 175, 239, 0.4)',
        'glow-lg': '0 0 60px rgba(75, 175, 239, 0.5)',
        'glow-pink': '0 0 40px rgba(234, 32, 126, 0.4)',
        'glow-sunset': '0 0 40px rgba(226, 223, 32, 0.4)',
        'soft': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'elevated': '0 20px 50px rgba(0, 0, 0, 0.15)',
      },
      screens: {
        'xs': '475px',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(75, 175, 239, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(75, 175, 239, 0.6)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
