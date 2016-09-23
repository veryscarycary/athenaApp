const chalk = require('chalk');
const url = require('./urls.js');

const port = process.argv[2] || require('./urls').defaultPort; 

console.log(url.logo);

require('./server.js').listen(port, () => 
  console.log(chalk.green.bold(`\nAthena App RESTful API listening on port ${port}.`)));