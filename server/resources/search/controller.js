'use strict'

const mw = require('../../config/middleware.js');
const request = mw.request;
const search = mw.urls.kbSearch;

module.exports = {
  search(req, res) {
    var query = {
      term:req.query.term,
      archived:req.query.archived,
      dateStart:req.query.dateStart,
      dateEnd:req.query.dateEnd,
    }
    request({
      method: 'GET',
      uri: `${search}/api/search?` +
            `term=${req.query.term}` +
            `&type=${req.query.type}` +
            `&archived=${req.query.archived}`+
            `${req.query.dateStart ? '&dateStart=${req.query.dateStart}' : ''}`+
            `${req.query.dateEnd ? '&dateEnd=${req.query.dateEnd}' : ''}`
    }, (err, resp, body) => err ?
           res.status(err.statusCode).send(err)
           : res.status(resp.statusCode).send(JSON.parse(body))
         )
  },
};
