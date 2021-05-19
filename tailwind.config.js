module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      regular: ['oslo-sans-regular'],
      bold: ['oslo-sans-bold']
    },
    colors: {
      blue: '#CEECF7',
      yellow: '#EAC46A',
      green: '#B9D19C',
      choral: '#E18072',
      white: '#fff',
      black: '#000'
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    inset: {
      '1/10': '10%',
      '1/6': '16.6%',
      '1/5': '20%',
      '1/4': '25%',
      '1/3': '33.3%',
      '1/2': '50%',
      '3/5': '60%',
      '2/3': '66.6%',
      '3/4': '75%',
      '4/5': '80%'
    },
    extend: {
      width: {
        'mobile': '375px',
        'tablet': '50%',
      },
      height: {
        100: '100vh'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
