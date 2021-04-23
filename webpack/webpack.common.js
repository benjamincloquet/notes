// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { entry, output, template } = require('./paths');

module.exports = {
  entry,
  output: { path: output },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template })],
};
