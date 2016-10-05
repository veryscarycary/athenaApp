var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.resolve(__dirname, 'client', 'index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: 'node_modules',
      },
      {
        test: /\.(scss|css)$/,
        loader: 'style!css!sass?sourceMap',
        exclude: 'node_modules',
      }
    ]
  },
  resolve: {
    root: path.resolve(__dirname, 'client'),
    moduleDirectories: [
      'node_modules',
      'client',
    ],
    extensions: [
      '',
      '.js',
      '.jsx',
      '.sass',
      '.css',
    ],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
