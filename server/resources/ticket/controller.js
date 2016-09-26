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
    request.get(`${ticket}/api${id ? `/${req.params.id}` : ''}`)
      .on('error', err => 
        res.status(err.statusCode).send(err)
      )
      .on('response', response => 
        response.on('data', data =>
          res.status(response.statusCode).send(JSON.stringify(JSON.parse(data)))
        )
      )
  },
  createTicket(req, res) {
    request.post(`${ticket}/api`)
      .form(req.body)
      .on('error', err => 
        res.status(err.statusCode).send(err)
      )
      .on('response', response => 
        response.on('data', data =>
          res.status(response.statusCode).send(JSON.stringify(JSON.parse(data)))
        )
      )
  },
  editTicket(req, res) {    
    request.put(`${ticket}/api/${req.params.id}`)
      .form(req.body)
      .on('error', err => 
        res.status(err.statusCode).send(err)
      )
      .on('response', response => 
        response.on('data', data =>
          res.status(response.statusCode).send(JSON.stringify(JSON.parse(data)))
        )
      );
  },
  deleteTicket(req, res) {
    request.delete(`${ticket}/api/${req.params.id}`)
      .on('error', err => 
        res.status(err.statusCode).send(err)
      )
      .on('response', response => 
        response.on('data', data =>
          res.status(response.statusCode).send(JSON.stringify(JSON.parse(data)))
        )
      )
  }
};
