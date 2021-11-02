/* eslint-disable eslint-comments/disable-enable-pair, @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
const autoprefixer = require('autoprefixer');
const inlineSvg = require('postcss-inline-svg');
module.exports = {
  plugins: [
    autoprefixer({ grid: true }),
    inlineSvg,
  ],
};
