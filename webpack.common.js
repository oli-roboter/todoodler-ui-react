// eslint-disable-next-line import/no-extraneous-dependencies
const Dotenv = require('dotenv-webpack');
// require('dotenv').config();

module.exports = {
  entry: './src/index.jsx',
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
      path: './.env',
    }),
  ],
};
