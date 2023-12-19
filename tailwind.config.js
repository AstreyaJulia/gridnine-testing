import colors from "tailwindcss/colors";

const brandColor = colors['blue'];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./public/index.html"],
  theme: {
    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
        "sans-serif",
      ],
    },
    extend: {
      colors: {
        brand: {
          50: brandColor["50"],
          100: brandColor["100"],
          200: brandColor["200"],
          300: brandColor["300"],
          400: brandColor["400"],
          500: brandColor["500"],
          600: brandColor["600"],
          700: brandColor["700"],
          800: brandColor["800"],
          900: brandColor["900"],
          950: brandColor["950"],
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

