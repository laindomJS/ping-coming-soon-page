module.exports = {
  content: ["./public/**/*.{html, js}"], 
  theme: {
    screens: {
      'sm': {'max':'375px'}
    },
    extend: {
      colors: {
        'blue-primary': 'hsl(223, 87%, 63%)',
        'pale-blue': 'hsl(223, 100%, 88%)',
        'light-red': 'hsl(354, 100%, 66%)',
        'gray-color': 'hsl(0, 0%, 59%)',
        'very-dark-blue': 'hsl(209, 33%, 12%)'
      }
    },
  },
  plugins: [],
}
