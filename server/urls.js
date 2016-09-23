const chalk = require('chalk'),
owl = chalk.cyan.bold,
books = chalk.red.bold,
floor = chalk.yellow;

module.exports = {
  defaultPort: 3000,
  userServer: 'localhost:3001', 
  ticketServer: 'localhost:3002',
  kbServer: 'localhost:3003',




  logo: owl('\n \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\') +
  owl('\n |||||||||||||||||||||||||||||') +
  owl('\n |   "||,,,,. "|" .,,,,||"      ') + books('_____') +
  owl('\n |    .d8888b.   .d8888b.      ') + books('|     |          _____') + 
  owl('\n\/|\\  o8\'  o \'8o o8\'o   \`8o     ') + books('|     | _______ |     |') +
  owl('\n|||  o8.    .8o o8.    .8o     ') + books('|     ||       ||     |') +
  owl('\n      \`Y8888P\'   \`Y8888P\'      ') + books('|     ||       ||     |') +
  owl('\n     ,||\'\'|| \\   \/ ||\'\'||,     ') + books('|  T  ||       ||  A  |') +
  owl('\n    ,||   ||, \\ \/ .||   ||,    ') + books('|  I  ||       ||  R  |') +
  owl('\n    ||     ||  \`  ||     ||    ') + books('|  C  ||   U   ||  T  |') +
  owl('\n   ,||     \'||   ||\'     ||,   ') + books('|  K  ||   S   ||  I  | _') +
  owl('\n   ||      \'||   ||\'      ||   ') + books('|  E  ||   E   ||  C  || \\') +
  owl('\n   ||       |;   ;|       ||   ') + books('|  T  ||   R   ||  L  ||  \'') +
  owl('\n   ||      ,|     |,      ||   ') + books('|  S  ||   S   ||  E  ||   \'') +
  owl('\n   ||,    ,||     ||,    ,||   ') + books('|     ||       ||  S  ||   |') +
  owl('\n    ||,  ,|||     |||,  ,||    ') + books('|     ||       ||     ||   |') +
  owl('\n    \'||,,||||,...,||||,,||     ') + books('|     ||       ||     ||___|_') +
  owl('\n      \`|||..."|||"...|||\'      ') + books('|_____||_______||_____||____|') +
  floor('\n|%%%%%%%%WWWW%%%%%%WWWW%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%|')
};