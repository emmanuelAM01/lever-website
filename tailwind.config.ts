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
          // You can add more colors if you want more variety in the gradients
          "accent-1": "#6B5B95", // Example additional color
          "accent-2": "#FFDDC1", // Example additional color
        },
  
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" }, // Start from the left
          "100%": { transform: "translateX(-50%)" }, // Move all the way left (half the container width)
        },
        "spin-arm": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-counterweight": {
          "0%": { transform: "translateX(0) rotate(0deg)" },
          "100%": { transform: "translateX(30px) rotate(360deg)" },
        },
        "wave": {
          "0%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
        "spin-arm": "spin-arm 4s linear infinite",
        "spin-counterweight": "spin-counterweight 6s linear infinite",
        "wave-animation": "wave 10s ease-in-out infinite", // Wave animation for background

      },
      container: {
        center: true, // Ensures container is always centered
        padding: {
          DEFAULT: "1rem", // Default padding for mobile
          sm: "2rem", // Padding for small screens and up
          lg: "4rem", // Padding for large screens and up
          xl: "6rem", // Padding for xlarge screens
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
