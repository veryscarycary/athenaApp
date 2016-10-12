'use strict'
const mw = require('../../config/middleware.js');
const request = mw.request;
const kb = mw.urls.kb;

module.exports = {
  getArticle(req, res) {
    let id = req.params.id;
    request({
      method: 'GET',
      uri: `${kb}/api${id ? `/${req.params.id}` : ''}`
    }, (err, resp, body) => sendRes(res, err, resp, JSON.parse(body)));
  },
  createArticle(req, res) {
    request({
      method: 'POST',
      uri: `${kb}/api`,
      json: req.body
    }, (err, resp, body) => sendRes(res, err, resp, body));
  },
  editArticle(req, res) {
    request({
      method: 'PUT',
      uri: `${kb}/api/${req.params.id}`,
      json: req.body
    }, (err, resp, body) => sendRes(res, err, resp, body));
  },
  deleteArticle(req, res) {
    request({
      method: 'DELETE',
      uri: `${kb}/api/${req.params.id}`
    }, (err, resp, body) => sendRes(res, err, resp, body));
  },
  getArticleRelations(req, res) {
    request({
      method: 'GET',
      uri: `${kb}/metrics`
    }, (err, resp, body) => sendRes(res, err, resp, JSON.parse(body)));
  }
};

function sendRes(res, err, resp, body) {
  if(Array.isArray(body))
    body.forEach(article => {
      if(Array.isArray(article.relatedTickets) && article.relatedTickets.length > 0)
      article.relatedTickets = article.relatedTickets.map(ticket => ticket.ticketId);
    });
  return err ?
    res.status(err.statusCode).send(err)
    : res.status(resp.statusCode).send(body);
}