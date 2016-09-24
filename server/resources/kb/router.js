const router = require('express').Router();
const api = require('./controller.js');

//returns stub list based on search params
router.get('/api/kb/search', api.searchKb)

//returns single stub (id, title, issuePreview)
router.get('/api/kb/:kb/stub', api.getKbStub);

router.route('/api/kb/:kb')
  .get(api.getKb) //returns a KB
  .post(api.createKb)//creates a KB
  .put(api.editKb)//edits a KB
  .delete(api.deleteKb);//deletes a KB

module.exports = router;
