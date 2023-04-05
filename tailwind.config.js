/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grad:"linear-gradient(270deg, #FD5D2D 0%, #FFE08F 22.96%, #FFC83F 41.19%, #22EEB1 69.32%, #BFFFE8 85.46%, #916FD0 100%)"
    },
    fontFamily: {
      'sans': ["Space Grotesk", "sans-serif"],
    },
  },
},
  plugins: [],

  screens: {
    'xsm': '320px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
}
