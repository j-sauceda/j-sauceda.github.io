/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayBlue: "hsl(227, 12%, 61%)",
        lightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
