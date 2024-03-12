/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "bg-hero": "url('./assets/HeroImg.png')",
      "bg-imgOne": "url('./assets/Gallery1.png')",
      "bg-imgSecond": "url('./assets/Gallery2.png')",
      "bg-imgThird": "url('./assets/Gallery3.png')",
      boxShadow: {
        full: "0 0 60px -15px rgba(0, 0, 0, 0.3)",
      },
      height: {
        128: "32rem",
      },
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    fontWeight: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },
  plugins: [],
};
