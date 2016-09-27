'use strict'
const router = require('../../config/middleware.js').router();
const api = require('./controller.js');

// //returns stub list based on search params from search service. also used to get individual stubs.
// router.get('/api/ticket/search', api.searchTicket); TODO: PENDING IMPLEMENTATION OF SEARCH SERVICE

router.route('/api/ticket')
  .get(api.getTicket) //gets all tickets
  .post(api.createTicket);//creates a ticket

router.route('/api/ticket/:id')
  .get(api.getTicket) //returns a ticket
  .put(api.editTicket)//edits a ticket
  .delete(api.deleteTicket);//deletes a ticket

module.exports = router;
