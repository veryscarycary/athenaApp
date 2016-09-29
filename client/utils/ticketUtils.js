import fetch from 'isomorphic-fetch';

const ticketUtils = {
  getTickets: () => {
    return fetch('http://localhost:3000/api/ticket', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
      return response.json();
    })
    .catch(error => {
      console.log(error, 'There was an error getting the tickets!');
    });
  }
};

export default ticketUtils;
