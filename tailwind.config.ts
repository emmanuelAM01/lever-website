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
        primary: {
          DEFAULT: "#FF6F61", // Coral
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FF8C69", // Lighter Coral
          foreground: "#FFFFFF",
        },
      },
      keyframes: {
        "spin-3d-positive": {
          "0%": { transform: "rotate3d(1, 1, 0, 0deg)" },
          "100%": { transform: "rotate3d(1, 1, 0, 360deg)" },
        },
        "spin-3d-negative": {
          "0%": { transform: "rotate3d(-1, -1, 0, 0deg)" },
          "100%": { transform: "rotate3d(-1, -1, 0, 360deg)" },
        },
      },
      animation: {
        "spin-3d-positive": "spin-3d-positive 8s linear infinite",
        "spin-3d-negative": "spin-3d-negative 8s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
