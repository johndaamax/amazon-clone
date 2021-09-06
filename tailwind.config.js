module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/*.{js,jsx,ts,tsx,vue}',
    './src/components/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
