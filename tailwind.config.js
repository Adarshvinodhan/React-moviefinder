// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Adjust the path to your project files
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'ease-out' },
          '50%': { transform: 'translateY(-20px)', animationTimingFunction: 'ease-in' },
        },
        rotateIn: {
          '0%': { opacity: 0, transform: 'rotate(-90deg)' },
          '100%': { opacity: 1, transform: 'rotate(0deg)' },
        },
        zoomIn: {
          '0%': { opacity: 0, transform: 'scale(0.5)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        zoomOut: {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '100%': { opacity: 0, transform: 'scale(0.5)' },
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-100px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(100px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        heart: {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.3)' },
          '40%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out',
        fadeInDown: 'fadeInDown 1s ease-out',
        fadeIn: 'fadeIn 1s ease-in',
        bounce: 'bounce 1s infinite',
        rotateIn: 'rotateIn 1s ease-out',
        zoomIn: 'zoomIn 1s ease-out',
        zoomOut: 'zoomOut 1s ease-in',
        slideInLeft: 'slideInLeft 1s ease-out',
        slideInRight: 'slideInRight 1s ease-out',
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        heart: 'heartbeat 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
