const text = require('./loadText.js');
const chalk = require('chalk');
const url = require('./urls.js');

//set port to default port or POST variable provided by user
const port = process.argv[2] || require('./urls.js').defaultPort; 

//load art
console.log(text.art);

//set server to listen to port
require('./server.js').listen(port, () => 
  console.log(chalk.green.bold(`Athena App RESTful API listening on port ${port}.`)));