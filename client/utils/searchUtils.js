import fetch from 'isomorphic-fetch';

export default {
  search (options) {
    console.log('called!');
    var qs = `/api/search?
              term=${options.term}
              &archived=${options.archived}
              ${options.product ? '&product=${options.product}' : ''}
              ${options.dateStart ? '&dateStart=${options.dateStart}' : ''}
              ${options.dateEnd ? '&dateEnd=${options.dateEnd}' : ''}
              ${options.ticketId ? '&ticketId=${options.TicketId}' : ''}`
    return new Promise((resolve, reject) => fetch(qs))
      .then(response => response.json())
      .then(json => {
            resolve(json)
           })
      .catch(err => reject(err));
  },
}
