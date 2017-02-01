// @flow
const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './index.js',
  ],
  output: {
    path: resolve(__dirname, 'static'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ],
  context: resolve(__dirname, 'src'),
  resolve: {
    modules: [resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
