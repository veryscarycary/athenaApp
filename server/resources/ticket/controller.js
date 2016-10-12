'use strict'
const mw = require('../../config/middleware.js');
const request = mw.request;
const ticket = mw.urls.ticket;

module.exports = {
  getTicket(req, res) {
    let id = req.params.id;
    request({
      method: 'GET',
      uri: `${ticket}/api${id ? `/${req.params.id}` : ''}`
    }, (err, resp, body) => sendRes(res, err, resp, JSON.parse(body)));
  },
  createTicket(req, res) {
    request({
      method: 'POST',
      uri: `${ticket}/api`,
      json: req.body
    }, (err, resp, body) => sendRes(res, err, resp, body));
  },
  editTicket(req, res) {
    request({
      method: 'PUT',
      uri: `${ticket}/api/${req.params.id}`,
      json: req.body
    }, (err, resp, body) => sendRes(res, err, resp, body));
  },
  deleteTicket(req, res) {
    request({
      method: 'DELETE',
      uri: `${ticket}/api/${req.params.id}`
    }, (err, resp, body) => sendRes(res, err, resp, body));
  },
  getTicketRelations(req, res) {
    request({
      method: 'GET',
      uri: `${ticket}/metrics`
    }, (err, resp, body) => sendRes(res, err, resp, body));
  }
};

function sendRes(res, err, resp, body) {
  if(Array.isArray(body))
    body.forEach(ticket => {
      if(Array.isArray(ticket.relatedArticles) && ticket.relatedArticles.length > 0)
      ticket.relatedArticles = ticket.relatedArticles.map(article => article.articleId);
    });
  return err ?
    res.status(err.statusCode).send(err)
    : res.status(resp.statusCode).send(body);
}
