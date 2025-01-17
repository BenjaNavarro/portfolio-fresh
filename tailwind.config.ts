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
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
        },
        move: {
          '25%': {transform: 'translateY(-2.5ch)'},
          '50%': {transform: 'translateY(-5ch)'},
          '75%': {transform: 'translateY(-7.6ch)'},
        },
        "move-sm": {
          '25%': {transform: 'translateY(-2.2ch)'},
          '50%': {transform: 'translateY(-4.5ch)'},
          '75%': {transform: 'translateY(-7ch)'},
        },
        highlight: {
          'from': { background: 'var(--input-color)' },
          'to': { width: '0', background: 'transparent' }
        },
        halfSpin: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' }
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' } 
        },
        t: {
          'from': { 'background-size':'0 200%' }
        },
        b: {
          '50%': {
            'background-position': '0 -100%,0 0',
          }
        },
        blink: {
          '50%': { 'color': 'transparent' }
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        move: 'move 7s infinite',
        'move-sm': 'move-sm 7s infinite',
        'white-out': 'white-out 5s infinite',
        highlight: 'highlight 0.3s ease',
        'half-spin': 'halfSpin 1s linear',
        coding: 'typing 3s steps(32) forwards',
        blink: 'blink 1s infinite',
        typing: 'b .7s infinte steps(1), t calc(var--n)*.3s steps(var(--n)) forwards',
      },
      screens: {
        'xs': '480px',
        '3xl': '1600px',
      },
      // margin: {
      //   'inline': 'margin-inline'
      // }
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
