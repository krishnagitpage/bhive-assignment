/** @type {import('tailwindcss').Config} */
const fontSize = {
  h1: 3.625,
  h2: 2.25,
  h3: 1.5,
  h4: 1.25,
  h5: 1.125,
  h6: 1.0,
};

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        logo_primary_1: "#000000",
        logo_primary_2: "#FFBB00",

        primary: "#FFCF4B",
        primary_stroke: "#FFC422",

        text_primary: "#263238",

        secondary: "#F9F9F9",
        secondary_stroke: "#CEC6C6",

        text_secondary: "#65624C",

        text_color: "#263238",
        text_secondary_color: "#65624C",

        grey_1: "#333333",
        grey_2: "#4F4F4F",
        grey_3: "#828282",
        grey_4: "#B7B6B8",
        grey_5: "#E0E0E0",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        h1: [
          fontSize.h1 + "rem",
          {
            lineHeight: fontSize.h1 * 1.1 + "rem",
            fontWeight: "700",
          },
        ],
        h2: [
          fontSize.h2 + "rem",
          {
            lineHeight: fontSize.h2 * 1.1 + "rem",
            fontWeight: "700",
          },
        ],
        h3: [
          fontSize.h3 + "rem",
          {
            lineHeight: fontSize.h3 * 1.1 + "rem",
            fontWeight: "700",
          },
        ],
        h4: [
          fontSize.h4 + "rem",
          {
            lineHeight: fontSize.h4 * 1.1 + "rem",
            fontWeight: "700",
          },
        ],
        h5: [
          fontSize.h5 + "rem",
          {
            lineHeight: fontSize.h5 * 1.1 + "rem",
            fontWeight: "700",
          },
        ],
        h6: [
          fontSize.h6 + "rem",
          {
            lineHeight: fontSize.h6 * 1.1 + "rem",
            fontWeight: "600",
          },
        ],
      },
    },
  },
  plugins: [],
};
