var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var validate = require('webpack-validator');

const common = {
  entry: path.resolve(__dirname, 'client', 'index.js'),
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
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        loader: 'style!css!sass',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file',
        include: path.resolve(__dirname, 'client/images'),
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    root: path.resolve(__dirname, 'client'),
    extensions: [
      '',
      '.js',
      '.jsx',
      '.sass',
      '.css',
    ],
  },
};

var config;

switch(process.env.npm_lifecycle_event) {
  case 'start:dev':
    config = merge(common, {
      entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        path.resolve(__dirname, 'client', 'index.js'),
      ],
      plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
      ],
    });
    break;
  case 'start':
    config = merge(common, {});
    break;
  default:
    config = merge(common, {});
    break;
}

module.exports = validate(config);
