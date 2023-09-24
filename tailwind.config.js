/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Manrope"],
      },
      colors: {
        primaryOne: "#7f90fe",
        primaryTwo: "#9873ff",
        secondaryOne: "#f4f1ff",
      },
    },
  },
  plugins: [require("daisyui")],
};
