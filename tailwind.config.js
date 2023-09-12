/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },

    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#135225",
        dark_primary_1: "#5ba38b",
        bg_light_primary: "#F5F9FD",
        gray: "#4d473a",
      },
      backgroundImage: {
        primaryLinear:
          "linear-gradient(117deg, rgba(77,146,120,1) 18%, rgba(27,184,132,1) 84%)",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
      },
    },
  },
  plugins: [],
};
