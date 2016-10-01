const mw = require('./config/middleware.js');
const app = mw.express;
const path = mw.path;

//middleware
module.exports = app().use(
  mw.morgan('dev'),
  mw.bodyParser.json(),
  mw.bodyParser.urlencoded({extended: true}),
  mw.session({
    secret: 'It\'s a SECRET: bri6CMg5Te85s0790VhSVlf51T5yd086',
    saveUninitialized: false,
    resave: true,
    name: 'strix.sid'
  }),
  app.static(path.join(__dirname, '../public')),
  (req,res,next) => {
    console.log('hi');
    req.session.user ? 
      res.redirect('/login')
      : next()},
  require('./resources/user/router.js'),
  require('./resources/ticket/router.js'),
  require('./resources/kb/router.js')
)
.get('/*', (req, res) => 
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
);