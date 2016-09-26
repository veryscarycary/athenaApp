const mw = require('./config/middleware.js');
const app = mw.express;
const path = require('path');

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
  require('./resources/user/router.js'),
  app.static(`${__dirname}/../public`),
  require('./resources/ticket/router.js'),
  require('./resources/kb/router.js')
)
.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
