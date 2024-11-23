// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add the paths where you use Tailwind
  ],
  theme: {
    extend: {
      animation: {
        heart: "beat 1s ease-in-out infinite", // This applies the animation
      },
      keyframes: {
        beat: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.2)", // Increase size for the 'beating' effect
          },
        },
      },
    },
  },
  plugins: [],
};
