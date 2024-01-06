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
          100: "#DCDDFA",
          200: "#C0C2FA",
          300: "#A5A7FA",
          400: "#A5A7FA",
          500: "#6E71FA",
          600: "#6164DD",
          700: "#5557C1",
          800: "#484AA5",
          900: "#3D3E8B",
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
