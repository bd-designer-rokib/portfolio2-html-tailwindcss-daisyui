/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Manrope", "sans-serif"],
        secondary: ["Montagu Slab", "serif"],
      },
      colors: {
        primary: "#E6AA32",
        secondary: "#1C1C21;",
        tertiary: "#797C86",
        quaternary: "#E6E6E6",
        quinary: "#E6E6E682",
        // rgba(230, 230, 230, 0.51)
        senary: "#FFFFFF26",
        // rgba(255, 255, 255, 0.15)
        septenary: "#AFB0B6",
        octonary: "#797C86",
        nonary: "#2F2F37",
        denary: "#F2F2F3",
      },
      backgroundImage: {
        "primary-lg":
          "linear-gradient(233deg, #17171A 72%, rgba(23, 23, 26, 0) 92.12%)",
        "secondary-lg":
          "linear-gradient(233deg, #0E0E10 27.06%, rgba(23, 23, 26, 0.23) 92.12%)",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
