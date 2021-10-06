module.exports = {
  mode: 'jit',
  purge: {
    content: ['../raysoda/src/web/pug/**/*.{pug}'],
    // extractors: [
    //   {
    //     extractor: require('purgecss-from-pug'),
    //     extensions: ['pug']
    //   }
    // ]
  },
  darkMode: false, // or 'media' or 'class'
  separator: '_', // for pug
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
