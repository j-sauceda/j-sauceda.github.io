/** @type {import('tailwindcss').Config} */

import forms from "@tailwindcss/forms";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [forms],
};
