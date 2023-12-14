/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        unlimitedpie: ['Unlimited Pie']
      },
      colors: {
        primary: '#F54284',
        secondary: '#4B4DA5',
        third: '#8CAEFF'
      },
    },
  },
  plugins: [],
}

