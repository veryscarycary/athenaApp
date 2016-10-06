var path = require('path');
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/**/*.js',
    ],
    preprocessors: {
      'client/**/*.js': ['webpack', 'sourcemap', 'coverage'],
      'test/**/*.js': ['webpack', 'sourcemap']
    },
    reporters: ['progress', 'coverage', 'nyan'],
    coverageReporter: {
      dir: 'public/reports/coverage',
      type: 'html',
    },
    nyanReporter: {
      suppressErrorReport: true,
      suppressErrorHighlighting: true,
      numberOfRainbowLines: 8,
      renderOnRunCompleteOnly: true,
    },
    webpackServer: {
      noInfo: true,
      quiet: true,
      stats: {
        colors: true,
        hash: false,
        version: false,
        timings: false,
        assets: false,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        errors: false,
        errorDetails: false,
        warnings: false,
        publicPath: false
      }
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.(scss|css)$/,
            loader: 'style!css!sass?sourceMap',
            exclude: /node_modules/,
          },
          {
            test: /\.(jpg|png)$/,
            loader: 'file',
            include: path.resolve(__dirname, 'client/images'),
            exclude: /node_modules/,
          },
          {
            test: /\.json$/,
            loader: 'json-loader',
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
      externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true,
      },
    },
    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-nyan-reporter',
      'karma-coverage',
    ],
    babelPreprocessor: {
      options: {
        presets: ['es2015','react','stage-0','airbnb'],
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
  })
}
