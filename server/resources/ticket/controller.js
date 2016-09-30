'use strict'
const mw = require('../../config/middleware.js');
const request = mw.request;
const ticket = mw.urls.ticket;

module.exports = {
  // searchTicket(req, res) {
    //TODO: PENDING IMPLEMENTATION OF SEARCH SERVICE
  // },
  getTicket(req, res) {
    let id = req.params.id;
    request({
      method: 'GET',
      uri: `${ticket}/api${id ? `/${req.params.id}` : ''}`
    }, (err, resp, body) => err ?
      res.status(err.statusCode).send(err)
      : res.status(resp.statusCode).send(JSON.parse(body))
      );
  },
  createTicket(req, res) {
    request({
      method: 'POST',
      uri: `${ticket}/api`,
      json: req.body
    }, (err, resp, body) => err ?
      res.status(err.statusCode).send(err)
      : res.status(resp.statusCode).send(JSON.parse(body))
    );
  },
  editTicket(req, res) {    
    request({
      uri: `${ticket}/api/${req.params.id}`,
      json: req.body
    }, (err, resp, body) => err ?
      res.status(err.statusCode).send(err)
      : res.status(resp.statusCode).send(JSON.parse(body))
    );
  },
  deleteTicket(req, res) {
    request({
      method: 'DELETE',
      uri: `${ticket}/api/${req.params.id}`
    }, (err, resp, body) => err ?
      res.status(err.statusCode).send(err)
      : res.status(resp.statusCode).send(JSON.parse(body))
    );
  }
};
