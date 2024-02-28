/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      fontFamily: {
        sans: ["var(--font-circular)"],
      },
      letterSpacing: {
        tightest: "-.05em",
        tighter: "-.025em",
        tight: "0",
        normal: ".025em",
        wide: ".05em",
        wider: ".1em",
        widest: ".25em",
      },
      colors: {
        savory: {
          100: "#F2F3FF",
          200: "#CECFFD",
          300: "#989AF6",
          400: "#7478F0",
          500: "#7478F0",
          600: "#5C5FE2",
          700: "#4C4FDC",
          800: "#3E42D5",
          900: "#3334CC",
        },
        phlox: {
          100: "#EDCCFF",
          200: "#E3B2FF",
          300: "#DA99FF",
          400: "#D180FF",
          500: "#C866FF",
          600: "#BF4DFF",
          700: "#A32EE5",
          800: "#8A14CC",
          900: "#7200B2",
        },
        gold: {
          100: "#FAF0DC",
          200: "#FAE8C0",
          300: "#FADFA5",
          400: "#FAD789",
          500: "#FACE6E",
          600: "#DEB762",
          700: "#C2A056",
          800: "#A68949",
          900: "#8A723D",
        },
        "savory-superdark": "#171835",
        "savory-superdark-lighter": "#282948",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
