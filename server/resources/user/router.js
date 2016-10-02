const router = require('../../config/middleware.js').router();
const api = require('./controller.js');

router.get('/api/user', api.getUser); //get all users
router.get('/api/user/:id', api.getUser); //get one user

router.route('/api/session')
  .get(api.checkSession) //checks if authenticated
  .delete(api.signout); //signs out

//user signup and signin take usernames
router.route('api/signin/:username/:password')
  .get(api.signin) //signs in
  .post(api.createUser); //creates user and sets session

//edit and deletion actions only take ids
router.route('/api/user/:id/:password')
  .put(api.editUser) //edits user
  .delete(api.deleteUser); //deletes account

module.exports = router;
