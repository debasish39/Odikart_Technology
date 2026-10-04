/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 70px rgba(99,102,241,.20)",
        card: "0 25px 80px rgba(0,0,0,.25)",
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-140%) skewX(-18deg)" },
          "55%, 100%": { transform: "translateX(240%) skewX(-18deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: ".45", transform: "scale(1)" },
          "50%": { opacity: ".8", transform: "scale(1.08)" },
        },
      },
      animation: {
        shine: "shine 3.8s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
