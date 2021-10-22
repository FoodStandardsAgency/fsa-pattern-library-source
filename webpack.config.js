const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
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
          "postcss-loader",
        ],
      },
      {
        issuer: /\.s[ac]ss$/i,
        test: /.*\.(gif|png|jpe?g|svg)(\?v=\d+\.\d+\.\d+)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: '[path][name].[ext]',
              context: 'src',
            },
          },
        ],
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)(\?v=\d+\.\d+\.\d+)?$/i,
        use: [
          {
            loader: 'file-loader',
            options: { regExp: '.*/src/(.*)', name: '[1]' }
          },
        ],
      },
      {
        test: /\.html\.twig$/,
        loader: 'file-loader',
        options: { regExp: '.*/src/(.*)', name: '[1]' },
      },
    ],
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/'),
    }
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

