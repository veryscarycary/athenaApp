'use strict'

const mw = require('../../config/middleware.js');
const request = mw.request;
const search = mw.urls.kbSearch;

module.exports = {
  search(req, res) {
    var uri = `${search}/api/search?` +
              `term=${req.query.term}` +
              `&type=${req.query.type}` +
              `${req.query.dateStart ? '&dateStart=${req.query.dateStart}' : ''}`+
              `${req.query.dateEnd ? '&dateEnd=${req.query.dateEnd}' : ''}`;
    if (req.query.type === 'kb') {
      uri += `&archived=${req.query.archived}`;
    }
    request({
      method: 'GET',
      uri: uri,
    }, (err, resp, body) => err ?
           res.status(err.statusCode).send(err)
           : res.status(resp.statusCode).send(JSON.parse(body))
         )
  },
};
