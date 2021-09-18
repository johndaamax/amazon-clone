module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/*.{js,jsx,ts,tsx,vue}',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['"Amazon Ember Display"', 'Arial', 'sans-serif'],
      'body': ['"Amazon Ember"', 'Arial', 'sans-serif']
    },
    boxShadow: {
      input: '0 0 3px 2px rgb(228 121 17 / 50%)'
    },
    extend: {
      backgroundImage: {
        'button-primary': 'linear-gradient(to bottom, #F7DFA5, #F0C14B)'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
