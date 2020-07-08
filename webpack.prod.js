/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  // devtool: 'inline-source-map',
  output: {
    filename: 'main.[contentHash].js', // for cash busting
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()], // overides the js minification
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Extracts css into files
          'css-loader', // transforms css into js
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // cleans dist folder on rebuild
    new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }), // extract css file into its own file
    new HtmlWebPackPlugin({
      // creates the index.html in dist folder with script tag linked to correct hashed main.js file
      template: './src/template.html',
      filename: './index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseBooleanAttributes: true,
        removeComments: true,
      },
    }),
  ],
});
