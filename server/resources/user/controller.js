const mw = require('../../config/middleware.js');
const request = mw.request;
const url = mw.urls.user;

let createSession = (req, res, user) =>
  req.session.regenerate(() => req.sessionStore.user = user);

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
      uri: `${url}/api/user/${req.params.username}/${req.params.password}`
    }, (err, resp, body) => err ?
      res.status(err.statusCode).send(err)
      : (() => {
          createSession(req, res, {
            username: req.params.username,
            password: req.params.password,
            _id: body
          });
          res.status(resp.statusCode).send(JSON.parse(body))
        })()
    );
  },
  createUser(req, res) {
    request({
      method: 'POST',
      uri:`${url}/api/user/${req.params.username}/${req.params.password}`,
      json: req.body
    }, (err, resp, body) => err ?
      res.status(err.statusCode).send(err)
      : res.status(resp.statusCode).send(body)
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
