/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1D1D1D",
        textColor: "#191D23",
      },
    },
  },
  plugins: [],
};
