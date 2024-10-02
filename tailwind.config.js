/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1D1D1D",
        textColor: "#191D23",
        textHover: "#09296A",
        titleColor: "#1A202C",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        body: ['"Open Sans"'],
        Jakarta: ["Plus Jakarta Sans", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Lexend: ["Lexend Deca", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
        Rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
