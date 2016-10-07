'use strict'

const router = require('../../config/middleware.js').router();

const api = require('./controller.js');

router.route('/api/search')
  .get(api.search);

module.exports = router;
