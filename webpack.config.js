const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DrupalTemplatePlugin = require('deeson-webpack-config-starter/drupal-templates-webpack-plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.html\.twig$/,
        loader: 'file-loader',
        options: { regExp: '.*/src/pattern-library/components/(.*)', name: '[1]' },
      },
    ],
  },
  mode: 'development',
  plugins: [
    new DrupalTemplatePlugin({ ignore: /.*pages.*/, srcPath: 'src' }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};

