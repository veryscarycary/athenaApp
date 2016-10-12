'use strict'
const router = require('../../config/middleware.js').router();
const api = require('./controller.js');

router.route('/api/kbMetrics')
  .get(api.getArticleRelations);

router.route('/api/kb')
  .get(api.getArticle) //gets all KBs
  .post(api.createArticle);//creates a KB

router.route('/api/kb/:id')
  .get(api.getArticle) //returns a KB
  .put(api.editArticle)//edits a KB
  .delete(api.deleteArticle);//deletes a KB

module.exports = router;
