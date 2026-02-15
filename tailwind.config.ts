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
        // Your existing gold palette
        gold: {
          50: '#FAF8F3',
          100: '#F5F0E6',
          200: '#EAE0CC',
          300: '#DFC9A3',
          400: '#D4B27A',
          500: '#C9A961', // Primary gold
          600: '#B8860B',
          700: '#8B6914',
          800: '#5E4C1C',
          900: '#312F24',
        },
        // Your existing dark palette
        dark: {
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#CCCCCC',
          300: '#999999',
          400: '#666666',
          500: '#2B2B2B', // Primary dark
          600: '#1F1F1F',
          700: '#1A1A1A',
          800: '#141414',
          900: '#0A0A0A',
        },
        cream: '#F8F6F1',
        
        // Additional colors for our design
        primary: {
          DEFAULT: '#FFD700',
          light: '#FFE55C',
          dark: '#FFA500',
        },
        secondary: {
          DEFAULT: '#FFA500',
          light: '#FFB733',
          dark: '#FF8C00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        bangla: ['Hind Siliguri', 'system-ui', 'sans-serif'],
      },
      animation: {
        // Your existing animations
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        
        // Additional animations for our design
        'float': 'float 6s ease-in-out infinite',
        'slide-in': 'slideIn 1s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        // Your existing keyframes
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        
        // Additional keyframes for our design
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(-5deg)' },
          '50%': { transform: 'translateY(-20px) rotate(-5deg)' },
        },
        slideIn: {
          'from': { opacity: '0', transform: 'translateX(-50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 215, 0, 0.6)' },
        },
      },
      boxShadow: {
        // Your existing shadows
        'gold': '0 4px 20px rgba(201, 169, 97, 0.15)',
        'gold-lg': '0 10px 40px rgba(201, 169, 97, 0.25)',
        'dark': '0 4px 20px rgba(43, 43, 43, 0.1)',
        
        // Additional shadows for our design
        'glow': '0 0 30px rgba(255, 215, 0, 0.5)',
        'glow-lg': '0 0 60px rgba(255, 215, 0, 0.6)',
        'card': '0 20px 40px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #FFD700, #FFA500)',
        'gradient-dark': 'linear-gradient(135deg, #0A0A0A, #1a1a1a)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config