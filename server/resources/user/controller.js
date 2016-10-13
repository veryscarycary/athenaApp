const mw = require('../../config/middleware.js');
const request = mw.request;
const url = mw.urls.user;

var createSession = (req, user, cb) =>
  req.session.regenerate(() => {
    req.session.user = user;
    cb && cb();
  });

function destroySession(req, cb) {
  req.session && req.session.destroy(() => cb && cb());
}

module.exports = {
  checkSession(req, res) {
    !req.session ?
      res.status(404).send("session not found")
      : !req.session.hasOwnProperty('user') ?
          res.status(401).send("session is not logged in")
          : res.status(200).send(req.session.user);
  },
  getUser(req, res) {
    var id = req.query.id;
    request({
      method: 'GET',
      uri: `${url}/api/user${id != undefined ? `?id=${id}` : ''}`
    }, (err, resp, body) => err ?
      res.status(err.statusCode).send(err)
      : res.status(resp.statusCode).send(body)
    );
  },

  signin(req, res) {
    console.log(req.body);
    request({
      method: 'PUT',
      uri: `${url}/api/signin`,
      json: req.body
    }, (err, resp, body) => err ?
      res.status(err.statusCode).send(err)
      : (resp.statusCode === 404 || resp.statusCode === 401) ?
          res.status(resp.statusCode).send(JSON.stringify(body))
          : createSession(req, JSON.stringify({ 
              _id: body._id, 
              roles: body.roles 
            }), () => res.status(resp.statusCode).send(JSON.stringify({ 
                  _id: body._id, 
                  roles: body.roles 
                }))
            ));
  },
  signout(req, res) {
    destroySession(req, () => res.status(200).send('signed out'));
  },
  createUser(req, res) {
    request({
      method: 'POST',
      uri:`${url}/api/signin`,
      json: req.body
    }, (err, resp, body) => err ?
      res.status(err.statusCode).send(err)
      : (() => createSession(req, body,
          () => res.status(resp.statusCode).send(JSON.stringify(body)))
        )()
    );
  },
  editUser(req, res) {
    request({
      method: 'PUT',
      uri: `${url}/api/user`,
      json: req.body
    }, (err, resp, body) => err ?
      res.status(err.statusCode).send(err)
      : (resp.statusCode === 404 || resp.statusCode === 401) ?
          res.status(resp.statusCode).send(body)
          : (() => createSession(req, { _id: body },
              () => res.status(resp.statusCode).send(JSON.stringify(body))))()
    );
  },
  deleteUser(req, res) {
    request({
      method: 'POST',
      uri: `${url}/api/user`,
      json: req.body
    }, (err, resp, body) => err ? 
      res.status(err.statusCode).send(err)
      : destroySession(req, ()=> res.status(resp.statusCode).send(JSON.stringify(body)))
    );
  }
};
