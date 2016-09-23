const request = require('request');
const url = require('../../urls.js').userServer;

module.exports = {
  getUser(req, res) {
    request(`${url}/${req.params.username}`, (err, res, body) => err ?
      res.status(404).send(err)
      : res.status(200).send(data)
    );
  },
  checkAuth(req, res) {

  },
  createUser(req, res) {

  },
  editUser(req, res) {

  },
  deleteUser(req, res) {

  }
};
