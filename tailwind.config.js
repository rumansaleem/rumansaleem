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
      width: {
        ...(theme => theme('screens')),
        a4: '210mm'
      },
      minWidth: {
        '80': '20rem',
        ...(theme => theme('screens')),
      },
      maxWidth: {
        a4: '210mm',
      },
      screens: {
        'print': {raw: 'print'}
      }
    }
  },
  variants: {},
  plugins: []
}
