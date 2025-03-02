/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      PrimaryTitle:"#222831",
      PrimaryContent:"#393E46",
      PrimarySubcontent:"#009278",
      PrimaryBase:"#629584",
      PrimaryBg:"#EEEEEE",
      PrimaryHoverBg:"#8FC2B9",
      }
    },
  },
  plugins: [],
}

