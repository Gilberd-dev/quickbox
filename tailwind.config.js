/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container : {
      center: true,
      padding: '16px',
    },
    extend: {
      screens: {
        '2xl' : '1320px'
      },
      colors :{
        primary : '#0245A3',
        two : '#8FBAF3',
        low : '#BDF1F6',
        flat : '#F2FCFC',
        dark : '#0f172a',
        secondary: '#64748b'

      }
    },
  },
  plugins: [],
}

