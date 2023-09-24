/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        primaryOne: "#7f90fe",
        primaryTwo: "#9873ff",
        secondaryOne: "#f9f8ff",
      },
    },
  },
  plugins: [require("daisyui")],
};
