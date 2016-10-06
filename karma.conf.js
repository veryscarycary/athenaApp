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
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
          },
          {
            test: /\.json$/,
            loader: 'json-loader',
          }
        ],
      },
      externals: {
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
        presets: ['airbnb'],
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
