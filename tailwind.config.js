/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
        bebasNeue: ["Bebas Neue", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        blue: {
          70: "#2A66B0",
        },
      },
    },
  },
  plugins: [],
};
