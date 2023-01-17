/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        open_sans: ['"Open Sans"', "sans-serif"],
      },
      colors: {
        "chal-Violet": "hsl(257, 40%, 49%)",
        "Soft-Magenta": "hsl(300, 69%, 71%)",
      },
      backgroundImage: {
        "hero-mobile": "url('../images/bg-mobile.svg')",
        "hero-desktop": "url('../images/bg-desktop.svg')",
      },
    },
  },
  plugins: [],
};
