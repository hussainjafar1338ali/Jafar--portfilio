/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#05070D',
          900: '#0A0E1A',
          800: '#0F1420',
          700: '#161C2C',
          600: '#1E2537',
        },
        accent: {
          blue: '#3B82F6',
          indigo: '#6366F1',
          purple: '#8B5CF6',
          violet: '#A855F7',
        },
        text: {
          primary: '#E7E9F0',
          muted: '#8B93A7',
          dim: '#737E96',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.15), transparent 60%)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      boxShadow: {
        glow: '0 0 40px rgba(99,102,241,0.25)',
        'glow-purple': '0 0 40px rgba(168,85,247,0.25)',
        glass: '0 8px 32px rgba(0,0,0,0.37)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        float: 'float 6s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
