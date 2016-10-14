'use strict'
const router = require('../../config/middleware.js').router();
const api = require('./controller.js');

router.route('/api/ticketMetrics')
  .get(api.getTicketRelations);

router.route('/api/ticketExport')
  .get(api.exportTickets);

router.route('/api/ticketRelationsExport')
  .get(api.exportTicketRelations);

router.route('/api/ticket')
  .get(api.getTicket) //gets all tickets
  .post(api.createTicket);//creates a ticket

router.route('/api/ticket/:id')
  .get(api.getTicket) //returns a ticket
  .put(api.editTicket)//edits a ticket
  .delete(api.deleteTicket);//deletes a ticket

module.exports = router;
