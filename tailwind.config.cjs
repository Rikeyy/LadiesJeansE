/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'login' : "url('../LJE/src/assets/Fluid-10s-1920px.jpg')",
        'signup': "url('../LJE/src/assets/undraw_fill_form_re_cwyf.svg)"
      },
      dropShadow:{
        'ehek' : '0px 0px 8px rgba(0, 0, 0, 0.015),0px 0px 14.4px rgba(0, 0, 0, 0.032), 0px 0px 20.6px rgba(0, 0, 0, 0.052),0px 0px 32px rgba(0, 0, 0, 0.079),0px 0px 76px rgba(0, 0, 0, 0.13)'
      }

    },
  },
  plugins: [],
}