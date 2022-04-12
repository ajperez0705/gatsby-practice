// This is used to overwrite fonts with custom
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    colors: {
      primary: "#FE6804",
      primaryVariant: "#FB893D",
      primaryVariantTransparent: "rgba(251, 137, 61, .2)",
      secondary: "#FFE167",
      secondaryVariant: "#FFF1BA",
      baseBg: "#FFFCF7",
      baseBgAlt: "#FFFFFF",
      text: "#05070B",
      textAlt: "#F9F9F9",
      accentText: "#727375",
    },

    // fontSize: {
    //   h1: "60px",
    //   h2: "48px",
    //   h3: "40px",
    //   h4: "32px",
    //   h5: "28px",
    //   h6: "24px",
    //   subHeader: "24px",
    //   body: "20px",
    //   button: "24px ",
    //   navLink: "24px",
    // },
    extend: {
      // colors: {
      //   primary: "#FE6804",
      // },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
