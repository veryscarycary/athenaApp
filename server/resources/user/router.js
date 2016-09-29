const router = require('../../config/middleware.js').router();
const api = require('./controller.js');

router.get('/api/user', api.getUser); //get all users
router.get('/api/user/:id', api.getUser); //get one user

router.route('/api/user/:username/:password')
  .get(api.signin) 
  .post(api.createUser) 
  .put(api.editUser)
  .delete(api.deleteUser);

module.exports = router;
