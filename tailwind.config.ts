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
        primary: "#FF6F61", // Coral (Rod)
        secondary: "#FF8C69", // Lighter Coral (Arm)
        tertiary: "#4DB6AC", // Teal (Counterweight)
      },
      keyframes: {
        "spin-arm": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-counterweight": {
          "0%": { transform: "translateX(0) rotate(0deg)" },
          "100%": { transform: "translateX(30px) rotate(360deg)" },
        },
      },
      animation: {
        "spin-arm": "spin-arm 4s linear infinite",
        "spin-counterweight": "spin-counterweight 6s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
