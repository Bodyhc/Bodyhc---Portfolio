/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      pointerEvents: ['group-hover'],
    },
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0a0a0f',
        'bg-darker': '#050508',
        'accent-purple': '#a78bfa',
        'accent-blue': '#60a5fa',
        'accent-cyan': '#22d3ee',
        'accent-pink': '#f472b6',
        'text-primary': '#ffffff',
        'text-secondary': '#e2e8f0',
        'text-muted': '#cbd5e1',
        'glass': 'rgba(255, 255, 255, 0.08)',
        'glass-border': 'rgba(255, 255, 255, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
        'gradient-purple': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-blue': 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
        'gradient-pink': 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.5)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.5)',
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' },
        },
      },
      linearGradients: {
        'bg-top': ['180deg', '#0e1016 0%', 'transparent 50%'],
        'bg-bottom': ['0deg', '#0e1016 0%', 'transparent 100%'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
