import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neonGreen: "#39FF14",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      textShadow: {
        neon: "0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 20px #39FF14",
      },
      keyframes: {
        morphLight: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
        morphVideo: {
          "0%, 100%": { borderRadius: "30% 70% 60% 40% / 70% 40% 60% 30%" },
          "50%": { borderRadius: "70% 40% 30% 60% / 30% 60% 50% 60%" },
        },
        morphSound: {
          "0%, 100%": { borderRadius: "70% 40% 30% 60% / 30% 60% 50% 60%" },
          "50%": { borderRadius: "30% 70% 60% 40% / 70% 40% 60% 30%" },
        },
        morphBlinds: {
          "0%, 100%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
          "50%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
        },
      },
      animation: {
        morphLight: "morphLight 8s ease-in-out infinite",
        morphVideo: "morphVideo 8s ease-in-out infinite",
        morphSound: "morphSound 8s ease-in-out infinite",
        morphBlinds: "morphBlinds 8s ease-in-out infinite",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
