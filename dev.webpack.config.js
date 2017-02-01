// @flow
const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://127.0.0.1:8080',
    'webpack/hot/only-dev-server',
    './index.js',
  ],
  output: {
    path: resolve(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'static'),
    publicPath: '/',
    historyApiFallback: true,
    host: '127.0.0.1',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
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
  performance: {
    hints: false,
  },
};
