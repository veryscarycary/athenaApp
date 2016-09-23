const router = require('express').Router();
const api = require('./controller.js');

router.route('/api/kb/search')
  .get(api.searchKb)

router.route('/api/kb/:kb/stub')
  .get(api.getKbStub);

router.route('/api/kb/:kb')
  .get(api.getKb)
  .post(api.createKb)
  .put(api.editKb)
  .delete(api.deleteKb);

module.exports = router;
