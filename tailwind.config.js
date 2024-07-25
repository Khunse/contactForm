/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    // colors: {
    //   'root-color' : 'hsl(148, 38%, 91%)',
    //   'panel-color' : 'hsl(0, 0%, 100%)'
    // },
    extend: {
      fontFamily: {
        mycusBoldFon: ["boldfont"],
        mycusRegFon: ["regularhahafont"]
      },
      colors:{
        'root-color' : 'hsl(148, 38%, 91%)',
      'panel-color' : 'hsl(0, 0%, 100%)',
      '--redcolor' : 'blue'
      }
    },
  },
  plugins: [
    function({addBase, theme}) {
      addBase({
        ':root' : theme('colors')
      });
    }
  ],
}

