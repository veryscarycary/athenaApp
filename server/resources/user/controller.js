const mw = require('../../config/middleware.js');
const request = mw.request
const url = mw.urls.user;

module.exports = {
  getUser(req, res) {
    let id = req.params.id;
    request.get(`${url}/api/user${id ? `/${req.params.id}` : ''}`)
      .on('error', err => res.status(err.statusCode).send(err))
      .on('response', resp => resp.on('data', data =>
        res.status(resp.statusCode).send(JSON.stringify(JSON.parse(data)))
      ));
  },
  signin(req, res) {
    request.get(`${url}/api/user/${req.params.username}/${req.params.username}`)
      .on('error', err => res.status(err.statusCode).send(err))
      .on('response', resp => resp.on('data', data =>
        res.status(resp.statusCode).send(JSON.stringify(JSON.parse(data)))
      ));
  },
  createUser(req, res) {
    request.post(`${url}/api/user/${req.params.username}/${req.params.username}`)
      .form(req.body)
      .on('error', err => res.status(err.statusCode).send(err))
      .on('response', resp => resp.on('data', data =>
        res.status(resp.statusCode).send(JSON.stringify(JSON.parse(data)))
      ));
  },
  editUser(req, res) {
    request.put(`${url}/api/user/${req.params.username}/${req.params.username}`)
      .form(req.body)
      .on('error', err => res.status(err.statusCode).send(err))
      .on('response', resp => resp.on('data', data =>
        res.status(resp.statusCode).send(JSON.stringify(JSON.parse(data)))
      ));
  },
  deleteUser(req, res) {
    request.delete(`${url}/api/user/${req.params.username}/${req.params.username}`)
      .on('error', err => res.status(err.statusCode).send(err))
      .on('response', resp => resp.on('data', data =>
        res.status(resp.statusCode).send(JSON.stringify(JSON.parse(data)))
      ));
  }
};
