// eslint-disable-next-line import/no-extraneous-dependencies
const Dotenv = require('dotenv-webpack');
const path = require('path');
// const config = require('./src/config');
require('dotenv').config();
console.log(process.env.AUTH_BACKEND);
console.log(process.env.TODOODLER_BACKEND);
console.log(path.resolve(__dirname, './.env'));
// console.log(config.AUTH, config.TODO);

module.exports = {
  entry: './src/index.js',
  resolve: { extensions: ['.js', '.jsx'] },
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: [
          'html-loader',
        ],
      },
      {
        test: /\.(png|gif|jpeg|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'images',
          },
        },
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, './.env'),
      systemvars: true,
    }),
  ],
};
