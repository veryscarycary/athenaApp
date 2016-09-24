const text = require('./loadText.js');
const chalk = require('chalk');
const urls = require('./urls.js');
const request = require('request');
//set port to default port or POST variable provided by user
const port = process.argv[2] || require('./urls.js').default;

//load art
console.log(text.art);

[
  ['KBs', urls.kb],
  ['Tickets', urls.ticket],
  ['Users', urls.user]
].forEach((host) => {
    var start = Date.now();
    request({
        method: 'GET',
        uri: host[1]
      }, err => console.log(
        `${host[0]} Server is ${err ?
            chalk.red.bold('offline')
            : `${chalk.green.bold('online')}: responded in ${
                (() => {
                  var diff = Date.now() - start + '';
                  return diff < 5000 ?
                    diff < 500 ?
                      chalk.green.bold(diff)
                      : chalk.yellow.bold(diff)
                    : chalk.red.bold(diff)
                })()} milliseconds`
              }.`)
    )
});

//set server to listen to port
require('./server.js').listen(port, () =>
  console.log(chalk.green.bold(`Athena App RESTful API listening on port ${port}.`)));
