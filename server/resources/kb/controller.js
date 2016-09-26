'use strict'
const mw = require('../../config/middleware.js');
const request = mw.request;
const kb = mw.urls.kb;

module.exports = {
  // searchKb(req, res) {
    //TODO: PENDING IMPLEMENTATION OF SEARCH SERVICE
  // },
  getKb(req, res) {
    let id = req.params.id;
    request.get(`${kb}/api${id ? `/${req.params.id}` : ''}`)
      .on('error', err => 
        res.status(err.statusCode).send(err)
      )
      .on('response', response => 
        response.on('data', data =>
          res.status(response.statusCode).send(JSON.stringify(JSON.parse(data)))
        )
      )
  },
  createKb(req, res) {
    request.post(`${kb}/api`)
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
  editKb(req, res) {    
    request.put(`${kb}/api/${req.params.id}`)
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
  deleteKb(req, res) {
    request.delete(`${kb}/api/${req.params.id}`)
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
