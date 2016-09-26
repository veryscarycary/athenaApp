const router = require('../../config/middleware.js').router();
const api = require('./controller.js');

router.route('/api/user/:username')
  .get(api.getUser);

router.route('/api/user/:username/:password')
  .get(api.signin)
  .post(api.createUser)
  .put(api.editUser)
  .delete(api.deleteUser);

module.exports = router;
