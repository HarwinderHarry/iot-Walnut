/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      textColor: ['active'],
    },
    
  },
  plugins: [require("daisyui")],
};
