'use strict'

const mw = require('../../config/middleware.js');
const request = mw.request;
const search = mw.urls.kbSearch;

module.exports = {
  search(req, res) {
    console.log('I was called');
    var query = {
      term:req.query.term,
      archived:req.query.archived,
      product:req.query.product,
      dateStart:req.query.dateStart,
      dateEnd:req.query.dateEnd,
      ticketId:req.query.ticketId,
    }
    request({
      method: 'GET',
      uri: `${search}/api/search?` +
            `term=${req.query.term}` +
            `&type=${req.query.type}` +
            `&archived=${req.query.archived}`+
            `${req.query.product ? '&product=${req.query.product}' : ''}`+
            `${req.query.dateStart ? '&dateStart=${req.query.dateStart}' : ''}`+
            `${req.query.dateEnd ? '&dateEnd=${req.query.dateEnd}' : ''}`+
            `${req.query.ticketId ? '&ticketId=${req.query.TicketId}' : ''}`
    }, (err, resp, body) => err ?
           res.status(err.statusCode).send(err)
           : res.status(resp.statusCode).send(JSON.parse(body))
         )
  },
};
