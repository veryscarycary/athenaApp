import fetch from 'isomorphic-fetch';

const userUtils = {
  getUsers: () => {
    return fetch('http://localhost:3000/api/user', {
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
    })
  },
  getUser: (sessionId) => {
    return fetch(`http://localhost:3000/api/user/${sessionId}`, {
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
    })
  },
  editTicket: (ticketId) => {
    return fetch(`http://localhost:3000/api/ticket/${ticketId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: document.getElementById(`editTitle${ticketId}`).value,
        issuePreview: document.getElementById(`editIssue${ticketId}`).value.slice(0, 50),
        issue: document.getElementById(`editIssue${ticketId}`).value,
        customerId: document.getElementById(`editCustomerId${ticketId}`).value,
        product: document.getElementById(`editProduct${ticketId}`).value,
        solution: document.getElementById(`editSolution${ticketId}`).value,
        relatedArticles: document.getElementById(`editRelatedArticles${ticketId}`).value,
        relatedProducts: document.getElementById(`editRelatedProducts${ticketId}`).value,
        authorId: JSON.stringify(Math.floor(Math.random * 1000)),
        datesOpened: new Date(),
        checkedOut: true
      })
    })
    .then(function (response) {
      return response.json();
    })
    .catch(error => {
      console.log(error, 'There was an error while editing the ticket!');
    });
  },
  deleteTicket: (ticketId) => {
    return fetch(`http://localhost:3000/api/ticket/${ticketId}`, {
      method: 'DELETE'
    })
    .then(function (response) {
      return response.json();
    })
    .catch(error => {
      console.log(error, 'There was an error while deleting the ticket!');
    });
  }
};

export default userUtils;
