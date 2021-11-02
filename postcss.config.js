/* eslint-disable eslint-comments/disable-enable-pair, @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
const autoprefixer = require('autoprefixer');
const inlineSvg = require('postcss-inline-svg');
const focusWithinPolyfill = require('postcss-focus-within');
module.exports = {
  plugins: [
    focusWithinPolyfill,
    autoprefixer({ grid: true }),
    inlineSvg,
  ],
};
