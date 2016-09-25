const chalk = require('./middleware.js').chalk,
owl = chalk.cyan.bold,
books = chalk.red.bold,
floor = chalk.green, 
hat = chalk.magenta,
txt = chalk.bold,
eye = chalk.white.bold,
pupil = chalk.blue.bold,
beak = chalk.yellow.bold,
feet = chalk.yellow, 
tassel = chalk.magenta.bold;

module.exports = {
  art:
  hat('\n\n\n \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\') +
  tassel('\n |') + hat('||||||||||||||||||||||||||||') +
  tassel('\n |') + hat('   "||') + owl(',,,,.') + hat(' "|" ') + owl('.,,,,') + hat('||"      ') + books('_____') +
  tassel('\n |') + eye('    .d8888b.   .d8888b.      ') + books('|     |          _____') + 
  tassel('\n\/|\\') + eye('  o8\'  ') + pupil('o') + eye(' \'8o o8\'') + pupil('o') + eye('   \`8o     ') + books('|     | _______ |     |') +
  tassel('\n|||') + eye('  o8.    .8o o8.    .8o     ') + books('|     ||       ||     |') +
  eye('\n      \`Y8888P\'   \`Y8888P\'      ') + books('|     ||       ||     |') +
  owl('\n     ,||\'\'|| ') + beak('\\   \/') + owl(' ||\'\'||,     ') + books('|  T  ||       ||  A  |') +
  owl('\n    ,||   ||, ') + beak('\\ \/') + owl(' .||   ||,    ') + books('|  I  ||       ||  R  |') +
  owl('\n    ||     ||  ') + beak('\`') + owl('  ||     ||    ') + books('|  C  ||   U   ||  T  |') +
  owl('\n   ,||     \'||   ||\'     ||,   ') + books('|  K  ||   S   ||  I  | _') +
  owl('\n   ||      \'||   ||\'      ||   ') + books('|  E  ||   E   ||  C  || \\') +
  owl('\n   ||       |;   ;|       ||   ') + books('|  T  ||   R   ||  L  ||  \'') +
  owl('\n   ||      ,|     |,      ||   ') + books('|  S  ||   S   ||  E  ||   \'') +
  owl('\n   ||,    ,||     ||,    ,||   ') + books('|     ||       ||  S  ||   |') +
  owl('\n    ||,  ,|||     |||,  ,||    ') + books('|     ||       ||     ||   |') +
  owl('\n    \'||,,||||,...,||||,,||     ') + books('|     ||       ||     ||___|_') +
  owl('\n      \`|||') + feet('...') + owl('"|||"') + feet('...') + owl('|||\'      ') + books('|_____||_______||_____||_____|') +
  floor('\n|%%%%%%%%%') + feet('WWWW') + floor('%%%') + feet('WWWW') + floor('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%|') +
  txt('\n   ___________________ ______________ _______      _____   ' +
    '\n  \/  _  \\__    ___\/   |   \\_   _____\/ \\      \\    \/  _  \\  ' +
    '\n \/  \/_\\  \\|    | \/    ~    \\    __)_  \/   |   \\  \/  \/_\\  \\ ' +
    '\n\/    |    \\    | \\    Y    \/        \\\/    |    \\\/    |    \\' +
    '\n\\____|__  \/____|  \\___|_  \/_______  \/\\____|__  \/\\____|__  \/' +
    '\n        \\\/              \\\/        \\\/         \\\/         \\\/ ' +
    '\n-------------------Smart Support Platform-------------------')
}
