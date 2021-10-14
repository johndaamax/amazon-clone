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
      input: '0 0 3px 2px rgb(228 121 17 / 50%)',
      dropdownNormal: '0px 2px 5px rgb(15 17 17 / 15%)',
      dropdownFocus: '0 0 0 5px #B8ECF5'
    },
    extend: {
      backgroundImage: {
        'button-primary': 'linear-gradient(to bottom, #F7DFA5, #F0C14B)'
      },
      textColor: {
        success: '#007600',
        secondary: '#565959',
      },
      colors: {
        highlight: '#007185'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
