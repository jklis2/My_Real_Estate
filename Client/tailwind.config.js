/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "bg-hero": "url('./assets/HeroImg.png')",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    fontWeight: {
      'thin': 100,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
    },
  },
  plugins: [],
};
