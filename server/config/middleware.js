module.exports = {
  express: require('express'),
  session: require('express-session'),
  router: require('express').Router,
  bodyParser: require('body-parser'),
  chalk: require('chalk'),
  urls: require('./urls.js'),
  request: require('request')
}