const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssImport = require('postcss-import');
const purgecss = require('@fullhuman/postcss-purgecss');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    postcssImport,
    tailwindcss,
    ...(process.env.NODE_ENV === `production`
      ? [
          purgecss({
            content: ['./pages/**/*.js', './components/**/*.js'],
            defaultExtractor: content =>
              content.match(/[A-Za-z0-9-_:/]+/g) || [],
          }),
          autoprefixer,
          cssnano,
        ]
      : []),
  ],
};
