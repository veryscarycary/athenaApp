const mw = require('./config/middleware.js');
const app = mw.express();
const express = mw.express;
const path = mw.path;
const proxy = require('proxy-middleware');
const webpack = require('webpack');
const config = require('../webpack.config.js');
const compiler = webpack(config);
const url = require('url');

var env = process.env.npm_lifecycle_event;
//middleware
app.use(
  mw.morgan('dev'),
  mw.bodyParser.json(),
  mw.bodyParser.urlencoded({extended: true}),
  mw.session({
    secret: 'It\'s a SECRET: bri6CMg5Te85s0790VhSVlf51T5yd086',
    saveUninitialized: false,
    resave: true,
    name: 'strix.sid',
    cookie: {secure:false}
  }),
  require('./resources/user/router.js'),
  require('./resources/ticket/router.js'),
  require('./resources/kb/router.js')
)

if (env === 'start:dev') {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    hot: true,
    publicPath: config.output.publicPath,
  }));
  app.use(require('webpack-hot-middleware')(compiler));
//} else {
//  app.use(express.static(path.join(__dirname, '../public/')));
}

app.get('/*', (req, res) => { //serve index for any route that isn't an api call
  return res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

module.exports = app;
