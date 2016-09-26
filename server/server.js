const mw = require('./config/middleware.js');
const app = mw.express;

//middleware and routes
module.exports = app().use(
  require('morgan')('dev'),
  mw.bodyParser.json(),
  mw.bodyParser.urlencoded({extended: true}),
  // require('express-session')({
  //   secret: 'It\'s a SECRET', //https://www.youtube.com/watch?v=gMUEFZXkmDAw
  //   saveUninitialized: false,
  //   resave: true
  // }),
  app.static(`${__dirname}/../public`), 
  require('./resources/user/router.js'),
  require('./resources/ticket/router.js'),
  require('./resources/kb/router.js')
);

