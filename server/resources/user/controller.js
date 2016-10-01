const mw = require('../../config/middleware.js');
const request = mw.request;
const url = mw.urls.user;

let createSession = (req, res, user, cb = null) =>
  req.session.regenerate(() => {
    req.session.user = user;
    cb && cb();
  });


function destroySession(req, res, cb = null) {
  req.session.destroy(() => cb && cb());
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
    console.log(req.session);
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
      : (resp.statusCode === 404 || resp.statusCode === 401) ? 
          res.status(resp.statusCode).send(body)
          : (() => { //create new session for new login
              body = JSON.parse(body);
              createSession(req, res, {
                _id: body
              }, () => res.status(resp.statusCode).send(body));
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
      : (() => { //create new session for new login
          createSession(req, res, {
            _id: body
          }, () => { //session helper callback
            console.log('after: ', req.session)
            res.status(resp.statusCode).send(body)
          });
        })()
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
