/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7000FE",
        secondary: "#494f66",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
