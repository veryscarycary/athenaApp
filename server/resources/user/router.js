const router = require('../../config/middleware.js').router();
const api = require('./controller.js');

router.route('/api/user')
  .get(api.getUser) //get all users
  .put(api.editUser) //edits user
  .post(api.deleteUser); //deletes account
router.route('/api/signin')
  .put(api.signin) //signs in, returns object with 2 properties
  .post(api.createUser) //creates user and sets session
  //the following do not interact with user service:
  .get(api.checkSession) //checks if authenticated
  .delete(api.signout); //signs out

module.exports = router;
