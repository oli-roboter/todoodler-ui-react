/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // inject styles into DON
          'css-loader', // transforms css into js
        ],
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    port: 9000,
  },
  plugins: [
    // creates the index.html in dist folder with script tag linked to correct hashed main.js file
    new HtmlWebPackPlugin({
      template: './src/template.html',
      filename: './index.html',
    }),
  ],
});
