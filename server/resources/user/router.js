const router = require('../../config/middleware.js').router();
const api = require('./controller.js');

router.get('/api/user', api.getUser); //get all users
router.get('/api/user/:id', api.getUser); //get one user

router.route('/api/user/:username/:password')
  .get(api.signin) //signs user in. returns userid and sets session
  .post(api.createUser) //creates user and sets session
  .put(api.editUser) //doesnt work yet
  .delete(api.deleteUser); //doesnt work yet

module.exports = router;
