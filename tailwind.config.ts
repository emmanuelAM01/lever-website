import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#efeee7",
        corralPrimary: "#FF6F61",
        intermediateBackground: "#FFDDC1",
        textPrimary: '#232323',
        textSecondary: '#4a4a4a',
        textTertiary: '#6b6b6b'

      },

      keyframes: {
        "gradient-move": {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "0% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
        fill: {
          '0%': { transform: 'translateY(100%)' },
          '50%': { transform: 'translateY(90%)' },
          '100%': { transform: 'translateY(100%)' },
        },

        'fill-bubble': {
          '0%': { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
          '50%': { clipPath: 'polygon(0 75%, 100% 70%, 100% 100%, 0 100%)' },
          '100%': { clipPath: 'polygon(0 70%, 100% 75%, 100% 100%, 0 100%)' },
        },
        
      },
      animation: {
        "gradient-move": "gradient-move 15s ease-in-out infinite",
        fill: 'fill 4s ease-in-out infinite',
        'fill-bubble': 'fill-bubble 2s ease-in-out forwards',

      },

      fontFamily: {
        heading: ["var(--font-lora)", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
