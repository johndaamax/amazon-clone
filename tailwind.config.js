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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
