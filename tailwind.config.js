module.exports = {
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-fast': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'grid-flow': 'gridFlow 20s linear infinite',
      },
      keyframes: {
        gridFlow: {
          '0%, 100%': { transform: 'translateY(0) skewY(-12deg)' },
          '50%': { transform: 'translateY(-5%) skewY(-12deg)' },
        }
      },
    },
  },
} 