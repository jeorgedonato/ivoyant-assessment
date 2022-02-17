const { fontFamily } = require( 'tailwindcss/defaultTheme' )

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
            'Lato',
            ...fontFamily.sans
        ]
      }
    },
    container: {
      center: true,
      padding: '1rem',
  },
  },
  variants: {},
  plugins: [],
}
