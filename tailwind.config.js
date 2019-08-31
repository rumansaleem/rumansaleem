module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'Droid Sans', 'sans-serif'],
        content: ['Muli', 'sans-serif'],
        mono: ['Fira Mono', 'monospace']
      },
      fontWeight: {
        medium: 500,
      },
      height: {
        current: '1em',
      },
      maxHeight: {
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      minWidth: {
        '80': '20rem',
      },
      screens: {
        'print': {raw: 'print'}
      }
    }
  },
  variants: {},
  plugins: []
}
