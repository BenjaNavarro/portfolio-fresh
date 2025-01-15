import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        move: {
          '25%': {transform: 'translateY(-2.5ch)'},
          '50%': {transform: 'translateY(-4.5ch)'},
          '75%': {transform: 'translateY(-7ch)'},
        },
        "move-sm": {
          '25%': {transform: 'translateY(-2.2ch)'},
          '50%': {transform: 'translateY(-4.5ch)'},
          '75%': {transform: 'translateY(-7ch)'},
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        move: 'move 7s infinite',
        'white-out': 'white-out 5s infinite',
        'move-sm': 'move-sm 7s infinite',
      },
      screens: {
        'xs': '480px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
