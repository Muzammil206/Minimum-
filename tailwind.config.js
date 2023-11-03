

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",

   "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

        'hero': "url('./assets/frames-for-your-heart-mR1CIDduGLc-unsplash.jpg'), linear-gradient(200deg, rgba(0, 0, 0, 0.00) 16.41%, rgba(0, 0, 0, 0.51) 77.16%) ",

        'footer-texture': "url('/img/footer-texture.png')",
  
       }
    },
  },
  plugins: [],
}

