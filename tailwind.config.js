/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#7209B7",
      secondary: "#F72585",
      accent: "#3A0CA3",
      highlight: "#4361EE",
      light: "#4CC9F0",
    },
  },
  plugins: [require("daisyui")],
};
