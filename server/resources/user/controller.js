const request = require('request');
const url = require('../../urls.js').user;

module.exports = {
  getUser(req, res) {
    request({
      method: 'GET',
      uri: `${url}/api/${req.params.username}`
    }, (err, response, body) => err ?
      res.status(404).send(err)
      : res.status(200).send(body)
    );
  },
  signin(req, res) {
    request(`${url}/api/${req.params.username}`, (err, response, body) => err ?
      res.status(404).send(err)
      : res.status(200).send(body)
    );
  },
  createUser(req, res) {
    request({
        method: 'POST', 
        uri: `${url}/api/${req.params.username}`
      }, (err, response, body) => err ?
        res.status(404).send(err)
        : res.status(200).send(body)
    );
  },
  editUser(req, res) {
    request(`${url}/api/${req.params.username}`, (err, response, body) => err ?
      res.status(404).send(err)
      : res.status(200).send(body)
    );
  },
  deleteUser(req, res) {
    request(`${url}/api/${req.params.username}`, (err, response, body) => err ?
      res.status(404).send(err)
      : res.status(200).send(body)
    );
  }
};
