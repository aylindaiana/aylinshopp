/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c98ca3",
        primarySoft: "#f3c1cc",
        primaryLight: "#e6b7c1",
        gold: "#C6A75E",
        darkText: "#2a2a2a",
      },
      fontFamily: {
        logo: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};