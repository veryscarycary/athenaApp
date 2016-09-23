const chalk = require('chalk');

const port = process.argv[2] || require('urls').appPort; 

require('./server.js').listen(port, () => 
  console.log(chalk.green.bold(`\nApp server listening on ${port}.`)));