/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ], theme: {
    extend: {
      fontFamily:{
        'Inter': ['Inter'],
        'Allura': ['Allura'],
        'Foldit': ['Foldit'],
        'Syne': ['Syne'],
        'Poppins': ['Poppins'],
        'Syncopate':['Syncopate']
        
      }
    },
  },
  plugins: [nextui()]
}

