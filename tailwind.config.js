/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      updock: ['updock', 'cursive'],
      dancing: ['Dancing Script', 'cursive'],
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        intro_image: 'url(../assets/intro.jpg)'
      },
      colors: {
        primary: '#03595a',
        second: '#fff',
        danger: 'crimson',
        success: 'green',
        dark: 'rgba(0,0,0,0.5)',
        light: 'rgba(255, 255, 255, 0.5'
      }
    }
  },
  plugins: []
}
