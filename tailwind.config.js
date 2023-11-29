/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'Arial', 'sans-serif']
      },
      colors: {
        primary: '#2a9d8f',
        secondary: '#264653',
      }
    }
  },
  plugins: [],
}

