/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FFFFFF",
          "secondary": "#000000",
          "accent": "#024E82",
          "neutral": "#3d4451",
          "base-100": "#FFFFFF",
        },
      },
      // "dark",
      // "cupcake",
    ],
  },
  theme: {

    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

