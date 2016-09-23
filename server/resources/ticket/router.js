const router = require('express').Router();
const api = require('./controller.js');
  
router.route('/api/ticket/search')
  .get(api.searchTickets)

router.route('/api/ticket/:ticket/stub')
  .get(api.getTicketStub);

router.route('/api/ticket/:ticket')
  .get(api.getTicket)
  .post(api.createTicket)
  .put(api.editTicket)
  .delete(api.deleteTicket);

module.exports = router;
