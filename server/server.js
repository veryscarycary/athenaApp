const mw = require('./config/middleware.js');
const app = mw.express;
const path = require('path');

//middleware and routes
module.exports = app()
  .use(
    require('morgan')('dev'),
    mw.bodyParser.json(),
    mw.bodyParser.urlencoded({extended: true}),
    require('express-session')({
      secret: 'It\'s a SECRET: bri6CMg5Te85s0790VhSVlf51T5yd086', //https://www.youtube.com/watch?v=gMUEFZXkmDAw
      saveUninitialized: false,
      resave: true,
      name: 'strix.sid'
    }),
    require('./resources/user/router.js'),
    require('./resources/ticket/router.js'),
    require('./resources/kb/router.js'),
    app.static(`${__dirname}/../public`)
  )
  .get('/*', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));
