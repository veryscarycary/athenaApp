const mw = require('../../config/middleware.js');
const request = mw.request
const url = mw.urls.user;

module.exports = {
  getUser(req, res) {
    let id = req.params.id;
    request({
      method: 'GET',
      uri: `${url}/api/user${id ? `/${req.params.id}` : ''}`
    }, (err, resp, body) => err ?
      res.status(err.statusCode).send(err)
      : res.status(resp.statusCode).send(JSON.parse(body))
    );
  },
  signin(req, res) {
    request({
      method: 'GET',
      uri: `${url}/api/user/${req.params.username}/${req.params.username}`
    }, (err, resp, body) => err ?
      res.status(err.statusCode).send(err)
      : res.status(resp.statusCode).send(JSON.parse(body))
    );
  },
  createUser(req, res) {
    request({
      method: 'POST',
      uri:`${url}/api/user/${req.params.username}/${req.params.username}`,
      json: req.body
    }, (err, resp, body) => err ?
      res.status(err.statusCode).send(err)
      : res.status(resp.statusCode).send(JSON.parse(body))
    );
  },
  editUser(req, res) {
    request({
      method: 'PUT',
      uri: `${url}/api/user/${req.params.username}/${req.params.username}`,
      json: req.body
    }, (err, resp, body) => err ? 
      res.status(err.statusCode).send(err)
      : res.status(resp.statusCode).send(JSON.parse(body))
    );
  },
  deleteUser(req, res) {
    request({
      method: 'DELETE',
      uri: `${url}/api/user/${req.params.username}/${req.params.username}`
    }, (err, resp, body) => err ? 
      res.status(err.statusCode).send(err)
      : res.status(resp.statusCode).send(JSON.parse(body))
    );
  }
};
