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
    request({
      method: 'GET',
      uri: `${kb}/api${id ? `/${req.params.id}` : ''}`
    }, (err, resp, body) => err ? 
      res.status(err.statusCode).send(err)
      : res.status(resp.statusCode).send(JSON.parse(body))
    );
  },
  createKb(req, res) {
    request({
      method: 'POST',
      uri: `${kb}/api`, 
      json: req.body
    }, (err, resp, body) => err ? 
      res.status(err.statusCode).send(err)
      : res.status(resp.statusCode).send(JSON.parse(body))
    );
  },
  editKb(req, res) {
    request({
      method: 'PUT', 
      uri:`${kb}/api/${req.params.id}`,
      json: req.body
    }, (err, resp, body) => err ? 
      res.status(err.statusCode).send(err)
      : res.status(resp.statusCode).send(JSON.parse(body))
    );
  },
  deleteKb(req, res) {
    request({
      method: 'DELETE',
      uri: `${kb}/api/${req.params.id}`
    }, (err, resp, body) => err ?
      res.status(err.statusCode).send(err)
      : res.status(resp.statusCode).send(JSON.parse(body))
    );
  }
};
