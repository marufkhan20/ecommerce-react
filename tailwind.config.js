/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5CAF90",
        secondary: "#494f66",
        heading: "#4B5966",
        body: "#777",
        border: "#e5e7eb",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
