const text = require('./loadText.js');
const chalk = require('chalk');

const port = process.argv[2] || require('./urls.js').defaultPort; 

console.log(text.art);

require('./server.js').listen(port, () => 
  console.log(chalk.green.bold(`\nAthena App RESTful API listening on port ${port}.`)));