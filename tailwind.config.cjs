/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '5xl':'20px 20px 50px rgba(0,0,0,0.5)',
      },
      fontFamily : {
        'poppins': ['Poppins','sans-serif']
      }
    },
  },
  plugins: [],
};
