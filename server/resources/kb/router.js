'use strict'
const router = require('../../config/middleware.js').router();
const api = require('./controller.js');

// returns stub list based on search params from search service. also used to get individual stubs.
// router.get('/api/kb/search', api.searchKb); TODO: PENDING IMPLEMENTATION OF SEARCH SERVICE

router.route('/api/kb')
  .get(api.getKb)
  .post(api.createKb);//creates a KB

router.route('/api/kb/:id')
  .get(api.getKb) //returns a KB
  .put(api.editKb)//edits a KB
  .delete(api.deleteKb);//deletes a KB

module.exports = router;
